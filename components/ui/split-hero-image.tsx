// @ts-nocheck
"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SplitHeroImageProps { imageSrc: string; imageAlt?: string; children: React.ReactNode; className?: string; imagePosition?: "left" | "right"; }

export function SplitHeroImage({ imageSrc, imageAlt = "", children, className, imagePosition = "right" }: SplitHeroImageProps) {
  return (
    <section className={cn("grid grid-cols-1 md:grid-cols-2 min-h-screen", className)}>
      <motion.div className={cn("flex items-center px-8 md:px-16 py-20", imagePosition === "left" && "md:order-2")} initial={{ opacity: 0, x: imagePosition === "left" ? 30 : -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        {children}
      </motion.div>
      <motion.div className={cn("relative", imagePosition === "left" && "md:order-1")} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
        <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
      </motion.div>
    </section>
  );
}
