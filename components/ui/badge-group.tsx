// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface BadgeGroupProps {
  items: string[];
  className?: string;
  variant?: "default" | "outline" | "accent";
}

export function BadgeGroup({ items, className, variant = "default" }: BadgeGroupProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item, i) => (
        <span
          key={i}
          className={cn(
            "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
            variant === "default" && "bg-muted text-muted-foreground",
            variant === "outline" && "border border-border text-muted-foreground",
            variant === "accent" && "text-white"
          )}
          style={variant === "accent" ? { backgroundColor: "var(--theme-accent)" } : undefined}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
