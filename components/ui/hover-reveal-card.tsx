// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface HoverRevealCardProps {
  children: React.ReactNode;
  revealContent: React.ReactNode;
  className?: string;
}

export function HoverRevealCard({ children, revealContent, className }: HoverRevealCardProps) {
  return (
    <div className={cn("group relative overflow-hidden rounded-xl border border-border bg-card", className)}>
      <div className="p-6 transition-opacity duration-300 group-hover:opacity-0">
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-card">
        {revealContent}
      </div>
    </div>
  );
}
