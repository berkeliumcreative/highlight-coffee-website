// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface MasonryLayoutProps {
  children: React.ReactNode[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function MasonryLayout({ children, columns = 3, className }: MasonryLayoutProps) {
  const cols: React.ReactNode[][] = Array.from({ length: columns }, () => []);
  children.forEach((child, i) => {
    cols[i % columns].push(child);
  });

  return (
    <div className={cn("flex gap-4", className)}>
      {cols.map((colChildren, i) => (
        <div key={i} className="flex flex-1 flex-col gap-4">
          {colChildren}
        </div>
      ))}
    </div>
  );
}
