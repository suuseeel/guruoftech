import type { Metadata } from "next";
import { Bot, Code2, Layers, Smartphone } from "lucide-react";
import { HeroSplit } from "@/components/industry/hero";
import { OfferTabs } from "@/components/industry/interactive";
import { toClientOfferings } from "@/components/industry/serialize";
import { BodySidebar, CtaBar, StatsBand } from "@/components/industry/sections";
import { ServiceArt } from "@/components/service/art";
import { ProcessFive, RelatedLinks, TechTiles } from "@/components/service/blocks";
import { hireSteps, servicesMeta, techMeta } from "@/components/service/data";

export const metadata: Metadata = {
  title: "Mobile App Development",
  description:
    "Hire mobile app developers for cross-platform and native apps — Android, Kotlin, Flutter, Xamarin and more.",
};

const offerings = [
  {
    icon: Bot,
    title: "Android",
    desc: "Our mobile app developers can create feature-rich Android apps that are tailored to your company's requirements. Our skilled app developers can create customized Android applications for you.",
  },
  {
    icon: Code2,
    title: "Kotlin",
    desc: "We can create cutting-edge custom Android mobile apps using Kotlin in less time and money than with Java, and by utilizing Kotlin's special characteristics.",
  },
  {
    icon: Layers,
    title: "Flutter",
    desc: "Hire Flutter app developers to build scalable and interactive mobile apps that are widget-rich and cross-platform, quick, and cost-effective.",
  },
  {
    icon: Smartphone,
    title: "Xamarin",
    desc: "Using their years of experience with Xamarin technology, our certified mobile app developers assist you in creating scalable, secure, and affordable mobile apps.",
  },
];

const paragraphs = [
  "Do you want a mobile app for your startup or an established business that is feature-rich, quick, and scalable? It's good to have you here. At GuruOfTech, we have a team of trained and skilled developers that can provide full-stack bespoke mobile application development services to businesses in order to help them reach a wider market and get the highest ROI.",
  "We think that every business has unique demands and ambitions, since we are a top mobile app development company. In order to provide you with personalized mobile app development services, we gather your unique company needs. By using our services for developing Android, iOS, or bespoke mobile apps, you can be confident that your project will be completed on time and that the program will be error-free.",
];

export default function MobilePage() {
  return (
    <>
      <HeroSplit
        reverse
        name="Mobile App Development"
        title="Hire Mobile App Developers"
        intro="Employing app developers from us will enable you to work with a number of mobile app development technologies (cross-platform/native) and apply industry best practices to guarantee the highest quality output for our clients."
        art={<ServiceArt kind="mobile" />}
      />
      <BodySidebar label="Full-stack mobile" paragraphs={paragraphs} />
      <OfferTabs offerings={toClientOfferings(offerings)} heading="Frameworks and platforms our developers use" />
      <TechTiles heading="Mobile technologies on the bench" items={techMeta.find((t) => t.slug === "mobile")!.items} />
      <StatsBand />
      <ProcessFive
        title="GuruOfTech steps for hiring mobile app developers"
        desc="We follow a straightforward procedure. The first steps entail compiling all project-related data and mapping your needs. When all the project specifics are in order, we select the best mobile app developers and schedule interviews. After receiving your approval, we'll set everything up and introduce you to your personal developer."
        steps={hireSteps}
      />
      <CtaBar title="Need a mobile app built?" />
      <RelatedLinks heading="More services" items={servicesMeta.filter((s) => s.slug !== "mobile-app-development").slice(0, 3)} />
    </>
  );
}
