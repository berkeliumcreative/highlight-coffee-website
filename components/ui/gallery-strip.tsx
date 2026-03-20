// @ts-nocheck
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface GalleryStripProps {
  images: { src: string; alt?: string }[];
  className?: string;
  direction?: "left" | "right";
}

export function GalleryStrip({ images, className, direction = "left" }: GalleryStripProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mult = direction === "left" ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 1], [0, mult * 200]);

  return (
    <div ref={ref} className={cn("overflow-hidden py-4", className)}>
      <motion.div className="flex gap-3" style={{ x }}>
        {[...images, ...images].map((img, i) => (
          <div key={i} className="flex-shrink-0 w-48 md:w-64 overflow-hidden rounded-lg">
            <img
              src={img.src}
              alt={img.alt || ""}
              className="w-full aspect-[3/2] object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
