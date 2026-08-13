import { categories, type Category } from "./categories";

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
export const articles: Article[] = [
  {
    "slug": "claude-wasserzeichen-nutzer-kritisieren-anthropic",
    "title": "Claude: Nutzer äußern wegen des neuen Wasserzeichens Kritik an Anthropic",
    "summary": "Anthropic versieht die Textausgaben von Claude seit August 2026 mit einem unsichtbaren, maschinenlesbaren Wasserzeichen – ein für Menschen nicht wahrnehmbares Muster, das direkt im Text steckt und auch das Kopieren und Einfügen an anderer Stelle übersteht; bei Dateien kommt zusätzlich signierte Herkunfts-Metadatierung nach dem C2PA-Standard hinzu. Ausgerollt wird die Kennzeichnung nicht nur in der EU, sondern weltweit und über alle Claude-Produkte hinweg. Auslöser sind die seit dem 2. August 2026 durchgesetzten Transparenzpflichten des EU AI Act. In der Nutzerschaft löst der Schritt eine Kontroverse aus: Ein Teil fürchtet, dass Arbeitgeber und Hochschulen den KI-Einsatz nun nachweisen können, ein anderer begrüßt die Kennzeichnung ausdrücklich als Mittel gegen verschleierten KI-Einsatz.",
    "categorySlug": "policy",
    "tags": [
      "Anthropic",
      "EU AI Act",
      "Transparenz"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/claude-wasserzeichen-nutzer-kritisieren-anthropic-1757852/",
    "publishedAt": "2026-08-13",
    "aiGenerated": true,
    "humanReviewed": false,
    "editorsNote": "Direkt anschlussfähig an die Hauptstory darunter: Hier wird sichtbar, wie Artikel 50 in der Praxis umgesetzt wird – und woran sich die Debatte entzündet. Bemerkenswert ist der Einwand aus der Community, dass hier ausgerechnet Texte gekennzeichnet werden, die es nur gibt, weil Claude auf urheberrechtlich geschuetzten Buechern trainiert wurde; der Verweis auf den 1,5-Milliarden-Dollar-Vergleich mit den Autoren steht deshalb unten im Dossier. HINWEIS REDAKTION: Policy/Kontroverse ist laut EDITORIAL_POLICY.md Abschnitt 2 eine kritische Kategorie (Stufe 4) und braucht die menschliche Freigabe; bis dahin humanReviewed: false.",
    "relatedLinks": [
      {
        "group": "berichterstattung",
        "sourceName": "heise online",
        "label": "Keine Chance für Schummler: Claude bekommt jetzt ein unsichtbares Wasserzeichen",
        "url": "https://www.heise.de/news/Keine-Chance-fuer-Schummler-Claude-bekommt-jetzt-ein-unsichtbares-Wasserzeichen-11410129.html"
      },
      {
        "group": "berichterstattung",
        "sourceName": "heise online",
        "label": "Claude-Nutzer äußern wegen des neuen Wasserzeichens Kritik an Anthropic",
        "url": "https://www.heise.de/news/Claude-Nutzer-aeussern-wegen-des-neuen-Wasserzeichens-Kritik-an-Anthropic-11412904.html"
      },
      {
        "group": "berichterstattung",
        "sourceName": "TechCrunch",
        "label": "Some Claude users are mad that Anthropic's new watermarks will catch them cheating at their jobs, classes",
        "url": "https://techcrunch.com/2026/08/12/some-claude-users-are-mad-that-anthropics-new-watermarks-will-catch-them-cheating-at-their-jobs-classes/"
      },
      {
        "group": "community",
        "sourceName": "Reddit – r/artificial",
        "label": "About the new Claude watermark",
        "url": "https://www.reddit.com/r/artificial/comments/1vlzjc8/about_the_new_claude_watermark/"
      },
      {
        "group": "community",
        "sourceName": "Reddit – r/Anthropic",
        "label": "Claude watermarking our work is unethical and …",
        "url": "https://www.reddit.com/r/Anthropic/comments/1vlcl0d/claude_watermarking_our_work_is_unethical_and/"
      },
      {
        "group": "hintergrund",
        "sourceName": "heise online",
        "label": "KI-Firma Anthropic will Autoren 1,5 Milliarden Dollar zahlen",
        "url": "https://www.heise.de/news/KI-Firma-Anthropic-will-Autoren-1-5-Milliarden-Dollar-zahlen-10635149.html"
      }
    ],
    "breaking": true,
    "editorsPick": true
  },
  {
    "slug": "eu-ai-act-durchsetzung-transparenzpflichten-artikel-50-gestartet",
    "title": "EU AI Act: Durchsetzung gestartet – Transparenzpflichten nach Artikel 50 gelten jetzt",
    "summary": "Seit dem 2. August 2026 setzen das AI Office der EU-Kommission und die nationalen Aufsichtsbehörden die KI-Verordnung durch. Damit gelten die Transparenzpflichten aus Artikel 50 verbindlich: Chatbots und andere interaktive KI-Systeme müssen Nutzerinnen und Nutzer darauf hinweisen, dass sie mit einer Maschine sprechen, und KI-generierte oder -veränderte Inhalte – einschließlich Deepfakes – müssen als solche gekennzeichnet werden. Für bereits im Markt befindliche Systeme läuft eine Übergangsfrist bis zum 2. Dezember 2026.",
    "categorySlug": "policy",
    "tags": [
      "EU AI Act",
      "Policy",
      "Compliance"
    ],
    "sourceName": "Europäische Kommission",
    "sourceUrl": "https://ec.europa.eu/commission/presscorner/detail/de/ip_26_1714",
    "studyUrl": "https://www.heise.de/ratgeber/KI-Kennzeichnungspflicht-Was-die-EU-ab-August-2026-verlangt-11340625.html",
    "studyLabel": "Einordnung: KI-Kennzeichnungspflicht – Was die EU ab August 2026 verlangt (heise online)",
    "publishedAt": "2026-08-02",
    "aiGenerated": true,
    "humanReviewed": true,
    "editorsNote": "Kernthema dieser Seite: Artikel 50 ist genau die Norm, auf der die Kennzeichnung hier auf AIActEU beruht. Verstoesse gegen die Transparenzpflichten koennen mit bis zu 15 Mio. Euro oder 3 Prozent des weltweiten Jahresumsatzes geahndet werden, bei verbotenen KI-Praktiken sind bis zu 35 Mio. Euro oder 7 Prozent vorgesehen - jeweils der hoehere Betrag. Stufe-4-Freigabe durch die Projektleitung am 13.08.2026 erteilt.",
    "breaking": true,
    "editorsPick": true
  },
  {
    "slug": "verschluesselter-ki-denkprozess-gehackt-schwache-modelle-verraten-geheimnisse",
    "title": "Verschlüsselter KI-Denkprozess gehackt: Schwache Modelle verraten Geheimnisse",
    "summary": "Ein Forschungsteam von MATS, Max-Planck-Institut, ELLIS-Institut Tübingen, Universität Tübingen und Snyk hat eine Architektur-Schwachstelle bei GPT-5, Claude und Gemini offengelegt: Die verschlüsselten Reasoning-Blöcke, mit denen Anbieter den Denkprozess ihrer Modelle vor Kunden verbergen, sind innerhalb einer Anbieter-Familie über Sessions, Nutzer und Modelle hinweg beliebig austauschbar. Wird der Block eines Flaggschiff-Modells an ein schwächeres, geringer abgesichertes Modell desselben Anbieters geschickt, entschlüsselt dieses den fremden Denkprozess und gibt ihn wörtlich im Klartext aus – das stärkere Modell muss dafür nie selbst angegriffen werden.",
    "categorySlug": "safety",
    "tags": [
      "AI Safety",
      "OpenAI",
      "Anthropic",
      "Google DeepMind"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/hintergrund/Verschluesselter-KI-Denkprozess-gehackt-Schwache-Modelle-verraten-Geheimnisse-11412087.html",
    "studyUrl": "https://arxiv.org/abs/2608.09867",
    "studyLabel": "Studie: Stealing Reasoning Traces from Proprietary LLM APIs (arXiv)",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": true,
    "editorsNote": "Hauptstory der Woche: Vier Angriffsvektoren folgen aus der Schwachstelle – Umgehung des Anti-Distillation-Schutzes, Extraktion privater Daten im grossen Stil, Offenlegung gefaehrlicher Inhalte trotz sauberer sichtbarer Antwort und unsichtbare Prompt-Injections in oeffentlichen Agenten-Rollouts. Aus 315.320 aus oeffentlichen Repositories eingesammelten Reasoning-Bloecken rekonstruierte das Team 367 personenbezogene Datensaetze und 182 Zugangsdaten. Die Veroeffentlichung erfolgte nach Responsible Disclosure zusammen mit konkreten kryptografischen und systemseitigen Gegenmassnahmen.",
    "breaking": true,
    "editorsPick": true
  },
  {
    "slug": "heise-laysie-ki-songs-mit-raspberry-pi-generieren",
    "title": "heise+ | LAYSIE: KI-Songs mit Raspberry Pi generieren",
    "summary": "Kein Instrument, keine Übung – kein Problem. LAYSIE generiert per KI individuelle Songs aus gesprochenen Ideen und spielt sie über Bluetooth ab.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/ratgeber/LAYSIE-KI-Songs-mit-Raspberry-Pi-generieren-11368294.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false,
    "breaking": true
  },
  {
    "slug": "from-assistance-to-execution-how-enterprises-put-ai-to-work",
    "title": "From assistance to execution: How enterprises put AI to work",
    "summary": "OpenAI research reveals how enterprises are adopting agentic AI, using ChatGPT and Codex, and how frontier firms are pulling ahead in AI adoption.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI",
      "Agentic AI"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/how-enterprises-put-ai-to-work",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "putting-sign-language-ai-into-users-hands",
    "title": "Putting sign language AI into users’ hands",
    "summary": "Introducing sign-language-to-text (SL2T), our breakthrough model powering new sign language features for Deaf and hard of hearing users.",
    "categorySlug": "technisch",
    "tags": [
      "Google DeepMind"
    ],
    "sourceName": "Google DeepMind Blog",
    "sourceUrl": "https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nvidia-ceo-tops-glassdoor-s-2026-list-of-best-ceos",
    "title": "NVIDIA CEO Tops Glassdoor’s 2026 List of Best CEOs",
    "summary": "NVIDIA founder and CEO Jensen Huang is ranked No. 1 on Glassdoor’s Best CEOs list for 2026. In the just-released ranking, recognition is earned directly from the people who know their leadership the best — employees. Huang topped the list, with 99% of employees approving of the j",
    "categorySlug": "hardware",
    "tags": [
      "NVIDIA"
    ],
    "sourceName": "NVIDIA AI Blog",
    "sourceUrl": "https://blogs.nvidia.com/blog/nvidia-life-glassdoor-best-ceo-2026/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nvidia-ai-factory-compute-is-becoming-an-investable-asset-class",
    "title": "NVIDIA AI Factory Compute Is Becoming an Investable Asset Class",
    "summary": "We announced partnerships with Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs and KKR to establish independent financing platforms designed to mobilize over $500 billion of third-party capital to support the buildout of AI infrastructure over time. This is a major miles",
    "categorySlug": "hardware",
    "tags": [
      "NVIDIA"
    ],
    "sourceName": "NVIDIA AI Blog",
    "sourceUrl": "https://blogs.nvidia.com/blog/nvidia-ai-factory-compute/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "part-2-amazon-bedrock-cost-attribution-with-amazon-athena-and-cudos",
    "title": "Part 2: Amazon Bedrock cost attribution with Amazon Athena and CUDOS",
    "summary": "Learn how to visualize and analyze Amazon Bedrock cost attribution using Amazon Athena and CUDOS dashboards. This post shows how to set up CUR 2.0 with IAM principal data, query Bedrock spend by principal, project, and team, and build dashboards to track AI costs across your orga",
    "categorySlug": "technisch",
    "tags": [
      "KI News"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/part-2-amazon-bedrock-cost-attribution-with-amazon-athena-and-cudos/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "how-oneadvanced-deployed-over-50-ai-agents-on-uk-sovereign-aws",
    "title": "How OneAdvanced deployed over 50 AI agents on UK-sovereign AWS",
    "summary": "Learn how OneAdvanced, a UK enterprise software provider, built a UK-sovereign AI platform by self-hosting Llama 4 Maverick and Llama Guard 4 on Amazon SageMaker AI, with a RAG pipeline on pgvector and over 50 agents built with Strands Agents SDK on Amazon ECS.",
    "categorySlug": "technisch",
    "tags": [
      "Meta AI",
      "RAG",
      "Agentic AI"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/how-oneadvanced-deployed-over-50-ai-agents-on-uk-sovereign-aws/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "pay-with-confidence-how-solv-labs-built-verifiable-auditable-agent-payments-on-a",
    "title": "Pay with confidence: How Solv Labs built verifiable, auditable agent payments on Amazon Bedrock AgentCore payments",
    "summary": "Solv Labs built a governed agent-payments workflow on Amazon Bedrock AgentCore payments, where every transaction is authorized, attested in an AWS Nitro Enclave, priced for risk, and anchored to a public blockchain before settlement. See how the pattern gives enterprises a verifi",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/pay-with-confidence-how-solv-labs-built-verifiable-auditable-agent-payments-on-amazon-bedrock-agentcore-payments/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "tiered-kv-cache-for-large-llms-on-amazon-sagemaker-hyperpod-with-curvine",
    "title": "Tiered KV cache for large LLMs on Amazon SageMaker HyperPod with Curvine",
    "summary": "Running large language model inference at scale forces a KV cache trade-off: oversized GPU instances or slow time-to-first-token. This post builds a tiered KV cache on Amazon SageMaker HyperPod that extends the cache into a shared, distributed NVMe pool with Curvine, so replicas ",
    "categorySlug": "technisch",
    "tags": [
      "NVIDIA"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/tiered-kv-cache-for-large-llms-on-amazon-sagemaker-hyperpod-with-curvine/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "introducing-olmoearth-embeddings-custom-embedding-exports-from-olmoearth-studio-",
    "title": "Introducing OlmoEarth embeddings: Custom embedding exports from OlmoEarth Studio for downstream analysis",
    "summary": "(Keine Zusammenfassung verfügbar – Originalquelle prüfen.)",
    "categorySlug": "tools",
    "tags": [
      "Hugging Face"
    ],
    "sourceName": "Hugging Face Blog",
    "sourceUrl": "https://huggingface.co/blog/allenai/olmoearth-embeddings",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "lfm2-5-vl-3b-for-better-and-faster-vision-capabilities-for-the-edge",
    "title": "LFM2.5-VL-3B for Better and Faster Vision Capabilities for the Edge",
    "summary": "(Keine Zusammenfassung verfügbar – Originalquelle prüfen.)",
    "categorySlug": "tools",
    "tags": [
      "Hugging Face"
    ],
    "sourceName": "Hugging Face Blog",
    "sourceUrl": "https://huggingface.co/blog/LiquidAI/lfm2-5-vl-3b",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "langsmith-byoc-on-aws-is-generally-available",
    "title": "LangSmith BYOC on AWS is generally available",
    "summary": "LangSmith Bring Your Own Cloud is now generally available on AWS, giving Enterprise teams managed observability, evaluation, and deployment inside their own VPC.",
    "categorySlug": "technisch",
    "tags": [
      "AI Safety"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/langsmith-byoc-is-now-generally-available-on-aws",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "what-is-an-ai-agent",
    "title": "What is an AI agent?",
    "summary": "Learn what AI agents are, how they work in an LLM loop, and where workflows fit so you can build reliable, production-ready autonomous systems.",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/what-is-an-agent",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "neue-finanzierungsidee-nvidia-macht-rechenzentren-zum-finanzprodukt",
    "title": "Neue Finanzierungsidee: Nvidia macht Rechenzentren zum Finanzprodukt",
    "summary": "Nvidia will weiter günstige Finanzierungsmöglichkeiten für seine GPUs ermöglichen. Dafür hat der Konzern Vermögensverwalter ins Boot geholt. (Nvidia, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "NVIDIA",
      "EU AI Act"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/neue-finanzierungsidee-nvidia-macht-rechenzentren-zum-finanzprodukt-2608-211874.html",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "arbeitsmarktprognose-deutsche-firmen-erwarten-sinkende-lohne-wegen-ki",
    "title": "Arbeitsmarktprognose: Deutsche Firmen erwarten sinkende Löhne wegen KI",
    "summary": "Von sinkenden Löhnen durch KI sollen vor allem Berufseinsteiger und Beschäftigte ohne Hochschulabschluss betroffen sein. (Gehalt, Studien)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/arbeitsmarktprognose-deutsche-firmen-erwarten-sinkende-loehne-wegen-ki-2608-211868.html",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "direkter-draht-zum-chef-wie-openai-interne-burokratie-bekampft",
    "title": "Direkter Draht zum Chef: Wie OpenAI interne Bürokratie bekämpft",
    "summary": "In stark wachsenden Organisationen schleichen sich schnell ineffiziente Abläufe ein, die den Alltag belasten. OpenAI setzt nun auf einen direkten Kanal zur Chefetage, um genau das zu verhindern.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/openai-friction-email-buerokratie-1757818/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "grok-bot-vorgestellt-das-kann-der-neue-ki-agent-von-elon-musks-ki-firma",
    "title": "Grok Bot vorgestellt: Das kann der neue KI-Agent von Elon Musks KI-Firma",
    "summary": "Nachdem Anthropic und OpenAI ihre Chatbots um agentische Funktionen erweitert haben, zieht jetzt SpaceXAI mit einer eigenen Lösung nach. Die Agenten sollen selbstständig arbeiten und kontinuierlich dazulernen.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "Anthropic",
      "Agentic AI"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/grok-bot-vorgestellt-das-kann-der-neue-ki-agent-von-elon-musks-ki-firma-1757749/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "wissenschaft-am-ende-ex-google-chef-eric-schmidt-erklart-wie-forscher-mit-ki-wir",
    "title": "Wissenschaft am Ende? Ex-Google-Chef Eric Schmidt erklärt, wie Forscher mit KI wirklich weiterkommen",
    "summary": "Das Tool Alphafold hat vorgemacht, wie KI die Forschung zu neuen Ufern bringen kann. Dieser Durchbruch fühlt sich wie ein Ende für wissenschaftliche Durchbrücheweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "Google DeepMind",
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/wissenschaft-am-ende-ex-google-chef-eric-schmidt-erklaert-wie-forscher-mit-ki-wirklich-weiterkommen-1757410/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "mit-nur-einer-zeile-dieses-ki-tool-erschafft-per-prompt-komplette-3d-welten",
    "title": "Mit nur einer Zeile: Dieses KI-Tool erschafft per Prompt komplette 3D-Welten",
    "summary": "Ein neues KI-Tool namens „Worldclaw“ ist in der Lage, ganze 3D-Welten aus kurzen Prompts zu erstellen. Dabei kommen mehrere Techniken zum Einsatz, damit die Welten nicht nur wild aus Elementen zusammengeworfen werden.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/ki-tool-3d-welten-einzeiliger-prompt-1757702/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "google-ads-und-analytics-bekommen-neue-ki-funktionen-was-sich-jetzt-andert",
    "title": "Google Ads und Analytics bekommen neue KI-Funktionen: Was sich jetzt ändert",
    "summary": "Google integriert neue agentische Features in Google Ads und Analytics, die dank des Ask-Advisors-Analyse-Workflows deutlich vereinfachen. Dazu gehören neue Homepage-Insights, Dashboards mit visuellem Reporting und Kampagnenvergleiche für dein Unternehmen.weiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "Google DeepMind",
      "Agentic AI",
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/google-ads-und-analytics-bekommen-neue-ki-funktionen-was-sich-jetzt-aendert-1757759/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ai-coding-startup-cognition-reportedly-already-in-talks-to-raise-at-40b-valuatio",
    "title": "AI coding startup Cognition reportedly already in talks to raise at $40B valuation",
    "summary": "Cognition may be looking to raise another mega round just a few months after raising $1 billion at a $26 billion valuation.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/12/ai-coding-startup-cognition-reportedly-already-in-talks-to-raise-at-40b-valuation/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "as-ai-safety-concerns-mount-three-pioneers-make-the-case-for-staying-open",
    "title": "As AI safety concerns mount, three pioneers make the case for staying open",
    "summary": "At Ai4, three of the world's most respected AI experts—Geoffrey Hinton, Fei-Fei Li, and Andrew Ng—debated regulation, open-source access, and how America can compete as China advances in Asia.",
    "categorySlug": "business",
    "tags": [
      "Open Source",
      "EU AI Act",
      "AI Safety"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/12/as-ai-safety-concerns-mount-three-pioneers-make-the-case-for-staying-open/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "openai-backed-thrive-holdings-raises-2b-to-bring-ai-to-the-enterprise",
    "title": "OpenAI-backed Thrive Holdings raises $2B to bring AI to the enterprise",
    "summary": "Thrive Holdings has raised $2 billion in new funding at a $12 billion valuation from investors like SoftBank, D1 Capital Partners, and Alitmeter Capital.",
    "categorySlug": "business",
    "tags": [
      "OpenAI",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/12/openai-backed-thrive-holdings-raises-2b-to-bring-ai-to-the-enterprise/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "mesh-automattic-s-crm-for-everyone-comes-to-android",
    "title": "Mesh, Automattic’s CRM for everyone, comes to Android",
    "summary": "Mesh, an AI-powered contacts app and relationship manager from Automattic, is now an Android app.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/12/mesh-automattics-crm-for-everyone-comes-to-android/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "why-stream-ring-maker-sandbar-says-the-future-of-ai-wearables-is-voice",
    "title": "Why Stream ring-maker Sandbar says the future of AI wearables is voice",
    "summary": "AI notetaking hardware has taken off over the past couple of years, with credit-card-sized devices, pendants, pins, and even transcribing earbuds all promising to capture your meetings and turn them into summaries and action items. Now, a whole wave of wearables — rings especiall",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/video/why-stream-ring-maker-sandbar-says-the-future-of-ai-wearables-is-voice/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "lovable-confirms-new-13-3b-valuation-raises-another-400m",
    "title": "Lovable confirms new $13.3B valuation, raises another $400M",
    "summary": "This new funding comes after Lovable hit $500 million in annualized run rate revenue in June, the startup told TechCrunch.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/12/lovable-confirms-new-13-3b-valuation-raises-another-400m/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "how-a-250-million-acquisition-collapsed-into-allegations-of-fraud-and-forged-sig",
    "title": "How a $250 million acquisition collapsed into allegations of fraud and forged signatures",
    "summary": "Investors are still waiting for their share of the $250 million windfall, and VideoVerse co-founder Vinayak Shrivastav is now at the center of multiple legal cases.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/12/how-a-250-million-acquisition-collapsed-into-allegations-of-fraud-and-forged-signatures/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "why-sandbar-thinks-it-s-voice-enabled-ring-can-avoid-the-ai-hardware-graveyard",
    "title": "Why Sandbar thinks it’s voice-enabled ring can avoid the AI hardware graveyard",
    "summary": "AI notetaking hardware has taken off over the past couple of years, with credit-card-sized devices, pendants, pins, and even transcribing earbuds all promising to capture your meetings and turn them into summaries and action items. Now, a whole wave of wearables — rings especiall",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/podcast/why-sandbar-thinks-its-voice-enabled-ring-can-avoid-the-ai-hardware-graveyard/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "everything-announced-at-made-by-google-26-pixel-11-pixel-watch-5-pixel-tag-and-t",
    "title": "Everything announced at Made by Google ’26: Pixel 11, Pixel Watch 5, Pixel Tag, and tons of Gemini features",
    "summary": "From the Pixel 11 series and a brand new competitor to Apple’s AirTag, here are all the announcements from the Made by Google 2026 event.",
    "categorySlug": "business",
    "tags": [
      "Google DeepMind",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/12/google-unveils-pixel-11-lineup-new-airtag-rival-and-gemini-features-at-made-by-google-2026/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ai-code-testing-startup-blacksmith-s-valuation-jumps-almost-10x-in-less-than-a-y",
    "title": "AI code-testing startup Blacksmith’s valuation jumps almost 10x in less than a year",
    "summary": "Blacksmith says revenue has grown more than tenfold over the past year.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/12/blacksmiths-valuation-jumps-10x-to-550m-as-ai-coding-fuels-software-validation/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ich-arbeite-120-stunden-pro-woche-an-meiner-app-die-meiste-zeit-flie-t-in-diese-",
    "title": "Ich arbeite 120 Stunden pro Woche an meiner App: Die meiste Zeit fließt in diese Mini-Aufgaben",
    "summary": "KI-Agenten liefern den Content für die Wett-Plattform von Vincent Betz. Der verbringt die meiste Zeit damit, Fehler zu beheben.",
    "categorySlug": "business",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "Gründerszene",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/gruenderszene-sucht-die-super-gruender/fellows/ich-arbeite-120-stunden-pro-woche-und-treffe-keine-freunde/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "so-brachte-mir-ein-viraler-linkedin-post-uber-1000-anmeldungen-auf-meiner-dating",
    "title": "So brachte mir ein viraler Linkedin-Post über 1000 Anmeldungen auf meiner Dating-App",
    "summary": "Theodora Both will über ihre App und KI ambitionierte Menschen zusammenbringen – und polarisiert dadurch auf LinkedIn.",
    "categorySlug": "business",
    "tags": [
      "KI News"
    ],
    "sourceName": "Gründerszene",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/wie-ein-linkedin-post-mir-1000-app-anmeldungen-brachte/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "will-google-diesen-1-5-milliarden-dollar-deal",
    "title": "Will Google diesen 1,5-Milliarden-Dollar-Deal?",
    "summary": "Programmierende Agenten gehören derzeit zu den gefragtesten Anwendungsfällen für KI. Wie Insider berichten, plant Google dafür den Kauf eines Startups.",
    "categorySlug": "business",
    "tags": [
      "Google DeepMind",
      "RAG",
      "Agentic AI"
    ],
    "sourceName": "Gründerszene",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/business/will-google-diesen-15-milliarden-dollar-deal/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "mit-ki-bewerben-dieses-wort-fallt-sofort-auf",
    "title": "Mit KI bewerben? Dieses Wort fällt sofort auf",
    "summary": "Y Combinator-Bewerbungen werden länger – und klingen zunehmend nach KI. Welche Wörter und Schreibweisen seit dem Siegeszug von ChatGPT häufiger auftauchen.",
    "categorySlug": "business",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "Gründerszene",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/news/mit-ki-bewerben-dieses-wort-faellt-sofort-auf/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ganz-schon-meta-ich-habe-zuckerbergs-6500-worter-ki-manifest-gelesen",
    "title": "Ganz schön Meta: Ich habe Zuckerbergs 6500-Wörter-KI-Manifest gelesen",
    "summary": "Hat sich sonst noch irgendwer die Zeit genommen? Zuckerberg schafft es trotz der vielen Worte nicht so richtig, eine positive Vision von KI zu entwickeln.",
    "categorySlug": "business",
    "tags": [
      "Meta AI"
    ],
    "sourceName": "Gründerszene",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/ganz-schoen-meta-ich-habe-zuckerbergs-6500-woerter-ki-manifest-gelesen/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "diese-7-ki-startups-haben-einen-uberraschenden-investor-die-telekom",
    "title": "Diese 7 KI-Startups haben einen überraschenden Investor: die Telekom",
    "summary": "Von der Telefonzelle zum Unicorn-Hirten. Die Telekom hat in einige der namhaftesten deutschen Technologie-Startups investiert.",
    "categorySlug": "business",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Gründerszene",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/ki-startups-diese-7-haben-einen-ueberraschenden-investor/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  }
];

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
