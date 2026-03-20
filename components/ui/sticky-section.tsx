// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface StickySectionProps {
  children: React.ReactNode;
  stickyContent: React.ReactNode;
  className?: string;
  stickyPosition?: "left" | "right";
}

export function StickySection({
  children,
  stickyContent,
  className,
  stickyPosition = "left",
}: StickySectionProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-12", className)}>
      <div className={cn(stickyPosition === "right" && "md:order-2")}>
        <div className="sticky top-24">{stickyContent}</div>
      </div>
      <div className={cn(stickyPosition === "right" && "md:order-1")}>
        {children}
      </div>
    </div>
  );
}
