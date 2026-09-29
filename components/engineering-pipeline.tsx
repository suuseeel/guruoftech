"use client";

import type { ReactNode } from "react";
import { useMotionOk } from "@/components/use-motion-ok";

type Stage = { label: string; icon: ReactNode };

export function EngineeringPipeline({ stages }: { stages: Stage[] }) {
  const motionOk = useMotionOk();
  const path = "M0,10 L100,10";

  return (
    <div className="relative">
      {/* Desktop: horizontal flow with traveling particles */}
      <div className="relative hidden lg:block">
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-6 top-6 h-1 w-[calc(100%-3rem)]" aria-hidden>
          <path d={path} stroke="currentColor" className="text-border" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
          {motionOk &&
            [0, 1.3, 2.6].map((delay, i) => (
              <circle key={i} r="1.4" fill="currentColor" className="text-accent">
                <animateMotion dur="4s" begin={`${delay}s`} repeatCount="indefinite" path={path} />
              </circle>
            ))}
        </svg>

        <div className="relative z-10 flex justify-between px-6">
          {stages.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-accent">
                {s.icon}
              </span>
              <span className="text-xs font-medium text-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="relative flex flex-col gap-6 lg:hidden">
        <div className="absolute bottom-3 left-6 top-6 w-px bg-border" aria-hidden />
        {stages.map((s) => (
          <div key={s.label} className="relative z-10 flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-accent">
              {s.icon}
            </span>
            <span className="text-sm font-medium">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
