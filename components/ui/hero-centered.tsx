// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HeroCenteredProps {
  label?: string;
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
  children?: React.ReactNode;
}

export function HeroCentered({
  label,
  heading,
  subheading,
  ctaText,
  ctaHref = "#contact",
  secondaryCtaText,
  secondaryCtaHref,
  className,
  children,
}: HeroCenteredProps) {
  return (
    <section className={cn("min-h-[85vh] flex flex-col items-center justify-center px-6 text-center", className)}>
      {label && (
        <motion.span
          className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
          style={{ backgroundColor: "var(--theme-accent)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {label}
        </motion.span>
      )}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {heading}
      </motion.h1>
      {subheading && (
        <motion.p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {subheading}
        </motion.p>
      )}
      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {ctaText && (
          <a
            href={ctaHref}
            className="inline-flex items-center rounded-lg px-7 py-3 font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--theme-accent)" }}
          >
            {ctaText}
          </a>
        )}
        {secondaryCtaText && (
          <a
            href={secondaryCtaHref || "#"}
            className="inline-flex items-center rounded-lg border border-border bg-background px-7 py-3 font-medium transition-colors hover:bg-muted"
          >
            {secondaryCtaText}
          </a>
        )}
      </motion.div>
      {children}
    </section>
  );
}
