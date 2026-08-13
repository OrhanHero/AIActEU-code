import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tutorials, getTutorial } from "@/lib/tutorials";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tutorials.map((t) => ({ slug: t.slug }));
}

export const dynamicParams = false;

async function loadContent(slug: string) {
  try {
    return (await import(`@/content/tutorials/${slug}.mdx`)) as {
      default: ComponentType;
      metadata?: { title?: string; description?: string };
    };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mod = await loadContent(slug);
  if (!mod?.metadata) return {};
  return { title: mod.metadata.title, description: mod.metadata.description };
}

export default async function TutorialPage({ params }: Props) {
  const { slug } = await params;
  const tutorial = getTutorial(slug);
  const mod = await loadContent(slug);

  if (!tutorial || !mod) {
    notFound();
  }

  const Content = mod.default;

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/tutorials" className="text-sm text-primary hover:underline">
        ← Alle Tutorials
      </Link>

      <div className="mt-4 mb-8">
        <div className="mb-2 flex items-center gap-2 text-xs text-muted">
          <span className="rounded-full border border-border px-2 py-0.5">{tutorial.level}</span>
          {tutorial.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">{tutorial.title}</h1>
      </div>

      <article>
        <Content />
      </article>
    </div>
  );
}
