// @ts-nocheck
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface MinimalNavProps {
  logo: React.ReactNode;
  items: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export function MinimalNav({ logo, items, ctaText, ctaHref, className }: MinimalNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border", className)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="font-bold text-lg">{logo}</div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          {ctaText && (
            <a
              href={ctaHref || "#contact"}
              className="rounded-lg px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--theme-accent)" }}
            >
              {ctaText}
            </a>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden border-t border-border bg-background px-6 py-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm py-2 text-muted-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {ctaText && (
                <a
                  href={ctaHref || "#contact"}
                  className="mt-2 rounded-lg px-4 py-2.5 text-center text-sm font-medium text-white"
                  style={{ backgroundColor: "var(--theme-accent)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {ctaText}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
