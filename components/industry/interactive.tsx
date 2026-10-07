"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import type { ClientOffering as Offering } from "./serialize";

/* Vertical tab list on the left, one big feature panel on the right. */
export function OfferTabs({ offerings, heading }: { offerings: Offering[]; heading: string }) {
  const [active, setActive] = useState(0);
  const current = offerings[active];

  return (
    <section className="section mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-h2 max-w-xl font-semibold tracking-tight">{heading}</h2>
      <div className="mt-12 grid gap-6 lg:grid-cols-[340px_1fr]">
        <div role="tablist" aria-label={heading} className="flex min-w-0 gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
          {offerings.map((item, i) => {
            const on = i === active;
            return (
              <button
                key={item.title}
                role="tab"
                aria-selected={on}
                type="button"
                onClick={() => setActive(i)}
                className={`group flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-all lg:shrink ${
                  on
                    ? "border-accent bg-accent-soft shadow-sm"
                    : "border-border bg-surface hover:border-accent/50"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    on ? "bg-accent text-white" : "bg-surface-muted text-muted group-hover:text-accent"
                  }`}
                >
                  <span className="[&>svg]:h-5 [&>svg]:w-5">{item.iconNode}</span>
                </span>
                <span className="whitespace-nowrap text-sm font-semibold lg:whitespace-normal">{item.title}</span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          className="relative min-h-[300px] overflow-hidden rounded-3xl border border-border bg-linear-to-br from-accent-soft via-surface to-surface p-8 sm:p-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-xl"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-accent to-accent-2 text-white shadow-lg">
                <span className="[&>svg]:h-8 [&>svg]:w-8">{current.iconNode}</span>
              </span>
              <h3 className="text-h3 mt-4 font-semibold">{current.title}</h3>
              <p className="mt-4 text-body-lg text-muted">{current.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* Heading left, single-open accordion right. */
export function OfferAccordion({ offerings, heading }: { offerings: Offering[]; heading: string }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="section mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-accent">Solutions</span>
          <h2 className="text-h2 mt-4 font-semibold tracking-tight">{heading}</h2>
          <p className="mt-4 max-w-sm text-body-sm text-muted">
            Open any item to see how we approach it.
          </p>
        </div>

        <ul className="divide-y divide-border rounded-3xl border border-border bg-surface">
          {offerings.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.title}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isOpen ? "bg-accent text-white" : "bg-accent-soft text-accent"
                    }`}
                  >
                    <span className="[&>svg]:h-5 [&>svg]:w-5">{item.iconNode}</span>
                  </span>
                  <span className="text-h4 font-semibold">{item.title}</span>
                  <span className="ml-auto text-muted">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pl-[5.25rem] text-body-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
