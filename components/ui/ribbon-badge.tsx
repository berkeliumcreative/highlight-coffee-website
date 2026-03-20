// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface RibbonBadgeProps {
  text: string;
  className?: string;
  position?: "top-left" | "top-right";
}

export function RibbonBadge({ text, className, position = "top-right" }: RibbonBadgeProps) {
  return (
    <div
      className={cn(
        "absolute z-10 overflow-hidden",
        position === "top-right" ? "top-0 right-0 w-24 h-24" : "top-0 left-0 w-24 h-24",
        className
      )}
    >
      <div
        className={cn(
          "absolute text-white text-[10px] font-bold uppercase tracking-wider py-1 text-center w-32",
          position === "top-right"
            ? "top-[14px] right-[-36px] rotate-45"
            : "top-[14px] left-[-36px] -rotate-45"
        )}
        style={{ backgroundColor: "var(--theme-accent)" }}
      >
        {text}
      </div>
    </div>
  );
}
