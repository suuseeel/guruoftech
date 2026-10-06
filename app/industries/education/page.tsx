import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { BookOpen, ClipboardCheck, Contact, GraduationCap, Lightbulb, Lock, Sparkles, UserMinus, Users, Wrench } from "lucide-react";
import { HeroEditorial } from "@/components/industry/hero";
import { toClientOfferings } from "@/components/industry/serialize";
import { OfferAccordion } from "@/components/industry/interactive";
import {
  AIOpportunities,
  BodyLead,
  CtaBar,
  ProcessLabelsRow,
  RelatedIndustries,
  ScenarioCard,
  StatsTiles,
} from "@/components/industry/sections";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Education & eLearning",
  description:
    brandText("GuruOfTech creates specialized eLearning solutions — EdTech portals, LXP, LMS and BYOC apps — that promote growth, effectiveness and high performance.", brand),
  };
}

const offerings = [
  {
    icon: GraduationCap,
    title: "EdTech Portal",
    desc: "Helping students use eLearning portals to get content that precisely describes their education in order to accomplish certain goals. These portals are simple to manage on both desktop and mobile platforms.",
  },
  {
    icon: Sparkles,
    title: "Learning Experience Platform (LXP)",
    desc: "Create self-directed, personalized EdTech website development options for organizations that would use AI to design and offer learning modules based on user requirements.",
  },
  {
    icon: BookOpen,
    title: "Learning Management System (LMS)",
    desc: "Enhance the learning experience of corporate trainers and learners by providing a richly feature-rich content distribution and management system. Using cutting-edge automation techniques, businesses may quickly aggregate groups of learners.",
  },
  {
    icon: Users,
    title: "BYOC",
    desc: "Use an interactive eLearning method that gives students access to a thorough and collaborative curriculum. We created data-driven BYOC learning apps that improve learners' education and deliver promising outcomes to our clients.",
  },
];

const steps = [
  { icon: Lock, title: "Conceptualization" },
  { icon: Lightbulb, title: "Visualization" },
  { icon: Contact, title: "Deployment" },
  { icon: Wrench, title: "Management Goals" },
];

const copy = {
  name: "Education & eLearning",
  image: "/homepage/Education_3D.png",
  title:
    "Create Specialized eLearning Solutions That Promote Growth, Effectiveness, and High Performance",
  intro:
    "We are a leader in the creation of e-learning and educational apps because we offer the highest caliber services to our customers.",
  paragraphs: [
    "Education is not as restricted in today's society. But preserving the interconnected ecology. The pupils are currently browsing Google with each new term, rather than the two cover pages of a book. Creating digital apps allows us to meet the needs of the students and provide them with a worldwide platform. Educational mobile applications are broadening the horizons of pupils and enhancing their futures.",
    "Schools and institutions may provide a wider perspective on learning with the use of mobile e-learning apps. The newest technology, like augmented reality, can provide a far better perspective on education. Our educational app developers are creating the newest mobile apps with all the newest technology, like AR and VR. And simplifying the educational process for kids. Now, the pupils merely need to explore a story through the app rather of memorizing information. Additionally, mobile software has the ability to present their learning to them in three dimensions. What more is required for a stronger learning component?",
    "The creation of educational mobile apps is also delving into the world's continuous connectedness and synchronizing everything. Internet of things, for example. Your kid no longer has to copy and paste anything! But if we adopted the most recent technology, everything would be in harmony.",
  ],
};

const aiOpportunities = [
  { icon: Sparkles, title: "AI tutoring assistants", desc: "A step beyond a static LMS — an assistant that answers a learner's question in the moment instead of making them wait for office hours." },
  { icon: ClipboardCheck, title: "Automated grading assistance", desc: "Pre-score objective and short-answer work, and flag the edge cases that actually need a human to look at them." },
  { icon: UserMinus, title: "Early dropout-risk flags", desc: "Surface students whose engagement is dropping before it becomes a pattern, not after they've already missed a month." },
];

export default function EducationPage() {
  return (
    <>
      <HeroEditorial {...copy} index="05" />
      <BodyLead paragraphs={copy.paragraphs} />
      <OfferAccordion offerings={toClientOfferings(offerings)} heading="Learning products we build" />
      <AIOpportunities
        title="Where AI fits into education software"
        desc="On top of the LMS and portal work above, this is where a focused AI feature changes outcomes, not just engagement metrics."
        items={aiOpportunities}
      />
      <ScenarioCard
        title="Flagging disengagement before it becomes dropout"
        scenario="An online course provider noticed engagement drop-off wasn't visible until a student had already missed several weeks. A simple risk score based on login and submission patterns flags it after the first missed week instead, early enough for an instructor to actually reach out."
      />
      <StatsTiles />
      <ProcessLabelsRow title="Our Process" steps={steps} />
      <CtaBar title="Building an eLearning product?" />
      <RelatedIndustries current="education" />
    </>
  );
}
