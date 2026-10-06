import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaPanel } from "@/components/industry/sections";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Clients & Testimonials",
  description:
    brandText("Customer testimonials that demonstrate GuruOfTech's ability to build market-leading solutions by fusing original thought, technological know-how and subject experience.", brand),
  };
}

const stats = [
  { value: "2,531", label: "Project Finished" },
  { value: "15+", label: "Years Experience" },
  { value: "280", label: "Happy Clients" },
  { value: "3,587", label: "Recognition" },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* hero: title left, stats as a tall panel with oversized numerals right */}
      <section className="section-hero mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal className="flex flex-col justify-center">
            <span className="eyebrow-badge self-start">Clients & Testimonials</span>
            <h1 className="mt-4 text-h2 font-semibold tracking-tight">
              Clients and <span className="text-accent">Testimonials</span>
            </h1>
            <p className="mt-4 max-w-xl text-body-lg text-muted">
              Our capacity to develop market-leading solutions by fusing original thought, technological
              know-how and subject experience is demonstrated by the customer testimonials we get.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="relative grid h-full grid-cols-2 overflow-hidden rounded-3xl border border-border bg-surface">
              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-accent/15 blur-3xl" />
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`relative p-7 ${i % 2 === 1 ? "border-l border-border" : ""} ${i > 1 ? "border-t border-border" : ""}`}
                >
                  <dd className="bg-linear-to-r from-accent to-accent-2 bg-clip-text text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-none text-transparent">
                    {s.value}
                  </dd>
                  <dt className="mt-3 text-caption uppercase tracking-widest text-muted">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* the "sands" banner: layered dunes behind the heading */}
      <section className="relative overflow-hidden border-y border-border bg-linear-to-b from-accent-soft to-surface">
        <svg
          aria-hidden
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full"
        >
          <path d="M0 140 C 240 60, 460 200, 720 130 S 1200 40, 1440 120 V220 H0Z" fill="var(--accent)" opacity="0.10" />
          <path d="M0 170 C 300 110, 520 220, 780 160 S 1220 90, 1440 160 V220 H0Z" fill="var(--accent-2)" opacity="0.12" />
          <path d="M0 200 C 320 160, 600 230, 900 190 S 1260 160, 1440 195 V220 H0Z" fill="var(--accent)" opacity="0.14" />
        </svg>
        <div className="relative mx-auto max-w-7xl px-6 pb-40 pt-24 text-center lg:px-8">
          <Reveal>
            <span className="eyebrow-badge">Testimonials</span>
            <h2 className="text-h2 mt-4 font-semibold tracking-tight">Our Marks on Their Sands</h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-muted">
              Learn how GuruOfTech is transforming the game for international clients to operate and succeed
              in this technology-driven era through services, solutions, and success models.
            </p>
          </Reveal>
        </div>
      </section>

      {/* empty frames, honest about it */}
      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 0.06} className={i === 1 ? "md:mt-10" : ""}>
              <div className="flex h-64 flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-surface/60 text-center p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Quote className="h-5 w-5" />
                </span>
                <p className="mt-4 text-body-sm text-muted">A client story will appear here.</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-12">
          <p className="mx-auto max-w-xl text-center text-body-sm text-muted">
            We only publish reviews we have permission to share. Want to hear from a past client directly? Ask
            us and we&apos;ll arrange an introduction.
          </p>
        </Reveal>
      </section>

      <CtaPanel title="Start the conversation" />
    </>
  );
}
