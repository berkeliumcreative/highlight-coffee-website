// @ts-nocheck
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  backgroundImage?: string;
  overlay?: boolean;
}

export function ParallaxSection({
  children,
  className,
  speed = 0.3,
  backgroundImage,
  overlay = true,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}px`, `${speed * 100}px`]);

  return (
    <section ref={ref} className={cn("relative overflow-hidden", className)}>
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 -top-20 -bottom-20 bg-cover bg-center"
          style={{
            y,
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px]" />
      )}
      {!backgroundImage && (
        <motion.div className="absolute inset-0" style={{ y }}>
          <div className="h-full w-full" />
        </motion.div>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
