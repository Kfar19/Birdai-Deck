"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ShareModal } from "@/components/deck/ShareModal";

export function Close() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <>
      <section className="deck-section relative flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-8" data-section={16}>
        {/* Subtle radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-500/[0.08] via-transparent to-transparent blur-3xl"
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

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.7, once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          {/* Primary CTA */}
          <a
            href="mailto:kevin@birdai.com?subject=Birdai%20Walkthrough%20Request"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-amber-400/40 bg-amber-400/10 px-8 py-4 text-base font-semibold text-amber-300 shadow-[0_0_30px_-8px_rgba(251,191,36,0.35)] transition-all duration-300 hover:border-amber-400/60 hover:bg-amber-400/20 hover:shadow-[0_0_40px_-8px_rgba(251,191,36,0.5)]"
          >
            {/* Shimmer on hover */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            <span className="relative">Schedule a walkthrough</span>
          </a>

          {/* Share CTA */}
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-zinc-300 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-400 transition-colors group-hover:text-white">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            <span>Share deck</span>
          </button>
        </motion.div>

        {/* Contact */}
        <motion.a
          href="mailto:kevin@birdai.com"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-6 font-mono text-sm text-zinc-500 transition-colors hover:text-zinc-300"
        >
          kevin@birdai.com
        </motion.a>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-zinc-600"
        >
          Birdai © 2025
        </motion.div>
      </section>

      {/* Share Modal */}
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
    </>
  );
}
