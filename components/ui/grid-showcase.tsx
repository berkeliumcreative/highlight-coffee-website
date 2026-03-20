// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface GridShowcaseItem {
  imageSrc: string;
  title: string;
  description?: string;
}

interface GridShowcaseProps {
  items: GridShowcaseItem[];
  columns?: 2 | 3;
  className?: string;
}

export function GridShowcase({ items, columns = 3, className }: GridShowcaseProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="group overflow-hidden rounded-xl border border-border bg-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <div className="overflow-hidden">
            <img
              src={item.imageSrc}
              alt={item.title}
              className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <h3 className="font-semibold">{item.title}</h3>
            {item.description && (
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
