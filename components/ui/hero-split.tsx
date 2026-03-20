// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HeroSplitProps {
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  reversed?: boolean;
  children?: React.ReactNode;
}

export function HeroSplit({
  heading,
  subheading,
  ctaText,
  ctaHref = "#contact",
  imageSrc,
  imageAlt = "",
  className,
  reversed = false,
  children,
}: HeroSplitProps) {
  return (
    <section
      className={cn(
        "grid min-h-[80vh] grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 py-20 max-w-7xl mx-auto",
        className
      )}
    >
      <motion.div
        className={cn("flex flex-col gap-6", reversed && "md:order-2")}
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          {heading}
        </h1>
        {subheading && (
          <p className="text-lg text-muted-foreground max-w-lg">{subheading}</p>
        )}
        {ctaText && (
          <div className="flex gap-4">
            <a
              href={ctaHref}
              className="inline-flex items-center rounded-lg px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--theme-accent)" }}
            >
              {ctaText}
            </a>
          </div>
        )}
        {children}
      </motion.div>
      <motion.div
        className={cn("relative", reversed && "md:order-1")}
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full rounded-2xl object-cover shadow-2xl"
          />
        ) : (
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-muted to-muted/50" />
        )}
      </motion.div>
    </section>
  );
}
