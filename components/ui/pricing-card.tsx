// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  description?: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
  highlighted?: boolean;
  className?: string;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  ctaText = "Get Started",
  ctaHref = "#contact",
  highlighted = false,
  className,
}: PricingCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-xl border p-6 flex flex-col",
        highlighted
          ? "border-[var(--theme-accent)] bg-card shadow-lg scale-105"
          : "border-border bg-card",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {highlighted && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: "var(--theme-accent)" }}
        >
          Most Popular
        </div>
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-2 text-3xl font-bold">{price}</div>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      )}
      <ul className="mt-6 space-y-3 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span className="mt-0.5 text-green-500">✓</span>
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={ctaHref}
        className={cn(
          "mt-6 block rounded-lg py-2.5 text-center font-medium transition-colors",
          highlighted
            ? "text-white hover:opacity-90"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        )}
        style={highlighted ? { backgroundColor: "var(--theme-accent)" } : undefined}
      >
        {ctaText}
      </a>
    </motion.div>
  );
}
