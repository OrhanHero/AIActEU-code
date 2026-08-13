import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// Globale Formatierung für Tutorial-Inhalte (frontend/src/app/tutorials/**/*.mdx).
// Handgestylte Tailwind-Klassen statt @tailwindcss/typography, um konsistent mit dem
// Rest der Seite zu bleiben (siehe DESIGN.md Typografie-/Farb-Tokens).
const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-4 mt-10 text-3xl font-semibold tracking-tight text-foreground first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-3 mt-10 text-2xl font-semibold tracking-tight text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-2 mt-8 text-lg font-semibold text-foreground">{children}</h3>
  ),
  p: ({ children }) => <p className="mb-4 leading-relaxed text-muted">{children}</p>,
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-1.5 pl-5 text-muted">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-1.5 pl-5 text-muted">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  a: ({ href, children }) => {
    const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href ?? "#"} className="text-primary hover:underline">
        {children}
      </Link>
    );
  },
  code: ({ children }) => (
    <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm text-foreground">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mb-4 overflow-x-auto rounded-lg border border-border bg-surface p-4 text-sm">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-4 border-l-2 border-primary/40 pl-4 italic text-muted">
      {children}
    </blockquote>
  ),
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  hr: () => <hr className="my-8 border-border" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
