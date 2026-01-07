"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const layers = [
  {
    label: "Validators",
    sub: "Block production + on-chain source data",
    details: [
      "Operate native validator infrastructure",
      "See transaction ordering at the source",
      "Capture pre-block state transitions",
    ],
  },
  {
    label: "Custom Indexers",
    sub: "State reconstruction (who changed what, when, and why)",
    details: [
      "Reconstruct full execution paths",
      "Track every state change per block",
      "Build execution-level timelines",
    ],
  },
  {
    label: "Execution Intelligence",
    sub: "Signals + APIs (MEV, slippage, anomalies, market structure)",
    details: [
      "Classify MEV and execution patterns",
      "Attribute value flows to actors",
      "Generate execution quality metrics",
    ],
  },
];

export function InfraFlow() {
  const reduce = useReducedMotion();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.4, once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 shadow-[0_0_80px_-30px_rgba(255,255,255,0.06)] md:p-10"
    >
      {/* Lead-in statement */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-lg leading-relaxed text-zinc-200 md:text-xl">
          We operate the source infrastructure—validators and custom indexers—that reconstructs market state as it changes.
        </p>
        <p className="mt-3 text-base leading-relaxed text-zinc-400 md:text-lg">
          That gives Birdai first-principles visibility into ordering, fills, and state transitions in real time—not a delayed, abstracted view.
        </p>
      </motion.div>

      {/* Layers */}
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {layers.map((layer, idx) => {
          const isExpanded = expanded === idx;
          return (
            <motion.button
              key={layer.label}
              onClick={() => setExpanded(isExpanded ? null : idx)}
              className={`relative cursor-pointer rounded-xl border text-left transition-colors duration-200 ${
                isExpanded
                  ? "border-amber-500/40 bg-amber-500/[0.06]"
                  : "border-white/[0.08] bg-black/30 hover:border-white/[0.15]"
              } px-5 py-5 md:px-7 md:py-6`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.6, once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                  Layer {idx + 1}
                </div>
                <motion.span
                  className="text-xs text-zinc-500"
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ▼
                </motion.span>
              </div>
              <div className="mt-3 text-xl font-semibold text-white">{layer.label}</div>
              <div className="mt-1 text-sm text-zinc-400">{layer.sub}</div>

              {/* Expanded details */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 space-y-2 overflow-hidden border-t border-white/[0.08] pt-4"
                  >
                    {layer.details.map((d, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-start gap-2 text-sm text-zinc-300"
                      >
                        <span className="mt-0.5 text-amber-400">→</span>
                        <span>{d}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              {/* Connector arrow (desktop only) */}
              {!reduce && idx < layers.length - 1 && (
                <motion.div
                  aria-hidden
                  className="absolute -right-4 top-1/2 hidden h-0.5 w-8 origin-left bg-gradient-to-r from-white/20 to-white/5 lg:block"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ amount: 0.7, once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + idx * 0.12 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 md:text-[11px]"
      >
        Tap a layer to explore
      </motion.div>

      {/* Punchline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-8 rounded-xl border border-amber-500/30 bg-amber-500/[0.06] px-6 py-4 text-center text-base font-medium text-amber-300"
      >
        From raw blocks to execution truth.
      </motion.div>

      {/* Flow line with travelling pulse (hidden on mobile for cleaner experience) */}
      {!reduce && (
        <motion.svg
          className="mt-8 hidden w-full md:block"
          viewBox="0 0 900 70"
          preserveAspectRatio="xMidYMid meet"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: true }}
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(251,191,36,0.6)" />
              <stop offset="50%" stopColor="rgba(251,191,36,0.25)" />
              <stop offset="100%" stopColor="rgba(251,191,36,0.6)" />
            </linearGradient>
            <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d="M40 35 C 200 10, 280 60, 450 35 S 620 10, 860 35"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="2"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 1.3, ease: "easeOut" },
              },
            }}
          />

          {/* Travelling pulse */}
          <motion.circle
            r="7"
            fill="rgba(251,191,36,0.9)"
            filter="url(#pulseGlow)"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.9 } },
            }}
            animate={{ cx: [40, 860], cy: [35, 35] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          />
        </motion.svg>
      )}
    </motion.div>
  );
}
