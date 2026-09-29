"use client";

import { useState, type ReactNode } from "react";

type Label = { name: string; icon: ReactNode };

export function ProductShowcase({ labels }: { labels: Label[] }) {
  const [active, setActive] = useState<number | null>(null);
  const angleStep = 360 / labels.length;

  const positioned = labels.map((label, i) => {
    const angle = ((i * angleStep - 90) * Math.PI) / 180;
    const x = 50 + 42 * Math.cos(angle);
    const y = 50 + 42 * Math.sin(angle);
    return { ...label, x, y };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <svg viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
        {positioned.map((p, i) => (
          <line
            key={p.name}
            x1={50}
            y1={50}
            x2={p.x}
            y2={p.y}
            vectorEffect="non-scaling-stroke"
            strokeWidth={active === i ? 1.6 : 1}
            className={`transition-colors duration-300 ${active === i ? "text-accent" : "text-border"}`}
            stroke="currentColor"
          />
        ))}
      </svg>

      {/* Center dashboard mockup */}
      <div className="absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-surface p-3 shadow-xl shadow-accent/5 sm:p-4">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-2 w-3/4 rounded-full bg-accent-soft" />
          <div className="h-2 w-1/2 rounded-full bg-accent-soft" />
        </div>
        <div className="mt-4 flex h-12 items-end gap-1.5 sm:h-16">
          {[40, 70, 45, 90, 60].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-linear-to-t from-accent to-accent-2 opacity-80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {positioned.map((p, i) => (
        <button
          key={p.name}
          type="button"
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(i)}
          onBlur={() => setActive(null)}
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          className={`panel absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
            active === i ? "-translate-y-[calc(50%+2px)] border-accent text-accent shadow-md" : "text-foreground/80"
          }`}
        >
          <span className="text-accent">{p.icon}</span>
          {p.name}
        </button>
      ))}
    </div>
  );
}
