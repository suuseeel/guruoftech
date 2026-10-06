import Image from "next/image";
import { useBrand } from "./context";

/**
 * Renders the active brand's real logo. Three tiers:
 *  1. logoImage — a self-contained file with the wordmark baked in
 *     (TechLightz): rendered alone, no separate text.
 *  2. iconImage — an icon-only mark (GuruOfTech): rendered in the badge
 *     slot next to the brand name text.
 *  3. Neither supplied yet: a gradient letter badge + wordmark fallback.
 */
export function BrandLogo({ variant = "header" }: { variant?: "header" | "footer" }) {
  const brand = useBrand();

  if (brand.logoImage) {
    return (
      <Image
        src={brand.logoImage}
        alt={brand.name}
        width={160}
        height={50}
        priority
        className={variant === "header" ? "guru-brand-logo" : "h-8 w-auto object-contain"}
      />
    );
  }

  const badgeSize = variant === "header" ? "h-9 w-9 text-base" : "h-8 w-8 text-sm";
  return (
    <span className="flex items-center gap-2.5">
      {brand.iconImage ? (
        <span className={`relative flex shrink-0 overflow-hidden rounded-lg bg-white p-1 shadow-sm ${badgeSize}`}>
          <Image src={brand.iconImage} alt={brand.name} fill priority className="object-contain p-0.5" />
        </span>
      ) : (
        <span
          style={{ background: `linear-gradient(135deg, ${brand.accentFrom}, ${brand.accentTo})` }}
          className={`flex shrink-0 items-center justify-center rounded-lg font-bold text-white shadow-sm ${badgeSize}`}
        >
          {brand.logoLetter}
        </span>
      )}
      <span className="text-lg font-semibold tracking-tight">{brand.name}</span>
    </span>
  );
}
