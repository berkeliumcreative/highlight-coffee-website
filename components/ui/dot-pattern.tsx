// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface DotPatternProps {
  className?: string;
  dotSize?: number;
  gap?: number;
  dotColor?: string;
  fade?: boolean;
}

export function DotPattern({
  className,
  dotSize = 1.2,
  gap = 20,
  dotColor = "currentColor",
  fade = true,
}: DotPatternProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0",
        fade && "mask-radial-gradient",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${gap}px ${gap}px`,
        opacity: 0.3,
      }}
    />
  );
}
