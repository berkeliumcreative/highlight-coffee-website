// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface SpacerProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

const sizeMap = {
  sm: "h-8",
  md: "h-16",
  lg: "h-24",
  xl: "h-32",
  "2xl": "h-48",
};

export function Spacer({ size = "md", className }: SpacerProps) {
  return <div className={cn(sizeMap[size], className)} />;
}
