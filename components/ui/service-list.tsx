// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ServiceItem {
  title: string;
  description: string;
  price?: string;
}

interface ServiceListProps {
  services: ServiceItem[];
  className?: string;
}

export function ServiceList({ services, className }: ServiceListProps) {
  return (
    <div className={cn("divide-y divide-border", className)}>
      {services.map((service, i) => (
        <motion.div
          key={i}
          className="flex items-start justify-between gap-4 py-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
        >
          <div className="flex-1">
            <h3 className="font-semibold">{service.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
          </div>
          {service.price && (
            <span className="font-semibold whitespace-nowrap" style={{ color: "var(--theme-accent)" }}>
              {service.price}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
