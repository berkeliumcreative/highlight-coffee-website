// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface StaggerTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  once?: boolean;
}

export function StaggerText({
  text,
  className,
  staggerDelay = 0.03,
  duration = 0.4,
  once = true,
}: StaggerTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100, duration },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 100, duration },
    },
  };

  return (
    <motion.span
      className={cn("inline-flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, idx) => (
        <motion.span variants={child} key={idx} className="mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
