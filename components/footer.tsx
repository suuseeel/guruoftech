"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "@/components/social-icons";
import { BrandLogo } from "@/components/brand/logo";
import { useBrand } from "@/components/brand/context";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Overview", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "AI Solutions", href: "/ai" },
  { label: "Services", href: "/services" },
  { label: "Technologies", href: "/technologies" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Clients & Testimonials", href: "/testimonials" },
];

function ColumnHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
      <span className="h-3.5 w-1 rounded-full bg-linear-to-b from-accent to-accent-2" />
      {children}
    </h4>
  );
}

const socialLinkClass =
  "group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-transparent hover:bg-linear-to-br hover:from-accent hover:to-accent-2 hover:text-white hover:shadow-lg hover:shadow-accent/30";

export function Footer() {
  const year = new Date().getFullYear();
  const brand = useBrand();
  const socials = brand.socials;

  return (
    <footer className="relative overflow-hidden bg-[#070d22] text-white/70">
      {/* Layered gradient waves — the seam between the page and the footer */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -mt-px" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-16 w-full sm:h-24">
          <defs>
            <linearGradient id="footer-wave-a" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--accent-2)" />
            </linearGradient>
            <linearGradient id="footer-wave-b" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="var(--accent-2)" />
              <stop offset="100%" stopColor="var(--accent)" />
            </linearGradient>
          </defs>
          <path
            d="M0,70 C220,110 420,20 720,45 C1020,70 1220,10 1440,55 L1440,0 L0,0 Z"
            fill="url(#footer-wave-a)"
            opacity="0.16"
          />
          <path
            d="M0,85 C260,45 460,110 760,80 C1040,52 1260,100 1440,70 L1440,0 L0,0 Z"
            fill="url(#footer-wave-b)"
            opacity="0.12"
          />
          <path
            d="M0,68 C220,106 420,18 720,43 C1020,68 1220,8 1440,53"
            fill="none"
            stroke="url(#footer-wave-a)"
            strokeWidth="2"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Ambient glows — same dark-panel language as the contact page */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-accent-2/25 blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[140px]" />

      <div className="section relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center">
              {brand.logoImage ? (
                <span className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-lg shadow-black/30">
                  <BrandLogo variant="footer" />
                </span>
              ) : (
                <span className="text-white">
                  <BrandLogo variant="footer" />
                </span>
              )}
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {brand.legalName} is a full-stack software development company
              building web platforms, mobile apps, and e-commerce products
              for businesses across the globe.
            </p>
            {socials && (
              <div className="mt-5 flex gap-3">
                {socials.twitter && (
                  <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={socialLinkClass}>
                    <TwitterIcon className="h-4 w-4" />
                  </a>
                )}
                {socials.linkedin && (
                  <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={socialLinkClass}>
                    <LinkedInIcon className="h-4 w-4" />
                  </a>
                )}
                {socials.facebook && (
                  <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={socialLinkClass}>
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          <div>
            <ColumnHeading>Company</ColumnHeading>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/55 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeading>Resources</ColumnHeading>
            <ul className="mt-4 space-y-2.5">
              {resourceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/55 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeading>Get in touch</ColumnHeading>
            <ul className="mt-4 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/60 backdrop-blur-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" />
                H-53, Sector-63, Noida, Uttar Pradesh, India
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent-strong" />
                <a href="tel:+919312166668" className="hover:text-white">
                  +91 931 216 6668
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent-strong" />
                <a href={`mailto:${brand.contactEmail}`} className="hover:text-white">
                  {brand.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-12 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-white/45 sm:flex-row">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
          <p>
            ©{" "}
            <span className="bg-linear-to-r from-accent to-accent-2 bg-clip-text font-medium text-transparent">
              {year} {brand.name}
            </span>
            . All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
