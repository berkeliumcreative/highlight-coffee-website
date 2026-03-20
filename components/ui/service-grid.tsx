// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  icon?: React.ReactNode;
  price?: string;
}

interface ServiceGridProps {
  services: Service[];
  columns?: 2 | 3 | 4;
  className?: string;
  variant?: "card" | "minimal" | "bordered";
}

export function ServiceGrid({
  services,
  columns = 3,
  className,
  variant = "card",
}: ServiceGridProps) {
  const colClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-6", colClass[columns], className)}>
      {services.map((service, i) => (
        <motion.div
          key={i}
          className={cn(
            "p-6 transition-all",
            variant === "card" && "rounded-xl border border-border bg-card hover:shadow-md",
            variant === "minimal" && "text-center",
            variant === "bordered" && "border-l-2 pl-6",
          )}
          style={variant === "bordered" ? { borderLeftColor: "var(--theme-accent)" } : undefined}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
        >
          {service.icon && (
            <div className={cn("mb-3", variant === "minimal" && "mx-auto w-fit")}>
              {service.icon}
            </div>
          )}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold">{service.title}</h3>
            {service.price && (
              <span className="text-sm font-medium whitespace-nowrap" style={{ color: "var(--theme-accent)" }}>
                {service.price}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
