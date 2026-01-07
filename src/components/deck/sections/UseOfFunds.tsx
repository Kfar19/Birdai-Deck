"use client";

import { motion } from "framer-motion";

const funds = [
  { label: "Engineering", pct: "50–60%" },
  { label: "Infra + Security", pct: "20–30%" },
  { label: "Product + GTM", pct: "10–20%" },
];

const milestones = [
  {
    timeline: "Next 3–6 months",
    goal: "Harden infra, expand coverage, ship Observatory v1",
  },
  {
    timeline: "6–12 months",
    goal: "Production APIs + attribution, 'live proof' at scale",
  },
  {
    timeline: "12–18 months",
    goal: "Best-execution prototype + first enterprise/strategic integrations",
  },
];

export function UseOfFunds() {
  return (
    <div className="space-y-10">
      <div className="grid gap-6 md:gap-10 lg:grid-cols-2">
        {/* Use of Funds */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 md:p-8"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
            Use of funds
          </div>

          <div className="mt-6 space-y-4">
            {funds.map((f, idx) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.6, once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-black/30 px-4 py-3 sm:px-5 sm:py-4"
              >
                <span className="text-sm font-medium text-white sm:text-base md:text-lg">{f.label}</span>
                <span className="font-mono text-base font-semibold text-amber-300 sm:text-lg md:text-xl">{f.pct}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.04] to-transparent p-5 md:p-8"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-emerald-400/80">
            Milestones
          </div>

          <div className="mt-6 space-y-4">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.timeline}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.6, once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-xl border border-white/[0.06] bg-black/30 px-4 py-3 sm:px-5 sm:py-4"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-emerald-400/70 sm:text-xs">
                  {m.timeline}
                </div>
                <div className="mt-1 text-sm text-zinc-300 sm:mt-2 sm:text-base">{m.goal}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

