// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface StickyCTAProps {
  text: string;
  href?: string;
  phone?: string;
  className?: string;
  showAfterScroll?: number;
}

export function StickyCTA({
  text,
  href,
  phone,
  className,
  showAfterScroll = 500,
}: StickyCTAProps) {
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
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm p-3 md:hidden"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <a
            href={link}
            className={cn(
              "block w-full rounded-lg py-3 text-center font-medium text-white transition-opacity hover:opacity-90",
              className
            )}
            style={{ backgroundColor: "var(--theme-accent)" }}
          >
            {text}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
