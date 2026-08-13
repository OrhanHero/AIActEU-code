import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/categories";
import { getBreakingArticles, getEditorsPicks, getLatestArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Sidebar } from "@/components/Sidebar";
import { LiveIndicator } from "@/components/LiveIndicator";
import { GlassCard } from "@/components/ui/GlassCard";
import { CategoryIcon } from "@/components/CategoryIcon";
import { AiGeneratedLabel } from "@/components/AiGeneratedLabel";

export default function Home() {
  const breaking = getBreakingArticles();
  const editorsPicks = getEditorsPicks();
  const latest = getLatestArticles(6);
  const leadArticle = breaking[0] || latest[0];

  return (
    <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
      {/* Top Ticker Status Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-3 text-xs">
          <LiveIndicator />
          <span className="font-mono text-[11px] font-semibold text-primary uppercase tracking-wider">
            EU AI ACT FEED ACTIVE · 2026 REVISION
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-xs text-muted">
          <span>Verifizierte RSS-Quellen: <strong className="text-foreground">24 Quellen</strong></span>
          <span>Transparenz-Score: <strong className="text-emerald-500">100% DSGVO-Konform</strong></span>
        </div>
      </div>

      {/* Editorial Magazine Hero Section */}
      <section className="relative mb-12 overflow-hidden">
        {/* Ambient Glows */}
        <div
          className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 animate-float rounded-full bg-blue-500/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 top-10 h-96 w-96 animate-float rounded-full bg-purple-500/20 blur-3xl [animation-delay:-4s]"
          aria-hidden
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Main Hero Story (Left 8 cols) */}
          <div className="lg:col-span-8">
            <GlassCard className="group relative flex h-full flex-col justify-between overflow-hidden p-6 sm:p-8 gradient-border-glow">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[11px] font-semibold text-accent uppercase tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                    Hauptstory der Woche
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {leadArticle ? new Date(leadArticle.publishedAt).toLocaleDateString("de-DE") : "Heute"}
                  </span>
                </div>

                <h1 className="font-serif-heading text-2xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl group-hover:text-primary transition-colors">
                  {leadArticle?.title || "Zentrale KI-News, Hardware & EU AI Act Governance"}
                </h1>

                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  {leadArticle?.summary || "Kuratierte Nachrichten und wissenschaftliche Einblicke für den deutschsprachigen KI-Sektor – von Hardware & Silicon über LLMs und RAG bis EU-Verhaltenskodex-konformer Kennzeichnung."}
                </p>

                {/* Hero Editorial Cover Image Window */}
                <div className="relative mt-3 h-64 w-full overflow-hidden rounded-2xl border border-border/80 bg-slate-950/80 shadow-2xl sm:h-80">
                  <Image
                    src="/images/hero_ai_act_governance.png"
                    alt="EU AI Act Governance Illustration"
                    fill
                    priority
                    className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Top Overlay Badges */}
                  <div className="absolute top-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 z-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-lg border border-white/20 bg-black/70 px-2.5 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur-md shadow-md">
                        🇪🇺 EU AI ACT ART. 50
                      </span>
                      <AiGeneratedLabel className="rounded-lg border border-white/20 bg-black/70 px-2 py-0.5 backdrop-blur-md shadow-md" />
                    </div>
                    {leadArticle?.humanReviewed && (
                      <span className="rounded-lg border border-emerald-500/40 bg-emerald-950/80 px-2.5 py-1 font-mono text-[11px] font-semibold text-emerald-300 backdrop-blur-md shadow-md">
                        ✓ Redaktionell verifiziert
                      </span>
                    )}
                  </div>

                  {/* Bottom Overlay Controls */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 z-10">
                    <span className="rounded-lg border border-white/20 bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-md shadow-md">
                      Quelle: {leadArticle?.sourceName || "KI Redaktion"}
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {leadArticle?.studyUrl && (
                        <a
                          href={leadArticle.studyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={leadArticle.studyLabel || "Zugrundeliegende Studie"}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-black/70 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-105 hover:bg-black/85"
                        >
                          📄 Studie lesen ↗
                        </a>
                      )}
                      <a
                        href={leadArticle?.sourceUrl || "/compliance"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-xl transition-all duration-200 hover:scale-105 hover:bg-primary/90"
                      >
                        Vollständigen Artikel lesen ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Metrics Inside Hero */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border/60 pt-4 sm:grid-cols-4">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-foreground">24/7 Feed</span>
                  <span className="text-[11px] text-muted">Echtzeit Ingestion</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary">Artikel 50</span>
                  <span className="text-[11px] text-muted">EU Kennzeichnung</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-foreground">Exascale</span>
                  <span className="text-[11px] text-muted">Hardware & Silicon</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-accent">12 Sparten</span>
                  <span className="text-[11px] text-muted">Forschung & Policy</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Breaking News Stack (Right 4 cols) */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <div className="flex items-center justify-between rounded-xl border border-border/80 bg-surface/80 px-4 py-3 backdrop-blur-md">
              <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <span className="inline-flex h-2 w-2 rounded-full bg-accent animate-ping" />
                🚨 Eilmeldungen &amp; Updates
              </h2>
              <span className="font-mono text-[10px] text-muted">{breaking.length} Artikel</span>
            </div>

            <div className="flex flex-1 flex-col gap-3">
              {breaking.slice(0, 3).map((article) => (
                <div
                  key={article.slug}
                  className="group relative flex flex-col justify-between rounded-xl border border-border/70 bg-surface/90 p-4 transition-all duration-300 hover:border-primary/50 hover:bg-surface-hover hover:shadow-lg"
                >
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-mono text-primary">{article.sourceName}</span>
                      <time className="text-muted">{new Date(article.publishedAt).toLocaleDateString("de-DE")}</time>
                    </div>
                    <h3 className="font-serif-heading text-sm font-bold text-foreground line-clamp-2 transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                  </div>
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-[11px] font-semibold text-primary hover:underline"
                  >
                    Quelle öffnen ↗
                  </a>
                </div>
              ))}

              {/* Karte 1: Top 10 KI-Modelle Register Shortcut */}
              <Link
                href="/verzeichnis"
                className="group relative flex flex-col justify-between rounded-xl border border-primary/30 bg-primary/5 p-4 transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-primary">🏆 TRANSPARENZ-REGISTER</span>
                    <span className="rounded-full bg-amber-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-400">
                      ART. 53
                    </span>
                  </div>
                  <h3 className="font-serif-heading text-sm font-bold text-foreground mt-1.5 group-hover:text-primary transition-colors">
                    Top 10 KI-Frontier-Modelle &amp; Daten-Herkunft
                  </h3>
                  <p className="mt-1 text-[11px] text-muted leading-relaxed">
                    Claude 3.5, OpenAI o1, DeepSeek-R1 u.v.m. mit Knowledge Cutoffs &amp; Quellen-Breakdown.
                  </p>
                </div>
                <span className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold text-primary group-hover:underline">
                  Modell-Register öffnen →
                </span>
              </Link>

              {/* Karte 2: EU AI Act Art. 50 Compliance Guide Shortcut */}
              <Link
                href="/compliance"
                className="group relative flex flex-col justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-emerald-400">🇪🇺 COMPLIANCE GUIDE</span>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400">
                      ART. 50
                    </span>
                  </div>
                  <h3 className="font-serif-heading text-sm font-bold text-foreground mt-1.5 group-hover:text-emerald-400 transition-colors">
                    EU AI Act Kennzeichnung &amp; Transparenz
                  </h3>
                  <p className="mt-1 text-[11px] text-muted leading-relaxed">
                    Vorgaben für KI-generierte Inhalte, Wasserzeichen &amp; redaktionelle Prüfung.
                  </p>
                </div>
                <span className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 group-hover:underline">
                  Compliance-Guidelines lesen →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Quick Pills */}
      <section className="mb-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-foreground">Fokus-Themen</h2>
          <Link href="/kategorien" className="text-xs font-semibold text-primary hover:underline">
            Alle 12 Kategorien anzeigen →
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/kategorien/${cat.slug}`}
              className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-hover hover:text-primary hover:shadow-md"
            >
              <CategoryIcon slug={cat.slug} className="h-3.5 w-3.5 text-primary transition-transform group-hover:scale-110" />
              <span>{cat.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Main Grid: Content & Sidebar */}
      <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
        <div className="flex flex-col gap-12">
          {/* Editor's Picks */}
          {editorsPicks.length > 0 && (
            <section>
              <div className="mb-6 flex items-center justify-between border-b border-border/60 pb-3">
                <div>
                  <h2 className="font-serif-heading text-2xl font-bold tracking-tight text-foreground">⭐ Redaktionsempfehlungen</h2>
                  <p className="text-xs text-muted">Besonders relevante Analysen und Berichte für die KI-Praxis</p>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {editorsPicks.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          )}

          {/* Neueste Entwicklungen */}
          <section>
            <div className="mb-6 flex items-center justify-between border-b border-border/60 pb-3">
              <div>
                <h2 className="font-serif-heading text-2xl font-bold tracking-tight text-foreground">⚡ Neueste Entwicklungen</h2>
                <p className="text-xs text-muted">Aktuelle Beiträge aus verifizierten KI-Quellen</p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {latest.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}

