"use client";

import { type Role } from "./types";

const ROLE_STYLES: Record<Role, { bg: string; text: string; border: string }> = {
  User: {
    bg: "bg-zinc-800/60",
    text: "text-zinc-300",
    border: "border-zinc-700/50",
  },
  Searcher: {
    bg: "bg-amber-500/15",
    text: "text-amber-300",
    border: "border-amber-500/30",
  },
  Liquidator: {
    bg: "bg-red-500/15",
    text: "text-red-300",
    border: "border-red-500/30",
  },
  Arb: {
    bg: "bg-purple-500/15",
    text: "text-purple-300",
    border: "border-purple-500/30",
  },
};

export function RoleBadge({ role, size = "sm" }: { role: Role; size?: "xs" | "sm" }) {
  const styles = ROLE_STYLES[role];
  const sizeClasses = size === "xs" 
    ? "px-1.5 py-0.5 text-[9px]" 
    : "px-2 py-0.5 text-[10px]";
  
  return (
    <span
      className={`inline-flex items-center rounded border font-mono uppercase tracking-wider ${styles.bg} ${styles.text} ${styles.border} ${sizeClasses}`}
    >
      {role}
    </span>
  );
}

