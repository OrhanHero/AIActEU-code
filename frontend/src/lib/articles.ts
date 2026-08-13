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
};

// Automatisch aktualisierte KI-News Artikel aus den verifizierten RSS-Quellen
// plus die redaktionell kuratierten Hauptstories aus data/featured.json
export const articles: Article[] = [
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
    "slug": "top-10-bester-akku-rasenmaher-im-test-stihl-vor-einhell-gardena-makita",
    "title": "Top 10: Bester Akku-Rasenmäher im Test – Stihl vor Einhell, Gardena & Makita",
    "summary": "Leiser, flexibler, komfortabler: Akku-Rasenmäher haben klare Vorteile gegenüber Benzin- und Kabelmodellen. Wir zeigen die besten Modelle.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/bestenlisten/testsieger/top-10-bester-akku-rasenmaeher-im-test-stihl-vor-einhell-gardena-und-makita/ft2r6hp?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false,
    "breaking": true
  },
  {
    "slug": "kosteneffizienz-unter-druck-apple-passt-lagerhaltung-an",
    "title": "Kosteneffizienz unter Druck: Apple passt Lagerhaltung an",
    "summary": "Um sich gegen steigende Rohstoffpreise abzusichern, soll Apple seine Lagerhaltung für OLED-Displays verlängert haben. Analysten erwarten Preiserhöhungen.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Apple-aendert-Lagerstrategie-OLED-Displays-werden-laenger-vorgehalten-11411977.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false,
    "breaking": true,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "chinas-eigententwicklung-comac-c919-fliegt-erstmals-international",
    "title": "Chinas Eigententwicklung Comac C919 fliegt erstmals international",
    "summary": "Die Comac C919 ist das erste vollständig in China entwickelte Passagierflugzeug. Air China setzt die Maschine erstmals auch international ein.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Air-China-eroeffnet-erste-internationale-Strecke-mit-der-C919-11411861.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false,
    "breaking": true
  },
  {
    "slug": "geheimdienst-reform-mehr-befugnisse-fur-bnd-und-verfassungsschutz",
    "title": "Geheimdienst-Reform: Mehr Befugnisse für BND und Verfassungsschutz",
    "summary": "BND und Verfassungsschutz sollen künftig mehr Befugnisse erhalten, um aktiv Gefahren abzuwehren. Es ist ein Bruch mit Grundsatzprinzipien.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Geheimdienst-Reform-Mehr-Befugnisse-fuer-BND-und-Verfassungsschutz-11412017.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "heise-laysie-ki-songs-mit-raspberry-pi-generieren",
    "title": "heise+ | LAYSIE: KI-Songs mit Raspberry Pi generieren",
    "summary": "Kein Instrument, keine Übung – kein Problem. LAYSIE generiert per KI individuelle Songs aus gesprochenen Ideen und spielt sie über Bluetooth ab.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/ratgeber/LAYSIE-KI-Songs-mit-Raspberry-Pi-generieren-11368294.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "der-security-coprozessor-in-vielen-cpus-ist-unsicher",
    "title": "Der Security-Coprozessor in vielen CPUs ist unsicher",
    "summary": "Das Trusted Platform Module ist das wichtigste Glied in der Vertrauenskette von PCs. Ausgerechnet dieses TPM ist angreifbar.",
    "categorySlug": "breaking-news",
    "tags": [
      "AI Safety"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Der-Security-Ko-Prozessor-in-vielen-CPUs-ist-unsicher-11411837.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "meaco-sefte-10-pro-im-test-guter-flexibler-standventilator-mit-akku-und-app",
    "title": "Meaco Sefte 10 Pro im Test: Guter & flexibler Standventilator mit Akku und App",
    "summary": "Der Meaco Sefte Pro 10 verbindet drei Bauhöhen mit Akku und App. Der Ventilator liefert kräftigen Wind, ist aber in den hohen Stufen recht laut.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/bestenlisten/testbericht/meaco-sefte-10-pro-im-test-guter-und-flexibler-standventilator-mit-akku-und-app/h2tjsm6?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "pixel-watch-5-als-fitnesscoach-und-lebensretter",
    "title": "Pixel Watch 5 als Fitnesscoach und Lebensretter",
    "summary": "Die fünfte Generation der Pixel Watch bietet umfangreiches Gesundheits- sowie Fitnesstracking und wählt in Notfällen die 112.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Pixel-Watch-5-als-Fitnesscoach-und-Lebensretter-11411597.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "pixel-11-11-pro-fold-google-zeigt-smartphones-und-eine-uberfallige-neuheit",
    "title": "Pixel 11, 11 Pro & Fold: Google zeigt Smartphones und eine überfällige Neuheit",
    "summary": "Google stellt in New York sein neues Hardware-Line-Up vor. Dazu zählen neue Pixel-Smartphones, eine neue Smartwatch und ein länger erwarteter BT-Tracker.",
    "categorySlug": "breaking-news",
    "tags": [
      "Google DeepMind",
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Pixel-11-11-Pro-Fold-Google-zeigt-Smartphones-und-eine-ueberfaellige-Neuheit-11411543.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
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
    "humanReviewed": false
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
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
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
    "humanReviewed": false
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
    "humanReviewed": false
  },
  {
    "slug": "flugtaxis-hochenergetische-flugzeugbatterie-von-catl-geht-in-serie",
    "title": "Flugtaxis: Hochenergetische Flugzeugbatterie von CATL geht in Serie",
    "summary": "Für den Antrieb von Flugtaxis hat CATL einen Akku mit besonders hoher Energiedichte entwickelt. Einen ersten Kunden gibt es schon. (Lufttaxi, Luftfahrt)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/flugtaxis-hochenergetische-flugzeugbatterie-von-catl-geht-in-serie-2608-211876.html",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "telefon-box-telekom-ersetzt-analoge-festnetznutzung-durch-lte",
    "title": "Telefon-Box: Telekom ersetzt analoge Festnetznutzung durch LTE",
    "summary": "Umstellung für alle, die rein analog telefonieren: Herkömmliche analoge MSAN-POTS-Anschlüsse, die bereitgestellt wurden, sollen laut Telekom weg. (Festnetz, DSL)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/telefon-box-telekom-ersetzt-analoge-festnetznutzung-durch-lte-2608-211875.html",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
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
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/neue-finanzierungsidee-nvidia-macht-rechenzentren-zum-finanzprodukt-2608-211874.html",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-praziser-3d-drucker-fur-nur-298-99-euro-bei-amazon",
    "title": "Anzeige: Präziser 3D-Drucker für nur 298,99 Euro bei Amazon",
    "summary": "Amazon hat einen mehrfarbigen 3D-Drucker von Anycubic im Angebot, der sich durch hohe Präzision und geringen Materialverbrauch auszeichnet. (Technik/Hardware, 3D-Drucker)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-praeziser-3d-drucker-fuer-nur-298-99-euro-bei-amazon-2608-211867.html",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "testversuch-chinas-magnetschwebezug-fahrt-800-km-h-in-5-3-sekunden",
    "title": "Testversuch: Chinas Magnetschwebezug fährt 800 km/h in 5,3 Sekunden",
    "summary": "Unter Testbedingungen und auf gerader Strecke fährt der experimentelle Maglev-Zug fast so schnell wie ein Passagierflugzeug fliegt. (China, Transrapid)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/testversuch-chinas-magnetschwebezug-faehrt-800-km-h-in-5-3-sekunden-2608-211869.html",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-hei-luftfritteusen-von-cosori-und-philips-bei-amazon-zu-angebotspreisen-",
    "title": "Anzeige: Heißluftfritteusen von Cosori und Philips bei Amazon zu Angebotspreisen sichern",
    "summary": "Für eine schnelle und gesunde Essenszubereitung bietet sich eine Heißluftfritteuse an. Modelle von Cosori und Philips sind bei Amazon reduziert. (Technik/Hardware, Amazon)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-heissluftfritteusen-von-cosori-und-philips-bei-amazon-zu-angebotspreisen-sichern-2608-211870.html",
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
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/arbeitsmarktprognose-deutsche-firmen-erwarten-sinkende-loehne-wegen-ki-2608-211868.html",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "google-pixel-watch-5-hat-bessere-akkulaufzeit-und-genaueres-gps",
    "title": "Google: Pixel Watch 5 hat bessere Akkulaufzeit und genaueres GPS",
    "summary": "Google verbessert bei der Pixel Watch 5 unter anderem Akkulaufzeit, GPS und einige Gesundheitsfunktionen. (Pixel Watch, Google)",
    "categorySlug": "breaking-news",
    "tags": [
      "Google DeepMind"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/google-pixel-watch-5-mit-mehr-akku-und-genauerem-gps-2608-211866.html",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-4-in-1-ugreen-nexode-100w-ladegerat-zum-aktionspreis-fur-rund-30-euro-be",
    "title": "Anzeige: 4-in-1-Ugreen-Nexode-100W-Ladegerät zum Aktionspreis für rund 30 Euro bei Amazon",
    "summary": "Das Ugreen Nexode 100W Ladegerät lädt bis zu vier Geräte gleichzeitig per GaN-Technik und ist bei Amazon aktuell günstiger erhältlich. (Technik/Hardware, Notebook)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-4-in-1-ugreen-nexode-100w-ladegeraet-zum-aktionspreis-fuer-rund-30-euro-bei-amazon-2608-211865.html",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-gro-er-17-zoll-laptop-bei-amazon-im-angebot",
    "title": "Anzeige: Großer 17-Zoll-Laptop bei Amazon im Angebot",
    "summary": "Bei Amazon gibt es derzeit einen interessanten HP-Laptop im Angebot. Er ist fast zum Tiefstpreis erhältlich. (Notebook, Computer)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-grosser-17-zoll-laptop-bei-amazon-im-angebot-2608-211864.html",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "mcdonald-s-app-algorithmus-wie-das-fast-food-unternehmen-verzehrdaten-auswertet",
    "title": "McDonald’s App-Algorithmus: Wie das Fast-Food-Unternehmen Verzehrdaten auswertet",
    "summary": "Wer regelmäßig Punkte in der App des weltweit größten Fast-Food-Unternehmens sammelt, gibt mehr preis als nur eine E-Mail-Adresse. Im Hintergrund arbeiten komplexe Systeme, die weitreichende Rückschlüsse über den Alltag der Burger-Konsumenten ziehen können.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/mcdonalds-app-algorithmus-datenanalyse-1757847/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "vorbild-schneckenschleim-forscher-entschlusseln-faszinierendes-naturmaterial",
    "title": "Vorbild Schneckenschleim: Forscher entschlüsseln faszinierendes Naturmaterial",
    "summary": "Forschende haben Schneckenschleim untersucht und ihn für ziemlich smart befunden. Die Erkenntnisse sollen auch bei der Entwicklung neuer Biomaterialien helfen.weiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/vorbild-schneckenschleim-forscher-entschluesseln-faszinierendes-naturmaterial-1757729/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "uber-5-billionen-pixel-forscher-veroffentlichen-die-bislang-gro-te-karte-des-uni",
    "title": "Über 5 Billionen Pixel: Forscher veröffentlichen die bislang größte Karte des Universums",
    "summary": "Fast vier Milliarden kosmische Objekte in einer Auflösung von über fünf Billionen Pixel: Ein Wissenschaftsteam hat die bisher größte zweidimensionale Karte des Universums veröffentlicht. Was die zeigt – und was nicht.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/5-billionen-pixel-groesste-karte-universum-1757675/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "windows-11-so-starten-deine-apps-jetzt-schneller",
    "title": "Windows 11: So starten deine Apps jetzt schneller",
    "summary": "Microsoft verpasst Windows 11 einen Geschwindigkeits-Boots. Ein neues Feature sorgt dafür, dass künftig zahlreiche Apps schneller starten. Wie das geht und wann du von der Neuerung profitierst.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/windows-11-apps-schneller-starten-1757821/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
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
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/openai-friction-email-buerokratie-1757818/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "windows-warum-alte-ui-elemente-noch-jahrelang-im-betriebssystem-verbleiben",
    "title": "Windows: Warum alte UI-Elemente noch jahrelang im Betriebssystem verbleiben",
    "summary": "Wer Windows 11 nutzt, wird heute noch auf Elemente stoßen, die ihren alten Look und Funktionen von vorherigen Betriebssystemversionen beibehalten haben. Warum das so ist, hat Microsoft schon vor 23 Jahren ausführlich beleuchtet.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/windows-alte-ui-elemente-jahrelang-im-betriebssystem-1757757/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
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
    "sourceName": "t3n (allgemein, nach KI filtern)",
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
    "sourceName": "t3n (allgemein, nach KI filtern)",
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
    "sourceName": "t3n (allgemein, nach KI filtern)",
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
    "sourceName": "t3n (allgemein, nach KI filtern)",
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
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
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
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
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
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
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
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
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
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/ganz-schoen-meta-ich-habe-zuckerbergs-6500-woerter-ki-manifest-gelesen/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "wie-gewinnt-man-die-ersten-kunden-diese-grunder-setzen-auf-einen-ungewohnlichen-",
    "title": "Wie gewinnt man die ersten Kunden? Diese Gründer setzen auf einen ungewöhnlichen (Party)-Trick",
    "summary": "Garry Lazovskis und Minh Vu Ngo haben ihr Produkt fertiggestellt – und wollen es jetzt mit einer Party bekannt machen.",
    "categorySlug": "business",
    "tags": [
      "KI News"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/wie-gewinnt-man-die-ersten-kunden-gruender-setzen-auf-einen-party-trick/",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nur-einer-von-300-schafft-es-so-lauft-der-auswahlprozess-fur-ein-praktikum-bei-c",
    "title": "Nur einer von 300 schafft es: So läuft der Auswahlprozess für ein Praktikum bei Cherry Ventures",
    "summary": "Cherry Ventures-Principal Victor Huerbe erklärt, worauf der VC bei Bewerbern achtet und wie der Auswahlprozess abläuft.",
    "categorySlug": "business",
    "tags": [
      "KI News"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/karriere-startup/nur-einer-von-300-schafft-es-so-laeuft-der-auswahlprozess-fuer-ein-praktikum-bei-cherry-ventures/",
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
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
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
