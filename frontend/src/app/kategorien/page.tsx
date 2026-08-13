import type { Metadata } from "next";
import { categories } from "@/lib/categories";
import { CategoryCard } from "@/components/CategoryCard";

export const metadata: Metadata = {
  title: "Kategorien",
  description: `Alle ${categories.length} Hauptkategorien der AIActEU KI News Plattform im Überblick.`,
};

export default function KategorienPage() {
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground">Kategorien</h1>
      <p className="mb-8 max-w-2xl text-muted leading-relaxed">
        {categories.length} Hauptkategorien decken das KI-Ökosystem von Forschung bis Regulierung
        ab – global und mit deutscher Perspektive.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}
