import Link from "next/link";
import type { Tutorial } from "@/lib/tutorials";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }).format(
    new Date(iso)
  );
}

export function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <Link
      href={`/tutorials/${tutorial.slug}`}
      className="group flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg"
    >
      <div className="flex items-center justify-between gap-2 text-xs text-muted">
        <span className="rounded-full border border-border px-2 py-0.5">{tutorial.level}</span>
        <time dateTime={tutorial.updatedAt}>Aktualisiert {formatDate(tutorial.updatedAt)}</time>
      </div>
      <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors">
        {tutorial.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{tutorial.summary}</p>
      <div className="flex flex-wrap gap-1.5 text-xs text-muted">
        {tutorial.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
