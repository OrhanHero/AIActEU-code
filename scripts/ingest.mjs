#!/usr/bin/env node
// RSS-Ingestion-Pipeline (Phase 2, siehe ARCHITECTURE.md "Ingestion-Pipeline").
//
// Liest data/sources.json, ruft jeden als erreichbar markierten Feed ab und
// normalisiert die Einträge in das Article-Format des Frontends
// (frontend/src/lib/articles.ts) - dieselbe Zwischen-Form, die auch
// backend/data/seed-articles.json für das Strapi-Seeding verwendet. Wenn
// ANTHROPIC_API_KEY gesetzt ist, wird pro Artikel eine kurze KI-
// Zusammenfassung erzeugt (aiGenerated: true). Ohne API-Key wird der vom
// Feed gelieferte Originaltext unverändert übernommen (aiGenerated: false) -
// keine Zusammenfassung ohne echte KI-Verarbeitung, um die Compliance-
// Kennzeichnung nicht zu verfälschen.
//
// Nutzung:
//   node scripts/ingest.mjs                  Ausgabe nach scripts/output/ingested.json
//   node scripts/ingest.mjs --limit 5         nur die ersten 5 erreichbaren Quellen
//   ANTHROPIC_API_KEY=... node scripts/ingest.mjs   mit KI-Zusammenfassung

import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Parser from "rss-parser";
import { loadSources } from "./lib/sources.mjs";
import { fetchWithTimeout, mapWithConcurrency, USER_AGENT } from "./lib/http.mjs";
import { passesTopicFilter } from "./lib/topic-filter.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "output");
const outputPath = path.join(outputDir, "ingested.json");

// Kategorien, die laut EDITORIAL_POLICY.md IMMER redaktionelle Prüfung
// durchlaufen müssen, bevor sie live gehen dürfen - Ingestion darf sie
// niemals automatisch als geprüft markieren.
const CRITICAL_CATEGORIES = new Set(["policy", "breaking-news"]);

// Begrenzte Parallelität statt komplett seriell (langsam bei vielen Quellen)
// oder komplett parallel (Thundering-Herd auf Feed-Server / Claude-API-Rate-Limits).
const SOURCE_CONCURRENCY = 5;
const ITEM_CONCURRENCY = 3;

const parser = new Parser({ timeout: 10_000, headers: { "User-Agent": USER_AGENT } });

function slugify(title) {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

async function summarizeWithClaude(title, rawText) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;

  const res = await fetchWithTimeout("https://api.anthropic.com/v1/messages", {
    method: "POST",
    timeoutMs: 20_000,
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-5",
      max_tokens: 200,
      messages: [
        {
          role: "user",
          content: `Fasse folgenden KI-News-Artikel in 1-2 sachlichen deutschen Sätzen zusammen (max. 240 Zeichen), ohne Meinung hinzuzufügen:\n\nTitel: ${title}\n\nText: ${rawText.slice(0, 4000)}`,
        },
      ],
    }),
  });

  if (!res.ok) {
    throw new Error(`Claude API Fehler: HTTP ${res.status} – ${await res.text()}`);
  }
  const data = await res.json();
  return data.content?.[0]?.text?.trim() ?? null;
}

function rawTextOf(item) {
  return item.contentSnippet || item.content || item.summary || "";
}

async function ingestItem(item, source) {
  const title = item.title?.trim();
  if (!title) return null;

  const rawText = rawTextOf(item);
  let summary = rawText.slice(0, 280);
  let aiGenerated = false;

  const aiSummary = await summarizeWithClaude(title, rawText).catch((err) => {
    console.error(`  Zusammenfassung fehlgeschlagen für "${title}": ${err.message}`);
    return null;
  });
  if (aiSummary) {
    summary = aiSummary;
    aiGenerated = true;
  }

  return {
    slug: slugify(title),
    title,
    summary: summary || "(Keine Zusammenfassung verfügbar – Originalquelle prüfen.)",
    categorySlug: source.category,
    tags: [],
    // source.name ist der interne Bezeichner aus data/sources.json und enthaelt
    // bei einigen Quellen redaktionelle Zusaetze ("... (allgemein, nach KI
    // filtern)"). Dieses Feld wird im Frontend als "Quelle: ..." direkt
    // angezeigt, deshalb hat displayName Vorrang, wo es gepflegt ist.
    sourceName: source.displayName || source.name,
    sourceUrl: item.link || source.feedUrl,
    publishedAt: item.isoDate ? item.isoDate.slice(0, 10) : new Date().toISOString().slice(0, 10),
    aiGenerated,
    // Automatisiert ingestierte Artikel sind per Definition noch von niemandem
    // redaktionell geprüft worden - das gilt unabhängig davon, ob eine KI-
    // Zusammenfassung erzeugt wurde oder der rohe Feed-Text übernommen wird.
    // humanReviewed wird ausschließlich im Strapi-Freigabeprozess auf true
    // gesetzt, siehe EDITORIAL_POLICY.md.
    humanReviewed: false,
    // Reine Metadaten für die Redaktion beim manuellen Review dieser JSON-Datei
    // vor dem Seeding (kein automatischer Consumer) - markiert Artikel aus
    // kritischen Kategorien, die EDITORIAL_POLICY.md zufolge vor Veröffentlichung
    // zwingend geprüft werden müssen.
    requiresEditorialReview: CRITICAL_CATEGORIES.has(source.category),
  };
}

async function ingestSource(source) {
  const feed = await parser.parseURL(source.feedUrl);

  // Bewusst VOR der Zusammenfassung gefiltert: die Entscheidung braucht nur den
  // Rohtext des Feeds, und so wird fuer verworfene Eintraege gar nicht erst die
  // Claude-API aufgerufen. Erst danach wird auf 10 Eintraege gekuerzt, sonst
  // wuerde ein allgemeiner Feed mit 10 themenfremden Meldungen an der Spitze
  // gar keine KI-Artikel mehr liefern.
  const relevant = feed.items.filter((item) =>
    passesTopicFilter({ title: item.title, summary: rawTextOf(item) }, source)
  );
  const skipped = feed.items.length - relevant.length;
  if (skipped > 0) {
    console.log(`  ${source.name}: ${skipped} Eintraege ohne KI-Bezug/Werbung uebersprungen`);
  }

  const items = relevant.slice(0, 10);
  const articles = await mapWithConcurrency(items, ITEM_CONCURRENCY, (item) => ingestItem(item, source));
  return articles.filter(Boolean);
}

async function main() {
  const limitArg = process.argv.indexOf("--limit");
  const limit = limitArg !== -1 ? Number(process.argv[limitArg + 1]) : Infinity;

  const { sources } = await loadSources();
  const candidates = sources.filter((s) => s.verified).slice(0, limit);

  if (candidates.length === 0) {
    console.log(
      "Keine als 'verified' markierten Quellen gefunden. Zuerst `node scripts/verify-sources.mjs` ausführen."
    );
    return;
  }

  const hasApiKey = Boolean(process.env.ANTHROPIC_API_KEY);
  console.log(
    `Ingestiere ${candidates.length} verifizierte Quellen ${hasApiKey ? "mit" : "ohne"} KI-Zusammenfassung (ANTHROPIC_API_KEY ${hasApiKey ? "gesetzt" : "nicht gesetzt"}).\n`
  );

  const perSourceArticles = await mapWithConcurrency(candidates, SOURCE_CONCURRENCY, async (source) => {
    try {
      const articles = await ingestSource(source);
      console.log(`${source.name}: ${articles.length} Artikel`);
      return articles;
    } catch (err) {
      console.log(`${source.name}: FEHLER (${err.message})`);
      return [];
    }
  });
  const allArticles = perSourceArticles.flat();

  await mkdir(outputDir, { recursive: true });
  await writeFile(outputPath, JSON.stringify(allArticles, null, 2) + "\n", "utf-8");
  console.log(`\n${allArticles.length} Artikel geschrieben nach ${path.relative(process.cwd(), outputPath)}`);

  const needsReview = allArticles.filter((a) => a.requiresEditorialReview);
  if (needsReview.length > 0) {
    console.log(
      `${needsReview.length} Artikel benötigen redaktionelle Prüfung vor Veröffentlichung (kritische Kategorien, siehe EDITORIAL_POLICY.md).`
    );
  }
}

// Explizites Beenden ist hier notwendig, nicht optional: laeuft ein Feed in
// den rss-parser-Timeout (z.B. LangChain Blog), lehnt parseURL zwar das
// Promise ab, laesst den zugehoerigen Socket aber offen. Nodes Event-Loop
// wird dadurch nie leer und der Prozess haengt nach getaner Arbeit endlos -
// im CI bis zum Job-Limit, obwohl ingested.json laengst geschrieben ist.
// Alle Schreibvorgaenge sind zu diesem Zeitpunkt awaited und damit auf Platte.
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Fehler bei der Ingestion:", err);
    process.exit(1);
  });
