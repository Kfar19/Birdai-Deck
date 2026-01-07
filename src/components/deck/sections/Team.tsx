"use client";

import { motion } from "framer-motion";

const founders = [
  {
    name: "Kevin Farrelly",
    role: "CEO",
    bullets: [
      "Sold last company to Franklin Templeton",
      "Built early-stage venture arm for Franklin Templeton",
    ],
  },
  {
    name: "Greg",
    role: "CTO",
    bullets: [
      "Built trading systems at Citadel",
      "Deep expertise in low-latency infrastructure",
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
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Avatar placeholder */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500/20 to-amber-500/5 text-xl font-bold text-amber-400 sm:h-14 sm:w-14 sm:text-2xl">
                {f.name.charAt(0)}
              </div>
              <div>
                <div className="text-lg font-semibold text-white sm:text-xl">{f.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 sm:text-[11px]">
                  {f.role}
                </div>
              </div>
            </div>

            <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
              {f.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-2 text-xs text-zinc-300 sm:gap-3 sm:text-sm"
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
          Partnered at Franklin Templeton building early-stage ventures—now building Birdai to make execution transparent and fair.
        </p>
      </motion.div>
    </div>
  );
}

