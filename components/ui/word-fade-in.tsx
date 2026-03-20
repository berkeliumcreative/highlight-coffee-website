// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
}

export function WordFadeIn({ words, className, delay = 0.15 }: WordFadeInProps) {
  const wordArray = words.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: delay } },
        hidden: {},
      }}
      className={cn("inline-flex flex-wrap", className)}
    >
      {wordArray.map((word, i) => (
        <motion.span
          key={i}
          className="mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, filter: "blur(8px)", y: 10 },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
