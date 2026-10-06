import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { IndustryArt } from "@/components/industry/art";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, Building2, Rocket, Smartphone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaBar } from "@/components/industry/sections";
import { industriesMeta } from "@/components/industry/data";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Case Studies",
  description: brandText("Detailed case studies from Guru of Tech engagements — coming soon.", brand),
  };
}

const workTypes = [
  {
    icon: Building2,
    title: "Enterprise software platforms",
    desc: "Internal tools and product platforms built around an existing workflow.",
    span: "md:col-span-3 md:row-span-2",
    tone: "bg-linear-to-br from-accent to-accent-2 text-white",
  },
  {
    icon: BrainCircuit,
    title: "AI & automation products",
    desc: "Chatbots, agents, and workflow automation layered onto an existing stack.",
    span: "md:col-span-3",
    tone: "bg-surface border border-border",
  },
  {
    icon: Smartphone,
    title: "Mobile applications",
    desc: "Native and cross-platform apps shipped to both app stores.",
    span: "md:col-span-2",
    tone: "bg-accent-soft/70 border border-border",
  },
  {
    icon: Rocket,
    title: "Startup MVPs",
    desc: "Scoped, built, and shipped fast for founders validating a first version.",
    span: "md:col-span-1 md:col-start-6",
    tone: "bg-surface border border-border",
  },
];

export default function CaseStudiesPage() {
  const linked = industriesMeta.filter((i) => i.href);
  return (
    <>
      {/* hero with a fanned stack of "case files" */}
      <section className="section-hero mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow-badge">Case Studies</span>
            <h1 className="mt-4 text-h2 font-semibold tracking-tight">
              Detailed write-ups, <span className="text-accent">coming soon</span>
            </h1>
            <p className="mt-4 max-w-xl text-body-lg text-muted">
              We&apos;re putting together in-depth case studies from recent engagements. In the meantime,
              here&apos;s the kind of work we take on — tell us your industry and we&apos;ll share relevant
              examples directly.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
            >
              Ask for relevant examples
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="relative mx-auto h-72 w-full max-w-md sm:h-80">
            {[
              { r: "-rotate-6", pos: "left-0 top-8", bg: "bg-accent-soft" },
              { r: "rotate-3", pos: "left-10 top-4", bg: "bg-surface-muted" },
              { r: "-rotate-1", pos: "left-4 top-0", bg: "bg-surface" },
            ].map((c, i) => (
              <div
                key={i}
                className={`absolute h-64 w-72 rounded-3xl border border-border p-6 shadow-xl sm:w-80 ${c.pos} ${c.r} ${c.bg}`}
              >
                {i === 2 && (
                  <>
                    <span className="inline-flex rounded-full border border-dashed border-accent/50 px-3 py-1 text-caption font-medium text-accent">
                      In preparation
                    </span>
                    <div className="mt-6 space-y-3">
                      <div className="h-3 w-3/4 rounded-full bg-border" />
                      <div className="h-3 w-full rounded-full bg-border/70" />
                      <div className="h-3 w-2/3 rounded-full bg-border/70" />
                    </div>
                    <div className="mt-8 flex gap-2">
                      <span className="h-8 w-8 rounded-lg bg-accent/20" />
                      <span className="h-8 w-8 rounded-lg bg-accent-2/20" />
                      <span className="h-8 w-8 rounded-lg bg-accent/10" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* work types as an asymmetric bento */}
      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <h2 className="text-h3 font-semibold">The kind of work we take on</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-6">
          {workTypes.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05} className={w.span}>
              <div className={`flex h-full min-h-47.5 flex-col justify-between rounded-3xl p-7 ${w.tone}`}>
                <w.icon className="h-8 w-8 opacity-90" />
                <div className="mt-8">
                  <h3 className="text-h4 font-semibold">{w.title}</h3>
                  <p className={`mt-2 text-body-sm ${i === 0 ? "text-white/80" : "text-muted"}`}>{w.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* industries strip */}
      <section className="border-y border-border bg-surface-muted/50">
        <div className="section mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-accent">
                Where we&apos;ve worked
              </span>
              <h2 className="text-h2 mt-4 font-semibold tracking-tight">Industries behind these projects</h2>
              <p className="mt-4 text-body-sm text-muted">
                Case study write-ups are on the way for each of these — start with the industry closest to yours.
              </p>
            </div>
            <Link href="/industries" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
              View all industries <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-7">
            {linked.map((it, i) => (
              <Reveal key={it.slug} delay={i * 0.04}>
                <Link
                  href={it.href!}
                  className="group flex h-full flex-col items-center rounded-2xl border border-border bg-surface p-4 text-center transition-colors hover:border-accent"
                >
                  <IndustryArt slug={it.slug} className="h-24! w-24! max-w-none!" />
                  <span className="mt-2 text-caption font-medium">{it.name}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBar title="Want examples relevant to your project?" />
    </>
  );
}
