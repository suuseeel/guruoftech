import type { Metadata } from "next";
import { Cloud, Gauge, MessagesSquare, MoveRight } from "lucide-react";
import { HeroSplit } from "@/components/industry/hero";
import { BodyNumbered, CtaBar, OfferRoute } from "@/components/industry/sections";
import { TechCloud } from "@/components/service/art";
import { ProcessFive, ProviderTrio, RelatedLinks } from "@/components/service/blocks";
import { hireSteps, techMeta } from "@/components/service/data";

export const metadata: Metadata = {
  title: "Cloud & DevOps",
  description:
    "Hire AWS-certified developers with practical knowledge in administering and deploying software on AWS, Azure, and Google Cloud.",
};

const offerings = [
  { icon: Cloud, title: "AWS Application Development", desc: "On AWS, we create scalable, dependable, and secure cloud-native apps, leveraging current AWS features and services." },
  { icon: MoveRight, title: "AWS Migration Services", desc: "Our experts facilitate the rapid movement of infrastructure and applications to AWS, handling transitions from on-premises and existing cloud environments with extensive migration expertise." },
  { icon: Gauge, title: "AWS Optimization Services", desc: "Maximize performance and save costs in your AWS setup through collaborative analysis of performance opportunities and cost reduction strategies." },
  { icon: MessagesSquare, title: "AWS Consulting", desc: "Create an AWS environment that satisfies your unique business requirements — our specialists help you select the appropriate services and establish adoption pathways." },
];

const me = techMeta.find((t) => t.slug === "cloud-devops")!;

export default function CloudPage() {
  return (
    <>
      <HeroSplit
        route
        name="Cloud & DevOps"
        title="Hire Cloud & DevOps Developers"
        intro="We provide a committed group of AWS certified developers with practical knowledge in administering and deploying software on AWS."
        art={<TechCloud names={me.items} hub={Cloud} />}
      />
      <ProviderTrio
        providers={[
          { name: "Amazon AWS", icon: "AWS", desc: "Make use of AWS to choose the platform for your web apps, programming language, operating system, and other services you need." },
          { name: "Azure", icon: "Azure", desc: "We provide IaaS (Infrastructure as a Service) and PaaS (Product as a Service) for DevOps, the Internet of Things, ML, AI, security, analytics." },
          { name: "Google Cloud Platform", icon: "Google Cloud", desc: "You can create, release, and scale applications, websites, and services using the Google Cloud Platform on the same infrastructure as Google." },
        ]}
      />
      <BodyNumbered
        paragraphs={[
          "We offer comprehensive AWS development services across the complete project lifecycle. We maintain an extensive pool of AWS professionals capable of managing diverse cloud services and infrastructure needs.",
          "We enable organizations to build scalable applications, migrate existing systems to cloud platforms, optimize performance, and receive strategic guidance on AWS implementation. Our developers work with modern AWS tools including Lambda, API Gateway, and EC2.",
        ]}
      />
      <OfferRoute offerings={offerings} />
      <ProcessFive title="GuruOfTech steps for hiring AWS developers" steps={hireSteps} />
      <CtaBar title="Need cloud or DevOps developers?" />
      <RelatedLinks heading="More technologies" items={techMeta.filter((t) => t.slug !== "cloud-devops").slice(0, 3)} />
    </>
  );
}
