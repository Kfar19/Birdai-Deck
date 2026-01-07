"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const left = [
  "Missing ordering",
  "No attribution",
  "Latency blind",
  "Abstracted state",
  "No yield",
];
const right = [
  "Full execution path",
  "Validator context",
  "Measurable advantage",
  "Reconstructed reality",
  "Yield participation",
];

const rentCosts = [
  { label: "Worse fills", detail: "Avg 8–15bps hidden slippage per trade" },
  { label: "Hidden slippage", detail: "Price moves before your order lands" },
  { label: "Outages", detail: "No redundancy, no visibility into cause" },
  { label: "Rule changes", detail: "Protocol upgrades you learn about late" },
  { label: "Information disadvantage", detail: "Sees price 50–200ms after insiders" },
];

export function InfraOwnership() {
  const [hoveredCost, setHoveredCost] = useState<number | null>(null);

  return (
    <div className="space-y-12">
      {/* With / Without comparison */}
      <div className="grid gap-10 lg:grid-cols-2">
        {/* WITHOUT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
            Without operating infra
          </div>
          <motion.ul
            className="mt-6 space-y-4"
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.5, once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
          >
            {left.map((t, i) => (
              <motion.li
                key={t}
                className="flex items-center justify-between font-mono text-[15px] text-white/60"
                variants={{
                  hidden: { opacity: 0, y: 6 },
                  show: {
                    opacity: [1, 1, 0.2],
                    y: 0,
                    transition: { duration: 1.6, delay: i * 0.1 },
                  },
                }}
              >
                <span className="line-through decoration-white/20">{t}</span>
                <span className="text-xs text-white/20">—</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* WITH */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.04] to-transparent p-8"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-emerald-400/70">
            With Birdai
          </div>
          <motion.ul
            className="mt-6 space-y-4"
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.5, once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
          >
            {right.map((t) => (
              <motion.li
                key={t}
                variants={{
                  hidden: { opacity: 0, x: 8 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                }}
                className="flex items-center justify-between font-mono text-[15px] text-white"
              >
                <span>{t}</span>
                <span className="text-emerald-400">✓</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Economic reality — the rent you pay */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.55 }}
        className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/[0.04] via-transparent to-amber-500/[0.04] p-8"
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-amber-400/70">
          The economic reality
        </div>

        <div className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300">
          You can trade in software markets without owning the infrastructure.
          But if you don't own it, you pay <span className="text-white font-medium">rent</span>:
        </div>

        <motion.div
          className="mt-6 flex flex-wrap gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5, once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
        >
          {rentCosts.map((cost, idx) => (
            <motion.div
              key={cost.label}
              className="relative"
              onMouseEnter={() => setHoveredCost(idx)}
              onMouseLeave={() => setHoveredCost(null)}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1 },
              }}
            >
              <span className="cursor-help rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 font-mono text-sm text-red-400 transition-colors hover:border-red-500/50 hover:bg-red-500/20">
                {cost.label}
              </span>

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredCost === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full z-10 mt-2 w-56 -translate-x-1/2 rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-center text-xs leading-relaxed text-zinc-300 shadow-xl"
                  >
                    {cost.detail}
                    <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-white/10 bg-zinc-900" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500"
        >
          Hover to see the cost
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-6 rounded-xl border border-white/[0.08] bg-black/30 p-5 text-sm leading-relaxed text-zinc-400"
        >
          <span className="text-zinc-300 font-medium">Analogy:</span> You can build on AWS without owning data centers.
          But if your business depends on latency, uptime, and predictable pricing — you either negotiate serious terms,
          or you eventually own more of the stack.
        </motion.div>
      </motion.div>
    </div>
  );
}
