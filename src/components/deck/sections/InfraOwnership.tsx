"use client";

import { motion } from "framer-motion";

const without = [
  "Missing ordering",
  "No attribution",
  "Latency blind",
  "Abstracted state",
  "No yield",
];

const withBirdai = [
  "Full execution path",
  "Validator context",
  "Measurable advantage",
  "Reconstructed reality",
  "Yield capture",
];

const rentCosts = [
  "worse fills",
  "hidden slippage",
  "outages",
  "rule changes",
  "information disadvantage",
];

export function InfraOwnership() {
  return (
    <div className="space-y-10">
      {/* With / Without comparison */}
      <div className="grid gap-6 md:gap-10 lg:grid-cols-2">
        {/* WITHOUT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 md:p-8"
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
            {without.map((t, i) => (
              <motion.li
                key={t}
                className="flex items-center justify-between font-mono text-[15px] text-white/60"
                variants={{
                  hidden: { opacity: 0, y: 6 },
                  show: {
                    opacity: [1, 1, 0.25],
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
          className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.04] to-transparent p-5 md:p-8"
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
            {withBirdai.map((t) => (
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
        className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/[0.04] via-transparent to-amber-500/[0.04] p-5 md:p-8"
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-amber-400/70">
          The economic reality
        </div>

        <div className="mt-5 text-lg leading-relaxed text-zinc-200 md:text-xl">
          If you don't own infra, you pay rent:
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-zinc-400 md:text-lg">
          {rentCosts.map((cost, idx) => (
            <span key={cost}>
              <span className="text-red-400/90">{cost}</span>
              {idx < rentCosts.length - 1 && <span className="mx-1 text-zinc-600">•</span>}
            </span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-6 rounded-xl border border-white/[0.08] bg-black/30 p-4 text-sm leading-relaxed text-zinc-400 md:p-5"
        >
          <span className="font-medium text-zinc-300">Analogy:</span> You can build on AWS without owning data centers—until latency, uptime, and pricing become existential. Then you own more of the stack.
        </motion.div>
      </motion.div>
    </div>
  );
}
