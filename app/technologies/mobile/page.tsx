import type { Metadata } from "next";
import { Bot, Code2, Layers, Smartphone } from "lucide-react";
import { HeroStage } from "@/components/industry/hero";
import { BodyCard, CtaBar, OfferStagger } from "@/components/industry/sections";
import { TechCloud } from "@/components/service/art";
import { ProcessFive, RelatedLinks, TechTiles } from "@/components/service/blocks";
import { hireSteps, techMeta } from "@/components/service/data";

export const metadata: Metadata = {
  title: "Mobile Development",
  description:
    "Hire Android, iOS, Flutter, Kotlin, Swift, React Native, Ionic and Xamarin developers for cross-platform and native apps.",
};

const offerings = [
  { icon: Bot, title: "Android", desc: "Our mobile app developers can create feature-rich Android apps that are tailored to your company's requirements. Our skilled app developers can create customized Android applications for you." },
  { icon: Code2, title: "Kotlin", desc: "We can create cutting-edge custom Android mobile apps using Kotlin in less time and money than with Java, and by utilizing Kotlin's special characteristics." },
  { icon: Layers, title: "Flutter", desc: "Hire Flutter app developers to build scalable and interactive mobile apps that are widget-rich and cross-platform, quick, and cost-effective." },
  { icon: Smartphone, title: "Xamarin", desc: "Using their years of experience with Xamarin technology, our certified mobile app developers assist you in creating scalable, secure, and affordable mobile apps." },
];

const me = techMeta.find((t) => t.slug === "mobile")!;

export default function MobileTechPage() {
  return (
    <>
      <HeroStage
        name="Mobile"
        title="Hire Mobile Developers"
        intro="Employing app developers from us will enable you to work with a number of mobile app development technologies (cross-platform/native) and apply industry best practices to guarantee the highest quality output for our clients."
        art={<TechCloud names={me.items} hub={Smartphone} />}
        chips={["Android", "iOS", "Flutter", "Kotlin"]}
      />
      <BodyCard
        paragraphs={[
          "We have a team of trained and skilled developers who can provide full-stack bespoke mobile application development services to businesses in order to help them reach a wider market and get the highest ROI.",
          "Since every business has unique demands and ambitions, we gather your unique company needs to provide personalized mobile app development. By using our services for developing Android, iOS, or bespoke mobile apps, you can be confident that your project will be completed on time and that the program will be error-free.",
        ]}
      />
      <OfferStagger offerings={offerings} />
      <TechTiles heading="Hire by technology" items={me.items} cols="lg:grid-cols-4" />
      <ProcessFive title="GuruOfTech steps for hiring mobile developers" steps={hireSteps} />
      <CtaBar title="Need mobile developers?" />
      <RelatedLinks heading="More technologies" items={techMeta.filter((t) => t.slug !== "mobile").slice(0, 3)} />
    </>
  );
}
