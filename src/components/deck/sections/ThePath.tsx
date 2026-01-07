"use client";

import { motion } from "framer-motion";

const steps = [
  { label: "Validators", sub: "operate native infrastructure", status: "done" },
  { label: "Custom Indexers", sub: "reconstruct execution reality", status: "done" },
  { label: "Execution Observatory", sub: "make MEV visible at scale", status: "in-progress" },
  { label: "Best Execution Layer", sub: "transparent, competitive, fair", status: "future" },
];

export function ThePath() {
  return (
    <div className="space-y-14">
      {/* Roadmap */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.55 }}
        className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8"
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
          Build order
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.div
              key={s.label}
              className={`relative rounded-xl border px-5 py-5 ${
                s.status === "done"
                  ? "border-emerald-500/30 bg-emerald-500/[0.04]"
                  : s.status === "in-progress"
                  ? "border-amber-500/30 bg-amber-500/[0.04]"
                  : "border-white/[0.06] bg-black/30"
              }`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.6, once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                {s.status === "done" && (
                  <span className="text-xs text-emerald-400">✓</span>
                )}
                {s.status === "in-progress" && (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400">
                    Now
                  </span>
                )}
              </div>
              <div className="mt-2 text-base font-semibold text-white">{s.label}</div>
              <div className="mt-1 text-sm text-zinc-400">{s.sub}</div>

              {/* Connector */}
              {idx < steps.length - 1 && (
                <motion.div
                  aria-hidden
                  className="absolute -right-3 top-1/2 hidden h-0.5 w-6 origin-left bg-gradient-to-r from-white/20 to-transparent md:block"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Vision */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/[0.04] via-transparent to-amber-500/[0.04] px-8 py-8 text-center"
      >
        <div className="mx-auto max-w-3xl text-xl font-semibold leading-relaxed text-white md:text-2xl">
          As legacy finance moves on-chain, execution quality becomes market structure.
        </div>
        <div className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
          Auctions make it transparent, competitive, and fair. We're building the infrastructure to make that real.
        </div>
      </motion.div>

    </div>
  );
}
