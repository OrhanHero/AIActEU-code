import type { Article } from "@/lib/articles";
import { AiGeneratedLabel } from "./AiGeneratedLabel";

const badgeClass =
  "inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-muted";

export function ComplianceBadges({ article }: { article: Pick<Article, "aiGenerated" | "humanReviewed"> }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {article.aiGenerated && <AiGeneratedLabel />}
      {article.humanReviewed ? (
        <span className={badgeClass} title="Redaktionell geprüft vor Veröffentlichung.">
          ✓ Redaktionell geprüft
        </span>
      ) : (
        <span className={badgeClass} title="Automatisiert veröffentlicht, ohne manuelle Vorabprüfung.">
          ⚙️ Automatisiert
        </span>
      )}
    </div>
  );
}
