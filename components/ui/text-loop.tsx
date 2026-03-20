// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface TextLoopProps { words: string[]; className?: string; interval?: number; }

export function TextLoop({ words, className, interval = 2500 }: TextLoopProps) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={cn("relative inline-flex overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.span key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="inline-block" style={{ color: "var(--theme-accent)" }}>
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
