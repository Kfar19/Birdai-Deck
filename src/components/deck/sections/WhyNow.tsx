"use client";

import { motion } from "framer-motion";

const accelerators = [
  "Volume is rising",
  "Assets are tokenizing",
  "Agents are automating",
  "Settlement is accelerating",
];

export function WhyNow() {
  return (
    <div className="space-y-10">
      {/* Lead-in */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="text-xl leading-relaxed text-zinc-200 md:text-2xl">
          Execution is becoming the new market structure.
        </div>
      </motion.div>

      {/* Accelerators */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap items-center gap-3"
      >
        {accelerators.map((item, idx) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + idx * 0.06, duration: 0.3 }}
            className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-base text-zinc-300 md:text-lg"
          >
            {item}
          </motion.span>
        ))}
      </motion.div>

      {/* Consequence */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="max-w-3xl"
      >
        <div className="text-lg leading-relaxed text-zinc-400 md:text-xl">
          That combination makes ordering + execution quality the primary driver of outcomes.
        </div>
      </motion.div>

      {/* Punchline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="max-w-2xl rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] px-6 py-5 md:px-8 md:py-6"
      >
        <div className="text-lg font-medium text-amber-300 md:text-xl">
          Whoever owns execution visibility becomes the standard.
        </div>
        <div className="mt-2 text-base text-amber-200/70 md:text-lg">
          This is the moment to build it.
        </div>
      </motion.div>
    </div>
  );
}
