// @ts-nocheck
"use client";
import { cn } from "@/lib/utils";

interface MarqueeTextProps { text: string; className?: string; speed?: number; separator?: string; }

export function MarqueeText({ text, className, speed = 30, separator = " · " }: MarqueeTextProps) {
  const repeated = Array(10).fill(text + separator).join("");
  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div className="inline-block animate-[marquee_var(--duration)_linear_infinite] text-4xl md:text-6xl font-bold text-foreground/5" style={{ "--duration": `${speed}s` } as React.CSSProperties}>
        {repeated}
      </div>
    </div>
  );
}
