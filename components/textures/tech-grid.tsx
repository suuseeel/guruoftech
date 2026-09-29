export function TechGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`bg-blueprint pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] ${className}`}
    />
  );
}
