import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Item = { title: string; href: string; icon: ReactNode };

export function CapabilityGrid({
  pill,
  title,
  description,
  items,
}: {
  pill: string;
  title: ReactNode;
  description: string;
  items: Item[];
}) {
  return (
    <section className="section relative mx-auto max-w-7xl px-6 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,var(--accent-soft),transparent)] opacity-80"
      />

      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="">
          <span className="eyebrow-badge">
            {pill}
          </span>
        </span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-muted">{description}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.04}>
            <Link
              href={item.href}
              className="group relative flex h-full min-h-[104px] items-center justify-between gap-4 overflow-hidden rounded-2xl border border-border bg-surface px-6 py-5 shadow-sm shadow-accent/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-colors duration-300 group-hover:bg-accent/20"
              />
              <span className="relative text-[15px] font-semibold leading-snug">{item.title}</span>
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                {item.icon}
              </span>
              <ArrowUpRight className="absolute right-3 top-3 h-3.5 w-3.5 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
