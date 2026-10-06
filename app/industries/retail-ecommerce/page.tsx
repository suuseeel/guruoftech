import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { Boxes, Eye, Layers, Store, Tags, Truck, TrendingUp } from "lucide-react";
import { HeroStage } from "@/components/industry/hero";
import {
  AIOpportunities,
  BodyPullQuote,
  CtaPanel,
  OfferNumerals,
  ProcessChevrons,
  RelatedIndustries,
  ScenarioCard,
  StatsOutline,
} from "@/components/industry/sections";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Retail",
  description:
    brandText("GuruOfTech builds inventory, POS, and store-operations software for retail teams running more than one location.", brand),
  };
}

const offerings = [
  {
    icon: Boxes,
    title: "Inventory & POS systems",
    desc: "Real-time inventory and point-of-sale software that keeps stock numbers accurate across every location, not just the one you're standing in.",
  },
  {
    icon: Layers,
    title: "Store operations dashboards",
    desc: "A single view into sales, staffing, and stock for managers running more than one location, instead of five spreadsheets stitched together by hand.",
  },
  {
    icon: Truck,
    title: "Supply chain visibility",
    desc: "Track goods from supplier to shelf so a delay shows up on a dashboard, not as an empty shelf a customer notices first.",
  },
  {
    icon: Store,
    title: "Loyalty & customer data",
    desc: "Loyalty programs and customer data tools that work in-store without duplicating records across systems that don't talk to each other.",
  },
];

const steps = [
  { step: "Step 1", title: "Conceptualization", items: ["Submit your thoughts", "Describe the attributes.", "Establish a spending limit."] },
  { step: "Step 2", title: "Visualization", items: ["Create a technological stack.", "Make a prototype", "Desire a plan of action"] },
  { step: "Step 3", title: "Creation", items: ["Create a user interface", "Include a database", "Code the features and functionalities."] },
  { step: "Step 4", title: "Deployment", items: ["Test", "Install", "Launch"] },
];

const copy = {
  name: "Retail",
  image: "/homepage/Retail_3D.png",
  title: "Retail software built for store operations, not just a storefront",
  intro:
    "Inventory, POS, and store-operations tools designed around how retail teams actually run a shift — across one location or fifty.",
  paragraphs: [
    "Retail businesses are under constant pressure to do more with the same headcount — track inventory accurately, keep every location in sync, and give staff tools that don't slow down a busy shift. The operations that get this right earn back hours every week instead of losing them to manual counts and spreadsheets.",
    "We build inventory, POS, and store-operations software that gives retail teams one accurate picture of stock and sales across every location, instead of reconciling numbers from five different systems after the fact.",
  ],
};

const aiOpportunities = [
  { icon: TrendingUp, title: "Demand forecasting", desc: "Predict what to reorder and when, per location, instead of guessing off last month's numbers." },
  { icon: Eye, title: "Inventory anomaly detection", desc: "Flag shrinkage or count mismatches across stores automatically, instead of finding them at the next physical count." },
  { icon: Tags, title: "Personalized loyalty offers", desc: "Target loyalty offers based on actual purchase history instead of sending the same discount to everyone." },
];

export default function RetailPage() {
  return (
    <>
      <HeroStage {...copy} chips={offerings.map((o) => o.title)} />
      <BodyPullQuote paragraphs={copy.paragraphs} />
      <OfferNumerals offerings={offerings} />
      <AIOpportunities
        title="Where AI fits into retail software"
        desc="These are the features that tend to pay for themselves fastest once the base inventory and POS system is in place."
        items={aiOpportunities}
      />
      <ScenarioCard
        title="Catching a demand mismatch before the next order cycle"
        scenario="A retail chain was over-ordering slow sellers at one branch while running out of fast ones at another. A demand-forecasting model trained on each location's own sales history catches the mismatch before the next order cycle, not after a shelf is already empty or overstocked."
      />
      <ProcessChevrons
        title="The Process Supporting Your Needs"
        desc="To achieve your goals, we employ an agile and strategic framework."
        steps={steps}
      />
      <StatsOutline />
      <CtaPanel title="Building a retail software product?" />
      <RelatedIndustries current="retail-ecommerce" />
    </>
  );
}
