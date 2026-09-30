import Image from "next/image";
import { useBrand } from "./context";

/**
 * Renders the active brand's real logo image when it has one (TechLightz),
 * or a letter-badge + wordmark fallback (GuruOfTech, and any future brand
 * that hasn't supplied a logo file yet).
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
      <span
        style={{ background: `linear-gradient(135deg, ${brand.accentFrom}, ${brand.accentTo})` }}
        className={`flex shrink-0 items-center justify-center rounded-lg font-bold text-white shadow-sm ${badgeSize}`}
      >
        {brand.logoLetter}
      </span>
      <span className={variant === "header" ? "text-lg font-semibold tracking-tight" : "text-lg font-semibold tracking-tight"}>
        {brand.name}
      </span>
    </span>
  );
}
