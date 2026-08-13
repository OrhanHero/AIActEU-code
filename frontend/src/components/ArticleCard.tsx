import { getCategoryForArticle, type Article } from "@/lib/articles";
import { ComplianceBadges } from "./ComplianceBadges";
import { CategoryIcon } from "./CategoryIcon";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }).format(
    new Date(iso)
  );
}

export function ArticleCard({ article }: { article: Article }) {
  const category = getCategoryForArticle(article);

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-surface/90 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2 text-xs">
          {category && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-medium text-primary">
              <CategoryIcon slug={category.slug} className="h-3.5 w-3.5" />
              {category.title}
            </span>
          )}
          <time dateTime={article.publishedAt} className="font-mono text-[11px] text-muted">
            {formatDate(article.publishedAt)}
          </time>
        </div>

        <h3 className="font-serif-heading text-lg font-bold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
          {article.title}
        </h3>

        <p className="text-sm leading-relaxed text-muted line-clamp-3">{article.summary}</p>

        {article.editorsNote && (
          <div className="rounded-xl border border-accent/30 bg-accent/10 p-3 text-xs leading-relaxed text-foreground">
            <span className="font-semibold text-accent">Redaktions-Tipp:</span> {article.editorsNote}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 pt-1 text-xs">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 font-mono text-[10px] text-muted transition-colors group-hover:border-primary/30"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/70 pt-3">
        <ComplianceBadges article={article} />
        <a
          href={article.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-transform group-hover:translate-x-0.5 hover:underline"
        >
          {article.sourceName} <span className="text-[10px]">↗</span>
        </a>
      </div>
    </article>
  );
}

