// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface HoverImageCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
  className?: string;
  href?: string;
}

export function HoverImageCard({
  imageSrc,
  imageAlt = "",
  title,
  subtitle,
  className,
  href,
}: HoverImageCardProps) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      className={cn("group block overflow-hidden rounded-xl bg-card", className)}
    >
      <div className="overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold group-hover:text-[var(--theme-accent)] transition-colors">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
    </Wrapper>
  );
}
