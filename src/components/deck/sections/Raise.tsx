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
        className="mb-6 flex items-center gap-3"
      >
        <span className="font-mono text-sm font-medium text-zinc-500 sm:text-base">14</span>
        <span className="text-zinc-600">—</span>
        <span className="text-sm font-medium tracking-wide text-zinc-300 sm:text-base">THE RAISE</span>
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
          $3M
        </div>
        <div className="mt-1 font-mono text-lg uppercase tracking-widest text-amber-300 md:text-xl">
          Pre-Seed
        </div>
      </motion.div>

      {/* Round status */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/[0.08] px-5 py-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-amber-300">
          Opening round
        </span>
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
