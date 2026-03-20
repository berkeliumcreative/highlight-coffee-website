// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface GradientSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "accent" | "dark" | "warm" | "subtle";
}

export function GradientSection({
  children,
  className,
  variant = "accent",
}: GradientSectionProps) {
  const gradients = {
    accent: "from-background via-[var(--theme-accent)]/5 to-background",
    dark: "from-background via-black/5 to-background",
    warm: "from-background via-orange-500/5 to-background",
    subtle: "from-muted/50 via-background to-muted/50",
  };

  return (
    <section className={cn("relative py-20", className)}>
      <div className={cn("absolute inset-0 bg-gradient-to-b", gradients[variant])} />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
