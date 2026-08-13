import type { Provider } from "@/lib/toolsDirectory";

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <a
      href={provider.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-1.5 rounded-lg border border-border bg-surface p-4 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 font-medium text-foreground group-hover:text-primary transition-colors">
          {provider.name}
          {provider.warning && (
            <span title={provider.warning} aria-label={`Sicherheitshinweis: ${provider.warning}`}>
              ⚠️
            </span>
          )}
        </span>
        <span className="text-muted opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
          ↗
        </span>
      </div>
      <p className="text-sm text-muted leading-relaxed">{provider.description}</p>
    </a>
  );
}
