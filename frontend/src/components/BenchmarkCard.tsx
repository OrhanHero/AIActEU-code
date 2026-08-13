import type { Benchmark } from "@/lib/toolsDirectory";

export function BenchmarkCard({ benchmark }: { benchmark: Benchmark }) {
  return (
    <a
      href={benchmark.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {benchmark.name}
          </h3>
          <p className="text-xs text-muted">{benchmark.organization}</p>
        </div>
        <span className="text-muted opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
          ↗
        </span>
      </div>
      <p className="text-sm text-muted leading-relaxed">{benchmark.description}</p>
      <div className="mt-1 border-t border-border pt-2 text-xs text-muted">
        <p>
          <span className="font-medium text-foreground">Misst:</span> {benchmark.misst}
        </p>
        <p className="mt-1">
          <span className="font-medium text-foreground">Update-Frequenz:</span> {benchmark.updateFrequency}
        </p>
      </div>
    </a>
  );
}
