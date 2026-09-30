"use client";

import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useBrand } from "@/components/brand/context";
import { brandText, DEFAULT_BRAND_KEY, type Brand } from "@/lib/brand";

/*
 * Recursively swaps the default brand's name inside a not-yet-rendered
 * React element tree. This runs as a normal part of render (server AND
 * client), so — unlike a DOM patch — it's already correct in the HTML the
 * server sends, with no flash and no separate pass needed. It only ever
 * touches text *children*, never other props (classNames, hrefs, alt text
 * stay exactly as authored elsewhere).
 */
function rebrand(node: ReactNode, brand: Brand): ReactNode {
  if (typeof node === "string") return brandText(node, brand);
  if (Array.isArray(node)) return Children.map(node, (child) => rebrand(child, brand));
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode; dangerouslySetInnerHTML?: unknown };
    if (props.dangerouslySetInnerHTML || props.children === undefined) return node;
    return cloneElement(node, undefined, rebrand(props.children, brand));
  }
  return node;
}

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
  const brand = useBrand();
  const content = brand.key === DEFAULT_BRAND_KEY ? children : rebrand(children, brand);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "0px 0px 400px 0px" }}
      transition={{ duration: 0.25, delay: Math.min(delay, 0.12), ease: "easeOut" }}
      className={className}
    >
      {content}
    </motion.div>
  );
}
