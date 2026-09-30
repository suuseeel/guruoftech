"use client";

import { useBrand } from "./context";

/** Drop-in replacement for a literal "GuruOfTech" (default) / "Guru of Tech" (full) mention. */
export function BrandWord({ full = false }: { full?: boolean }) {
  const brand = useBrand();
  return <>{full ? brand.fullName : brand.name}</>;
}
