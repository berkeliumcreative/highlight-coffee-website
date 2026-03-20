// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
  size?: number;
  strokeColor?: string;
  fade?: boolean;
}

export function GridPattern({
  className,
  size = 40,
  strokeColor = "var(--border)",
  fade = true,
}: GridPatternProps) {
  const id = `grid-${size}`;
  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full",
        fade && "[mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_80%)]",
        className
      )}
    >
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            fill="none"
            stroke={strokeColor}
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
