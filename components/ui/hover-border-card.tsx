// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface HoverBorderCardProps {
  children: React.ReactNode;
  className?: string;
}

export function HoverBorderCard({ children, className }: HoverBorderCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-border bg-card p-6 transition-all duration-300",
        "hover:border-transparent hover:shadow-lg",
        className
      )}
    >
      {/* Animated border on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          padding: 1,
          background: `linear-gradient(135deg, var(--theme-accent), oklch(0.6 0.15 280), var(--theme-accent))`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
