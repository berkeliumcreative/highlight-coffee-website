// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
  variant?: "gradient-shift" | "floating-orbs" | "mesh";
}

export function AnimatedBackground({
  children,
  className,
  variant = "gradient-shift",
}: AnimatedBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {variant === "gradient-shift" && (
        <div
          className="absolute inset-0 animate-gradient-x bg-[length:200%_200%] opacity-30"
          style={{
            backgroundImage: `linear-gradient(45deg, var(--theme-accent), oklch(0.6 0.15 280), oklch(0.7 0.2 170), var(--theme-accent))`,
          }}
        />
      )}
      {variant === "floating-orbs" && (
        <>
          <div
            className="absolute -top-20 -left-20 h-64 w-64 rounded-full opacity-10 blur-3xl animate-aurora"
            style={{ backgroundColor: "var(--theme-accent)" }}
          />
          <div
            className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full opacity-10 blur-3xl animate-aurora-reverse"
            style={{ backgroundColor: "oklch(0.6 0.2 280)" }}
          />
        </>
      )}
      {variant === "mesh" && (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(at 40% 20%, var(--theme-accent) 0px, transparent 50%),
              radial-gradient(at 80% 0%, oklch(0.6 0.15 280) 0px, transparent 50%),
              radial-gradient(at 0% 50%, oklch(0.7 0.2 170) 0px, transparent 50%),
              radial-gradient(at 80% 100%, var(--theme-accent) 0px, transparent 50%)
            `,
            filter: "blur(60px)",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
