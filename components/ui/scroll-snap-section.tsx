// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface ScrollSnapSectionProps {
  children: React.ReactNode[];
  className?: string;
  direction?: "vertical" | "horizontal";
}

export function ScrollSnapSection({
  children,
  className,
  direction = "horizontal",
}: ScrollSnapSectionProps) {
  return (
    <div
      className={cn(
        "snap-mandatory overflow-auto scrollbar-hide",
        direction === "horizontal"
          ? "flex snap-x gap-6 px-6"
          : "snap-y space-y-0",
        className
      )}
    >
      {children.map((child, i) => (
        <div
          key={i}
          className={cn(
            "snap-center",
            direction === "horizontal" && "flex-shrink-0 w-[85vw] md:w-[45vw]",
            direction === "vertical" && "min-h-screen flex items-center"
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
