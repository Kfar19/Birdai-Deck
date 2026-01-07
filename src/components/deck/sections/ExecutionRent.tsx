"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const examples = [
  { tau: 1, volume: 241, rent: 24.1 },
  { tau: 5, volume: 241, rent: 120.5 },
  { tau: 10, volume: 241, rent: 241 },
  { tau: 25, volume: 241, rent: 602.5 },
];

export function ExecutionRent() {
  const [selectedTau, setSelectedTau] = useState(10);
  const selected = examples.find((e) => e.tau === selectedTau) || examples[2];

  return (
    <div className="flex flex-col items-center gap-10">
      {/* Formula */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent p-6 text-center md:p-10"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 sm:text-[11px]">
          The math
        </div>
        
        <div className="mt-6 space-y-2">
          <div className="text-base text-zinc-400 sm:text-lg">
            If execution rent = <span className="font-mono text-amber-300">τ</span> bps, then annual $ rent is:
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.6, once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 max-w-md rounded-xl border border-amber-500/30 bg-amber-500/[0.06] px-4 py-5 sm:px-8 sm:py-6"
        >
          <div className="font-mono text-lg text-white sm:text-2xl md:text-3xl">
            Rent($) = Volume($) × <span className="text-amber-300">τ</span> / 10,000
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6, once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 text-base text-zinc-300 sm:text-lg"
        >
          Even small <span className="font-mono text-amber-300">τ</span> matters at scale.
        </motion.div>
      </motion.div>

      {/* Interactive example */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.55, delay: 0.15 }}
        className="w-full max-w-2xl rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 md:p-8"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 sm:text-[11px]">
          At current on-chain volume ($241B/year)
        </div>

        {/* Tau selector */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {examples.map((ex) => (
            <button
              key={ex.tau}
              onClick={() => setSelectedTau(ex.tau)}
              className={`rounded-lg border px-3 py-2 font-mono text-xs transition-all sm:px-4 sm:py-2.5 sm:text-sm ${
                selectedTau === ex.tau
                  ? "border-amber-500/50 bg-amber-500/20 text-amber-300"
                  : "border-white/[0.08] bg-black/30 text-zinc-400 hover:border-white/20"
              }`}
            >
              {ex.tau} bps
            </button>
          ))}
        </div>

        {/* Result */}
        <motion.div
          key={selectedTau}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="mt-8 text-center"
        >
          <div className="text-sm text-zinc-400 sm:text-base">
            <span className="font-mono text-amber-300">{selected.tau}</span> bps on{" "}
            <span className="font-mono text-white">${selected.volume}B</span> =
          </div>
          <div className="mt-3 font-mono text-3xl font-bold text-emerald-400 sm:text-4xl md:text-5xl">
            ${selected.rent.toFixed(0)}M
          </div>
          <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500 sm:text-xs">
            annual execution rent
          </div>
        </motion.div>
      </motion.div>

      {/* Punchline */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-xl text-center"
      >
        <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
          This rent exists whether you measure it or not.{" "}
          <span className="text-zinc-200">
            Birdai makes it visible—and capturable.
          </span>
        </p>
      </motion.div>
    </div>
  );
}

