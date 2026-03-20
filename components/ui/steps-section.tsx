// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Step {
  number?: number;
  title: string;
  description: string;
}

interface StepsSectionProps {
  steps: Step[];
  className?: string;
  variant?: "horizontal" | "vertical";
}

export function StepsSection({ steps, className, variant = "horizontal" }: StepsSectionProps) {
  if (variant === "vertical") {
    return (
      <div className={cn("space-y-8", className)}>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: "var(--theme-accent)" }}
            >
              {step.number || i + 1}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-8", className)}>
      {steps.map((step, i) => (
        <motion.div
          key={i}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
        >
          <div
            className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
            style={{ backgroundColor: "var(--theme-accent)" }}
          >
            {step.number || i + 1}
          </div>
          <h3 className="font-semibold text-lg">{step.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
