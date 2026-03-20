// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface LogoCloudProps {
  logos: { src: string; alt: string }[];
  className?: string;
  grayscale?: boolean;
}

export function LogoCloud({ logos, className, grayscale = true }: LogoCloudProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-8 md:gap-12", className)}>
      {logos.map((logo, i) => (
        <img
          key={i}
          src={logo.src}
          alt={logo.alt}
          className={cn(
            "h-8 md:h-10 w-auto object-contain transition-all",
            grayscale && "opacity-50 grayscale hover:opacity-100 hover:grayscale-0"
          )}
        />
      ))}
    </div>
  );
}
