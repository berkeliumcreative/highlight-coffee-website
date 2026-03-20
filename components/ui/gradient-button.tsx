// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline";
}

export function GradientButton({
  children,
  className,
  href,
  onClick,
  variant = "default",
}: GradientButtonProps) {
  const baseClass = cn(
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all",
    variant === "default" &&
      "bg-gradient-to-r from-[var(--theme-accent)] to-[oklch(0.6_0.15_280)] text-white hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]",
    variant === "outline" &&
      "bg-transparent border-2 border-transparent bg-clip-padding hover:scale-[1.02]",
    className
  );

  const style =
    variant === "outline"
      ? {
          borderImage: `linear-gradient(135deg, var(--theme-accent), oklch(0.6 0.15 280)) 1`,
        }
      : undefined;

  if (href) {
    return (
      <a href={href} className={baseClass} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass} style={style}>
      {children}
    </button>
  );
}
