// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  className?: string;
  variant?: "text" | "card" | "image" | "avatar";
}

export function LoadingSkeleton({ className, variant = "text" }: LoadingSkeletonProps) {
  const base = "animate-pulse rounded bg-muted";

  if (variant === "avatar") {
    return <div className={cn(base, "h-12 w-12 rounded-full", className)} />;
  }

  if (variant === "image") {
    return <div className={cn(base, "aspect-video w-full rounded-xl", className)} />;
  }

  if (variant === "card") {
    return (
      <div className={cn("rounded-xl border border-border p-6 space-y-4", className)}>
        <div className={cn(base, "h-4 w-3/4")} />
        <div className={cn(base, "h-3 w-full")} />
        <div className={cn(base, "h-3 w-5/6")} />
      </div>
    );
  }

  return (
    <div className={cn("space-y-2", className)}>
      <div className={cn(base, "h-4 w-3/4")} />
      <div className={cn(base, "h-4 w-full")} />
      <div className={cn(base, "h-4 w-2/3")} />
    </div>
  );
}
