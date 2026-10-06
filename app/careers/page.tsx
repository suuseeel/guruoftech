import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BrainCircuit,
  Briefcase,
  Clock3,
  Code2,
  Compass,
  Globe,
  LifeBuoy,
  Layers,
  Mail,
  MapPin,
  Palette,
  PartyPopper,
} from "lucide-react";
import {
  SiClaude,
  SiLangchain,
  SiNodedotjs,
  SiPython,
  SiPytorch,
  SiReact,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa6";
import { Reveal } from "@/components/reveal";
import { team, depts } from "@/components/team/data";
import { jobs } from "@/components/careers/data";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
    title: "Careers",
    description: brandText(
      "Level up your career graph and join the GuruOfTech team for an exciting journey.",
      brand,
    ),
  };
}

/* Real stack, pulled from what's already listed elsewhere on the site
   (homepage tech marquee, AI service pages) — not invented for this page. */
const techStack = [
  { name: "OpenAI", Icon: RiOpenaiFill, color: "#10A37F" },
  { name: "Anthropic Claude", Icon: SiClaude, color: "#D97757" },
  { name: "LangChain", Icon: SiLangchain, color: "#1C3C3C" },
  { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
];

const techDna = [
  {
    icon: BrainCircuit,
    title: "Work on Production AI",
    desc: "LLM features, agents and automation shipped to real users — not a proof of concept that stalls after the demo.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "Time set aside to go deep on a new model, framework or technique, not squeezed in after hours.",
  },
  {
    icon: Layers,
    title: "Modern Tech Stack",
    desc: "Tools chosen for the problem in front of us — React, Next.js, Node, Python, AWS — not whatever's oldest in the repo.",
  },
  {
    icon: Globe,
    title: "Flexible Hybrid & Remote Culture",
    desc: "Work from wherever you're most effective, with overlap hours that respect everyone's timezone.",
  },
];

const benefits = [
  {
    icon: Compass,
    title: "Remote First & Flexible",
    desc: "Independence of thought is fostered by flexibility in the workplace. We prioritize a real balance between work and personal life.",
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    desc: "Everyone who goes above and beyond to help the business succeed is a valuable asset to us, and we make sure that's visible.",
  },
  {
    icon: LifeBuoy,
    title: "Support When You Need It",
    desc: "A proactive, committed crew on the job to address technical or logistical issues, so working with us stays simple.",
  },
  {
    icon: PartyPopper,
    title: "Team Life & Leisure",
    desc: "Regular team activities throughout the year, plus video-call-based get-togethers to keep remote days feeling connected.",
  },
];

const culture = [
  {
    title: "AI-Ready Workflow",
    desc: "We work on production AI, not demos — platforms real users depend on, built with the same engineering discipline as everything else we ship.",
    points: [
      "Senior engineers on every project",
      "Tools chosen for the problem, not the trend",
      "Shipped to production, not just a pitch deck",
    ],
  },
  {
    title: "Continuous Innovation",
    desc: "We take on hard problems deliberately, and we look after the people doing the work along the way.",
    points: [
      "Learning time built into the week",
      "Flexible and remote-first by default",
      "Recognition for people who go the extra mile",
    ],
  },
];

// Illustrative team slots — real roles from the team roster, not invented
// quotes. See /team for the full list.
const spotlight = [
  team.find((p) => p.id === "04"),
  team.find((p) => p.id === "10"),
].filter((p): p is NonNullable<typeof p> => Boolean(p));

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const teamIcon: Record<string, typeof Code2> = {
  Engineering: Code2,
  Design: Palette,
};
function teamColor(teamName: string): string {
  return depts.find((d) => d.label === teamName)?.color ?? "var(--accent)";
}

export default async function CareersPage() {
  const brand = await getRequestBrand();
  return (
    <>
      {/* hero */}
      <section className="section-hero relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <Reveal>
          <span className="eyebrow-badge">Careers</span>
          <h1 className="mx-auto mt-4 max-w-3xl text-h2 font-semibold tracking-tight">
            Build the future. We&apos;re hiring{" "}
            <span className="text-accent">engineers, designers</span>, and
            systems thinkers.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-muted">
            Join a team building AI-driven platforms and resilient software for
            clients around the world.
          </p>
          <a
            href="#open-roles"
            className="group mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            See open roles
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </section>

      {/* technology DNA */}
      <section className="border-y border-border bg-surface-muted/50">
        <div className="section mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="text-center">
            <span className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-accent">
              The stack
            </span>
            <h2 className="text-h2 mt-4 font-semibold tracking-tight">
              Our Technology DNA
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {techStack.map((t) => (
                <span
                  key={t.name}
                  className="flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-foreground/85"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, ${t.color} 18%, transparent), color-mix(in srgb, ${t.color} 4%, transparent))`,
                    borderColor: `color-mix(in srgb, ${t.color} 35%, transparent)`,
                  }}
                >
                  <t.Icon className="h-4 w-4" style={{ color: t.color }} />
                  {t.name}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techDna.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-accent to-accent-2 text-white shadow-sm shadow-accent/25">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-h4 mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-body-sm text-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* open roles */}
      {/* <section id="open-roles" className="section relative mx-auto max-w-7xl scroll-mt-28 overflow-hidden px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-2/10 blur-[120px]" />

        <Reveal className="relative text-center">
          <span className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-accent">Open Roles</span>
          <h2 className="mx-auto mt-4 max-w-xl text-h2 font-semibold tracking-tight">
            {jobs.length > 0 ? `${jobs.length} positions open` : "Nothing publicly listed right now"}
          </h2>
        </Reveal>

        {jobs.length > 0 ? (
          <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, i) => {
              const c = teamColor(job.team);
              const TeamIcon = teamIcon[job.team] ?? Briefcase;
              return (
                <Reveal key={job.slug} delay={i * 0.05}>
                  <Link
                    href={`/careers/apply?role=${encodeURIComponent(job.slug)}`}
                    style={{ "--c": c } as React.CSSProperties}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--c)] hover:shadow-xl"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[var(--c)] transition-transform duration-300 group-hover:scale-x-100"
                    />
                    <div className="flex items-start justify-between">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{ background: `color-mix(in srgb, ${c} 15%, transparent)`, color: c }}
                      >
                        <TeamIcon className="h-5 w-5" />
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-caption font-medium text-muted">
                        <Clock3 className="h-3 w-3" />
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-h4 mt-4 font-semibold transition-colors group-hover:text-[var(--c)]">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-body-sm text-muted">
                      <span>{job.team}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" style={{ color: c }} />
                        {job.location}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-surface-muted/60 px-2.5 py-0.5 text-caption text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: c }}>
                      Apply now
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-surface">
            <div className="flex flex-col items-start gap-6 px-8 py-12 md:flex-row md:items-center md:justify-between">
              <p className="max-w-xl text-body-sm text-muted">
                We don&apos;t have specific openings posted at the moment, but we&apos;re always glad to hear from
                strong engineers, designers, and QA specialists. Send your resume and a note about what you&apos;d
                want to work on.
              </p>
              <a
                href={`mailto:${brand.contactEmail}`}
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
              >
                <Mail className="h-4 w-4" />
                {brand.contactEmail}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        )}
      </section> */}

      <section
        id="open-roles"
        className="section relative mx-auto max-w-7xl scroll-mt-28 overflow-hidden px-6 lg:px-8"
      >
        {/* Background glow — keeping your existing dark theme */}
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-accent/5 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-accent-2/5 blur-[140px]" />

        {jobs.length > 0 ? (
          <Reveal className="relative">
            <div className="overflow-hidden">
              {/* MAIN CAREERS LAYOUT */}
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                {/* =====================================================
              LEFT SIDE — DISCOVER YOUR FUTURE
          ====================================================== */}
                <div className="relative flex min-h-[560px] flex-col justify-between border-b border-border p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
                  {/* subtle decorative shape */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-border opacity-30"
                  />

                  <div className="relative">
                    {/* eyebrow */}
                    <span className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-accent">
                      OPREN ROLES
                    </span>

                    {/* Main heading */}
                    <h2 className="mt-6 max-w-md text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                      Discover your
                      <br />
                      future
                    </h2>

                    <p className="mt-6 max-w-md text-body-sm leading-7 text-muted">
                      Be a pioneer in technology. Join our team and help us
                      build meaningful digital experiences, solve complex
                      problems, and shape what comes next.
                    </p>

                    {/* Open application */}
                    <a
                      href={`mailto:${brand.contactEmail}?subject=Open Application`}
                      className="group mt-8 inline-flex items-center gap-2 border border-border bg-surface px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-accent hover:bg-surface-muted"
                    >
                      Open application
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>

                  {/* Bottom information */}
                  <div className="relative mt-12 border-t border-border pt-6">
                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <p className="text-3xl font-medium tracking-tight">
                          {jobs.length}
                        </p>
                        <p className="mt-1 text-caption uppercase tracking-[0.15em] text-muted">
                          Open positions
                        </p>
                      </div>

                      <div className="hidden h-10 w-px bg-border sm:block" />

                      <div className="hidden sm:block">
                        <p className="text-sm font-medium">Find your place</p>
                        <p className="mt-1 text-caption text-muted">
                          Explore opportunities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =====================================================
              RIGHT SIDE — OPENINGS
          ====================================================== */}
                <div className="relative">
                  {/* Right header */}

                  {/* Scrollable openings */}
                  <div className="max-h-[620px] overflow-y-auto scrollbar-thin">
                    {jobs.map((job, i) => {
                      const c = teamColor(job.team);
                      const TeamIcon = teamIcon[job.team] ?? Briefcase;

                      return (
                        <Reveal className="" key={job.slug} delay={i * 0.05}>
                          <Link
                            href={`/careers/apply?role=${encodeURIComponent(
                              job.slug,
                            )}`}
                            style={{ "--c": c } as React.CSSProperties}
                            className="group relative block border-b border-border p-6 transition-all duration-300 hover:bg-surface-muted/40 sm:p-7"
                          >
                            {/* Hover line */}
                            <span
                              aria-hidden
                              className="pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-bottom scale-y-0 bg-[var(--c)] transition-transform duration-300 group-hover:scale-y-100"
                            />

                            {/* Top row */}
                            <div className="flex items-start justify-between gap-5">
                              <div className="min-w-0">
                                {/* Job title */}
                                <h3 className="text-xl font-medium tracking-tight transition-colors duration-300 group-hover:text-[var(--c)] sm:text-2xl">
                                  {job.title}
                                </h3>

                                {/* Job details */}
                                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-body-sm text-muted">
                                  <span className="flex items-center gap-1.5">
                                    <MapPin
                                      className="h-3.5 w-3.5"
                                      style={{ color: c }}
                                    />
                                    {job.location}
                                  </span>

                                  <span className="opacity-40">•</span>

                                  <span className="flex items-center gap-1.5">
                                    <Clock3 className="h-3.5 w-3.5" />
                                    {job.type}
                                  </span>
                                </div>
                              </div>

                              {/* Arrow */}
                              {/* <span
                                className="flex h-10 w-10 shrink-0 items-center justify-center border border-border transition-all duration-300 group-hover:border-[var(--c)]"
                                style={
                                  {
                                    "--c": c,
                                  } as React.CSSProperties
                                }
                              >
                                <ArrowUpRight
                                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                  style={{ color: c }}
                                />
                              </span> */}
                            </div>

                            {/* Tags */}
                            <div className="mt-5 flex flex-wrap gap-2">
                              {job.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="border border-border px-2.5 py-1 text-caption text-muted transition-colors group-hover:border-border"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Apply */}
                            <div className="mt-5 flex items-center justify-between">
                              <span className="text-caption text-muted">
                                Full-time opportunity
                              </span>

                              <span
                                className="inline-flex items-center gap-1.5 text-sm font-medium"
                                style={{ color: c }}
                              >
                                Apply now
                                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                              </span>
                            </div>
                          </Link>
                        </Reveal>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ) : (
          <Reveal className="relative">
            <div className="overflow-hidden border border-border bg-surface">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                {/* Left */}
                <div className="flex min-h-[420px] flex-col justify-between border-b border-border p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
                  <div>
                    <span className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-accent">
                      Careers
                    </span>

                    <h2 className="mt-6 max-w-md text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                      Discover your
                      <br />
                      future
                    </h2>

                    <p className="mt-6 max-w-md text-body-sm leading-7 text-muted">
                      We may not have a specific role listed today, but {"we're"}
                      always interested in meeting talented people.
                    </p>
                  </div>

                  <a
                    href={`mailto:${brand.contactEmail}?subject=Open Application`}
                    className="group mt-8 inline-flex w-fit items-center gap-2 border border-border px-5 py-3 text-sm font-medium transition-all hover:border-accent"
                  >
                    Open application
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>

                {/* Right */}
                <div className="flex min-h-[420px] items-center p-8 sm:p-10 lg:p-14">
                  <div>
                    <p className="text-lg font-medium">
                      Nothing publicly listed right now
                    </p>

                    <p className="mt-3 max-w-lg text-body-sm leading-7 text-muted">
                      Send us your resume and tell us what {"you'd"} like to work
                      on. {"We'll"} keep your profile in mind for future
                      opportunities.
                    </p>

                    <a
                      href={`mailto:${brand.contactEmail}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent"
                    >
                      {brand.contactEmail}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </section>

      {/* team life & benefits */}
      <section className="border-y border-border bg-surface-muted/50">
        <div className="section mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="text-h2 font-semibold tracking-tight">
              Team Life & Benefits
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-h4 mt-4 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-body-sm text-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* employee spotlight — real roster entries, no invented quotes */}
      {spotlight.length > 0 && (
        <section className="section mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="text-h2 font-semibold tracking-tight">
              Employee Spotlight
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {spotlight.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-6">
                  {p.photo ? (
                    <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                      <Image src={p.photo} alt={p.name} fill sizes="56px" className="object-cover object-top" />
                    </span>
                  ) : (
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-accent to-accent-2 text-base font-bold text-white">
                      {initials(p.name)}
                    </span>
                  )}
                  <div>
                    <p className="font-semibold">{p.name}</p>
                    <p className="text-caption text-accent">{p.role}</p>
                    <p className="mt-2 text-body-sm text-muted">{p.does}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* talent community CTA */}
      <section className="border-y border-border bg-surface-muted/50">
        <div className="section mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start gap-6 rounded-3xl bg-linear-to-br from-accent to-accent-2 p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <h2 className="text-h3 font-semibold">
                  Join Our Talent Community
                </h2>
                <p className="mt-2 max-w-md text-body-sm text-white/85">
                  Don&apos;t see your ideal role listed? We&apos;re always glad
                  to hear from strong people.
                </p>
              </div>
              <Link
                href="/careers/apply"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-white/90"
              >
                Send your profile
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* culture & philosophy */}
      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="text-h2 font-semibold tracking-tight">
            Our Culture & Philosophy
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {culture.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-border bg-accent-soft/40 p-8">
                <h3 className="text-h3 font-semibold">{c.title}</h3>
                <p className="mt-3 text-body-sm text-muted">{c.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {c.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2.5 text-body-sm text-foreground/85"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-linear-to-r from-accent to-accent-2" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
