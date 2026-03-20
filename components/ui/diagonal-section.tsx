// @ts-nocheck
"use client";
import { cn } from "@/lib/utils";

interface DiagonalSectionProps { children: React.ReactNode; className?: string; bgColor?: string; }

export function DiagonalSection({ children, className, bgColor }: DiagonalSectionProps) {
  return (
    <section className={cn("relative py-20", className)} style={{ backgroundColor: bgColor }}>
      <div className="absolute top-0 left-0 right-0 h-16 -translate-y-full" style={{ background: bgColor || "var(--card)", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      <div className="relative z-10">{children}</div>
      <div className="absolute bottom-0 left-0 right-0 h-16 translate-y-full" style={{ background: bgColor || "var(--card)", clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
    </section>
  );
}
