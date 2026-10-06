import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaPanel } from "@/components/industry/sections";
import { getPost, posts } from "@/components/blog/data";
import { BlogBody } from "@/components/blog/body";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  const brand = await getRequestBrand();
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: brandText(post.excerpt, brand),
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="section-hero mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-caption text-muted">
            <span className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-semibold text-accent">
              <post.icon className="h-3.5 w-3.5" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
          <h1 className="mt-4 text-h2 font-semibold tracking-tight">{post.title}</h1>
          <p className="mt-4 text-body-lg text-muted">{post.excerpt}</p>
        </Reveal>
      </section>

      <section className="section mx-auto max-w-3xl px-6 lg:px-8">
        <BlogBody blocks={post.body} />
      </section>

      {more.length > 0 && (
        <section className="border-t border-border bg-surface-muted/50">
          <div className="section mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <h2 className="text-h3 font-semibold tracking-tight">More from the blog</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {more.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
                  >
                    <span className="text-caption font-semibold uppercase tracking-widest text-accent">{p.category}</span>
                    <h3 className="text-h4 mt-2 font-semibold transition-colors group-hover:text-accent">{p.title}</h3>
                    <p className="mt-2 flex-1 text-body-sm text-muted">{p.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      Read the post
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaPanel title="Have a project in mind?" />
    </>
  );
}
