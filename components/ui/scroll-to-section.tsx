// @ts-nocheck
"use client";
import { cn } from "@/lib/utils";

interface ScrollToSectionProps { targetId: string; children: React.ReactNode; className?: string; }

export function ScrollToSection({ targetId, children, className }: ScrollToSectionProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };
  return <button onClick={handleClick} className={cn("cursor-pointer", className)}>{children}</button>;
}
