import { IndustryArt } from "@/components/industry/art";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export type HeroProps = {
  name: string;
  title: string;
  intro: string;
  image?: string;
  art?: ReactNode;
  chips?: string[];
  index?: string;
};

/* Illustrations stay compact: they sit beside the copy, never over or under it. */
const ART_SIZE = "mx-auto w-full max-w-[18rem] sm:max-w-[21rem] lg:max-w-[22rem]";

const titleCls =
  "mt-4 text-[clamp(2rem,3.6vw,3.4rem)] font-semibold leading-[1.08] tracking-tight";

function HeroActions({ light = false, center = false }: { light?: boolean; center?: boolean }) {
  return (
    <div className={`mt-8 flex flex-wrap items-center gap-3 ${center ? "justify-center" : ""}`}>
      <Link
        href="/contact"
        className={`group inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
          light
            ? "bg-white text-[#0b1220] hover:bg-white/90"
            : "bg-accent text-white hover:bg-accent-strong"
        }`}
      >
        Discuss your project
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
      <Link
        href="/industries"
        className={`rounded-full border px-5 py-3 text-sm font-medium transition-colors ${
          light
            ? "border-white/25 text-white/80 hover:text-white"
            : "border-border text-muted hover:border-accent hover:text-foreground"
        }`}
      >
        All industries
      </Link>
    </div>
  );
}

function Art({
  image,
  art,
  name,
  className = "",
  priority = true,
}: {
  image?: string;
  art?: ReactNode;
  name: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-linear-to-br from-accent/35 to-accent-2/35 blur-[70px]" />
      <div className="industry-float relative z-10">
        {art ?? (image ? <IndustryArt slug={name} className="max-w-none" /> : null)}
      </div>
    </div>
  );
}

/* 1 — text one side, illustration the other. Optional dotted route in the back. */
export function HeroSplit({
  name,
  title,
  intro,
  image,
  art,
  reverse = false,
  route = false,
}: HeroProps & { reverse?: boolean; route?: boolean }) {
  return (
    <section className="section-hero relative mx-auto max-w-7xl px-6 lg:px-8">
      {route && (
        <svg
          aria-hidden
          viewBox="0 0 1200 520"
          className="pointer-events-none absolute right-0 top-24 -z-0 hidden h-[440px] w-[62%] text-accent/35 lg:block"
          preserveAspectRatio="none"
        >
          <path
            d="M-20 440 C 240 300, 420 500, 640 330 S 1010 110, 1230 210"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 9"
            strokeLinecap="round"
          />
          {[
            [170, 372],
            [640, 330],
            [1010, 158],
          ].map(([x, y]) => (
            <g key={x}>
              <circle cx={x} cy={y} r="14" fill="currentColor" opacity="0.25" />
              <circle cx={x} cy={y} r="5" fill="currentColor" />
            </g>
          ))}
        </svg>
      )}
      <div
        className={`relative grid items-center gap-10 lg:gap-16 ${
          reverse ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"
        }`}
      >
        <Reveal className={reverse ? "lg:order-2" : ""}>
          <span className="eyebrow-badge">{name}</span>
          <h1 className={titleCls}>{title}</h1>
          <p className="mt-4 max-w-xl text-body-lg text-muted">{intro}</p>
          <HeroActions />
        </Reveal>
        <Reveal delay={0.1} className={reverse ? "lg:order-1" : ""}>
          <Art image={image} art={art} name={name} className={ART_SIZE} />
        </Reveal>
      </div>
    </section>
  );
}

/* 2 — a framed "stage": copy on the left, compact illustration on the right with chips around it. */
export function HeroStage({ name, title, intro, image, art, chips = [] }: HeroProps) {
  const spots = [
    "-left-6 top-[2%]",
    "-right-6 top-[18%]",
    "-left-8 top-[44%]",
    "-right-6 top-[60%]",
  ];
  return (
    <section className="section-hero mx-auto max-w-7xl px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-linear-to-br from-accent-soft via-surface to-surface p-8 sm:p-12 lg:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(color-mix(in srgb, var(--accent) 22%, transparent) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse at 80% 40%, black 15%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 80% 40%, black 15%, transparent 70%)",
          }}
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow-badge">{name}</span>
            <h1 className={titleCls}>{title}</h1>
            <p className="mt-4 max-w-xl text-body-lg text-muted">{intro}</p>
            <HeroActions />
          </Reveal>
          <Reveal delay={0.1}>
            <div className={`relative ${ART_SIZE}`}>
              <Art image={image} art={art} name={name} />
              {!art && chips.slice(0, 4).map((chip, i) => (
                <span
                  key={chip}
                  style={{ animationDelay: `${i * 0.8}s` }}
                  className={`industry-float absolute z-20 hidden items-center gap-2 rounded-full border border-border bg-surface/95 px-3.5 py-1.5 text-caption font-medium shadow-lg backdrop-blur xl:inline-flex ${spots[i]}`}
                >
                  <span className="h-2 w-2 rounded-full bg-linear-to-br from-accent to-accent-2" />
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 3 — editorial: index rail above, then copy left and compact illustration right. */
export function HeroEditorial({ name, title, intro, image, art, index = "05", label = "Industry" }: HeroProps & { label?: string }) {
  return (
    <section className="section-hero mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="eyebrow-badge">{name}</span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-caption tabular-nums text-muted">{label} / {index}</span>
          </div>
          <h1 className={titleCls}>{title}</h1>
          <p className="mt-4 max-w-xl border-l-2 border-accent pl-5 text-body-lg text-muted">{intro}</p>
          <HeroActions />
        </Reveal>
        <Reveal delay={0.1}>
          <Art image={image} art={art} name={name} className={ART_SIZE} />
        </Reveal>
      </div>
    </section>
  );
}

/* 4 — deliberately dark banner in both themes, copy in white. */
export function HeroBanner({ name, title, intro, image, art, chips = [] }: HeroProps) {
  return (
    <section className="section-hero mx-auto max-w-7xl px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#070d22] text-white ring-1 ring-white/10">
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent/40 blur-[110px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent-2/35 blur-[110px]" />
        <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.15fr_1fr] lg:p-14 lg:gap-16">
          <Reveal>
            <span className="inline-flex rounded-full border border-white/20 px-4 py-1.5 text-eyebrow font-medium uppercase tracking-[0.25em] text-white/80">
              {name}
            </span>
            <h1 className={`${titleCls} text-white`}>{title}</h1>
            <p className="mt-4 max-w-xl text-body-lg text-white/70">{intro}</p>
            {chips.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full bg-white/10 px-3.5 py-1.5 text-caption text-white/85 backdrop-blur"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            )}
            <HeroActions light />
          </Reveal>
          <Reveal delay={0.1}>
            <Art image={image} art={art} name={name} className={ART_SIZE} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 5 — copy left, compact illustration right, ringed like an orbit. */
export function HeroOrbit({ name, title, intro, image, art }: HeroProps) {
  return (
    <section className="section-hero relative mx-auto max-w-7xl overflow-x-clip px-6 lg:px-8">
      <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow-badge">{name}</span>
          <h1 className={titleCls}>{title}</h1>
          <p className="mt-4 max-w-xl text-body-lg text-muted">{intro}</p>
          <HeroActions />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-[26rem]">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-[6%] rounded-full border border-accent/20"
            >
              <div className="absolute inset-[10%] rounded-full border border-accent/15" />
              <div className="absolute inset-[22%] rounded-full border border-dashed border-accent-2/25" />
              <span className="absolute left-[10%] top-[16%] h-3 w-3 rounded-full bg-accent shadow-[0_0_18px_var(--accent)]" />
              <span className="absolute bottom-[14%] right-[8%] h-2.5 w-2.5 rounded-full bg-accent-2 shadow-[0_0_16px_var(--accent-2)]" />
            </div>
            <Art image={image} art={art} name={name} className={`relative ${ART_SIZE}`} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
