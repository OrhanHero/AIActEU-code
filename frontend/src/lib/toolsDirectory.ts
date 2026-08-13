import toolsDirectoryData from "@/data/tools-directory.json";
import benchmarksData from "@/data/benchmarks.json";

export type ProviderDomain = {
  slug: string;
  emoji: string;
  title: string;
  description: string;
};

export type Provider = {
  name: string;
  url: string;
  domain: string;
  description: string;
  /** Kurzer Sicherheits-/Vorsicht-Hinweis, als ⚠️-Tooltip im ProviderCard angezeigt statt im Fließtext. */
  warning?: string;
};

export type Benchmark = {
  name: string;
  url: string;
  organization: string;
  description: string;
  misst: string;
  updateFrequency: string;
};

export const providerDomains: ProviderDomain[] = toolsDirectoryData.domains;
export const providers: Provider[] = toolsDirectoryData.providers;
export const benchmarks: Benchmark[] = benchmarksData.benchmarks;

export function getProvidersByDomain(domainSlug: string): Provider[] {
  return providers.filter((p) => p.domain === domainSlug);
}

export function getProviderDomain(domainSlug: string): ProviderDomain | undefined {
  return providerDomains.find((d) => d.slug === domainSlug);
}

// Ordnet jede Verzeichnis-Domäne genau einer Artikel-Kategorie (categories.ts) zu, damit
// Kategorie-Seiten passende Anbieter aus /verzeichnis anzeigen können, statt bei wenigen
// Artikeln leer zu wirken. "breaking-news" bleibt bewusst ohne Zuordnung (Themenmix statt
// Tool-Bereich). "technisch" bündelt mehrere Domänen lt. eigener Beschreibung (LLMs, RAG,
// Agentic AI, Multimodal, Edge AI); "tools" bekommt dev-tools-infra, damit die Domäne nicht
// doppelt auf zwei Kategorie-Seiten auftaucht.
export const categoryProviderDomains: Record<string, string[]> = {
  technisch: ["llm-labs", "rag-vector-db", "agentic-frameworks", "multimodal", "edge-local-ai"],
  research: ["research"],
  business: ["business"],
  policy: ["policy"],
  education: ["education"],
  tools: ["dev-tools-infra"],
  hardware: ["hardware-silicon"],
  nachhaltigkeit: ["nachhaltigkeit"],
  applications: ["applications"],
  community: ["community"],
  safety: ["safety"],
};
