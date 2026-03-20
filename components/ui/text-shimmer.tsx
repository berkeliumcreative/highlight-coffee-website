// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface TextShimmerProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

export function TextShimmer({ children, className, duration = 2 }: TextShimmerProps) {
  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent",
        "bg-[length:250%_100%] animate-text-shimmer",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(110deg, var(--foreground) 35%, var(--theme-accent) 50%, var(--foreground) 65%)",
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </span>
  );
}
