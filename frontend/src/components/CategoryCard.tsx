import Link from "next/link";
import type { Category } from "@/lib/categories";
import { CategoryIcon } from "./CategoryIcon";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/kategorien/${category.slug}`}
      className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border/80 bg-surface/90 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 text-primary transition-transform duration-300 group-hover:scale-110">
          <CategoryIcon slug={category.slug} className="h-5 w-5" />
        </span>
        <span className="text-sm font-semibold text-primary opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5">
          →
        </span>
      </div>
      <h3 className="font-bold text-foreground transition-colors group-hover:text-primary">
        {category.title}
      </h3>
      <p className="text-xs leading-relaxed text-muted">{category.description}</p>
    </Link>
  );
}
