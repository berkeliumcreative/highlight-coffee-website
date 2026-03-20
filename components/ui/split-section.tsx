// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SplitSectionProps {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
  reversed?: boolean;
  gap?: string;
}

export function SplitSection({
  left,
  right,
  className,
  reversed = false,
  gap = "gap-12",
}: SplitSectionProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 items-center",
        gap,
        className
      )}
    >
      <motion.div
        className={cn(reversed && "md:order-2")}
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {left}
      </motion.div>
      <motion.div
        className={cn(reversed && "md:order-1")}
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {right}
      </motion.div>
    </div>
  );
}
