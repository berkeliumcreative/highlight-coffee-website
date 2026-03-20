// @ts-nocheck
"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  className?: string;
  color?: string;
  position?: "top" | "bottom";
  height?: number;
}

export function ScrollProgress({
  className,
  color,
  position = "top",
  height = 3,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className={cn(
        "fixed left-0 right-0 z-50 origin-left",
        position === "top" ? "top-0" : "bottom-0",
        className
      )}
      style={{
        scaleX,
        height,
        backgroundColor: color || "var(--theme-accent)",
      }}
    />
  );
}
