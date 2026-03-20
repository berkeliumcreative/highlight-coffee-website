// @ts-nocheck
"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface FeatureItem { icon?: React.ReactNode; title: string; description: string; }
interface FeatureListProps { items: FeatureItem[]; className?: string; }

export function FeatureList({ items, className }: FeatureListProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {items.map((item, i) => (
        <motion.div key={i} className="flex gap-4 items-start" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
          {item.icon && <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: "var(--theme-accent)" }}>{item.icon}</div>}
          <div>
            <h4 className="font-semibold text-foreground">{item.title}</h4>
            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
