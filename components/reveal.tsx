"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/*
 * Kept deliberately light: it starts before the element reaches the
 * viewport (400px early), moves only 12px, runs 0.25s, and caps any
 * stagger delay, so fast scrolling never lands on blank space.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "0px 0px 400px 0px" }}
      transition={{ duration: 0.25, delay: Math.min(delay, 0.12), ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
