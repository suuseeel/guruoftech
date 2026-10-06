import {
  BarChart3,
  Bug,
  Cloud,
  Code2,
  Database,
  FileText,
  Layers,
  Layers3,
  Rocket,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

/* Shared copy taken from guruoftech.com */

export const whyPoints = [
  "We make it simple and seamless to put your ideas into practice.",
  "By integrating top functionalities, we make sure to create a robust solution.",
  "We make your website appealing and personalize it to your needs.",
  "We take a creative approach to our work and create a compelling online store.",
  "Our services are customized to meet the unique business needs of our clients.",
  "With top-notch service for each client, we guarantee complete customer satisfaction.",
];

export const hireSteps = [
  "Drop an Inquiry",
  "Consult Our Experts",
  "Select Management Model",
  "Sign Off and Begin Working",
  "Scale Your Team",
];

export type ServiceMeta = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  href: string;
  tags: string[];
  art: "dev" | "commerce" | "mobile" | "analytics" | "testing" | "startup";
};

export const servicesMeta: ServiceMeta[] = [
  {
    slug: "software-development",
    title: "Software Development",
    short:
      "Our software development services assist organizations in turning their business ideas into reality by building and designing software.",
    icon: Code2,
    href: "/services/software-development",
    tags: ["Product Development", "Enterprise", "Offshore", "Nearshore", "Digital Transformation"],
    art: "dev",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short:
      "Work with a number of mobile app development technologies (cross-platform/native) and apply industry best practices to guarantee the highest quality output.",
    icon: Smartphone,
    href: "/services/mobile-app-development",
    tags: ["Android", "iOS", "Kotlin", "Flutter", "Xamarin"],
    art: "mobile",
  },
  {
    slug: "analytics-devops",
    title: "Analytics & DevOps",
    short: "An Analytics and DevOps Service Provider to Aid Your Successful Transformations!",
    icon: BarChart3,
    href: "/services/analytics-devops",
    tags: ["Big Data", "DevOps Consulting", "AWS", "Azure", "Google Cloud"],
    art: "analytics",
  },
  {
    slug: "software-testing",
    title: "Software Testing",
    short:
      "Control the product lifecycle, the stages of development, and accurate product quality information with high-quality project execution through quality assurance and testing.",
    icon: Bug,
    href: "/services/software-testing",
    tags: ["Security", "Automated", "Accessibility", "Functional"],
    art: "testing",
  },
  {
    slug: "startup-consulting",
    title: "Startup Consulting",
    short: "We aim to develop a cost-effective, easy-to-manage scalable business that fits your needs.",
    icon: Rocket,
    href: "/services/startup-consulting",
    tags: ["AI / ML", "RPA", "IoT", "VR / AR"],
    art: "startup",
  },
];

export type TechMeta = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  href: string;
  items: string[];
};

export const techMeta: TechMeta[] = [
  {
    slug: "backend",
    title: "Backend",
    short: "Custom backend solutions built for your business requirements — implemented quickly, accurately, and affordably.",
    icon: Server,
    href: "/technologies/backend",
    items: ["PHP", ".NET", "Laravel", "Symfony", "Python", "Java", "Django", "Spring / Hibernate", "Node.js"],
  },
  {
    slug: "frontend",
    title: "Frontend",
    short: "Modern web frameworks for powerful, user-friendly interfaces on every device.",
    icon: Layers,
    href: "/technologies/frontend",
    items: ["React", "Angular", "Vue.js", "HTML / CSS", "UI/UX Design", "Next.js"],
  },
  {
    slug: "mobile",
    title: "Mobile",
    short: "Cross-platform and native mobile development, built to the highest quality.",
    icon: Smartphone,
    href: "/technologies/mobile",
    items: ["Android", "iOS", "Flutter", "Ionic", "Kotlin", "React Native", "Swift", "Xamarin"],
  },
  {
    slug: "cms",
    title: "CMS",
    short: "Custom content management systems on Sitecore, WordPress, Joomla, and Drupal.",
    icon: FileText,
    href: "/technologies/cms",
    items: ["WordPress", "Drupal", "Sitecore", "Joomla"],
  },
  {
    slug: "full-stack",
    title: "Full Stack",
    short: "Power your web application to meet and exceed business goals with full stack development.",
    icon: Layers3,
    href: "/technologies/full-stack",
    items: ["MEAN", "MERN", "React", "Angular", "Node.js", "Laravel"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    short: "AWS-certified developers with practical knowledge in administering and deploying software on AWS, Azure, and Google Cloud.",
    icon: Cloud,
    href: "/technologies/cloud-devops",
    items: ["AWS", "Azure", "Google Cloud", "Docker"],
  },
  {
    slug: "databases",
    title: "Databases",
    short: "The data layer behind the applications we build.",
    icon: Database,
    href: "/technologies/databases",
    items: ["MySQL", "PostgreSQL", "Firebase"],
  },
];
