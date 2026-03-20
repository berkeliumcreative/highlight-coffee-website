// @ts-nocheck
"use client";
import { cn } from "@/lib/utils";

interface ContentCardProps { title: string; children: React.ReactNode; className?: string; accentBorder?: boolean; }

export function ContentCard({ title, children, className, accentBorder = false }: ContentCardProps) {
  return (
    <div className={cn("rounded-xl border bg-card p-6", accentBorder ? "border-l-4" : "border-border", className)} style={accentBorder ? { borderLeftColor: "var(--theme-accent)" } : undefined}>
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}
