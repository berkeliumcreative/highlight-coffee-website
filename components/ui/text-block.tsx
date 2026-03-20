// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface TextBlockProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  maxWidth?: "sm" | "md" | "lg" | "xl";
  centered?: boolean;
}

const sizeMap = { sm: "text-sm", md: "text-base", lg: "text-lg" };
const maxWidthMap = { sm: "max-w-lg", md: "max-w-2xl", lg: "max-w-3xl", xl: "max-w-4xl" };

export function TextBlock({
  children,
  className,
  size = "md",
  maxWidth = "lg",
  centered = true,
}: TextBlockProps) {
  return (
    <div
      className={cn(
        "text-muted-foreground leading-relaxed space-y-4",
        sizeMap[size],
        maxWidthMap[maxWidth],
        centered && "mx-auto text-center",
        className
      )}
    >
      {children}
    </div>
  );
}
