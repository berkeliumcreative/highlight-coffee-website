// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface PulseButtonProps {
  children: React.ReactNode;
  className?: string;
  pulseColor?: string;
  asChild?: boolean;
  onClick?: () => void;
}

export function PulseButton({
  children,
  className,
  pulseColor = "var(--theme-accent)",
  onClick,
}: PulseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform active:scale-95",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 rounded-lg animate-pulse-ring"
        style={
          {
            "--pulse-color": pulseColor,
          } as React.CSSProperties
        }
      />
    </button>
  );
}
