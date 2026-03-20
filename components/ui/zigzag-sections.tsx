// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ZigzagItem {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

interface ZigzagSectionsProps {
  items: ZigzagItem[];
  className?: string;
}

export function ZigzagSections({ items, className }: ZigzagSectionsProps) {
  return (
    <div className={cn("space-y-20 md:space-y-32", className)}>
      {items.map((item, i) => {
        const reversed = i % 2 !== 0;
        return (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
          >
            <motion.div
              className={cn(reversed && "md:order-2")}
              initial={{ opacity: 0, x: reversed ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {item.imageSrc ? (
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt || item.title}
                  className="w-full rounded-2xl object-cover shadow-lg"
                />
              ) : (
                <div className="aspect-[4/3] w-full rounded-2xl bg-muted" />
              )}
            </motion.div>
            <motion.div
              className={cn(reversed && "md:order-1")}
              initial={{ opacity: 0, x: reversed ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold">{item.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{item.description}</p>
              {item.children}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
