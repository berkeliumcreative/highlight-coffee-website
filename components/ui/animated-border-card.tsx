// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedBorderCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedBorderCard({ children, className }: AnimatedBorderCardProps) {
  return (
    <div className={cn("relative rounded-xl p-[1px] overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from 0deg, transparent, var(--theme-accent), transparent, oklch(0.6 0.15 280), transparent)`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative rounded-[calc(0.75rem-1px)] bg-card p-6">
        {children}
      </div>
    </div>
  );
}
