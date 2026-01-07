"use client";

import { motion } from "framer-motion";

export function Close() {
  return (
    <section className="deck-section relative flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-8" data-section={13}>
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-500/[0.06] via-transparent to-transparent blur-3xl"
      />

      {/* Category kicker */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-amber-400/70"
      >
        Execution Intelligence & Market Infrastructure
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-4xl text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight text-white"
      >
        As markets become software,
        <br />
        <span className="text-white/60">execution becomes the product.</span>
      </motion.h2>

      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.7, once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-12 inline-flex items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 px-8 py-4 text-base font-semibold text-amber-300 shadow-[0_0_30px_-8px_rgba(251,191,36,0.35)] transition-colors hover:bg-amber-400/20"
      >
        Schedule a walkthrough
      </motion.button>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="mt-6 font-mono text-sm text-zinc-500"
      >
        kevin@birdai.com
      </motion.div>
    </section>
  );
}
