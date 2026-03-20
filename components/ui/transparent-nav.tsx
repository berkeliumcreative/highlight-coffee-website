// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface TransparentNavProps {
  logo: React.ReactNode;
  items: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export function TransparentNav({ logo, items, ctaText, ctaHref, className }: TransparentNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent",
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="font-bold text-lg">{logo}</div>
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
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
      </div>
    </nav>
  );
}
