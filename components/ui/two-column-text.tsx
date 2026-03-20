// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface TwoColumnTextProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  className?: string;
}

export function TwoColumnText({ leftContent, rightContent, className }: TwoColumnTextProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16", className)}>
      <div>{leftContent}</div>
      <div>{rightContent}</div>
    </div>
  );
}
