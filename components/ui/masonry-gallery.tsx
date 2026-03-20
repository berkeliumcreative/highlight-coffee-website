// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface MasonryGalleryProps {
  images: { src: string; alt?: string }[];
  columns?: 2 | 3;
  className?: string;
}

export function MasonryGallery({ images, columns = 3, className }: MasonryGalleryProps) {
  // Distribute images into columns
  const cols: typeof images[] = Array.from({ length: columns }, () => []);
  images.forEach((img, i) => {
    cols[i % columns].push(img);
  });

  return (
    <div className={cn("flex gap-4", className)}>
      {cols.map((colImages, colIdx) => (
        <div key={colIdx} className="flex flex-1 flex-col gap-4">
          {colImages.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (colIdx * 0.1) + (i * 0.1), duration: 0.5 }}
            >
              <img
                src={img.src}
                alt={img.alt || ""}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
