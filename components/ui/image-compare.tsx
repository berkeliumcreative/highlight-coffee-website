// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface ImageCompareProps {
  images: { src: string; label: string }[];
  className?: string;
}

export function ImageCompare({ images, className }: ImageCompareProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", className)}>
      {images.map((img, i) => (
        <div key={i} className="relative overflow-hidden rounded-xl group">
          <img
            src={img.src}
            alt={img.label}
            className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <span className="text-white font-medium text-sm">{img.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
