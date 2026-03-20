// @ts-nocheck
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface CardStackProps { cards: React.ReactNode[]; className?: string; }

export function CardStack({ cards, className }: CardStackProps) {
  const [index, setIndex] = useState(0);

  return (
    <div className={cn("relative h-64 w-full max-w-sm mx-auto", className)} onClick={() => setIndex((i) => (i + 1) % cards.length)}>
      <AnimatePresence>
        {cards.map((card, i) => {
          const offset = (i - index + cards.length) % cards.length;
          if (offset > 2) return null;
          return (
            <motion.div key={i} className="absolute inset-0 rounded-xl border border-border bg-card p-6 cursor-pointer" style={{ zIndex: cards.length - offset }} initial={{ scale: 0.9, y: 40, opacity: 0 }} animate={{ scale: 1 - offset * 0.05, y: offset * -10, opacity: offset > 2 ? 0 : 1 }} exit={{ scale: 0.8, y: 60, opacity: 0 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
              {card}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
