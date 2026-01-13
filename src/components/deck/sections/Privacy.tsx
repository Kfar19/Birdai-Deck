"use client";

import { motion } from "framer-motion";

const causalChain = [
  { step: "Privacy", result: "opacity of intent" },
  { step: "Opacity", result: "loss of naive signals" },
  { step: "Loss", result: "execution dominates" },
  { step: "Dominance", result: "need for reconstruction" },
  { step: "Reconstruction", result: "monetizable intelligence" },
];

export function Privacy() {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      {/* Lead statement */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="text-xl font-semibold text-white md:text-2xl">
          Privacy doesn't remove value.
        </div>
        <div className="mt-2 text-xl font-semibold text-amber-300 md:text-2xl">
          It concentrates value into fewer, harder-to-see places.
        </div>
      </motion.div>

      {/* Two-column: What's eliminated vs What remains */}
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {/* Eliminated */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-5"
        >
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400 sm:text-xs">
            <span>✓</span>
            Encrypted pre-sequencing eliminates
          </div>
          <ul className="mt-4 space-y-2 text-sm text-emerald-200/80">
            <li>• Front-running & sandwich attacks</li>
            <li>• Mempool visibility</li>
            <li>• Intent leakage</li>
            <li>• Naive MEV strategies</li>
          </ul>
        </motion.div>

        {/* Remains */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-5"
        >
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 sm:text-xs">
            <span>⚠️</span>
            Execution economics still exist
          </div>
          <ul className="mt-4 space-y-2 text-sm text-amber-200/80">
            <li>• Ordering outcomes</li>
            <li>• Inclusion timing</li>
            <li>• Validator behavior</li>
            <li>• State transitions (liquidations, AMMs)</li>
          </ul>
        </motion.div>
      </div>

      {/* The Causal Chain — Money Logic */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-6"
      >
        <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
          The causal chain <span className="text-zinc-600">(this is the money logic)</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {causalChain.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.06] px-2.5 py-1.5">
                <span className="text-xs font-medium text-amber-200">{item.step}</span>
                <span className="mx-1 text-amber-500/50">→</span>
                <span className="text-xs text-amber-300/70">{item.result}</span>
              </div>
              {idx < causalChain.length - 1 && (
                <span className="text-amber-500/30">→</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Why Birdai Wins */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-2xl border border-amber-500/40 bg-gradient-to-br from-amber-500/[0.1] to-amber-600/[0.02] p-5 md:p-6"
      >
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
          Why Birdai wins
        </div>
        <ul className="space-y-2 text-base text-amber-100 md:text-lg">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">→</span>
            <span>Birdai does not rely on leaked order flow</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">→</span>
            <span>Birdai reconstructs execution from infrastructure-level data</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">→</span>
            <span>As markets become private, execution intelligence becomes premium</span>
          </li>
        </ul>
      </motion.div>

      {/* Punchline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center"
      >
        <div className="text-base text-zinc-400 md:text-lg">
          Privacy hides transactions. Execution still determines outcomes.
        </div>
        <div className="mt-2 text-xl font-bold text-amber-300 md:text-2xl">
          Birdai makes execution visible.
        </div>
      </motion.div>
    </div>
  );
}

