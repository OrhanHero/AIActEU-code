"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getSystemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Liest die vom Inline-Script in layout.tsx bereits gesetzte Theme-Präferenz
    // (Browser-Storage/System-API sind serverseitig nicht verfügbar).
    const stored = localStorage.getItem("theme") as Theme | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initiale Theme-Erkennung erfordert Browser-APIs
    setTheme(stored ?? (getSystemPrefersDark() ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!theme) {
    // Verhindert Layout-Shift / Hydration-Mismatch, bevor die Präferenz bekannt ist.
    return <span className="inline-block h-8 w-8" aria-hidden />;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? "Zu hellem Modus wechseln" : "Zu dunklem Modus wechseln"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted hover:text-foreground hover:border-foreground/30 transition-colors"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
