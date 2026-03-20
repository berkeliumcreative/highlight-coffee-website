// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface ExperienceBadgeProps {
  years: number;
  label?: string;
  className?: string;
}

export function ExperienceBadge({
  years,
  label = "Years of Experience",
  className,
}: ExperienceBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex flex-col items-center justify-center rounded-full border-4 h-32 w-32 text-center",
        className
      )}
      style={{ borderColor: "var(--theme-accent)" }}
    >
      <span className="text-3xl font-bold" style={{ color: "var(--theme-accent)" }}>
        {years}+
      </span>
      <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide leading-tight mt-1 px-2">
        {label}
      </span>
    </div>
  );
}
