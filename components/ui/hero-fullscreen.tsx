// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HeroFullscreenProps {
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  children?: React.ReactNode;
}

export function HeroFullscreen({
  heading,
  subheading,
  ctaText,
  ctaHref = "#contact",
  className,
  children,
}: HeroFullscreenProps) {
  return (
    <section className={cn("min-h-screen flex flex-col items-center justify-center px-6 text-center relative", className)}>
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.9]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {heading}
      </motion.h1>
      {subheading && (
        <motion.p
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {subheading}
        </motion.p>
      )}
      {ctaText && (
        <motion.a
          href={ctaHref}
          className="mt-10 inline-flex items-center rounded-full px-8 py-4 font-medium text-white transition-transform hover:scale-105"
          style={{ backgroundColor: "var(--theme-accent)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {ctaText}
        </motion.a>
      )}
      {children}
    </section>
  );
}
