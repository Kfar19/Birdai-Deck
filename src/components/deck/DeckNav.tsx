"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTION_COUNT = 20;

export function DeckNav() {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Observe which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-section"));
            setActiveSection(idx);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Hide nav after inactivity
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsVisible(false), 3000);
    };

    show();
    window.addEventListener("scroll", show);
    window.addEventListener("mousemove", show);
    window.addEventListener("keydown", show);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", show);
      window.removeEventListener("mousemove", show);
      window.removeEventListener("keydown", show);
    };
  }, []);

  const scrollToSection = useCallback((idx: number) => {
    const section = document.querySelector(`[data-section="${idx}"]`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const goNext = useCallback(() => {
    if (activeSection < SECTION_COUNT - 1) {
      scrollToSection(activeSection + 1);
    }
  }, [activeSection, scrollToSection]);

  const goPrev = useCallback(() => {
    if (activeSection > 0) {
      scrollToSection(activeSection - 1);
    }
  }, [activeSection, scrollToSection]);

  const goToTop = useCallback(() => {
    scrollToSection(0);
  }, [scrollToSection]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const isLastSection = activeSection === SECTION_COUNT - 1;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Progress dots — right edge (hidden on mobile to avoid overlap) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-1.5 md:right-6 md:flex md:gap-2"
          >
            {Array.from({ length: SECTION_COUNT }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(idx)}
                className="group relative flex h-4 w-4 items-center justify-center"
                aria-label={`Go to section ${idx + 1}`}
              >
                <motion.span
                  className={`block rounded-full transition-all duration-200 ${
                    idx === activeSection
                      ? "h-3 w-3 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]"
                      : "h-2 w-2 bg-zinc-600 group-hover:bg-zinc-400"
                  }`}
                  layoutId={idx === activeSection ? "activeDot" : undefined}
                />
                {/* Tooltip */}
                <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100">
                  {idx + 1} / {SECTION_COUNT}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Next / Back to top button — bottom center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 md:bottom-8"
          >
            {isLastSection ? (
              <button
                onClick={goToTop}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/90 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-zinc-300 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-zinc-800 hover:text-white"
              >
                <span className="rotate-180">↓</span>
                Back to top
              </button>
            ) : (
              <button
                onClick={goNext}
                className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-zinc-900/90 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-amber-300 backdrop-blur-sm transition-all hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-200"
              >
                Next
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </button>
            )}
          </motion.div>

          {/* Section counter — bottom left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-4 z-50 font-mono text-xs text-zinc-500 md:bottom-8 md:left-8"
          >
            <span className="text-zinc-300">{String(activeSection + 1).padStart(2, "0")}</span>
            <span className="mx-1">/</span>
            <span>{String(SECTION_COUNT).padStart(2, "0")}</span>
          </motion.div>

          {/* Keyboard hint — bottom right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="fixed bottom-8 right-8 z-50 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-wider text-zinc-600 md:flex"
          >
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5">↑</kbd>
              <kbd className="rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5">↓</kbd>
              navigate
            </span>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

