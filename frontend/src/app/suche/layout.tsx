import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suche",
  description: "Artikel nach Titel, Zusammenfassung oder Tags durchsuchen.",
};

export default function SucheLayout({ children }: { children: React.ReactNode }) {
  return children;
}
