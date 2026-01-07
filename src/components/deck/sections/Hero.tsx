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

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-300"
        >
          Birdai — Execution Intelligence & Market Infrastructure
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-4xl text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white"
        >
          Markets Are Becoming Software
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          Execution quality is now market structure.
        </motion.p>

        {/* What we do - clear and concrete */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: "easeOut" }}
          className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-5 md:mt-12 md:px-8 md:py-6"
        >
          <p className="text-lg font-medium leading-relaxed text-zinc-100 md:text-xl">
            We run execution infrastructure. The intelligence is what comes out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
          className="mt-8 inline-flex flex-col items-center gap-1"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-xs shadow-[0_0_40px_-12px_rgba(255,255,255,0.15)] md:gap-4 md:px-5 md:py-4 md:text-sm">
            <span className="text-zinc-400">executions indexed</span>
            <span className="text-lg font-semibold tracking-tight text-white">
              <LiveCounter
                start={deck.hero.executionsIndexedStart}
                perSecond={deck.hero.executionsIndexedPerSecond}
              />
            </span>
            <span className="text-zinc-500">(+)</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            since launch
          </span>
        </motion.div>
      </div>
    </section>
  );
}
