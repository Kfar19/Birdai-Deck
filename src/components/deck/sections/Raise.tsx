"use client";

import { motion } from "framer-motion";

const funds = [
  { label: "Engineering", pct: "50–60%" },
  { label: "Infra + Security", pct: "20–30%" },
  { label: "Product + GTM", pct: "10–20%" },
];

const milestones = [
  { timeline: "3–6 mo", goal: "Harden infra, ship Observatory v1" },
  { timeline: "6–12 mo", goal: "Production APIs + attribution at scale" },
  { timeline: "12–18 mo", goal: "Best-execution + enterprise integrations" },
];

export function Raise() {
  return (
    <section className="deck-section relative flex min-h-screen items-center justify-center px-4 py-16 sm:px-8" data-section={13}>
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-500/[0.08] via-transparent to-transparent blur-3xl"
      />

      <div className="mx-auto w-full max-w-5xl">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5, once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="font-mono text-sm font-medium text-zinc-500 sm:text-base">14</span>
          <span className="text-zinc-600">—</span>
          <span className="text-sm font-medium tracking-wide text-zinc-300 sm:text-base">THE RAISE</span>
        </motion.div>

        {/* Main content grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: The Ask */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Amount */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 scale-150 rounded-full bg-gradient-to-r from-transparent via-amber-500/20 to-transparent blur-2xl"
              />
              <div className="text-[clamp(3rem,8vw,5rem)] font-bold tracking-tight text-white">
                $3M
              </div>
              <div className="mt-1 font-mono text-base uppercase tracking-widest text-amber-300 md:text-lg">
                Pre-Seed
              </div>
            </div>

            {/* Round status */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/[0.08] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-amber-300 sm:text-xs">
                Opening round
              </span>
            </div>

            {/* Subtitle */}
            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400 md:text-lg">
              Build the execution layer for programmable markets—native to Sui.
            </p>

            {/* Punchline */}
            <div className="mt-6 max-w-md rounded-xl border border-amber-500/30 bg-amber-500/[0.06] px-5 py-4">
              <div className="text-sm font-medium text-amber-300 md:text-base">
                We're funding a land-grab: own execution truth → become the standard.
              </div>
            </div>
          </motion.div>

          {/* Right: Use of Funds + Milestones */}
          <div className="space-y-6">
            {/* Use of Funds */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4, once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
            >
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                Use of funds
              </div>
              <div className="space-y-2">
                {funds.map((f, idx) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + idx * 0.05 }}
                    className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-black/20 px-4 py-2.5"
                  >
                    <span className="text-sm text-zinc-300">{f.label}</span>
                    <span className="font-mono text-sm font-semibold text-amber-300">{f.pct}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Milestones */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4, once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-5"
            >
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-400/70">
                Milestones
              </div>
              <div className="space-y-2">
                {milestones.map((m, idx) => (
                  <motion.div
                    key={m.timeline}
                    initial={{ opacity: 0, x: 6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + idx * 0.05 }}
                    className="rounded-lg border border-white/[0.04] bg-black/20 px-4 py-2.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-emerald-400/70">
                        {m.timeline}
                      </span>
                      <span className="text-right text-sm text-zinc-300">{m.goal}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
