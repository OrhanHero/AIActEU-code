import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";
import { categoryProviderDomains } from "@/lib/toolsDirectory";
import { CategoryArticleFilter } from "@/components/CategoryArticleFilter";
import { CategoryProviders } from "@/components/CategoryProviders";
import { CategoryIcon } from "@/components/CategoryIcon";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(slug);

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/kategorien" className="text-sm text-primary hover:underline">
        ← Alle Kategorien
      </Link>

      <div className="mt-4 mb-8 flex items-start gap-3">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <CategoryIcon slug={category.slug} className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            {category.title}
          </h1>
          <p className="mt-1 max-w-2xl text-muted leading-relaxed">{category.description}</p>
        </div>
      </div>

      <CategoryArticleFilter articles={categoryArticles} />

      <CategoryProviders domainSlugs={categoryProviderDomains[slug] ?? []} />
    </div>
  );
}
