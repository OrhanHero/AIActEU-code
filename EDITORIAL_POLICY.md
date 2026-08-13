# Editorial Policy – Kuratierungs- & Faktencheck-Richtlinien

Entscheidung getroffen: 02.08.2026 (Action Item #3 aus PROJEKTPLAN.md).
Verbindliche Arbeitsgrundlage für Redaktion/Editor's-Picks-Kuration und für die
automatisierte Ingestion-Pipeline (Phase 2/3). Ergänzt [`COMPLIANCE.md`](./COMPLIANCE.md).

## 1. Grundprinzip

80% Automatisierung, 20% redaktionelle Aufsicht (siehe PROJEKTPLAN "Sustainability").
Automatisierung übernimmt Aggregation, Zusammenfassung und Tagging; Menschen
übernehmen Auswahl, Einordnung und Freigabe kritischer Inhalte.

## 2. Content-Pipeline & Freigabestufen

| Stufe | Beschreibung | Publikationsstatus |
|---|---|---|
| 1. Ingestion | RSS/API-Feed liefert Rohartikel (Titel, Link, Datum, Quelle) | Nicht veröffentlicht |
| 2. KI-Zusammenfassung/Tagging | Claude API erstellt Summary + Kategorie-/Tag-Vorschlag | `aiGenerated: true`, `humanReviewed: false` |
| 3. Auto-Publish (unkritische Kategorien) | Tools, Papers, Dev-Blogs, Standard-Lab-News – automatisch live, klar als "⚙️ Automatisiert" markiert | `humanReviewed: false` |
| 4. Redaktionelle Prüfung (kritische Kategorien) | Breaking News, Policy/Regulation, kontroverse/gesellschaftlich relevante Themen | `humanReviewed: true`, erst danach live |
| 5. Editor's Picks | Manuelle Auswahl der 5–10 wichtigsten Artikel/Woche aus bereits publizierten Inhalten | Zusätzliches `editorsPick: true`-Flag |

**Kritische Kategorien, die IMMER Stufe 4 durchlaufen müssen** (nie automatisch
live, unabhängig von der Quelle):
- Breaking News mit gesellschaftlicher Tragweite (z. B. Regulierungsentscheidungen, Sicherheitsvorfälle)
- Policy & Regulation (EU AI Act, DSGVO, nationale Gesetzgebung)
- AI Safety & Ethics (insbesondere Kontroversen, Vorfälle, Jailbreaks)
- Alles mit Personenbezug/Vorwürfen gegenüber Unternehmen oder Personen

## 3. Faktencheck-Kriterien

Ein Artikel gilt als faktengeprüft, wenn:
1. Die Originalquelle verifiziert und verlinkt ist (`sourceUrl` zeigt auf Primärquelle,
   nicht auf Sekundär-/Aggregator-Artikel, wo vermeidbar).
2. Bei Zahlen/Claims (z. B. Funding-Summen, Benchmark-Ergebnisse) mindestens eine
   zweite unabhängige Quelle geprüft wurde, falls die Primärquelle ein Blogpost/PR
   ohne Primärdaten ist.
3. KI-generierte Zusammenfassungen stichprobenartig (mind. 1x wöchentlich pro
   Kategorie) gegen die Originalquelle abgeglichen werden, um Halluzinationen zu
   erkennen.
4. Bei Widerspruch zwischen Quellen: beide Perspektiven im Artikel benennen statt
   einseitig zu werten.

## 4. Korrektur-Policy

- Fehler werden nicht stillschweigend behoben. Jede inhaltliche Korrektur erhält:
  - Sichtbaren Hinweis "Aktualisiert am [Datum]: [kurze Beschreibung der Änderung]"
  - Beibehaltung des ursprünglichen Publikationsdatums (kein Backdating)
- Bei schwerwiegenden Fehlern (falsche Fakten, die Reputationsschaden verursachen
  könnten): zusätzlicher Korrekturvermerk am Artikelanfang.

## 5. Quellenauswahl-Kriterien (für `data/sources.json`)

Eine Quelle wird aufgenommen, wenn sie:
- Nachvollziehbare Urheberschaft hat (kein anonymes Content-Farming)
- Zu mind. einer der 7 Hauptkategorien einen klaren Beitrag liefert
- Bei News-Quellen: Trackrecord an Zuverlässigkeit (etablierte Lab-Blogs, geprüfte
  Newsletter, etablierte Tech-Medien, Peer-Review-Plattformen)
- Bei Policy-Quellen: ausschließlich offizielle/institutionelle Quellen (EU, Bundestag,
  Ministerien, offizielle Aufsichtsbehörden)

Quellen werden vierteljährlich überprüft (tote Feeds, Qualitätsabfall, Themenverschiebung).

## 6. Multi-Perspektiven-Pflicht

Pro Woche muss der Content-Mix über alle publizierten Artikel folgende Verteilung
anstreben (Richtwert, kein hartes Limit):
- Mind. 1 Artikel mit Forschungs-/Academic-Perspektive
- Mind. 1 Artikel mit deutscher/regionaler Perspektive
- Mind. 1 Artikel mit Policy-/Regulierungs-Bezug

Ziel: Vermeidung eines reinen "Lab-PR-Echos" (nur Ankündigungen großer Anbieter).

## 7. Editor's-Picks-Prozess

1. Wöchentlich (Redaktionsschluss: Sonntag) Vorschlagsliste aus meist-publizierten/
   meist-relevanten Artikeln der Woche erstellen.
2. Auswahl nach Kriterien: Relevanz für Zielgruppe, technische Tiefe, Neuheitswert,
   Ausgewogenheit über Kategorien hinweg.
3. Kurze redaktionelle Einordnung (2–3 Sätze "Warum das wichtig ist") ergänzen –
   das ist genuiner Redaktions-Content, kein KI-Output, und wird NICHT mit dem
   🤖-Badge markiert.

## 8. Verantwortlichkeit

Bis Team-Assembly (siehe PROJEKTPLAN Action Item #5) trägt die Projektleitung die
redaktionelle Gesamtverantwortung für Stufe-4-Freigaben. Sobald ein Editor/Content
Lead benannt ist, wird diese Policy um konkrete Namen/Vertretungsregelungen ergänzt.
