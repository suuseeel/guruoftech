"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { DEFAULT_BRAND_KEY, type Brand } from "@/lib/brand";

const BrandContext = createContext<Brand | null>(null);

const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "TEXTAREA", "NOSCRIPT", "INPUT"]);

/** In-place literal swap: only ever touches the exact company-name substrings. */
function rewrite(value: string, shortFrom: string, shortTo: string, longFrom: string, longTo: string) {
  if (!value.includes(shortFrom) && !value.includes(longFrom)) return value;
  return value.split(longFrom).join(longTo).split(shortFrom).join(shortTo);
}

function walkAndRewrite(root: Node, shortFrom: string, shortTo: string, longFrom: string, longTo: string) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = (node as Text).parentElement;
      if (!parent || SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const targets: Text[] = [];
  for (let n = walker.nextNode(); n; n = walker.nextNode()) targets.push(n as Text);
  for (const node of targets) {
    const next = rewrite(node.nodeValue ?? "", shortFrom, shortTo, longFrom, longTo);
    if (next !== node.nodeValue) node.nodeValue = next;
  }
}

/**
 * Every page's copy is written assuming the default brand ("GuruOfTech" /
 * "Guru of Tech" — hundreds of mentions across dozens of files). Rather than
 * hand-editing every one of them (and risking missing some, per-brand), the
 * header/footer/metadata read the resolved brand directly from context, and
 * this provider patches the remaining plain-text mentions after they render.
 * For the default brand this is a no-op (the source text already matches),
 * so the primary site is completely unaffected.
 */
export function BrandProvider({ brand, children }: { brand: Brand; children: ReactNode }) {
  useEffect(() => {
    if (brand.key === DEFAULT_BRAND_KEY) return;
    const SHORT_FROM = "Guru of Tech";
    const LONG_FROM = "Guru of Tech";

    const run = (root: Node) => walkAndRewrite(root, SHORT_FROM, brand.name, LONG_FROM, brand.fullName);
    run(document.body);

    // Client-side route changes / the chatbot's own messages add new text
    // nodes after the fact — keep rewriting as they show up.
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node as unknown as Text;
            const next = rewrite(text.nodeValue ?? "", SHORT_FROM, brand.name, LONG_FROM, brand.fullName);
            if (next !== text.nodeValue) text.nodeValue = next;
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            run(node);
          }
        });
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [brand]);

  return <BrandContext.Provider value={brand}>{children}</BrandContext.Provider>;
}

export function useBrand(): Brand {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error("useBrand() must be used inside <BrandProvider>");
  return ctx;
}
