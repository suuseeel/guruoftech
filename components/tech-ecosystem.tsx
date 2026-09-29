"use client";

import { useState, type ReactNode } from "react";
import { useMotionOk } from "@/components/use-motion-ok";

type Category = {
  id: string;
  label: string;
  icon: ReactNode;
  chips: string[];
  area: "top" | "right" | "bottom" | "left";
};

const areaToGrid: Record<Category["area"], string> = {
  top: "col-start-2 row-start-1",
  right: "col-start-3 row-start-2",
  bottom: "col-start-2 row-start-3",
  left: "col-start-1 row-start-2",
};

const lineCoords: Record<Category["area"], string> = {
  top: "M150,150 L150,50",
  right: "M150,150 L250,150",
  bottom: "M150,150 L150,250",
  left: "M150,150 L50,150",
};

export function TechEcosystem({ categories }: { categories: Category[] }) {
  const [active, setActive] = useState<string | null>(null);
  const motionOk = useMotionOk();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 300 300" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
        {categories.map((c) => (
          <path
            key={c.id}
            d={lineCoords[c.area]}
            fill="none"
            strokeWidth={active === c.id ? 2 : 1.2}
            className={`transition-all duration-300 ${
              active === c.id ? "text-accent" : "text-border"
            }`}
            stroke="currentColor"
          />
        ))}
        {motionOk &&
          categories.map((c) => (
            <circle key={`${c.id}-dot`} r="3" fill="currentColor" className="text-accent">
              <animateMotion dur="3.5s" repeatCount="indefinite" path={lineCoords[c.area]} />
            </circle>
          ))}
      </svg>

      <div className="relative grid h-full grid-cols-3 grid-rows-3 items-center justify-items-center">
        <div className="col-start-2 row-start-2 flex flex-col items-center justify-center">
          <div className="animate-node-pulse flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-accent to-accent-2 text-lg font-bold text-white shadow-lg sm:h-20 sm:w-20">
            G
          </div>
          <span className="mt-2 text-[11px] font-medium text-muted">GuruOfTech</span>
        </div>

        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onMouseEnter={() => setActive(c.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(c.id)}
            onBlur={() => setActive(null)}
            className={`${areaToGrid[c.area]} panel flex w-[92px] flex-col items-center gap-1 rounded-xl px-2 py-2.5 text-center transition-all duration-300 sm:w-28 ${
              active === c.id ? "-translate-y-0.5 border-accent shadow-lg shadow-accent/10" : ""
            }`}
          >
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-lg bg-accent-soft text-accent transition-transform duration-300 ${
                active === c.id ? "scale-110" : ""
              }`}
            >
              {c.icon}
            </span>
            <span className="text-[11px] font-semibold">{c.label}</span>
            {/* <span className="text-[10px] leading-tight text-muted">{c.chips.join(" · ")}</span> */}
          </button>
        ))}
      </div>
    </div>
  );
}
