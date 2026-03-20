// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost";
}

export function IconButton({
  icon,
  label,
  className,
  href,
  onClick,
  variant = "default",
}: IconButtonProps) {
  const baseClass = cn(
    "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all active:scale-95",
    variant === "default" && "text-white hover:opacity-90",
    variant === "outline" && "border border-border bg-transparent hover:bg-muted",
    variant === "ghost" && "bg-transparent hover:bg-muted",
    className
  );

  const style = variant === "default" ? { backgroundColor: "var(--theme-accent)" } : undefined;

  if (href) {
    return <a href={href} className={baseClass} style={style}>{icon}<span>{label}</span></a>;
  }
  return <button onClick={onClick} className={baseClass} style={style}>{icon}<span>{label}</span></button>;
}
