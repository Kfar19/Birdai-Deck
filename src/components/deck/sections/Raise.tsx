"use client";

import { motion } from "framer-motion";

export function Raise() {
  return (
    <section className="deck-section relative flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-8" data-section={13}>
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-500/[0.08] via-transparent to-transparent blur-3xl"
      />

      {/* Kicker */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-400"
      >
        14 — THE RAISE
      </motion.div>

      {/* Amount with visual emphasis */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative"
      >
        {/* Glow behind amount */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 scale-150 rounded-full bg-gradient-to-r from-transparent via-amber-500/20 to-transparent blur-2xl"
        />
        <div className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tight text-white">
          $4M
        </div>
        <div className="mt-1 font-mono text-lg uppercase tracking-widest text-amber-300 md:text-xl">
          Seed Round
        </div>
      </motion.div>

      {/* Progress bar visual */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 w-full max-w-md"
      >
        <div className="relative h-3 overflow-hidden rounded-full bg-white/[0.08]">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-400"
            initial={{ width: 0 }}
            whileInView={{ width: "15%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          />
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: [-80, 400] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </div>
        <div className="mt-2 flex justify-between font-mono text-xs text-zinc-500">
          <span>Raising</span>
          <span className="text-amber-400/70">Target: $4M</span>
        </div>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl"
      >
        Build the execution layer for programmable markets—native to Sui.
      </motion.p>

      {/* Punchline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 max-w-xl rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] px-6 py-5 md:px-8 md:py-6"
      >
        <div className="text-base font-medium text-amber-300 md:text-lg">
          We're funding a land-grab: own execution truth → become the standard.
        </div>
      </motion.div>
    </section>
  );
}
