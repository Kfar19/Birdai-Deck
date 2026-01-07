"use client";

import { motion } from "framer-motion";

const rejects = [
  { label: "Data vendors", why: "abstracted, delayed, non-participatory" },
  { label: "Exchanges", why: "closed, centralized, no transparency" },
  { label: "Market makers", why: "internalized, opaque, conflicted" },
  { label: "SaaS analytics", why: "observes, doesn't operate" },
  { label: "Passive holders", why: "exposure without infrastructure" },
];

const truths = [
  "Ordering is measurable",
  "Rules are code-defined",
  "Infrastructure produces yield",
  "Transparency is monetizable",
];

export function CategoryProblem() {
  return (
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
          {rejects.map((r, i) => (
            <motion.div
              key={r.label}
              className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-black/30 px-5 py-4"
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              animate={{ opacity: [1, 1, 0.25] }}
              transition={{ duration: 2, delay: 1 + i * 0.12 }}
            >
              <span className="font-medium text-white/70 line-through decoration-white/30">
                {r.label}
              </span>
              <span className="max-w-[45%] text-right font-mono text-[11px] leading-tight tracking-wide text-zinc-500">
                {r.why}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-center font-mono text-xs uppercase tracking-widest text-red-400"
        >
          None of these operate execution infrastructure
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
          {truths.map((t, idx) => (
            <motion.div
              key={t}
              className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-black/30 px-5 py-4 font-medium text-white"
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
              {t}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/[0.08] px-5 py-4 text-center"
        >
          <div className="text-base font-semibold text-amber-300">
            Execution Intelligence & Market Infrastructure
          </div>
          <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-amber-400/70">
            A new public-market category
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
