"use client";

import deck from "@/data/deck.json";
import { motion } from "framer-motion";

export function BlindSpot() {
  const leftItems = deck.blindSpot.thought;
  const rightItems = deck.blindSpot.actual;

  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        {/* LEFT: abstracted view */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5, once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-[0_0_60px_-20px_rgba(255,255,255,0.06)] md:p-8"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-zinc-400 sm:text-[11px]">
            What people think happened
          </div>
          <div className="mt-4 space-y-3 font-mono text-[13px] leading-snug sm:mt-6 sm:space-y-4 sm:text-[15px]">
            {leftItems.map((it, idx) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.7, once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="flex items-center justify-between gap-2 rounded-lg border border-white/[0.04] bg-white/[0.02] px-3 py-2 text-white/80 sm:gap-4 sm:px-4 sm:py-3"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-medium text-white">{it.label}</span>
                  <span className="hidden text-xs text-zinc-500 md:inline">
                    {it.note}
                  </span>
                </div>
                <span className="shrink-0 rounded bg-zinc-800 px-2 py-0.5 font-mono text-xs text-zinc-400">
                  {it.t}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-center text-xs text-zinc-400 sm:mt-6 sm:px-5 sm:py-4 sm:text-sm">
            Looks clean until you reconstruct execution.
          </div>
        </motion.div>

        {/* RIGHT: reconstructed reality - ALWAYS VISIBLE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5, once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative rounded-2xl border border-amber-500/40 bg-gradient-to-br from-amber-500/[0.04] to-transparent p-6 shadow-[0_0_60px_-20px_rgba(251,191,36,0.1)] md:p-8"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-amber-400/80 sm:text-[11px]">
            What actually happened
          </div>
          <div className="mt-4 space-y-3 font-mono text-[13px] leading-snug sm:mt-6 sm:space-y-4 sm:text-[15px]">
            {rightItems.map((it, idx) => {
              const isReordered = it.label === "arb capture";
              return (
                <motion.div
                  key={it.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.7, once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2 sm:gap-4 sm:px-4 sm:py-3 ${
                    isReordered
                      ? "border-amber-500/40 bg-amber-500/10"
                      : "border-white/[0.04] bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`font-medium ${
                        isReordered ? "text-amber-300" : "text-white"
                      }`}
                    >
                      {it.label}
                      {isReordered && (
                        <span className="ml-1 text-[9px] uppercase tracking-wider text-amber-400 sm:ml-2 sm:text-[10px]">
                          ← first
                        </span>
                      )}
                    </span>
                    <span className="hidden text-xs text-zinc-500 md:inline">
                      {it.note}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 rounded px-2 py-0.5 font-mono text-xs ${
                      isReordered
                        ? "bg-amber-500/20 text-amber-300"
                        : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    {it.t}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Outcome callout */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.7, once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-center text-xs font-medium text-amber-200 sm:mt-6 sm:px-5 sm:py-4 sm:text-sm"
          >
            Same trades. Different ordering. Different outcome.
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom callout - VALUE EXTRACTED */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mx-auto flex w-full max-w-2xl flex-col items-center justify-between gap-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-6 py-5 sm:flex-row md:px-8 md:py-6"
      >
        <span className="text-base text-zinc-300 md:text-lg">
          Value extracted before the user order landed:
        </span>
        <span className="font-mono text-2xl font-bold text-red-400 md:text-3xl">
          −$312
        </span>
      </motion.div>
    </div>
  );
}
