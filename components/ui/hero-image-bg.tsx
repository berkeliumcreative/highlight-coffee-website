// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HeroImageBgProps {
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc: string;
  className?: string;
  overlayOpacity?: number;
}

export function HeroImageBg({
  heading,
  subheading,
  ctaText,
  ctaHref = "#contact",
  imageSrc,
  className,
  overlayOpacity = 0.55,
}: HeroImageBgProps) {
  return (
    <section
      className={cn("relative min-h-screen flex items-center justify-center text-center", className)}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }} />
      <div className="relative z-10 px-6 max-w-4xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {heading}
        </motion.h1>
        {subheading && (
          <motion.p
            className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
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
            className="mt-8 inline-flex items-center rounded-lg px-8 py-3.5 font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--theme-accent)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {ctaText}
          </motion.a>
        )}
      </div>
    </section>
  );
}
