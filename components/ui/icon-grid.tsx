// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface IconGridItem {
  icon: React.ReactNode;
  label: string;
}

interface IconGridProps {
  items: IconGridItem[];
  columns?: 3 | 4 | 5 | 6;
  className?: string;
}

export function IconGrid({ items, columns = 4, className }: IconGridProps) {
  const colMap = {
    3: "grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
    5: "grid-cols-3 md:grid-cols-5",
    6: "grid-cols-3 md:grid-cols-6",
  };

  return (
    <div className={cn("grid gap-6", colMap[columns], className)}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center gap-2 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {item.icon}
          </div>
          <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
