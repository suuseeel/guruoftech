import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { Reveal } from "@/components/reveal";
import { jobs } from "@/components/careers/data";
import { ApplyForm } from "@/components/careers/apply-form";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
    title: "Apply",
    description: brandText("Apply for a role at Guru of Tech.", brand),
  };
}

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role } = await searchParams;
  const job = jobs.find((j) => j.slug === role);

  return (
    <section className="section-hero mx-auto max-w-3xl px-6 lg:px-8">
      <Reveal>
        <Link
          href="/careers"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to careers
        </Link>
        <h2 className="mt-4 text-h2 font-semibold tracking-tight">
          {job ? (
            <>
              Apply for <br/> <span className="text-accent">{job.title}</span>
            </>
          ) : (
            <>
              Tell us about <span className="text-accent">yourself</span>
            </>
          )}
        </h2>
        <p className="mt-4 text-body-lg text-muted">
          {job
            ? `${job.team} · ${job.location} · ${job.type}`
            : "Don't see a specific role? Send your profile and we'll reach out when something fits."}
        </p>
      </Reveal>

      <div className="mt-12">
        <ApplyForm jobs={jobs} initialRoleSlug={job?.slug} />
      </div>
    </section>
  );
}
