// @ts-nocheck
"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface StatCardProps { value: string; label: string; icon?: React.ReactNode; trend?: string; className?: string; }

export function StatCard({ value, label, icon, trend, className }: StatCardProps) {
  return (
    <motion.div className={cn("rounded-xl border border-border bg-card p-5", className)} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="mt-1 text-sm text-muted-foreground">{label}</p>
          {trend && <p className="mt-1 text-xs text-green-500">{trend}</p>}
        </div>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
    </motion.div>
  );
}
