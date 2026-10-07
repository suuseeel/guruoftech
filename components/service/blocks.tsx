import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TechIcon } from "./tech-icons";
import type { Offering } from "@/components/industry/types";

const eyebrowCls = "text-eyebrow font-semibold uppercase tracking-[0.2em] text-accent";

function Wrap({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`section mx-auto max-w-7xl px-6 lg:px-8 ${className}`}>{children}</section>;
}

/* ------------------------------------------------------------------ */
/* Offerings                                                           */
/* ------------------------------------------------------------------ */

/* Dense two-column index — copes with nine items without turning into a wall of cards. */
export function OfferDense({ offerings, heading }: { offerings: Offering[]; heading: string }) {
  return (
    <Wrap>
      <Reveal className="max-w-2xl">
        <span className={eyebrowCls}>What we offer</span>
        <h2 className="text-h2 mt-4 font-semibold tracking-tight">{heading}</h2>
      </Reveal>
      <div className="mt-12 grid gap-x-14 md:grid-cols-2">
        {offerings.map((o, i) => (
          <Reveal key={o.title} delay={(i % 2) * 0.05}>
            <div className="group flex gap-5 border-t border-border py-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <o.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-h4 font-semibold">{o.title}</h3>
                <p className="mt-2 text-body-sm text-muted">{o.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

/* Zig-zag rows: a gradient tile on one side, copy on the other, alternating. */
export function OfferZigzag({ offerings }: { offerings: Offering[] }) {
  return (
    <Wrap>
      <div className="space-y-6">
        {offerings.map((o, i) => (
          <Reveal key={o.title}>
            <div
              className={`grid items-center gap-6 rounded-3xl border border-border bg-surface p-6 ${
                i % 2 ? "md:grid-cols-[1fr_220px]" : "md:grid-cols-[220px_1fr]"
              }`}
            >
              <div
                className={`relative flex h-40 w-full items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-accent to-accent-2 text-white md:w-[220px] ${
                  i % 2 ? "md:order-2" : ""
                }`}
              >
                <o.icon className="relative h-14 w-14" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-h3 font-semibold">{o.title}</h3>
                <p className="mt-2 text-body text-muted">{o.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

/* ------------------------------------------------------------------ */
/* "What makes us your best choice" — three treatments                 */
/* ------------------------------------------------------------------ */

export function WhyChecklist({ title, points }: { title: string; points: string[] }) {
  return (
    <Wrap>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <Reveal className="self-start lg:sticky lg:top-28">
          <span className={eyebrowCls}>Why GuruOfTech</span>
          <h2 className="text-h2 mt-4 font-semibold tracking-tight">{title}</h2>
        </Reveal>
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p} delay={(i % 2) * 0.05}>
              <li className="flex gap-3 border-t border-border py-6">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-body-sm text-foreground/85">{p}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Wrap>
  );
}

export function WhyNumerals({ title, points }: { title: string; points: string[] }) {
  return (
    <Wrap>
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className={eyebrowCls}>Why GuruOfTech</span>
        <h2 className="text-h2 mt-4 font-semibold tracking-tight">{title}</h2>
      </Reveal>
      <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p, i) => (
          <Reveal key={p} delay={(i % 3) * 0.05}>
            <div className="group">
              <span className="block text-[4.5rem] font-bold leading-none text-transparent transition-colors [-webkit-text-stroke:1.5px_color-mix(in_srgb,var(--accent)_45%,transparent)] group-hover:[-webkit-text-stroke-color:var(--accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 border-t border-border pt-4 text-body-sm text-muted">{p}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

export function WhyStrip({ title, points }: { title: string; points: string[] }) {
  return (
    <Wrap>
      <Reveal>
        <div className="rounded-[2rem] bg-surface-muted/70 p-8 sm:p-12">
          <h2 className="text-h3 max-w-xl font-semibold">{title}</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2.5 rounded-full border border-border bg-surface py-2 pl-2 pr-5 text-body-sm"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Wrap>
  );
}

/* ------------------------------------------------------------------ */
/* Five-step hiring / engagement process                               */
/* ------------------------------------------------------------------ */

export function ProcessFive({ title, desc, steps }: { title: string; desc?: string; steps: string[] }) {
  return (
    <section className="border-y border-border bg-surface-muted/50">
      <div className="section mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className={eyebrowCls}>How to get started</span>
          <h2 className="text-h2 mt-4 font-semibold tracking-tight">{title}</h2>
          {desc && <p className="mt-4 text-body text-muted">{desc}</p>}
        </Reveal>
        <ol className="relative mt-12 grid gap-6 md:grid-cols-5">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-1 rounded-full bg-linear-to-r from-accent/10 via-accent to-accent-2 md:block"
          />
          {steps.map((s, i) => (
            <Reveal key={s} delay={i * 0.06}>
              <li className="relative">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-accent text-sm font-semibold text-white shadow-md">
                  {i + 1}
                </span>
                <div className="mt-5 rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-h4 font-semibold leading-snug">{s}</h3>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Technology tiles, duo panels, provider trio                         */
/* ------------------------------------------------------------------ */

export function TechTiles({
  items,
  heading,
  cols = "lg:grid-cols-4",
}: {
  items: string[];
  heading: string;
  cols?: string;
}) {
  return (
    <Wrap>
      <Reveal className="max-w-2xl">
        <span className={eyebrowCls}>The stack</span>
        <h2 className="text-h2 mt-4 font-semibold tracking-tight">{heading}</h2>
      </Reveal>
      <div className={`mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 ${cols}`}>
        {items.map((n, i) => (
          <Reveal key={n} delay={(i % 4) * 0.04}>
            <div className="group flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-surface px-4 py-8 text-center transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10">
              <TechIcon name={n} className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-semibold">{n}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

export type DuoGroup = { title: string; icon: string; blurb?: string; cards: { title: string; desc: string }[] };

export function TechDuo({ groups }: { groups: DuoGroup[] }) {
  return (
    <Wrap>
      <div className="grid gap-6 lg:grid-cols-2">
        {groups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.08}>
            <div className="h-full rounded-3xl border border-border bg-surface p-6">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft">
                  <TechIcon name={g.icon} className="h-8 w-8" />
                </span>
                <h2 className="text-h3 font-semibold">{g.title}</h2>
              </div>
              {g.blurb && <p className="mt-4 text-body-sm text-muted">{g.blurb}</p>}
              <ul className="mt-6 divide-y divide-border">
                {g.cards.map((c) => (
                  <li key={c.title} className="py-4">
                    <h3 className="font-semibold">{c.title}</h3>
                    <p className="mt-1 text-body-sm text-muted">{c.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

export function ProviderTrio({ providers }: { providers: { name: string; icon: string; desc: string }[] }) {
  return (
    <Wrap>
      <div className="grid gap-6 md:grid-cols-3">
        {providers.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-linear-to-b from-accent-soft to-surface text-center p-6">
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-border bg-surface shadow-md">
                <TechIcon name={p.icon} className="h-10 w-10" />
              </span>
              <h3 className="text-h3 mt-4 font-semibold">{p.name}</h3>
              <p className="mt-2 text-body-sm text-muted">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

export function AlsoCovers({ label, items }: { label: string; items: string[] }) {
  return (
    <Wrap>
      <Reveal className="flex flex-wrap items-center gap-3">
        <span className="text-caption font-semibold uppercase tracking-widest text-muted">{label}</span>
        {items.map((t) => (
          <span key={t} className="rounded-full border border-border bg-surface px-4 py-1.5 text-body-sm">
            {t}
          </span>
        ))}
      </Reveal>
    </Wrap>
  );
}

export function WhyCards({ title, points }: { title: string; points: string[] }) {
  return (
    <Wrap>
      <Reveal className="max-w-2xl">
        <span className={eyebrowCls}>Why GuruOfTech</span>
        <h2 className="text-h2 mt-4 font-semibold tracking-tight">{title}</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p, i) => (
          <Reveal key={p} delay={(i % 3) * 0.05}>
            <div className="relative h-full rounded-2xl border border-border bg-surface p-6 pr-14">
              <span className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Check className="h-4 w-4" />
              </span>
              <p className="text-body-sm text-foreground/85">{p}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

export function RelatedLinks({
  heading,
  items,
}: {
  heading: string;
  items: { title: string; short: string; href: string; icon: React.ComponentType<{ className?: string }> }[];
}) {
  return (
    <Wrap>
      <h2 className="mb-6 text-h3 font-semibold">{heading}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.href} delay={i * 0.05} className="min-w-0">
            <Link
              href={it.href}
              className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-surface transition-colors hover:border-accent p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <it.icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold">{it.title}</span>
                <span className="mt-1 line-clamp-2 block text-caption text-muted">{it.short}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}
