// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HoverCardItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface HoverCardGroupProps {
  items: HoverCardItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function HoverCardGroup({ items, columns = 3, className }: HoverCardGroupProps) {
  const colClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-4", colClass[columns], className)}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-[var(--theme-accent)]/30 hover:shadow-lg"
          whileHover={{ y: -4 }}
        >
          <div
            className="absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
            style={{
              background: `linear-gradient(135deg, var(--theme-accent)05, transparent 60%)`,
            }}
          />
          <div className="relative z-10">
            {item.icon && <div className="mb-3 text-2xl">{item.icon}</div>}
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
