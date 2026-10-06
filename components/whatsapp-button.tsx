"use client";

import { useBrand } from "@/components/brand/context";
import { WhatsAppIcon } from "@/components/social-icons";

export function WhatsAppButton() {
  const brand = useBrand();
  const message = encodeURIComponent(`Hi ${brand.name}, I'd like to talk about a project.`);
  const href = `https://wa.me/${brand.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message ${brand.name} on WhatsApp`}
      className="fixed bottom-5 right-5 z-[200] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform duration-300 hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-400" />
    </a>
  );
}
