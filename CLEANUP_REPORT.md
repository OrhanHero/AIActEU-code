# Cleanup Report – Struktur-Sprint (THEMA 1)

## Dateizahl

| | Anzahl (git-getrackte Dateien) |
|---|---|
| Vorher | 148 |
| Nachher | 143 |

## Gelöschte Dateien

| Datei | Grund |
|---|---|
| `frontend/src/data/benchmarks.json` | Duplikat von `data/benchmarks.json` (byte-identisch). Frontend importiert jetzt über den neuen tsconfig-Alias `@/data/*` → `../data/*` direkt aus der Root-`data/`. |
| `frontend/src/data/publications.json` | Duplikat von `data/publications.json` (byte-identisch), gleicher Grund. |
| `frontend/src/data/tools-directory.json` | Duplikat von `data/tools-directory.json` (byte-identisch), gleicher Grund. |
| `frontend/CLAUDE.md` | War nur ein `@AGENTS.md`-Include; Inhalt nach Konsolidierung überflüssig. |
| `frontend/AGENTS.md` | Inhalt ("This is NOT the Next.js you know…") in die Root-`CLAUDE.md` unter einem neuen Abschnitt "Frontend (`frontend/`)" übernommen. |

`data/sources.json` hatte keine Entsprechung in `frontend/src/data/` (wird ausschließlich von `scripts/` genutzt) und ist unverändert.

## Konsolidierung

- **Datenquelle**: `frontend/tsconfig.json` hat einen neuen Pfad-Alias `"@/data/*": ["../data/*"]` (vor `"@/*"` gelistet). Die bestehenden Imports in `frontend/src/lib/publications.ts` und `frontend/src/lib/toolsDirectory.ts` (`from "@/data/..."`) mussten nicht geändert werden – sie lösen jetzt automatisch in die Root-`data/` auf. `scripts/` bleibt unverändert Quelle-der-Wahrheit-Konsument der Root-`data/`.
- **Agent-Dokumentation**: `CLAUDE.md` (Root) ist jetzt die einzige Quelle für Agent-Regeln, inkl. der Next.js-15/16-Warnung für Arbeiten in `frontend/`.

## Geprüft, aber NICHT gelöscht

- **`LABEL_AI_GENERATED_PNG/`** (12 PNGs, Root): Keine Code-Referenz gefunden, aber es handelt sich um die Original-/Master-Assets für die EU-KI-Kennzeichnung. Die tatsächlich im Frontend verwendeten (umbenannten) Kopien liegen in `frontend/public/labels/`. Da es sich um Quellmaterial handelt und `AiGeneratedLabel.tsx` explizit auf eine noch ausstehende Verifizierung gegen das offizielle EU-Asset-Kit verweist (siehe COMPLIANCE.md), wurde die Datei zur Sicherheit behalten statt gelöscht.
- **Alle 16 Komponenten in `frontend/src/components/`**: Jede wurde per Grep auf tatsächliche Verwendung geprüft (`AiGeneratedLabel`, `ComplianceBadges`, `SearchBox`, `ThemeToggle` initial fälschlich als "0 Treffer" markiert, weil sie nicht per `@/components/Name`-Alias, sondern anderweitig referenziert werden – bei genauerer Prüfung sind alle in Verwendung). Keine Löschung nötig.
- **`scripts/dump-content.ts`**: Nicht im aktuellen Workflow aufgerufen, aber in `ARCHITECTURE.md` als bewusst zurückgestellt dokumentiert ("Re-Evaluierung in Phase 3"). Kein Löschkandidat.
- **`Docs/`**: `Docs/agents/*.md` werden von `CLAUDE.md` referenziert, `Docs/📋 AIActEU.docx` von `PROJEKTPLAN.md`. Beides bleibt.

## Bekannter Befund (behoben)

`CLAUDE.md` verweist auf `docs/agents/...` (Kleinschreibung), der tatsächliche Ordner hieß `Docs/` (Großschreibung). Auf dem case-insensitiven Windows-Dateisystem funktionierte das, auf case-sensitiven Systemen (z. B. Linux-CI) wäre die Referenz fehlgeschlagen. Behoben: `Docs/` → `docs/` umbenannt (`git mv`); Referenzen in `ARCHITECTURE.md`, `PROJEKTPLAN.md` und `README.md` entsprechend angepasst.
