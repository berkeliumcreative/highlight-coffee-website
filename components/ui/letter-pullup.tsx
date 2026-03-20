// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface LetterPullupProps {
  words: string;
  className?: string;
  delay?: number;
}

export function LetterPullup({ words, className, delay = 0.05 }: LetterPullupProps) {
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * delay,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  return (
    <span className={cn("inline-flex", className)}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={pullupVariant}
          initial="initial"
          whileInView="animate"
          custom={i}
          viewport={{ once: true }}
          className={letter === " " ? "w-[0.25em]" : ""}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
