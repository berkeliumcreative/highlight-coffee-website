// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ImageOverlayCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description?: string;
  className?: string;
}

export function ImageOverlayCard({
  imageSrc,
  imageAlt = "",
  title,
  description,
  className,
}: ImageOverlayCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl",
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-white/70">{description}</p>
        )}
      </div>
    </motion.div>
  );
}
