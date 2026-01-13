"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "Kevin Farrelly",
    role: "CEO",
    image: "/kevin.jpg",
    bio: "Sold his previous company to Franklin Templeton, where he later partnered with firm leadership to build and operate its early-stage venture platform. He understands execution, governance, and market structure not in theory—but as they function at institutional scale.",
  },
  {
    name: "Greg Scanlon",
    role: "CTO",
    image: "/greg.jpg",
    bio: "Built production trading systems at Citadel, designing latency-sensitive infrastructure where execution quality directly determines outcomes. He brings deep expertise in real-time systems, market microstructure, and performance-critical engineering.",
  },
];

export function Team() {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* Team cards */}
      <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
        {founders.map((f, idx) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-center md:p-8"
          >
            {/* Headshot - centered and prominent */}
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-[3px] border-amber-500/50 shadow-[0_0_40px_-6px_rgba(251,191,36,0.5)] sm:h-36 sm:w-36">
              <Image
                src={f.image}
                alt={f.name}
                fill
                className="object-cover object-center"
                sizes="144px"
                priority
              />
            </div>

            {/* Name & Role */}
            <div className="mt-5">
              <div className="text-xl font-semibold text-white sm:text-2xl">{f.name}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-amber-400">
                {f.role}
              </div>
            </div>

            {/* Bio */}
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              {f.bio}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Punchline */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-2xl text-center"
      >
        <div className="text-lg font-semibold text-white md:text-xl">
          Built by operators, not observers.
        </div>
        <p className="mt-2 text-base text-zinc-400 md:text-lg">
          The team has already run institutional systems where execution, latency, and governance decide real outcomes—not narratives.
        </p>
      </motion.div>
    </div>
  );
}
