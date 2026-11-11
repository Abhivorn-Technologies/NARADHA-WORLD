"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { contactSchema, fieldErrors, industries, leadVolumes, type FieldErrors } from "@/lib/contact";

type Status = { kind: "idle" | "sending" | "sent" } | { kind: "error"; message: string };

export default function ContactForm({ plan }: { plan?: string }) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = { ...Object.fromEntries(form.entries()), consent: form.get("consent") === "on", plan: plan ?? "" };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const errs = fieldErrors(parsed.error);
      setErrors(errs);
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setErrors({});
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus({ kind: "sent" });
        return;
      }
      if (json.errors) setErrors(json.errors);
      setStatus({ kind: "error", message: json.message || "Something went wrong. Please try again." });
    } catch {
      setStatus({ kind: "error", message: "No connection. Check your internet and try again." });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="rounded-xl border border-peacock/30 bg-peacock-soft p-6">
        <h2 className="text-xl font-bold">Thank you. We&apos;ve received your request.</h2>
        <p className="mt-2 text-[15.5px] text-ink-2">Our team will contact you on WhatsApp or by phone to fix a demo time.</p>
      </div>
    );
  }

  const input = (name: keyof FieldErrors) =>
    `mt-1.5 w-full rounded-lg border bg-white px-3 py-2.5 text-[15.5px] outline-none focus:border-ink ${errors[name] ? "border-danger" : "border-line"}`;
  const err = (name: keyof FieldErrors) =>
    errors[name] ? <p id={`e-${name}`} className="mt-1 text-[13.5px] text-danger">{errors[name]}</p> : null;
  const a11y = (name: keyof FieldErrors) => ({ id: `f-${name}`, "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `e-${name}` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-[14.5px] font-semibold">Your name<input name="name" autoComplete="name" className={input("name")} {...a11y("name")} />{err("name")}</label>
        <label className="block text-[14.5px] font-semibold">Business name<input name="business" autoComplete="organization" className={input("business")} {...a11y("business")} />{err("business")}</label>
        <label className="block text-[14.5px] font-semibold">Work email<input name="email" type="email" autoComplete="email" className={input("email")} {...a11y("email")} />{err("email")}</label>
        <label className="block text-[14.5px] font-semibold">Mobile (WhatsApp)<input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="98480 12345" className={input("phone")} {...a11y("phone")} />{err("phone")}</label>
        <label className="block text-[14.5px] font-semibold">Industry
          <select name="industry" defaultValue="" className={input("industry")} {...a11y("industry")}>
            <option value="" disabled>Choose…</option>
            {industries.map((i) => <option key={i}>{i}</option>)}
          </select>{err("industry")}
        </label>
        <label className="block text-[14.5px] font-semibold">Leads per month
          <select name="leads" defaultValue="" className={input("leads")} {...a11y("leads")}>
            <option value="" disabled>Choose…</option>
            {leadVolumes.map((i) => <option key={i}>{i}</option>)}
          </select>{err("leads")}
        </label>
      </div>
      <label className="block text-[14.5px] font-semibold">City <span className="font-normal text-muted">(optional)</span><input name="city" autoComplete="address-level2" className={input("city")} {...a11y("city")} />{err("city")}</label>
      <label className="block text-[14.5px] font-semibold">What would you like to see? <span className="font-normal text-muted">(optional)</span><textarea name="message" rows={4} className={input("message")} {...a11y("message")} />{err("message")}</label>
      <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="flex items-start gap-3 text-[14.5px] text-ink-2">
        <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-[#13202f]" {...a11y("consent")} />
        <span>I agree that Naradha World may contact me by phone, WhatsApp and email about this request, as described in the <Link href="/privacy" className="font-semibold text-saffron-ink underline underline-offset-2">Privacy Policy</Link>.</span>
      </label>
      {err("consent")}
      {status.kind === "error" && <p role="alert" className="rounded-lg bg-[#fdecea] px-3 py-2 text-[14.5px] text-danger">{status.message}</p>}
      <button type="submit" disabled={status.kind === "sending"} className="btn btn-primary w-full sm:w-auto disabled:opacity-60">
        {status.kind === "sending" ? "Sending…" : "Request a demo"}
      </button>
    </form>
  );
}
