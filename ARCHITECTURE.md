# Technische Architektur

Entscheidung getroffen: 02.08.2026 (Action Item #2 aus PROJEKTPLAN.md).

## Stack

| Layer | Wahl | Begründung |
|---|---|---|
| Frontend | **Next.js 14 (App Router) + TypeScript + Tailwind CSS** | Größtes Ökosystem für News-/Content-Seiten, ISR für schnelle News-Updates ohne Full-Rebuild, einfaches Vercel-Deployment, SSR für SEO |
| Backend/CMS | **Strapi (Headless CMS) + PostgreSQL** | Fertiges Admin-Panel für Artikel/Kategorien/Editor's-Picks, REST- und GraphQL-API out-of-the-box, spart eigenen CRUD-Code für den MVP |
| Datenbank | **PostgreSQL** (Produktion) / **SQLite** (lokale Entwicklung) | Postgres von Strapi nativ unterstützt, robust für relationale Artikel/Kategorie/Tag-Struktur; SQLite lokal, damit kein separater DB-Server für die Entwicklung nötig ist (`backend/.env` steuert `DATABASE_CLIENT`) |
| Ingestion-Pipeline | **Standalone Node-Skripte** (`scripts/`), aufrufbar per Cron (Phase 2) → ggf. Python/Airflow (Phase 3+) | Umgesetzt als eigenständiges npm-Package statt Strapi-Plugin (siehe "Offene Punkte" unten für die Begründung); `scripts/verify-sources.mjs` prüft Feeds, `scripts/ingest.mjs` zieht Artikel und summarisiert optional per Claude API, beide mit begrenzter Nebenläufigkeit (`scripts/lib/http.mjs`); `scripts/lib/topic-filter.mjs` verwirft vor der Summarisierung Werbe-Einträge sowie – bei Quellen mit `"requiresTopicFilter": true` – Meldungen ohne KI-Bezug |
| KI-Integration | **Anthropic Claude API** (Summarization, Tagging) | Lt. Plan primäre Wahl; via Strapi Lifecycle-Hooks beim Artikel-Import angebunden |
| Suche | **Postgres Full-Text-Search (MVP) → Vector Search (Phase 3)** | Kein Elasticsearch/Qdrant-Overhead für den MVP; erst bei Bedarf für semantische Suche nachziehen |
| Hosting | **Vercel (Frontend) + Hetzner/EU-Cloud (Strapi + Postgres)** | EU-Datenresidenz für Compliance, Vercel für Frontend-Performance/CDN |
| CI/CD | **GitHub Actions** | Lint/Typecheck/Build auf jeden PR, Deploy auf Merge in `main` |

## Monorepo-Struktur

```
/frontend    Next.js App (Consumer-facing Website)
/backend     Strapi Instanz (Content-API, Admin-Panel)
/scripts     Standalone Ingestion-/Wartungs-Skripte (eigenes npm-Package)
/data        Statische Konfigurationsdaten (RSS-Quellen, Anbieter-Verzeichnis, Benchmarks)
             sources.json ist die einzige Fassung: Der tsconfig-Alias "@/data/*"
             fällt auf "../data/*" zurück, sodass Frontend und Ingestion-Skripte
             dieselbe Datei lesen (eine frühere Kopie unter frontend/data/ war
             unbemerkt veraltet).
```

Kein gemeinsames Package-Management (kein Turborepo/Nx) im MVP – alle drei Teile haben
unabhängige `package.json`, um die Komplexität niedrig zu halten. `data/*.json` dient als
gemeinsame, frameworkunabhängige Quelle: `frontend/src/data/` enthält Kopien für den
Build (`resolveJsonModule`), `backend/data/seed-*.json` wird aus den Frontend-Mock-Daten via
`scripts/dump-content.ts` exportiert. Re-Evaluierung in Phase 3, falls geteilter TypeScript-Code
(z. B. ein gemeinsames Article-Interface) den Aufwand einer echten Monorepo-Tool-Kette
rechtfertigt.

## Content-Modell (Strapi Collection Types, Phase 2)

- `Article` (title, slug, summary, body, sourceUrl, sourceName, category-Relation, tags: json,
  publishedDate, aiGenerated: boolean, humanReviewed: boolean, breaking: boolean,
  editorsPick: boolean, editorsNote) — siehe `backend/src/api/article/content-types/article/schema.json`
- `Category` (title, slug, emoji, description, articles-Relation) — 12 Hauptkategorien (7 lt.
  ursprünglichem Plan + "Hardware & Silicon" sowie 2026-08-03 um "Nachhaltigkeit & Umwelt-Impact",
  "Applications & Use Cases", "Community, Events & Ecosystem" und "Safety, Alignment & Governance"
  erweitert, siehe [`docs/📋 AIActEU.docx`](./docs/📋%20AIActEU.docx)),
  mit Subkategorien als Tags statt eigenem Content-Type für MVP-Einfachheit
- `Source` (name, feedUrl, type: lab-blog|newsletter|paper|dev-blog|de-quelle|startup|policy,
  categorySlug, refreshIntervalMinutes, verified, lastCheckedAt) — admin-only, öffentlich nicht lesbar

Öffentliche Lese-Rechte (nur `find`/`findOne` für Article/Category) werden beim Server-Start
idempotent gesetzt (`backend/src/index.ts`), ebenso das einmalige Seeding aus
`backend/data/seed-*.json` (`backend/src/seed.ts`) – kein manueller Klick-Aufwand im Admin-Panel
nötig, um eine lokale Instanz lauffähig zu bekommen.

## Tutorial-Content (MDX, außerhalb von Strapi)

Die Tutorials unter `/tutorials` (lokale KI-Setups: Ollama, Open WebUI/LM Studio/Jan.ai,
Private RAG, Continue.dev, ComfyUI/Automatic1111, Faster-Whisper) sind bewusst **kein** Strapi
Content-Type, sondern statische MDX-Dateien in `frontend/src/content/tutorials/`, per
`@next/mdx` eingebunden (`frontend/next.config.ts`). Die Metadaten (Titel, Level, Tags) liegen
in `frontend/src/lib/tutorials.ts`, das Routing lädt den passenden MDX-Body dynamisch über
`import(\`@/content/tutorials/${slug}.mdx\`)` in `frontend/src/app/tutorials/[slug]/page.tsx`
(mit `generateStaticParams`/`dynamicParams: false`, also zur Build-Zeit statisch generiert).
Begründung: redaktionelle Long-Form-Guides mit Code-Snippets sind in MDX direkt im Repo
einfacher zu pflegen (Diff-review, kein CMS-Roundtrip) als über Strapi Rich-Text.

## Dependency-Sicherheit

`frontend/package.json` enthält ein `overrides`-Feld für `postcss` (`^8.5.18`) und `sharp`
(`^0.35.0`): `next@16.2.12` bündelt/zieht selbst ältere, laut `npm audit` verwundbare Versionen
dieser beiden Pakete (PostCSS Path-Traversal/XSS-Advisories, sharp/libvips-CVEs). Ein
`next`-Downgrade (der von `npm audit fix --force` vorgeschlagene Weg) wurde bewusst **nicht**
gewählt, da er auf `next@9.3.3` zurückfallen würde – stattdessen erzwingen die Overrides die
gepatchten Versionen im gesamten Abhängigkeitsbaum. Ergebnis: `npm audit` meldet 0
Schwachstellen, `npm run build` läuft unverändert durch. Bei jedem `next`-Update prüfen, ob die
Overrides noch nötig sind (ggf. entfernen, sobald `next` selbst gepatchte Versionen zieht).

## Offene Punkte für Phase 2

- ~~Entscheidung: Strapi-Plugin vs. externer Worker-Service für RSS-Ingestion~~ **Entschieden:**
  externe Node-Skripte (`scripts/`), da sie unabhängig von einem laufenden Strapi-Prozess getestet
  werden können und die Ingestion so auch ohne Backend (z. B. für den JSON-Export) läuft. Eine
  spätere Anbindung als Strapi-Cron-Task ist ohne Architekturbruch möglich.
- Rate-Limiting-Strategie für Claude-API-Aufrufe bei Batch-Summarization — teilweise gelöst
  (begrenzte Nebenläufigkeit statt unlimitiertem Parallel-Fetch, siehe `scripts/lib/http.mjs`),
  echtes Anthropic-Rate-Limit-Verhalten aber noch nicht gegen einen produktiven `ANTHROPIC_API_KEY`
  getestet
- Caching-Strategie Frontend (ISR-Intervall pro Kategorie-Seite) — weiterhin offen; Frontend nutzt
  aktuell noch statische Mock-Daten (`frontend/src/lib/articles.ts`), keine Live-Anbindung an die
  Strapi-API
- Anbindung Frontend ↔ Strapi-API (aktuell zwei parallele Datenquellen: Mock-Daten im Frontend und
  eine unabhängig lauffähige, geseedete Strapi-Instanz) — bewusst noch nicht verknüpft, um keine
  Abhängigkeit von einem laufenden Backend-Prozess für den Frontend-Build einzuführen; siehe
  `frontend/src/lib/articles.ts` Kommentar
