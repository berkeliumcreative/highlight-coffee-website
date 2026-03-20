// @ts-nocheck
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface ParallaxTextProps {
  text: string;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
}

export function ParallaxText({
  text,
  className,
  speed = 1,
  direction = "left",
}: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const directionMultiplier = direction === "left" ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 1], [0, directionMultiplier * speed * 200]);

  return (
    <div ref={ref} className={cn("overflow-hidden py-6", className)}>
      <motion.div
        className="whitespace-nowrap text-6xl md:text-8xl font-bold text-foreground/5"
        style={{ x }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="mx-8">{text}</span>
        ))}
      </motion.div>
    </div>
  );
}
