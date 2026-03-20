// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  text: string;
  className?: string;
}

export function AnimatedLogo({ text, className }: AnimatedLogoProps) {
  return (
    <motion.span
      className={cn("text-xl font-bold tracking-tight", className)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span style={{ color: "var(--theme-accent)" }}>{text.charAt(0)}</span>
      {text.slice(1)}
    </motion.span>
  );
}
