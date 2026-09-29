"use client";

import { motion } from "framer-motion";
import { Rocket, TrendingUp, Target, Sparkles } from "lucide-react";

/**
 * Decorative "growth" graphic for the About page's key-value section.
 * Built from layered cards + floating icon badges (no external image
 * asset exists for this section, unlike the industry illustrations).
 */
export function AboutKeyVisual() {
  return (
    <div className="relative mx-auto flex h-72 w-full max-w-sm items-center justify-center sm:h-80">
      <div className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-br from-accent/25 to-accent-2/25 blur-[70px]" />

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -10 }}
        whileInView={{ opacity: 1, y: 0, rotate: -8 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="absolute h-40 w-52 -translate-x-16 translate-y-6 rounded-2xl border border-border bg-surface/70 shadow-xl backdrop-blur-sm sm:h-44 sm:w-56"
      />
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 8 }}
        whileInView={{ opacity: 1, y: 0, rotate: 6 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
        className="absolute h-40 w-52 translate-x-16 -translate-y-2 rounded-2xl border border-border bg-surface/80 shadow-xl backdrop-blur-sm sm:h-44 sm:w-56"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex h-44 w-56 flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-surface shadow-2xl sm:h-48 sm:w-60"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-accent to-accent-2 text-white shadow-lg">
          <Rocket className="h-7 w-7" />
        </span>
        <div className="text-center">
          <div className="text-h4 font-semibold">Your Roadmap</div>
          <div className="text-caption text-muted">Planned, tracked, delivered</div>
        </div>
      </motion.div>

      <motion.span
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-2 top-2 z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-accent shadow-lg"
      >
        <TrendingUp className="h-5 w-5" />
      </motion.span>
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute -right-2 bottom-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-accent-2 shadow-lg"
      >
        <Target className="h-[18px] w-[18px]" />
      </motion.span>
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute right-6 top-0 z-20 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-accent-soft text-accent shadow-lg"
      >
        <Sparkles className="h-4 w-4" />
      </motion.span>
    </div>
  );
}
