"use client";

import { motion } from "framer-motion";

const rejects = [
  { label: "Data vendors", why: "delayed + abstracted (don't reconstruct execution)" },
  { label: "Exchanges", why: "closed venues (don't make execution transparent)" },
  { label: "Market makers", why: "internalize flow (conflicted visibility)" },
  { label: "SaaS analytics", why: "observe outcomes (don't operate the system)" },
  { label: "Passive holders", why: "exposure only (no infrastructure)" },
];

const requirements = [
  { point: "Ordering is measurable", sub: "state transitions are observable" },
  { point: "Rules are code", sub: "market structure is software" },
  { point: "Infrastructure produces yield", sub: "operation is monetizable" },
  { point: "Transparency is monetizable", sub: "execution data becomes a product" },
];

export function CategoryProblem() {
  return (
    <div className="flex flex-col gap-10">
      {/* Lead-in */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="text-xl leading-relaxed text-zinc-300 md:text-2xl">
          In programmable markets, market structure isn't policy—it's code.
        </div>
        <div className="mt-2 text-lg text-zinc-400 md:text-xl">
          No existing category owns it.
        </div>
      </motion.div>

      <div className="grid gap-6 md:gap-10 lg:grid-cols-2">
        {/* LEFT — Why existing categories fail */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 md:p-8"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
            Why existing categories fail
          </div>

          <motion.div
            className="mt-6 space-y-3"
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.5, once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          >
            {rejects.map((r) => (
              <motion.div
                key={r.label}
                className="flex flex-col gap-1 rounded-xl border border-white/[0.06] bg-black/30 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-5 md:py-4"
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              >
                <span className="font-medium text-white/70 line-through decoration-white/30">
                  {r.label}
                </span>
                <span className="font-mono text-[10px] leading-tight tracking-wide text-zinc-500 md:max-w-[55%] md:text-right md:text-[11px]">
                  {r.why}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center font-mono text-[10px] uppercase tracking-widest text-red-400 md:px-5 md:py-4 md:text-xs"
          >
            None provide a real-time, verifiable view of execution
          </motion.div>
        </motion.div>

        {/* RIGHT — What the new category requires */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.04] to-transparent p-5 md:p-8"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-emerald-400/80">
            What the new category requires
          </div>

          <div className="mt-6 space-y-3">
            {requirements.map((r, idx) => (
              <motion.div
                key={r.point}
                className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-black/30 px-4 py-3 md:px-5 md:py-4"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.6, once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
              >
                <motion.span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-1 bg-emerald-400"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                  style={{ transformOrigin: "top" }}
                />
                <div className="font-medium text-white">{r.point}</div>
                <div className="mt-0.5 text-sm text-zinc-400">{r.sub}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/[0.08] px-4 py-4 text-center md:px-5"
          >
            <div className="text-base font-semibold text-amber-300 md:text-lg">
              Execution Intelligence & Market Infrastructure
            </div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-amber-400/70 md:text-[11px]">
              A new infrastructure category for programmable markets
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Birdai positioning */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center"
      >
        <div className="text-lg font-medium text-zinc-200 md:text-xl">
          Birdai is building the first EIMI company—native to Sui.
        </div>
      </motion.div>
    </div>
  );
}
