// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-xl border border-border bg-card p-6",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {rating > 0 && (
        <div className="mb-3 flex gap-0.5">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-yellow-500">★</span>
          ))}
        </div>
      )}
      <blockquote className="text-foreground/90 mb-4 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div>
        <p className="font-semibold text-sm">{author}</p>
        {role && <p className="text-xs text-muted-foreground">{role}</p>}
      </div>
    </motion.div>
  );
}
