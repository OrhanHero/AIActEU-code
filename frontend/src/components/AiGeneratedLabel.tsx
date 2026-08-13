import Image from "next/image";

/**
 * EU-Kennzeichnung für KI-generierte Inhalte gemäß EU AI Act Art. 50,
 * angelehnt an die offiziellen EU-Icons:
 * https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content.
 */
export function AiGeneratedLabel({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/5 px-2 py-0.5 backdrop-blur-md transition-colors hover:border-primary/60 ${className ?? ""}`}
      title="EU AI Act Art. 50 Transparenzpflicht: KI-generierte Zusammenfassung"
    >
      <Image
        src="/labels/ai-generated-black.png"
        alt="EU-Kennzeichnung: KI-generierter Inhalt (AI GENERATED)"
        width={315}
        height={100}
        className="ai-label-light h-5 w-auto object-contain"
      />
      <Image
        src="/labels/ai-generated-white.png"
        alt="EU-Kennzeichnung: KI-generierter Inhalt (AI GENERATED)"
        width={315}
        height={100}
        className="ai-label-dark h-5 w-auto object-contain"
      />
    </span>
  );
}

