// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface IconListItem {
  icon?: React.ReactNode;
  text: string;
}

interface IconListProps {
  items: IconListItem[];
  className?: string;
}

export function IconList({ items, className }: IconListProps) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-0.5 flex-shrink-0" style={{ color: "var(--theme-accent)" }}>
            {item.icon || (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            )}
          </span>
          <span className="text-muted-foreground">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
