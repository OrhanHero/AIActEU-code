import type { Metadata } from "next";
import Link from "next/link";
import { aaChangelog } from "@/lib/ai-analysis-changelog";
import { ArtificialAnalysisBenchmarkCard } from "@/components/ArtificialAnalysisBenchmarkCard";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "KI-Analyse & Benchmarks | Artificial Analysis | AIActEU",
  description:
    "Unabhängige Benchmarks, Leistungsindizes und Modellvergleiche von Artificial Analysis – Intelligence Index, Coding Agent Index, Kosten, Geschwindigkeit und mehr.",
  keywords: [
    "KI Benchmarks",
    "Artificial Analysis",
    "Intelligence Index",
    "LLM Vergleich",
    "KI Modell Analyse",
    "Coding Agent Index",
    "GPT-5.6",
    "Claude Opus 5",
    "EU AI Act",
  ],
};

const typeIconMap: Record<string, string> = {
  article: "📰",
  model: "🤖",
  benchmark: "📊",
  update: "🔄",
};

const typeLabelMap: Record<string, string> = {
  article: "Artikel",
  model: "Modell",
  benchmark: "Benchmark",
  update: "Update",
};

const typeColorMap: Record<string, string> = {
  article: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  model: "text-purple-400 bg-purple-500/10 border-purple-500/30",
  benchmark: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  update: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
};

export default function KiAnalysePage() {
  const changelog = aaChangelog.slice(0, 15);

  return (
    <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
      {/* ─── Hero Banner ────────────────────────────────────────────── */}
      <section className="relative mb-10 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background p-8 sm:p-10">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-float" aria-hidden />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl animate-float [animation-delay:-5s]" aria-hidden />

        <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[11px] font-bold text-primary uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                🔬 KI-ANALYSE & BENCHMARKS
              </span>
              <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-[11px] font-bold text-purple-400">
                QUELLE: ARTIFICIAL ANALYSIS
              </span>
            </div>

            <h1 className="font-serif-heading text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Unabhängige KI-Modell&shy;analyse
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Benchmarks, Leistungsindizes und Modellvergleiche von{" "}
              <Link
                href="https://artificialanalysis.ai/de"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Artificial Analysis ↗
              </Link>
              {" "}– der unabhängigen Analyseplattform für KI-Modelle und API-Anbieter.
              Alle verlinkten Inhalte verweisen direkt auf die Originalquelle.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="https://artificialanalysis.ai/de/models/recommend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-primary/30"
            >
              🤖 Modell-Berater starten ↗
            </Link>
            <Link
              href="https://artificialanalysis.ai/de/changelog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/20"
            >
              📋 Vollständiger Changelog ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Source Attribution ────────────────────────────────────── */}
      <div className="mb-8 flex flex-wrap items-center gap-3 rounded-xl border border-border/60 bg-surface/60 px-4 py-3 text-xs text-muted backdrop-blur-md">
        <span className="font-mono font-bold uppercase tracking-wider text-foreground">Quelle:</span>
        <Link href="https://artificialanalysis.ai/de" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
          artificialanalysis.ai/de
        </Link>
        <span className="text-border/60">·</span>
        <span>Unabhängige, nicht gesponserte Benchmarks</span>
        <span className="text-border/60">·</span>
        <span>Daten auf AA direkt einsehbar</span>
        <span className="text-border/60">·</span>
        <span className="text-emerald-400 font-semibold">© Artificial Analysis Ltd.</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        {/* ─── Hauptinhalt ──────────────────────────────────────────── */}
        <div className="flex flex-col gap-12">

          {/* ── INTELLIGENZ ─────────────────────────────────────────── */}
          <section>
            <div className="mb-5 flex items-center justify-between border-b border-border/60 pb-3">
              <div>
                <h2 className="font-serif-heading text-2xl font-bold tracking-tight text-foreground">
                  🧠 Intelligenz
                </h2>
                <p className="text-xs text-muted mt-1">
                  Intelligence Index v4.1.1 – GDPval-AA v2, 𝜏³-Banking, Terminal-Bench, SciCode, HLE, GPQA Diamond, CritPt, AA-Omniscience, AA-LCR
                </p>
              </div>
              <Link
                href="https://artificialanalysis.ai/de#intelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                Alle Daten ansehen ↗
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <ArtificialAnalysisBenchmarkCard
                id="intelligence-tabs"
                icon="📊"
                title="Intelligence Index – Übersicht"
                description="Führende KI-Modelle nach Intelligenz-Score aus unabhängigen Evaluationen. Inkl. Open-Weights-Kennzeichnung und Kosten pro Aufgabe."
                hashLink="https://artificialanalysis.ai/de#intelligence-tabs"
                badge="v4.1.1"
                badgeColor="blue"
              />
              <ArtificialAnalysisBenchmarkCard
                id="intelligence-category-tabs"
                icon="🗂️"
                title="Intelligenz nach Kategorie"
                description="Vergleich der Modelle nach spezifischen Fähigkeitskategorien: Coding, Reasoning, Wissenschaft, Mathematik und mehr."
                hashLink="https://artificialanalysis.ai/de#intelligence-category-tabs"
                badgeColor="blue"
              />
              <ArtificialAnalysisBenchmarkCard
                id="intelligence-efficiency-tabs"
                icon="⚡"
                title="Intelligenz-Effizienz"
                description="Verhältnis von Intelligence Index zu Kosten pro Task – welche Modelle liefern die beste Qualität pro investiertem Dollar?"
                hashLink="https://artificialanalysis.ai/de#intelligence-efficiency-tabs"
                badgeColor="blue"
              />
              <ArtificialAnalysisBenchmarkCard
                id="intelligence-comparison-tabs"
                icon="⚖️"
                title="Modell-Vergleich"
                description="Head-to-Head Vergleich beliebiger Modellpaare über alle Benchmark-Dimensionen hinweg."
                hashLink="https://artificialanalysis.ai/de#intelligence-comparison-tabs"
                badgeColor="blue"
              />
              <ArtificialAnalysisBenchmarkCard
                id="frontier-over-time"
                icon="📈"
                title="Intelligenz über Zeit"
                description="Zeitverlauf der Intelligence-Scores von Frontier-Sprachmodellen – wie hat sich die KI-Leistungskurve entwickelt?"
                hashLink="https://artificialanalysis.ai/de#intelligenz-von-frontier-sprachmodellen-im-zeitverlauf"
                badgeColor="blue"
              />
            </div>
          </section>

          {/* ── CODING AGENT INDEX ──────────────────────────────────── */}
          <section>
            <div className="mb-5 flex items-center justify-between border-b border-border/60 pb-3">
              <div>
                <h2 className="font-serif-heading text-2xl font-bold tracking-tight text-foreground">
                  💻 Coding Agent Index
                </h2>
                <p className="text-xs text-muted mt-1">
                  Leistung führender Programmieragenten bei End-to-End-Aufgaben der Softwareentwicklung
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ArtificialAnalysisBenchmarkCard
                id="coding-agents-tabs"
                icon="🤖"
                title="Coding Agent Bestenliste"
                description="Vergleich von KI-Coding-Agents nach Erfolgsrate, Ausführungszeit und Kosten bei echten Software-Entwicklungsaufgaben."
                hashLink="https://artificialanalysis.ai/de#coding-agents-tabs"
                badge="Coding"
                badgeColor="purple"
              />
              <ArtificialAnalysisBenchmarkCard
                id="coding-agent-index-detail"
                icon="📋"
                title="Artificial Analysis Coding Agent Index"
                description="Methodologie und vollständige Bestenliste des Coding Agent Index – inkl. Harness-Vergleich (Codex, Grok Build, SWE-Bench)."
                hashLink="https://artificialanalysis.ai/de/agents/coding-agents"
                badge="Index"
                badgeColor="purple"
              />
            </div>
          </section>

          {/* ── BILD & VIDEO ───────────────────────────────────────── */}
          <section>
            <div className="mb-5 flex items-center justify-between border-b border-border/60 pb-3">
              <div>
                <h2 className="font-serif-heading text-2xl font-bold tracking-tight text-foreground">
                  🖼️ Bild & Video
                </h2>
                <p className="text-xs text-muted mt-1">
                  Führende Bildgenerierungs- und Videogenerierungsmodelle aus Image Arena und Video Arena
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ArtificialAnalysisBenchmarkCard
                id="media-leaderboards-tabs"
                icon="🎨"
                title="Bild & Video Bestenlisten"
                description="Ranglisten der besten Text-to-Image und Text-to-Video Modelle mit 95%-Konfidenzintervallen aus menschlichen Bewertungen."
                hashLink="https://artificialanalysis.ai/de#media-leaderboards-tabs"
                badge="Arena"
                badgeColor="rose"
              />
              <ArtificialAnalysisBenchmarkCard
                id="image-arena"
                icon="🖼️"
                title="Image Arena Leaderboard"
                description="Vollständige Bestenliste der Bildgenerierungsmodelle – von Midjourney bis DALL-E 4 und Stable Diffusion."
                hashLink="https://artificialanalysis.ai/image/leaderboard/text-to-image"
                badge="Text→Image"
                badgeColor="rose"
              />
            </div>
          </section>

          {/* ── SPRACHE ─────────────────────────────────────────────── */}
          <section>
            <div className="mb-5 flex items-center justify-between border-b border-border/60 pb-3">
              <div>
                <h2 className="font-serif-heading text-2xl font-bold tracking-tight text-foreground">
                  🎙️ Sprache
                </h2>
                <p className="text-xs text-muted mt-1">
                  Text-to-Speech Arena, Speech-to-Text und Speech-to-Speech Evaluationen
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ArtificialAnalysisBenchmarkCard
                id="speech-leaderboards-tabs"
                icon="🎧"
                title="Sprach-Bestenlisten"
                description="Führende Modelle aus der Text-to-Speech Arena sowie Speech-to-Text und Speech-to-Speech Evaluationen mit Elo-Scores."
                hashLink="https://artificialanalysis.ai/de#speech-leaderboards-tabs"
                badge="TTS / STT"
                badgeColor="cyan"
              />
              <ArtificialAnalysisBenchmarkCard
                id="speech-to-speech-index"
                icon="🔊"
                title="Speech-to-Speech Index"
                description="Big Bench Audio, Full Duplex Bench und 𝜏-Voice – der neue Syntheseindex für native Speech-to-Speech Modellqualität."
                hashLink="https://artificialanalysis.ai/de/text-to-speech/leaderboard/provider-voice"
                badge="NEU"
                badgeColor="cyan"
                isNew
              />
            </div>
          </section>

          {/* ── FÄHIGKEITSINDIZES ───────────────────────────────────── */}
          <section>
            <div className="mb-5 flex items-center justify-between border-b border-border/60 pb-3">
              <div>
                <h2 className="font-serif-heading text-2xl font-bold tracking-tight text-foreground">
                  🧩 Fähigkeitsindizes
                </h2>
                <p className="text-xs text-muted mt-1">
                  Leistung von Modellen bei spezifischen Fähigkeiten und in bestimmten Branchen
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <ArtificialAnalysisBenchmarkCard
                id="artificial-analysis-agentic-index"
                icon="🤖"
                title="Agentic Index"
                description="Der Artificial Analysis Agentic Index bewertet Modelle in komplexen agentischen Aufgaben – von Werkzeugnutzung bis zu Multi-Step-Reasoning."
                hashLink="https://artificialanalysis.ai/de#artificial-analysis-agentic-index"
                badge="Agentic"
                badgeColor="amber"
              />
              <ArtificialAnalysisBenchmarkCard
                id="aa-briefcase-tabs"
                icon="💼"
                title="AA-Briefcase"
                description="Frontier Knowledge Work – Modelle werden auf reale Wissensarbeitsaufgaben getestet, die von Branchenexperten erstellt wurden."
                hashLink="https://artificialanalysis.ai/de#aa-briefcase-tabs"
                badge="NEU"
                badgeColor="amber"
                isNew
              />
              <ArtificialAnalysisBenchmarkCard
                id="omniscience-tabs"
                icon="🌐"
                title="AA-Omniscience"
                description="Wissensbreite und Non-Hallucination Rate – misst faktisches Wissen und die Verlässlichkeit der Modellantworten."
                hashLink="https://artificialanalysis.ai/de#omniscience-tabs"
                badgeColor="amber"
              />
            </div>
          </section>

          {/* ── BENCHMARKS / EVALUATIONS ─────────────────────────────── */}
          <section>
            <div className="mb-5 flex items-center justify-between border-b border-border/60 pb-3">
              <div>
                <h2 className="font-serif-heading text-2xl font-bold tracking-tight text-foreground">
                  🔬 Benchmark-Evaluationen
                </h2>
                <p className="text-xs text-muted mt-1">
                  Einzelne Evaluationen die in den Intelligence Index v4.1.1 einfließen
                </p>
              </div>
              <Link
                href="https://artificialanalysis.ai/evaluations"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                Alle Evaluationen ↗
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <ArtificialAnalysisBenchmarkCard
                id="intelligence-evaluations"
                icon="🧠"
                title="Intelligence Evaluations (Übersicht)"
                description="Alle Benchmarks die in den Intelligence Index einfließen – mit Gewichtung, Methodik und aktuellen Ranglisten."
                hashLink="https://artificialanalysis.ai/de#intelligence-evaluations"
                badge="Index"
                badgeColor="blue"
              />
              <ArtificialAnalysisBenchmarkCard
                id="gdpval-aa"
                icon="💹"
                title="GDPval-AA v2"
                description="Agentische Real-World-Arbeitsaufgaben – misst die Fähigkeit der Modelle, echte wirtschaftliche Aufgaben zu lösen (Elo-basiert)."
                hashLink="https://artificialanalysis.ai/de#gdpval-aa-v2-leaderboard"
                badge="Agentic"
                badgeColor="emerald"
              />
              <ArtificialAnalysisBenchmarkCard
                id="tau3-banking"
                icon="🏦"
                title="𝜏³-Banking"
                description="Agentisches Tool-Use in der Finanzbranche – Tau2-Bench v1.0.1 Dataset für realistische Banking-Aufgaben."
                hashLink="https://artificialanalysis.ai/evaluations/tau3-banking"
                badgeColor="emerald"
              />
              <ArtificialAnalysisBenchmarkCard
                id="terminal-bench"
                icon="💻"
                title="Terminal-Bench v2.1"
                description="Agentisches Coding und Terminal-Nutzung – misst die Fähigkeit der Modelle, komplexe Kommandozeilen-Aufgaben zu lösen."
                hashLink="https://artificialanalysis.ai/evaluations/terminalbench-v2-1"
                badgeColor="purple"
              />
              <ArtificialAnalysisBenchmarkCard
                id="scicode"
                icon="🔭"
                title="SciCode"
                description="Wissenschaftliches Coding – komplexe Programmieraufgaben aus der wissenschaftlichen Forschung."
                hashLink="https://artificialanalysis.ai/evaluations/scicode"
                badgeColor="cyan"
              />
              <ArtificialAnalysisBenchmarkCard
                id="hle"
                icon="🎓"
                title="Humanity's Last Exam"
                description="Der anspruchsvollste akademische Benchmark – Fragen auf Expertenniveau aus allen Wissensgebieten."
                hashLink="https://artificialanalysis.ai/evaluations/humanitys-last-exam"
                badge="HLE"
                badgeColor="rose"
              />
              <ArtificialAnalysisBenchmarkCard
                id="gpqa-diamond"
                icon="💎"
                title="GPQA Diamond"
                description="Graduate-Level Google-Proof Q&A – wissenschaftliches Denken auf Doktorandenniveau in Biologie, Chemie, Physik."
                hashLink="https://artificialanalysis.ai/evaluations/gpqa-diamond"
                badge="Science"
                badgeColor="blue"
              />
              <ArtificialAnalysisBenchmarkCard
                id="aa-lcr"
                icon="📄"
                title="AA-LCR"
                description="Long Context Reasoning – misst die Fähigkeit der Modelle, lange Dokumente zu verstehen und daraus zu schlussfolgern."
                hashLink="https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning"
                badgeColor="amber"
              />
            </div>
          </section>

          {/* ── ENDPOINT ACCURACY (NEU) ─────────────────────────────── */}
          <section>
            <div className="mb-5 flex items-center justify-between border-b border-border/60 pb-3">
              <div>
                <h2 className="font-serif-heading text-2xl font-bold tracking-tight text-foreground">
                  🎯 Endpoint Accuracy Index
                  <span className="ml-2 rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-400">NEU</span>
                </h2>
                <p className="text-xs text-muted mt-1">
                  Same Model, Different Accuracy – Misst ob Anbieter-Endpunkte die volle Modellqualität liefern
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <ArtificialAnalysisBenchmarkCard
                id="endpoint-accuracy-index"
                icon="🎯"
                title="Endpoint Accuracy Index"
                description="Misst, wie viel der ursprünglichen Modellqualität jeder serverlose API-Endpunkt tatsächlich liefert – kritisch für Unternehmensauswahl."
                hashLink="https://artificialanalysis.ai/de#endpoint-accuracy-index-gpt-oss-120b-high"
                badge="NEU"
                badgeColor="emerald"
                isNew
              />
              <ArtificialAnalysisBenchmarkCard
                id="output-speed-vs-price"
                icon="⚡"
                title="Ausgabegeschwindigkeit vs. Preis"
                description="Vergleich von Token-Output-Geschwindigkeit gegen Preis über alle Anbieter-Endpunkte – optimal für Latenz-sensitive Anwendungen."
                hashLink="https://artificialanalysis.ai/de#output-speed-vs-price-gpt-oss-120b-high"
                badgeColor="emerald"
              />
              <ArtificialAnalysisBenchmarkCard
                id="cache-preise"
                icon="💾"
                title="Cache & Preisstruktur"
                description="Cache-Hit-Preise, Input- und Output-Kosten für Top-Modelle – Kostenoptimierung für Hochvolumen-Anwendungen."
                hashLink="https://artificialanalysis.ai/de#preise-cache-treffer-eingabe-und-ausgabe-gpt-oss-120b-high"
                badgeColor="emerald"
              />
            </div>
          </section>

          {/* ── OPENNESS INDEX ──────────────────────────────────────── */}
          <section>
            <div className="mb-5 border-b border-border/60 pb-3">
              <h2 className="font-serif-heading text-2xl font-bold tracking-tight text-foreground">
                🔓 Openness Index
              </h2>
              <p className="text-xs text-muted mt-1">
                Offenheit von KI-Modellen – Open Weights, Transparenz und Zugänglichkeit
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ArtificialAnalysisBenchmarkCard
                id="openness-tabs"
                icon="🔓"
                title="Openness Index Bestenliste"
                description="Rangliste der Modelle nach Offenheits-Score – bewertet Verfügbarkeit der Gewichte, Dokumentation und kommerzielle Nutzbarkeit."
                hashLink="https://artificialanalysis.ai/de#openness-tabs"
                badgeColor="emerald"
              />
              <ArtificialAnalysisBenchmarkCard
                id="openness-vs-intelligence"
                icon="📉"
                title="Openness vs. Intelligence"
                description="Scatter-Plot: Intelligenz-Index gegen Openness-Index – welche Open-Source-Modelle konkurrieren mit proprietären Lösungen?"
                hashLink="https://artificialanalysis.ai/de#artificial-analysis-openness-index-vs-artificial-analysis-intelligence-index"
                badgeColor="emerald"
              />
            </div>
          </section>

          {/* ── KOSTEN & TOKEN ──────────────────────────────────────── */}
          <section>
            <div className="mb-5 border-b border-border/60 pb-3">
              <h2 className="font-serif-heading text-2xl font-bold tracking-tight text-foreground">
                💰 Kosten, Token & Preise
              </h2>
              <p className="text-xs text-muted mt-1">
                Kostenvergleich, Ausgabetokens und Preisstruktur aller führenden Modelle
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <ArtificialAnalysisBenchmarkCard
                id="output-tokens-tabs"
                icon="📝"
                title="Ausgabetokens"
                description="Maximale Output-Token-Länge und tatsächliches Ausgabeverhalten der Modelle bei unterschiedlichen Aufgabentypen."
                hashLink="https://artificialanalysis.ai/de#output-tokens-tabs"
                badgeColor="amber"
              />
              <ArtificialAnalysisBenchmarkCard
                id="cost-tabs"
                icon="💵"
                title="Kosten pro Aufgabe"
                description="Gewichtete Durchschnittskosten pro Intelligence Index Task – inkl. Input, Cache, Reasoning und Output-Token-Preisen."
                hashLink="https://artificialanalysis.ai/de#cost-tabs"
                badgeColor="amber"
              />
              <ArtificialAnalysisBenchmarkCard
                id="total-cost-tabs"
                icon="🧮"
                title="Gesamtkosten-Analyse"
                description="Vollständige Kostenberechnung über alle Evaluationen – optimal für Budget-Planung in Unternehmensanwendungen."
                hashLink="https://artificialanalysis.ai/de#total-cost-tabs"
                badgeColor="amber"
              />
              <ArtificialAnalysisBenchmarkCard
                id="price-tabs"
                icon="🏷️"
                title="Preisvergleich"
                description="Direkter Preisvergleich aller Anbieter für Input- und Output-Token – mit und ohne Kontext-Caching."
                hashLink="https://artificialanalysis.ai/de#price-tabs"
                badgeColor="amber"
              />
            </div>
          </section>

          {/* ── GESCHWINDIGKEIT & LATENZ ─────────────────────────────── */}
          <section>
            <div className="mb-5 border-b border-border/60 pb-3">
              <h2 className="font-serif-heading text-2xl font-bold tracking-tight text-foreground">
                🚀 Geschwindigkeit & Latenz
              </h2>
              <p className="text-xs text-muted mt-1">
                Output-Geschwindigkeit, Time-to-First-Token und agentische Ausführungszeiten
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ArtificialAnalysisBenchmarkCard
                id="speed-tabs"
                icon="⚡"
                title="Ausgabegeschwindigkeit"
                description="Token-Output-Geschwindigkeit in Tokens/Sekunde und Time-to-First-Token (TTFT) über alle Anbieter-Endpunkte."
                hashLink="https://artificialanalysis.ai/de#speed-tabs"
                badgeColor="blue"
              />
              <ArtificialAnalysisBenchmarkCard
                id="agentic-speed-tabs"
                icon="🤖"
                title="Agentische Geschwindigkeit"
                description="Zeit pro Aufgabe bei agentischen Benchmarks – kritisch für Produktions-Deployments von KI-Agenten-Systemen."
                hashLink="https://artificialanalysis.ai/de#agentic-speed-tabs"
                badgeColor="blue"
              />
            </div>
          </section>

          {/* ── ANBIETER ─────────────────────────────────────────────── */}
          <section>
            <div className="mb-5 border-b border-border/60 pb-3">
              <h2 className="font-serif-heading text-2xl font-bold tracking-tight text-foreground">
                🏢 Anbieter-Vergleich
              </h2>
              <p className="text-xs text-muted mt-1">
                Vergleich von API-Anbietern nach Leistung, Verfügbarkeit und Preis
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ArtificialAnalysisBenchmarkCard
                id="providers-tabs"
                icon="🏢"
                title="Anbieter-Bestenliste"
                description="Alle API-Anbieter im Vergleich: OpenAI, Anthropic, Google, Mistral, Together AI, Groq, Fireworks und mehr – nach Latenz, Preis und Verfügbarkeit."
                hashLink="https://artificialanalysis.ai/de#providers-tabs"
                badgeColor="purple"
              />
              <ArtificialAnalysisBenchmarkCard
                id="provider-detail"
                icon="🔍"
                title="Detaillierter Anbieter-Drilldown"
                description="Spezifische Endpunkt-Analyse für jedes Modell – welcher Anbieter liefert die beste Kombination aus Qualität und Preis?"
                hashLink="https://artificialanalysis.ai/de#providers-tabs"
                badgeColor="purple"
              />
            </div>
          </section>

          {/* ── KI-TRENDS ────────────────────────────────────────────── */}
          <section>
            <div className="mb-5 border-b border-border/60 pb-3">
              <h2 className="font-serif-heading text-2xl font-bold tracking-tight text-foreground">
                📈 KI-Trends
              </h2>
              <p className="text-xs text-muted mt-1">
                Langfristige Entwicklungen in der KI-Branche – von Modell-Performance bis Investitionsausgaben
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <ArtificialAnalysisBenchmarkCard
                id="trends-frontier"
                icon="🚀"
                title="Frontier Intelligence über Zeit"
                description="Wie entwickeln sich die besten KI-Modelle? Historische Zeitreihe der Intelligenz-Scores seit GPT-4."
                hashLink="https://artificialanalysis.ai/de/trends#frontier-language-model-intelligence-over-time"
                badgeColor="blue"
              />
              <ArtificialAnalysisBenchmarkCard
                id="trends-capex"
                icon="💸"
                title="Investitionsausgaben Big Tech"
                description="CapEx der großen Technologieunternehmen im Zeitverlauf – wie viel investieren Microsoft, Google, Amazon und Meta in KI-Infrastruktur?"
                hashLink="https://artificialanalysis.ai/de/trends#investitionsausgaben-groer-technologieunternehmen-im-zeitverlauf"
                badgeColor="amber"
              />
              <ArtificialAnalysisBenchmarkCard
                id="trends-release-date"
                icon="📅"
                title="Intelligenz vs. Veröffentlichungsdatum"
                description="Korrelation zwischen Modell-Veröffentlichungsdatum und Intelligence Index Score – das Tempo der KI-Entwicklung im Blick."
                hashLink="https://artificialanalysis.ai/de/trends#intelligence-index-vs-verffentlichungsdatum"
                badgeColor="blue"
              />
              <ArtificialAnalysisBenchmarkCard
                id="trends-by-country"
                icon="🌍"
                title="Frontier-Modelle nach Land"
                description="Intelligenz von Frontier-Sprachmodellen nach Herkunftsland – USA, China, Europa und weitere im internationalen Vergleich."
                hashLink="https://artificialanalysis.ai/de/trends#intelligenz-von-frontier-sprachmodellen-nach-land-im-zeitverlauf"
                badgeColor="emerald"
              />
              <ArtificialAnalysisBenchmarkCard
                id="trends-leading-by-country"
                icon="🏆"
                title="Führende Modelle nach Land"
                description="Welches Land hat aktuell das leistungsstärkste Modell? Aktuelle Rangliste führender Modelle nach Herkunft."
                hashLink="https://artificialanalysis.ai/de/trends#leading-models-by-country"
                badgeColor="emerald"
              />
              <ArtificialAnalysisBenchmarkCard
                id="trends-training-tokens"
                icon="🧬"
                title="Trainings-Tokens nach Modell"
                description="Vergleich der Trainingstoken-Mengen der führenden Modelle – Skalierungsgesetze und die Grenzen von More Data."
                hashLink="https://artificialanalysis.ai/de/trends#trainingstokens-nach-modell"
                badgeColor="purple"
              />
            </div>
          </section>
        </div>

        {/* ─── Rechte Spalte: Changelog + Modell-Berater ─────────── */}
        <aside className="flex flex-col gap-6">

          {/* Modell-Berater CTA */}
          <GlassCard className="relative overflow-hidden p-6">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                <div>
                  <h3 className="font-bold text-foreground">Modell-Berater</h3>
                  <p className="text-[11px] text-muted">Personalisierte KI-Empfehlung</p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Erhalten Sie personalisierte Empfehlungen für KI-Modelle anhand Ihrer Prioritäten für Intelligenz, Geschwindigkeit und Preis – direkt von Artificial Analysis.
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://artificialanalysis.ai/de/models/recommend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90"
                >
                  🎯 Modell-Berater starten ↗
                </Link>
                <Link
                  href="https://artificialanalysis.ai/de/leaderboards/models"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/5 px-4 py-2.5 text-xs font-semibold text-primary transition-all hover:bg-primary/10"
                >
                  📊 LLM-Bestenliste ↗
                </Link>
              </div>
            </div>
          </GlassCard>

          {/* Changelog Widget */}
          <GlassCard className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted">
                📋 Neuester Changelog
              </h3>
              <Link
                href="https://artificialanalysis.ai/de/changelog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-primary hover:underline"
              >
                Alle →
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              {changelog.map((entry, idx) => (
                <Link
                  key={idx}
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 rounded-lg border border-border/60 bg-surface/60 p-3 transition-all hover:border-primary/40 hover:bg-surface-hover"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold ${typeColorMap[entry.type]}`}>
                      {typeIconMap[entry.type]} {typeLabelMap[entry.type]}
                    </span>
                    <time className="font-mono text-[10px] text-muted">{entry.dateLabel}</time>
                  </div>
                  <p className="text-xs font-semibold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {entry.title}
                  </p>
                  {entry.intelligenceIndex !== undefined && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-muted">
                      🧠 Intelligence Index: <strong className="text-primary">{entry.intelligenceIndex}</strong>
                    </span>
                  )}
                  {entry.description && (
                    <p className="text-[10px] text-muted leading-relaxed line-clamp-2">{entry.description}</p>
                  )}
                </Link>
              ))}
            </div>
            <Link
              href="https://artificialanalysis.ai/de/changelog"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border/60 bg-surface/60 py-2 text-xs font-semibold text-muted transition-all hover:border-primary/40 hover:text-primary"
            >
              Vollständigen Changelog ansehen ↗
            </Link>
          </GlassCard>

          {/* Quick Links */}
          <GlassCard className="p-5">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted">🔗 Schnellzugriff AA</h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "https://artificialanalysis.ai/de/methodology/intelligence-benchmarking", label: "⚖️ Methodik Intelligence Index" },
                { href: "https://artificialanalysis.ai/de/agents", label: "🤖 KI-Agenten entdecken" },
                { href: "https://artificialanalysis.ai/de/trends", label: "📈 KI-Trends" },
                { href: "https://artificialanalysis.ai/evaluations", label: "📋 Alle Evaluationen" },
                { href: "https://artificialanalysis.ai/de/pricing", label: "💳 Premium-Tarife" },
                { href: "https://artificialanalysis.ai/articles", label: "📰 Artikel & Analysen" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-muted transition-all hover:bg-surface-hover hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </GlassCard>
        </aside>
      </div>
    </div>
  );
}
