export type Tutorial = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  level: "Einsteiger" | "Fortgeschritten";
  updatedAt: string; // ISO-Datum
};

// Registry für die MDX-Tutorial-Seiten unter app/tutorials/[slug]/page.mdx.
// Lt. docs/📋 AIActEU.docx Abschnitt 2.5 "Tutorials & Local AI Setup Guides".
export const tutorials: Tutorial[] = [
  {
    slug: "ollama-mastery",
    title: "Ollama Mastery: Lokale LLMs in 15 Minuten",
    summary:
      "Installation, Modelfiles und die REST-API von Ollama – der einfachste Einstieg, um Sprachmodelle komplett offline auf eigener Hardware laufen zu lassen.",
    tags: ["Ollama", "Lokale LLMs", "Einsteiger"],
    level: "Einsteiger",
    updatedAt: "2026-08-02",
  },
  {
    slug: "lokale-chat-oberflaechen",
    title: "Open WebUI, LM Studio & Jan.ai: Lokale ChatGPT-Alternativen",
    summary:
      "Drei Wege zu einer grafischen Oberfläche für lokale Modelle – von der Docker-Installation bis zur reinen Desktop-App ohne Kommandozeile.",
    tags: ["Open WebUI", "LM Studio", "Jan.ai"],
    level: "Einsteiger",
    updatedAt: "2026-07-30",
  },
  {
    slug: "private-rag-eigene-dokumente",
    title: "Private RAG: Eigene Dokumente durchsuchbar machen",
    summary:
      "Mit Ollama, Qdrant und AnythingLLM oder Dify eine Dokumentensuche aufbauen, bei der keine Daten die eigene Infrastruktur verlassen.",
    tags: ["RAG", "Qdrant", "Datenschutz"],
    level: "Fortgeschritten",
    updatedAt: "2026-07-27",
  },
  {
    slug: "continue-dev-editor-integration",
    title: "Continue.dev: Lokale LLMs direkt im Editor",
    summary:
      "VS Code und JetBrains an ein lokal laufendes Modell anbinden – Code-Vervollständigung und Chat ohne Cloud-API.",
    tags: ["Continue.dev", "VS Code", "Developer Tools"],
    level: "Einsteiger",
    updatedAt: "2026-07-22",
  },
  {
    slug: "comfyui-automatic1111-einstieg",
    title: "ComfyUI & Automatic1111: Bildgenerierung lokal betreiben",
    summary:
      "Grundlagen für den lokalen Betrieb von Stable Diffusion und FLUX.1 – Node-basiert mit ComfyUI oder klassisch mit Automatic1111.",
    tags: ["ComfyUI", "Stable Diffusion", "Multimodal"],
    level: "Fortgeschritten",
    updatedAt: "2026-07-19",
  },
  {
    slug: "faster-whisper-offline-transkription",
    title: "Faster-Whisper: Offline-Transkription einrichten",
    summary:
      "Audio- und Video-Transkription komplett offline mit Faster-Whisper – deutlich schneller als das Referenz-Whisper-Modell.",
    tags: ["Faster-Whisper", "Audio", "Offline"],
    level: "Einsteiger",
    updatedAt: "2026-07-17",
  },
];

export function getTutorial(slug: string): Tutorial | undefined {
  return tutorials.find((t) => t.slug === slug);
}
