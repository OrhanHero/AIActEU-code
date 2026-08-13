// Artificial Analysis Changelog – kuratierte Einträge (Stand: 11. Aug. 2026)
// Quelle: https://artificialanalysis.ai/de/changelog
// Diese Daten werden manuell aktualisiert; die primäre Quelle ist immer AA selbst.

export interface ChangelogEntry {
  date: string;       // ISO date string
  dateLabel: string;  // DE-formatiertes Anzeigedatum
  type: "article" | "model" | "update" | "benchmark";
  title: string;
  description?: string;
  url: string;
  intelligenceIndex?: number;
}

export const aaChangelog: ChangelogEntry[] = [
  // 11. Aug. 2026
  {
    date: "2026-08-11",
    dateLabel: "11. Aug. 2026",
    type: "article",
    title: "NVIDIA launches Nemotron 3.5 Lightning",
    description: "Efficient on-device scale intelligence",
    url: "https://artificialanalysis.ai/articles/nemotron-3-5-lightning-launch",
  },
  {
    date: "2026-08-11",
    dateLabel: "11. Aug. 2026",
    type: "model",
    title: "Nemotron 3.5 Lightning",
    intelligenceIndex: 24,
    url: "https://artificialanalysis.ai/de/models/nemotron-3-5-lightning",
  },

  // 10. Aug. 2026
  {
    date: "2026-08-10",
    dateLabel: "10. Aug. 2026",
    type: "article",
    title: "Muse Glimmer – Independent analysis and benchmarks",
    description: "Independent analysis and benchmarks of Meta's Muse Glimmer",
    url: "https://artificialanalysis.ai/articles/muse-glimmer",
  },
  {
    date: "2026-08-10",
    dateLabel: "10. Aug. 2026",
    type: "model",
    title: "Muse Glimmer (high)",
    intelligenceIndex: 35,
    url: "https://artificialanalysis.ai/de/models/muse-glimmer",
  },

  // 06. Aug. 2026
  {
    date: "2026-08-06",
    dateLabel: "6. Aug. 2026",
    type: "benchmark",
    title: "Intelligence Index v4.1.1 veröffentlicht",
    description: "𝜏³-Banking auf v1.0.1 umgestellt; Grader für HLE, AA-LCR und AA-Omniscience aktualisiert auf GPT-5.6 Luna (medium).",
    url: "https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-1-1",
  },

  // 05. Aug. 2026
  {
    date: "2026-08-05",
    dateLabel: "5. Aug. 2026",
    type: "article",
    title: "Muse Spark 1.2 – Unabhängige Analyse",
    description: "Independent analysis and benchmarks of Meta's Muse Spark 1.2",
    url: "https://artificialanalysis.ai/articles/muse-spark-1-2",
  },
  {
    date: "2026-08-05",
    dateLabel: "5. Aug. 2026",
    type: "model",
    title: "Qwen3.8 Max",
    intelligenceIndex: 58,
    url: "https://artificialanalysis.ai/de/models/qwen3-8-max",
  },
  {
    date: "2026-08-05",
    dateLabel: "5. Aug. 2026",
    type: "model",
    title: "Muse Spark 1.2 (xhigh)",
    intelligenceIndex: 57,
    url: "https://artificialanalysis.ai/de/models/muse-spark-1-2",
  },

  // 04. Aug. 2026
  {
    date: "2026-08-04",
    dateLabel: "4. Aug. 2026",
    type: "benchmark",
    title: "Endpoint Accuracy Index gestartet",
    description: "Misst, ob Anbieter-Endpunkte dieselbe Modellqualität wie die Referenz liefern – Same Model, Different Accuracy.",
    url: "https://artificialanalysis.ai/articles/endpoint-accuracy-index",
  },

  // 31. Juli 2026
  {
    date: "2026-07-31",
    dateLabel: "31. Juli 2026",
    type: "article",
    title: "DeepSeek V4 Flash 0731 – 10 Punkte über dem Vorgänger",
    description: "DeepSeek V4 Flash 0731 erzielt 50 auf dem Artificial Analysis Intelligence Index, 10 Punkte über dem vorherigen DeepSeek V4 Flash.",
    url: "https://artificialanalysis.ai/articles/deepseek-v4-flash-0731-scores-50-on-the-artificial-analysis-intelligence-index-10-points-above-previous-deepseek-v4-flash",
  },
  {
    date: "2026-07-31",
    dateLabel: "31. Juli 2026",
    type: "model",
    title: "DeepSeek V4 Flash 0731 (Reasoning, Max Effort)",
    intelligenceIndex: 52,
    url: "https://artificialanalysis.ai/de/models/deepseek-v4-flash",
  },

  // 30. Juli 2026
  {
    date: "2026-07-30",
    dateLabel: "30. Juli 2026",
    type: "article",
    title: "Inkling Small – fast so intelligent wie Inkling mit einem Drittel der Parameter",
    description: "Thinking Machines' neues Inkling Small erzielt 40 auf dem Artificial Analysis Intelligence Index – nah am Flaggschiff-Modell mit weit weniger Parametern.",
    url: "https://artificialanalysis.ai/articles/inkling-small-lands-within-a-point-of-inkling-on-the-artificial-analysis-intelligence-index-with-less-than-a-third-of-the-parameters",
  },
  {
    date: "2026-07-30",
    dateLabel: "30. Juli 2026",
    type: "model",
    title: "Inkling Small",
    intelligenceIndex: 41,
    url: "https://artificialanalysis.ai/de/models/inkling-small",
  },

  // 24. Juli 2026
  {
    date: "2026-07-24",
    dateLabel: "24. Juli 2026",
    type: "article",
    title: "Claude Opus 5: Neuer Spitzenreiter im agentischen Wissensarbeit-Benchmark",
    description: "Claude Opus 5 ist das neue führende Modell auf AA-Briefcase, unserem agentischen Wissensarbeit-Benchmark, und übertrifft Claude Fable 5 bei 20% geringeren Kosten pro Aufgabe.",
    url: "https://artificialanalysis.ai/articles/claude-opus-5-leader-agentic-knowledge-work",
  },
  {
    date: "2026-07-24",
    dateLabel: "24. Juli 2026",
    type: "model",
    title: "Claude Opus 5 (Adaptive Reasoning, Max Effort)",
    intelligenceIndex: 63,
    url: "https://artificialanalysis.ai/de/models/claude-opus-5",
  },

  // 17. Juli 2026
  {
    date: "2026-07-17",
    dateLabel: "17. Juli 2026",
    type: "article",
    title: "Vier Frontier-Launches in acht Tagen",
    description: "Grok 4.5, GPT-5.6, Muse Spark 1.1 und Kimi K3 – sechs Labs haben jetzt ein Modell über 50 auf dem Artificial Analysis Intelligence Index.",
    url: "https://artificialanalysis.ai/articles/four-frontier-launches-in-eight-days-six-labs-now-field-a-model-above-50-on-the-artificial-analysis-intelligence-index",
  },

  // 09. Juli 2026
  {
    date: "2026-07-09",
    dateLabel: "9. Juli 2026",
    type: "article",
    title: "GPT-5.6 Benchmarks: Intelligenz, Geschwindigkeit und Kosten",
    description: "GPT-5.6 Sol dicht hinter Claude Fable 5 im Intelligence Index – bei einem Drittel der Kosten; Führung im Coding Agent Index.",
    url: "https://artificialanalysis.ai/articles/gpt-5-6-has-landed",
  },
  {
    date: "2026-07-09",
    dateLabel: "9. Juli 2026",
    type: "model",
    title: "GPT-5.6 Sol (max)",
    intelligenceIndex: 61,
    url: "https://artificialanalysis.ai/de/models/gpt-5-6-sol",
  },

  // 08. Juli 2026
  {
    date: "2026-07-08",
    dateLabel: "8. Juli 2026",
    type: "article",
    title: "Grok 4.5 bringt SpaceXAI an die Intelligenz-Frontier",
    description: "SpaceXAI's Grok 4.5 erzielt 54 und belegt Platz vier auf dem Artificial Analysis Intelligence Index.",
    url: "https://artificialanalysis.ai/articles/grok-4-5-brings-spacexai-to-the-the-intelligence-frontier",
  },

  // 18. Juni 2026
  {
    date: "2026-06-18",
    dateLabel: "18. Juni 2026",
    type: "benchmark",
    title: "AA-Briefcase angekündigt: Frontier Knowledge Work Evaluation",
    description: "Neuer Benchmark für realistische Wissensarbeitsaufgaben in komplexen Projekten – erstellt von Branchenexperten.",
    url: "https://artificialanalysis.ai/articles/aa-briefcase",
  },
];

// Hilfsfunktionen
export function getLatestChangelog(n = 5): ChangelogEntry[] {
  return aaChangelog.slice(0, n);
}

export function getChangelogByType(type: ChangelogEntry["type"]): ChangelogEntry[] {
  return aaChangelog.filter((e) => e.type === type);
}
