"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Bot, MessageCircle, RotateCcw, Send, X } from "lucide-react";
import { answer, chipLabels, fallback, getIntent, starterChips, type Intent, type Link as L } from "./knowledge";
import { useBrand } from "@/components/brand/context";
import { brandText } from "@/lib/brand";

type Msg = { id: number; from: "bot" | "user"; text: string; links?: L[]; chips?: string[] };

const STORE = "gt-chat-v1";
const WELCOME: Msg = {
  id: 0,
  from: "bot",
  text: "Hi! I'm the Guru of Tech assistant. Ask me about our services, technologies, industries, AI work or how to start a project.",
  chips: starterChips,
};

function toMsg(id: number, it: Intent): Msg {
  return { id, from: "bot", text: it.answer, links: it.links, chips: it.next };
}

export function ChatWidget() {
  const brand = useBrand();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>(() => [{ ...WELCOME, text: brandText(WELCOME.text, brand) }]);
  const [typing, setTyping] = useState(false);
  const [text, setText] = useState("");
  const idRef = useRef(1);
  const scroller = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORE);
      if (raw) {
        const saved = JSON.parse(raw) as Msg[];
        if (Array.isArray(saved) && saved.length) {
          setMsgs(saved);
          idRef.current = Math.max(...saved.map((m) => m.id)) + 1;
        }
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      sessionStorage.setItem(STORE, JSON.stringify(msgs.slice(-40)));
    } catch {}
  }, [msgs, hydrated]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing, open]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => input.current?.focus({ preventScroll: true }), 250);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    if (window.matchMedia("(max-width: 639px)").matches) document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const reply = useCallback((it: Intent) => {
    setTyping(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, toMsg(idRef.current++, it)]);
    }, 450 + Math.min(it.answer.length * 3, 500));
  }, []);

  const ask = useCallback(
    (label: string, intent?: Intent) => {
      const q = label.trim();
      if (!q) return;
      setMsgs((m) => [...m, { id: idRef.current++, from: "user", text: q }]);
      setText("");
      reply(intent ?? answer(q) ?? fallback);
    },
    [reply],
  );

  const reset = () => {
    window.clearTimeout(timer.current);
    setTyping(false);
    idRef.current = 1;
    setMsgs([{ ...WELCOME, text: brandText(WELCOME.text, brand) }]);
  };

  const last = msgs[msgs.length - 1];
  const chips = last?.from === "bot" && !typing ? last.chips : undefined;

  return (
    <>
      {/* panel */}
      <div
        role="dialog"
        aria-label={`Chat with ${brand.fullName} assistant`}
        aria-hidden={!open}
        className={`fixed z-[200] flex flex-col overflow-hidden border border-border bg-background shadow-2xl transition-all duration-300 max-sm:inset-x-0 max-sm:bottom-0 max-sm:h-[88dvh] max-sm:rounded-t-3xl sm:bottom-24 sm:right-6 sm:h-[36rem] sm:max-h-[calc(100dvh-8rem)] sm:w-[24rem] sm:rounded-3xl ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0 max-sm:translate-y-full"
        }`}
      >
        {/* header */}
        <div className="flex items-center gap-3 bg-linear-to-r from-accent to-accent-2 px-4 py-3.5 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
            <Bot className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold leading-tight">{brand.name} Assistant</p>
            <p className="flex items-center gap-1.5 text-caption text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-300" /> Instant answers
            </p>
          </div>
          <button type="button" onClick={reset} aria-label="Restart chat" className="rounded-full p-2 text-white/80 transition hover:bg-white/15 hover:text-white">
            <RotateCcw className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-full p-2 text-white/80 transition hover:bg-white/15 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* messages */}
        <div ref={scroller} aria-live="polite" className="flex-1 space-y-3 overflow-y-auto overscroll-contain bg-surface-muted/40 px-4 py-4">
          {msgs.map((m) => (
            <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[86%] ${m.from === "user" ? "" : "space-y-2"}`}>
                <div
                  className={`whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-body-sm leading-relaxed ${
                    m.from === "user"
                      ? "rounded-br-md bg-accent text-white"
                      : "rounded-bl-md border border-border bg-surface text-foreground"
                  }`}
                >
                  {m.text}
                </div>
                {m.links && (
                  <div className="flex flex-wrap gap-2">
                    {m.links.map((l) =>
                      l.href.startsWith("/") ? (
                        <Link
                          key={l.href + l.label}
                          href={l.href}
                          onClick={() => window.matchMedia("(max-width: 639px)").matches && setOpen(false)}
                          className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent-soft px-3 py-1.5 text-caption font-medium text-accent transition hover:bg-accent hover:text-white"
                        >
                          {l.label} <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      ) : (
                        <a
                          key={l.href}
                          href={l.href}
                          className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent-soft px-3 py-1.5 text-caption font-medium text-accent transition hover:bg-accent hover:text-white"
                        >
                          {l.label}
                        </a>
                      ),
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start" aria-label="Assistant is typing">
              <div className="flex gap-1 rounded-2xl rounded-bl-md border border-border bg-surface px-4 py-3">
                {[0, 1, 2].map((i) => (
                  <span key={i} style={{ animationDelay: `${i * 0.15}s` }} className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted" />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* suggestions */}
        {chips && (
          <div className="flex gap-2 overflow-x-auto border-t border-border bg-background px-3 py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {chips.map((c) => {
              const it = getIntent(c);
              if (!it) return null;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => ask(chipLabels[c] ?? c, it)}
                  className="shrink-0 rounded-full border border-border bg-surface px-3 py-1.5 text-caption font-medium transition hover:border-accent hover:text-accent"
                >
                  {chipLabels[c] ?? c}
                </button>
              );
            })}
          </div>
        )}

        {/* input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(text);
          }}
          className="flex items-center gap-2 border-t border-border bg-background px-3 py-3"
        >
          <input
            ref={input}
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={200}
            placeholder="Type your question…"
            aria-label="Your message"
            className="min-w-0 flex-1 rounded-full border border-border bg-surface px-4 py-2.5 text-base outline-none transition focus:border-accent sm:text-sm"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={!text.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white transition hover:bg-accent-strong disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>

      {/* launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className={`fixed bottom-5 right-5 z-[200] flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-accent to-accent-2 text-white shadow-xl shadow-accent/30 transition-all duration-300 hover:scale-105 sm:bottom-6 sm:right-6 ${
          open ? "max-sm:pointer-events-none max-sm:scale-0" : ""
        }`}
      >
        <span className={`absolute transition-all duration-300 ${open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}>
          <MessageCircle className="h-6 w-6" />
        </span>
        <span className={`absolute transition-all duration-300 ${open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}>
          <X className="h-6 w-6" />
        </span>
        {!open && <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-400" />}
      </button>
    </>
  );
}
