// @ts-nocheck
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface TooltipWrapperProps {
  children: React.ReactNode;
  content: string;
  className?: string;
  position?: "top" | "bottom";
}

export function TooltipWrapper({ children, content, className, position = "top" }: TooltipWrapperProps) {
  const [show, setShow] = useState(false);

  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.span
            className={cn(
              "absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-xs text-background shadow-lg z-50",
              position === "top" ? "bottom-full mb-2" : "top-full mt-2"
            )}
            initial={{ opacity: 0, y: position === "top" ? 4 : -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: position === "top" ? 4 : -4 }}
            transition={{ duration: 0.15 }}
          >
            {content}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
