// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface FloatingNavProps {
  items: NavItem[];
  className?: string;
  logo?: React.ReactNode;
}

export function FloatingNav({ items, className, logo }: FloatingNavProps) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className={cn(
            "fixed top-4 left-1/2 z-50 -translate-x-1/2",
            "flex items-center gap-6 rounded-full px-6 py-3",
            "border border-border/50",
            scrolled
              ? "bg-background/80 backdrop-blur-lg shadow-lg"
              : "bg-background/40 backdrop-blur-sm",
            className
          )}
        >
          {logo && <div className="mr-2">{logo}</div>}
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
