import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { IndustryArt } from "@/components/industry/art";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { industriesMeta, type IndustryMeta } from "@/components/industry/data";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Industries",
  description:
    brandText("Industries Guru of Tech builds software for, including healthcare, fintech, retail, education, and logistics.", brand),
  };
}

/* Column spans at lg (6-col grid): rows read 3+3 / 2+2+2 / 4+2 / 2+4 */
const spans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4",
];
const wide = new Set([0, 1, 5, 8]);

const tints = [
  "from-accent-soft to-surface",
  "from-surface to-accent-soft",
  "from-accent-soft via-surface to-surface",
  "from-surface-muted to-accent-soft",
];

function Tile({ item, i }: { item: IndustryMeta; i: number }) {
  const isWide = wide.has(i);
  const body = (
    <div
      className={`group relative h-full min-h-[300px] overflow-hidden rounded-3xl border border-border bg-linear-to-br ${
        tints[i % tints.length]
      } p-7 transition-all duration-300 ${item.href ? "hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10" : ""}`}
    >
      <div className={isWide ? "sm:max-w-[50%]" : "max-w-[62%] lg:max-w-[58%]"}>
        <h2 className="text-h3 mt-2 font-semibold leading-tight">{item.name}</h2>
        <p className="mt-2 text-body-sm text-muted">{item.blurb}</p>
        <div className="mt-5">
          {item.href ? (
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
              Explore
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          ) : (
            <span className="inline-flex rounded-full border border-dashed border-border px-3 py-1 text-caption text-muted">
              Full page coming soon
            </span>
          )}
        </div>
      </div>
      <div
        className={`pointer-events-none absolute transition-transform duration-500 group-hover:scale-105 ${
          isWide ? "bottom-3 right-4 hidden w-[40%] max-w-[15rem] sm:block" : "bottom-3 right-3 w-[46%]"
        }`}
      >
        <IndustryArt slug={item.slug} />
      </div>
    </div>
  );
  return (
    <Reveal delay={(i % 3) * 0.05} className={spans[i]}>
      {item.href ? (
        <Link href={item.href} className="block h-full">
          {body}
        </Link>
      ) : (
        body
      )}
    </Reveal>
  );
}

export default function IndustriesPage() {
  const cluster = [industriesMeta[0], industriesMeta[5]];
  return (
    <>
      <section className="section-hero relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-accent/15 blur-[100px]" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow-badge">Industries</span>
            <h1 className="mt-4 text-h2 font-semibold tracking-tight">
              Nine industries.
              <br />
              <span className="bg-linear-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                One habit: learn the domain first.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-body-lg text-muted">
              Domain context shortens the discovery phase and keeps decisions
              grounded in how your industry actually works.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative mx-auto hidden h-72 w-full max-w-md lg:block">
            {cluster.map((c, i) => (
              <div
                key={c.slug}
                style={{ animationDelay: `${i * 1.1}s` }}
                className={`industry-float absolute w-52 ${
                  ["left-0 top-10", "right-0 top-0 w-60"][i]
                }`}
              >
                <IndustryArt slug={c.slug} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {industriesMeta.map((item, i) => (
            <Tile key={item.slug} item={item} i={i} />
          ))}
        </div>
      </section>

      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface sm:flex-row sm:items-center sm:justify-between p-6">
            <div>
              <h2 className="text-h3 font-semibold">Don&apos;t see your industry?</h2>
              <p className="mt-1 text-body-sm text-muted">
                Tell us what you&apos;re building — the approach carries over.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
