"use client";

import { motion } from "framer-motion";

const whoNeedsThis = [
  {
    who: "Serious builders",
    why: "indispensable",
    color: "text-amber-300",
  },
  {
    who: "Institutional capital",
    why: "necessary",
    color: "text-emerald-300",
  },
  {
    who: "Regulators",
    why: "unavoidable",
    color: "text-blue-300",
  },
  {
    who: "Market designers",
    why: "foundational",
    color: "text-purple-300",
  },
];

const questionsOnlyWeAnswer = [
  "Why a liquidation happened",
  "Why one LP systematically loses",
  "Why a validator captures outsized value",
  "Why a mechanism behaves pathologically under load",
];

export function WhyWeExist() {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      {/* The Core Statement */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="text-xl font-semibold leading-relaxed text-white md:text-2xl">
          Birdai is the execution reality layer for crypto markets.
        </div>
        <div className="mt-4 text-base text-zinc-400 md:text-lg">
          We sit above raw blockchain data and below applications — reconstructing execution reality so markets can be{" "}
          <span className="text-zinc-200">understood</span>,{" "}
          <span className="text-zinc-200">audited</span>, and{" "}
          <span className="text-zinc-200">designed</span>.
        </div>
      </motion.div>

      {/* The Consequence */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl border border-red-500/30 bg-red-500/[0.06] px-6 py-5 md:px-8 md:py-6"
      >
        <div className="text-lg font-medium text-red-300 md:text-xl">
          If you don't reconstruct execution, you literally cannot see where value went.
        </div>
      </motion.div>

      {/* Who Needs This */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
          {whoNeedsThis.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + idx * 0.05 }}
              className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
            >
              <span className="text-sm text-zinc-300 md:text-base">{item.who}</span>
              <span className={`font-mono text-xs uppercase tracking-wider ${item.color}`}>
                {item.why}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Architecture, Not Scale */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8"
      >
        <div className="flex items-center gap-3">
          <div className="text-lg font-semibold text-white md:text-xl">
            Not because of scale.
          </div>
          <div className="text-lg font-semibold text-amber-400 md:text-xl">
            Because of architecture.
          </div>
        </div>
        <div className="mt-4 text-base text-zinc-400 md:text-lg">
          We matter because we solved the hardest version of the problem first.
        </div>
        
        <div className="mt-6 border-t border-white/[0.06] pt-6">
          <div className="text-sm text-zinc-500">
            We trust Sui for correctness. But trust doesn't answer:
          </div>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {questionsOnlyWeAnswer.map((q, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + idx * 0.05 }}
                className="flex items-start gap-2 text-sm text-zinc-300"
              >
                <span className="mt-0.5 text-amber-400">?</span>
                <span>{q}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* The Sui-Specific Argument */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/[0.08] to-amber-600/[0.02] p-6 md:p-8"
      >
        <div className="text-base text-zinc-300 md:text-lg">
          These questions appear only once real money is involved.
        </div>
        <div className="mt-3 text-base text-zinc-300 md:text-lg">
          On Sui, the only way to answer them is <span className="font-medium text-amber-300">reconstruction</span>.
        </div>
        <div className="mt-4 text-lg font-semibold text-white md:text-xl">
          Birdai matters on Sui because Sui's execution model makes economic outcomes impossible to understand without reconstruction.
        </div>
      </motion.div>

      {/* Punchline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center"
      >
        <div className="text-xl font-bold text-white md:text-2xl">
          We are not adding analytics.
        </div>
        <div className="mt-2 text-xl font-bold text-amber-300 md:text-2xl">
          We are making the system legible.
        </div>
        <div className="mt-6 text-base italic text-zinc-500 md:text-lg">
          If Birdai were building on a simpler chain, it would actually be less interesting.
        </div>
      </motion.div>
    </div>
  );
}

