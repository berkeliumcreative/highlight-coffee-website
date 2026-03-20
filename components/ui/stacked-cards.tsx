// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface StackedCardsProps {
  cards: React.ReactNode[];
  className?: string;
}

export function StackedCards({ cards, className }: StackedCardsProps) {
  return (
    <div className={cn("relative", className)}>
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={cn(
            "rounded-xl border border-border bg-card p-6",
            i > 0 && "mt-[-2rem]"
          )}
          style={{
            position: "relative",
            zIndex: cards.length - i,
            marginLeft: i * 8,
            marginRight: i * 8,
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
        >
          {card}
        </motion.div>
      ))}
    </div>
  );
}
