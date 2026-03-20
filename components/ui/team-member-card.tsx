// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageSrc?: string;
  bio?: string;
  className?: string;
}

export function TeamMemberCard({
  name,
  role,
  imageSrc,
  bio,
  className,
}: TeamMemberCardProps) {
  return (
    <motion.div
      className={cn("text-center", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-border">
        {imageSrc ? (
          <img src={imageSrc} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted text-2xl font-bold text-muted-foreground">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-muted-foreground">{role}</p>
      {bio && <p className="mt-2 text-sm text-muted-foreground max-w-xs mx-auto">{bio}</p>}
    </motion.div>
  );
}
