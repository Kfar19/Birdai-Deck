"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const flows = [
  {
    title: "Infrastructure yield",
    sub: "Validator rewards + MEV share",
    mechanism: "Operate validators and capture block rewards, tips, and MEV redistribution.",
    rate: "4–8% APY on staked capital",
  },
  {
    title: "Execution fees",
    sub: "Best-execution routing",
    mechanism: "Per-execution fees for routing trades through optimal paths with measurable improvement.",
    rate: "1–5 bps per trade",
  },
  {
    title: "Intelligence APIs",
    sub: "Execution data subscriptions",
    mechanism: "Institution-grade access to execution traces, MEV classification, and validator analytics.",
    rate: "$5K–$50K / month per seat",
  },
];

export function Monetization() {
  const reduce = useReducedMotion();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.4, once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-10"
    >
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {flows.map((f, idx) => {
          const isExpanded = expandedIdx === idx;
          return (
            <motion.button
              key={f.title}
              onClick={() => setExpandedIdx(isExpanded ? null : idx)}
              className={`relative cursor-pointer rounded-xl border text-left transition-all duration-200 ${
                isExpanded
                  ? "border-amber-500/40 bg-amber-500/[0.06]"
                  : "border-white/[0.06] bg-black/30 hover:border-white/[0.12]"
              } p-6`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.6, once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-white">{f.title}</div>
                <motion.span
                  className="text-xs text-zinc-500"
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ▼
                </motion.span>
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-zinc-400">
                {f.sub}
              </div>

              {/* Expanded details */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 overflow-hidden border-t border-white/[0.08] pt-4"
                  >
                    <div className="text-sm leading-relaxed text-zinc-300">
                      {f.mechanism}
                    </div>
                    <div className="mt-3 inline-block rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-sm font-medium text-emerald-400">
                      {f.rate}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      {/* Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500"
      >
        Tap to see how money flows
      </motion.div>

      {!reduce && (
        <motion.svg
          className="mx-auto mt-8 hidden w-full max-w-2xl md:block"
          viewBox="0 0 600 140"
          preserveAspectRatio="xMidYMid meet"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5, once: true }}
        >
          <defs>
            <linearGradient id="mGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(251,191,36,0.7)" />
              <stop offset="100%" stopColor="rgba(251,191,36,0.15)" />
            </linearGradient>
          </defs>
          {/* Central upward */}
          <motion.path
            d="M300 120 L300 35"
            stroke="url(#mGrad)"
            strokeWidth="2"
            fill="none"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              show: { pathLength: 1, opacity: 1, transition: { duration: 0.8 } },
            }}
          />
          {/* Left branch */}
          <motion.path
            d="M300 70 Q 220 70, 140 45"
            stroke="rgba(251,191,36,0.4)"
            strokeWidth="2"
            fill="none"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              show: { pathLength: 1, opacity: 1, transition: { duration: 0.9, delay: 0.1 } },
            }}
          />
          {/* Right branch */}
          <motion.path
            d="M300 70 Q 380 70, 460 45"
            stroke="rgba(251,191,36,0.4)"
            strokeWidth="2"
            fill="none"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              show: { pathLength: 1, opacity: 1, transition: { duration: 0.9, delay: 0.18 } },
            }}
          />

          {/* Nodes */}
          {[
            { x: 300, y: 120, label: "INFRA" },
            { x: 300, y: 30, label: "YIELD" },
            { x: 130, y: 40, label: "FEES" },
            { x: 470, y: 40, label: "APIS" },
          ].map((n, i) => (
            <motion.g
              key={n.label}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { delay: 0.2 + i * 0.06 } },
              }}
            >
              <circle cx={n.x} cy={n.y} r={8} fill="rgba(251,191,36,0.8)" />
              <text
                x={n.x}
                y={n.y - 16}
                textAnchor="middle"
                fill="rgba(255,255,255,0.5)"
                fontSize="10"
                fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                letterSpacing="0.2em"
              >
                {n.label}
              </text>
            </motion.g>
          ))}
        </motion.svg>
      )}
    </motion.div>
  );
}
