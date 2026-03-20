// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface RatingSummaryProps {
  averageRating: number;
  totalReviews: number;
  breakdown?: { stars: number; count: number }[];
  className?: string;
}

export function RatingSummary({
  averageRating,
  totalReviews,
  breakdown,
  className,
}: RatingSummaryProps) {
  return (
    <div className={cn("flex flex-col md:flex-row items-center gap-8", className)}>
      <div className="text-center">
        <div className="text-5xl font-bold">{averageRating.toFixed(1)}</div>
        <div className="flex gap-0.5 mt-2 justify-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={cn("text-lg", i < Math.round(averageRating) ? "text-yellow-500" : "text-muted-foreground/30")}>
              ★
            </span>
          ))}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{totalReviews} reviews</p>
      </div>
      {breakdown && (
        <div className="flex-1 space-y-2 w-full max-w-xs">
          {[5, 4, 3, 2, 1].map((stars) => {
            const item = breakdown.find((b) => b.stars === stars);
            const percentage = item ? (item.count / totalReviews) * 100 : 0;
            return (
              <div key={stars} className="flex items-center gap-2 text-sm">
                <span className="w-3 text-right">{stars}</span>
                <span className="text-yellow-500">★</span>
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${percentage}%`, backgroundColor: "var(--theme-accent)" }}
                  />
                </div>
                <span className="w-8 text-right text-muted-foreground text-xs">{item?.count || 0}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
