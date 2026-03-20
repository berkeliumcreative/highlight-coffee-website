// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface TextHighlightProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function TextHighlight({
  children,
  className,
  color = "var(--theme-accent)",
}: TextHighlightProps) {
  return (
    <span
      className={cn("relative inline-block", className)}
    >
      <span
        className="absolute bottom-0 left-0 h-[30%] w-full opacity-20 -z-10"
        style={{ backgroundColor: color }}
      />
      {children}
    </span>
  );
}
