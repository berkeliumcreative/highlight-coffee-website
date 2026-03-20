// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface ChecklistCardProps {
  title: string;
  items: string[];
  className?: string;
}

export function ChecklistCard({ title, items, className }: ChecklistCardProps) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-6", className)}>
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <span
              className="mt-0.5 flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full text-white text-[10px]"
              style={{ backgroundColor: "var(--theme-accent)" }}
            >
              ✓
            </span>
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
