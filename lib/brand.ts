/*
 * Multi-tenant branding.
 *
 * One codebase, two live identities. Which one renders is decided by the
 * domain the visitor actually used to reach the site (read from the request
 * `Host` header on the server — see app/layout.tsx). Add a new brand by
 * adding an entry to `brands` below and a line in `resolveBrandKey`; nothing
 * else in the app needs to change.
 */

export type BrandKey = "guruoftech" | "techlightz";

export type Brand = {
  key: BrandKey;
  /** Short name used everywhere in running text ("GuruOfTech"). */
  name: string;
  /** Two-word form used in prose ("Guru of Tech"). */
  fullName: string;
  /** Legal/registered form, used only in the footer's one-line description. */
  legalName: string;
  domain: string;
  description: string;
  /** Real logo file in /public, if this brand has one. */
  logoImage?: string;
  /** Square favicon in /public, always present. */
  favicon: string;
  /** Fallback mark shown when there's no logoImage (letter + gradient). */
  logoLetter: string;
  accentFrom: string;
  accentTo: string;
  /** Inbox that contact-form submissions for this brand are sent to. */
  contactEmail: string;
  socials?: { twitter?: string; linkedin?: string; facebook?: string };
};

const brands: Record<BrandKey, Brand> = {
  guruoftech: {
    key: "guruoftech",
    name: "GuruOfTech",
    fullName: "Guru of Tech",
    legalName: "Guru of Tech",
    domain: "guruoftech.com",
    description:
      "Guru of Tech is a full-stack software development company building web platforms, mobile apps, and e-commerce products for businesses across the globe.",
    favicon: "/favicon-guruoftech.svg",
    logoLetter: "G",
    accentFrom: "#2f5df5",
    accentTo: "#1a3fd6",
    contactEmail: "info@guruoftech.com",
    socials: {
      twitter: "https://twitter.com/Guruof_tech",
      linkedin: "https://www.linkedin.com/company/guruoftech/",
      facebook: "https://www.facebook.com/Guru-of-Tech-106724432202951",
    },
  },
  techlightz: {
    key: "techlightz",
    name: "TechLightz",
    fullName: "TechLightz",
    legalName: "TechLightz Infosystems",
    domain: "techlightz.com",
    description:
      "TechLightz is a full-stack software development company building web platforms, mobile apps, and e-commerce products for businesses across the globe.",
    logoImage: "/techlightz.png",
    favicon: "/favicon-techlightz.svg",
    logoLetter: "T",
    accentFrom: "#2f6df5",
    accentTo: "#15376e",
    contactEmail: "info@techlightz.com",
  },
};

export const DEFAULT_BRAND_KEY: BrandKey = "guruoftech";

export function getBrand(key: BrandKey): Brand {
  return brands[key];
}

/** Matches a request Host header (or window.location.hostname) to a brand. */
export function resolveBrandKey(host: string | null | undefined): BrandKey {
  const h = (host ?? "").toLowerCase().split(":")[0]; // drop a :port if present
  if (h.includes("techlightz")) return "techlightz";
  if (h.includes("guruoftech")) return "guruoftech";
  return DEFAULT_BRAND_KEY;
}

export function resolveBrand(host: string | null | undefined): Brand {
  return getBrand(resolveBrandKey(host));
}

/**
 * Swaps a literal "GuruOfTech" / "Guru of Tech" mention inside any string
 * for the given brand's name. A no-op for the default brand (the source
 * text already matches it). Used for the handful of things that can't go
 * through <BrandWord/> or <Reveal> — e.g. a page's `generateMetadata`
 * description, which runs before anything ever mounts in a browser.
 */
export function brandText(text: string, brand: Brand): string {
  if (brand.key === DEFAULT_BRAND_KEY) return text;
  return text.split("Guru of Tech").join(brand.fullName).split("GuruOfTech").join(brand.name);
}
