// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  price: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

interface PricingTableProps {
  tiers: PricingTier[];
  className?: string;
}

export function PricingTable({ tiers, className }: PricingTableProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        tiers.length === 2 && "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto",
        tiers.length === 3 && "grid-cols-1 md:grid-cols-3",
        tiers.length >= 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {tiers.map((tier, i) => (
        <motion.div
          key={i}
          className={cn(
            "relative flex flex-col rounded-xl border p-6",
            tier.highlighted
              ? "border-[var(--theme-accent)] shadow-lg"
              : "border-border"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          {tier.highlighted && (
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white"
              style={{ backgroundColor: "var(--theme-accent)" }}
            >
              Popular
            </div>
          )}
          <h3 className="font-semibold text-lg">{tier.name}</h3>
          <div className="mt-2 text-3xl font-bold">{tier.price}</div>
          {tier.description && (
            <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
          )}
          <ul className="mt-6 flex-1 space-y-2.5">
            {tier.features.map((f, j) => (
              <li key={j} className="flex items-start gap-2 text-sm">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={tier.ctaHref || "#contact"}
            className={cn(
              "mt-6 block rounded-lg py-2.5 text-center text-sm font-medium transition-colors",
              tier.highlighted
                ? "text-white hover:opacity-90"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
            style={tier.highlighted ? { backgroundColor: "var(--theme-accent)" } : undefined}
          >
            {tier.ctaText || "Get Started"}
          </a>
        </motion.div>
      ))}
    </div>
  );
}
