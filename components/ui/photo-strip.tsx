// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface PhotoStripProps {
  images: { src: string; alt?: string }[];
  className?: string;
}

export function PhotoStrip({ images, className }: PhotoStripProps) {
  return (
    <div className={cn("flex gap-2 overflow-hidden", className)}>
      {images.map((img, i) => (
        <div key={i} className="flex-1 min-w-0 overflow-hidden rounded-lg">
          <img
            src={img.src}
            alt={img.alt || ""}
            className="w-full aspect-[3/4] object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
}
