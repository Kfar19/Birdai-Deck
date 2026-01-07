"use client";

import deck from "@/data/deck.json";
import { LiveCounter } from "@/components/deck/LiveCounter";
import { formatCompactNumber } from "@/components/deck/format";
import { motion } from "framer-motion";

function Value({
  unit,
  start,
  perSecond,
}: {
  unit: string;
  start: number;
  perSecond: number;
}) {
  if (unit === "$") {
    return (
      <span className="tabular-nums">
        ${" "}
        <LiveCounter start={start} perSecond={perSecond} format={formatCompactNumber} />
      </span>
    );
  }
  if (unit === "×") {
    return (
      <span className="tabular-nums">
        <LiveCounter start={start} perSecond={perSecond} decimals={2} />×
      </span>
    );
  }
  return (
    <span className="tabular-nums">
      <LiveCounter start={start} perSecond={perSecond} />
    </span>
  );
}

export function WhyNow() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {deck.whyNow.map((c, idx) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5, once: true }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
              {c.label}
            </div>
            <div className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              <Value unit={c.unit} start={c.value} perSecond={c.perSecond} />
            </div>
            <div className="mt-3 text-sm text-zinc-500">
              {c.why}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Punchline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="rounded-xl border border-amber-500/30 bg-amber-500/[0.06] px-6 py-5 text-center"
      >
        <div className="text-base font-medium text-amber-300 md:text-lg">
          As these accelerate, execution becomes the bottleneck. And the opportunity.
        </div>
      </motion.div>
    </div>
  );
}
