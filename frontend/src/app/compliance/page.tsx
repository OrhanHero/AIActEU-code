import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EU-Verhaltenskodex & Transparenz",
  description: "Wie AIActEU KI-generierte und kuratierte Inhalte kennzeichnet und den EU-Verhaltenskodex umsetzt.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-2 text-xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="space-y-2 text-muted leading-relaxed">{children}</div>
    </section>
  );
}

export default function CompliancePage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground">
        EU-Verhaltenskodex & Transparenz
      </h1>
      <p className="mb-8 text-muted leading-relaxed">
        Diese Seite erklärt, wie AIActEU KI-generierte und -kuratierte Inhalte kennzeichnet und
        welche Prinzipien der EU-Verhaltenskodex für KI-Inhalte für unsere Arbeit vorgibt.
        Vollständige Checkliste: siehe <code className="text-sm">COMPLIANCE.md</code> im Repository.
      </p>

      <Section title="Wie wir Inhalte kennzeichnen">
        <p>Jeder Artikel trägt zwei Badges:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong className="text-foreground">🤖 KI-kuratiert</strong> – die Zusammenfassung
            wurde KI-unterstützt erstellt.
          </li>
          <li>
            <strong className="text-foreground">✓ Redaktionell geprüft</strong> vs.{" "}
            <strong className="text-foreground">⚙️ Automatisiert</strong> – zeigt an, ob ein
            Mensch den Artikel vor Veröffentlichung geprüft hat.
          </li>
        </ul>
      </Section>

      <Section title="Quellenintegrität">
        <p>
          Jeder Artikel verlinkt zur Originalquelle. Wir erstellen keine eigenständigen
          Tatsachenbehauptungen ohne nachvollziehbare Quelle.
        </p>
      </Section>

      <Section title="Faktencheck">
        <p>
          Breaking News, Policy-Themen und alles mit gesellschaftlicher Tragweite durchläuft eine
          redaktionelle Prüfung, bevor es veröffentlicht wird. Details regelt unsere{" "}
          <code className="text-sm">EDITORIAL_POLICY.md</code>.
        </p>
      </Section>

      <Section title="Redaktionelle Verantwortung">
        <p>
          Die KI-Unterstützung dieser Seite betrifft Aggregation, Zusammenfassung und Tagging.
          Die editorielle Kontrolle – Auswahl, Einordnung, Freigabe kritischer Inhalte – liegt bei
          Menschen.
        </p>
      </Section>
    </div>
  );
}
