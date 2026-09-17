import type { ComponentProps } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "soft" | "outline" | "ghost";
type ButtonSize = "sm" | "md";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsLink = BaseProps &
  ComponentProps<typeof Link> & {
    href: string;
  };

type ButtonAsButton = BaseProps &
  ComponentProps<"button"> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-ink hover:bg-accent-strong hover:text-white",
  soft: "border border-ink/10 bg-sand text-ink hover:bg-accent-soft hover:border-accent/40",
  outline:
    "border border-ink/15 text-ink hover:border-ink/30 hover:bg-ink/[0.03]",
  ghost: "text-ink hover:bg-ink/[0.05]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-[0.35rem] text-xs",
  md: "px-[0.85rem] py-[0.6rem] text-sm",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-button font-semibold tracking-tight transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (props.href) {
    return <Link {...(props as ButtonAsLink)} className={classes} />;
  }

  return <button {...(props as ButtonAsButton)} className={classes} />;
}
