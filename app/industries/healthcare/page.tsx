import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { CalendarClock, FileHeart, ShieldCheck, Sparkles } from "lucide-react";
import { HeroSplit } from "@/components/industry/hero";
import { CtaPanel, OfferRows, RelatedIndustries, StatsStrip } from "@/components/industry/sections";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Healthcare",
  description: brandText("Patient portals, scheduling, and compliant record systems built by Guru of Tech.", brand),
  };
}

const offerings = [
  { icon: CalendarClock, title: "Patient portals & scheduling", desc: "Portals where patients book, reschedule and follow up without calling the front desk." },
  { icon: FileHeart, title: "Compliant record systems", desc: "Record-keeping software built around the privacy and access rules healthcare requires." },
  { icon: Sparkles, title: "AI triage assistants", desc: "Assistants that sort incoming requests so the right person sees them first." },
  { icon: ShieldCheck, title: "Secure, confidential by default", desc: "The same NDA and strict data-handling standard we apply on every project." },
];

export default function HealthcarePage() {
  return (
    <>
      <HeroSplit
        name="Healthcare"
        image="/homepage/Healthcare_3D.png"
        title="Software for healthcare teams and the patients they serve"
        intro="Patient portals, scheduling, and compliant record systems. A fuller write-up for this page is on the way."
      />
      <OfferRows offerings={offerings} />
      <StatsStrip />
      <CtaPanel title="Building a healthcare product?" />
      <RelatedIndustries current="healthcare" />
    </>
  );
}
