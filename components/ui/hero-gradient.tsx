// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HeroGradientProps {
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  children?: React.ReactNode;
}

export function HeroGradient({
  heading,
  subheading,
  ctaText,
  ctaHref = "#contact",
  className,
  children,
}: HeroGradientProps) {
  return (
    <section className={cn("relative min-h-screen overflow-hidden", className)}>
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl animate-aurora"
          style={{ backgroundColor: "var(--theme-accent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full opacity-15 blur-3xl animate-aurora-reverse"
          style={{ backgroundColor: "oklch(0.6 0.2 280)" }}
        />
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(135deg, var(--foreground) 0%, var(--theme-accent) 50%, var(--foreground) 100%)`,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {heading}
        </motion.h1>
        {subheading && (
          <motion.p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {subheading}
          </motion.p>
        )}
        {ctaText && (
          <motion.a
            href={ctaHref}
            className="mt-8 inline-flex items-center rounded-full px-8 py-3.5 font-medium text-white shadow-lg transition-transform hover:scale-105"
            style={{ backgroundColor: "var(--theme-accent)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {ctaText}
          </motion.a>
        )}
        {children}
      </div>
    </section>
  );
}
