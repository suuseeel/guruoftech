import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import Link from "next/link";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { AiSubnav, HashFocus } from "@/components/ai/client";
import { aiGroups, aiItemCount, aiPrinciples, aiProcess, type AiGroup, type AiItem } from "@/components/ai/data";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "AI Solutions",
  description:
    brandText("AI development, agents and automation, data and machine learning, conversational and voice AI, and MLOps and consulting from Guru of Tech.", brand),
  };
}

const tint = (c: string, pct: number) => `color-mix(in srgb, ${c} ${pct}%, transparent)`;

/* Hero art: five coloured category badges orbiting a hub. */
function AiOrbit() {
  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[26rem]">
      <div className="absolute inset-[7%] rounded-full border border-dashed border-accent/30" />
      <div className="absolute inset-[28%] rounded-full border border-accent/20" />
      <div className="pointer-events-none absolute inset-[24%] rounded-full bg-linear-to-br from-accent/30 to-accent-2/30 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 flex h-[24%] w-[24%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-linear-to-br from-accent to-accent-2 text-white shadow-xl shadow-accent/30">
        <Sparkles className="h-1/2 w-1/2" />
      </div>
      {aiGroups.map((g, i) => {
        const a = (i / aiGroups.length) * Math.PI * 2 - Math.PI / 2;
        return (
          <div
            key={g.id}
            style={{ left: `${50 + 42 * Math.cos(a)}%`, top: `${50 + 42 * Math.sin(a)}%` }}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface shadow-lg sm:h-16 sm:w-16"
              style={{ color: g.color, boxShadow: `0 10px 30px -10px ${tint(g.color, 60)}` }}
            >
              <g.icon className="h-6 w-6 sm:h-7 sm:w-7" />
            </span>
          </div>
        );
      })}
    </div>
  );
}

function ItemCard({ item, group }: { item: AiItem; group: AiGroup }) {
  return (
    <article
      id={item.id}
      style={{ "--c": group.color } as React.CSSProperties}
      className="scroll-mt-56 overflow-hidden rounded-3xl border border-border bg-surface transition-colors"
    >
      <div className="h-1" style={{ background: `linear-gradient(90deg, ${group.color}, ${tint(group.color, 15)})` }} />
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
            style={{ background: tint(group.color, 14), color: group.color }}
          >
            <item.icon className="h-7 w-7" />
          </span>
          <div className="min-w-0">
            <h3 className="text-h4 font-semibold leading-snug">{item.title}</h3>
            <p className="mt-1 text-body-sm font-medium" style={{ color: group.color }}>
              {item.summary}
            </p>
          </div>
        </div>

        <p className="mt-5 text-body-sm text-muted">{item.about}</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="text-caption font-semibold uppercase tracking-widest text-muted">What you get</h4>
            <ul className="mt-3 space-y-2.5">
              {item.delivers.map((d) => (
                <li key={d} className="flex gap-2.5 text-body-sm">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: tint(group.color, 16), color: group.color }}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-caption font-semibold uppercase tracking-widest text-muted">Where it fits</h4>
            <ul className="mt-3 space-y-2.5">
              {item.useCases.map((u) => (
                <li key={u} className="flex gap-2.5 text-body-sm text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: group.color }} />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
          {item.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border px-3 py-1 text-caption"
              style={{ borderColor: tint(group.color, 35), background: tint(group.color, 8) }}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function AIPage() {
  const navGroups = aiGroups.map((g) => ({ id: g.id, title: g.title, color: g.color, count: g.items.length }));
  const navIcons = Object.fromEntries(aiGroups.map((g) => [g.id, <g.icon key={g.id} className="h-3.5 w-3.5" />]));

  return (
    <>
      <HashFocus />

      {/* hero */}
      <section className="section-hero relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-accent/15 blur-[110px]" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow-badge">
              <Sparkles className="h-3.5 w-3.5" />
              AI Solutions
            </span>
            <h1 className="mt-4 text-h1 font-semibold tracking-tight">
              Engineering for the <span className="text-gradient">AI era</span>
            </h1>
            <p className="mt-4 max-w-xl text-body-lg text-muted">
              We fold AI, automation, and data intelligence into the software we build for you — recommendation
              logic, automated workflows, agents and smarter dashboards — rather than selling it as a separate,
              standalone product.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:border-accent"
              >
                See all services
              </Link>
            </div>
            <p className="mt-8 text-caption uppercase tracking-widest text-muted">
              {aiGroups.length} categories · {aiItemCount} services
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <AiOrbit />
          </Reveal>
        </div>
      </section>

      <AiSubnav groups={navGroups} icons={navIcons} />

      {/* one section per category */}
      {aiGroups.map((group, gi) => (
        <section
          key={group.id}
          id={`group-${group.id}`}
          style={{ "--c": group.color } as React.CSSProperties}
          className="scroll-mt-48 border-b border-border last:border-b-0"
        >
          <div className="section mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[320px_1fr] lg:gap-16 lg:px-8">
            <Reveal className="self-start lg:sticky lg:top-64">
              <div
                className="relative overflow-hidden rounded-3xl border p-6"
                style={{ borderColor: tint(group.color, 30), background: `linear-gradient(160deg, ${tint(group.color, 14)}, transparent 70%)` }}
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                  style={{ background: group.color, boxShadow: `0 12px 30px -10px ${tint(group.color, 70)}` }}
                >
                  <group.icon className="h-7 w-7" />
                </span>
                <span className="mt-5 block text-caption font-semibold tabular-nums" style={{ color: group.color }}>
                  {String(gi + 1).padStart(2, "0")} / {String(aiGroups.length).padStart(2, "0")}
                </span>
                <h2 className="text-h3 mt-1 font-semibold">{group.title}</h2>
                <p className="mt-2 text-body-sm text-muted">{group.blurb}</p>

                <ul className="mt-6 hidden space-y-1 border-t pt-5 lg:block" style={{ borderColor: tint(group.color, 25) }}>
                  {group.items.map((it) => (
                    <li key={it.id}>
                      <a
                        href={`#${it.id}`}
                        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: group.color }} />
                        {it.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <div className="space-y-6">
              {group.items.map((item, i) => (
                <Reveal key={item.id} delay={(i % 3) * 0.05}>
                  <ItemCard item={item} group={group} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* how we work */}
      <section className="border-y border-border bg-surface-muted/50">
        <div className="section mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-accent">How an AI project runs</span>
            <h2 className="text-h2 mt-4 font-semibold tracking-tight">From idea to something people use</h2>
          </Reveal>
          <ol className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiProcess.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <li className="h-full rounded-2xl border border-border bg-surface p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="text-[2.5rem] font-bold leading-none text-accent/20">0{i + 1}</span>
                  </div>
                  <h3 className="text-h4 mt-4 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-body-sm text-muted">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* principles */}
      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-accent">Our approach</span>
          <h2 className="text-h2 mt-4 font-semibold tracking-tight">AI, used responsibly</h2>
          <p className="mt-4 text-body text-muted">
            A few ground rules we hold to on every engagement that touches AI or automation.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {aiPrinciples.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.05}>
              <div className="border-t border-border pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="text-h4 mt-4 font-semibold">{p.title}</h3>
                <p className="mt-2 text-body-sm text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-accent-soft to-surface cta-pad text-center">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/25 blur-[100px]" />
            <p className="relative text-sm font-medium text-accent">Have an AI idea in mind?</p>
            <h2 className="relative mt-4 text-h2 font-semibold tracking-tight">
              Let&apos;s figure out where it actually helps.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted">
              Tell us what you&apos;re building and we&apos;ll tell you honestly whether AI is the right tool for it.
            </p>
            <div className="relative mt-8 flex justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
