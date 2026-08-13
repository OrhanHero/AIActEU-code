// KI-Themenfilter fuer Quellen ohne themenspezifischen Feed.
//
// Einige Quellen in data/sources.json liefern nur einen allgemeinen Feed, weil
// der themenspezifische KI-Feed nicht erreichbar war (siehe deren scopeNote).
// Solche Quellen sind mit "requiresTopicFilter": true markiert und muessen bei
// der Ingestion auf KI-Bezug gefiltert werden - sonst landen Rasenmaeher-Tests
// und Smartphone-Vorstellungen als "Eilmeldung" auf einer KI-News-Seite.
//
// Bewusst konservativ: gefiltert wird ausschliesslich bei markierten Quellen.
// Feeds, die bereits themenspezifisch sind (Lab-Blogs, arXiv, TechCrunch AI),
// laufen ungefiltert durch - dort waere ein Keyword-Filter nur eine zusaetzliche
// Fehlerquelle.

// Grossschreibung ist bei den Kuerzeln bedeutungstragend: "KI", "AI" und "LLM"
// werden case-sensitiv geprueft, damit die deutsche Silbe "ai" (Mai, Mainz) und
// englisches "ki" nicht faelschlich anschlagen. Wortgrenzen fangen die im
// Deutschen ueblichen Komposita mit ab ("KI-Agent", "KI-Startups", "AI-Act").
const CASE_SENSITIVE_PATTERNS = [
  /\bKI\b/,
  /\bAI\b/,
  /\bLLMs?\b/,
  /\bAGI\b/,
  /\bGPT\b/,
  /\bML\b/,
];

// Ausgeschriebene Fachbegriffe und KI-Pure-Play-Anbieter. Bewusst NICHT
// enthalten sind allgemeine Tech-Konzerne (Google, Apple, Meta, Microsoft,
// Amazon): deren Meldungen handeln haeufig von Smartphones, Deals oder
// Betriebssystemen und wuerden den Filter praktisch wirkungslos machen. Ihre
// KI-Meldungen nennen ohnehin fast immer zusaetzlich ein Fachwort oder Produkt
// aus dieser Liste.
const CASE_INSENSITIVE_PATTERNS = [
  /künstliche[rn]? intelligenz/i,
  /artificial intelligence/i,
  /machine learning/i,
  /maschinelles lernen/i,
  /deep learning/i,
  /neuronale[sn]? netz/i,
  /sprachmodell/i,
  /large language model/i,
  /foundation model/i,
  /generative[rs]? (ki|ai)/i,
  /chatbot/i,
  /transformer-modell/i,
  /agentic/i,
  /deepfake/i,
  /halluzinat/i,
  /text-to-(image|video|speech)/i,
  /diffusionsmodell/i,
  /\bprompt(s|ing|engineering)?\b/i,
  /\bembedding/i,
  /\binferenz\b/i,

  // KI-Pure-Play-Anbieter und -Produkte
  /openai/i,
  /chatgpt/i,
  /anthropic/i,
  /\bclaude\b/i,
  /deepmind/i,
  /\bgemini\b/i,
  /deepseek/i,
  /mistral/i,
  /hugging ?face/i,
  /midjourney/i,
  /stable diffusion/i,
  /perplexity/i,
  /\bllama\b/i,
  /\bgrok\b/i,
  /copilot/i,
  /nvidia/i,
];

// Werbung, die deutsche Tech-Feeds regulaer mit ausliefern. Sie ist unabhaengig
// vom Thema nie redaktioneller Inhalt und wird deshalb bei JEDER Quelle
// entfernt - auch bei themenspezifischen Feeds. Der Praefix steht in diesen
// Feeds am Titelanfang ("Anzeige: ..."), darum bewusst am Anfang verankert
// statt irgendwo im Text: ein Artikel ueber Werbe-KI soll erhalten bleiben.
const AD_TITLE_PATTERNS = [
  /^\s*anzeige\s*[:|-]/i,
  /^\s*sponsored\s*[:|-]/i,
  /^\s*werbung\s*[:|-]/i,
  /^\s*\[?anzeige\]?\s*$/i,
];

/**
 * Prueft, ob ein Text erkennbaren KI-Bezug hat.
 * @param {string} text Freitext (ueblicherweise Titel + Zusammenfassung).
 * @returns {boolean}
 */
export function hasAiTopic(text) {
  if (!text) return false;
  return (
    CASE_SENSITIVE_PATTERNS.some((re) => re.test(text)) ||
    CASE_INSENSITIVE_PATTERNS.some((re) => re.test(text))
  );
}

/**
 * Prueft, ob ein Titel eine als solche gekennzeichnete Werbeanzeige ist.
 * @param {string} title
 * @returns {boolean}
 */
export function isAdvertisement(title) {
  if (!title) return false;
  return AD_TITLE_PATTERNS.some((re) => re.test(title));
}

/**
 * Entscheidet, ob ein Feed-Eintrag uebernommen wird.
 * Werbung wird immer verworfen; der KI-Themenfilter greift nur bei Quellen mit
 * "requiresTopicFilter": true.
 * @param {{title?: string, summary?: string}} item
 * @param {{requiresTopicFilter?: boolean}} source
 * @returns {boolean}
 */
export function passesTopicFilter(item, source) {
  if (isAdvertisement(item?.title)) return false;
  if (!source?.requiresTopicFilter) return true;
  return hasAiTopic(`${item?.title ?? ""} ${item?.summary ?? ""}`);
}
