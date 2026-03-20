// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface RotatingBadgeProps {
  text: string;
  className?: string;
  size?: number;
}

export function RotatingBadge({ text, className, size = 120 }: RotatingBadgeProps) {
  const chars = text.split("");
  const angleStep = 360 / chars.length;

  return (
    <div
      className={cn("relative", className)}
      style={{ width: size, height: size }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            className="absolute left-1/2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
            style={{
              transform: `rotate(${i * angleStep}deg) translateY(-${size / 2 - 10}px)`,
              transformOrigin: "0 ${size / 2}px",
            }}
          >
            {char}
          </span>
        ))}
      </motion.div>
      <div
        className="absolute inset-4 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "var(--theme-accent)" }}
      >
        <span className="text-white text-xs font-bold">★</span>
      </div>
    </div>
  );
}
