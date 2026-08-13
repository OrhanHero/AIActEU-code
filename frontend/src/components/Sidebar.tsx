import { articles, getTopTags } from "@/lib/articles";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";

function WidgetCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <GlassCard className="p-6">
      <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted">{title}</h2>
      {children}
    </GlassCard>
  );
}

export function Sidebar() {
  const trendingTags = getTopTags(articles, 10);

  return (
    <aside className="flex flex-col gap-6">
      {/* EU Compliance Highlight Widget */}
      <GlassCard className="relative overflow-hidden p-6">
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            EU Compliance Verified
          </span>
        </div>
        <h3 className="text-base font-bold text-foreground">EU-Verhaltenskodex & Transparenz</h3>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          Alle Beiträge sind transparent gemäß Artikel 50 des EU AI Act hinsichtlich KI-Generierung und humaner Redaktionsprüfung gekennzeichnet.
        </p>
        <Link
          href="/compliance"
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
        >
          Compliance-Richtlinien lesen →
        </Link>
      </GlassCard>

      {/* Artificial Analysis Quellen-Widget */}
      <GlassCard className="relative overflow-hidden p-6">
        <div className="pointer-events-none absolute -left-8 -bottom-8 h-28 w-28 rounded-full bg-purple-500/15 blur-2xl" />
        <div className="relative z-10">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">🔬</span>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                KI-Analyse Quelle
              </span>
            </div>
            <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-purple-400">
              AA
            </span>
          </div>

          <h3 className="text-sm font-bold text-foreground">Artificial Analysis</h3>
          <p className="mt-1.5 text-[11px] leading-relaxed text-muted">
            Unabhängige Benchmarks & Leistungsanalysen für KI-Modelle und API-Anbieter.
          </p>

          {/* Latest Changelog Entries */}
          <div className="mt-4 flex flex-col gap-2">
            {[
              {
                date: "11. Aug.",
                label: "Modell",
                title: "NVIDIA Nemotron 3.5 Lightning",
                url: "https://artificialanalysis.ai/articles/nemotron-3-5-lightning-launch",
                color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
              },
              {
                date: "10. Aug.",
                label: "Artikel",
                title: "Meta Muse Glimmer – Analyse",
                url: "https://artificialanalysis.ai/articles/muse-glimmer",
                color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
              },
              {
                date: "6. Aug.",
                label: "Benchmark",
                title: "Intelligence Index v4.1.1",
                url: "https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-1-1",
                color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
              },
            ].map((entry) => (
              <Link
                key={entry.url}
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2 rounded-lg border border-border/50 bg-surface/60 p-2.5 transition-all hover:border-primary/30 hover:bg-surface-hover"
              >
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className={`rounded-full border px-1.5 py-0.5 font-mono text-[9px] font-bold ${entry.color}`}>
                      {entry.label}
                    </span>
                    <time className="font-mono text-[10px] text-muted">{entry.date}</time>
                  </div>
                  <p className="text-[11px] font-semibold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-1">
                    {entry.title}
                  </p>
                </div>
                <span className="text-[10px] text-muted mt-0.5 shrink-0">↗</span>
              </Link>
            ))}
          </div>

          <div className="mt-3 flex flex-col gap-2">
            <Link
              href="/ki-analyse"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-purple-500/15 border border-purple-500/30 px-3 py-2 text-[11px] font-bold text-purple-400 transition-all hover:bg-purple-500/25"
            >
              🔬 Zur KI-Analyse-Seite →
            </Link>
            <Link
              href="https://artificialanalysis.ai/de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 text-[10px] font-semibold text-muted hover:text-primary hover:underline transition-colors"
            >
              Quelle: artificialanalysis.ai ↗
            </Link>
          </div>
        </div>
      </GlassCard>

      {/* Trending Topics */}
      <WidgetCard title="🔥 Trending Themen">
        <ul className="flex flex-wrap gap-2">
          {trendingTags.map((tag) => (
            <li key={tag}>
              <span className="rounded-xl border border-border/80 bg-surface/80 px-3 py-1.5 text-xs font-medium text-muted transition-all duration-200 hover:border-primary/40 hover:text-foreground hover:shadow-sm">
                #{tag}
              </span>
            </li>
          ))}
        </ul>
      </WidgetCard>

      {/* Real-time Ingestion Metrics */}
      <WidgetCard title="⚡ Ingestion Pipeline">
        <div className="flex flex-col gap-3 text-xs text-muted">
          <div className="flex items-center justify-between border-b border-border/60 pb-2">
            <span>Aktive RSS-Quellen:</span>
            <span className="font-mono font-bold text-foreground">24 Verifiziert</span>
          </div>
          <div className="flex items-center justify-between border-b border-border/60 pb-2">
            <span>Live Artikel-Feed:</span>
            <span className="font-mono font-bold text-foreground">60 Top News</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Fokus-Region:</span>
            <span className="font-semibold text-primary">DACH & EU Sector</span>
          </div>
        </div>
      </WidgetCard>
    </aside>
  );
}
