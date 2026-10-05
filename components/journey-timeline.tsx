"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";

type Stage = {
  step: string;
  title: string;
  desc: string;
  deliverables: [string, string];
};

export function JourneyTimeline({ stages }: { stages: Stage[] }) {
  return (
    <div className="relative">
      <motion.div
        className="absolute left-6 top-6 hidden w-px origin-top bg-border lg:left-[12.5%] lg:right-[12.5%] lg:top-9 lg:h-px lg:w-auto lg:origin-left lg:block"
        style={{ bottom: "0.75rem" }}
        initial={{ scaleY: 0, scaleX: 0 }}
        whileInView={{ scaleY: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute left-6 top-6 bottom-3 w-px origin-top bg-border lg:hidden"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />

      <div className="grid gap-10 lg:grid-cols-4 lg:gap-16">
        {stages.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.12}>
            <div className="flex gap-4 lg:flex-col lg:items-center lg:text-center">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold text-accent">
                {s.step}
              </span>
              <div className="lg:mt-2">
                <h3 className="text-h4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5 lg:justify-center">
                  {s.deliverables.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
