// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface InfoBarItem {
  icon?: React.ReactNode;
  text: string;
  href?: string;
}

interface InfoBarProps {
  items: InfoBarItem[];
  className?: string;
}

export function InfoBar({ items, className }: InfoBarProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-6 py-3 text-sm", className)}>
      {items.map((item, i) => {
        const content = (
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            {item.icon}
            {item.text}
          </span>
        );

        return item.href ? (
          <a key={i} href={item.href} className="hover:text-foreground transition-colors">
            {content}
          </a>
        ) : (
          <span key={i}>{content}</span>
        );
      })}
    </div>
  );
}
