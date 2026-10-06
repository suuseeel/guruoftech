"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Check, CheckCircle2, ChevronDown, FileText, Loader2, Send, Upload, X } from "lucide-react";
import type { Job } from "./data";

type Status = "idle" | "sending" | "sent" | "error";

const MAX_CV_BYTES = 5 * 1024 * 1024;
const ACCEPTED = ".pdf,.doc,.docx";

type SelectOption = { value: string; label: string };

/* Custom dropdown — the native <select>'s padding/arrow are inconsistent
 * across browsers (that's the "text far from border" issue), so this owns
 * its own box model and matches the other fields exactly. */
function PositionSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Position"
        className={`mt-2 flex w-full items-center justify-between gap-2 rounded-xl border bg-background px-4 py-2.5 text-left text-sm outline-none transition-colors ${
          open ? "border-accent" : "border-border"
        }`}
      >
        <span className="truncate">{current?.label}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-border bg-surface py-1.5 shadow-lg shadow-black/5"
        >
          {options.map((o) => {
            const selected = o.value === value;
            return (
              <li key={o.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(o.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm transition-colors hover:bg-accent-soft/60 ${
                    selected ? "text-accent" : "text-foreground"
                  }`}
                >
                  <span className="truncate">{o.label}</span>
                  {selected && <Check className="h-4 w-4 shrink-0" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function ApplyForm({ jobs, initialRoleSlug }: { jobs: Job[]; initialRoleSlug?: string }) {
  const [role, setRole] = useState(initialRoleSlug ?? (jobs[0]?.slug ?? "general"));
  const [cv, setCv] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const fileInput = useRef<HTMLInputElement>(null);

  function pickFile(file: File | undefined) {
    if (!file) return;
    if (file.size > MAX_CV_BYTES) {
      toast.error("That file is too large", { description: "CVs must be under 5MB." });
      return;
    }
    const okExt = /\.(pdf|docx?)$/i.test(file.name);
    if (!okExt) {
      toast.error("Unsupported file type", { description: "Upload a PDF or Word document." });
      return;
    }
    setCv(file);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const roleLabel = role === "general" ? "General Application" : jobs.find((j) => j.slug === role)?.title ?? role;
    fd.set("role", roleLabel);
    if (cv) fd.set("cv", cv);

    setStatus("sending");
    const toastId = toast.loading("Sending your application…");
    try {
      const res = await fetch("/api/careers/apply", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong. Please try again.");
      setStatus("sent");
      toast.success("Application sent!", {
        id: toastId,
        description: "We'll get back to you if there's a fit.",
      });
    } catch (err) {
      setStatus("error");
      toast.error("Couldn't send your application", {
        id: toastId,
        description: err instanceof Error ? err.message : "Something went wrong. Please try again.",
      });
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-surface p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h2 className="text-h4 mt-4 font-semibold">Application sent successfully</h2>
        <p className="mt-2 max-w-sm text-body-sm text-muted">
          Thanks for applying — we&apos;ve received your details{cv ? " and your CV" : ""}. We&apos;ll reach out
          if there&apos;s a fit for the role.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium">
            Phone <span className="text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
            placeholder="+91 ..."
          />
        </div>
        <div>
          <span className="text-sm font-medium">Position</span>
          <PositionSelect
            value={role}
            onChange={setRole}
            options={[...jobs.map((j) => ({ value: j.slug, label: j.title })), { value: "general", label: "General Application" }]}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium">
          A note about yourself <span className="text-muted">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
          placeholder="What are you looking to work on next?"
        />
      </div>

      <div className="mt-5">
        <span className="text-sm font-medium">CV / Resume</span>
        {cv ? (
          <div className="mt-2 flex items-center justify-between rounded-xl border border-accent/30 bg-accent-soft/40 px-4 py-3">
            <span className="flex min-w-0 items-center gap-2 text-sm">
              <FileText className="h-4 w-4 shrink-0 text-accent" />
              <span className="truncate">{cv.name}</span>
              <span className="shrink-0 text-caption text-muted">({Math.round(cv.size / 1024)} KB)</span>
            </span>
            <button
              type="button"
              onClick={() => {
                setCv(null);
                if (fileInput.current) fileInput.current.value = "";
              }}
              aria-label="Remove file"
              className="shrink-0 rounded-full p-1 text-muted transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <label
            htmlFor="cv"
            className="mt-2 flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed border-border bg-background px-4 py-8 text-center transition-colors hover:border-accent"
          >
            <Upload className="h-5 w-5 text-accent" />
            <span className="text-sm text-muted">
              <span className="font-medium text-accent">Click to upload</span> your CV
            </span>
            <span className="text-caption text-muted">PDF or Word, up to 5MB</span>
          </label>
        )}
        <input
          ref={fileInput}
          id="cv"
          name="cv"
          type="file"
          accept={ACCEPTED}
          className="hidden"
          onChange={(e) => pickFile(e.target.files?.[0])}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            Sending
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Submit application
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
