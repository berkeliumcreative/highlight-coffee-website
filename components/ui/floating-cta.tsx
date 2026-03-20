// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface FloatingCTAProps {
  text: string;
  href?: string;
  phone?: string;
  icon?: React.ReactNode;
  className?: string;
  showAfterScroll?: number;
}

export function FloatingCTA({
  text,
  href,
  phone,
  icon,
  className,
  showAfterScroll = 300,
}: FloatingCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > showAfterScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfterScroll]);

  const link = href || (phone ? `tel:${phone.replace(/[^+\d]/g, "")}` : "#contact");

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={link}
          className={cn(
            "fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full px-5 py-3 font-medium text-white shadow-xl transition-transform hover:scale-105 active:scale-95",
            className
          )}
          style={{ backgroundColor: "var(--theme-accent)" }}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {icon || (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          )}
          {text}
        </motion.a>
      )}
    </AnimatePresence>
  );
}
