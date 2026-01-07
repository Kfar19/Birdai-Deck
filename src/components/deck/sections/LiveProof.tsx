"use client";

import deck from "@/data/deck.json";
import { formatUSD } from "@/components/deck/format";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

function Sparkline({
  values,
  activeIndex,
}: {
  values: number[];
  activeIndex: number;
}) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = Math.max(1e-9, max - min);

  const w = 280;
  const h = 64;
  const pad = 8;
  const xStep = values.length <= 1 ? 0 : (w - pad * 2) / (values.length - 1);

  const points = values
    .map((v, i) => {
      const x = pad + i * xStep;
      const y = pad + (1 - (v - min) / span) * (h - pad * 2);
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  const ax = pad + activeIndex * xStep;
  const ay = pad + (1 - (values[activeIndex]! - min) / span) * (h - pad * 2);

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="block">
      {/* Glow filter */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke="rgba(251,191,36,0.5)"
        strokeWidth="2"
        filter="url(#glow)"
      />
      <polyline
        points={points}
        fill="none"
        stroke="rgba(251,191,36,0.9)"
        strokeWidth="1.5"
      />
      <line
        x1={ax}
        x2={ax}
        y1={pad}
        y2={h - pad}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle cx={ax} cy={ay} r="5" fill="rgba(251,191,36,0.85)" filter="url(#glow)" />
    </svg>
  );
}

export function LiveProof() {
  const samples = deck.proof.samples;
  const [pct, setPct] = useState(50);

  const idx = useMemo(() => {
    const i = Math.round((pct / 100) * (samples.length - 1));
    return Math.min(samples.length - 1, Math.max(0, i));
  }, [pct, samples.length]);

  const s = samples[idx]!;
  const pnlSeries = useMemo(() => samples.map((x) => x.pnlDelta), [samples]);
  const pnlPositive = s.pnlDelta > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.4, once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 shadow-[0_0_80px_-30px_rgba(251,191,36,0.12)] md:p-10"
    >
      <div className="grid gap-6 md:gap-10 lg:grid-cols-4">
        {/* Left meta */}
        <div className="lg:col-span-1">
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
            Pool
          </div>
          <div className="mt-2 text-2xl font-semibold text-white">
            {deck.proof.pool}
          </div>

          <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
            Window
          </div>
          <div className="mt-2 font-mono text-lg text-white/80">
            {deck.proof.windowSeconds}s{" "}
            <span className="text-zinc-400">/ {deck.proof.txCount} tx</span>
          </div>

          <div className="mt-8 hidden lg:block">
            <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500">
              PnL over window
            </div>
            <Sparkline values={pnlSeries} activeIndex={idx} />
          </div>
        </div>

        {/* Right interactive */}
        <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-4 md:p-8 lg:col-span-3">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
              Scrub execution window
            </div>
            <div className="font-mono text-xl font-medium text-white">
              t = {s.t.toFixed(1)}s
            </div>
          </div>

          {/* Custom styled range */}
          <div className="relative mt-6">
            <input
              type="range"
              min={0}
              max={100}
              value={pct}
              onChange={(e) => setPct(Number(e.target.value))}
              className="h-3 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-amber-400 touch-pan-x [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(251,191,36,0.6)] md:[&::-webkit-slider-thumb]:h-5 md:[&::-webkit-slider-thumb]:w-5"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="mt-5 font-mono text-xs uppercase tracking-[0.22em] text-zinc-400"
            >
              {s.event}
            </motion.div>
          </AnimatePresence>

          {/* State cards */}
          <div className="mt-6 grid gap-3 md:mt-8 md:grid-cols-3 md:gap-5">
            {[
              { label: "State before", value: `price ${s.beforePrice.toFixed(4)}` },
              {
                label: "Execution window",
                value: idx >= 2 && idx <= 3 ? "capture window" : "state transition",
              },
              { label: "State after", value: `price ${s.afterPrice.toFixed(4)}` },
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400">
                  {c.label}
                </div>
                <div className="mt-2 font-mono text-base text-white/90">{c.value}</div>
              </div>
            ))}
          </div>

          {/* PnL highlight */}
          <motion.div
            key={s.pnlDelta}
            initial={{ scale: 1.04, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className={`mt-6 flex flex-col gap-2 rounded-xl border px-4 py-4 font-mono text-base md:mt-8 md:flex-row md:items-center md:justify-between md:px-6 md:py-5 md:text-lg ${
              pnlPositive
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                : "border-white/10 bg-black/30 text-white/70"
            }`}
          >
            <span className="text-sm uppercase tracking-widest opacity-60">
              Estimated extractable value
            </span>
            <span className="text-xl font-semibold">{formatUSD(s.pnlDelta)}</span>
          </motion.div>

          {/* Punchline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500"
          >
            This is what execution intelligence sees—before "price" tells the story.
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
