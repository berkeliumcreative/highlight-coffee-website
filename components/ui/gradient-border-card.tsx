// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface GradientBorderCardProps {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
}

export function GradientBorderCard({
  children,
  className,
  borderWidth = 1,
}: GradientBorderCardProps) {
  return (
    <div
      className={cn("relative rounded-xl", className)}
      style={{
        padding: borderWidth,
        background: `linear-gradient(135deg, var(--theme-accent), oklch(0.6 0.15 280), var(--theme-accent))`,
      }}
    >
      <div className="rounded-[calc(0.75rem-1px)] bg-card p-6 h-full">
        {children}
      </div>
    </div>
  );
}
