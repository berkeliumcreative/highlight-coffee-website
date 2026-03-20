// @ts-nocheck
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollCarouselProps {
  images: { src: string; alt?: string }[];
  className?: string;
}

export function ScrollCarousel({ images, className }: ScrollCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div ref={ref} className={cn("overflow-hidden py-12", className)}>
      <motion.div className="flex gap-4" style={{ x }}>
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 md:w-96 overflow-hidden rounded-xl"
          >
            <img
              src={img.src}
              alt={img.alt || ""}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
