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
          className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3"
        >
          <span className="text-base font-semibold tracking-wide text-white sm:text-lg">
            Birdai
          </span>
          <span className="hidden text-zinc-500 sm:inline">—</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-400 sm:text-xs sm:tracking-[0.2em]">
            Execution Intelligence & Market Infrastructure
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-4xl text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white"
        >
          Markets Are Becoming Software
        </motion.h1>

        {/* What we do */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-2xl md:mt-10"
        >
          <p className="text-lg font-medium leading-relaxed text-zinc-200 md:text-xl">
            We run execution infrastructure. The intelligence is what comes out.
          </p>
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
            <div className="relative inline-flex flex-col items-center justify-center gap-1 rounded-xl border border-amber-500/30 bg-gradient-to-b from-amber-500/[0.08] to-amber-500/[0.03] px-4 py-3 font-mono text-xs shadow-[0_0_50px_-15px_rgba(251,191,36,0.25)] sm:flex-row sm:gap-2 md:gap-4 md:px-6 md:py-4 md:text-sm">
              <span className="text-[10px] text-amber-200/70 sm:text-xs">Sui executions indexed</span>
              <span className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
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
            last 30 days
          </span>
        </motion.div>
      </div>
    </section>
  );
}
