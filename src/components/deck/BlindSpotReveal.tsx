"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RoleBadge } from "./RoleBadge";
import { BLIND_SPOT_DATA, type BlindSpotEvent } from "./types";

// ============================================
// BLIND SPOT REVEAL COMPONENT
// 
// Interactive slider that reveals the difference
// between perceived and actual execution ordering.
// Degrades gracefully: shows actual state if JS disabled.
// ============================================

function EventRow({
  event,
  isHighlighted,
  showMovedLabel,
  opacity = 1,
  isActual = false,
}: {
  event: BlindSpotEvent;
  isHighlighted: boolean;
  showMovedLabel?: boolean;
  opacity?: number;
  isActual?: boolean;
}) {
  return (
    <motion.div
      layout
      initial={false}
      animate={{ opacity }}
      transition={{ duration: 0.2 }}
      className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2.5 sm:gap-4 sm:px-4 sm:py-3 ${
        isHighlighted
          ? "border-amber-500/50 bg-amber-500/15 shadow-[0_0_20px_-8px_rgba(251,191,36,0.4)]"
          : isActual
          ? "border-white/[0.08] bg-white/[0.03]"
          : "border-white/[0.04] bg-white/[0.02]"
      }`}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <RoleBadge role={event.role} size="xs" />
        <span
          className={`font-mono text-sm font-medium sm:text-base ${
            isHighlighted ? "text-amber-200" : "text-white/90"
          }`}
        >
          {event.label}
        </span>
        {showMovedLabel && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden text-[10px] font-medium uppercase tracking-wider text-amber-400 sm:inline"
          >
            ← moved first
          </motion.span>
        )}
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="hidden text-xs text-zinc-500 md:inline">{event.note}</span>
        <span
          className={`shrink-0 rounded px-2 py-0.5 font-mono text-xs ${
            isHighlighted
              ? "bg-amber-500/25 text-amber-300"
              : "bg-zinc-800/80 text-zinc-400"
          }`}
        >
          {event.t}
        </span>
      </div>
    </motion.div>
  );
}

export function BlindSpotReveal() {
  const [revealPct, setRevealPct] = useState(0);
  const data = BLIND_SPOT_DATA;

  // Calculate reveal phases
  const phase = useMemo(() => {
    if (revealPct < 35) return "thought"; // Show only "thought" timeline
    if (revealPct < 65) return "transition"; // Crossfade between timelines
    return "actual"; // Show only "actual" timeline
  }, [revealPct]);

  // Calculate opacities for smooth crossfade
  const thoughtOpacity = useMemo(() => {
    if (revealPct < 35) return 1;
    if (revealPct < 65) return 1 - (revealPct - 35) / 30;
    return 0;
  }, [revealPct]);

  const actualOpacity = useMemo(() => {
    if (revealPct < 35) return 0;
    if (revealPct < 65) return (revealPct - 35) / 30;
    return 1;
  }, [revealPct]);

  // Show callout when reveal is obvious (65%+)
  const showCallout = revealPct >= 65;

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {/* Slider Control */}
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-amber-400"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 sm:text-sm">
              Reveal execution truth
            </span>
          </div>
          <div className="font-mono text-sm text-white/60">
            {revealPct.toFixed(0)}% revealed
          </div>
        </div>

        {/* Custom Slider */}
        <div className="relative mt-4">
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500/60 to-amber-400"
              style={{ width: `${revealPct}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={revealPct}
            onChange={(e) => setRevealPct(Number(e.target.value))}
            className="absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent touch-pan-x [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:shadow-[0_0_16px_rgba(251,191,36,0.5)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110"
          />
        </div>
      </div>

      {/* Timeline Comparison */}
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
        {/* LEFT: "What people think happened" */}
        <motion.div
          animate={{ opacity: phase === "actual" ? 0.4 : 1 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 shadow-[0_0_60px_-20px_rgba(255,255,255,0.04)] sm:p-6"
        >
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.26em] text-zinc-400 sm:text-[11px]">
            What people think happened
          </div>
          <div className="space-y-2 sm:space-y-3">
            {data.thought.map((event, idx) => (
              <EventRow
                key={`thought-${idx}`}
                event={event}
                isHighlighted={false}
                opacity={thoughtOpacity > 0.3 ? 1 : 0.5}
              />
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-white/[0.06] bg-black/20 px-3 py-2 text-center font-mono text-[10px] text-zinc-500 sm:text-xs">
            Looks clean until you reconstruct execution.
          </div>
        </motion.div>

        {/* RIGHT: "What actually happened" */}
        <motion.div
          animate={{ 
            opacity: phase === "thought" ? 0.4 : 1,
            borderColor: phase === "actual" ? "rgba(251,191,36,0.4)" : "rgba(255,255,255,0.08)"
          }}
          transition={{ duration: 0.3 }}
          className="relative rounded-2xl border bg-gradient-to-br from-amber-500/[0.02] to-transparent p-4 shadow-[0_0_60px_-20px_rgba(251,191,36,0.08)] sm:p-6"
        >
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.26em] text-amber-400/80 sm:text-[11px]">
            What actually happened
          </div>
          <div className="space-y-2 sm:space-y-3">
            {data.actual.map((event, idx) => {
              const isArb = event.label === "arb capture";
              return (
                <EventRow
                  key={`actual-${idx}`}
                  event={event}
                  isHighlighted={isArb && actualOpacity > 0.5}
                  showMovedLabel={isArb && actualOpacity > 0.7}
                  opacity={actualOpacity > 0.3 ? 1 : 0.5}
                  isActual
                />
              );
            })}
          </div>
          
          {/* Outcome line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: actualOpacity > 0.5 ? 1 : 0.3 }}
            className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-center font-mono text-[10px] text-amber-300/80 sm:text-xs"
          >
            Same trades. Different ordering. Different outcome.
          </motion.div>
        </motion.div>
      </div>

      {/* Value Extracted Callout - Animates in at 65%+ */}
      <AnimatePresence>
        {showCallout && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mx-auto flex w-full max-w-2xl flex-col items-center justify-between gap-3 rounded-2xl border border-red-500/40 bg-gradient-to-r from-red-500/15 to-red-600/10 px-5 py-4 shadow-[0_0_40px_-15px_rgba(239,68,68,0.3)] sm:flex-row sm:gap-4 sm:px-8 sm:py-5"
          >
            <span className="text-sm text-zinc-200 sm:text-base">
              Value extracted before the user order landed:
            </span>
            <motion.span
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
              className="font-mono text-2xl font-bold text-red-400 sm:text-3xl"
            >
              −${Math.abs(data.deltaUsd)}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showCallout ? 1 : 0.4 }}
        className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs"
      >
        Same trades. Different ordering. Different outcome.
      </motion.div>

      {/* No-JS Fallback: Show actual state with callout */}
      <noscript>
        <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6">
          <div className="mb-4 font-mono text-sm uppercase tracking-wider text-amber-400">
            What actually happened (execution truth)
          </div>
          <div className="space-y-3">
            <div className="rounded-lg border border-amber-500/40 bg-amber-500/15 px-4 py-3">
              <span className="font-mono font-medium text-amber-200">arb capture</span>
              <span className="ml-2 text-xs text-amber-400">← moved first</span>
              <span className="float-right font-mono text-xs text-amber-300">t+00</span>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              <span className="font-mono text-white/90">swap A→B</span>
              <span className="float-right font-mono text-xs text-zinc-400">t+01</span>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              <span className="font-mono text-white/90">swap B→C</span>
              <span className="float-right font-mono text-xs text-zinc-400">t+02</span>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-red-500/40 bg-red-500/15 px-6 py-4 text-center">
            <span className="text-zinc-200">Value extracted before user order landed:</span>
            <span className="ml-3 font-mono text-2xl font-bold text-red-400">−$312</span>
          </div>
        </div>
      </noscript>
    </div>
  );
}

