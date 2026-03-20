// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ArrowButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function ArrowButton({ children, className, href, onClick }: ArrowButtonProps) {
  const content = (
    <span className="group inline-flex items-center gap-2">
      {children}
      <motion.span
        className="inline-block"
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        →
      </motion.span>
    </span>
  );

  const baseClass = cn(
    "inline-flex items-center gap-2 font-medium transition-colors hover:opacity-80",
    className
  );
  const style = { color: "var(--theme-accent)" };

  if (href) {
    return <a href={href} className={baseClass} style={style}>{content}</a>;
  }
  return <button onClick={onClick} className={baseClass} style={style}>{content}</button>;
}
