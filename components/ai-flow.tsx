"use client";

import type { ReactNode } from "react";
import { useMotionOk } from "@/components/use-motion-ok";

type Node = { label: string; icon: ReactNode };

export function AIFlow({ nodes }: { nodes: Node[] }) {
  const motionOk = useMotionOk();
  const path = "M2,20 C 20,2 35,38 50,20 S 80,2 98,20";

  return (
    <div className="relative py-4">
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-1/2 h-16 w-full -translate-y-1/2" aria-hidden>
        <path d={path} stroke="currentColor" className="text-border" strokeWidth="0.6" fill="none" vectorEffect="non-scaling-stroke" />
        {motionOk && (
          <circle r="1.6" fill="currentColor" className="text-accent">
            <animateMotion dur="5s" repeatCount="indefinite" path={path} />
          </circle>
        )}
      </svg>

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-6 sm:flex-nowrap">
        {nodes.map((n, i) => (
          <div
            key={n.label}
            className={`flex flex-col items-center gap-2 ${i % 2 === 1 ? "sm:translate-y-6" : ""}`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface text-accent shadow-sm">
              {n.icon}
            </span>
            <span className="text-xs font-medium text-muted">{n.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
