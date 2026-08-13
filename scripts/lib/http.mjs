// Gemeinsame HTTP-Hilfsfunktionen für die Ingestion-Skripte (verify-sources.mjs, ingest.mjs).
export const USER_AGENT = "AIActEU-Ingestion/1.0 (+https://github.com/OrhanHero/AIActEU)";
export const DEFAULT_TIMEOUT_MS = 10_000;

export async function fetchWithTimeout(url, { timeoutMs = DEFAULT_TIMEOUT_MS, headers, ...init } = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
      headers: { "User-Agent": USER_AGENT, ...headers },
    });
  } finally {
    clearTimeout(timeout);
  }
}

// Verarbeitet `items` mit maximal `limit` gleichzeitigen `fn`-Aufrufen, statt
// alles seriell (langsam) oder komplett parallel (Thundering-Herd/Rate-Limits)
// abzuarbeiten.
export async function mapWithConcurrency(items, limit, fn) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const current = nextIndex++;
      results[current] = await fn(items[current], current);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}
