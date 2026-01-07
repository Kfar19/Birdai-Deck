"use client";

import { motion } from "framer-motion";

const inputs = [
  "Orders",
  "Cancels",
  "Deposits",
  "Blocks",
  "Liquidations",
];

const implications = [
  "Rules are not written — they are executed",
  "Edge cases are where PnL lives",
  "Fairness is a code quality problem",
  "Implementation speed determines outcomes",
];

export function Thesis() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Beat 1: The model */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="text-2xl font-semibold leading-snug text-white md:text-3xl">
          A market is a system that continuously transforms state.
        </div>

        {/* Input chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.6, once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {inputs.map((input, idx) => (
            <motion.span
              key={input}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.05, duration: 0.25 }}
              className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2 font-mono text-sm text-zinc-300"
            >
              {input}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Beat 2: The insight */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 max-w-3xl space-y-2"
      >
        <div className="text-2xl font-semibold leading-snug text-white md:text-3xl">
          Price is an output of state transitions.
        </div>
        <div className="text-lg text-zinc-400 md:text-xl">
          Not supply and demand vibes. Computed reality.
        </div>
      </motion.div>

      {/* Beat 3: What this means */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="mt-12 w-full max-w-xl"
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500">
          What this means
        </div>
        <motion.div
          className="mt-5 space-y-3 text-left"
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
              className="flex items-center gap-3 text-[15px] text-zinc-300"
            >
              <span className="text-amber-400">→</span>
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
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-14 rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] px-8 py-6"
      >
        <div className="text-xl font-semibold text-amber-300 md:text-2xl">
          If you can see the state, you can see the truth.
        </div>
      </motion.div>
    </div>
  );
}
