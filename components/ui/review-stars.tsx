// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface ReviewStarsProps {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}

const sizeMap = { sm: "text-sm", md: "text-lg", lg: "text-2xl" };

export function ReviewStars({
  rating,
  maxStars = 5,
  size = "md",
  showValue = false,
  className,
}: ReviewStarsProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: maxStars }).map((_, i) => (
        <span
          key={i}
          className={cn(
            sizeMap[size],
            i < Math.floor(rating) ? "text-yellow-500" : "text-muted-foreground/30"
          )}
        >
          ★
        </span>
      ))}
      {showValue && (
        <span className="ml-1 text-sm font-medium text-muted-foreground">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
