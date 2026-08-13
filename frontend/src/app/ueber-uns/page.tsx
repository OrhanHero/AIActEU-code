import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Mission, Redaktion und Kontakt der AIActEU KI News Plattform.",
};

export default function UeberUnsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground">Über uns</h1>
      <p className="mb-8 text-muted leading-relaxed">
        AIActEU ist eine zentrale, kuratierte Nachrichtenplattform für den deutschsprachigen
        KI-Sektor – von Forschung über Startups bis Regulierung, global und mit deutscher
        Perspektive.
      </p>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold tracking-tight text-foreground">Mission</h2>
        <p className="text-muted leading-relaxed">
          Wir wollen einen verlässlichen Gesamtüberblick über KI-Entwicklungen bieten, statt
          Nutzer:innen zwischen Dutzenden Newslettern, Blogs und Foren aufzuteilen – transparent
          gekennzeichnet nach dem{" "}
          <Link href="/compliance" className="text-primary hover:underline">
            EU-Verhaltenskodex
          </Link>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold tracking-tight text-foreground">Redaktion</h2>
        <p className="text-muted leading-relaxed">
          Bis zur vollständigen Team-Besetzung trägt die Projektleitung die redaktionelle
          Gesamtverantwortung. Namentliche Nennung des Editorial Boards folgt, sobald das Team
          steht (siehe PROJEKTPLAN.md, Action Item &bdquo;Team Assembly&ldquo;).
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold tracking-tight text-foreground">Kontakt</h2>
        <p className="text-muted leading-relaxed">
          Für Presseanfragen, Korrektur-Hinweise oder Feedback:{" "}
          <a href="mailto:info@aiacteu.de" className="text-primary font-medium hover:underline">
            info@aiacteu.de
          </a>
          . Rechtliche Pflichtangaben finden sich im{" "}
          <Link href="/impressum" className="text-primary hover:underline">
            Impressum
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
