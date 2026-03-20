// @ts-nocheck
"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  width?: "fit" | "full";
}

export function RevealOnScroll({
  children,
  className,
  width = "fit",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden",
        width === "full" ? "w-full" : "w-fit",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 z-20 bg-primary"
        initial={{ left: 0 }}
        animate={isInView ? { left: "100%" } : {}}
        transition={{ duration: 0.5, ease: "easeIn" }}
      />
    </div>
  );
}
