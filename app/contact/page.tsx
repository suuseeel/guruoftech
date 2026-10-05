import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Contact Us",
  description: brandText("Get in touch with Guru of Tech to discuss your next software project.", brand),
  };
}

const contactDetails = [
  { icon: Mail, label: "Email", value: "info@guruoftech.com", href: "mailto:info@guruoftech.com" },
  { icon: Phone, label: "Phone", value: "+91 931 216 6668", href: "tel:+919312166668" },
  { icon: MapPin, label: "Address", value: "H-53, Sector-63, Noida, Uttar Pradesh, India", href: undefined },
];

export default function ContactPage() {
  return (
    <section className="section-hero mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid overflow-hidden rounded-4xl border border-border lg:grid-cols-[0.95fr_1.25fr]">
        {/* left: dark intro + direct contact */}
        <Reveal className="relative overflow-hidden bg-[#070d22] p-8 text-white sm:p-12">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/40 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-28 -right-10 h-72 w-72 rounded-full bg-accent-2/30 blur-[110px]" />
          <div className="relative flex h-full flex-col">
            <span className="inline-flex self-start rounded-full border border-white/20 px-4 py-1.5 text-eyebrow font-medium uppercase tracking-[0.25em] text-white/80">
              Contact
            </span>
            <h1 className="mt-4 text-h1 font-semibold tracking-tight">
              Tell us what you&apos;re building
            </h1>
            <p className="mt-4 max-w-sm text-body text-white/70">
              Share a few details about your project and we&apos;ll get back to you within one business day.
            </p>

            <ul className="mt-12 space-y-3 lg:mt-auto lg:pt-10">
              {contactDetails.map((item) => {
                const inner = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-caption uppercase tracking-widest text-white/50">{item.label}</span>
                      <span className="block wrap-break-word text-sm font-medium">{item.value}</span>
                    </span>
                    {item.href && (
                      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    )}
                  </>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:bg-white/10"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3.5">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        {/* right: the form on a plain surface */}
        <Reveal delay={0.08} className="bg-surface p-6 sm:p-10">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
