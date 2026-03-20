// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface FullBleedSectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export function FullBleedSection({
  children,
  className,
  backgroundImage,
  backgroundColor,
  overlay = false,
  overlayOpacity = 0.5,
}: FullBleedSectionProps) {
  return (
    <section
      className={cn("relative w-full", className)}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundColor,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {overlay && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
