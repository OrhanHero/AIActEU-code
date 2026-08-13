import sourcesData from "@/data/sources.json";

/**
 * Quellenverzeichnis der Ingestion-Pipeline.
 *
 * Bewusst OHNE eigene Kopie unter frontend/data/: der Alias "@/data/*" faellt
 * laut tsconfig.json auf "../data/*" zurueck, sodass hier dieselbe Datei gelesen
 * wird, die auch scripts/ingest.mjs und scripts/verify-sources.mjs pflegen.
 * Eine frueher vorhandene Zweitkopie war unbemerkt veraltet (24 statt 25
 * verifizierte Quellen, alter Golem-Name) - genau die Zahl, die auf der
 * Startseite als "Verifizierte RSS-Quellen" fest im Markup stand.
 */
export type Source = {
  name: string;
  displayName?: string;
  type: string;
  category: string;
  feedUrl: string;
  verified?: boolean;
  requiresTopicFilter?: boolean;
};

export const sources: Source[] = sourcesData.sources;

/** Anzahl der als erreichbar verifizierten Feeds - Kennzahl auf der Startseite. */
export const verifiedSourceCount: number = sources.filter((s) => s.verified).length;
