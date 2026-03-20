// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface QuoteBlockProps {
  quote: string;
  author?: string;
  className?: string;
}

export function QuoteBlock({ quote, author, className }: QuoteBlockProps) {
  return (
    <motion.blockquote
      className={cn("relative pl-6 border-l-4", className)}
      style={{ borderColor: "var(--theme-accent)" }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg md:text-xl italic text-foreground/90 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      {author && (
        <footer className="mt-3 text-sm text-muted-foreground font-medium">
          — {author}
        </footer>
      )}
    </motion.blockquote>
  );
}
