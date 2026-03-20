// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HeroSimpleProps {
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
  align?: "center" | "left";
  children?: React.ReactNode;
}

export function HeroSimple({
  heading,
  subheading,
  ctaText,
  ctaHref = "#contact",
  secondaryCtaText,
  secondaryCtaHref,
  className,
  align = "center",
  children,
}: HeroSimpleProps) {
  return (
    <section
      className={cn(
        "flex min-h-[70vh] flex-col justify-center px-6 py-20",
        align === "center" && "items-center text-center",
        align === "left" && "items-start max-w-4xl mx-auto",
        className
      )}
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {heading}
      </motion.h1>
      {subheading && (
        <motion.p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {subheading}
        </motion.p>
      )}
      <motion.div
        className="mt-8 flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {ctaText && (
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--theme-accent)" }}
          >
            {ctaText}
          </a>
        )}
        {secondaryCtaText && (
          <a
            href={secondaryCtaHref || "#"}
            className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 font-medium transition-colors hover:bg-muted"
          >
            {secondaryCtaText}
          </a>
        )}
      </motion.div>
      {children}
    </section>
  );
}
