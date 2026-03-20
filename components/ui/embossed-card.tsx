// @ts-nocheck
"use client";
import { cn } from "@/lib/utils";

interface EmbossedCardProps { children: React.ReactNode; className?: string; }

export function EmbossedCard({ children, className }: EmbossedCardProps) {
  return (
    <div className={cn("rounded-xl bg-card p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]", className)}>
      {children}
    </div>
  );
}
