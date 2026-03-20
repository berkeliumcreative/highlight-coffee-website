// @ts-nocheck
"use client";
import { cn } from "@/lib/utils";

interface MultiColumnTextProps { children: React.ReactNode; columns?: 2 | 3; className?: string; }

export function MultiColumnText({ children, columns = 2, className }: MultiColumnTextProps) {
  return (
    <div className={cn("text-muted-foreground leading-relaxed", columns === 2 ? "md:columns-2" : "md:columns-3", "gap-8", className)}>
      {children}
    </div>
  );
}
