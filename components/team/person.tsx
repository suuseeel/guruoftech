"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, Code2, Crown, Megaphone, Palette, type LucideIcon } from "lucide-react";
import { depts, type Dept, type Person } from "./data";

const deptIcon: Record<Dept, LucideIcon> = {
  leadership: Crown,
  management: Briefcase,
  engineering: Code2,
  design: Palette,
  growth: Megaphone,
};

const tint = (c: string, p: number) => `color-mix(in srgb, ${c} ${p}%, transparent)`;
const initials = (n: string) => n.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

/* An arch-shaped portrait. Tap or hover to reveal what the person does. */
export function Arch({ p, size = "md" }: { p: Person; size?: "md" | "lg" }) {
  const [open, setOpen] = useState(false);
  const d = depts.find((x) => x.id === p.dept)!;
  const Icon = deptIcon[p.dept];

  return (
    <div className="group w-full text-center" style={{ "--c": d.color } as React.CSSProperties}>
      <button
        type="button"
        aria-expanded={open}
        aria-label={`${p.name}, ${p.role}. Show details`}
        onClick={() => setOpen((v) => !v)}
        className="relative block w-full cursor-pointer rounded-t-[999px] rounded-b-[1.75rem] p-[3px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-18px_var(--c)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        style={{ background: `linear-gradient(180deg, ${d.color}, ${tint(d.color, 10)} 70%)` }}
      >
        <div
          className={`relative overflow-hidden rounded-t-[999px] rounded-b-[1.6rem] bg-[#0b1226] ${size === "lg" ? "aspect-[3/3.9]" : "aspect-[3/4]"}`}
        >
          {/* photo or placeholder */}
          {p.photo ? (
            <Image
              src={p.photo}
              alt={`${p.name}, ${p.role}`}
              fill
              sizes="(min-width:1024px) 260px, (min-width:640px) 30vw, 45vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div
              className="flex h-full w-full flex-col items-center justify-center gap-3"
              style={{ background: `radial-gradient(circle at 50% 30%, ${tint(d.color, 38)}, ${tint(d.color, 6)} 70%)` }}
            >
              <span
                className="text-[clamp(3rem,7vw,4.5rem)] font-bold leading-none text-transparent"
                style={{ WebkitTextStroke: `2px ${d.color}` }}
              >
                {initials(p.name)}
              </span>
              <Icon className="h-6 w-6" style={{ color: d.color }} />
            </div>
          )}

          {/* number */}
          <span className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-black/50 px-2.5 py-0.5 text-caption font-semibold tabular-nums text-white backdrop-blur">
            {p.id}
          </span>

          {/* reveal */}
          <div
            className={`absolute inset-x-0 bottom-0 bg-linear-to-t from-[#070d22] via-[#070d22]/95 to-transparent px-4 pb-4 pt-14 text-left transition-transform duration-500 ${
              open ? "translate-y-0" : "translate-y-[102%] group-hover:translate-y-0"
            }`}
          >
            <p className="text-body-sm leading-snug text-white/90">{p.does}</p>
          </div>
        </div>
      </button>

      <h3 className={`mt-5 font-semibold text-white ${size === "lg" ? "text-h3" : "text-h4"}`}>{p.name}</h3>
      <p className="mt-0.5 text-body-sm font-medium" style={{ color: d.color }}>
        {p.role}
      </p>
      <ul className="mt-3 flex flex-wrap justify-center gap-1.5">
        {p.skills.map((s) => (
          <li
            key={s}
            className="rounded-full border px-2.5 py-0.5 text-caption text-white/80"
            style={{ borderColor: tint(d.color, 45), background: tint(d.color, 10) }}
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
