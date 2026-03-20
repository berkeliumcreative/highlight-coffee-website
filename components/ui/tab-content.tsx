// @ts-nocheck
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabContentProps {
  tabs: TabItem[];
  className?: string;
  variant?: "underline" | "pill";
}

export function TabContent({ tabs, className, variant = "underline" }: TabContentProps) {
  const [active, setActive] = useState(0);

  return (
    <div className={cn(className)}>
      <div className={cn("flex gap-1", variant === "pill" && "bg-muted p-1 rounded-lg w-fit")}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors",
              variant === "underline" && (
                active === i ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              ),
              variant === "pill" && (
                active === i ? "text-foreground" : "text-muted-foreground"
              ),
            )}
          >
            {variant === "underline" && active === i && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: "var(--theme-accent)" }}
              />
            )}
            {variant === "pill" && active === i && (
              <motion.div
                layoutId="tab-pill"
                className="absolute inset-0 rounded-md bg-background shadow-sm"
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        className="mt-6"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {tabs[active]?.content}
      </motion.div>
    </div>
  );
}
