export default function Eyebrow({
  children,
  invert = false,
  className = "",
}: {
  children: string;
  invert?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] ${
        invert ? "text-white/70" : "text-muted"
      } ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}
