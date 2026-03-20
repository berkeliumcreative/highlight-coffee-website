// @ts-nocheck
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  imageSrc?: string;
}

interface FeatureShowcaseProps {
  features: Feature[];
  className?: string;
}

export function FeatureShowcase({ features, className }: FeatureShowcaseProps) {
  const [active, setActive] = useState(0);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 items-center", className)}>
      <div className="space-y-2">
        {features.map((feature, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "block w-full text-left rounded-lg p-4 transition-all",
              active === i
                ? "bg-card border border-[var(--theme-accent)]/30 shadow-sm"
                : "hover:bg-muted/50"
            )}
          >
            <h3 className={cn("font-semibold", active === i && "text-[var(--theme-accent)]")}>
              {feature.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {features[active]?.imageSrc ? (
            <img
              src={features[active].imageSrc}
              alt={features[active].title}
              className="w-full rounded-xl shadow-lg"
            />
          ) : (
            <div className="aspect-[4/3] w-full rounded-xl bg-muted" />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
