"use client";

import { motion } from "framer-motion";

const stateUpdates = [
  "order",
  "cancel",
  "deposit",
  "liquidation",
  "block",
];

const implications = [
  "Rules aren't written — they run in production",
  "Edge cases are where profit lives",
  "Fairness is a market-structure / code-quality problem",
  "Speed of implementation changes outcomes",
];

export function Thesis() {
  return (
    <div className="space-y-10">
      {/* Beat 1: Markets are state machines */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="text-2xl font-semibold leading-snug text-white md:text-3xl">
          Programmable markets are state machines.
        </div>
        <div className="mt-3 text-base text-zinc-400 md:text-lg">
          Execution = ordering + timing + liquidations + state updates.
        </div>
      </motion.div>

      {/* State update chips */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap items-center gap-2 md:gap-3"
      >
        <span className="text-sm text-zinc-400 sm:text-base">Every</span>
        {stateUpdates.map((item, idx) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + idx * 0.05, duration: 0.25 }}
            className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2 py-1 font-mono text-xs text-zinc-300 sm:px-3 sm:py-1.5 sm:text-sm"
          >
            {item}
          </motion.span>
        ))}
        <span className="text-sm text-zinc-400 sm:text-base">updates reality.</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="max-w-3xl text-xl text-zinc-300 md:text-2xl"
      >
        Price just prints the result.
      </motion.div>

      {/* Implications */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="w-full max-w-xl"
      >
        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.4, once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
        >
          {implications.map((imp) => (
            <motion.div
              key={imp}
              variants={{
                hidden: { opacity: 0, x: -6 },
                show: { opacity: 1, x: 0 },
              }}
              className="flex items-start gap-3 text-base text-zinc-300 md:text-lg"
            >
              <span className="mt-0.5 text-amber-400">→</span>
              <span>{imp}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Punchline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-2xl rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] px-6 py-5 md:px-8 md:py-6"
      >
        <div className="text-lg font-semibold text-amber-300 md:text-xl">
          If you can see state transitions, you can see truth before price.
        </div>
        <div className="mt-2 text-base text-amber-200/70 md:text-lg">
          Birdai reconstructs execution in real time.
        </div>
      </motion.div>
    </div>
  );
}
