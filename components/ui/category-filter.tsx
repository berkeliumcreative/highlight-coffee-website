// @ts-nocheck
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  onSelect?: (category: string) => void;
  className?: string;
}

export function CategoryFilter({ categories, onSelect, className }: CategoryFilterProps) {
  const [active, setActive] = useState(categories[0] || "All");

  const handleSelect = (cat: string) => {
    setActive(cat);
    onSelect?.(cat);
  };

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleSelect(cat)}
          className={cn(
            "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
            active === cat ? "text-white" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {active === cat && (
            <motion.div
              layoutId="category-pill"
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: "var(--theme-accent)" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{cat}</span>
        </button>
      ))}
    </div>
  );
}
