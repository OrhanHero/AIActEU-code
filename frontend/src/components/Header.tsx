"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBox } from "./SearchBox";
import { useLanguage } from "@/context/LanguageContext";

function LanguageToggleButton({ className }: { className?: string }) {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Sprache / Language"
      title="Sprache zwischen Deutsch und Englisch umschalten"
      className={`inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary transition-all duration-200 hover:scale-105 hover:bg-primary/20 hover:shadow-sm ${className ?? ""}`}
    >
      <span className={lang === "de" ? "font-bold text-primary" : "text-muted"}>DE</span>
      <span className="text-muted">/</span>
      <span className={lang === "en" ? "font-bold text-primary" : "text-muted"}>EN</span>
    </button>
  );
}

function NavLinks({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("navStart") },
    { href: "/kategorien", label: t("navKategorien") },
    { href: "/ki-analyse", label: t("navKiAnalyse") },
    { href: "/tutorials", label: t("navTutorials") },
    { href: "/verzeichnis", label: t("navVerzeichnis") },
    { href: "/publikationen", label: t("navPublikationen") },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} onClick={onNavigate} className={className}>
          {link.label}
        </Link>
      ))}
    </>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 font-semibold">
          {/* Logo Button mit EU AI Act Governance Bild */}
          <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-xl border border-primary/30 shadow-md shadow-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/60 group-hover:shadow-primary/40">
            <Image
              src="/images/hero_ai_act_governance.png"
              alt="AIActEU Logo"
              fill
              sizes="40px"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              AIActEU
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted">
              KI News Hub
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium md:flex lg:gap-6">
          <NavLinks className="text-muted transition-all duration-200 hover:text-primary hover:scale-105" />
        </nav>

        <div className="flex items-center gap-3 text-sm">
          <SearchBox className="hidden w-52 md:block" />
          <LanguageToggleButton className="hidden sm:inline-flex" />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-primary/50 hover:text-foreground md:hidden"
          >
            <span className="sr-only">Menü</span>
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-nav" className="border-t border-border bg-background/95 backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4">
            <SearchBox onSubmit={() => setMobileOpen(false)} />
            <nav className="flex flex-col gap-1 text-sm font-medium">
              <NavLinks
                className="rounded-lg px-3 py-2 text-muted transition-all hover:bg-surface-hover hover:text-foreground"
                onNavigate={() => setMobileOpen(false)}
              />
            </nav>
            <LanguageToggleButton className="self-start" />
          </div>
        </div>
      )}
    </header>
  );
}
