// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
}

interface TestimonialGridProps {
  testimonials: Testimonial[];
  columns?: 2 | 3;
  className?: string;
}

export function TestimonialGrid({ testimonials, columns = 3, className }: TestimonialGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          className="rounded-xl border border-border bg-card p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
        >
          {t.rating && (
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <span key={j} className="text-yellow-500 text-sm">★</span>
              ))}
            </div>
          )}
          <p className="text-sm text-foreground/90 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
          <div className="mt-4 pt-3 border-t border-border">
            <p className="text-sm font-semibold">{t.author}</p>
            {t.role && <p className="text-xs text-muted-foreground">{t.role}</p>}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
