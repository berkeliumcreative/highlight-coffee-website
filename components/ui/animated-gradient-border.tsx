// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface AnimatedGradientBorderProps {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
}

export function AnimatedGradientBorder({
  children,
  className,
  borderWidth = 2,
  duration = 4,
}: AnimatedGradientBorderProps) {
  return (
    <div className={cn("relative rounded-xl", className)}>
      <div
        className="absolute inset-0 rounded-xl animate-gradient-x bg-[length:300%_300%]"
        style={{
          padding: borderWidth,
          background: `linear-gradient(90deg, var(--theme-accent), oklch(0.6 0.2 280), oklch(0.7 0.15 170), var(--theme-accent))`,
          backgroundSize: "300% 300%",
          animationDuration: `${duration}s`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="relative rounded-xl bg-card p-6">{children}</div>
    </div>
  );
}
