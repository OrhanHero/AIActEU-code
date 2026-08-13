import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Pflichtangaben gemäß § 5 DDG / § 18 MStV.",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight text-foreground">Impressum</h1>

      <section className="mb-6 text-muted leading-relaxed">
        <h2 className="mb-2 text-lg font-semibold text-foreground">Angaben gemäß § 5 DDG</h2>
        <p>Orhan Kahraman</p>
        <p>Weichselstr. 41</p>
        <p>12045 Berlin</p>
        <p>Deutschland</p>
      </section>

      <section className="mb-6 text-muted leading-relaxed">
        <h2 className="mb-2 text-lg font-semibold text-foreground">Kontakt</h2>
        <p>Telefon: 03028603973</p>
        <p>
          E-Mail:{" "}
          <a href="mailto:info@aiacteu.de" className="text-primary hover:underline">
            info@aiacteu.de
          </a>
        </p>
      </section>

      <section className="mb-6 text-muted leading-relaxed">
        <h2 className="mb-2 text-lg font-semibold text-foreground">
          Redaktionell verantwortlich
        </h2>
        <p>
          Verantwortlich für den redaktionellen Inhalt gemäß § 18 Abs. 2 Medienstaatsvertrag
          (MStV):
        </p>
        <p>
          Orhan Kahraman ·{" "}
          <a
            href="https://www.linkedin.com/in/orhankahraman/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <p>Weichselstr. 41, 12045 Berlin</p>
      </section>

      <section className="mb-6 text-muted leading-relaxed">
        <h2 className="mb-2 text-lg font-semibold text-foreground">Haftung für Inhalte</h2>
        <p className="mb-3">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
          allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
          erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
          entfernen.
        </p>
      </section>

      <section className="mb-6 text-muted leading-relaxed">
        <h2 className="mb-2 text-lg font-semibold text-foreground">Haftung für Links</h2>
        <p className="mb-3">
          Unser Angebot enthält Links zu externen Websites Dritter (u. a. den Originalquellen der
          von uns kuratierten Artikel), auf deren Inhalte wir keinen Einfluss haben. Deshalb
          können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
          Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
          erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
          Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
      </section>

      <section className="mb-6 text-muted leading-relaxed">
        <h2 className="mb-2 text-lg font-semibold text-foreground">Urheberrecht</h2>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
          der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>

      <section className="text-muted leading-relaxed">
        <h2 className="mb-2 text-lg font-semibold text-foreground">Haftungshinweis</h2>
        <p>
          Diese Plattform kuratiert und fasst Inhalte externer Quellen KI-unterstützt zusammen.
          Für die Richtigkeit externer Inhalte übernehmen wir keine Gewähr; jeder Artikel verlinkt
          zur Originalquelle. Details siehe{" "}
          <a href="/compliance" className="text-primary hover:underline">
            EU-Verhaltenskodex &amp; Transparenz
          </a>
          .
        </p>
      </section>
    </div>
  );
}
