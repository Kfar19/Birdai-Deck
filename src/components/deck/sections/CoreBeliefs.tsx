"use client";

import { motion } from "framer-motion";

const beliefs = [
  {
    text: "Legacy finance will keep moving on-chain",
    sub: "Tokenized assets + real settlement, not just wrappers",
    key: true,
  },
  {
    text: "Economic activity concentrates on a few top chains",
    sub: "Sui becomes one of them",
    key: true,
  },
  {
    text: "Markets are becoming software",
    sub: "The code path is the rulebook",
    key: false,
  },
  {
    text: "MEV is market structure expressed as profit",
    sub: "Ordering + state transitions create P&L",
    key: false,
  },
  {
    text: "Execution truth is only visible if you operate the infrastructure",
    sub: "Validators + custom indexers",
    key: false,
  },
  {
    text: "The winner becomes the system of record for execution",
    sub: "Monetizes via intelligence APIs → evolves into best execution / auctions",
    key: false,
  },
];

export function CoreBeliefs() {
  return (
    <div className="flex flex-col gap-10">
      {/* Lead-in */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="text-lg text-zinc-300 md:text-xl">
          Birdai is built on a small set of beliefs:
        </p>
      </motion.div>

      {/* Beliefs list */}
      <motion.div
        className="space-y-4"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3, once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        {beliefs.map((b, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, x: -12 },
              show: { opacity: 1, x: 0 },
            }}
            className={`rounded-xl border px-4 py-4 sm:px-6 sm:py-5 ${
              b.key
                ? "border-amber-500/30 bg-amber-500/[0.04]"
                : "border-white/[0.06] bg-white/[0.02]"
            }`}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <span className={`mt-0.5 font-mono text-sm ${b.key ? "text-amber-400" : "text-zinc-500"}`}>
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <p className={`text-base font-medium sm:text-lg ${b.key ? "text-white" : "text-zinc-200"}`}>
                  {b.text}
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  {b.sub}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Filter callout */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="max-w-xl rounded-xl border border-zinc-700/50 bg-zinc-900/50 px-5 py-4 sm:px-6"
      >
        <p className="text-sm text-zinc-400 sm:text-base">
          If you don't share <span className="font-mono text-amber-400/80">(1)</span>–<span className="font-mono text-amber-400/80">(2)</span>, this won't be the right deal for you.
        </p>
      </motion.div>
    </div>
  );
}

