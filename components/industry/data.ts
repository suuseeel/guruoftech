import {
  Banknote,
  Car,
  GraduationCap,
  HeartPulse,
  Landmark,
  Plane,
  ShoppingBag,
  Truck,
  Tv,
  type LucideIcon,
} from "lucide-react";

export type IndustryMeta = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
  icon: LucideIcon;
  href?: string;
};

export const industriesMeta: IndustryMeta[] = [
  { slug: "healthcare", name: "Healthcare", blurb: "Patient portals, scheduling, and compliant record systems.", image: "/homepage/Healthcare_3D.png", icon: HeartPulse, href: "/industries/healthcare" },
  { slug: "automotive", name: "Automotive", blurb: "Dealer platforms, inventory, and service booking tools.", image: "/homepage/Automotive_3D.png", icon: Car, href: "/industries/automotive" },
  { slug: "fintech", name: "FinTech", blurb: "Payments, ledgers, and reporting built for scrutiny.", image: "/homepage/Fintech_3D.png", icon: Banknote, href: "/industries/fintech" },
  { slug: "retail-ecommerce", name: "Retail & eCommerce", blurb: "Storefronts, catalogs, and order management at scale.", image: "/homepage/Retail_3D.png", icon: ShoppingBag, href: "/industries/retail-ecommerce" },
  { slug: "education", name: "Education & eLearning", blurb: "LMS platforms, portals, and student-facing apps.", image: "/homepage/Education_3D.png", icon: GraduationCap, href: "/industries/education" },
  { slug: "travel", name: "Travel & Tourism", blurb: "Booking engines and itinerary management systems.", image: "/homepage/Travel_3D.png", icon: Plane, href: "/industries/travel" },
  { slug: "banking", name: "Banking & Financial Services", blurb: "Secure dashboards and back-office tooling.", image: "/homepage/Banking_3D.png", icon: Landmark, href: "/industries/banking" },
  { slug: "logistics", name: "Logistics & Transportation", blurb: "Fleet tracking, warehouse, and supply chain systems.", image: "/homepage/Logistics_3D.png", icon: Truck, href: "/industries/logistics" },
  { slug: "media", name: "Media & Entertainment", blurb: "Streaming, content platforms, and audience tools.", image: "/homepage/Media_3D.png", icon: Tv, href: "/industries/media" },
];

export const industryStats = [
  { value: "2,531", label: "Project Finished" },
  { value: "15+", label: "Years Experience" },
  { value: "280", label: "Happy Clients" },
  { value: "3,587", label: "Recognition" },
];
