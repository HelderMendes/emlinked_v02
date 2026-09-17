import type { ReactNode } from "react";

type BadgeTone = "ink" | "accent" | "emerald" | "outline";

const toneClasses: Record<BadgeTone, string> = {
  ink: "bg-ink text-white",
  accent: "bg-accent-soft text-accent-strong",
  emerald: "bg-emerald-soft text-emerald",
  outline: "border border-ink/15 text-ink",
};

export default function Badge({
  children,
  tone = "outline",
  className = "",
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-badge px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
