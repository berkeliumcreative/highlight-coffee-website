// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HeroVideoProps {
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  videoSrc?: string;
  posterSrc?: string;
  className?: string;
  overlay?: boolean;
}

export function HeroVideo({
  heading,
  subheading,
  ctaText,
  ctaHref = "#contact",
  videoSrc,
  posterSrc,
  className,
  overlay = true,
}: HeroVideoProps) {
  return (
    <section className={cn("relative min-h-screen overflow-hidden", className)}>
      {videoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      {overlay && (
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      )}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
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
