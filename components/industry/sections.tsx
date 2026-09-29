import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { industriesMeta, industryStats } from "./data";
import { IndustryArt } from "./art";
import type { Offering, Step } from "./types";

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

const eyebrowCls = "text-eyebrow font-semibold uppercase tracking-[0.2em] text-accent";

function Wrap({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`section mx-auto max-w-7xl px-6 lg:px-8 ${className}`}>{children}</section>;
}

/* ------------------------------------------------------------------ */
/* Body copy — six ways to set the same kind of text                   */
/* ------------------------------------------------------------------ */

type BodyProps = { paragraphs: string[] };

export function BodySidebar({ paragraphs, label = "Overview" }: BodyProps & { label?: string }) {
  return (
    <Wrap>
      <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div className="self-start lg:sticky lg:top-28">
          <span className={eyebrowCls}>{label}</span>
          <div className="mt-3 h-px w-12 bg-accent" />
        </div>
        <Reveal className="max-w-3xl space-y-5 text-body text-muted">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </div>
    </Wrap>
  );
}

export function BodyDropcap({ paragraphs }: BodyProps) {
  return (
    <Wrap>
      <Reveal className="gap-12 space-y-5 text-body text-muted lg:columns-2">
        {paragraphs.map((p, i) => (
          <p
            key={p}
            className={
              i === 0
                ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-accent"
                : ""
            }
          >
            {p}
          </p>
        ))}
      </Reveal>
    </Wrap>
  );
}

export function BodyPullQuote({ paragraphs }: BodyProps) {
  const [first, ...rest] = paragraphs;
  const cut = first.indexOf(". ");
  const quote = cut > 0 ? first.slice(0, cut + 1) : first;
  const remainder = cut > 0 ? first.slice(cut + 2) : "";
  const columns = [remainder, ...rest].filter(Boolean);
  return (
    <Wrap>
      <Reveal>
        <blockquote className="relative max-w-4xl pl-8 text-h3 font-medium leading-snug">
          <span className="absolute left-0 top-0 h-full w-1 rounded-full bg-linear-to-b from-accent to-accent-2" />
          {quote}
        </blockquote>
      </Reveal>
      <Reveal delay={0.05} className="mt-12 gap-12 space-y-5 text-body text-muted lg:columns-2">
        {columns.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Reveal>
    </Wrap>
  );
}

export function BodyLead({ paragraphs }: BodyProps) {
  const [first, ...rest] = paragraphs;
  return (
    <Wrap>
      <Reveal className="max-w-4xl">
        <p className="text-[clamp(1.25rem,2vw,1.75rem)] leading-relaxed text-foreground/90">{first}</p>
      </Reveal>
      {rest.length > 0 && (
        <Reveal
          delay={0.05}
          className="mt-12 grid gap-10 border-t border-border pt-8 text-body-sm text-muted md:grid-cols-2"
        >
          {rest.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      )}
    </Wrap>
  );
}

export function BodyNumbered({ paragraphs }: BodyProps) {
  return (
    <Wrap>
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {paragraphs.map((p, i) => (
          <Reveal key={p} delay={i * 0.05} className="border-t border-border pt-5">
            <span className="text-caption font-semibold tabular-nums text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 text-body-sm text-muted">{p}</p>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

export function BodyCard({ paragraphs }: BodyProps) {
  return (
    <Wrap>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-12">
          <span className="absolute inset-y-0 left-0 w-1.5 bg-linear-to-b from-accent to-accent-2" />
          <div className="max-w-3xl space-y-5 text-body text-muted">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </Wrap>
  );
}

export function BodyTwoCol({ paragraphs }: BodyProps) {
  const mid = Math.ceil(paragraphs.length / 2);
  const cols = [paragraphs.slice(0, mid), paragraphs.slice(mid)];
  return (
    <Wrap>
      <Reveal className="grid gap-10 border-y border-border py-10 md:grid-cols-2 md:divide-x md:divide-border">
        {cols.map((col, i) => (
          <div key={i} className={`space-y-5 text-body-sm text-muted ${i === 1 ? "md:pl-10" : ""}`}>
            {col.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        ))}
      </Reveal>
    </Wrap>
  );
}

/* ------------------------------------------------------------------ */
/* Offerings                                                           */
/* ------------------------------------------------------------------ */

type OfferProps = { offerings: Offering[] };

/* Spec-sheet rows: numeral, title, description, icon. */
export function OfferRows({ offerings }: OfferProps) {
  return (
    <Wrap>
      <ul className="divide-y divide-border border-y border-border">
        {offerings.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.04}>
            <li className="group grid items-start gap-6 px-2 py-8 transition-colors hover:bg-accent-soft/60 md:grid-cols-[80px_1fr_1.4fr_48px] md:gap-8 md:px-6">
              <span className="text-h3 font-light tabular-nums text-muted/60 transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-h4 font-semibold">{item.title}</h2>
              <p className="text-body-sm text-muted">{item.desc}</p>
              <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-border text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white md:flex">
                <item.icon className="h-5 w-5" />
              </span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Wrap>
  );
}

/* Bento: the first offering leads, three supporting tiles beside it. */
export function OfferBento({ offerings }: OfferProps) {
  const [lead, ...rest] = offerings;
  return (
    <Wrap>
      <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-3">
        <Reveal className="lg:col-span-2 lg:row-span-3">
          <div className="relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl bg-linear-to-br from-accent to-accent-2 text-white p-8 sm:p-12">
            <lead.icon className="absolute -right-6 -top-6 h-56 w-56 text-white/10" strokeWidth={1} />
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <lead.icon className="h-7 w-7" />
            </span>
            <h2 className="text-h2 mt-4 font-semibold">{lead.title}</h2>
            <p className="mt-4 max-w-lg text-body-lg text-white/80">{lead.desc}</p>
          </div>
        </Reveal>
        {rest.map((item, i) => (
          <Reveal key={item.title} delay={0.05 * (i + 1)}>
            <div className="flex h-full gap-4 rounded-2xl border border-border bg-surface transition-colors hover:border-accent p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-h4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-body-sm text-muted">{item.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

/* 2×2 with oversized outlined numerals bleeding off each card. */
export function OfferNumerals({ offerings }: OfferProps) {
  return (
    <Wrap>
      <div className="grid gap-6 md:grid-cols-2">
        {offerings.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface pb-10 p-6">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 select-none text-[9rem] font-bold leading-none text-transparent transition-colors [-webkit-text-stroke:1.5px_color-mix(in_srgb,var(--accent)_35%,transparent)] group-hover:[-webkit-text-stroke-color:var(--accent)]"
              >
                {i + 1}
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <item.icon className="h-6 w-6" />
              </span>
              <h2 className="text-h4 relative mt-16 font-semibold">{item.title}</h2>
              <p className="relative mt-2 max-w-md text-body-sm text-muted">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

/* A road with four stops: a dashed line on top, each card hanging from its own node. */
export function OfferRoute({ offerings }: OfferProps) {
  return (
    <Wrap>
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-2.5 hidden border-t-2 border-dashed border-accent/40 lg:block"
        />
        <div className="grid gap-6 lg:grid-cols-4 lg:gap-5">
          {offerings.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="flex flex-col">
              <span
                aria-hidden
                className="relative z-10 hidden h-5 w-5 self-center rounded-full border-4 border-background bg-accent shadow-[0_0_0_6px_color-mix(in_srgb,var(--accent)_20%,transparent)] lg:block"
              />
              <span aria-hidden className="mx-auto hidden h-8 w-px bg-accent/40 lg:block" />
              <div className="flex-1 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="text-caption font-semibold tabular-nums text-muted">
                    Stop {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="text-h4 mt-4 font-semibold">{item.title}</h2>
                <p className="mt-2 text-body-sm text-muted">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

/* Two columns, the right one dropped lower so the grid reads like a masonry board. */
export function OfferStagger({ offerings }: OfferProps) {
  return (
    <Wrap>
      <div className="grid gap-6 md:grid-cols-2">
        {offerings.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05} className={i % 2 === 1 ? "md:mt-14" : ""}>
            <div className="flex h-full flex-col rounded-[1.75rem] border border-border bg-linear-to-br from-surface to-accent-soft/60 p-6">
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-accent to-accent-2 text-white shadow-lg ${
                  i % 2 === 0 ? "-rotate-6" : "rotate-6"
                }`}
              >
                <item.icon className="h-7 w-7" />
              </span>
              <h2 className="text-h3 mt-4 font-semibold">{item.title}</h2>
              <p className="mt-2 text-body-sm text-muted">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

/* ------------------------------------------------------------------ */
/* Stats                                                               */
/* ------------------------------------------------------------------ */

export function StatsStrip() {
  return (
    <Wrap>
      <Reveal>
        <dl className="grid grid-cols-2 divide-border border-y border-border lg:grid-cols-4 lg:divide-x">
          {industryStats.map((s) => (
            <div key={s.label} className="px-6 py-8 first:pl-0">
              <dd className="text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-none tracking-tight">{s.value}</dd>
              <dt className="mt-2 text-caption uppercase tracking-widest text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </Wrap>
  );
}

export function StatsGradient() {
  return (
    <Wrap>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-accent to-accent-2 text-white p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-white/10" />
          <dl className="relative grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-16">
            {industryStats.map((s) => (
              <div key={s.label}>
                <dd className="text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-none">{s.value}</dd>
                <dt className="mt-3 text-body-sm text-white/80">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Wrap>
  );
}

export function StatsOutline() {
  return (
    <Wrap>
      <Reveal>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {industryStats.map((s) => (
            <div key={s.label} className="group">
              <dd className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-none tracking-tight text-transparent transition-colors [-webkit-text-stroke:1.5px_var(--accent)] group-hover:text-accent">
                {s.value}
              </dd>
              <dt className="mt-3 border-t border-border pt-3 text-caption uppercase tracking-widest text-muted">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </Wrap>
  );
}

export function StatsBand() {
  return (
    <section className="bg-foreground text-background">
      <div className="section mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-16">
          {industryStats.map((s) => (
            <div key={s.label} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <dd className="text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-none">{s.value}</dd>
              <dt className="text-caption uppercase tracking-widest opacity-70">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function StatsCircles() {
  return (
    <Wrap>
      <Reveal>
        <dl className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-16">
          {industryStats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <dd className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-accent/30 bg-accent-soft text-2xl font-semibold text-accent shadow-[0_0_0_10px_color-mix(in_srgb,var(--accent)_8%,transparent)] sm:h-36 sm:w-36 sm:text-3xl">
                {s.value}
              </dd>
              <dt className="mt-5 text-caption uppercase tracking-widest text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </Wrap>
  );
}

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

type ProcessProps = { title: string; desc?: string; steps: Step[] };

function ProcessHead({ title, desc, center = false }: { title: string; desc?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className={eyebrowCls}>Our Methodology</span>
      <h2 className="text-h2 mt-4 font-semibold tracking-tight">{title}</h2>
      {desc && <p className="mt-4 text-body-lg text-muted">{desc}</p>}
    </div>
  );
}

/* Numbered nodes on one line, bullet lists hanging below. */
export function ProcessStepper({ title, desc, steps }: ProcessProps) {
  return (
    <section className="border-y border-border bg-surface-muted/50">
      <div className="section mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <ProcessHead title={title} desc={desc} center />
        </Reveal>
        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:gap-16">
          <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-background text-sm font-semibold text-accent">
                {i + 1}
              </span>
              <h3 className="text-h4 mt-4 font-semibold">{s.title}</h3>
              {s.items && (
                <ul className="mt-3 space-y-2 text-body-sm text-muted">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Left-hand heading, right-hand vertical timeline. */
export function ProcessTimeline({ title, desc, steps }: ProcessProps) {
  return (
    <Wrap>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <ProcessHead title={title} desc={desc} />
        </div>
        <ol className="relative space-y-10 border-l-2 border-border pl-8">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <li className="relative">
                <span className="absolute -left-[2.6rem] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white ring-8 ring-background">
                  {i + 1}
                </span>
                <h3 className="text-h4 font-semibold">{s.title}</h3>
                {s.items && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-body-sm text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Wrap>
  );
}

/* Chevron ribbon on top, the detail lists underneath each segment. */
export function ProcessChevrons({ title, desc, steps }: ProcessProps) {
  const clip = "polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%)";
  return (
    <section className="border-y border-border bg-surface-muted/50">
      <div className="section mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <ProcessHead title={title} desc={desc} />
        </Reveal>
        <div className="mt-12 grid gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div
                style={{ clipPath: clip }}
                className={`flex h-16 items-center px-10 text-sm font-semibold text-white ${
                  ["bg-accent/70", "bg-accent/80", "bg-accent/90", "bg-accent"][i % 4]
                } ${i > 0 ? "-ml-2" : ""}`}
              >
                {s.title}
              </div>
              {s.items && (
                <ul className="mt-4 space-y-2 px-3 text-body-sm text-muted">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Label-only: icon nodes threaded on a dashed line. */
export function ProcessLabelsRow({ title, steps }: ProcessProps) {
  return (
    <Wrap>
      <Reveal>
        <ProcessHead title={title} center />
      </Reveal>
      <div className="relative mt-14">
        <div aria-hidden className="absolute left-[12.5%] right-[12.5%] top-8 hidden border-t-2 border-dashed border-accent/30 lg:block" />
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-16">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className="flex flex-col items-center text-center">
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface text-accent shadow-sm">
                {s.icon && <s.icon className="h-7 w-7" />}
              </span>
              <span className="mt-4 text-caption tabular-nums text-muted">0{i + 1}</span>
              <h3 className="text-h4 mt-1 font-semibold">{s.title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

/* Label-only: large tiles with a corner index. */
export function ProcessLabelsGrid({ title, steps }: ProcessProps) {
  return (
    <section className="border-y border-border bg-surface-muted/50">
      <div className="section mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-16">
          <Reveal>
            <ProcessHead title={title} />
          </Reveal>
          <div className="grid grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group flex h-full min-h-[150px] flex-col justify-between rounded-2xl border border-border bg-surface transition-colors hover:border-accent p-6">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      {s.icon && <s.icon className="h-5 w-5" />}
                    </span>
                    <span className="text-caption tabular-nums text-muted">0{i + 1}</span>
                  </div>
                  <h3 className="text-h4 font-semibold">{s.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Label-only: one flowing sentence of pills joined by arrows. */
export function ProcessLabelsPills({ title, steps }: ProcessProps) {
  return (
    <Wrap>
      <Reveal>
        <ProcessHead title={title} />
      </Reveal>
      <Reveal delay={0.05} className="mt-12 flex flex-wrap items-center gap-3">
        {steps.map((s, i) => (
          <div key={s.title} className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface py-2 pl-2 pr-5 text-sm font-semibold shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white">
                {s.icon ? <s.icon className="h-4 w-4" /> : i + 1}
              </span>
              {s.title}
            </span>
            {i < steps.length - 1 && <ChevronRight className="h-5 w-5 text-accent/60" />}
          </div>
        ))}
      </Reveal>
    </Wrap>
  );
}

/* ------------------------------------------------------------------ */
/* Calls to action                                                     */
/* ------------------------------------------------------------------ */

function CtaLink({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/contact"
      className={`group inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
        light ? "bg-white text-[#0b1220] hover:bg-white/90" : "bg-accent text-white hover:bg-accent-strong"
      }`}
    >
      Get in touch
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function CtaBar({ title }: { title: string }) {
  return (
    <Wrap>
      <Reveal>
        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface sm:flex-row sm:items-center sm:justify-between p-6">
          <div>
            <h2 className="text-h3 font-semibold">{title}</h2>
            <p className="mt-1 text-body-sm text-muted">We&apos;ll get back to you within one business day.</p>
          </div>
          <CtaLink />
        </div>
      </Reveal>
    </Wrap>
  );
}

export function CtaPanel({ title }: { title: string }) {
  return (
    <Wrap>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-accent-soft to-surface cta-pad text-center">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/25 blur-[100px]" />
          <h2 className="text-h2 relative font-semibold tracking-tight">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted">
            Tell us about your project and we&apos;ll get back to you within one business day.
          </p>
          <div className="relative mt-8 flex justify-center">
            <CtaLink />
          </div>
        </div>
      </Reveal>
    </Wrap>
  );
}

export function CtaImage({ title, image }: { title: string; image: string }) {
  return (
    <Wrap>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-[#070d22] text-white ring-1 ring-white/10">
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-accent/40 blur-[100px]" />
          <div className="relative grid items-center gap-6 px-8 py-12 sm:px-14 md:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="text-h2 font-semibold tracking-tight">{title}</h2>
              <p className="mt-3 max-w-md text-white/70">
                Tell us about your project and we&apos;ll get back to you within one business day.
              </p>
              <div className="mt-7">
                <CtaLink light />
              </div>
            </div>
            <IndustryArt
              slug={image.split("/").pop()!.split("_")[0]}
              className="hidden max-w-[240px] md:block"
            />
          </div>
        </div>
      </Reveal>
    </Wrap>
  );
}

/* ------------------------------------------------------------------ */
/* Related industries                                                  */
/* ------------------------------------------------------------------ */

export function RelatedIndustries({ current }: { current: string }) {
  const linked = industriesMeta.filter((i) => i.href && i.slug !== current);
  const start = industriesMeta.findIndex((i) => i.slug === current);
  const ordered = [...linked].sort(
    (a, b) =>
      ((industriesMeta.findIndex((i) => i.slug === a.slug) - start + 9) % 9) -
      ((industriesMeta.findIndex((i) => i.slug === b.slug) - start + 9) % 9),
  );
  const picks = ordered.slice(0, 3);
  return (
    <Wrap>
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-h3 font-semibold">More industries we build for</h2>
        <Link href="/industries" className="hidden items-center gap-1 text-sm font-medium text-accent hover:underline sm:inline-flex">
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {picks.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05} className="min-w-0">
            <Link
              href={p.href!}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-accent"
            >
              <IndustryArt slug={p.slug} className="h-20! w-20! max-w-none! shrink-0" />
              <div className="min-w-0">
                <h3 className="truncate font-semibold">{p.name}</h3>
                <p className="mt-0.5 line-clamp-2 text-caption text-muted">{p.blurb}</p>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </Link>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

/* Four tiles, each capped with a gradient rule. */
export function StatsTiles() {
  return (
    <Wrap>
      <Reveal>
        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {industryStats.map((s) => (
            <div key={s.label} className="overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="h-1.5 bg-linear-to-r from-accent to-accent-2" />
              <div className="p-6">
                <dd className="bg-linear-to-r from-accent to-accent-2 bg-clip-text text-4xl font-bold text-transparent">
                  {s.value}
                </dd>
                <dt className="mt-2 text-body-sm text-muted">{s.label}</dt>
              </div>
            </div>
          ))}
        </dl>
      </Reveal>
    </Wrap>
  );
}

/* Label-only: one segmented bar, like a progress rail. */
export function ProcessLabelsStrip({ title, steps }: ProcessProps) {
  return (
    <Wrap>
      <Reveal>
        <ProcessHead title={title} />
      </Reveal>
      <Reveal delay={0.05} className="mt-12 overflow-hidden rounded-2xl border border-border">
        <ol className="grid divide-border sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative bg-surface p-6 max-sm:border-b max-sm:border-border">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-accent"
                style={{ opacity: 0.35 + i * 0.22 }}
              />
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
                {s.icon && <s.icon className="h-5 w-5" />}
              </span>
              <h3 className="text-h4 mt-4 font-semibold">{s.title}</h3>
              <span className="mt-1 block text-caption text-muted">Phase {i + 1}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </Wrap>
  );
}
