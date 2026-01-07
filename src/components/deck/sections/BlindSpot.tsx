"use client";

import deck from "@/data/deck.json";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type Item = { label: string; t: string; note: string };

export function BlindSpot() {
  const [reveal, setReveal] = useState(false);
  const leftItems = deck.blindSpot.thought;

  const rightItems: Item[] = useMemo(
    () => (reveal ? deck.blindSpot.actual : deck.blindSpot.thought),
    [reveal],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* LEFT: abstracted view */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.55 }}
        className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-8 shadow-[0_0_60px_-20px_rgba(255,255,255,0.06)]"
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-zinc-400">
          What people think happened
        </div>
        <div className="mt-6 space-y-4 font-mono text-[15px] leading-snug">
          {leftItems.map((it, idx) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.7, once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="flex items-center justify-between gap-4 text-white/80"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-medium text-white">{it.label}</span>
                <span className="hidden text-xs text-zinc-500 md:inline">
                  {it.note}
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-500">{it.t}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT: reconstructed reality */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className={`relative rounded-2xl border p-8 shadow-[0_0_60px_-20px_rgba(255,255,255,0.06)] transition-colors duration-300 ${
          reveal
            ? "border-amber-500/40 bg-gradient-to-br from-amber-500/[0.04] to-transparent"
            : "border-white/[0.08] bg-white/[0.025]"
        }`}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-zinc-400">
            What actually happened
          </div>

          {/* Toggle */}
          <button
            type="button"
            onClick={() => setReveal((x) => !x)}
            className={`group relative flex h-7 w-14 shrink-0 items-center rounded-full border transition-colors duration-200 ${
              reveal
                ? "border-amber-500/50 bg-amber-500/20"
                : "border-white/15 bg-black/40"
            }`}
            aria-pressed={reveal}
            aria-label="Reveal reconstruction"
          >
            <motion.span
              className={`absolute left-0.5 h-5 w-5 rounded-full transition-colors ${
                reveal ? "bg-amber-400" : "bg-white/30"
              }`}
              animate={{ x: reveal ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            />
            <span className="absolute right-full mr-3 whitespace-nowrap font-mono text-[11px] uppercase tracking-widest text-zinc-500 transition-colors group-hover:text-zinc-400">
              Reveal
            </span>
          </button>
        </div>

        <motion.div
          layout
          className="mt-6 space-y-4 font-mono text-[15px] leading-snug"
        >
          <AnimatePresence mode="popLayout">
            {rightItems.map((it) => (
              <motion.div
                key={it.label}
                layout
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between gap-4 text-white/80"
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className={`font-medium ${
                      reveal && it.label === "arb capture"
                        ? "text-amber-300"
                        : "text-white"
                    }`}
                  >
                    {it.label}
                  </span>
                  <span className="hidden text-xs text-zinc-500 md:inline">
                    {it.note}
                  </span>
                </div>
                <span className="font-mono text-xs text-zinc-500">{it.t}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className={`mt-8 rounded-xl border px-5 py-4 text-sm font-medium transition-colors duration-200 ${
            reveal
              ? "border-amber-500/30 bg-amber-500/10 text-amber-200"
              : "border-white/10 bg-black/30 text-zinc-400"
          }`}
          animate={reveal ? { scale: 1.01 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {reveal
            ? "Same trades. Different ordering. Different outcome."
            : "Looks clean until you reconstruct execution."}
        </motion.div>

        {/* PnL impact callout — only shows after reveal */}
        <AnimatePresence>
          {reveal && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="mt-4 flex items-center justify-between rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4"
            >
              <span className="text-sm text-zinc-300">Value extracted before user order landed</span>
              <span className="font-mono text-lg font-semibold text-red-400">−$312</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
