// @ts-nocheck
"use client";
import { cn } from "@/lib/utils";

interface MiniMapProps { query: string; className?: string; }

export function MiniMap({ query, className }: MiniMapProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border", className)}>
      <iframe title="Map" width="100%" height="200" loading="lazy" style={{ border: 0, filter: "grayscale(0.4)" }} src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(query)}&zoom=15`} />
    </div>
  );
}
