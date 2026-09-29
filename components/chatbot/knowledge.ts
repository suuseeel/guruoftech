import { servicesMeta, techMeta } from "@/components/service/data";
import { industriesMeta } from "@/components/industry/data";
import { aiGroups, aiItemCount } from "@/components/ai/data";

export type Link = { label: string; href: string };
export type Intent = {
  id: string;
  /** phrases (2+ words score higher) and single words that trigger this answer */
  keys: string[];
  answer: string;
  links?: Link[];
  next?: string[]; // ids of follow-up suggestions
};

const list = (a: string[]) => a.join(", ");

export const CONTACT = {
  email: "info@guruoftech.com",
  phone: "+91 931 216 6668",
  address: "H-53, Sector-63, Noida, Uttar Pradesh, India",
};

const contactLinks: Link[] = [
  { label: "Contact page", href: "/contact" },
  { label: `Email ${CONTACT.email}`, href: `mailto:${CONTACT.email}` },
  { label: `Call ${CONTACT.phone}`, href: "tel:+919312166668" },
];

export const intents: Intent[] = [
  {
    id: "hello",
    keys: ["hi", "hello", "hey", "hii", "namaste", "good morning", "good evening", "good afternoon"],
    answer: "Hi! I'm the Guru of Tech assistant. I can tell you about our services, technologies, industries, AI work, the team and how to start a project. What would you like to know?",
    next: ["services", "tech", "start", "contact"],
  },
  {
    id: "thanks",
    keys: ["thanks", "thank you", "thx", "shukriya", "dhanyavad", "great", "awesome", "perfect"],
    answer: "You're welcome! If you'd like to talk to a person, we usually reply within one business day.",
    next: ["contact", "services"],
  },
  {
    id: "bye",
    keys: ["bye", "goodbye", "see you", "later", "exit"],
    answer: "Thanks for stopping by! You can reopen this chat anytime from the button in the corner.",
  },
  {
    id: "about",
    keys: ["who are you", "your company", "about your company", "about guru of tech", "about guruoftech", "what is guru of tech", "what do you do", "about us", "company overview"],
    answer: "Guru of Tech is a globally recognized software development company based in Noida, India. We build web platforms, mobile apps and eCommerce products, and offer software outsourcing, analytics, DevOps, testing, startup consulting and AI solutions to businesses around the world.",
    links: [{ label: "About us", href: "/about-us" }, { label: "Company overview", href: "/about" }],
    next: ["services", "team", "start"],
  },
  {
    id: "services",
    keys: ["services", "service", "offer", "offerings", "what can you build", "capabilities", "solutions", "help with"],
    answer: `We offer ${servicesMeta.length} core services: ${list(servicesMeta.map((s) => s.title))}. Plus ${aiItemCount} AI services across ${aiGroups.length} categories.`,
    links: [{ label: "All services", href: "/services" }, { label: "AI solutions", href: "/ai" }],
    next: ["software", "ecommerce", "mobile", "ai"],
  },
  ...servicesMeta.map<Intent>((s) => ({
    id: s.slug,
    keys: [],
    answer: `${s.title}: ${s.short} Areas include ${list(s.tags)}.`,
    links: [{ label: `Read about ${s.title}`, href: s.href }],
    next: ["start", "services"],
  })),
  {
    id: "software",
    keys: ["software development", "custom software", "product development", "enterprise", "offshore", "nearshore", "digital transformation", "build software"],
    answer: "Software Development covers product development, enterprise software, offshore and nearshore teams, software consulting, UI/UX design, testing and digital transformation — turning business ideas into working software.",
    links: [{ label: "Software Development", href: "/services/software-development" }],
    next: ["start", "process", "cost"],
  },
  {
    id: "ecommerce",
    keys: ["ecommerce", "e-commerce", "online store", "shop", "storefront", "b2b", "b2c", "marketplace", "magento", "shopify", "woocommerce", "cart"],
    answer: "For eCommerce we build custom and platform-based stores (Magento, Shopify, WooCommerce), B2B and B2C platforms, integrations, store audits, supply chain automation and order management.",
    links: [{ label: "eCommerce Development", href: "/services/ecommerce-development" }, { label: "eCommerce technologies", href: "/technologies/ecommerce" }],
    next: ["start", "cost"],
  },
  {
    id: "mobile",
    keys: ["mobile", "app", "android", "ios", "flutter", "kotlin", "swift", "react native", "xamarin", "ionic", "iphone"],
    answer: "We build native and cross-platform mobile apps — Android, iOS, Kotlin, Swift, Flutter, React Native, Ionic and Xamarin — and can also help with store publishing and post-launch support.",
    links: [{ label: "Mobile App Development", href: "/services/mobile-app-development" }, { label: "Mobile technologies", href: "/technologies/mobile" }],
    next: ["start", "timeline"],
  },
  {
    id: "devops",
    keys: ["devops", "analytics", "cloud", "aws", "azure", "gcp", "google cloud", "big data", "ci/cd", "cicd", "docker", "deployment", "infrastructure"],
    answer: "Analytics & DevOps includes big data consulting, DevOps as a Service, CI/CD pipelines and cloud work on AWS, Azure and Google Cloud, so releases are faster and you get clear visibility into your data.",
    links: [{ label: "Analytics & DevOps", href: "/services/analytics-devops" }, { label: "Cloud & DevOps", href: "/technologies/cloud-devops" }],
    next: ["start"],
  },
  {
    id: "testing",
    keys: ["testing", "qa", "quality assurance", "test", "automation testing", "security testing", "bug"],
    answer: "Our software testing covers security, automated, accessibility and functional testing, layered into your release cycle rather than added at the end.",
    links: [{ label: "Software Testing", href: "/services/software-testing" }],
    next: ["start"],
  },
  {
    id: "startup",
    keys: ["startup", "mvp", "idea", "prototype", "founder", "consulting", "consultant", "iot", "rpa", "ar", "vr"],
    answer: "For startups we help scope an MVP, plan the product and choose the tech, and can add AI/ML, RPA, IoT or AR/VR where it genuinely helps. If you have an idea, we'll tell you honestly what is worth building first.",
    links: [{ label: "Startup Consulting", href: "/services/startup-consulting" }],
    next: ["start", "cost", "timeline"],
  },
  {
    id: "ai",
    keys: ["ai", "artificial intelligence", "machine learning", "ml", "chatbot", "llm", "gpt", "openai", "agent", "agents", "rag", "automation", "generative", "computer vision", "nlp", "voice"],
    answer: `Our AI work is organised in ${aiGroups.length} areas: ${list(aiGroups.map((g) => g.title))}. Examples: AI software development, custom AI agents, RAG assistants, chatbots, workflow automation, computer vision, forecasting and MLOps. AI is built into the software you already run, not sold as a separate product.`,
    links: [{ label: "Explore AI services", href: "/ai" }],
    next: ["start", "services"],
  },
  {
    id: "tech",
    keys: ["technology", "technologies", "tech stack", "stack", "languages", "frameworks", "which technologies", "tools"],
    answer: `We work across ${techMeta.length} technology areas: ${list(techMeta.map((t) => t.title))}. The stack is chosen per project, not from a template.`,
    links: [{ label: "All technologies", href: "/technologies" }],
    next: ["backend", "frontend", "cms", "cloud"],
  },
  {
    id: "backend",
    keys: ["backend", "php", "laravel", ".net", "dotnet", "python", "django", "java", "spring", "node", "nodejs", "symfony", "api"],
    answer: `Backend: ${list(techMeta.find((t) => t.slug === "backend")!.items)}. We build custom backends, refactor existing ones, integrate APIs and build web application backends.`,
    links: [{ label: "Backend technologies", href: "/technologies/backend" }],
    next: ["start"],
  },
  {
    id: "frontend",
    keys: ["frontend", "front-end", "react", "angular", "vue", "html", "css", "next.js", "nextjs", "ui", "ux", "design", "website design"],
    answer: "Frontend: React, Angular, Vue.js, HTML/CSS and Next.js, plus UI/UX design. We focus on fast, accessible, responsive interfaces.",
    links: [{ label: "Frontend technologies", href: "/technologies/frontend" }],
    next: ["start"],
  },
  {
    id: "cms",
    keys: ["cms", "wordpress", "drupal", "sitecore", "joomla", "content management"],
    answer: "CMS: we build custom content management sites on WordPress, Drupal, Sitecore and Joomla.",
    links: [{ label: "CMS technologies", href: "/technologies/cms" }],
    next: ["start"],
  },
  {
    id: "fullstack",
    keys: ["full stack", "fullstack", "mean", "mern"],
    answer: "Full Stack: teams covering frontend, backend, APIs and UI/UX — including MEAN and MERN — for enterprise websites, ERP, custom web apps, integration and migration.",
    links: [{ label: "Full Stack", href: "/technologies/full-stack" }],
    next: ["start"],
  },
  {
    id: "database",
    keys: ["database", "mysql", "postgres", "postgresql", "firebase", "sql", "mongodb"],
    answer: "Databases we use most: MySQL, PostgreSQL and Firebase.",
    links: [{ label: "Databases", href: "/technologies/databases" }],
  },
  {
    id: "industries",
    keys: ["industries", "industry", "domains", "sectors", "which industries", "who do you work with", "clients"],
    answer: `We build for ${industriesMeta.length} industries: ${list(industriesMeta.map((i) => i.name))}.`,
    links: [{ label: "All industries", href: "/industries" }],
    next: ["healthcare", "fintech", "retail", "logistics"],
  },
  ...industriesMeta.map<Intent>((i) => ({
    id: `ind-${i.slug}`,
    keys: [],
    answer: `${i.name}: ${i.blurb}`,
    links: [{ label: `${i.name} page`, href: i.href ?? "/industries" }],
    next: ["start"],
  })),
  { id: "healthcare", keys: ["healthcare", "health", "hospital", "medical", "patient", "clinic"], answer: "Healthcare: patient portals, scheduling and compliant record systems.", links: [{ label: "Healthcare", href: "/industries/healthcare" }], next: ["start"] },
  { id: "fintech", keys: ["fintech", "banking", "bank", "payment", "payments", "wallet", "lending", "finance", "financial"], answer: "FinTech and banking: payment gateways, digital wallets, lending apps, mobile banking, trading and financial management apps.", links: [{ label: "FinTech", href: "/industries/fintech" }, { label: "Banking", href: "/industries/banking" }], next: ["start"] },
  { id: "retail", keys: ["retail", "mcommerce", "omnichannel", "multichannel"], answer: "Retail & eCommerce: mCommerce, multichannel commerce, B2B/B2C marketplaces and online storefronts.", links: [{ label: "Retail & eCommerce", href: "/industries/retail-ecommerce" }], next: ["start"] },
  { id: "logistics", keys: ["logistics", "transport", "transportation", "fleet", "warehouse", "supply chain"], answer: "Logistics & transportation: discovery, MVP development, migration and application development for fleet, warehouse and delivery software.", links: [{ label: "Logistics", href: "/industries/logistics" }], next: ["start"] },
  { id: "education", keys: ["education", "elearning", "e-learning", "lms", "school", "students", "edtech"], answer: "Education & eLearning: EdTech portals, learning experience platforms (LXP), learning management systems (LMS) and BYOC apps.", links: [{ label: "Education", href: "/industries/education" }], next: ["start"] },
  { id: "travel", keys: ["travel", "tourism", "booking", "hotel", "itinerary"], answer: "Travel & tourism: custom travel apps, third-party integration, consulting and migration.", links: [{ label: "Travel & Tourism", href: "/industries/travel" }], next: ["start"] },
  { id: "media", keys: ["media", "entertainment", "streaming", "video", "music", "podcast", "news"], answer: "Media & entertainment: music and video streaming, news aggregators and podcasting apps.", links: [{ label: "Media", href: "/industries/media" }], next: ["start"] },
  { id: "automotive", keys: ["automotive", "car", "cars", "dealer", "vehicle", "auto"], answer: "Automotive: cloud migration, resilient IT operations, standardised business processes and remote learning at scale.", links: [{ label: "Automotive", href: "/industries/automotive" }], next: ["start"] },
  {
    id: "start",
    keys: ["start", "get started", "begin", "work with you", "how to hire", "engage", "new project", "start a project", "onboard"],
    answer: "Getting started is simple: 1) drop an inquiry, 2) consult our experts, 3) choose a management model, 4) sign off and begin, 5) scale your team as you grow. Tell us about your project on the contact page.",
    links: [{ label: "Start a project", href: "/contact" }],
    next: ["cost", "timeline", "contact"],
  },
  {
    id: "process",
    keys: ["process", "methodology", "how do you work", "workflow", "agile", "steps", "approach"],
    answer: "We work in short agile cycles: plan (requirements and strategy), develop (prototype, design, backend), test (analysis, performance review, client approval) and deploy (distribution, installation, launch) — with visible progress throughout.",
    links: [{ label: "How we work", href: "/services" }],
    next: ["start", "timeline"],
  },
  {
    id: "cost",
    keys: ["cost", "price", "pricing", "quote", "budget", "how much", "charges", "rates", "estimate", "affordable", "kitna"],
    answer: "Cost depends on scope, features, team size and timeline, so we don't publish fixed prices. Share your requirements and we'll prepare a tailored estimate. We work with startups and enterprises, and aim for affordable, customised solutions.",
    links: [{ label: "Request an estimate", href: "/contact" }],
    next: ["timeline", "start"],
  },
  {
    id: "timeline",
    keys: ["timeline", "how long", "duration", "time", "deadline", "delivery", "weeks", "months", "kitna time"],
    answer: "Timelines depend on scope: a focused MVP is usually much quicker than a large platform. After a short discovery call we give you a realistic plan with milestones, and you see working software throughout.",
    links: [{ label: "Talk to us", href: "/contact" }],
    next: ["cost", "start"],
  },
  {
    id: "support",
    keys: ["support", "maintenance", "after launch", "post launch", "post-launch", "bug fix", "updates"],
    answer: "Yes — we offer post-launch support and maintenance, including monitoring, updates and fixes, so things keep running well after go-live.",
    links: [{ label: "Contact us", href: "/contact" }],
  },
  {
    id: "security",
    keys: ["security", "confidential", "confidentiality", "nda", "privacy", "data safe", "secure", "ip", "ownership"],
    answer: "We respect your privacy and ideas: strict data confidentiality measures are in place, and NDAs are standard on engagements. Your data and ideas stay yours.",
    links: [{ label: "About us", href: "/about-us" }],
  },
  {
    id: "engagement",
    keys: ["hire", "developer", "dedicated developer", "dedicated team", "hire developers", "remote", "outsourcing", "outsource", "team extension", "hourly", "full-time", "staff augmentation", "engagement model"],
    answer: "You can hire dedicated developers (backend, frontend, mobile, CMS, eCommerce, full stack, DevOps) or a whole team, on hourly or full-time models. We'll help you pick the management model that fits.",
    links: [{ label: "Technologies", href: "/technologies" }, { label: "Start hiring", href: "/contact" }],
    next: ["start", "cost"],
  },
  {
    id: "team",
    keys: ["team", "people", "developers", "employees", "who works", "experts", "engineers"],
    answer: "Our team includes engineers across frontend, backend, full stack, mobile, DevOps and QA, plus designers, project and business managers, HR and leadership. Projects are staffed by a small, senior pod.",
    links: [{ label: "Meet the team", href: "/team" }],
    next: ["careers", "start"],
  },
  {
    id: "careers",
    keys: ["career", "careers", "job", "jobs", "vacancy", "hiring", "opening", "openings", "join", "work at", "internship", "resume", "cv"],
    answer: "We don't have specific openings posted right now, but we're always glad to hear from strong engineers, designers and QA specialists. Send your resume and a note about what you'd like to work on to info@guruoftech.com.",
    links: [{ label: "Careers", href: "/careers" }, { label: `Email ${CONTACT.email}`, href: `mailto:${CONTACT.email}` }],
  },
  {
    id: "cases",
    keys: ["case study", "case studies", "portfolio", "projects", "past work", "examples", "testimonials", "reviews", "references", "clients"],
    answer: "Detailed case studies are being written up. If you tell us your industry, we can share relevant examples directly, and arrange a client reference where we have permission.",
    links: [{ label: "Case studies", href: "/case-studies" }, { label: "Clients & testimonials", href: "/testimonials" }],
  },
  {
    id: "stats",
    keys: ["experience", "years", "how many projects", "projects completed", "happy clients", "recognition", "track record", "since"],
    answer: "Our company overview lists 15+ years of experience, 2,531 projects finished, 280 happy clients and 3,587 recognitions.",
    links: [{ label: "About us", href: "/about-us" }],
  },
  {
    id: "location",
    keys: ["location", "address", "office", "where", "noida", "india", "visit", "located"],
    answer: `We're based in ${CONTACT.address}, and we work with clients across several countries.`,
    links: contactLinks.slice(0, 1),
  },
  {
    id: "contact",
    keys: ["contact", "email", "phone", "call", "reach", "talk to", "human", "speak", "whatsapp", "number", "support team", "agent"],
    answer: `You can reach us at ${CONTACT.email} or ${CONTACT.phone}. Or send the contact form and we'll reply within one business day. Address: ${CONTACT.address}.`,
    links: contactLinks,
  },
  {
    id: "blog",
    keys: ["blog", "articles", "news", "posts"],
    answer: "The blog isn't live yet — it will cover engineering notes, shipping stories and stack deep-dives. Follow our LinkedIn or Twitter for updates.",
    links: [{ label: "Blog", href: "/blog" }],
  },
];

/** Friendly labels for the follow-up chips */
export const chipLabels: Record<string, string> = {
  services: "Our services", tech: "Technologies", start: "How to get started", contact: "Contact us",
  software: "Software development", ecommerce: "eCommerce", mobile: "Mobile apps", ai: "AI solutions",
  process: "How we work", cost: "Pricing", timeline: "Timeline", team: "Our team", careers: "Careers",
  backend: "Backend", frontend: "Frontend", cms: "CMS", cloud: "Cloud & DevOps", healthcare: "Healthcare",
  fintech: "FinTech", retail: "Retail", logistics: "Logistics", industries: "Industries", security: "Data security",
  support: "Support", devops: "Cloud & DevOps", about: "About us",
};

export const starterChips = ["services", "industries", "ai", "cost", "start", "contact"];

const byId = new Map(intents.map((i) => [i.id, i]));
export const getIntent = (id: string) => byId.get(id === "cloud" ? "devops" : id);

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9+#./\s-]/g, " ").replace(/\s+/g, " ").trim();

export function answer(input: string): Intent | null {
  const text = ` ${norm(input)} `;
  if (text.trim().length < 2) return null;
  const words = new Set(text.trim().split(" "));
  let best: Intent | null = null;
  let top = 0;
  for (const it of intents) {
    let score = 0;
    for (const k of it.keys) {
      const key = norm(k);
      if (key.includes(" ")) {
        if (text.includes(` ${key} `) || text.includes(key)) score += 3;
      } else if (words.has(key)) score += 2;
    }
    // exact-title match for generated service/industry intents
    if (!it.keys.length && text.includes(norm(it.id.replace(/^ind-/, "").replace(/-/g, " ")))) score += 4;
    if (score > top) { top = score; best = it; }
  }
  return top >= 2 ? best : null;
}

export const fallback: Intent = {
  id: "fallback",
  keys: [],
  answer: "I'm not sure about that one. I can help with our services, technologies, industries, AI work, pricing, timelines and how to start. For anything specific, our team will reply within one business day.",
  links: [{ label: "Contact the team", href: "/contact" }],
  next: ["services", "cost", "start", "contact"],
};
