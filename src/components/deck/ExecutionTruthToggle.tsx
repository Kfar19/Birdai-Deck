"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RoleBadge } from "./RoleBadge";
import { LIVE_PROOF_DATA, type ExecutionTx } from "./types";
import { formatUSD } from "./format";

// ============================================
// EXECUTION TRUTH TOGGLE COMPONENT
// 
// Toggle between "Price-only" and "Execution Truth"
// views to show the difference between surface-level
// price changes and the full execution story.
// ============================================

function TxRow({ tx, isHighlighted }: { tx: ExecutionTx; isHighlighted: boolean }) {
  const isExtractor = tx.role === "Searcher" || tx.role === "Arb" || tx.role === "Liquidator";
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 8 }}
      transition={{ duration: 0.2 }}
      className={`grid grid-cols-12 items-center gap-2 rounded-lg border px-3 py-2 text-xs sm:gap-3 sm:px-4 sm:py-2.5 sm:text-sm ${
        isExtractor
          ? "border-amber-500/20 bg-amber-500/[0.06]"
          : "border-white/[0.04] bg-white/[0.02]"
      } ${isHighlighted ? "ring-1 ring-amber-500/40" : ""}`}
    >
      {/* Time */}
      <div className="col-span-2 font-mono text-[10px] text-zinc-500 sm:text-xs">
        t={tx.t.toFixed(1)}s
      </div>
      
      {/* Role Badge */}
      <div className="col-span-2">
        <RoleBadge role={tx.role} size="xs" />
      </div>
      
      {/* Action */}
      <div className="col-span-5 truncate font-mono text-white/80">
        {tx.action}
      </div>
      
      {/* State Delta */}
      <div
        className={`col-span-3 text-right font-mono text-[10px] sm:text-xs ${
          tx.stateDelta.startsWith("+") ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {tx.stateDelta}
      </div>
    </motion.div>
  );
}

export function ExecutionTruthToggle() {
  const [view, setView] = useState<"price" | "execution">("price");
  const data = LIVE_PROOF_DATA;

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 shadow-[0_0_80px_-30px_rgba(251,191,36,0.1)] sm:p-6 md:p-8">
      {/* Header with Toggle */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-400 sm:text-[11px]">
            {data.pool}
          </div>
          <div className="mt-1 font-mono text-sm text-zinc-500">
            {data.windowSeconds}s window • {data.txCount} transactions
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-1 rounded-full border border-white/[0.08] bg-black/40 p-1">
          <button
            onClick={() => setView("price")}
            className={`rounded-full px-3 py-1.5 font-mono text-xs transition-all sm:px-4 sm:text-sm ${
              view === "price"
                ? "bg-white/10 text-white"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Price-only
          </button>
          <button
            onClick={() => setView("execution")}
            className={`rounded-full px-3 py-1.5 font-mono text-xs transition-all sm:px-4 sm:text-sm ${
              view === "execution"
                ? "bg-amber-500/20 text-amber-300"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Execution truth
          </button>
        </div>
      </div>

      {/* Subline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600 sm:text-xs"
      >
        MEV is market structure expressed as profit.
      </motion.div>

      {/* Content Area */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          {view === "price" ? (
            <motion.div
              key="price-view"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-6"
            >
              {/* Simple Before/After Cards */}
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-white/[0.06] bg-black/30 p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500 sm:text-[11px]">
                    State before
                  </div>
                  <div className="mt-2 font-mono text-2xl font-medium text-white sm:text-3xl">
                    {data.priceBefore.toFixed(4)}
                  </div>
                  <div className="mt-1 text-xs text-zinc-500">price</div>
                </div>

                <div className="flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-zinc-600"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-black/30 p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500 sm:text-[11px]">
                    State after
                  </div>
                  <div className="mt-2 font-mono text-2xl font-medium text-white sm:text-3xl">
                    {data.priceAfter.toFixed(4)}
                  </div>
                  <div className="mt-1 text-xs text-zinc-500">price</div>
                </div>
              </div>

              {/* MEV Opportunity Headline */}
              <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-amber-600/5 px-6 py-5 text-center shadow-[0_0_40px_-15px_rgba(251,191,36,0.2)]">
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-amber-400/70 sm:text-xs">
                  MEV opportunity
                </div>
                <div className="mt-2 font-mono text-3xl font-bold text-amber-300 sm:text-4xl">
                  {formatUSD(data.mevOpportunityUsd)}
                </div>
                <div className="mt-2 text-xs text-zinc-400">
                  Extracted during this {data.windowSeconds}s window
                </div>
              </div>

              {/* What's missing hint */}
              <div className="flex items-center justify-center gap-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
                <span>Price tells you what happened.</span>
                <span className="text-amber-400">Toggle to see how.</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="execution-view"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-4"
            >
              {/* Citation */}
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
                <span className="rounded bg-amber-500/20 px-2 py-0.5 text-amber-300">
                  Scrub t={data.scrubAt}s
                </span>
                <span>• Full execution trace</span>
              </div>

              {/* Transaction List Header */}
              <div className="grid grid-cols-12 gap-2 px-3 font-mono text-[9px] uppercase tracking-wider text-zinc-600 sm:gap-3 sm:px-4 sm:text-[10px]">
                <div className="col-span-2">Time</div>
                <div className="col-span-2">Role</div>
                <div className="col-span-5">Action</div>
                <div className="col-span-3 text-right">Δ State</div>
              </div>

              {/* Transaction List - Scrollable on mobile */}
              <div className="max-h-[320px] space-y-1.5 overflow-y-auto pr-1 sm:max-h-[400px] sm:space-y-2">
                {data.txList.map((tx, idx) => (
                  <TxRow
                    key={tx.id}
                    tx={tx}
                    isHighlighted={Math.abs(tx.t - data.scrubAt) < 0.5}
                  />
                ))}
              </div>

              {/* Summary Stats */}
              <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {[
                  { label: "User txs", value: data.txList.filter(t => t.role === "User").length, color: "text-zinc-300" },
                  { label: "Searcher", value: data.txList.filter(t => t.role === "Searcher").length, color: "text-amber-300" },
                  { label: "Arb", value: data.txList.filter(t => t.role === "Arb").length, color: "text-purple-300" },
                  { label: "Liquidator", value: data.txList.filter(t => t.role === "Liquidator").length, color: "text-red-300" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-white/[0.06] bg-black/20 px-3 py-2 text-center"
                  >
                    <div className={`font-mono text-lg font-semibold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Attribution insight */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-amber-300/80 sm:text-xs">
                {data.txList.filter(t => t.role !== "User").length} of {data.txCount} transactions extracted value from user flow
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* No-JS Fallback */}
      <noscript>
        <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-6">
          <div className="mb-4 font-mono text-sm uppercase tracking-wider text-amber-400">
            Execution Truth View
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-mono text-2xl text-white">{data.priceBefore.toFixed(4)}</div>
              <div className="text-xs text-zinc-500">Before</div>
            </div>
            <div>
              <div className="font-mono text-2xl text-amber-300">{formatUSD(data.mevOpportunityUsd)}</div>
              <div className="text-xs text-zinc-500">MEV Extracted</div>
            </div>
            <div>
              <div className="font-mono text-2xl text-white">{data.priceAfter.toFixed(4)}</div>
              <div className="text-xs text-zinc-500">After</div>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-zinc-400">
            {data.txCount} transactions • {data.txList.filter(t => t.role !== "User").length} extracted value
          </div>
        </div>
      </noscript>
    </div>
  );
}

