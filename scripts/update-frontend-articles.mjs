import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ingestedPath = path.join(__dirname, "output", "ingested.json");
const articlesTsPath = path.join(__dirname, "..", "frontend", "src", "lib", "articles.ts");
const featuredPath = path.join(__dirname, "..", "data", "featured.json");

const validCategorySlugs = new Set([
  "breaking-news",
  "technisch",
  "research",
  "business",
  "policy",
  "education",
  "tools",
  "hardware",
  "nachhaltigkeit",
  "applications",
  "community",
  "safety"
]);

function deriveTags(title, summary, sourceName) {
  const text = `${title} ${summary} ${sourceName}`.toLowerCase();
  const tags = new Set();

  if (text.includes("openai") || text.includes("chatgpt") || text.includes("gpt")) tags.add("OpenAI");
  if (text.includes("deepmind") || text.includes("gemini") || text.includes("google")) tags.add("Google DeepMind");
  if (text.includes("anthropic") || text.includes("claude")) tags.add("Anthropic");
  if (text.includes("meta") || text.includes("llama")) tags.add("Meta AI");
  if (text.includes("nvidia") || text.includes("blackwell") || text.includes("gpu") || text.includes("cuda")) tags.add("NVIDIA");
  if (text.includes("hugging face") || text.includes("huggingface")) tags.add("Hugging Face");
  if (text.includes("open source") || text.includes("open-source") || text.includes("open weight")) tags.add("Open Source");
  if (text.includes("rag") || text.includes("vector") || text.includes("retrieval")) tags.add("RAG");
  if (text.includes("agent") || text.includes("agentic")) tags.add("Agentic AI");
  if (text.includes("eu") || text.includes("ai act") || text.includes("policy") || text.includes("regulation")) tags.add("EU AI Act");
  if (text.includes("security") || text.includes("cyber") || text.includes("safety") || text.includes("eval")) tags.add("AI Safety");
  if (text.includes("hardware") || text.includes("chip") || text.includes("intel") || text.includes("amd")) tags.add("Hardware");
  if (text.includes("deutschland") || text.includes("german") || text.includes("berlin") || text.includes("münchen")) tags.add("Deutschland");

  if (tags.size === 0) {
    tags.add("KI News");
  }

  return Array.from(tags).slice(0, 3);
}

// Vergleichsform fuer URLs, damit derselbe Artikel aus data/featured.json und
// aus dem RSS-Feed als identisch erkannt wird (Protokoll, www, Query-Parameter
// und abschliessender Slash unterscheiden sich je nach Quelle).
function normalizeUrl(url) {
  if (!url) return "";
  try {
    const u = new URL(url);
    return `${u.hostname.replace(/^www\./, "")}${u.pathname.replace(/\/+$/, "")}`.toLowerCase();
  } catch {
    return url.trim().toLowerCase();
  }
}

// Redaktionell gesetzte Hauptstories. Fehlt oder bricht die Datei, laeuft die
// Generierung rein automatisch weiter - eine kaputte Kurationsdatei darf nie
// den gesamten News-Stand der Seite blockieren.
async function loadFeatured() {
  try {
    const parsed = JSON.parse(await readFile(featuredPath, "utf-8"));
    const entries = Array.isArray(parsed.featured) ? parsed.featured : [];
    return entries.filter((entry) => entry && entry.title && entry.sourceUrl);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("Hinweis: data/featured.json nicht vorhanden - keine kuratierten Hauptstories.");
    } else {
      console.error(`Warnung: data/featured.json unlesbar (${err.message}) - fahre ohne Kuration fort.`);
    }
    return [];
  }
}

async function main() {
  const rawIngested = await readFile(ingestedPath, "utf-8");
  const ingested = JSON.parse(rawIngested);

  console.log(`Gelesen: ${ingested.length} ingestierte Artikel.`);

  const featuredRaw = await loadFeatured();
  const seenSlugs = new Set();
  const processedArticles = [];

function cleanTitle(title) {
  if (!title) return "";
  return title
    .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E6}-\u{1F1FF}]/gu, "")
    .replace(/\s+/g, " ")
    .replace(/\s*,/g, ",")
    .trim();
}

  // Kuratierte Hauptstories zuerst aufbauen: ihre Slugs und URLs blockieren
  // anschliessend die RSS-Duplikate, damit derselbe Artikel nicht zweimal
  // erscheint - einmal redaktionell aufbereitet, einmal als roher Feed-Text.
  const featuredArticles = featuredRaw.map((entry) => {
    const slug = entry.slug || "featured-" + Math.random().toString(36).substring(2, 8);
    seenSlugs.add(slug);
    return {
      ...entry,
      slug,
      title: cleanTitle(entry.title),
      categorySlug: validCategorySlugs.has(entry.categorySlug) ? entry.categorySlug : "breaking-news",
      tags: entry.tags?.length ? entry.tags : deriveTags(entry.title, entry.summary, entry.sourceName),
      sourceName: entry.sourceName || "KI Redaktion",
      aiGenerated: entry.aiGenerated ?? false,
      humanReviewed: entry.humanReviewed ?? true,
      breaking: true,
      editorsPick: true,
    };
  });
  const featuredUrls = new Set(featuredArticles.map((a) => normalizeUrl(a.sourceUrl)));

  for (const item of ingested) {
    if (!item.title || !item.sourceUrl) continue;
    if (featuredUrls.has(normalizeUrl(item.sourceUrl))) continue;

    let slug = item.slug || "news-" + Math.random().toString(36).substring(2, 8);
    let originalSlug = slug;
    let counter = 1;
    while (seenSlugs.has(slug)) {
      slug = `${originalSlug}-${counter++}`;
    }
    seenSlugs.add(slug);

    let categorySlug = validCategorySlugs.has(item.categorySlug) ? item.categorySlug : "technisch";
    const tags = item.tags && item.tags.length > 0 ? item.tags : deriveTags(item.title, item.summary, item.sourceName);

    const cleanedTitle = cleanTitle(item.title);

    const article = {
      slug,
      title: cleanedTitle,
      summary: item.summary,
      categorySlug,
      tags,
      sourceName: item.sourceName || "KI Redaktion",
      sourceUrl: item.sourceUrl,
      publishedAt: item.publishedAt || "2026-08-08",
      aiGenerated: item.aiGenerated ?? true,
      humanReviewed: item.humanReviewed ?? true,
    };

    processedArticles.push(article);
  }

  // Anmerkung: Die frueher hier stehende Sonderbehandlung fuer die Slugs
  // "e-recht24" und "muse-glimmer" ist entfallen. Sie war kein gueltiger
  // Comparator (fuer a==b lieferte sie -1 statt 0, und sie war weder
  // antisymmetrisch noch transitiv), und die Pin-Funktion uebernimmt jetzt
  // data/featured.json - ohne fest verdrahtete Slugs im Code.
  processedArticles.sort((a, b) => {
    if (a.publishedAt === b.publishedAt) {
      // Prioritize Heise, eRecht24 and major deutsche News over raw arxiv preprints for hero spot
      const aScore = (a.sourceName.includes("Heise") || a.sourceName.includes("eRecht24")) ? 10 : a.sourceName.includes("arXiv") ? 1 : 5;
      const bScore = (b.sourceName.includes("Heise") || b.sourceName.includes("eRecht24")) ? 10 : b.sourceName.includes("arXiv") ? 1 : 5;
      return bScore - aScore;
    }
    return a.publishedAt < b.publishedAt ? 1 : -1;
  });

  // Kuratierte Stories sind bereits als breaking markiert; automatisch wird nur
  // noch aufgefuellt, damit die Eilmeldungen-Leiste unveraendert vier Eintraege
  // fuehrt und die Kuration sie nicht verdraengt.
  const autoBreakingCount = Math.max(0, 4 - featuredArticles.length);
  for (let i = 0; i < processedArticles.length; i++) {
    if (i < autoBreakingCount) {
      processedArticles[i].breaking = true;
    }
    if (i === 1 || i === 5 || i === 12) {
      processedArticles[i].editorsPick = true;
      processedArticles[i].editorsNote = "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung.";
    }
  }

  // featuredArticles zuerst: die Hero-Sektion der Startseite liest
  // getBreakingArticles()[0], also den ersten Eintrag dieses Arrays.
  const finalArticles = [...featuredArticles, ...processedArticles].slice(0, 60);

  const fileContent = `import { categories, type Category } from "./categories";

export type Article = {
  slug: string;
  title: string;
  summary: string;
  categorySlug: Category["slug"];
  tags: string[];
  sourceName: string;
  sourceUrl: string;
  publishedAt: string; // ISO-Datum
  aiGenerated: boolean;
  humanReviewed: boolean;
  breaking?: boolean;
  editorsPick?: boolean;
  editorsNote?: string;
  // Optionale Primaerquelle hinter einer Meldung, z.B. das zugehoerige Paper -
  // gesetzt ueber data/featured.json.
  studyUrl?: string;
  studyLabel?: string;
  // Weiterfuehrendes Quellen-Dossier einer kuratierten Hauptstory. Die Gruppe
  // steuert Reihenfolge und Ueberschrift der Darstellung in der Hero-Sektion.
  relatedLinks?: RelatedLink[];
};

export type RelatedLinkGroup = "berichterstattung" | "community" | "hintergrund";

export type RelatedLink = {
  group: RelatedLinkGroup;
  sourceName: string;
  label: string;
  url: string;
};

// Automatisch aktualisierte KI-News Artikel aus den verifizierten RSS-Quellen
// plus die redaktionell kuratierten Hauptstories aus data/featured.json
export const articles: Article[] = ${JSON.stringify(finalArticles, null, 2)};

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles
    .filter((a) => a.categorySlug === categorySlug)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBreakingArticles(): Article[] {
  return articles.filter((a) => a.breaking);
}

export function getEditorsPicks(): Article[] {
  return articles.filter((a) => a.editorsPick);
}

export function getLatestArticles(limit = 6): Article[] {
  return [...articles]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}

export function getCategoryForArticle(article: Article) {
  return categories.find((c) => c.slug === article.categorySlug);
}

export function getTopTags(articlesToCount: Article[], limit = Infinity): string[] {
  const counts = new Map<string, number>();
  for (const article of articlesToCount) {
    for (const tag of article.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag]) => tag);
}
`;

  await writeFile(articlesTsPath, fileContent, "utf-8");

  const now = new Date();
  const lastUpdatedData = {
    iso: now.toISOString(),
    formattedDE: `${now.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "Europe/Berlin" })}, ${now.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin" })} Uhr`,
    formattedEN: `${now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "Europe/Berlin" })}, ${now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin" })}`
  };
  const lastUpdatedPath = path.join(__dirname, "..", "frontend", "src", "lib", "lastUpdated.json");
  await writeFile(lastUpdatedPath, JSON.stringify(lastUpdatedData, null, 2), "utf-8");

  console.log(`✅ ${finalArticles.length} frische Artikel erfolgreich in frontend/src/lib/articles.ts & lastUpdated.json aktualisiert.`);
}

main().catch(err => {
  console.error("Fehler beim Aktualisieren der Artikel:", err);
  process.exit(1);
});
