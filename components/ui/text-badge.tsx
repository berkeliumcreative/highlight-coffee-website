// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface TextBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "accent";
}

export function TextBadge({ children, className, variant = "default" }: TextBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-muted text-muted-foreground",
        variant === "outline" && "border border-border text-muted-foreground",
        variant === "accent" && "text-white",
        className
      )}
      style={variant === "accent" ? { backgroundColor: "var(--theme-accent)" } : undefined}
    >
      {children}
    </span>
  );
}
