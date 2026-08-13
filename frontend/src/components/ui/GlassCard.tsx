import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border/80 bg-surface/80 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 ${className}`}
    >
      {children}
    </div>
  );
}
