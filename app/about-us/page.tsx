import type { Metadata } from "next";
import Link from "next/link";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { ArrowUpRight, Compass, Quote, RefreshCw, ShieldCheck, Target, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaBar } from "@/components/industry/sections";
import { team } from "@/components/team/data";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "About Us",
  description:
    brandText("GuruOfTech is a globally recognized Web Development Company offering trustworthy and reliable Software Development, Software Outsourcing, AI, Analytics, and DevOps Services.", brand),
  };
}

const stats = [
  { value: "2,531", label: "Project Finished" },
  { value: "15+", label: "Years Experience" },
  { value: "280", label: "Happy Clients" },
  { value: "3,587", label: "Recognition" },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Why Choose Us?",
    desc: "We have a team of expert developers who can collaborate with your team throughout the project process, with the goal of ensuring the project's success.",
  },
  {
    icon: RefreshCw,
    title: "Up-to-Date Developers",
    desc: "We have a team of expert developers who keep themselves updated with the latest technological experts. Choose us for a sustainable digital transformation.",
  },
  {
    icon: ShieldCheck,
    title: "Security and Confidentiality",
    desc: "We respect your privacy and your ideas are entirely secure with us. With strict data confidentiality measures in place, our staff guarantees the privacy of active projects.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero: left-aligned title, the four intro statements laid out as a manifesto board */}
      <section className="section-hero relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-accent/15 blur-[110px]" />
        <Reveal className="relative">
          <span className="eyebrow-badge">About Us</span>
          <h1 className="mt-4 max-w-3xl text-h2 font-semibold tracking-tight">
            About{" "}
            <span className="bg-linear-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              Guru of Tech
            </span>
          </h1>
        </Reveal>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:grid-rows-[auto_auto_auto]">
          <Reveal className="lg:row-span-3">
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-12">
              <Quote className="absolute -bottom-3 right-6 h-24 w-24 text-accent/10" />
              <p className="relative pb-6 text-[clamp(1.1rem,1.6vw,1.4rem)] leading-relaxed text-foreground/90">
                We are a globally recognized Web Development Company offering trustworthy and reliable
                Software Development, Software Outsourcing, AI, Analytics, and DevOps Services.
                We have a team of highly talented professional developers in various technologies. We
                aim to deliver our customers the best and most customized web solutions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-border bg-accent-soft/60 p-6">
              <span className="text-caption font-semibold uppercase tracking-widest text-accent">A question</span>
              <p className="mt-2 text-body-sm text-foreground/85">
                Do you have a business idea and are looking for an ideal website or software development
                company to offer you a customized solution based on your unique ideas?
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-linear-to-br from-accent to-accent-2 p-6 text-white shadow-lg shadow-accent/20">
              <p className="text-h3 font-semibold">You have landed in the right place!</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-border bg-surface p-6">
              <p className="text-body-sm text-muted">
                Get the perfect web solution tailored to meet your unique needs. We have an expert
                solution for every technology you name.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Two staggered panels */}
      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-12">
              <span className="absolute -right-3 -top-8 select-none text-[9rem] font-bold leading-none text-accent/8">
                01
              </span>
              <h2 className="text-h3 relative max-w-sm font-semibold">
                An Acclaimed & Reliable Website Development Company
              </h2>
              <p className="relative mt-4 text-body-sm text-muted">
                GuruOfTech is recognized for providing exceptional website development services, for which
                we have won praise from major organizations across a range of industries. In accordance
                with the needs of our clients, we develop scalable, responsive, standards-compliant, and
                reliable web solutions. We build a robust solution for every business, whether a startup
                or an enterprise.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="md:mt-16">
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-linear-to-br from-accent-soft to-surface p-8 sm:p-12">
              <span className="absolute -right-3 -top-8 select-none text-[9rem] font-bold leading-none text-accent/8">
                02
              </span>
              <h2 className="text-h3 relative max-w-sm font-semibold">
                We Ensure Our Clients Receive The Best & Most Effective Results!
              </h2>
              <p className="relative mt-4 text-body-sm text-muted">
                We have been successful in winning over a variety of clientele thanks to our tenacious
                efforts and careful work. We have accomplished several goals and received a great deal of
                gratitude from our devoted customers. We take great pride in our work as a web
                development firm. We&apos;ve provided cutting-edge solutions to numerous global brands.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Counter rail: inverted band */}
      <section className="bg-foreground text-background">
        <dl className="section mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <div key={s.label} className={`px-2 ${i > 0 ? "lg:border-l lg:border-background/15 lg:pl-8" : ""}`}>
              <dd className="text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-none">{s.value}</dd>
              <dt className="mt-3 text-caption uppercase tracking-widest opacity-70">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Mission & Vision with ghost words */}
      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-8 pb-28 sm:p-12 sm:pb-32">
              <span className="pointer-events-none absolute -bottom-6 -right-4 select-none text-[6.5rem] font-black uppercase leading-none tracking-tight text-accent/8 sm:text-[8rem]">
                Mission
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Target className="h-6 w-6" />
              </span>
              <h2 className="text-h2 relative mt-4 font-semibold uppercase tracking-wide">Mission</h2>
              <p className="relative mt-4 text-body-sm text-muted">
                GuruOfTech is committed to exceeding customers&apos; expectations by providing top-notch
                development solutions to its customers. We are known across the world as one of the
                website and application development companies assisting startups and businesses. When it
                comes to creating cutting-edge solutions based on blockchain, AR/VR, and artificial
                intelligence, we provide top-notch development services while taking budget and time
                restrictions into consideration.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-accent to-accent-2 p-8 pb-28 text-white sm:p-12 sm:pb-32">
              <span className="pointer-events-none absolute -bottom-6 -right-4 select-none text-[6.5rem] font-black uppercase leading-none tracking-tight text-white/10 sm:text-[8rem]">
                Vision
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <Compass className="h-6 w-6" />
              </span>
              <h2 className="text-h2 relative mt-4 font-semibold uppercase tracking-wide">Vision</h2>
              <p className="relative mt-4 text-body-sm text-white/85">
                Our vision is to increase the effectiveness of the supplied solution by offering top-notch
                business mobility solutions. With professional consultations that give optimum choices and
                trustworthy, affordable solutions, our skilled team answers the aims of clients. Our
                company&apos;s social slogan is to &quot;make people&apos;s lives simpler, better, and
                safer&quot; in order to establish ourselves as a benchmark for dependability, creativity,
                and tenacity.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why us: three unboxed columns */}
      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid divide-border border-t border-border md:grid-cols-3 md:divide-x">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className={`h-full py-10 ${i === 0 ? "md:pr-8" : i === 2 ? "md:pl-8" : "md:px-8"}`}>
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-accent" />
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h2 className="text-h4 mt-4 font-semibold">{item.title}</h2>
                <p className="mt-2 text-body-sm text-muted">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Meet the team — the only place this links out from */}
      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <Link
            href="/team"
            className="group flex flex-col items-start gap-6 overflow-hidden rounded-3xl border border-border bg-linear-to-br from-accent-soft/70 to-surface p-8 transition-colors hover:border-accent sm:flex-row sm:items-center sm:justify-between sm:p-12"
          >
            <div>
              <span className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-accent">Who&apos;s behind it</span>
              <h2 className="text-h3 mt-3 font-semibold tracking-tight">Meet the team</h2>
              <p className="mt-2 max-w-md text-body-sm text-muted">
                {team.length} people, staffed as a small senior pod rather than a rotating cast — see who
                you&apos;d actually work with.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors group-hover:bg-accent-strong">
              Meet the team
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </Reveal>
      </section>

      <CtaBar title="Ready to build something with us?" />
    </>
  );
}
