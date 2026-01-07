"use client";

import { LiveCounter } from "@/components/deck/LiveCounter";
import deck from "@/data/deck.json";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="deck-section relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-8 md:px-16 md:py-20" data-section={0}>
      {/* Radial glow behind headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white/[0.04] via-transparent to-transparent blur-3xl"
      />

      {/* Amber accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-2/3 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t from-amber-500/[0.03] via-transparent to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Sui badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-4 py-1.5"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-cyan-400" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400">
            Native to Sui
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-300"
        >
          Birdai — Execution Intelligence & Market Infrastructure
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-4xl text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white"
        >
          Markets Are Becoming Software
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          Execution quality is now market structure.
        </motion.p>

        {/* What we do - with glow effect */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="relative mx-auto mt-10 max-w-2xl md:mt-12"
        >
          {/* Glow behind box */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 blur-xl"
          />
          <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-white/[0.04] to-white/[0.02] px-6 py-5 shadow-[0_0_60px_-20px_rgba(251,191,36,0.15)] md:px-8 md:py-6">
            <p className="text-lg font-medium leading-relaxed text-zinc-100 md:text-xl">
              We run execution infrastructure. The intelligence is what comes out.
            </p>
          </div>
        </motion.div>

        {/* Counter with pulse effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="mt-10 inline-flex flex-col items-center gap-2"
        >
          <div className="relative">
            {/* Subtle pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-xl border border-amber-500/30"
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative inline-flex flex-wrap items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-gradient-to-b from-amber-500/[0.08] to-amber-500/[0.03] px-5 py-4 font-mono text-xs shadow-[0_0_50px_-15px_rgba(251,191,36,0.25)] md:gap-4 md:px-6 md:py-4 md:text-sm">
              <span className="text-amber-200/70">executions indexed</span>
              <span className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                <LiveCounter
                  start={deck.hero.executionsIndexedStart}
                  perSecond={deck.hero.executionsIndexedPerSecond}
                />
              </span>
              <motion.span
                className="text-amber-400"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                (+)
              </motion.span>
            </div>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            since launch
          </span>
        </motion.div>
      </div>
    </section>
  );
}
