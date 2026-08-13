"use client";

import { useMemo, useState } from "react";
import { getTopTags, type Article } from "@/lib/articles";
import { ArticleCard } from "./ArticleCard";

function tagButtonClass(active: boolean) {
  return `rounded-full border px-2.5 py-1 text-xs transition-colors ${
    active ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted hover:text-foreground"
  }`;
}

export function CategoryArticleFilter({ articles }: { articles: Article[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => getTopTags(articles), [articles]);

  const filtered = activeTag ? articles.filter((a) => a.tags.includes(activeTag)) : articles;

  if (articles.length === 0) {
    return (
      <p className="text-muted">
        Noch keine Artikel in dieser Kategorie. Die automatisierte Ingestion-Pipeline (Phase 2)
        befüllt diesen Bereich fortlaufend.
      </p>
    );
  }

  return (
    <div>
      {tags.length > 1 && (
        <div className="mb-6 flex flex-wrap gap-1.5">
          <button type="button" onClick={() => setActiveTag(null)} className={tagButtonClass(activeTag === null)}>
            Alle
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={tagButtonClass(activeTag === tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
