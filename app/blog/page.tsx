import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { BookOpen, Code2, Rocket, Wrench } from "lucide-react";
import { Reveal } from "@/components/reveal";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Blog",
  description: brandText("Engineering notes and updates from Guru of Tech — coming soon.", brand),
  };
}

const topics = [
  { icon: Code2, title: "Engineering notes", desc: "How we approach architecture, tooling, and tradeoffs on real projects." },
  { icon: Rocket, title: "Shipping stories", desc: "What actually happened building and launching client products." },
  { icon: Wrench, title: "Stack deep-dives", desc: "Notes on the frameworks and platforms we work with daily." },
];

export default function BlogPage() {
  return (
    <section className="section-hero mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal className="self-start lg:sticky lg:top-28">
          <span className="eyebrow-badge">Blog</span>
          <h1 className="mt-4 text-h1 font-semibold tracking-tight">
            We&apos;re getting the blog <span className="text-accent">ready</span>
          </h1>
          <p className="mt-4 max-w-md text-body-lg text-muted">
            No posts published yet — here&apos;s what we&apos;re planning to write about once it&apos;s live.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-body-sm text-muted">
            <BookOpen className="h-4 w-4 text-accent" />
            Follow our LinkedIn or Twitter for updates when we publish.
          </div>
        </Reveal>

        {/* a table of contents for the blog to come */}
        <ol className="divide-y divide-border border-y border-border">
          {topics.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06}>
              <li className="group grid gap-6 py-9 sm:grid-cols-[64px_1fr_auto] sm:items-start">
                <span className="text-[2.75rem] font-light leading-none tabular-nums text-accent/40 transition-colors group-hover:text-accent">
                  0{i + 1}
                </span>
                <div>
                  <h2 className="text-h3 font-semibold">{t.title}</h2>
                  <p className="mt-2 max-w-md text-body-sm text-muted">{t.desc}</p>
                </div>
                <span className="flex items-center gap-2 self-start rounded-full border border-dashed border-border px-3 py-1 text-caption text-muted">
                  <t.icon className="h-3.5 w-3.5 text-accent" />
                  Soon
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
