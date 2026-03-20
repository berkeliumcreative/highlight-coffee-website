// @ts-nocheck
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface AnnouncementBarProps {
  message: string;
  ctaText?: string;
  ctaHref?: string;
  dismissible?: boolean;
  className?: string;
}

export function AnnouncementBar({
  message,
  ctaText,
  ctaHref,
  dismissible = true,
  className,
}: AnnouncementBarProps) {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={cn(
            "relative flex items-center justify-center gap-3 px-4 py-2.5 text-sm text-white",
            className
          )}
          style={{ backgroundColor: "var(--theme-accent)" }}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span>{message}</span>
          {ctaText && (
            <a
              href={ctaHref || "#"}
              className="font-semibold underline underline-offset-2 hover:no-underline"
            >
              {ctaText}
            </a>
          )}
          {dismissible && (
            <button
              onClick={() => setVisible(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100"
              aria-label="Dismiss"
            >
              ✕
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
