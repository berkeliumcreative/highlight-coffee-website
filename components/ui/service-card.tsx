// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  price?: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  price,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative rounded-xl border border-border bg-card p-6 transition-colors hover:border-[var(--theme-accent)]/30",
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {icon && (
        <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-[var(--theme-accent)]/10">
          {icon}
        </div>
      )}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-lg">{title}</h3>
        {price && (
          <span className="text-sm font-medium whitespace-nowrap" style={{ color: "var(--theme-accent)" }}>
            {price}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
