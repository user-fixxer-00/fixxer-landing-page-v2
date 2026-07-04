import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost-dark" | "ghost-light" | "white";
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn px-6 py-3.5 text-sm font-semibold transition-all duration-200 md:text-base";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-fixxer-orange text-white hover:bg-fixxer-orange-hover hover:shadow-[0_4px_16px_rgba(255,107,53,0.35)]",
  "ghost-dark":
    "border border-white/25 text-fixxer-text-on-dark hover:border-white/60 hover:bg-white/5",
  "ghost-light":
    "border border-fixxer-charcoal/20 text-fixxer-text-primary hover:border-fixxer-charcoal/50 hover:bg-fixxer-charcoal/5",
  white:
    "bg-white text-fixxer-charcoal hover:bg-fixxer-surface-light hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
