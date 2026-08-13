import type { Metadata } from "next";
import Link from "next/link";
import { tutorials } from "@/lib/tutorials";
import { TutorialCard } from "@/components/TutorialCard";

export const metadata: Metadata = {
  title: "Tutorials",
  description: "Schritt-für-Schritt-Anleitungen für lokale KI: Ollama, RAG, Bildgenerierung und mehr.",
};

export default function TutorialsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground">Tutorials</h1>
      <p className="mb-10 max-w-2xl text-muted leading-relaxed">
        Praktische Anleitungen für den lokalen Betrieb von KI-Modellen – vom ersten Ollama-Setup
        bis zu privater Dokumentensuche ohne Cloud-Abhängigkeit. Redaktionell erstellt, keine
        automatisierte Zusammenfassung (siehe{" "}
        <Link href="/compliance" className="text-primary hover:underline">
          Compliance
        </Link>
        ).
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((tutorial) => (
          <TutorialCard key={tutorial.slug} tutorial={tutorial} />
        ))}
      </div>
    </div>
  );
}
