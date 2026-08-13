// Ein Icon je der 12 Hauptkategorien (frontend/src/lib/categories.ts), als Ersatz für die
// bisherigen Emoji-Platzhalter (siehe DESIGN.md, "Offene Punkte für Phase 2/4"). Einheitlicher
// Strichstil (strokeWidth 1.75, round caps) passend zum LogoMark in Header.tsx.

import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  "breaking-news": (
    <>
      <path d="M6 16v-4a6 6 0 1 1 12 0v4l1.5 2.5h-15z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </>
  ),
  technisch: (
    <>
      <path d="M12 4l8 4.5-8 4.5-8-4.5 8-4.5z" />
      <path d="M4 13.5 12 18l8-4.5" />
    </>
  ),
  research: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <line x1="15" y1="15" x2="20" y2="20" />
    </>
  ),
  business: (
    <>
      <path d="M4 16l5-5 4 4 7-8" />
      <path d="M15 7h5v5" />
    </>
  ),
  policy: (
    <>
      <line x1="12" y1="3" x2="12" y2="19" />
      <line x1="5" y1="7" x2="19" y2="7" />
      <path d="M5 7l-2.5 5.5a3 3 0 0 0 5 0z" />
      <path d="M19 7l2.5 5.5a3 3 0 0 1-5 0z" />
      <line x1="8" y1="20" x2="16" y2="20" />
    </>
  ),
  education: (
    <>
      <path d="M4 5.5c2.5-1.3 5-1.3 8 0v13c-3-1.3-5.5-1.3-8 0z" />
      <path d="M20 5.5c-2.5-1.3-5-1.3-8 0v13c3-1.3 5.5-1.3 8 0z" />
    </>
  ),
  tools: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />
  ),
  hardware: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10" y="10" width="4" height="4" rx="0.5" />
      <line x1="7" y1="10" x2="4" y2="10" />
      <line x1="7" y1="14" x2="4" y2="14" />
      <line x1="17" y1="10" x2="20" y2="10" />
      <line x1="17" y1="14" x2="20" y2="14" />
      <line x1="10" y1="7" x2="10" y2="4" />
      <line x1="14" y1="7" x2="14" y2="4" />
      <line x1="10" y1="17" x2="10" y2="20" />
      <line x1="14" y1="17" x2="14" y2="20" />
    </>
  ),
  nachhaltigkeit: (
    <>
      <path d="M5 20c9 0 14-5 14-14V4h-2C8 4 5 9 5 18v2z" />
      <path d="M5 20c0-5 2-9 6-12" />
    </>
  ),
  applications: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </>
  ),
  community: (
    <>
      <circle cx="9" cy="12" r="6" />
      <circle cx="15" cy="12" r="6" />
    </>
  ),
  safety: (
    <>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
};

export function CategoryIcon({ slug, className = "h-6 w-6" }: { slug: string; className?: string }) {
  const content = paths[slug];
  if (!content) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {content}
    </svg>
  );
}
