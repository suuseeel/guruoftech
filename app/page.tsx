import Link from "next/link";
import {
  ArrowUpRight,
  Banknote,
  BarChart3,
  Bot,
  BookOpen,
  BrainCircuit,
  Briefcase,
  Bug,
  Car,
  Clock,
  Cloud,
  Code2,
  Database,
  Eye,
  GitBranch,
  GraduationCap,
  HeartPulse,
  Landmark,
  Languages,
  LayoutDashboard,
  MessageSquare,
  Plane,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Timer,
  TrendingUp,
  Truck,
  Tv,
  Users,
  Webhook,
  Workflow,
  ChevronsRight,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { BrandWord } from "@/components/brand/word";
import { SectionHeading, SectionHeadingLeft } from "@/components/section-heading";
import { TechGrid } from "@/components/textures/tech-grid";
import { NetworkBackground } from "@/components/textures/network-background";
import { TechEcosystem } from "@/components/tech-ecosystem";
import { EngagementPaths } from "@/components/engagement-paths";
import { IndustryExplorer } from "@/components/industry-explorer";
import { ProjectShowcase, type Project } from "@/components/project-showcase";
import { EngineeringPipeline } from "@/components/engineering-pipeline";
import { AIFlow } from "@/components/ai-flow";
import { StatCounter } from "@/components/stat-counter";
import {
  ArchitectureGraphic,
  CartFlowGraphic,
  ChecklistGraphic,
  DeviceGraphic,
  PipelineGraphic,
  RoadmapGraphic,
} from "@/components/service-graphics";
import {
  TeamGraphic,
  CaseStudyGraphic,
  CareerGraphic,
  BlogGraphic,
} from "@/components/about-graphics";
import TechMarquee from "@/components/TechMarquee";
import { CapabilityGrid } from "@/components/capability-grid";
import ProductsShowcase from "@/components/ProductsEcosystem";
import { aiGroups } from "@/components/ai/data";
import { servicesMeta } from "@/components/service/data";

function TechDnaCard({
  icon,
  title,
  description,
  technologies,
  right = false,
}: {
  icon: string;
  title: string;
  description: string;
  technologies: [string, string][];
  right?: boolean;
}) {
  return (
    <div
      className={[
        "group relative min-h-[158px] overflow-hidden rounded-2xl",
        // light: soft blue card, black text
        "border border-blue-500/25 bg-linear-to-br from-[#eef3ff] to-[#dde8ff]",
        "shadow-sm shadow-blue-900/5",
        // dark: the original navy glass card
        "dark:border-blue-500/20 dark:bg-none dark:bg-[#081226]/75 dark:shadow-none",
        "backdrop-blur-xl",
        "transition-all duration-500",
        "hover:-translate-y-1 hover:border-blue-500/60 dark:hover:border-blue-400/50",
        "hover:shadow-[0_15px_50px_rgba(37,99,235,.16)]",
        right ? "lg:ml-auto" : "",
      ].join(" ")}
    >
      {/* glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-500 group-hover:bg-blue-500/20" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300">
              {icon === "web" && <span className="text-lg">⌁</span>}
              {icon === "mobile" && <span className="text-lg">▯</span>}
              {icon === "backend" && <span className="text-lg">≡</span>}
              {icon === "cloud" && <span className="text-lg">☁</span>}
              {icon === "commerce" && <span className="text-lg">⌑</span>}
              {icon === "ai" && <span className="text-lg">✦</span>}
            </div> */}

            <div>
              <h3 className="text-h4 font-semibold text-[#0b1220] dark:text-white">
                {title}
              </h3>

              <p className="text-body-sm mt-1 leading-relaxed text-slate-700 dark:text-slate-400">
                {description}
              </p>
            </div>
          </div>

          {/* <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 transition-transform duration-300 group-hover:translate-x-1">
            →
          </div> */}
        </div>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
          {technologies.map(([name, type]) => (
            <div key={name} className="group/tech flex items-center gap-2">
              {/* <TechLogo type={type} /> */}

              <span className="text-caption rounded-full border border-blue-500/25 bg-white/70 px-2.5 py-1 font-medium text-[#0b1220] transition-colors group-hover/tech:border-blue-500/60 group-hover/tech:text-blue-700 dark:border-blue-500/15 dark:bg-white/[0.035] dark:text-slate-300 dark:group-hover/tech:text-white">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TechLogo({ type }: { type: string }) {
  const logos: Record<string, string> = {
    react: "⚛",
    next: "N",
    js: "JS",
    ts: "TS",
    flutter: "◆",
    dotnet: ".NET",
    node: "JS",
    php: "php",
    laravel: "◆",
    python: "🐍",
    django: "dj",
    java: "☕",
    postgres: "◉",
    firebase: "◆",
    aws: "aws",
    shopify: "S",
    magento: "M",
    wordpress: "W",
    ai: "◎",
    ml: "✣",
    api: "⚙",
    automation: "ϟ",
  };

  return (
    <span
      className="
        flex h-7 min-w-7 items-center justify-center
        rounded-md border border-blue-500/10
        bg-white/[0.035]
        px-1.5
        text-[10px] font-bold
        text-blue-300
      "
    >
      {logos[type] || "•"}
    </span>
  );
}

function TechStat({ number, label }: { number: string; label: string }) {
  return (
    <div className="px-4 text-center">
      <div className="text-2xl font-semibold tracking-tight text-blue-400 sm:text-3xl">
        {number}
      </div>

      <div className="mt-1 text-[11px] text-slate-500 sm:text-xs">{label}</div>
    </div>
  );
}

/**
 * A single step in the AI delivery process. Rendered as a numbered
 * card with a real paragraph explaining what happens at that stage —
 * intentionally text-first rather than icon-first, so a visitor can
 * understand the process without hovering over anything.
 */
function AiProcessStep({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="relative h-full rounded-2xl border border-border bg-surface p-6">
      <span className="text-xs font-semibold tracking-widest text-accent">
        STEP {String(index).padStart(2, "0")}
      </span>
      <h4 className="mt-3 text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

/** Turns a service name into a stable #anchor slug for /ai deep-links. */
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const ecosystemCategories = [
  {
    id: "web",
    label: "Web",
    icon: <Code2 className="h-4 w-4" />,
    chips: ["React", "Next.js"],
    area: "top" as const,
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: <Smartphone className="h-4 w-4" />,
    chips: ["Flutter", "React Native"],
    area: "right" as const,
  },
  {
    id: "backend", 
    label: "Backend & AI",
    icon: <Server className="h-4 w-4" />,
    chips: ["Node.js", ".NET", "AI/ML"],
    area: "bottom" as const,
  },
  {
    id: "cloud",
    label: "Cloud & Data",
    icon: <Cloud className="h-4 w-4" />,
    chips: ["AWS", "PostgreSQL"],
    area: "left" as const,
  },
];

const techMarquee = [
  "PHP",
  "Laravel",
  ".NET",
  "Python",
  "Django",
  "Java",
  "Node.js",
  "React",
  "Angular",
  "Vue.js",
  "Next.js",
  "Flutter",
  "React Native",
  "Kotlin",
  "Swift",
  "AWS",
  "Docker",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "WordPress",
  "Magento",
  "Shopify",
  "MERN",
  "MEAN",
  "OpenAI",
  "Anthropic Claude",
  "LangChain",
  "Vector DBs",
  "Hugging Face",
];

const engagementPaths = [
  {
    title: "AI & Automation Integration",
    description:
      "Add LLM features, automated workflows, and smarter reporting to a product you already run — scoped to a real use case, not a demo.",
    cta: "Explore AI Solutions",
    href: "/ai",
    icon: <BrainCircuit className="h-6 w-6" />,
  },
  {
    title: "Custom Software & Product Engineering",
    description:
      "Web platforms and internal tools designed around your workflow, built by one team from first sprint to launch.",
    cta: "Build Your Product",
    href: "/services/software-development",
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps for iOS and Android that share one design language and one backend.",
    cta: "Start an App",
    href: "/services/mobile-app-development",
    icon: <Smartphone className="h-6 w-6" />,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deployment pipelines, cloud infrastructure, and monitoring so releases stay fast and your systems stay visible.",
    cta: "Improve Your Delivery",
    href: "/services/analytics-devops",
    icon: <Cloud className="h-6 w-6" />,
  },
  {
    title: "Startup MVP & Consulting",
    description:
      "Scope a first version, choose a sensible stack, and ship something real before committing to the full roadmap.",
    cta: "Plan Your MVP",
    href: "/services/startup-consulting",
    icon: <Rocket className="h-6 w-6" />,
  },
];

const services = [
  {
    title: "AI & Machine Learning Engineering",
    desc: "LLM integration, fine-tuning, and retrieval pipelines wired into your product, not a standalone demo.",
    icon: BrainCircuit,
    graphic: PipelineGraphic,
    href: "/ai",
    isAI: true,
  },
  {
    title: "AI Agents & Process Automation",
    desc: "Agents that complete real, multi-step tasks — triage, data entry, reporting — with a human in the loop where it matters.",
    icon: Workflow,
    graphic: RoadmapGraphic,
    href: "/ai",
    isAI: true,
  },
  {
    title: "Data, Analytics & DevOps",
    desc: "Pipelines, dashboards, and infrastructure — the data layer most AI features actually depend on.",
    icon: BarChart3,
    graphic: PipelineGraphic,
    href: "/services/analytics-devops",
  },
  {
    title: "Software Development",
    desc: "Custom platforms built on architecture that's ready to carry AI features later, not just today's spec.",
    icon: Code2,
    graphic: ArchitectureGraphic,
    href: "/services/software-development",
  },
  {
    title: "Software Testing",
    desc: "QA layered into your release cycle, not bolted on at the end.",
    icon: Bug,
    graphic: ChecklistGraphic,
    href: "/services/software-testing",
  },
  {
    title: "Startup & AI Product Consulting",
    desc: "MVP scoping, technical strategy, and honest advice on which parts of your product actually need AI.",
    icon: Rocket,
    graphic: RoadmapGraphic,
    href: "/services/startup-consulting",
  },
  {
    title: "eCommerce Development",
    desc: "Storefronts and B2B/B2C platforms with the catalog, checkout, and logistics stack to match.",
    icon: ShoppingCart,
    graphic: CartFlowGraphic,
    href: "/services/ecommerce-development",
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform apps with a shared design language.",
    icon: Smartphone,
    graphic: DeviceGraphic,
    href: "/services/mobile-app-development",
  },
];

// Illustrative example builds — placeholders standing in for real
// portfolio entries until case studies are ready (see /case-studies).
// No specific client names or invented results; each one represents
// a type of product, not a claimed historical delivery.
const projectFilters = ["All", "Web Platform", "Dashboard", "Mobile App", "eCommerce", "AI & Automation"];

const projects: Project[] = [
  {
    name: "NovaCart",
    type: "eCommerce",
    industry: "Retail & eCommerce",
    description: "A storefront with catalog, checkout, and order management built in.",
    stack: ["Shopify", "React", "Node.js"],
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    name: "MediTrack",
    type: "Web Platform",
    industry: "Healthcare",
    description: "Patient scheduling and records portal for a multi-location clinic.",
    stack: ["Laravel", "MySQL", "React"],
    icon: <HeartPulse className="h-5 w-5" />,
  },
  {
    name: "FleetPulse",
    type: "Dashboard",
    industry: "Logistics",
    description: "Live fleet tracking and route reporting for a delivery network.",
    stack: [".NET", "PostgreSQL", "React"],
    icon: <Truck className="h-5 w-5" />,
  },
  {
    name: "EduSpring",
    type: "Web Platform",
    industry: "Education",
    description: "A learning management platform for course delivery and grading.",
    stack: ["Laravel", "Vue.js", "MySQL"],
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    name: "PayStream",
    type: "Dashboard",
    industry: "Fintech",
    description: "A reconciliation and reporting dashboard for a payments team.",
    stack: [".NET", "AWS", "PostgreSQL"],
    icon: <Banknote className="h-5 w-5" />,
  },
  {
    name: "TravelNest",
    type: "Web Platform",
    industry: "Travel & Tourism",
    description: "A booking engine handling itineraries, availability, and payments.",
    stack: ["Node.js", "Vue.js", "MySQL"],
    icon: <Plane className="h-5 w-5" />,
  },
  {
    name: "StreamHub",
    type: "Mobile App",
    industry: "Media & Entertainment",
    description: "A cross-platform app for browsing and streaming episodic content.",
    stack: ["React Native", "Node.js", "AWS"],
    icon: <Tv className="h-5 w-5" />,
  },
  {
    name: "AutoLot",
    type: "Mobile App",
    industry: "Automotive",
    description: "An inventory and service-booking app for dealership staff.",
    stack: ["Flutter", "Node.js", "PostgreSQL"],
    icon: <Car className="h-5 w-5" />,
  },
  {
    name: "BankBridge",
    type: "Dashboard",
    industry: "Banking & Financial Services",
    description: "A back-office suite for account operations and compliance checks.",
    stack: [".NET", "Docker", "AWS"],
    icon: <Landmark className="h-5 w-5" />,
  },
  {
    name: "AgentFlow",
    type: "AI & Automation",
    industry: "Cross-industry",
    description: "A workflow automation layer that routes tasks between existing tools.",
    stack: ["Python", "LangChain", "PostgreSQL"],
    icon: <BrainCircuit className="h-5 w-5" />,
  },
];

const industries = [
  {
    name: "Healthcare",
    icon: <HeartPulse className="h-4 w-4" />,
    blurb: "Patient portals, scheduling, and compliant record systems.",
    examples: ["Patient portals & scheduling", "Compliant record systems"],
    stack: ["PHP", "Laravel", ".NET", "MySQL", "AI triage assistants"],
    src:"/homepage/Healthcare_3D.png",
    href: "/industries/healthcare"
  },
  {
    name: "Automotive",
    icon: <Car className="h-4 w-4" />,
    blurb: "Dealer platforms, inventory, and service booking tools.",
    examples: ["Dealer & inventory platforms", "Service booking tools"],
    stack: ["React", "Node.js", "PostgreSQL", "Demand forecasting AI"],
    src:"/homepage/Automotive_3D.png",
    href: "/industries/automotive"
  },
  {
    name: "Fintech",
    icon: <Banknote className="h-4 w-4" />,
    blurb: "Payments, ledgers, and reporting built for scrutiny.",
    examples: ["Payments & ledgers", "Reporting built for scrutiny"],
    stack: [".NET", "Java", "PostgreSQL", "AWS", "Fraud-detection models"],
    src:"/homepage/Fintech_3D.png",
    href: "/industries/fintech"
  },
  {
    name: "Retail & eCommerce",
    icon: <ShoppingBag className="h-4 w-4" />,
    blurb: "Storefronts, catalogs, and order management at scale.",
    examples: ["Storefronts & catalogs", "Order management at scale"],
    stack: ["Magento", "Shopify", "WooCommerce", "Recommendation AI"],
    src:"/homepage/Retail_3D.png",
    href: "/industries/retail-ecommerce"
  },
  {
    name: "Education",
    icon: <GraduationCap className="h-4 w-4" />,
    blurb: "LMS platforms, portals, and student-facing apps.",
    examples: ["LMS platforms & portals", "Student-facing apps"],
    stack: ["React", "Laravel", "Flutter", "AI tutoring assistants"],
    src:"/homepage/Education_3D.png",
    href: "/industries/education"
  },
  {
    name: "Travel & Tourism",
    icon: <Plane className="h-4 w-4" />,
    blurb: "Booking engines and itinerary management systems.",
    examples: ["Booking engines", "Itinerary management"],
    stack: ["Node.js", "Vue.js", "MySQL", "Dynamic pricing AI"],
    src:"/homepage/Travel_3D.png",
    href: "/industries/travel"
  },
  {
    name: "Banking & Financial Services",
    icon: <Landmark className="h-4 w-4" />,
    blurb: "Secure dashboards and back-office tooling.",
    examples: ["Secure dashboards", "Back-office tooling"],
    stack: [".NET", "AWS", "Docker", "Document intelligence AI"],
    src:"/homepage/Banking_3D.png",
    href: "/industries/banking"
  },
  {
    name: "Logistics",
    icon: <Truck className="h-4 w-4" />,
    blurb: "Fleet tracking, warehouse, and supply chain systems.",
    examples: ["Fleet tracking", "Warehouse & supply chain systems"],
    stack: ["Python", "Django", "PostgreSQL", "Route-optimization AI"],
    src:"/homepage/Logistics_3D.png",
    href: "/industries/logistics"
  },
  {
    name: "Media & Entertainment",
    icon: <Tv className="h-4 w-4" />,
    blurb: "Streaming, content platforms, and audience tools.",
    examples: ["Streaming & content platforms", "Audience tools"],
    stack: ["React", "Node.js", "AWS", "Content-tagging AI"],
    src:"/homepage/Media_3D.png",
    href: "/industries/media"
  },
];

const pipelineStages = [
  { label: "Frontend", icon: <Code2 className="h-5 w-5" /> },
  { label: "API", icon: <Webhook className="h-5 w-5" /> },
  { label: "Backend", icon: <Server className="h-5 w-5" /> },
  { label: "Database", icon: <Database className="h-5 w-5" /> },
  { label: "Cloud", icon: <Cloud className="h-5 w-5" /> },
  { label: "Analytics & AI", icon: <BrainCircuit className="h-5 w-5" /> },
];

const aiFlowNodes = [
  { label: "AI Core", icon: <BrainCircuit className="h-5 w-5" /> },
  { label: "Data", icon: <Database className="h-5 w-5" /> },
  { label: "Application", icon: <LayoutDashboard className="h-5 w-5" /> },
  { label: "Automation", icon: <Workflow className="h-5 w-5" /> },
  { label: "Outcome", icon: <TrendingUp className="h-5 w-5" /> },
];

// The AI delivery process — written out as real steps with a paragraph
// each, so the "Engineering for the AI Era" panel explains the work
// instead of just naming it.
const aiProcessSteps = [
  {
    title: "Scope the use case",
    description:
      "We pin down exactly what the AI needs to decide, generate, or automate, and what a wrong answer costs you. Most AI projects that stall never had this nailed down in the first place.",
  },
  {
    title: "Ground it in your data",
    description:
      "Retrieval pipelines, embeddings, and access controls are built around your actual documents, tickets, and records — not a generic demo dataset that looks good in a sales call.",
  },
  {
    title: "Build, evaluate, guardrail",
    description:
      "We write test sets before we write prompts, and put rate limits, fallbacks, and human-review checkpoints around anything that talks to a customer or touches production data.",
  },
  {
    title: "Deploy, monitor, iterate",
    description:
      "Once it's live we track cost, latency, and answer quality on an ongoing basis, and treat prompt or model changes with the same review discipline as any other code change.",
  },
];

// Home "Services built around outcomes — AI included": every row is an AI
// service and deep-links to its card on /ai (data lives in components/ai/data.ts).
const aiRowIds = [
  "ai-software-development",
  "custom-ai-agent-development",
  "rag-development",
  "ai-chatbot-development",
  "workflow-automation",
  "computer-vision-development",
  "predictive-analytics",
  "mlops-engineering",
];
const aiRows = aiRowIds.flatMap((id) => {
  for (const group of aiGroups) {
    const item = group.items.find((i) => i.id === id);
    if (item) return [{ ...item, color: group.color }];
  }
  return [];
});

// Detailed AI capability cards — each one explains what the work
// actually involves rather than just naming a buzzword, and reuses
// the existing TechDnaCard component built for exactly this purpose.
const aiCapabilities: {
  title: string;
  description: string;
  technologies: [string, string][];
}[] = [
  {
    title: "Conversational AI & Chatbots",
    description:
      "Assistants that resolve real queries end to end, across web, WhatsApp, or an internal help desk — not a widget that deflects to a human after two turns.",
    technologies: [
      ["LLM Orchestration", "ai"],
      ["Python", "python"],
      ["API", "api"],
      ["Automation", "automation"],
    ],
  },
  {
    title: "AI Agents & Orchestration",
    description:
      "Tool-calling agents that complete multi-step work — pulling data, filling forms, triggering workflows — with clear limits on what they're allowed to do unsupervised.",
    technologies: [
      ["Agent Framework", "ai"],
      ["Node.js", "node"],
      ["Automation", "automation"],
      ["API", "api"],
    ],
  },
  {
    title: "Retrieval-Augmented Generation",
    description:
      "Answers grounded in your own documents and databases, with sources attached, so the model isn't guessing when it doesn't know something.",
    technologies: [
      ["Vector Search", "ml"],
      ["PostgreSQL", "postgres"],
      ["Python", "python"],
      ["AI", "ai"],
    ],
  },
  {
    title: "Computer Vision",
    description:
      "Image and video models for defect detection, inventory counts, and document or ID extraction — trained and evaluated on your own image data.",
    technologies: [
      ["ML Models", "ml"],
      ["Python", "python"],
      ["AWS", "aws"],
      ["AI", "ai"],
    ],
  },
  {
    title: "Predictive Analytics & Forecasting",
    description:
      "Demand forecasting, churn prediction, and anomaly detection built on the history already sitting in your database, surfaced inside the dashboards your team uses.",
    technologies: [
      ["ML Models", "ml"],
      ["PostgreSQL", "postgres"],
      ["AWS", "aws"],
      ["Automation", "automation"],
    ],
  },
  {
    title: "MLOps & Model Deployment",
    description:
      "CI/CD for models, drift monitoring, and versioning, so a model that quietly gets worse over time gets caught before your customers notice.",
    technologies: [
      ["AI", "ai"],
      ["AWS", "aws"],
      ["Automation", "automation"],
      ["API", "api"],
    ],
  },
];

// The full AI service directory — the same grouping used in the
// header's "AI" mega-menu, repeated here as a browsable panel so the
// homepage carries the whole line-up, not just six headline cards.
const aiServiceDirectory = [
  {
    category: "Build & Integrate",
    icon: Code2,
    items: [
      "AI Software Development",
      "AI Development & Integration",
      "AI Copilot Development",
      "AI OpenAI Integration Services",
      "Custom AI Model Development",
      "AI Transformer Model Development",
    ],
  },
  {
    category: "Agents & Automation",
    icon: Bot,
    items: [
      "Agent-as-a-Service (AaaS)",
      "Custom AI Agent Development",
      "Multi-Agent Systems Development",
      "AI Agent Orchestration Services",
      "AI Agent Integration Services",
      "Intelligent Workflow Automation",
      "AI Automation Services",
    ],
  },
  {
    category: "Data, ML & Vision",
    icon: BrainCircuit,
    items: [
      "Data Engineering Services",
      "Machine Learning Development",
      "Deep Learning Solutions",
      "Computer Vision Development",
      "NLP Development Services",
      "Multi-Modal AI Development",
      "Predictive Analytics & Forecasting",
      "RAG Development Services",
    ],
  },
  {
    category: "Conversational & Voice",
    icon: MessageSquare,
    items: [
      "AI Chatbot Development",
      "AI Conversational Development",
      "AI Voice Agent Development",
      "AI Generative AI Development",
    ],
  },
  {
    category: "Scale, Govern & Advise",
    icon: ShieldCheck,
    items: [
      "MLOps Engineering Services",
      "Model Deployment & Monitoring",
      "Model Governance & Compliance",
      "Enterprise AI Development",
      "Enterprise AI Consulting",
      "AI Strategy Consulting",
      "AI Agent Development Company",
    ],
  },
];

const companyTeasers = [
  {
    icon: Users,
    graphic: TeamGraphic,
    title: "Team",
    desc: "How we staff a project, discipline by discipline.",
    href: "/team",
  },
  {
    icon: Briefcase,
    graphic: CaseStudyGraphic,
    title: "Case Studies",
    desc: "The kind of work we take on.",
    href: "/case-studies",
  },
  {
    icon: Clock,
    graphic: CareerGraphic,
    title: "Careers",
    desc: "Culture, and how to reach us about roles.",
    href: "/careers",
  },
  {
    icon: BookOpen,
    graphic: BlogGraphic,
    title: "Blog",
    desc: "Engineering notes, on the way.",
    href: "/blog",
  },
];

// Kept for reference / future use — a compact grid of technology
// glyphs, in case a "tech DNA" style band is added elsewhere on the
// site. Not rendered on the homepage itself.
const aiIconReference = [Eye, Languages, GitBranch, Search];
void aiIconReference;
void TechStat;

const capabilityItems = [
  {
    title: "Discovery & Roadmapping",
    href: "/services/startup-consulting",
    icon: <Search className="h-5 w-5" />,
  },
  {
    title: "Data Readiness & Pipelines",
    href: "/ai#analytics",
    icon: <Database className="h-5 w-5" />,
  },
  {
    title: "AI-Enhanced Development",
    href: "/ai#ai-development",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "Intelligent Automation",
    href: "/ai#automation",
    icon: <Workflow className="h-5 w-5" />,
  },
  {
    title: "Analytics & Reporting",
    href: "/ai#analytics",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "API & System Integration",
    href: "/services/software-development",
    icon: <Webhook className="h-5 w-5" />,
  },
  {
    title: "MVP & Rapid Prototyping",
    href: "/services/startup-consulting",
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    title: "AI-Assisted Engineering",
    href: "/ai#engineering",
    icon: <BrainCircuit className="h-5 w-5" />,
  },
];

export default function Home() {
  return (
    <>
      <section id="home" className="guru-hero relative isolate overflow-hidden">
        {/* =========================================
         BACKGROUND SYSTEM
         ========================================= */}

        <TechGrid />

        <div className="guru-hero-noise" />

        <div className="guru-hero-glow guru-hero-glow-left" />
        <div className="guru-hero-glow guru-hero-glow-right" />
        <div className="guru-hero-glow guru-hero-glow-center" />

        {/* Digital orbital sphere behind ecosystem */}
        <div className="guru-orbital-sphere">
          <div className="guru-orbital-sphere-grid" />
          <div className="guru-orbital-sphere-glow" />
        </div>

        {/* Decorative particles */}
        <div className="guru-particle guru-particle-1" />
        <div className="guru-particle guru-particle-2" />
        <div className="guru-particle guru-particle-3" />
        <div className="guru-particle guru-particle-4" />
        <div className="guru-particle guru-particle-5" />

        {/* Decorative diagonal lines */}
        <div className="guru-tech-line guru-tech-line-1" />
        <div className="guru-tech-line guru-tech-line-2" />

        {/* =========================================
        HERO CONTENT
        ========================================= */}

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pb-24 lg:pt-28">
          <div className="items-center flex justify-center">
            {/* =====================================
            LEFT SIDE
            ===================================== */}

            <div className="relative z-20 items-center flex justify-center. flex-col text-center ">
              <h2
                className="guru-hero-title animate-fade-in-up"
                style={{ animationDelay: "0.05s" }}
              >
                We engineer
                <span className="guru-gradient-word">AI-powered</span> software
                for <span className="guru-gradient-word">real businesses</span>
              </h2>

              {/* Description */}

              <p
                className="guru-hero-description animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <BrandWord full /> designs and ships AI-driven web platforms, mobile
                apps, and automation systems — LLM-powered chatbots and agents,
                retrieval over your own data, computer vision, predictive
                analytics — for teams that need working software, not a slide
                deck about AI.
              </p>

              {/* Feature highlights */}
              <div
                className="guru-hero-highlights animate-fade-in-up mt-8 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3"
                style={{ animationDelay: "0.2s" }}
              >
                {[
                  "AI/ML Engineers Experts",
                  "AI Projects Delivered",
                  "End-to-End AI Delivery",
                  "Enterprise-Ready Architecture",
                  "Production, Not Just POCs",
                  "Business-Driven AI Outcomes",
                ].map((item) => (
                  <div key={item} className="guru-highlight-item">
                    <ChevronsRight className="guru-highlight-icon h-4 w-4" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div
                className="guru-hero-badge animate-fade-in-up mt-10 flex-wrap gap-x-2 gap-y-1.5"
                style={{ animationDelay: "0.15s" }}
              >
                <span className="guru-badge-icon">
                  <BrainCircuit className="h-3.5 w-3.5" />
                </span>
                <span>
                  Chatbots &amp; agents · RAG · computer vision · forecasting ·
                  MLOps
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability grid */}
      <CapabilityGrid
        pill="Built Around Your Business"
        title={
          <>
            Software and AI that fit the way{" "}
            <span className="text-gradient">you already work</span>
          </>
        }
        description="Design, build, and connect solutions to your goals, your data, and the systems your team already relies on."
        items={capabilityItems}
      />

      {/* Tech marquee panel */}
      <Reveal className="" delay={0.1}>
        <TechMarquee />
      </Reveal>
     
      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="space-y-5 text-sm leading-relaxed lg:sticky lg:top-36">
            <SectionHeadingLeft
              title="Services built around outcomes — AI included"
              description="Whatever stage you're at — new build, rebuild, adding AI to an existing product, or scaling one — these are the AI services we plug in with."
            />
            <p>
              We don&apos;t staff projects as &ldquo;web team&rdquo; and
              &ldquo;AI team&rdquo; working in parallel. The same engineers who
              build your platform also decide where a model, an agent, or a
              dashboard actually earns its place in it.
            </p>
            <p>
              Every service on the right is an AI engagement — from agents and
              retrieval to vision and forecasting. Pick one to see what you
              get, where it fits, and the tools we use.
            </p>
          </div>

          <ul className="-mx-4 divide-y divide-border">
            {aiRows.map((row, i) => (
              <Reveal key={row.id} delay={i * 0.04}>
                <li>
                  <Link
                    href={`/ai#${row.id}`}
                    style={{ "--c": row.color } as React.CSSProperties}
                    className="group relative flex flex-col gap-4 rounded-2xl px-4 py-6 transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--c)_10%,transparent)] focus-visible:bg-[color-mix(in_srgb,var(--c)_10%,transparent)] sm:flex-row sm:items-center sm:gap-6"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-y-4 left-0 w-1 origin-center scale-y-0 rounded-full transition-transform duration-300 group-hover:scale-y-100"
                      style={{ background: row.color }}
                    />
                    <div className="flex flex-none items-center gap-4 sm:w-72">
                      <span
                        className="flex h-11 w-11 flex-none items-center justify-center rounded-xl"
                        style={{ background: `color-mix(in srgb, ${row.color} 15%, transparent)`, color: row.color }}
                      >
                        <row.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="mt-0.5 flex flex-wrap items-center gap-2 text-base font-semibold">
                          {row.title}
                          <span
                            className="rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-wide"
                            style={{ borderColor: `color-mix(in srgb, ${row.color} 45%, transparent)`, color: row.color }}
                          >
                            AI
                          </span>
                        </h3>
                      </div>
                    </div>
                    <p className="flex-1 text-body-sm text-muted">{row.summary}</p>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <Link
            href="/ai"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:border-accent"
          >
            Explore all AI services <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </section>

      {/* AI capabilities, explained */}
      <section
        id="ai-capabilities"
        className="border-y border-border bg-surface-muted/50"
      >
        <div className="section mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="space-y-5 text-sm leading-relaxed lg:sticky lg:top-36">
              <SectionHeadingLeft
                title="Services we build, not just talk about"
                description="Six service lines we deliver end to end — each with its own process and page. Start with the one closest to what you need."
              />
              <p>
                A service here is a working capability, not a brochure line. Each
                one has a defined way of starting, a team that has done it before,
                and a clear hand-over — so you know what happens on day one and
                what you have on the last.
              </p>
              <p>
                You don&apos;t have to pick just one. Many products begin with
                software development, add a mobile app or a store, and bring in
                DevOps, testing and consulting as they grow. We plan the pieces
                to fit together from the start.
              </p>
              <p>
                Every service follows the same delivery discipline: a scoped plan,
                visible progress in short cycles, testing before each release,
                and support after launch.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {servicesMeta.map((svc, i) => (
                <Reveal key={svc.slug} delay={i * 0.05}>
                  <Link href={svc.href} className="block h-full">
                    <TechDnaCard
                      icon="ai"
                      title={svc.title}
                      description={svc.short}
                      technologies={svc.tags.slice(0, 4).map((t) => [t, "ai"] as [string, string])}
                    />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Where we've shipped"
          title="Industries we understand"
          description="Domain context shortens the discovery phase and keeps decisions — including which AI use cases are worth building — grounded in how your industry actually works."
        />
        <Reveal delay={0.1} className="mt-12">
          <IndustryExplorer industries={industries} />
        </Reveal>
      </section>

      <ProductsShowcase />

      {/* Company teasers — a single divided rail instead of four
          separate cards. */}
      <section className="border-y border-border bg-surface-muted/50">
        <div className="section mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Behind the work"
            title={
              <>
                More about{" "}
                <span className="bg-linear-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                  <BrandWord full />
                </span>
              </>
            }
            description="How we staff projects, what we've shipped, and what it's like to work with us."
          />

          <Reveal
            delay={0.1}
            className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div className="grid divide-y divide-border sm:grid-cols-4 sm:divide-x sm:divide-y-0">
              {companyTeasers.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col gap-3 p-6 transition-colors hover:bg-accent-soft/40"
                >
                  <item.graphic />
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <item.icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-body-sm text-muted">{item.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Explore <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-accent-soft to-surface cta-pad text-center">
            <TechGrid className="opacity-40" />
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/25 blur-[100px]" />
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent-2/20 blur-[100px]" />
            <div className="pointer-events-none absolute left-[15%] top-10 h-2 w-2 rounded-full bg-accent/60 animate-particle-a" />
            <div className="pointer-events-none absolute right-[18%] bottom-14 h-1.5 w-1.5 rounded-full bg-accent-2/60 animate-particle-c" />

            <p className="relative text-sm font-medium text-accent">
              Have a project — AI or otherwise — in mind?
            </p>
            <h2 className="relative mt-4 text-h2 font-semibold tracking-tight">
              Tell us what you&apos;re building — let&apos;s build it.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted">
              Share a few details about your project, including any AI features{" "}
              {"you're"} weighing, and we&apos;ll get back to you within one
              business day.
            </p>
            <div className="relative mt-8 flex justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
