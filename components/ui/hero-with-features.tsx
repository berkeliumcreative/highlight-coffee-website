// @ts-nocheck
"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Feature { icon?: React.ReactNode; text: string; }
interface HeroWithFeaturesProps { heading: string; subheading?: string; ctaText?: string; ctaHref?: string; features?: Feature[]; className?: string; }

export function HeroWithFeatures({ heading, subheading, ctaText, ctaHref = "#contact", features = [], className }: HeroWithFeaturesProps) {
  return (
    <section className={cn("min-h-[80vh] flex flex-col items-center justify-center px-6 text-center", className)}>
      <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>{heading}</motion.h1>
      {subheading && <motion.p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>{subheading}</motion.p>}
      {ctaText && <motion.a href={ctaHref} className="mt-8 inline-flex items-center rounded-lg px-7 py-3 font-medium text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "var(--theme-accent)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>{ctaText}</motion.a>}
      {features.length > 0 && (
        <motion.div className="mt-12 flex flex-wrap justify-center gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              {f.icon || <span style={{ color: "var(--theme-accent)" }}>✓</span>}
              {f.text}
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
