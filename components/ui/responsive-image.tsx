// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  rounded?: "none" | "md" | "lg" | "xl" | "full";
  className?: string;
  shadow?: boolean;
}

const aspectMap = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

const roundedMap = {
  none: "rounded-none",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export function ResponsiveImage({
  src,
  alt,
  aspectRatio = "video",
  rounded = "xl",
  className,
  shadow = true,
}: ResponsiveImageProps) {
  return (
    <div
      className={cn(
        "overflow-hidden",
        aspectMap[aspectRatio],
        roundedMap[rounded],
        shadow && "shadow-lg",
        className
      )}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}
