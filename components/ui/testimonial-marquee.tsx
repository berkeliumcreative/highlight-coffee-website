// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
}

interface TestimonialMarqueeProps {
  testimonials: Testimonial[];
  className?: string;
  speed?: number;
}

export function TestimonialMarquee({ testimonials, className, speed }: TestimonialMarqueeProps) {
  return (
    <div className={cn("relative", className)}>
      <Marquee className="[--duration:40s]" pauseOnHover>
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="mx-3 w-80 rounded-xl border border-border bg-card p-5"
          >
            {t.rating && (
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-500 text-sm">★</span>
                ))}
              </div>
            )}
            <p className="text-sm text-foreground/90 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-3 text-xs">
              <span className="font-semibold">{t.author}</span>
              {t.role && <span className="text-muted-foreground"> · {t.role}</span>}
            </div>
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
