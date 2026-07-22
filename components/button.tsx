import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const base =
  "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300";

const variants = {
  primary: "bg-gold text-ink shadow-glow hover:-translate-y-0.5 hover:bg-[#ffd449]",
  secondary:
    "border border-white/30 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/20",
  ghost:
    "border border-ink/15 bg-white text-ink hover:-translate-y-0.5 hover:border-gold dark:border-white/15 dark:bg-white/10 dark:text-white"
};

export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const href = props.href;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href.startsWith("/")) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
