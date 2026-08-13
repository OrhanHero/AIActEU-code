import Link from "next/link";
import { getProviderDomain, getProvidersByDomain } from "@/lib/toolsDirectory";
import { ProviderCard } from "./ProviderCard";

const PREVIEW_COUNT = 6;

export function CategoryProviders({ domainSlugs }: { domainSlugs: string[] }) {
  if (domainSlugs.length === 0) return null;

  return (
    <section className="mt-12 border-t border-border pt-10">
      <h2 className="mb-1 text-xl font-semibold tracking-tight text-foreground">
        Passende Anbieter aus dem Verzeichnis
      </h2>
      <p className="mb-6 text-sm text-muted">
        Nachschlagewerk statt Newsfeed – siehe{" "}
        <Link href="/verzeichnis" className="text-primary hover:underline">
          vollständiges Verzeichnis
        </Link>
        .
      </p>

      <div className="flex flex-col gap-8">
        {domainSlugs.map((slug) => {
          const domain = getProviderDomain(slug);
          const domainProviders = getProvidersByDomain(slug);
          if (!domain || domainProviders.length === 0) return null;
          const preview = domainProviders.slice(0, PREVIEW_COUNT);

          return (
            <div key={slug}>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span aria-hidden>{domain.emoji}</span>
                  {domain.title}
                </h3>
                {domainProviders.length > PREVIEW_COUNT && (
                  <Link
                    href={`/verzeichnis#${slug}`}
                    className="text-xs text-primary hover:underline whitespace-nowrap"
                  >
                    Alle {domainProviders.length} ansehen →
                  </Link>
                )}
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {preview.map((provider) => (
                  <ProviderCard key={provider.name} provider={provider} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
