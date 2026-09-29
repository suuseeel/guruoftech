export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_-10%,black,transparent)]" />
      <div className="absolute left-1/2 top-[-160px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px] animate-pulse-glow" />
      <div className="absolute right-[-80px] top-[420px] h-[380px] w-[380px] rounded-full bg-accent-2/15 blur-[120px] animate-drift" />
      <div className="absolute left-[-100px] top-[900px] h-[340px] w-[340px] rounded-full bg-accent/10 blur-[110px] animate-float-slow" />
    </div>
  );
}
