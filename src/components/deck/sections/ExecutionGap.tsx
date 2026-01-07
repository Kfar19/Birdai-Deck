"use client";

import { motion } from "framer-motion";

const statements = [
  {
    line: "Every trade has an ordering.",
    follow: "Most systems abstract it away.",
  },
  {
    line: "Execution quality determines outcomes.",
    follow: "It's invisible to most participants.",
  },
  {
    line: "Execution is now measurable.",
    follow: "But no one owns the measurement.",
  },
];

export function ExecutionGap() {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl space-y-10"
      >
        {statements.map((s, idx) => (
          <motion.div
            key={s.line}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.7, once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="space-y-2"
          >
            <div className="text-2xl font-semibold leading-snug text-white md:text-3xl">
              {s.line}
            </div>
            <div className="text-lg text-zinc-400 md:text-xl">{s.follow}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tension statement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] px-8 py-6"
      >
        <div className="text-xl font-semibold text-amber-300 md:text-2xl">
          Someone has to reconstruct what actually happened.
        </div>
      </motion.div>
    </div>
  );
}
