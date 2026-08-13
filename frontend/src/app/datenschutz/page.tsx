import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung gemäß DSGVO.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6 text-muted leading-relaxed">
      <h2 className="mb-2 text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="mb-1 font-medium text-foreground">{title}</h3>
      {children}
    </div>
  );
}

export default function DatenschutzPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight text-foreground">
        Datenschutzerklärung
      </h1>

      <Section title="1. Datenschutz auf einen Blick">
        <SubSection title="Allgemeine Hinweise">
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
            Text aufgeführten Datenschutzerklärung.
          </p>
        </SubSection>

        <SubSection title="Datenerfassung auf dieser Website">
          <p className="mb-2">
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
          </p>
          <p className="mb-3">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
            Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle&ldquo; in
            dieser Datenschutzerklärung entnehmen.
          </p>
          <p className="mb-2">
            <strong>Wie erfassen wir Ihre Daten?</strong>
          </p>
          <p className="mb-3">
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
            durch unsere IT-Systeme bzw. die unseres Hosting-Anbieters erfasst. Das sind vor allem
            technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
            Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese
            Website betreten.
          </p>
          <p className="mb-2">
            <strong>Wofür nutzen wir Ihre Daten?</strong>
          </p>
          <p className="mb-3">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
            gewährleisten. Diese Website betreibt kein Tracking und keine Analyse-Tools; es werden
            keine Nutzerprofile erstellt.
          </p>
          <p className="mb-2">
            <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
          </p>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
            Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
            Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Außerdem haben Sie
            das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei
            der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema
            Datenschutz können Sie sich jederzeit an uns wenden.
          </p>
        </SubSection>
      </Section>

      <Section title="2. Hosting">
        <SubSection title="IONOS (Webspace)">
          <p className="mb-3">
            Wir hosten die Inhalte unserer Website bei der IONOS SE, Elgendorfer Str. 57, 56410
            Montabaur (nachfolgend IONOS). Wenn Sie unsere Website besuchen, erfasst IONOS
            verschiedene Logfiles inklusive Ihrer IP-Adresse. Details entnehmen Sie der
            Datenschutzerklärung von IONOS:{" "}
            <a
              href="https://www.ionos.de/terms-gtc/terms-privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              ionos.de/terms-gtc/terms-privacy
            </a>
            .
          </p>
          <p>
            Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir
            haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer
            Website. Mit IONOS besteht ein Vertrag über Auftragsverarbeitung (AVV), der
            gewährleistet, dass personenbezogene Daten unserer Websitebesucher nur nach unseren
            Weisungen und unter Einhaltung der DSGVO verarbeitet werden.
          </p>
        </SubSection>

        <SubSection title="Cloudflare (Nameserver / DNS)">
          <p>
            Die Namensauflösung (DNS) dieser Domain erfolgt über Cloudflare, Inc., 101 Townsend
            St, San Francisco, CA 94107, USA. Cloudflare fungiert hier ausschließlich als
            Nameserver-Anbieter; der eigentliche Webseiteninhalt sowie das SSL/TLS-Zertifikat
            werden weiterhin direkt über IONOS bereitgestellt und ausgeliefert, nicht über
            Cloudflare geleitet. Bei jeder DNS-Anfrage können jedoch technisch bedingt Daten (u. a.
            IP-Adressen von anfragenden Resolvern) bei Cloudflare verarbeitet werden. Details
            entnehmen Sie der Datenschutzerklärung von Cloudflare:{" "}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              cloudflare.com/privacypolicy
            </a>
            . Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (zuverlässige
            Erreichbarkeit unserer Domain).
          </p>
        </SubSection>
      </Section>

      <Section title="3. Allgemeine Hinweise und Pflichtinformationen">
        <SubSection title="Datenschutz">
          <p className="mb-3">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der
            Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
            Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>
        </SubSection>

        <SubSection title="Hinweis zur verantwortlichen Stelle">
          <p className="mb-3">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p>Orhan Kahraman</p>
          <p className="mb-3">Weichselstr. 41, 12045 Berlin</p>
          <p className="mb-1">Telefon: 03028603973</p>
          <p>
            E-Mail:{" "}
            <a href="mailto:info@aiacteu.de" className="text-primary hover:underline">
              info@aiacteu.de
            </a>
          </p>
        </SubSection>

        <SubSection title="Speicherdauer">
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
            wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
            Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder
            eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
            wir keine anderen rechtlich zulässigen Gründe für die Speicherung haben; im
            letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
          </p>
        </SubSection>

        <SubSection title="Widerspruchsrecht gegen die Datenerhebung (Art. 21 DSGVO)">
          <p>
            Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
            haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
            ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.
            Wenn Sie widersprechen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr
            verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die
            Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen.
          </p>
        </SubSection>

        <SubSection title="Beschwerderecht bei der zuständigen Aufsichtsbehörde">
          <p>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
            einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
            Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
          </p>
        </SubSection>

        <SubSection title="Auskunft, Berichtigung, Löschung und Einschränkung">
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
            unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
            Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ggf. ein Recht auf
            Berichtigung, Löschung oder Einschränkung der Verarbeitung dieser Daten. Hierzu sowie
            zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns
            wenden.
          </p>
        </SubSection>

        <SubSection title="SSL- bzw. TLS-Verschlüsselung">
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
            Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
            daran, dass die Adresszeile des Browsers von „http://&ldquo; auf „https://&ldquo;
            wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Das Zertifikat wird über
            unseren Hosting-Anbieter IONOS bereitgestellt.
          </p>
        </SubSection>
      </Section>

      <Section title="4. Lokale Speicherung im Browser">
        <p className="mb-3">
          Diese Website setzt keine Cookies ein. Für die Anzeige-Präferenz (helles/dunkles
          Farbschema) speichert die Seite eine kleine Datenmenge im „Local Storage&ldquo; Ihres
          Browsers ab – direkt auf Ihrem Gerät, nicht auf unseren Servern.
        </p>
        <p>
          Diese Daten enthalten keine personenbezogenen Angaben und werden nicht an uns oder
          Dritte übertragen. Sie sind technisch notwendig, um die von Ihnen genutzte Funktion
          bereitzustellen, und werden daher auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO bzw. § 25
          Abs. 2 Nr. 2 TDDDG ohne separate Einwilligung gespeichert. Sie können diese Daten
          jederzeit selbst über die Einstellungen Ihres Browsers löschen.
        </p>
      </Section>

      <Section title="5. Soziale Netzwerke (externe Links)">
        <p>
          Im Footer dieser Website verlinken wir auf unsere Profile bei TikTok, YouTube, X und
          GitHub. Es handelt sich dabei um einfache Hyperlinks ohne eingebettete Widgets, Plugins
          oder Tracking-Pixel dieser Anbieter – beim Aufruf unserer Seite findet keine Datenübertragung
          an diese Dienste statt. Erst wenn Sie aktiv auf einen dieser Links klicken und die
          jeweilige Plattform besuchen, gilt die Datenschutzerklärung des jeweiligen Anbieters.
        </p>
      </Section>

      <Section title="6. Google Fonts (lokales Hosting)">
        <p>
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google
          Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert und
          werden zusammen mit der Website ausgeliefert. Eine Verbindung zu Servern von Google
          findet dabei nicht statt.
        </p>
      </Section>
    </div>
  );
}
