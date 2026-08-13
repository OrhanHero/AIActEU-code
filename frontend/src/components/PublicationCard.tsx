import type { Publication } from "@/lib/publications";

// publishedDate ist teils nur mit Jahres- oder Monatspräzision bekannt (z. B. bei
// Studien ohne offizielles Tagesdatum) — zeigt dann keine erfundene Genauigkeit an.
function formatDate(iso: string) {
  if (/^\d{4}$/.test(iso)) return iso;
  if (/^\d{4}-\d{2}$/.test(iso)) {
    return new Intl.DateTimeFormat("de-DE", { month: "2-digit", year: "numeric" }).format(new Date(`${iso}-01`));
  }
  return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }).format(
    new Date(iso)
  );
}

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <a
      href={publication.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
          {publication.title}
        </h3>
        <span className="shrink-0 text-muted opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
          ↗
        </span>
      </div>
      <p className="text-xs text-muted">
        {publication.authors} · <time dateTime={publication.publishedDate}>{formatDate(publication.publishedDate)}</time>
      </p>
      <p className="text-sm leading-relaxed text-muted">{publication.summary}</p>
    </a>
  );
}
