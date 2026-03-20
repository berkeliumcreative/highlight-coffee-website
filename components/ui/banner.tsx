// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface BannerProps {
  children: React.ReactNode;
  className?: string;
  variant?: "info" | "accent" | "dark";
}

export function Banner({ children, className, variant = "accent" }: BannerProps) {
  return (
    <div
      className={cn(
        "w-full px-6 py-4 text-center font-medium",
        variant === "info" && "bg-muted text-foreground",
        variant === "accent" && "text-white",
        variant === "dark" && "bg-foreground text-background",
        className
      )}
      style={variant === "accent" ? { backgroundColor: "var(--theme-accent)" } : undefined}
    >
      {children}
    </div>
  );
}
