"use client";

import { motion } from "framer-motion";

const eliminates = [
  "Front-running & sandwich attacks",
  "Mempool visibility and intent leakage",
  "Naive, reactive MEV strategies",
];

const doesNotEliminate = [
  "Ordering and inclusion decisions",
  "Timing and latency advantages",
  "State-dependent outcomes (liquidations, AMM rebalances, auctions)",
  "Validator-level execution economics",
];

const whatChanges = [
  "MEV shifts from visible → structural",
  "Value moves closer to validators, auctions, and protocol mechanics",
  "Execution becomes harder to observe — and more valuable to understand",
];

const whyBirdaiWins = [
  "Birdai does not rely on leaked order flow",
  "Birdai reconstructs execution reality from infrastructure-level data",
  "As markets become private, execution intelligence becomes a premium capability",
];

export function PrivacyBullish() {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      {/* Lead statement */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl text-lg text-zinc-300 md:text-xl"
      >
        Privacy removes surface signals. Execution becomes the only edge.
      </motion.div>

      {/* Three-column comparison */}
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {/* What privacy eliminates */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-5 md:p-6"
        >
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400 sm:text-xs">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            What privacy eliminates
          </div>
          <ul className="mt-4 space-y-2.5">
            {eliminates.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.05 }}
                className="flex items-start gap-2 text-sm text-zinc-300"
              >
                <span className="mt-1 text-emerald-400">✓</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* What privacy does NOT eliminate */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-5 md:p-6"
        >
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-red-400 sm:text-xs">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            Does NOT eliminate
          </div>
          <ul className="mt-4 space-y-2.5">
            {doesNotEliminate.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + idx * 0.05 }}
                className="flex items-start gap-2 text-sm text-zinc-300"
              >
                <span className="mt-1 text-red-400">✗</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* What this changes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-6"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 sm:text-xs">
            What this changes
          </div>
          <ul className="mt-4 space-y-2.5">
            {whatChanges.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + idx * 0.05 }}
                className="flex items-start gap-2 text-sm text-zinc-300"
              >
                <span className="mt-1 text-amber-400">→</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Why Birdai Wins */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/[0.08] to-amber-600/[0.02] p-6 md:p-8"
      >
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 sm:text-sm">
          Why Birdai wins
        </div>
        <ul className="mt-4 space-y-3">
          {whyBirdaiWins.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 + idx * 0.06 }}
              className="flex items-start gap-3 text-base text-amber-100 md:text-lg"
            >
              <span className="mt-0.5 text-amber-400">→</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Bottom line punchline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <div className="text-xl font-semibold text-white md:text-2xl">
          Privacy kills toxic MEV. Structure creates MEV.
        </div>
        <div className="mt-2 text-base text-amber-300 md:text-lg">
          Birdai exists where structure meets execution.
        </div>
      </motion.div>
    </div>
  );
}

