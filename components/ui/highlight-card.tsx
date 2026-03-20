// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HighlightCardProps {
  icon?: React.ReactNode;
  title: string;
  value: string;
  description?: string;
  className?: string;
}

export function HighlightCard({ icon, title, value, description, className }: HighlightCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl p-6 text-white",
        className
      )}
      style={{ backgroundColor: "var(--theme-accent)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
      {icon && <div className="mb-3 text-2xl">{icon}</div>}
      <p className="text-sm opacity-80">{title}</p>
      <p className="text-3xl font-bold mt-1">{value}</p>
      {description && <p className="mt-2 text-sm opacity-70">{description}</p>}
    </motion.div>
  );
}
