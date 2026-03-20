// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface BorderedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "top" | "both" | "accent";
}

export function BorderedSection({ children, className, variant = "both" }: BorderedSectionProps) {
  return (
    <section
      className={cn(
        "py-20",
        variant === "top" && "border-t border-border",
        variant === "both" && "border-y border-border",
        variant === "accent" && "border-t-2",
        className
      )}
      style={variant === "accent" ? { borderTopColor: "var(--theme-accent)" } : undefined}
    >
      {children}
    </section>
  );
}
