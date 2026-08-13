# Design-System

Entscheidung getroffen: 02.08.2026 (Action Item #1 aus PROJEKTPLAN.md). Basiert auf den
bereits im Frontend implementierten CSS-Variablen (`frontend/src/app/globals.css`).

## Farbpalette

| Token | Light | Dark | Verwendung |
|---|---|---|---|
| `--background` | `#ffffff` | `#0b1120` | Seitenhintergrund |
| `--foreground` | `#0f172a` | `#e2e8f0` | Fließtext, Überschriften |
| `--surface` | `#f8fafc` | `#111827` | Cards, Sidebar-Widgets |
| `--border` | `#e2e8f0` | `#1f2937` | Trennlinien, Card-Rahmen |
| `--primary` | `#4f46e5` (Indigo) | `#818cf8` | Links, Buttons, Logo-Badge |
| `--primary-foreground` | `#ffffff` | `#0b1120` | Text auf Primary-Flächen |
| `--accent` | `#f59e0b` (Amber) | `#fbbf24` | Breaking-News-Marker, Hervorhebungen |
| `--muted` | `#64748b` | `#94a3b8` | Sekundärtext, Meta-Infos, Nav-Links |

Dark Mode wird über `:root[data-theme="dark"]` UND `prefers-color-scheme: dark` gesteuert
(System-Präferenz als Default, manueller Toggle überschreibt via `data-theme`-Attribut).

## Typografie

- **Schriftart**: Geist Sans (`--font-geist-sans`) für Fließtext/UI, Geist Mono
  (`--font-geist-mono`) für Code/technische Werte (z. B. Timestamps, IDs).
- **Skala**: Tailwind-Defaultskala (`text-sm` … `text-4xl`), keine Custom-Skala im MVP.
- **Headings**: `font-semibold`, `tracking-tight` für Hero/Section-Titel.
- **Line-Height**: `leading-relaxed` für Artikel-Summaries (bessere Lesbarkeit bei Fließtext).

## Layout & Spacing

- **Max-Width**: `max-w-6xl` für Seiteninhalt (Header/Footer/Main konsistent).
- **Grid**: 12-Kategorien-Grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (Anzahl nicht hartkodiert,
  sondern `categories.length` aus `frontend/src/lib/categories.ts`, um den Fehler „Text nennt andere
  Anzahl als angezeigt" nicht erneut einzuführen).
- **Abstände**: Tailwind-Spacing-Skala (4/6/8/10/16), keine Custom-Werte.
- **Sticky Header**: `sticky top-0 z-40` mit `backdrop-blur` (bereits implementiert).

## Komponenten-Patterns

### Card (Artikel/Kategorie/Anbieter/Benchmark/Publikation/Tutorial)
- `bg-surface`, `border border-border`, `rounded-lg`, `p-4`/`p-5` je Informationsdichte.
- Hover: `transition-all duration-300 hover:scale-[1.02] hover:border-primary/50
  hover:shadow-lg` – einheitlich auf allen Card-Komponenten (`ArticleCard`, `CategoryCard`,
  `ProviderCard`, `BenchmarkCard`, `PublicationCard`, `TutorialCard`).
- Kein Box-Shadow im Ruhezustand (flaches, ruhiges News-Layout), Shadow + leichtes Scale nur
  on-hover.
- Genutzt auf `/`, `/kategorien`, `/kategorien/[slug]`, `/verzeichnis`, `/suche`,
  `/publikationen`, `/tutorials` – ein Pattern für alle Karten-Grids der Seite.

### GlassCard (`components/ui/GlassCard.tsx`)
- Zweite, "erhobene" Card-Variante für Hero- und Sidebar-Flächen (nicht für dichte
  Artikel-Grids): `rounded-2xl`, `bg-surface/60`, `backdrop-blur-xl`, `border-border/50`,
  `shadow-lg`, Hover: `hover:shadow-primary/10`.
- Aktuell auf der Startseite (Hero-Sektion, Sidebar-Widgets via `WidgetCard`) im Einsatz.

### Kategorie-Icons (`components/CategoryIcon.tsx`)
- Ersetzt die ursprünglichen Emoji-Platzhalter für die 12 Hauptkategorien durch ein
  eigenes, konsistentes Strich-Icon-Set (`viewBox 0 0 24 24`, `strokeWidth 1.75`, round
  caps/joins – gleicher Stil wie `LogoMark`).
- Ein Icon pro `Category.slug`; eingebunden in `CategoryCard`, `ArticleCard`
  (Meta-Zeile) und den Header von `/kategorien/[slug]`.
- `Category.emoji` bleibt als Datenfeld bestehen (z. B. für künftige OG-Metadaten), wird aber
  in der UI nicht mehr gerendert.

### Badges / Tags (EU-Verhaltenskodex-Kennzeichnung)
Pflicht-Badges auf jeder Artikel-Card (siehe COMPLIANCE.md):
- **EU-KI-Kennzeichnungs-Icon** ("AI GENERATED", `components/AiGeneratedLabel.tsx`) – wenn
  `aiGenerated: true`. Icon-Vorlage angelehnt an die EU-Seite zur Kennzeichnung KI-generierter
  Inhalte; Light-/Dark-Variante schaltet automatisch per Theme um (`ai-label-light`/
  `ai-label-dark`-Klassen in `globals.css`).
- `✓ Redaktionell geprüft` – wenn `humanReviewed: true`
- `⚙️ Automatisiert` – wenn `humanReviewed: false`

Badge-Style (Redaktions-Badges): `text-xs`, `rounded-full`, `px-2.5 py-0.5`,
`border border-border`, Hintergrund `bg-surface`.

Zusätzlich im Footer unter "Redaktion" site-weit verankert (nicht nur pro Artikel):
`AiGeneratedLabel` plus Link "EU-Kennzeichnung →" zur offiziellen EU-Digital-Strategy-Seite.

### Buttons
- **Primary**: `bg-primary text-primary-foreground rounded-md`, Hover: leichtes Abdunkeln.
- **Secondary/Outline**: `border border-border text-muted hover:text-foreground`.

### Navigation
- Aktiver Link: `text-foreground font-medium`; inaktiv: `text-muted`.
- Logo-Lockup im Header: zweizeilig gestapelt (`AIActEU` / `KI News Hub` kleiner, `text-xs
  text-muted`) statt einzeiliger Wortmarke – verhindert Umbruch der Hauptnavigation bei mehr
  Nav-Punkten.
- Logo-Icon (`components/Logo.tsx`, `LogoMark`): eigenes SVG statt Text-Badge "AI" –
  ein zentraler Hub-Knoten mit drei verbundenen Satelliten (`viewBox 0 0 24 24`, `currentColor`),
  passend zur "zentrale Nachrichtenplattform"-Positionierung. Im `h-8 w-8 rounded-md
  bg-primary`-Badge des Headers platziert.

### Nach-oben-Button
`components/BackToTopButton.tsx`: `fixed bottom-6 right-6`, rund (`rounded-full`), gleicher
Card-Stil (`bg-surface`, `border-border`, Hover: `border-primary/40`). Blendet sich erst ab
400px Scroll-Tiefe ein, kein Layout-Effekt davor.

### Sicherheits-/Warnhinweise auf Verzeichnis-Cards
Statt die Card-Beschreibung aufzublähen, trägt `Provider.warning` (optional) ein ⚠️-Symbol
neben dem Namen mit dem vollen Hinweistext im `title`-Tooltip (`ProviderCard.tsx`). Vorbild:
OmniRoute-Eintrag im Bereich Developer-Tools & Infrastruktur.

## Responsive Design

- Mobile-First; Nav klappt bei `md:` zu horizontalem Menü aus (`hidden md:flex`), darunter
  übernimmt ein Hamburger-Menü (`components/Header.tsx`, `useState`-gesteuertes Ausklapp-Panel
  mit Suche, Nav-Links und Sprachumschalter).
- Touch-Targets ≥ 44px Höhe für Buttons/Links auf Mobile.

## Accessibility (WCAG 2.1 AA)

- Farbkontraste der obigen Token wurden gegen WCAG AA (4.5:1 für Text) gewählt
  (Foreground/Background-Paare).
- Alle interaktiven Elemente brauchen sichtbaren `:focus-visible`-Ring
  (`focus-visible:ring-2 focus-visible:ring-primary`).
- Sprach-Toggle, Dark-Mode-Toggle etc. benötigen `aria-label`.

## Offene Punkte für Phase 2/4

- ~~Mobile-Hamburger-Menü für Header-Navigation~~ **Erledigt**, siehe oben.
- ~~Logo als echtes Icon/SVG statt Text-Badge "AI"~~ **Erledigt**, siehe `LogoMark` oben.
- ~~Illustrations-/Icon-Set für Kategorien (aktuell Emoji als Platzhalter)~~ **Erledigt**, siehe
  `CategoryIcon` oben.
- ~~Card-/Button-Patterns für die neuen Seiten `/suche`, `/verzeichnis` formal dokumentieren~~
  **Erledigt**, siehe "Card"-Abschnitt oben – nutzen dasselbe Pattern wie alle anderen Cards.
- GlassCard-Pattern bisher nur auf der Startseite (Hero, Sidebar) im Einsatz – Ausrollen auf
  weitere Hero-/Sidebar-Flächen bei Bedarf, nicht aber auf dichte Artikel-/Anbieter-Grids
  (dort bleibt das flache Card-Pattern bewusst bestehen, siehe oben).
