// Gemeinsamer Lese-/Schreibzugriff auf data/sources.json für die
// Ingestion-Skripte (verify-sources.mjs, ingest.mjs).
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const sourcesPath = path.join(__dirname, "..", "..", "data", "sources.json");

export async function loadSources() {
  const raw = await readFile(sourcesPath, "utf-8");
  return JSON.parse(raw);
}

export async function saveSources(data) {
  await writeFile(sourcesPath, JSON.stringify(data, null, 2) + "\n", "utf-8");
}
