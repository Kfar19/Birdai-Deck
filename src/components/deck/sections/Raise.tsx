"use client";

import { motion } from "framer-motion";

export function Raise() {
  return (
    <section className="deck-section relative flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-8" data-section={11}>
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-500/[0.06] via-transparent to-transparent blur-3xl"
      />

      {/* Kicker */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-400"
      >
        12 — THE RAISE
      </motion.div>

      {/* Amount */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight text-white"
      >
        Raising $4M Seed
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-2xl text-xl leading-relaxed text-zinc-300 md:text-2xl"
      >
        Build the execution layer for programmable markets—native to Sui.
      </motion.p>

      {/* Punchline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-12 max-w-xl rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] px-6 py-5 md:px-8 md:py-6"
      >
        <div className="text-lg font-medium text-amber-300 md:text-xl">
          We're funding a land-grab: own execution truth → become the standard.
        </div>
      </motion.div>
    </section>
  );
}

