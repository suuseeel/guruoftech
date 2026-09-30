import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import Link from "next/link";
import { ArrowUpRight, Layers } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaPanel } from "@/components/industry/sections";
import { TechCloud } from "@/components/service/art";
import { TechIcon } from "@/components/service/tech-icons";
import { techMeta } from "@/components/service/data";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Technologies",
  description:
    brandText("The backend, frontend, mobile, CMS, eCommerce, cloud, and database technology stack Guru of Tech builds with.", brand),
  };
}

export default function TechnologiesPage() {
  return (
    <>
      <section className="section-hero relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-accent-2/15 blur-[110px]" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow-badge">Technologies</span>
            <h1 className="mt-4 text-[clamp(2.4rem,4.8vw,4.2rem)] font-semibold leading-[1.04] tracking-tight">
              Technology we ship with <span className="text-accent">daily</span>
            </h1>
            <p className="mt-4 max-w-lg text-body-lg text-muted">
              A stack chosen per-project, not a template — matched to what your product actually needs.
            </p>
            <p className="mt-6 text-caption uppercase tracking-widest text-muted">
              {techMeta.length} categories · {new Set(techMeta.flatMap((t) => t.items)).size} technologies
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <TechCloud
              names={["PHP", "React", "Flutter", "AWS", "WordPress", "Shopify", "MySQL", "Kotlin", "Laravel"]}
              hub={Layers}
            />
          </Reveal>
        </div>
      </section>

      {/* categories as an index: name + blurb on the left, brand chips on the right */}
      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <ul className="divide-y divide-border border-y border-border">
          {techMeta.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 4) * 0.04}>
              <li>
                <Link
                  href={t.href}
                  className="group grid gap-6 px-2 py-9 transition-colors hover:bg-accent-soft/50 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_40px] md:items-center md:gap-10 md:px-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <t.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <span className="text-caption font-semibold tabular-nums text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-h3 font-semibold leading-tight">{t.title}</h2>
                      <p className="mt-2 text-body-sm text-muted">{t.short}</p>
                    </div>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {t.items.map((n) => (
                      <li
                        key={n}
                        className="flex items-center gap-2 rounded-full border border-border bg-surface py-1.5 pl-2.5 pr-3.5 text-caption font-medium"
                      >
                        <TechIcon name={n} className="h-4 w-4" />
                        {n}
                      </li>
                    ))}
                  </ul>
                  <ArrowUpRight className="hidden h-5 w-5 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent md:block" />
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaPanel title="Not sure which stack fits?" />
    </>
  );
}
