// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  heading: string;
  subheading?: string;
  ctaText: string;
  ctaHref?: string;
  className?: string;
  variant?: "filled" | "outlined" | "gradient";
}

export function CTABanner({
  heading,
  subheading,
  ctaText,
  ctaHref = "#contact",
  className,
  variant = "filled",
}: CTABannerProps) {
  return (
    <motion.section
      className={cn(
        "rounded-2xl px-8 py-12 md:py-16 text-center",
        variant === "filled" && "text-white",
        variant === "outlined" && "border-2 border-border",
        variant === "gradient" && "text-white",
        className
      )}
      style={
        variant === "filled"
          ? { backgroundColor: "var(--theme-accent)" }
          : variant === "gradient"
          ? {
              background: `linear-gradient(135deg, var(--theme-accent), oklch(0.5 0.2 280))`,
            }
          : undefined
      }
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
      {subheading && (
        <p
          className={cn(
            "mt-3 text-lg max-w-2xl mx-auto",
            variant === "outlined" ? "text-muted-foreground" : "opacity-90"
          )}
        >
          {subheading}
        </p>
      )}
      <a
        href={ctaHref}
        className={cn(
          "mt-6 inline-flex items-center rounded-lg px-8 py-3 font-medium transition-colors",
          variant === "outlined"
            ? "text-white hover:opacity-90"
            : "bg-white text-black hover:bg-white/90"
        )}
        style={
          variant === "outlined"
            ? { backgroundColor: "var(--theme-accent)" }
            : undefined
        }
      >
        {ctaText}
      </a>
    </motion.section>
  );
}
