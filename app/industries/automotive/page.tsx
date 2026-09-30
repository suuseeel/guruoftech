import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { Cloud, GraduationCap, Network, ShieldCheck } from "lucide-react";
import { HeroSplit } from "@/components/industry/hero";
import {
  BodySidebar,
  CtaBar,
  OfferRows,
  ProcessStepper,
  RelatedIndustries,
  StatsStrip,
} from "@/components/industry/sections";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Automotive",
  description:
    brandText("GuruOfTech delivers feature-rich automotive IT solutions — cloud migration, resilient IT operations, standardized business processes and remote learning at scale.", brand),
  };
}

const offerings = [
  {
    icon: Cloud,
    title: "Boost Cloud Migration",
    desc: "GuruOfTech has extensive expertise in handling supply chain and cloud-hosted inventory systems. Automating global manufacturing and logistical operations are made possible by cloud apps.",
  },
  {
    icon: Network,
    title: "Ensure Resilient IT Operations",
    desc: "By utilizing AIOps, GuruOfTech assists manufacturers in their transition to autonomous IT operations. While aiding predictive analytics, it facilitates massive data administration.",
  },
  {
    icon: ShieldCheck,
    title: "Create Resilient Business Processes",
    desc: "GuruOfTech guarantees dependability through the process and business function standardization, from R&D through dealer network management and after-sales support. Our comprehensive information security policies and solutions improve service levels.",
  },
  {
    icon: GraduationCap,
    title: "Enable Remote Learning At Scale",
    desc: "GuruOfTech combines immersive technology with role-based material to provide an engaging learning environment for staff upskilling.",
  },
];

const steps = [
  { step: "Step 1", title: "Plan", items: ["Recognize the requirements", "Create a strategy for implementation"] },
  {
    step: "Step 2",
    title: "Develop",
    items: [
      "Prototype the software",
      "The application's design",
      "Backend Development Using a Supporting Technology",
      "Join databases together",
    ],
  },
  { step: "Step 3", title: "Test", items: ["An excellent analysis", "Review of performance", "Client approval"] },
  { step: "Step 4", title: "Deploy", items: ["Distribution", "Installation", "Use it!"] },
];

const copy = {
  name: "Automotive",
  image: "/homepage/Automotive_3D.png",
  title: "Our Promise Is To Deliver Feature-Rich Automotive Solutions",
  intro:
    "With our superior solutions, we assist you in staying one step ahead of conventional automotive solutions. By providing solutions with plenty of features, we improve the customer experience and customer journey.",
  paragraphs: [
    "The automobile sector is one of the most inventive in all fields, including design, purchasing, supply chain management, workforce development, customer experience, and after-sales services. Automakers aim to cut operating expenses and boost efficiency in light of the industry's cyclical nature and growing complexity in operations. This can only be accomplished by automating repetitive processes, digitizing data gathering and processing for visibility and predictive purposes, improving supply-chain, and putting in place a reliable monitoring system.",
    "Due to GuruOfTech's extensive experience in next-generation automotive IT solutions and automotive consulting services, automakers have revolutionized their operations and increased profitability.",
  ],
};

export default function AutomotivePage() {
  return (
    <>
      <HeroSplit {...copy} />
      <BodySidebar paragraphs={copy.paragraphs} />
      <OfferRows offerings={offerings} />
      <StatsStrip />
      <ProcessStepper
        title="Our Methodology for Developing Automotive Industry Solutions"
        desc="Agile Methodologies Enable Us to Develop Long-Term Automotive Industry Solutions"
        steps={steps}
      />
      <CtaBar title="Building for automotive?" />
      <RelatedIndustries current="automotive" />
    </>
  );
}
