import Link from "next/link";

interface BenchmarkSectionProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  hashLink: string;
  badge?: string;
  badgeColor?: "blue" | "purple" | "emerald" | "amber" | "rose" | "cyan";
  isNew?: boolean;
}

const colorMap = {
  blue: {
    border: "border-blue-500/30 hover:border-blue-500/60",
    bg: "bg-blue-500/5 hover:bg-blue-500/10",
    badge: "bg-blue-500/20 text-blue-300",
    icon: "text-blue-400",
    button: "text-blue-400 hover:text-blue-300",
  },
  purple: {
    border: "border-purple-500/30 hover:border-purple-500/60",
    bg: "bg-purple-500/5 hover:bg-purple-500/10",
    badge: "bg-purple-500/20 text-purple-300",
    icon: "text-purple-400",
    button: "text-purple-400 hover:text-purple-300",
  },
  emerald: {
    border: "border-emerald-500/30 hover:border-emerald-500/60",
    bg: "bg-emerald-500/5 hover:bg-emerald-500/10",
    badge: "bg-emerald-500/20 text-emerald-300",
    icon: "text-emerald-400",
    button: "text-emerald-400 hover:text-emerald-300",
  },
  amber: {
    border: "border-amber-500/30 hover:border-amber-500/60",
    bg: "bg-amber-500/5 hover:bg-amber-500/10",
    badge: "bg-amber-500/20 text-amber-300",
    icon: "text-amber-400",
    button: "text-amber-400 hover:text-amber-300",
  },
  rose: {
    border: "border-rose-500/30 hover:border-rose-500/60",
    bg: "bg-rose-500/5 hover:bg-rose-500/10",
    badge: "bg-rose-500/20 text-rose-300",
    icon: "text-rose-400",
    button: "text-rose-400 hover:text-rose-300",
  },
  cyan: {
    border: "border-cyan-500/30 hover:border-cyan-500/60",
    bg: "bg-cyan-500/5 hover:bg-cyan-500/10",
    badge: "bg-cyan-500/20 text-cyan-300",
    icon: "text-cyan-400",
    button: "text-cyan-400 hover:text-cyan-300",
  },
};

export function ArtificialAnalysisBenchmarkCard({
  id,
  icon,
  title,
  description,
  hashLink,
  badge,
  badgeColor = "blue",
  isNew = false,
}: BenchmarkSectionProps) {
  const colors = colorMap[badgeColor];

  return (
    <div
      id={id}
      className={`group relative flex flex-col gap-3 rounded-2xl border p-5 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${colors.border} ${colors.bg}`}
    >
      {/* Icon + Badge Row */}
      <div className="flex items-start justify-between gap-2">
        <span className={`text-2xl ${colors.icon}`}>{icon}</span>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          {isNew && (
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
              NEU
            </span>
          )}
          {badge && (
            <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-bold ${colors.badge}`}>
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-sm leading-tight text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs text-muted leading-relaxed flex-1">{description}</p>

      {/* CTA */}
      <Link
        href={hashLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 text-[11px] font-semibold transition-colors ${colors.button} hover:underline`}
      >
        Jetzt ansehen auf Artificial Analysis ↗
      </Link>
    </div>
  );
}
