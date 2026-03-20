// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  animation?: "fade-up" | "split" | "blur";
}

export function AnimatedHeading({
  children,
  className,
  as: Component = "h2",
  animation = "fade-up",
}: AnimatedHeadingProps) {
  const variants = {
    "fade-up": {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    split: {
      initial: { opacity: 0, letterSpacing: "0.5em" },
      animate: { opacity: 1, letterSpacing: "normal" },
    },
    blur: {
      initial: { opacity: 0, filter: "blur(10px)" },
      animate: { opacity: 1, filter: "blur(0px)" },
    },
  };

  const v = variants[animation];

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Component className={cn(className)}>{children}</Component>
    </motion.div>
  );
}
