import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { BadgeCheck, BellOff, CalendarClock, FileHeart, FileText, ShieldCheck, Sparkles } from "lucide-react";
import { HeroSplit } from "@/components/industry/hero";
import {
  AIOpportunities,
  CtaPanel,
  OfferRows,
  RelatedIndustries,
  ScenarioCard,
  StatsStrip,
} from "@/components/industry/sections";

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

const aiOpportunities = [
  { icon: BellOff, title: "No-show prediction", desc: "Flag appointments likely to be missed so staff can double-book the slot or follow up ahead of time." },
  { icon: FileText, title: "Clinical note summarization", desc: "Turn long visit notes into a structured summary the next clinician can actually read in a minute." },
  { icon: BadgeCheck, title: "Insurance eligibility checks", desc: "Cross-check a patient's coverage the night before a visit, instead of at the front desk during check-in." },
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
      <AIOpportunities
        title="Where AI fits into healthcare software"
        desc="Beyond triage, here's where a focused AI feature tends to pay for itself fastest."
        items={aiOpportunities}
      />
      <ScenarioCard
        title="Catching insurance issues before check-in"
        scenario="A multi-location clinic was losing staff hours to insurance back-and-forth at the front desk. Running an AI eligibility check the night before each appointment flags coverage issues early, so the front desk resolves them before the patient walks in instead of during check-in."
      />
      <StatsStrip />
      <CtaPanel title="Building a healthcare product?" />
      <RelatedIndustries current="healthcare" />
    </>
  );
}
