import { Reveal } from "@/components/reveal";
import type { BlogBlock } from "./data";

export function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="mx-auto max-w-2xl space-y-6 text-body text-foreground/85">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <Reveal key={i} delay={Math.min(i * 0.03, 0.2)}>
              <h2 className="text-h3 pt-4 font-semibold tracking-tight text-foreground">{block.text}</h2>
            </Reveal>
          );
        }
        if (block.type === "list") {
          return (
            <Reveal key={i} delay={Math.min(i * 0.03, 0.2)}>
              <ul className="space-y-2.5 rounded-2xl border border-border bg-surface-muted/50 p-6">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-body-sm text-foreground/85">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-linear-to-r from-accent to-accent-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        }
        return (
          <Reveal key={i} delay={Math.min(i * 0.03, 0.2)}>
            <p>{block.text}</p>
          </Reveal>
        );
      })}
    </div>
  );
}
