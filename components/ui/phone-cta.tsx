// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface PhoneCTAProps {
  phone: string;
  text?: string;
  className?: string;
  variant?: "button" | "link" | "banner";
}

export function PhoneCTA({
  phone,
  text = "Call Now",
  className,
  variant = "button",
}: PhoneCTAProps) {
  const cleanPhone = phone.replace(/[^+\d]/g, "");

  if (variant === "banner") {
    return (
      <a
        href={`tel:${cleanPhone}`}
        className={cn(
          "block w-full py-3 text-center text-white font-medium transition-opacity hover:opacity-90",
          className
        )}
        style={{ backgroundColor: "var(--theme-accent)" }}
      >
        <span className="text-sm">{text}:</span>{" "}
        <span className="text-lg font-bold">{phone}</span>
      </a>
    );
  }

  if (variant === "link") {
    return (
      <a
        href={`tel:${cleanPhone}`}
        className={cn("font-medium transition-opacity hover:opacity-80", className)}
        style={{ color: "var(--theme-accent)" }}
      >
        {phone}
      </a>
    );
  }

  return (
    <a
      href={`tel:${cleanPhone}`}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-opacity hover:opacity-90",
        className
      )}
      style={{ backgroundColor: "var(--theme-accent)" }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
      {text}
    </a>
  );
}
