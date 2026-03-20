// @ts-nocheck
"use client";
import { cn } from "@/lib/utils";

interface BadgeListItem { label: string; value: string; }
interface BadgeListProps { items: BadgeListItem[]; className?: string; }

export function BadgeList({ items, className }: BadgeListProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {items.map((item, i) => (
        <div key={i} className="flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-sm">
          <span className="font-medium">{item.label}:</span>
          <span className="ml-1.5 text-muted-foreground">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
