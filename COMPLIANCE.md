# EU-Verhaltenskodex- & DSGVO-Compliance-Checkliste

Entscheidung getroffen: 02.08.2026 (Action Item #6 aus PROJEKTPLAN.md).
Operationalisiert die Prinzipien aus dem Abschnitt "EU-Verhaltenskodex Compliance"
in [`PROJEKTPLAN.md`](./PROJEKTPLAN.md) für Redaktion und Entwicklung.

Rechtlicher Rahmen: EU-Verhaltenskodex für Desinformation ("Code of Practice on
Disinformation" / DSA-Transparenzpflichten), EU AI Act (Transparenzpflichten für
KI-generierte Inhalte, Art. 50), DSGVO.

## 1. Transparenz bei KI-Nutzung

| Maßnahme | Status | Umsetzung |
|---|---|---|
| Offenlegung, welche Inhalte KI-generiert/-kuratiert sind | ✅ Pflicht | EU-Kennzeichnungs-Icon "AI GENERATED" auf jeder Artikel-Card, siehe [`DESIGN.md`](./DESIGN.md#badges--tags-eu-verhaltenskodex-kennzeichnung) |
| Tool-Markierung ("KI-unterstützte Zusammenfassung", "Automatisiertes Tagging") | ✅ Pflicht | Im Artikel-Footer als Metadatenzeile |
| Human-Review-Flag sichtbar | ✅ Pflicht | `humanReviewed: boolean` im Content-Modell (siehe [`ARCHITECTURE.md`](./ARCHITECTURE.md#content-modell-strapi-collection-types-phase-2)), Badge "✓ Redaktionell geprüft" vs. "⚙️ Automatisiert" |
| Allgemeiner KI-Nutzungs-Disclaimer | ✅ Pflicht | Footer jeder Seite + dedizierte `/compliance`-Seite |

## 2. Quellenintegrität & Haftung

| Maßnahme | Status | Umsetzung |
|---|---|---|
| Jeder Artikel verlinkt zur Originalquelle | ✅ Pflicht | Pflichtfeld `sourceUrl` + `sourceName` im Content-Modell, immer sichtbar auf Card & Detailseite |
| Verantwortliche Person / Editorial Board benannt | ✅ Pflicht | `/ueber-uns`-Seite, Kontakt-E-Mail |
| Impressum (§5 DDG / §18 MStV) | ✅ Pflicht (rechtlich) | `/impressum`-Seite, Angaben ausgefüllt, rechtlich geprüft |
| Datenschutzerklärung (DSGVO Art. 13/14) | ✅ Pflicht (rechtlich) | `/datenschutz`-Seite, rechtlich geprüft |

## 3. Faktencheck-Prozess

| Maßnahme | Status | Umsetzung |
|---|---|---|
| Breaking News & kontroverse Themen werden von Menschen verifiziert | ✅ Pflicht | Editorial Workflow, siehe [`EDITORIAL_POLICY.md`](./EDITORIAL_POLICY.md) |
| Korrektur-Policy mit Änderungsverlauf | ✅ Pflicht | "Zuletzt aktualisiert"-Zeitstempel + Korrekturhinweis-Feld im Content-Modell (Phase 2) |
| Redaktioneller Disclaimer | ✅ Pflicht | Footer-Text: "Diese Seite nutzt KI zur Inhalts-Kuratierung, editorielle Kontrolle liegt bei Menschen." |

## 4. Bias & Fairness

| Maßnahme | Status | Umsetzung |
|---|---|---|
| Multi-Perspektive (Lab/Academic/Startup/Policy) | ✅ Pflicht | Quellen-Mix in [`data/sources.json`](./data/sources.json) deckt alle 7 Kategorien ab |
| Sprachliche Vielfalt (DE/EN) | 🚧 Phase 2/4 | Sprach-Toggle im Header vorhanden (UI), Übersetzungs-Pipeline offen |
| Regionale Balance (Global + Deutschland) | ✅ Pflicht | Eigene Unterkategorie "Deutsches KI-Ökosystem" neben globalen News |

## 5. User Empowerment

| Maßnahme | Status | Umsetzung |
|---|---|---|
| Klare Kennzeichnung (Quelle, Update-Frequenz, KI-Beteiligung) | ✅ Pflicht | Artikel-Card-Metadaten |
| Nachvollziehbarkeit ("Warum wird mir das gezeigt?") | 🚧 Phase 3+ | Erfordert Recommendation-Engine, siehe [`ARCHITECTURE.md`](./ARCHITECTURE.md) |
| Personalisierbare Filter (Interesse, Sprache, Kategorie) | 🚧 Phase 2/4 | Such/Filter-UI im Header als Platzhalter vorhanden |

## 6. DSGVO-spezifische Punkte

- **Keine Tracking-Cookies ohne Consent** – Analytics privacy-first (siehe PROJEKTPLAN Non-Funktionale Anforderungen), Cookie-Banner erst bei Einführung von Tracking/Newsletter-Formularen nötig.
- **Newsletter-Anmeldung** (Phase 2/4): Double-Opt-In Pflicht, Datenschutzhinweis direkt am Formular, Abmeldelink in jeder Mail.
- **Kontaktformular/Impressum-E-Mail**: Datenverarbeitung im Datenschutztext dokumentieren.
- **Hosting-Standort**: EU-Cloud (Hetzner) für Backend/DB lt. [`ARCHITECTURE.md`](./ARCHITECTURE.md), keine Datenübertragung in Drittstaaten ohne Angemessenheitsbeschluss.

## Offene Punkte (vor Public-Beta-Launch zu klären)

- [ ] Die aktuell eingebundenen "AI GENERATED"/"AI MODIFIED"-Icons
  (`frontend/public/labels/`) sind eine KI-Nachbildung der Vorlage von
  [digital-strategy.ec.europa.eu/.../eu-icons-labelling-ai-generated-content](https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content),
  kein Download des offiziellen Asset-Kits. Vor Launch gegen das offizielle
  Kit abgleichen bzw. ersetzen.
- [ ] Cookie-Consent-Lösung, sobald Newsletter/Analytics mit Personenbezug eingeführt wird
- [ ] Auftragsverarbeitungsverträge (AVV) mit allen eingesetzten Drittanbietern (Hosting, ggf. Claude API) abschließen
- [ ] Redaktionelle Verantwortlichkeit (Editorial Board) namentlich benennen, sobald Team steht
