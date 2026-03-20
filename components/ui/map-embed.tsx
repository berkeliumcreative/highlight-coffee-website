// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface MapEmbedProps {
  query: string;
  className?: string;
  height?: number;
}

export function MapEmbed({ query, className, height = 400 }: MapEmbedProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border", className)}>
      <iframe
        title="Location Map"
        width="100%"
        height={height}
        loading="lazy"
        style={{ border: 0, filter: "grayscale(0.3)" }}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(query)}`}
      />
    </div>
  );
}
