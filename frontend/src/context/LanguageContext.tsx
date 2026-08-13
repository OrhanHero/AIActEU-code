"use client";

import React, { createContext, useContext, useState } from "react";
import { translations, type Language } from "@/lib/i18n";

type LanguageContextType = {
  lang: Language;
  toggleLanguage: () => void;
  t: (key: keyof typeof translations["de"]) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "de",
  toggleLanguage: () => {},
  t: (key) => translations["de"][key] || key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("app_lang") as Language;
        if (stored === "de" || stored === "en") return stored;
      } catch {
        // Fallback to default
      }
    }
    return "de";
  });

  const toggleLanguage = () => {
    const nextLang: Language = lang === "de" ? "en" : "de";
    setLang(nextLang);
    try {
      localStorage.setItem("app_lang", nextLang);
    } catch {
      // Ignore storage errors
    }
  };

  const t = (key: keyof typeof translations["de"]): string => {
    return translations[lang]?.[key] || translations["de"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
