// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface GradientBlurBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientBlurBackground({ children, className }: GradientBlurBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[100px]"
          style={{ backgroundColor: "var(--theme-accent)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
          style={{ backgroundColor: "oklch(0.6 0.2 260)" }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
