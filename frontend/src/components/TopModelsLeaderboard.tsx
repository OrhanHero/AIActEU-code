"use client";

import { useState } from "react";
import { topModels, type TopModel } from "@/lib/topModels";
import { useLanguage } from "@/context/LanguageContext";

export function TopModelsLeaderboard() {
  const [expandedModel, setExpandedModel] = useState<number | null>(1); // Default rank 1 expanded
  const { t } = useLanguage();

  return (
    <section className="my-12">
      {/* Section Header */}
      <div className="mb-6 flex flex-col gap-2 border-b border-border/70 pb-4">
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] font-semibold text-primary uppercase tracking-wider">
            {t("leaderboardBadge")}
          </span>
          <span className="font-mono text-xs text-muted">2026</span>
        </div>
        <h2 className="font-serif-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {t("leaderboardTitle")}
        </h2>
        <p className="text-sm leading-relaxed text-muted">
          {t("leaderboardDesc")}
        </p>
      </div>

      {/* Leaderboard Cards List */}
      <div className="flex flex-col gap-4">
        {topModels.map((model: TopModel) => {
          const isExpanded = expandedModel === model.rank;

          return (
            <div
              key={model.name}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                isExpanded
                  ? "border-primary/50 bg-surface/95 shadow-xl shadow-primary/10 gradient-border-glow"
                  : "border-border/70 bg-surface/80 hover:border-primary/40 hover:bg-surface-hover"
              }`}
            >
              {/* Main Bar Header */}
              <div
                onClick={() => setExpandedModel(isExpanded ? null : model.rank)}
                className="flex cursor-pointer flex-wrap items-center justify-between gap-4 p-5"
              >
                <div className="flex items-center gap-4">
                  {/* Rank Badge */}
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl font-mono text-sm font-bold shadow-md ${
                      model.rank === 1
                        ? "bg-amber-500 text-black shadow-amber-500/20"
                        : model.rank === 2
                        ? "bg-slate-300 text-slate-950 shadow-slate-300/20"
                        : model.rank === 3
                        ? "bg-amber-700 text-white shadow-amber-700/20"
                        : "bg-primary/10 text-primary border border-primary/20"
                    }`}
                  >
                    #{model.rank}
                  </span>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {model.name}
                      </h3>
                      <span className="text-xs text-muted">({model.provider})</span>
                    </div>
                    <p className="text-xs font-mono text-primary/90 mt-0.5">
                      ⭐ {model.benchmarkHighlights}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Cutoff Pill */}
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1 font-mono text-xs font-medium text-foreground shadow-sm">
                    {t("cutoffLabel")}: <strong className="text-primary">{model.cutoff}</strong>
                  </span>

                  {/* License Pill */}
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-mono text-xs font-semibold ${
                      model.license === "Open-Weight"
                        ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : "border border-border bg-background/80 text-muted"
                    }`}
                  >
                    {model.license}
                  </span>

                  {/* Expand Chevron */}
                  <button
                    type="button"
                    aria-label="Details umschalten"
                    className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted transition-transform group-hover:text-foreground"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Collapsible Details */}
              {isExpanded && (
                <div className="border-t border-border/70 bg-background/40 p-5 sm:p-6 backdrop-blur-md">
                  <div className="mb-4 rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs leading-relaxed text-foreground">
                    <strong className="text-primary">{t("strengthsLabel")}:</strong> {model.strengths}
                  </div>

                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted">
                    {t("sourcesBreakdown")}
                  </h4>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Webinhalte */}
                    <div className="rounded-xl border border-border/60 bg-surface/90 p-3.5 shadow-sm">
                      <div className="mb-1 flex items-center gap-2 text-xs font-bold text-foreground">
                        {t("webSources")}
                      </div>
                      <p className="text-xs leading-relaxed text-muted">{model.dataSources.web}</p>
                    </div>

                    {/* Bücher & Fachliteratur */}
                    <div className="rounded-xl border border-border/60 bg-surface/90 p-3.5 shadow-sm">
                      <div className="mb-1 flex items-center gap-2 text-xs font-bold text-foreground">
                        {t("bookSources")}
                      </div>
                      <p className="text-xs leading-relaxed text-muted">{model.dataSources.books}</p>
                    </div>

                    {/* Quellcode */}
                    <div className="rounded-xl border border-border/60 bg-surface/90 p-3.5 shadow-sm">
                      <div className="mb-1 flex items-center gap-2 text-xs font-bold text-foreground">
                        {t("codeSources")}
                      </div>
                      <p className="text-xs leading-relaxed text-muted">{model.dataSources.code}</p>
                    </div>

                    {/* Mediendateien */}
                    <div className="rounded-xl border border-border/60 bg-surface/90 p-3.5 shadow-sm">
                      <div className="mb-1 flex items-center gap-2 text-xs font-bold text-foreground">
                        {t("mediaSources")}
                      </div>
                      <p className="text-xs leading-relaxed text-muted">{model.dataSources.media}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
