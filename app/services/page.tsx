import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaBar } from "@/components/industry/sections";
import { ServiceArt } from "@/components/service/art";
import { ProcessFive } from "@/components/service/blocks";
import { hireSteps, servicesMeta } from "@/components/service/data";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Services",
  description:
    brandText("Software development, eCommerce, mobile apps, analytics and DevOps, testing, and startup consulting from Guru of Tech.", brand),
  };
}

export default function ServicesPage() {
  return (
    <>
      <section className="section-hero relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-accent/15 blur-[110px]" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow-badge">Services</span>
            <h1 className="mt-4 text-h1 font-semibold tracking-tight">
              Services built around <span className="text-accent">outcomes</span>
            </h1>
            <p className="mt-4 max-w-xl text-body-lg text-muted">
              Whatever stage you&apos;re at — new build, rebuild, or scaling an existing product — we plug in
              where you need us.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid grid-cols-2 gap-3">
              {servicesMeta.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    className="group flex h-full items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold leading-snug">{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section mx-auto max-w-7xl space-y-8 px-6 lg:px-8">
        {servicesMeta.map((s, i) => (
          <Reveal key={s.slug}>
            <article
              className={`grid items-center gap-8 overflow-hidden rounded-[2rem] border border-border lg:grid-cols-2 lg:gap-14 p-6 ${
                i % 2 ? "bg-linear-to-bl from-accent-soft/70 to-surface" : "bg-linear-to-br from-accent-soft/70 to-surface"
              }`}
            >
              <div className={i % 2 ? "lg:order-2" : ""}>
                <span className="text-caption font-semibold tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")} / {String(servicesMeta.length).padStart(2, "0")}
                </span>
                <h2 className="text-h2 mt-4 font-semibold tracking-tight">{s.title}</h2>
                <p className="mt-4 max-w-lg text-body text-muted">{s.short}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-full border border-border bg-surface px-3 py-1 text-caption text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.href}
                  className="group mt-7 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
                >
                  Explore {s.title}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
              <div className={i % 2 ? "lg:order-1" : ""}>
                <ServiceArt kind={s.art} className="max-w-[22rem]" />
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <ProcessFive
        title="How an engagement begins"
        desc="The same five steps whether you need one developer or a whole team."
        steps={hireSteps}
      />
      <CtaBar title="Not sure which service you need?" />
    </>
  );
}
