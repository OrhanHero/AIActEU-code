import type { Metadata } from "next";
import Link from "next/link";
import { providerDomains, benchmarks, getProvidersByDomain } from "@/lib/toolsDirectory";
import { ProviderCard } from "@/components/ProviderCard";
import { BenchmarkCard } from "@/components/BenchmarkCard";
import { TopModelsLeaderboard } from "@/components/TopModelsLeaderboard";

export const metadata: Metadata = {
  title: "Top 10 KI-Modelle & Benchmark-Verzeichnis",
  description:
    "Transparenz-Register der Top 10 KI-Frontier-Modelle aus den globalen Benchmarks inklusive Datenstichtag und Herkunft der Trainingsdaten gemäß EU AI Act Art. 53.",
};

export default function VerzeichnisPage() {
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-serif-heading mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Anbieter- &amp; Benchmark-Verzeichnis
      </h1>
      <p className="mb-6 max-w-3xl text-muted leading-relaxed">
        Die führenden KI-Frontier-Modelle aus globalen Evaluationen inklusive Datenstichtag und Trainingsdaten-Aufschlüsselung nach EU-Transparenz-Kriterien sowie die wichtigsten Anbieter und Tools. Für laufende Berichterstattung siehe die{" "}
        <Link href="/kategorien" className="text-primary hover:underline">
          Kategorien
        </Link>
        .
      </p>

      {/* KI-Analyse Banner */}
      <Link
        href="/ki-analyse"
        className="mb-10 flex items-center justify-between gap-4 rounded-2xl border border-purple-500/30 bg-purple-500/5 px-5 py-4 transition-all hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-lg group"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">🔬</span>
          <div>
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
              Unabhängige KI-Benchmarks & Analyse
            </p>
            <p className="text-xs text-muted">
              Intelligence Index, Coding Agent Index, Kosten, Geschwindigkeit & Modell-Berater → Artificial Analysis
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-lg border border-purple-500/40 bg-purple-500/10 px-3 py-1.5 text-xs font-bold text-purple-400 group-hover:bg-purple-500/20 transition-colors">
          KI-Analyse →
        </span>
      </Link>

      {/* Top 10 KI-Modelle Leaderboard */}
      <TopModelsLeaderboard />

      {/* Benchmarks */}
      <section className="mb-14 border-t border-border/70 pt-10">
        <h2 className="font-serif-heading mb-1 text-2xl font-bold tracking-tight text-foreground">
          Top-3-Benchmark-Plattformen
        </h2>
        <p className="mb-4 text-sm text-muted">
          Ausgewählt nach Bekanntheit und Zitierhäufigkeit in der Community.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benchmarks.map((benchmark) => (
            <BenchmarkCard key={benchmark.name} benchmark={benchmark} />
          ))}
        </div>
      </section>

      {/* Anbieter nach Domäne */}
      <div className="flex flex-col gap-12">
        {providerDomains.map((domain) => {
          const domainProviders = getProvidersByDomain(domain.slug);
          return (
            <section key={domain.slug} id={domain.slug}>
              <div className="mb-4 flex items-start gap-3">
                <span className="text-2xl" aria-hidden>
                  {domain.emoji}
                </span>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {domain.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">{domain.description}</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {domainProviders.map((provider) => (
                  <ProviderCard key={provider.name} provider={provider} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
