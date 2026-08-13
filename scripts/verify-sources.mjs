#!/usr/bin/env node
// Prüft jede Feed-URL aus data/sources.json per echtem HTTP-Request und
// schreibt das Ergebnis zurück (verified, httpStatus, lastCheckedAt).
// Nutzung: node scripts/verify-sources.mjs

import { loadSources, saveSources } from "./lib/sources.mjs";
import { fetchWithTimeout, mapWithConcurrency } from "./lib/http.mjs";

const CONCURRENCY = 8;

async function checkFeed(url) {
  try {
    const res = await fetchWithTimeout(url, {
      redirect: "follow",
      headers: { Accept: "application/rss+xml, application/xml, text/xml, */*" },
    });
    const text = await res.text();
    const looksLikeFeed = /<rss|<feed|<\?xml/i.test(text.slice(0, 2000));
    return { ok: res.ok && looksLikeFeed, status: res.status, looksLikeFeed };
  } catch (err) {
    return { ok: false, status: null, error: err.name === "AbortError" ? "timeout" : String(err.message ?? err) };
  }
}

async function main() {
  const data = await loadSources();
  let completed = 0;

  await mapWithConcurrency(data.sources, CONCURRENCY, async (source) => {
    const result = await checkFeed(source.feedUrl);
    source.verified = result.ok;
    source.lastCheckedAt = new Date().toISOString().slice(0, 10);
    if (!result.ok) {
      source.checkNote = result.error
        ? `Fehler: ${result.error}`
        : `HTTP ${result.status}${result.looksLikeFeed === false ? ", kein erkennbarer RSS/XML-Feed" : ""}`;
    } else {
      delete source.checkNote;
    }
    completed += 1;
    console.log(
      `[${completed}/${data.sources.length}] ${result.ok ? "OK" : `FEHLGESCHLAGEN (${source.checkNote})`} – ${source.name}`
    );
  });

  await saveSources(data);

  const failed = data.sources.filter((s) => !s.verified);
  console.log(`\n${data.sources.length - failed.length}/${data.sources.length} Feeds funktionieren.`);
  if (failed.length > 0) {
    console.log("Fehlgeschlagen:");
    for (const f of failed) console.log(`  - ${f.name}`);
  }
}

main();
