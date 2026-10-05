import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { ArrowUpRight, Award, Compass, LifeBuoy, Mail, PartyPopper } from "lucide-react";
import { Reveal } from "@/components/reveal";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Careers",
  description: brandText("Level up your career graph and join the GuruOfTech team for an exciting journey.", brand),
  };
}

const perks = [
  {
    icon: Compass,
    title: "Flexible Work Environment",
    desc: "Independence of thought is fostered by flexibility in the workplace. We prioritize striking a balance between work and personal life by cultivating a sense of autonomy.",
  },
  {
    icon: Award,
    title: "Reward & Recognition",
    desc: "Everyone that goes above and beyond to help our business succeed is a valuable asset to us. In every manner, we are in awe of their efforts.",
  },
  {
    icon: LifeBuoy,
    title: "Remote Technical Support",
    desc: "We have a proactive and committed crew on the job to address any technical issues and make working with us simpler.",
  },
  {
    icon: PartyPopper,
    title: "Leisure",
    desc: "Throughout the year, we do excursions with our coworkers. We supplement our remote workdays with a variety of video conference-based activities.",
  },
];

/* Decorative only — a rising staircase, no data implied. */
function Staircase() {
  const heights = [28, 40, 54, 70, 88, 110];
  return (
    <div aria-hidden className="flex h-64 items-end justify-center gap-3">
      {heights.map((h, i) => (
        <div
          key={h}
          style={{ height: `${h}%` }}
          className="relative w-12 rounded-t-2xl bg-linear-to-t from-accent/20 to-accent sm:w-14"
        >
          {i === heights.length - 1 && (
            <span className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-accent-2 shadow-[0_0_24px_var(--accent-2)]" />
          )}
        </div>
      ))}
    </div>
  );
}

export default function CareersPage() {
  return (
    <>
      <section className="section-hero relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow-badge">Careers</span>
            <h1 className="mt-4 text-h1 font-semibold tracking-tight">
              You can level up your <span className="text-accent">career graph</span> and join the team for an
              exciting journey!
            </h1>
            <p className="mt-4 max-w-xl text-body-lg text-muted">
              Experience the ideal work-life balance where adaptability improves organizational performance,
              personal benefit, loyalty, and commitment to the team and individual goals.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Staircase />
          </Reveal>
        </div>
      </section>

      {/* intro: heading left, paragraph right */}
      <section className="border-y border-border bg-surface-muted/50">
        <div className="section mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
          <Reveal>
            <h2 className="text-h2 font-semibold tracking-tight">Embark on a career journey with us</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-body text-muted">
              GuruOfTech is a well-known IT outsourcing business. We deliver creative solutions to our clients
              all over the world by fusing business domain expertise, tried-and-true techniques, and the newest
              tech stack. We adhere to a well-defined set of cultural and professional principles that reflect
              our greatest objectives for how we interact with coworkers, fellows, alumni, partners, and board
              members.
            </p>
          </Reveal>
        </div>
      </section>

      {/* perks: four open columns, no boxes */}
      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="border-l-2 border-accent/40 pl-5 transition-colors hover:border-accent">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="text-h4 mt-4 font-semibold">{p.title}</h3>
                <p className="mt-2 text-body-sm text-muted">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* growth chart: dark panel */}
      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#070d22] text-white ring-1 ring-white/10 p-8 sm:p-12">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/40 blur-[110px]" />
            <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent-2/30 blur-[110px]" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <div>
                <span className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-white/60">Growth</span>
                <h2 className="text-h2 mt-4 font-semibold tracking-tight">Explore Your Growth Chart!</h2>
                <p className="mt-4 text-body-sm text-white/75">
                  Get the best platform to use your knowledge and skills on fascinating new problems. Utilize the
                  appropriate tools to continuously learn and develop while resolving the largest issues facing
                  clients. GuruOfTech is dedicated to advancing your career, from leadership to learning. Find the
                  position that best suits you right now.
                </p>
              </div>
              <div className="space-y-5 text-body-sm text-white/75">
                <p>
                  We innovate, do the seemingly impossible, and positively impact our clients, our community, and
                  society as a whole. Together, we take risky actions, provide one another support, collaborate,
                  and realize a common goal. We are motivated by our culture, and our beliefs make us who we are.
                  People are what motivate us to work tirelessly and consistently to innovate, enhance our teams,
                  and provide the greatest services.
                </p>
                <p className="rounded-2xl border border-white/15 bg-white/5 text-white/90 p-6">
                  We understand the goals and motivations of today&apos;s workforce at GuruOfTech. Diversity in all
                  forms is encouraged and valued.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* openings: a job board with an honest empty state */}
      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-accent">Current Openings</span>
              <h2 className="text-h2 mt-4 font-semibold tracking-tight">Nothing publicly listed right now</h2>
            </div>
          </div>
          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-surface">
            <div className="hidden grid-cols-[2fr_1fr_1fr_auto] gap-4 border-b border-border bg-surface-muted/60 px-8 py-3 text-caption font-semibold uppercase tracking-widest text-muted md:grid">
              <span>Role</span>
              <span>Team</span>
              <span>Location</span>
              <span className="w-24" />
            </div>
            <div className="flex flex-col items-start gap-6 px-8 py-12 md:flex-row md:items-center md:justify-between">
              <p className="max-w-xl text-body-sm text-muted">
                We don&apos;t have specific openings posted at the moment, but we&apos;re always glad to hear from
                strong engineers, designers, and QA specialists. Send your resume and a note about what you&apos;d
                want to work on.
              </p>
              <a
                href="mailto:info@guruoftech.com"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
              >
                <Mail className="h-4 w-4" />
                info@guruoftech.com
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
