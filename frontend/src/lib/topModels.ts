export type TopModel = {
  rank: number;
  name: string;
  provider: string;
  license: "Proprietär" | "Open-Weight" | "Open-Source";
  cutoff: string; // Zeitpunkt des Trainingsendes / Datenstichtag
  benchmarkHighlights: string;
  dataSources: {
    web: string;
    books: string;
    code: string;
    media: string;
  };
  strengths: string;
};

export const topModels: TopModel[] = [
  {
    rank: 1,
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic (USA)",
    license: "Proprietär",
    cutoff: "April 2024",
    benchmarkHighlights: "SWE-bench Verified #1, GPQA, MMLU-Pro",
    dataSources: {
      web: "Bereinigter public Web-Crawl (Common Crawl), Wikipedia, strukturierte Qualitäts-Medien (unter Ausschluss von Copyright-Verletzungen & Hate Speech).",
      books: "Lizenzierte wissenschaftliche Fachbibliotheken, arXiv-Paper, akademische Textdatenbanken.",
      code: "Ausgewählte GitHub-Repositories, StackOverflow sowie synthetisch generierter Reasoning-Code.",
      media: "Multimodale Bild- & Text-Paare (Diagramme, Dokument-Scans, Screenshots mit OCR-Beschriftung). Keine Roh-Audio/Video-Dateien.",
    },
    strengths: "Führend bei autonomer Code-Erstellung (Coding Agents), nuancierter Textanalyse und komplexem Reasoning.",
  },
  {
    rank: 2,
    name: "OpenAI o1 / o3-mini",
    provider: "OpenAI (USA)",
    license: "Proprietär",
    cutoff: "Oktober 2024 (o3-mini) / Oktober 2023 (o1)",
    benchmarkHighlights: "AIME 2024 Olympiade-Mathe #1, GPQA, Codeforces",
    dataSources: {
      web: "Kuratierter Qualitäts-Crawl des öffentlichen Internets, Fachforen und Wikipedia.",
      books: "Spezialisierte Fachliteratur aus Mathematik, Physik, Chemie und Informatik.",
      code: "Algorithmen-Kataloge, Programmier-Wettbewerbe + Großflächiges Reinforcement Learning (RL) auf synthetischen Denkpfaden (Chain-of-Thought).",
      media: "Multimodale Bild- & Textanalyse für komplexe visuelle Logikaufgaben.",
    },
    strengths: "Durchbruch bei wissenschaftlichem Reasoning, Olympiade-Mathematik und komplexer Problemlösung durch Test-Time Compute.",
  },
  {
    rank: 3,
    name: "GPT-4o",
    provider: "OpenAI (USA)",
    license: "Proprietär",
    cutoff: "Oktober 2023 (mit Live-Websuch-Verknüpfung)",
    benchmarkHighlights: "LMSYS Chatbot Arena ELO #1 (~1286), Vision MMMU",
    dataSources: {
      web: "Massiver Web-Crawl + Exklusive Medienpartnerschaften (u. a. Axel Springer, Le Monde, Reddit, Financial Times).",
      books: "Lizenzierte E-Book-Archive, wissenschaftliche Publikationsdatenbanken.",
      code: "Öffentlicher GitHub-Quellcode aller gängigen Sprachen, Entwickler-Plattformen.",
      media: "Nativ omnimodal trainiert auf direktem Audio-Stream, Bildern, Video-Frames und Texten.",
    },
    strengths: "Sehr hohe Sprachflüssigkeit, schnelle Echtzeit-Omnimodalität (Audio/Video/Vision) und starke Allgemeinbildung.",
  },
  {
    rank: 4,
    name: "DeepSeek-R1 / DeepSeek-V3",
    provider: "DeepSeek (China)",
    license: "Open-Weight",
    cutoff: "Juli 2024",
    benchmarkHighlights: "MATH (97.3%) #1, AIME 2024, SWE-bench",
    dataSources: {
      web: "Multilingualer Web-Crawl (Chinesisch, Englisch, Europäische Sprachen), Wikipedia, Web-Foren.",
      books: "Mathematische Lehrbücher, akademische Arbeiten (arXiv), wissenschaftliche Artikel.",
      code: "GitHub-Repositories, Wettbewerbs-Coding (Codeforces, LeetCode) + Massives synthetisches Reinforcement Learning auf Denkpfaden.",
      media: "Rein text- & logikbasiertes Kernmodell im R1; Janus-Pro Varianten nutzen Bild-Text-Paare.",
    },
    strengths: "Disruptive Effizienz & Leistung in Mathematik und Logik bei 10-fach geringeren Trainingskosten als US-Konkurrenten.",
  },
  {
    rank: 5,
    name: "Gemini 1.5 Pro",
    provider: "Google DeepMind (USA)",
    license: "Proprietär",
    cutoff: "November 2023",
    benchmarkHighlights: "2 Mio. Tokens Kontext #1, MATH, Long-Context Needle",
    dataSources: {
      web: "Proprietärer Google Web-Index, YouTube-Transkripte, Wikipedia, mehrsprachige News-Archive.",
      books: "Google Books Digitalisierungsdatenbanken, wissenschaftliche Fachaufsätze.",
      code: "Öffentlicher Open-Source-Code sowie interne, bereinigte Google-Repositories.",
      media: "Nativ multimodal auf Bild-Serien, Audio (bis 9.5 Std.), Video-Dateien und umfangreichen PDFs.",
    },
    strengths: "Unerreichtes Kontextfenster (2.000.000 Tokens), hervorragende Audio/Video-Verarbeitung und Dokumenten-Analyse.",
  },
  {
    rank: 6,
    name: "Llama 3.1 405B",
    provider: "Meta AI (USA)",
    license: "Open-Weight",
    cutoff: "März 2024",
    benchmarkHighlights: "Open-Weight Leaderboard #1, MMLU, GSM8K",
    dataSources: {
      web: "Über 15 Billionen Tokens aus öffentlich zugänglichem Web (Common Crawl), Wikipedia, >30 Sprachen.",
      books: "Gefilterte Buch-Datensätze, Open-Access Wissenschaftsdatenbanken.",
      code: "Über 4 Billionen Tokens an Quellcode (Python, C++, Java, Rust, SQL aus GitHub).",
      media: "Textbasiertes Kernmodell; Llama 3.2 Vision nutzt lizenzierte Bild-Text-Synthesen.",
    },
    strengths: "Das leistungsfähigste frei verfügbare Modell der Welt mit 405 Milliarden Parametern für lokales Hosting & Fine-Tuning.",
  },
  {
    rank: 7,
    name: "Qwen 2.5 72B / Qwen 2.5 Max",
    provider: "Alibaba Cloud (China)",
    license: "Open-Weight",
    cutoff: "September 2024",
    benchmarkHighlights: "MMLU-Pro, HumanEval, Multilingual Coding",
    dataSources: {
      web: "18 Billionen Tokens aus weltweiten Web-Crawls (Starke Abdeckung Asien, Nordamerika & EU), Wikipedia.",
      books: "Akademische Aufsätze, Lexika, technische Lehrbücher.",
      code: "GitHub, StackOverflow, synthetische Datensätze für über 29 Programmiersprachen.",
      media: "Text & Code in 2.5; Qwen 2.5-VL verarbeitet hochauflösende Bilder und Videos.",
    },
    strengths: "Herausragend in Programmentwicklung, strukturierter Datenverarbeitung und asiatisch-europäischer Mehrsprachigkeit.",
  },
  {
    rank: 8,
    name: "Mistral Large 2",
    provider: "Mistral AI (Frankreich / EU)",
    license: "Proprietär",
    cutoff: "Juli 2024",
    benchmarkHighlights: "Top EU Flagship Model, CodeGen, Function Calling",
    dataSources: {
      web: "Multilingualer Web-Crawl mit Fokus auf EU-Sprachen (Deutsch, Französisch, Spanisch, Italienisch, Englisch).",
      books: "Europäische wissenschaftliche Datenbanken, Gesetzestexte, Fachliteratur.",
      code: "GitHub Repositories (C++, Python, Java, Rust, TypeScript, SQL).",
      media: "Text- & Code-Fokus; Pixtral Large erweitert um hochauflösendes Multimodal Image Understanding.",
    },
    strengths: "Spitzenmodell aus der Europäischen Union mit 123B Parametern, starkem Fokus auf DSGVO-Alignment und multilingualer Präzision.",
  },
  {
    rank: 9,
    name: "Claude 3 Opus",
    provider: "Anthropic (USA)",
    license: "Proprietär",
    cutoff: "August 2023",
    benchmarkHighlights: "GPQA, Complex Reasoning, Long-form Writing",
    dataSources: {
      web: "Gefiltertes öffentliches Web-Archiv, Enzyklopädien, Qualitäts-Online-Medien.",
      books: "Lizenzierte wissenschaftliche Publikationen, Fachbücher, Forschungsarbeiten.",
      code: "GitHub, technische Dokumentationen.",
      media: "Nativ multimodales Bild- & Textverständnis (Diagramme, Flussdiagramme, PDFs).",
    },
    strengths: "Sehr tiefe analytische Textqualität, komplexes akademisches Reasoning und hohe Zuverlässigkeit bei langen Analysen.",
  },
  {
    rank: 10,
    name: "Grok-2 / Grok-2 Vision",
    provider: "xAI (USA)",
    license: "Proprietär",
    cutoff: "August 2024 (mit X-Echtzeit-Feed)",
    benchmarkHighlights: "LMSYS Top 5, Vision Benchmarks, Realtime News",
    dataSources: {
      web: "Öffentlicher Web-Crawl, Nachrichtenartikel, Wikipedia + Echtzeit-Datenstrom der X-Plattform.",
      books: "Digitalisierte Lehrbücher, wissenschaftliche Online-Bibliotheken.",
      code: "Code-Repositories aus GitHub, technische Entwicklerforen.",
      media: "Grok-2 Vision verarbeitet hochauflösende Bild- und Grafikdaten.",
    },
    strengths: "Integration von Echtzeit-Trends und starkes Abschneiden in den Top 5 der Chatbot Arena.",
  },
];
