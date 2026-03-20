// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface BookingPromptProps {
  heading?: string;
  description?: string;
  phone?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export function BookingPrompt({
  heading = "Ready to Book?",
  description,
  phone,
  ctaText = "Call Now",
  ctaHref,
  className,
}: BookingPromptProps) {
  const href = ctaHref || (phone ? `tel:${phone.replace(/[^+\d]/g, "")}` : "#contact");

  return (
    <motion.div
      className={cn(
        "rounded-2xl p-8 md:p-12 text-center text-white",
        className
      )}
      style={{ backgroundColor: "var(--theme-accent)" }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
      {description && (
        <p className="mt-3 text-lg opacity-90 max-w-xl mx-auto">{description}</p>
      )}
      {phone && (
        <p className="mt-4 text-2xl font-bold">{phone}</p>
      )}
      <a
        href={href}
        className="mt-6 inline-flex items-center rounded-lg bg-white px-8 py-3 font-medium text-black transition-transform hover:scale-105 active:scale-95"
      >
        {ctaText}
      </a>
    </motion.div>
  );
}
