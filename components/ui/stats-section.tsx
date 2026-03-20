// @ts-nocheck
"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { CountUp } from "./count-up";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  className?: string;
}

export function StatsSection({ stats, className }: StatsSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={cn(
        "grid gap-8",
        stats.length === 2 && "grid-cols-2",
        stats.length === 3 && "grid-cols-1 md:grid-cols-3",
        stats.length >= 4 && "grid-cols-2 md:grid-cols-4",
        className
      )}
    >
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-foreground">
            {isInView ? (
              <CountUp
                end={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                duration={2}
              />
            ) : (
              <span>
                {stat.prefix}0{stat.suffix}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
