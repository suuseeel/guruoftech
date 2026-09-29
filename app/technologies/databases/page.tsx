import type { Metadata } from "next";
import { Database } from "lucide-react";
import { HeroStage } from "@/components/industry/hero";
import { CtaPanel } from "@/components/industry/sections";
import { TechCloud } from "@/components/service/art";
import { ProviderTrio, RelatedLinks } from "@/components/service/blocks";
import { techMeta } from "@/components/service/data";

export const metadata: Metadata = {
  title: "Databases",
  description: "MySQL, PostgreSQL and Firebase — the data layer behind the applications Guru of Tech builds.",
};

const me = techMeta.find((t) => t.slug === "databases")!;

export default function DatabasesPage() {
  return (
    <>
      <HeroStage
        name="Databases"
        title="The data layer behind what we build"
        intro="MySQL, PostgreSQL and Firebase sit under most of the applications we ship. A fuller write-up for this page is on the way."
        art={<TechCloud names={me.items} hub={Database} />}
        chips={me.items}
      />
      <ProviderTrio
        providers={[
          { name: "MySQL", icon: "MySQL", desc: "An open-source relational database, widely used for web applications." },
          { name: "PostgreSQL", icon: "PostgreSQL", desc: "An advanced open-source relational database known for reliability and extensibility." },
          { name: "Firebase", icon: "Firebase", desc: "Google's app development platform, including a real-time cloud-hosted database." },
        ]}
      />
      <CtaPanel title="Planning a data-heavy product?" />
      <RelatedLinks heading="More technologies" items={techMeta.filter((t) => t.slug !== "databases").slice(0, 3)} />
    </>
  );
}
