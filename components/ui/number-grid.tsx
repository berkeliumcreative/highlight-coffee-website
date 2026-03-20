// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "./animated-counter";

interface NumberItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface NumberGridProps {
  items: NumberItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function NumberGrid({ items, columns = 4, className }: NumberGridProps) {
  const colMap = {
    2: "grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-8", colMap[columns], className)}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="text-4xl md:text-5xl font-bold" style={{ color: "var(--theme-accent)" }}>
            <AnimatedCounter value={item.value} prefix={item.prefix} suffix={item.suffix} />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
