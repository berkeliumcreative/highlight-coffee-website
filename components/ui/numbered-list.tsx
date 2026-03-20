// @ts-nocheck
"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface NumberedListItem { title: string; description: string; }
interface NumberedListProps { items: NumberedListItem[]; className?: string; }

export function NumberedList({ items, className }: NumberedListProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {items.map((item, i) => (
        <motion.div key={i} className="flex gap-4" initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
          <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: "var(--theme-accent)" }}>{i + 1}</span>
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
