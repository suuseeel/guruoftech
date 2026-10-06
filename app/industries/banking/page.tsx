import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { Contact, FileStack, Handshake, Lightbulb, LineChart, Lock, PiggyBank, ShieldAlert, Wallet, Wrench } from "lucide-react";
import { HeroBanner } from "@/components/industry/hero";
import { toClientOfferings } from "@/components/industry/serialize";
import { OfferTabs } from "@/components/industry/interactive";
import {
  AIOpportunities,
  BodyCard,
  CtaImage,
  ProcessLabelsGrid,
  RelatedIndustries,
  ScenarioCard,
  StatsBand,
} from "@/components/industry/sections";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Banking & Financial Services",
  description:
    brandText("GuruOfTech develops customized banking and financial websites and mobile apps — financial management, stock trading, alternative investment and P2P lending.", brand),
  };
}

const offerings = [
  {
    icon: Wallet,
    title: "Financial Management App",
    desc: "Our fintech specialists have created a variety of honorable personal financial applications that provide users with a strong platform to measure, manage, and increase their money.",
  },
  {
    icon: LineChart,
    title: "Trading Stock App",
    desc: "Our fintech engineers included dynamic tools that enable consumers to efficiently monitor their money flow and execute requests.",
  },
  {
    icon: PiggyBank,
    title: "Alternative Investment",
    desc: "Fintech professionals at GuruOfTech have created user-friendly alternative investing software that enables buyers and sellers of green bonds, corporate bonds, private equity, corporate FDs, etc.",
  },
  {
    icon: Handshake,
    title: "P2P Lending App",
    desc: "With the smooth integration of useful features, our fintech software developers create excellent P2P lending apps. Our fintech developers incorporate strong security elements since lenders and borrowers must carry out the transactions in order to prevent any hiccups on the platform.",
  },
];

const steps = [
  { icon: Lock, title: "Conceptualization" },
  { icon: Lightbulb, title: "Visualization" },
  { icon: Contact, title: "Deployment" },
  { icon: Wrench, title: "Management Goals" },
];

const copy = {
  name: "Banking & Financial Services",
  image: "/homepage/Banking_3D.png",
  title: "Our Experts Can Develop A Customized Solution Based On Your Industry's Needs.",
  intro:
    "Our team of professionals analyses your company's needs and creates a variety of cutting-edge features for the development of banking and financial websites and mobile applications.",
  paragraphs: [
    "The entire purpose of the banking and finance industries is to assume the obligations of the financial sector and connect the economy. GuruOfTech is a top mobile app and website development company that works with a variety of financial industries to open doors for quick and highly secure transactions. Customers just need to have access to mobile banking.",
    "Customers may complete their banking tasks with a single click thanks to the mobile app and online banking services. Customers these days prefer using net banking instead of physically visiting public institutions. Offering mobile and internet banking makes it simple for customers to conduct online transactions and approach paperless money for worldwide financial development.",
    "Almost all facets of life are improving thanks to the mobile and web app sectors. Why not utilize banking & finance to your advantage?",
  ],
};

const aiOpportunities = [
  { icon: ShieldAlert, title: "Anomaly detection on transactions", desc: "Surface unusual account activity for review automatically, instead of relying on a customer to notice and report it first." },
  { icon: FileStack, title: "Document intelligence", desc: "Extract the fields that matter from statements and forms, instead of a back-office team retyping them by hand." },
  { icon: LineChart, title: "Automated compliance reporting", desc: "Pull required fields from source systems into a ready-to-review report, instead of assembling one by hand each cycle." },
];

export default function BankingPage() {
  return (
    <>
      <HeroBanner {...copy} chips={offerings.map((o) => o.title)} />
      <BodyCard paragraphs={copy.paragraphs} />
      <OfferTabs offerings={toClientOfferings(offerings)} heading="Financial products we build" />
      <AIOpportunities
        title="Where AI fits into banking software"
        desc="Alongside the financial products above, these are the back-office features that save the most hours."
        items={aiOpportunities}
      />
      <ScenarioCard
        title="Turning a two-day report into a same-day one"
        scenario="A back-office team spent two days every month assembling a compliance report by hand from five different systems. An automated pull-and-format step turns that into a same-day review, with the team checking the output instead of building it from scratch."
      />
      <StatsBand />
      <ProcessLabelsGrid title="Our Process" steps={steps} />
      <CtaImage title="Building a banking or finance product?" image={copy.image} />
      <RelatedIndustries current="banking" />
    </>
  );
}
