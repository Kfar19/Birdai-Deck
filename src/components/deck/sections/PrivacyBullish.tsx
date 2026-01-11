"use client";

import { motion } from "framer-motion";

const whatBecomesHidden = [
  "You cannot see orders",
  "You cannot see balances",
  "You cannot see strategies",
];

const scarceSignals = [
  {
    title: "Ordering insight",
    desc: "The order of execution determines outcomes, even when contents are encrypted.",
  },
  {
    title: "Timing insight",
    desc: "Inclusion before or after a state transition changes results.",
  },
  {
    title: "State-transition understanding",
    desc: "Markets are state machines. Value appears at the boundaries.",
  },
  {
    title: "Infrastructure behavior",
    desc: "Validators, auctions, and block construction become the source of truth.",
  },
];

const signalProperties = [
  "protocol-native",
  "deterministic",
  "hard to reconstruct",
  "expensive to observe",
];

const whyBirdaiCanSell = [
  "do not run infrastructure",
  "cannot reconstruct execution paths",
  "cannot correlate validator behavior with outcomes",
  "cannot explain why performance differed from expectation",
];

const causalChain = [
  { from: "Privacy", to: "opacity of intent" },
  { from: "Opacity", to: "loss of naive signals" },
  { from: "Loss of signals", to: "execution dominates outcomes" },
  { from: "Execution dominance", to: "need for reconstruction" },
  { from: "Reconstruction", to: "monetizable intelligence" },
];

export function PrivacyBullish() {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      {/* Lead statement */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="text-lg text-zinc-300 md:text-xl">
          Because markets do not run on information alone — they run on{" "}
          <span className="text-white font-medium">sequencing</span>,{" "}
          <span className="text-white font-medium">time</span>, and{" "}
          <span className="text-white font-medium">state</span>.
        </div>
      </motion.div>

      {/* Privacy removes / does not remove */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid gap-4 md:grid-cols-2 md:gap-6"
      >
        {/* What privacy removes */}
        <div className="rounded-2xl border border-zinc-700/50 bg-zinc-800/30 p-5 md:p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
            Privacy removes who did what
          </div>
          <div className="mt-3 text-sm text-zinc-400">
            When intent is hidden:
          </div>
          <ul className="mt-3 space-y-2">
            {whatBecomesHidden.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-zinc-400">
                <span className="text-zinc-600">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-sm text-zinc-500">
            So everyone loses the same surface-level information.
          </div>
        </div>

        {/* What remains */}
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-5 md:p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 sm:text-xs">
            It does not remove
          </div>
          <div className="mt-3 text-base font-medium text-amber-200 md:text-lg">
            What happened, when it happened, or why it mattered.
          </div>
          <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-center text-sm font-medium text-amber-300">
            What remains observable — and decisive — is execution.
          </div>
        </div>
      </motion.div>

      {/* What becomes scarce under privacy */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
          What becomes scarce under privacy
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
          {scarceSignals.map((signal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + idx * 0.05 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
            >
              <div className="text-sm font-medium text-white">{signal.title}</div>
              <div className="mt-1 text-xs text-zinc-400">{signal.desc}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Signal properties */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs text-zinc-500">These signals are:</span>
          {signalProperties.map((prop, idx) => (
            <span
              key={idx}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-zinc-400"
            >
              {prop}
            </span>
          ))}
        </div>
        <div className="mt-3 text-sm text-zinc-500">
          Scarcity is created not by secrecy, but by <span className="text-zinc-300">structural complexity</span>.
        </div>
      </motion.div>

      {/* Why Birdai can sell this */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-6"
      >
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
          Why Birdai can sell this
        </div>
        <div className="mt-3 text-sm text-zinc-400">Because most participants:</div>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {whyBirdaiCanSell.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
              <span className="mt-0.5 text-red-400">✗</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/[0.08] px-4 py-3 text-sm font-medium text-amber-300">
          Birdai does that reconstruction continuously and systemically.
        </div>
      </motion.div>

      {/* The Causal Chain — Money Logic */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/[0.08] to-amber-600/[0.02] p-5 md:p-6"
      >
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
          The causal chain <span className="text-amber-500/60">(this is the money logic)</span>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {causalChain.map((step, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5">
                <span className="text-xs font-medium text-amber-200">{step.from}</span>
                <span className="mx-1.5 text-amber-500/60">→</span>
                <span className="text-xs text-amber-300/80">{step.to}</span>
              </div>
              {idx < causalChain.length - 1 && (
                <span className="text-amber-500/40">→</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* The Deeper Reason */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-2xl"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
          The deeper reason <span className="text-zinc-600">(this is the invariant)</span>
        </div>
        <div className="mt-3 text-base text-zinc-300 md:text-lg">
          If you can't see intent, the only truth left is what the system actually did.
        </div>
        <div className="mt-2 text-xl font-semibold text-white md:text-2xl">
          That truth is execution.
        </div>
      </motion.div>

      {/* Final punchline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mx-auto max-w-3xl rounded-2xl border border-amber-500/40 bg-amber-500/[0.08] px-6 py-5 text-center shadow-[0_0_40px_-15px_rgba(251,191,36,0.2)] md:px-8 md:py-6"
      >
        <div className="text-base text-zinc-300 md:text-lg">
          Privacy makes execution the scarce signal because execution is the last remaining source of economic truth.
        </div>
        <div className="mt-3 text-xl font-bold text-amber-300 md:text-2xl">
          Birdai sells that truth.
        </div>
      </motion.div>
    </div>
  );
}
