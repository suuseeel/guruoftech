import type { Metadata } from "next";
import Link from "next/link";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { posts } from "@/components/blog/data";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Blog",
  description: brandText("Engineering notes, process, and opinions from the Guru of Tech team.", brand),
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="section-hero mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow-badge">Blog</span>
          <h1 className="mt-4 text-h2 font-semibold tracking-tight">
            Notes on <span className="text-accent">AI, engineering, and process</span>
          </h1>
          <p className="mt-4 text-body-lg text-muted">
            What we&apos;re building, how we think about tradeoffs, and what we&apos;ve learned from real projects.
          </p>
        </Reveal>
      </section>

      {featured && (
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-8 overflow-hidden rounded-[2rem] border border-border bg-linear-to-br from-accent-soft/70 to-surface p-8 transition-colors hover:border-accent lg:grid-cols-[auto_1fr] lg:items-center lg:p-12"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-accent to-accent-2 text-white">
                <featured.icon className="h-7 w-7" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-3 text-caption text-muted">
                  <span className="rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-semibold text-accent">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="text-h2 mt-3 font-semibold tracking-tight transition-colors group-hover:text-accent">
                  {featured.title}
                </h2>
                <p className="mt-3 max-w-2xl text-body text-muted">{featured.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Read the post
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <post.icon className="h-5 w-5" />
                </span>
                <span className="mt-4 text-caption font-semibold uppercase tracking-widest text-accent">
                  {post.category}
                </span>
                <h3 className="text-h4 mt-2 font-semibold transition-colors group-hover:text-accent">{post.title}</h3>
                <p className="mt-2 flex-1 text-body-sm text-muted">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4 text-caption text-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
