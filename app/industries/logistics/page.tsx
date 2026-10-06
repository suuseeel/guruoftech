import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { AlertTriangle, Code2, Compass, Contact, Lightbulb, Lock, PackageSearch, Rocket, Route, Wrench, Workflow } from "lucide-react";
import { HeroSplit } from "@/components/industry/hero";
import {
  AIOpportunities,
  BodyNumbered,
  CtaPanel,
  OfferRoute,
  ProcessLabelsPills,
  RelatedIndustries,
  ScenarioCard,
  StatsStrip,
} from "@/components/industry/sections";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Logistics & Transportation",
  description:
    brandText("GuruOfTech builds IT solutions for integrated logistics and transport — discovery, MVP development, migration and application development.", brand),
  };
}

const offerings = [
  {
    icon: Compass,
    title: "Discovery",
    desc: "Utilizing thorough documentation, analytical validation, and parameterized testing processes, explore the possibilities of your logistics app idea.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    desc: "Adopt a smart product development strategy by producing an MVP that includes the essential features and functions built in less time and money",
  },
  {
    icon: Workflow,
    title: "Migration",
    desc: "Utilize technology advancements to improve the technical architecture of your logistics mobile application.",
  },
  {
    icon: Code2,
    title: "Application Development",
    desc: "After the design, our app developers guarantee a complete application of their expertise into a technologically advanced application that stands out distinctively among a varied user base.",
  },
];

const steps = [
  { icon: Lock, title: "Conceptualization" },
  { icon: Lightbulb, title: "Visualization" },
  { icon: Contact, title: "Deployment" },
  { icon: Wrench, title: "Management Goals" },
];

const copy = {
  name: "Logistics & Transportation",
  image: "/homepage/Logistics_3D.png",
  title:
    "IT Solutions for Integrated Logistics & Transport to Serve Customers and Grow The Business",
  intro:
    "We are utilizing next-generation technology to provide a wonderful client experience through logical logistics and transportation IT solutions.",
  paragraphs: [
    "The transportation and logistics sector experiences rapid growth and prosperity. The industry observes daily massive transportation of people and packages by air, sea, and land from one place to another. Logistics IT development services greatly simplify corporate processes.",
    "Innovative app development is in high demand and has a significant influence on the logistics industry. The organization benefits from GuruOfTech's logistics and transportation IT development process with cost-effective transportation, fuel management, compliance, location monitoring systems, and a reduction in vehicle investment risks, which boosts productivity and efficiency.",
    "We give real-time insight, increased productivity, and delivery benchmarks through our web design and development for transport & logistics warehouse services.",
    "In order to compete with the tough and growing logistics competition, fleet management processes have been incorporated into logistics app development.",
  ],
};

const aiOpportunities = [
  { icon: Route, title: "Route optimization", desc: "Re-sequence stops around live traffic and delivery windows, instead of a route planned once at the start of the day." },
  { icon: AlertTriangle, title: "Delay prediction", desc: "Flag shipments at risk of missing their window based on traffic, weather, and historical patterns, while there's still time to act." },
  { icon: PackageSearch, title: "Warehouse demand forecasting", desc: "Predict picking and staffing needs by shift, instead of adjusting headcount after the backlog is already visible." },
];

export default function LogisticsPage() {
  return (
    <>
      <HeroSplit {...copy} route />
      <BodyNumbered paragraphs={copy.paragraphs} />
      <OfferRoute offerings={offerings} />
      <AIOpportunities
        title="Where AI fits into logistics software"
        desc="On top of discovery-to-deployment app work, these are the features that cut delay and rework the most."
        items={aiOpportunities}
      />
      <ScenarioCard
        title="Flagging a delay while there's still time to act"
        scenario="A regional carrier's dispatch team found out about late deliveries from the customer, not their own systems. A delay-prediction model flags at-risk shipments by midday, while there's still time to re-route the driver or notify the customer first."
      />
      <StatsStrip />
      <ProcessLabelsPills title="Our Process" steps={steps} />
      <CtaPanel title="Building a logistics product?" />
      <RelatedIndustries current="logistics" />
    </>
  );
}
