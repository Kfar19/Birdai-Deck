"use client";

import { motion } from "framer-motion";

const founders = [
  {
    name: "Kevin Farrelly",
    role: "CEO",
    bullets: [
      "10+ years in execution and market infrastructure",
      "Built trading systems processing $B+ daily volume",
    ],
  },
  {
    name: "Greg",
    role: "CTO",
    bullets: [
      "Former HFT infrastructure lead",
      "Deep expertise in low-latency systems and blockchain validators",
    ],
  },
];

export function Team() {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* Team cards */}
      <div className="grid w-full max-w-3xl gap-6 md:grid-cols-2">
        {founders.map((f, idx) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5, once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8"
          >
            <div className="flex items-center gap-4">
              {/* Avatar placeholder */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500/20 to-amber-500/5 text-2xl font-bold text-amber-400">
                {f.name.charAt(0)}
              </div>
              <div>
                <div className="text-xl font-semibold text-white">{f.name}</div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-400">
                  {f.role}
                </div>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {f.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-zinc-300"
                >
                  <span className="mt-0.5 text-amber-400">→</span>
                  <span>{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Wedge tie-in */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-2xl rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] px-6 py-5 text-center md:px-8 md:py-6"
      >
        <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
          The team has built execution infrastructure at scale—now applying that to make markets transparent and fair.
        </p>
      </motion.div>
    </div>
  );
}

