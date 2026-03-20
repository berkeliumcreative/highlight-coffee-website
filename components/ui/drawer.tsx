// @ts-nocheck
"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  position?: "right" | "left" | "bottom";
  className?: string;
}

export function Drawer({ isOpen, onClose, children, title, position = "right", className }: DrawerProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const positionStyles = {
    right: "right-0 top-0 bottom-0 w-80 md:w-96",
    left: "left-0 top-0 bottom-0 w-80 md:w-96",
    bottom: "bottom-0 left-0 right-0 max-h-[80vh]",
  };

  const slideDirection = {
    right: { x: "100%" },
    left: { x: "-100%" },
    bottom: { y: "100%" },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={cn(
              "absolute bg-card border-border p-6 shadow-2xl overflow-y-auto",
              position === "right" && "border-l",
              position === "left" && "border-r",
              position === "bottom" && "border-t rounded-t-xl",
              positionStyles[position],
              className
            )}
            initial={slideDirection[position]}
            animate={{ x: 0, y: 0 }}
            exit={slideDirection[position]}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {title && (
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <button onClick={onClose} className="text-muted-foreground hover:text-foreground p-1">✕</button>
              </div>
            )}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
