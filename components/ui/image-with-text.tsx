// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ImageWithTextProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  reversed?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function ImageWithText({
  imageSrc,
  imageAlt = "",
  title,
  description,
  reversed = false,
  className,
  children,
}: ImageWithTextProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center",
        className
      )}
    >
      <motion.div
        className={cn(reversed && "md:order-2")}
        initial={{ opacity: 0, x: reversed ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full rounded-2xl object-cover shadow-lg"
        />
      </motion.div>
      <motion.div
        className={cn(reversed && "md:order-1")}
        initial={{ opacity: 0, x: reversed ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
        {children}
      </motion.div>
    </div>
  );
}
