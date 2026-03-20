// @ts-nocheck
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ComparisonItem {
  label: string;
  features: { name: string; value: string | boolean }[];
}

interface ComparisonSliderProps {
  items: [ComparisonItem, ComparisonItem];
  className?: string;
}

export function ComparisonSlider({ items, className }: ComparisonSliderProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className={cn("max-w-xl mx-auto", className)}>
      <div className="flex bg-muted rounded-lg p-1 mb-6">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={cn(
              "relative flex-1 py-2.5 text-sm font-medium rounded-md transition-colors",
              selected === i ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {selected === i && (
              <motion.div layoutId="comparison-bg" className="absolute inset-0 rounded-md bg-background shadow-sm" />
            )}
            <span className="relative z-10">{item.label}</span>
          </button>
        ))}
      </div>
      <motion.div
        key={selected}
        className="space-y-3"
        initial={{ opacity: 0, x: selected === 0 ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {items[selected].features.map((f, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
            <span className="text-sm">{f.name}</span>
            <span className="text-sm font-medium">
              {typeof f.value === "boolean" ? (
                f.value ? <span className="text-green-500">✓</span> : <span className="text-red-400">✗</span>
              ) : f.value}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
