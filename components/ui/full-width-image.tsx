// @ts-nocheck
"use client";
import { cn } from "@/lib/utils";

interface FullWidthImageProps { src: string; alt?: string; className?: string; maxHeight?: string; }

export function FullWidthImage({ src, alt = "", className, maxHeight = "500px" }: FullWidthImageProps) {
  return (
    <div className={cn("w-full overflow-hidden", className)} style={{ maxHeight }}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
