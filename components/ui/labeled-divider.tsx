// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface LabeledDividerProps {
  label: string;
  className?: string;
}

export function LabeledDivider({ label, className }: LabeledDividerProps) {
  return (
    <div className={cn("flex items-center gap-4 py-6", className)}>
      <div className="flex-1 h-px bg-border" />
      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
