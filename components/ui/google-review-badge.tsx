// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface GoogleReviewBadgeProps {
  rating: number;
  totalReviews: number;
  className?: string;
}

export function GoogleReviewBadge({ rating, totalReviews, className }: GoogleReviewBadgeProps) {
  return (
    <div className={cn("inline-flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3", className)}>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{rating.toFixed(1)}</span>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={cn("text-xs", i < Math.round(rating) ? "text-yellow-500" : "text-muted-foreground/30")}>
              ★
            </span>
          ))}
        </div>
      </div>
      <div className="h-8 w-px bg-border" />
      <div className="text-sm">
        <p className="font-medium">Google Reviews</p>
        <p className="text-muted-foreground">{totalReviews} reviews</p>
      </div>
    </div>
  );
}
