import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { CreditCard, FileSearch, Landmark, ScanLine, Smartphone, Wallet } from "lucide-react";
import { HeroSplit } from "@/components/industry/hero";
import {
  AIOpportunities,
  BodyDropcap,
  CtaImage,
  OfferBento,
  ProcessTimeline,
  RelatedIndustries,
  ScenarioCard,
  StatsGradient,
} from "@/components/industry/sections";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "FinTech",
  description:
    brandText("GuruOfTech develops intelligent FinTech software — payment gateways, digital wallets, lending apps and mobile banking — to secure financial processes.", brand),
  };
}

const offerings = [
  {
    icon: CreditCard,
    title: "Payment Gateways",
    desc: "Enable end-to-end third-party transactions with a strong, reliable, and easy payment system. We provide a user-friendly infrastructure that enables businesses to request and receive payments from dependable middlemen.",
  },
  {
    icon: Wallet,
    title: "Digital Wallet",
    desc: "Give people a streamlined process to list and manage their debit and credit cards through a single infrastructure. We develop and build user-friendly digital wallets that make it simple and quick to add and send money.",
  },
  {
    icon: Landmark,
    title: "Lending App",
    desc: "Enhancing the personalization, availability, and dependability of peer-to-peer. We help small company owners and lenders provide beneficial digital lending apps to end users.",
  },
  {
    icon: Smartphone,
    title: "Mobile Banking",
    desc: "We can provide user-focused solutions to a large audience by automating the supply of financial services and standardizing the usage of the newest technological developments.",
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
  name: "FinTech",
  image: "/homepage/Fintech_3D.png",
  title: "Develop Intelligent FinTech Software To Secure Financial Processes",
  intro:
    "We develop market-ready FinTech apps to meet a range of client needs. The sector is making use of the chance to close gaps in conventional financing and put forward cutting-edge alternatives.",
  paragraphs: [
    "Our FinTech software services streamline your financial activities, transform conventional banking models, and provide flexible financial user interfaces to increase customer pleasure. You may take use of the potential of end-to-end FinTech software development supported by developing technology advances, assuring the timely delivery of your next-generation FinTech solution.",
    "GuruOfTech, a top custom Fintech software development business, promises to provide financial sector participants with tailored digital solutions to stay ahead of the curve. Our skilled FinTech developers assist financial institutions in adapting to rapidly changing regulatory requirements as well as shifting consumer preferences. Our services for developing custom financial software encompass everything from thorough financial management to astute fraud detection and risk management.",
  ],
};

const aiOpportunities = [
  { icon: ScanLine, title: "Fraud-detection models", desc: "Score transactions in real time against usage patterns, instead of catching fraud after the chargeback arrives." },
  { icon: FileSearch, title: "Automated KYC & document checks", desc: "Pre-screen onboarding documents so the compliance team only reviews the applications that actually need a human judgment call." },
  { icon: Landmark, title: "Credit risk scoring", desc: "Model-based risk signals that support an underwriter's decision rather than replace it." },
];

export default function FintechPage() {
  return (
    <>
      <HeroSplit {...copy} reverse />
      <OfferBento offerings={offerings} />
      <AIOpportunities
        title="Where AI fits into FinTech software"
        desc="Payments and lending apps generate exactly the kind of transaction data these features need to work well."
        items={aiOpportunities}
      />
      <ScenarioCard
        title="Pre-screening merchant onboarding"
        scenario="A payments platform was manually reviewing every new-merchant application end to end. An automated document-verification step pre-screens the straightforward approvals, so the compliance team spends its time on the applications that actually need a human judgment call."
      />
      <BodyDropcap paragraphs={copy.paragraphs} />
      <StatsGradient />
      <ProcessTimeline
        title="Our Methodology for Developing Mobile FinTech Solution"
        desc="Agile Methodologies Enable Us to Develop Long-Term FinTech Digital Solutions"
        steps={steps}
      />
      <CtaImage title="Building a FinTech product?" image={copy.image} />
      <RelatedIndustries current="fintech" />
    </>
  );
}
