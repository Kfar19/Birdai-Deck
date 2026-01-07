"use client";

import { motion, useReducedMotion } from "framer-motion";

export function GridField() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="absolute inset-0 opacity-[0.85]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: "0 0",
          maskImage:
            "radial-gradient(55% 55% at 50% 35%, black 35%, transparent 70%)",
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 10%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(700px 420px at 20% 70%, rgba(255,255,255,0.04), transparent 60%)",
        }}
        animate={
          reduce
            ? undefined
            : {
                opacity: [0.85, 1, 0.9],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}


