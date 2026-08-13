"use client";

import { useLanguage } from "@/context/LanguageContext";
import lastUpdatedData from "@/lib/lastUpdated.json";

export function LiveIndicator({ className = "" }: { className?: string }) {
  const { lang } = useLanguage();

  const formattedTime = lang === "en" ? lastUpdatedData.formattedEN : lastUpdatedData.formattedDE;
  const labelText =
    lang === "en"
      ? `Live · Stand: ${formattedTime} (every 4h)`
      : `Live · Stand: ${formattedTime} (alle 4 Std.)`;

  return (
    <span
      title={`Automatischer Cronjob läuft alle 4 Std. (Letzter Sync: ${formattedTime})`}
      className={`inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/60 px-3 py-1 text-xs text-muted backdrop-blur-sm transition-colors hover:border-primary/40 ${className}`}
    >
      <span className="relative flex h-2 w-2" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      <span>{labelText}</span>
    </span>
  );
}
