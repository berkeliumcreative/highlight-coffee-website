// @ts-nocheck
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  summary: string;
  children: React.ReactNode;
  className?: string;
}

export function ExpandableCard({ title, summary, children, className }: ExpandableCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={cn("rounded-xl border border-border bg-card overflow-hidden", className)}
      layout
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-5 text-left flex items-start justify-between gap-4"
      >
        <div>
          <h3 className="font-semibold">{title}</h3>
          {!expanded && <p className="mt-1 text-sm text-muted-foreground">{summary}</p>}
        </div>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-muted-foreground mt-1"
        >
          ▾
        </motion.span>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
