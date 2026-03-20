// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export function GradientCard({
  children,
  className,
  gradient = "from-primary/5 via-transparent to-primary/5",
}: GradientCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-border p-6 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-50",
          gradient
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
