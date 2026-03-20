// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface NotificationBadgeProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function NotificationBadge({ icon, title, description, className }: NotificationBadgeProps) {
  return (
    <motion.div
      className={cn(
        "inline-flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-lg",
        className
      )}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {icon && (
        <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--theme-accent)]/10">
          {icon}
        </div>
      )}
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
