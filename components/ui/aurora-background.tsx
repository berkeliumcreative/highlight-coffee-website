// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 z-0">
        <div
          className="absolute -top-1/2 left-0 h-full w-full animate-aurora opacity-50"
          style={{
            background:
              "linear-gradient(135deg, var(--theme-accent) 0%, transparent 40%, transparent 60%, oklch(0.6 0.2 280) 100%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-1/2 right-0 h-full w-full animate-aurora-reverse opacity-30"
          style={{
            background:
              "linear-gradient(315deg, var(--theme-accent) 0%, transparent 50%, oklch(0.5 0.15 200) 100%)",
            filter: "blur(100px)",
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
