// @ts-nocheck
"use client";
import { cn } from "@/lib/utils";

interface AccentLineProps { className?: string; width?: string; align?: "left" | "center" | "right"; }

export function AccentLine({ className, width = "60px", align = "left" }: AccentLineProps) {
  return (
    <div className={cn("h-1 rounded-full", align === "center" && "mx-auto", align === "right" && "ml-auto", className)} style={{ width, backgroundColor: "var(--theme-accent)" }} />
  );
}
