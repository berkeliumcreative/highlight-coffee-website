// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HeroMinimalProps {
  heading: string;
  subheading?: string;
  className?: string;
}

export function HeroMinimal({ heading, subheading, className }: HeroMinimalProps) {
  return (
    <section className={cn("flex min-h-[50vh] flex-col items-center justify-center px-6 py-32 text-center", className)}>
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {heading}
      </motion.h1>
      {subheading && (
        <motion.p
          className="mt-6 text-muted-foreground text-lg max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {subheading}
        </motion.p>
      )}
    </section>
  );
}
