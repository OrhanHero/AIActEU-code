export type Category = {
  slug: string;
  emoji: string;
  title: string;
  description: string;
};

// 7 Hauptkategorien lt. PROJEKTPLAN.md, erweitert um "Hardware & Silicon" lt.
// docs/📋 AIActEU.docx (Master-Projektplan v2, Abschnitt 2.3/2.4 "Hardware, Silicon &
// Data Centers" / "Desktop AI Rigs, Dev Kits & Workstations"), sowie 2026-08-03 um vier
// weitere Kategorien (Nachhaltigkeit, Applications, Community, Safety) ergänzt.
export const categories: Category[] = [
  {
    slug: "breaking-news",
    emoji: "📰",
    title: "Breaking News & Weekly Roundups",
    description: "Globale KI-News (24h) und das deutsche KI-Ökosystem.",
  },
  {
    slug: "technisch",
    emoji: "🧠",
    title: "Technische Kategorien",
    description: "LLMs, RAG, Agentic AI, Multimodal, Edge AI, Dev Tools, Fine-Tuning.",
  },
  {
    slug: "research",
    emoji: "🔬",
    title: "Research & Academic",
    description: "Paper-Tracking, Benchmarks, AI-Safety- und Interpretability-Forschung.",
  },
  {
    slug: "business",
    emoji: "💼",
    title: "Business & Market",
    description: "Startup-Ökosystem, Marktanalysen, Jobs & Karriere.",
  },
  {
    slug: "policy",
    emoji: "⚖️",
    title: "Policy, Regulation & Ethics",
    description: "EU AI Act, Datenschutz, Ethical AI, gesellschaftliche Auswirkungen.",
  },
  {
    slug: "education",
    emoji: "🎓",
    title: "Education & Learning",
    description: "Tutorials, Zertifizierungen, Community-Learning.",
  },
  {
    slug: "tools",
    emoji: "🛠️",
    title: "Tools & Resources",
    description: "Developer-Tools, Model-Repositories, Benchmark-Tools.",
  },
  {
    slug: "hardware",
    emoji: "🖥️",
    title: "Hardware & Silicon",
    description:
      "Chips, Supercomputing & Data Centers: NVIDIA, AMD, Intel, EU-Chip-Supply-Chain, Desktop AI Rigs.",
  },
  {
    slug: "nachhaltigkeit",
    emoji: "🌱",
    title: "Nachhaltigkeit & Umwelt-Impact von KI",
    description:
      "Energie-, Wasser- und CO2-Fußabdruck von KI-Training und -Betrieb, Green AI, Carbon Leakage, EU-Regulierung zu Ressourcenverbrauch.",
  },
  {
    slug: "applications",
    emoji: "🧩",
    title: "Applications & Use Cases",
    description:
      "Branchenlösungen, KI im Alltag, Enterprise-Integration, Creative AI & Consumer Apps.",
  },
  {
    slug: "community",
    emoji: "🤝",
    title: "Community, Events & Ecosystem",
    description:
      "Konferenzen, Hackathons, Meetups, Open-Source-Initiativen & Netzwerke in DACH.",
  },
  {
    slug: "safety",
    emoji: "🛡️",
    title: "Safety, Alignment & Governance",
    description:
      "Red Teaming, Model Evaluation, AI Risk Management, Bias-Mitigation & Alignment-Forschung.",
  },
];
