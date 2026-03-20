// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Award {
  title: string;
  year?: string;
  icon?: React.ReactNode;
}

interface AwardsSectionProps {
  awards: Award[];
  className?: string;
}

export function AwardsSection({ awards, className }: AwardsSectionProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-8", className)}>
      {awards.map((award, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center gap-2 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          {award.icon || (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--theme-accent)" }}>
                <path d="M12 15l-2 5 2-1 2 1-2-5z" />
                <circle cx="12" cy="9" r="6" />
              </svg>
            </div>
          )}
          <p className="text-sm font-semibold">{award.title}</p>
          {award.year && <p className="text-xs text-muted-foreground">{award.year}</p>}
        </motion.div>
      ))}
    </div>
  );
}
