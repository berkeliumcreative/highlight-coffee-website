// @ts-nocheck
"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface CircleStatProps { value: number; max?: number; label: string; className?: string; }

export function CircleStat({ value, max = 100, label, className }: CircleStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const percentage = (value / max) * 100;
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className={cn("flex flex-col items-center", className)}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="var(--border)" strokeWidth="6" />
        <motion.circle cx="50" cy="50" r="40" fill="none" stroke="var(--theme-accent)" strokeWidth="6" strokeLinecap="round" strokeDasharray={circumference} initial={{ strokeDashoffset: circumference }} animate={isInView ? { strokeDashoffset: offset } : {}} transition={{ duration: 1.5, ease: "easeOut" }} transform="rotate(-90 50 50)" />
        <text x="50" y="50" textAnchor="middle" dy="0.35em" className="fill-foreground text-lg font-bold">{value}%</text>
      </svg>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
