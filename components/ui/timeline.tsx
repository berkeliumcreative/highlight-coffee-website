// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  description: string;
  date?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="relative pl-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {/* Dot */}
            <div
              className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-background"
              style={{ backgroundColor: "var(--theme-accent)" }}
            />
            {item.date && (
              <p className="text-xs text-muted-foreground mb-1">{item.date}</p>
            )}
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
