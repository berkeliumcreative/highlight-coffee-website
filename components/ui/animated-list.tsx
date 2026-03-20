// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedListProps {
  items: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function AnimatedList({ items, className, staggerDelay = 0.08 }: AnimatedListProps) {
  return (
    <motion.ul
      className={cn("space-y-3", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } },
        hidden: {},
      }}
    >
      {items.map((item, i) => (
        <motion.li
          key={i}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
          }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
