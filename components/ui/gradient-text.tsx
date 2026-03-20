// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  className,
  from = "var(--theme-accent)",
  via,
  to = "oklch(0.7 0.15 280)",
  animate = false,
}: GradientTextProps) {
  const gradientStops = via ? `${from}, ${via}, ${to}` : `${from}, ${to}`;

  return (
    <span
      className={cn(
        "bg-clip-text text-transparent inline-block",
        animate && "animate-gradient-x bg-[length:200%_auto]",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(to right, ${gradientStops})`,
      }}
    >
      {children}
    </span>
  );
}
