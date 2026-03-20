// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedDividerProps {
  className?: string;
  variant?: "line" | "gradient" | "dots" | "fade";
}

export function AnimatedDivider({ className, variant = "gradient" }: AnimatedDividerProps) {
  if (variant === "dots") {
    return (
      <div className={cn("flex items-center justify-center gap-2 py-8", className)}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
          />
        ))}
      </div>
    );
  }

  if (variant === "fade") {
    return (
      <div className={cn("py-8", className)}>
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div className={cn("py-8 overflow-hidden", className)}>
        <motion.div
          className="h-px bg-border"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    );
  }

  // gradient (default)
  return (
    <div className={cn("py-8 overflow-hidden", className)}>
      <motion.div
        className="h-px"
        style={{
          background: `linear-gradient(to right, transparent, var(--theme-accent), transparent)`,
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}
