// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HoverLiftCardProps {
  children: React.ReactNode;
  className?: string;
  liftAmount?: number;
}

export function HoverLiftCard({ children, className, liftAmount = -8 }: HoverLiftCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow",
        "hover:shadow-xl",
        className
      )}
      whileHover={{ y: liftAmount }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
