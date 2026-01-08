"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export function Section({
  kicker,
  title,
  children,
  sectionIndex,
}: {
  kicker?: string;
  title?: string;
  children?: ReactNode;
  sectionIndex?: number;
}) {
  return (
    <section
      className="deck-section relative flex min-h-screen items-center px-4 py-16 sm:px-8 md:px-16 md:py-20"
      data-section={sectionIndex}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        {(kicker || title) && (
          <motion.header
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.6, once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-4"
          >
            {kicker && (
              <div className="flex items-center gap-3">
                {/* Parse kicker like "02 — CORE BELIEFS" */}
                {kicker.includes("—") ? (
                  <>
                    <span className="font-mono text-sm font-medium text-zinc-500 sm:text-base">
                      {kicker.split("—")[0].trim()}
                    </span>
                    <span className="text-zinc-600">—</span>
                    <span className="text-sm font-medium tracking-wide text-zinc-300 sm:text-base">
                      {kicker.split("—")[1].trim()}
                    </span>
                  </>
                ) : (
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-400">
                    {kicker}
                  </span>
                )}
              </div>
            )}
            {title && title.trim().length > 0 && (
              <h2 className="max-w-3xl text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-white">
                {title}
              </h2>
            )}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
}
