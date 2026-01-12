"use client";

import { motion } from "framer-motion";

export function PrivacyDiagram() {
  return (
    <div className="flex flex-col items-center gap-0">
      {/* Stage 1: Privacy-First Markets */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="rounded-2xl border border-zinc-600/50 bg-gradient-to-b from-zinc-800/80 to-zinc-900/80 p-5 text-center shadow-lg">
          <div className="text-lg font-semibold text-white md:text-xl">Privacy-First Markets</div>
          <div className="mt-1 text-sm text-zinc-400">(Encrypted Transactions)</div>
        </div>
      </motion.div>

      {/* Connector 1 */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex origin-top"
      >
        <div className="flex flex-col items-center">
          <div className="h-4 w-px bg-gradient-to-b from-zinc-600 to-red-500/50" />
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-medium text-red-400">
              <span className="text-base">❌</span>
              <span>No visibility into:</span>
            </div>
            <ul className="mt-2 space-y-1 text-xs text-red-300/80">
              <li>• mempool contents</li>
              <li>• user intent leakage</li>
              <li>• plaintext order flow</li>
              <li>• adversarial interception</li>
            </ul>
          </div>
          <div className="h-4 w-px bg-gradient-to-b from-red-500/50 to-zinc-600" />
          <svg width="12" height="8" viewBox="0 0 12 8" className="text-zinc-500">
            <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
          </svg>
        </div>
      </motion.div>

      {/* Stage 2: Deterministic Execution */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full max-w-md"
      >
        <div className="rounded-2xl border border-zinc-600/50 bg-gradient-to-b from-zinc-800/80 to-zinc-900/80 p-5 text-center shadow-lg">
          <div className="text-lg font-semibold text-white md:text-xl">Deterministic Execution</div>
          <div className="mt-1 text-sm text-zinc-400">(Given an Ordering)</div>
        </div>
      </motion.div>

      {/* Connector 2 */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="flex origin-top"
      >
        <div className="flex flex-col items-center">
          <div className="h-4 w-px bg-gradient-to-b from-zinc-600 to-amber-500/50" />
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 backdrop-blur-sm">
            <div className="space-y-1 text-xs text-amber-300">
              <div className="flex items-center gap-2">
                <span>⚠️</span>
                <span>Privacy removes signals</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚠️</span>
                <span>Execution economics remain</span>
              </div>
            </div>
          </div>
          <div className="h-4 w-px bg-gradient-to-b from-amber-500/50 to-zinc-600" />
          <svg width="12" height="8" viewBox="0 0 12 8" className="text-zinc-500">
            <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
          </svg>
        </div>
      </motion.div>

      {/* Stage 3: Where MEV Still Exists */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full max-w-lg"
      >
        <div className="overflow-hidden rounded-2xl border border-purple-500/40 bg-gradient-to-b from-purple-900/30 to-purple-950/30 shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]">
          <div className="border-b border-purple-500/20 bg-purple-500/10 px-5 py-3 text-center">
            <div className="text-base font-semibold text-purple-200 md:text-lg">WHERE MEV STILL EXISTS</div>
            <div className="mt-0.5 text-xs text-purple-400">(Structural / Post-Privacy MEV)</div>
          </div>
          <div className="grid gap-2 p-4 text-sm text-purple-200/90 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-1.5 sm:p-5">
            <div className="flex items-center gap-2">
              <span className="text-purple-400">•</span>
              <span>Ordering outcomes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">•</span>
              <span>Inclusion timing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">•</span>
              <span>Block construction decisions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">•</span>
              <span>Validator behavior</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">•</span>
              <span>Auction mechanics</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <span className="text-purple-400">•</span>
              <span>State transitions (AMMs, liquidations, rebalances, oracle updates)</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Connector 3 */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="flex origin-top"
      >
        <div className="flex flex-col items-center">
          <div className="h-4 w-px bg-gradient-to-b from-purple-500/50 to-zinc-600" />
          <div className="rounded-xl border border-zinc-600/50 bg-zinc-800/50 px-4 py-3 backdrop-blur-sm">
            <div className="space-y-1 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span>🔍</span>
                <span>Hidden from users</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔍</span>
                <span>Not visible via mempools</span>
              </div>
            </div>
          </div>
          <div className="h-4 w-px bg-gradient-to-b from-zinc-600 to-amber-500/50" />
          <svg width="12" height="8" viewBox="0 0 12 8" className="text-amber-500">
            <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
          </svg>
        </div>
      </motion.div>

      {/* Stage 4: Birdai */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="w-full max-w-lg"
      >
        <div className="overflow-hidden rounded-2xl border-2 border-amber-500/50 bg-gradient-to-b from-amber-900/40 to-amber-950/30 shadow-[0_0_50px_-15px_rgba(251,191,36,0.4)]">
          <div className="border-b border-amber-500/30 bg-amber-500/15 px-5 py-4 text-center">
            <div className="text-xl font-bold text-amber-300 md:text-2xl">BIRDAI</div>
            <div className="mt-1 text-sm text-amber-400/80">Execution Intelligence & Optimization</div>
          </div>
          <div className="p-5">
            <div className="text-xs font-medium uppercase tracking-wider text-amber-400/70">
              Reconstructs execution reality by observing:
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2">
              {[
                "realized ordering",
                "inclusion dynamics",
                "validator-level behavior",
                "auction outcomes",
                "state-transition economics",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-amber-200/90">
                  <span className="text-amber-400">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-center">
              <span className="text-amber-300">→</span>
              <span className="ml-2 text-sm font-medium text-amber-200">
                Converts opaque execution into intelligence
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Caption */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8 text-center"
      >
        <div className="text-base text-zinc-300 md:text-lg">
          Privacy hides transactions. Execution still determines outcomes.{" "}
          <span className="font-medium text-amber-300">Birdai makes execution visible.</span>
        </div>
      </motion.div>
    </div>
  );
}

