"use client";

import { motion } from "framer-motion";

const consequences = [
  "Slippage + adverse selection",
  "Value leakage (MEV)",
  "Liquidation cascades + \"mysterious\" prints",
  "No auditable record of what actually happened",
];

export function ExecutionGap() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Beat 1: The path */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="text-xl leading-relaxed text-zinc-300 md:text-2xl">
          Every trade has a path: ordering, timing, fills, liquidations.
        </div>
        <div className="mt-3 text-xl leading-relaxed text-zinc-400 md:text-2xl">
          Most systems abstract the path away and show only price.
        </div>
      </motion.div>

      {/* Beat 2: Execution quality consequences */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="mt-12 w-full max-w-xl"
      >
        <div className="text-xl font-semibold text-white md:text-2xl">
          Execution quality determines outcomes
        </div>
        
        <motion.div
          className="mt-6 space-y-3 text-left"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.4, once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
        >
          {consequences.map((item) => (
            <motion.div
              key={item}
              variants={{
                hidden: { opacity: 0, x: -6 },
                show: { opacity: 1, x: 0 },
              }}
              className="flex items-start gap-3 text-base text-zinc-300 md:text-lg"
            >
              <span className="mt-0.5 text-amber-400">→</span>
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Punchline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mt-14 max-w-2xl rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] px-6 py-5 md:px-8 md:py-6"
      >
        <div className="text-lg text-zinc-300 md:text-xl">
          The data exists. The truth is fragmented.
        </div>
        <div className="mt-2 text-lg font-semibold text-amber-300 md:text-xl">
          Someone has to reconstruct execution in real time.
        </div>
      </motion.div>
    </div>
  );
}
