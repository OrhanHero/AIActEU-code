"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function SearchBox({ className, onSubmit }: { className?: string; onSubmit?: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const { t } = useLanguage();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/suche?q=${encodeURIComponent(trimmed)}` : "/suche");
    onSubmit?.();
  }

  return (
    <form onSubmit={handleSubmit} role="search" className={className}>
      <label htmlFor="site-search" className="sr-only">
        Artikel durchsuchen
      </label>
      <input
        id="site-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t("searchPlaceholder")}
        className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      />
    </form>
  );
}
