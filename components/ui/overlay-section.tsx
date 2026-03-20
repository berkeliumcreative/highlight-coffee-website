// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface OverlaySectionProps {
  children: React.ReactNode;
  imageSrc: string;
  className?: string;
  overlayOpacity?: number;
  blur?: boolean;
}

export function OverlaySection({
  children,
  imageSrc,
  className,
  overlayOpacity = 0.6,
  blur = false,
}: OverlaySectionProps) {
  return (
    <section
      className={cn("relative min-h-[50vh] flex items-center", className)}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className={cn(
          "absolute inset-0",
          blur && "backdrop-blur-sm"
        )}
        style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
