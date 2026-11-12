"use client";

import Link from "next/link";
import { useState } from "react";
import { inr, plans } from "@/lib/pricing";
import { IconCheck } from "./Icons";

export default function PricingPlans({ compact = false }: { compact?: boolean }) {
  const [yearly, setYearly] = useState(false);
  return (
    <div className="space-y-6">
      <div role="group" aria-label="Billing period" className="mx-auto flex w-fit rounded-lg border border-line bg-white p-1 text-[14.5px]">
        {[false, true].map((y) => (
          <button
            key={String(y)}
            type="button"
            aria-pressed={yearly === y}
            onClick={() => setYearly(y)}
            className={`rounded-md px-4 py-1.5 font-semibold ${yearly === y ? "bg-ink text-white" : "text-muted hover:text-ink"}`}
          >
            {y ? "Yearly (save 20%)" : "Monthly"}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((p) => {
          const price = yearly ? p.yearlyPerMonth : p.monthly;
          const featured = p.code === "growth";
          return (
            <article key={p.code} className={`flex flex-col rounded-xl border bg-white p-6 ${featured ? "border-ink shadow-[0_18px_40px_-28px_rgba(19,32,47,.6)]" : "border-line"}`}>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-xl font-bold">{p.name}</h3>
                {featured && <span className="text-[12.5px] font-semibold text-saffron-ink">Includes AI calls</span>}
              </div>
              <p className="mt-1 min-h-[44px] text-[14.5px] text-muted">{p.forWho}</p>
              <div className="my-5">
                {price ? (
                  <>
                    <span className="font-display text-4xl font-bold tabular-nums">{inr(price)}</span>
                    <span className="text-[14.5px] text-muted"> / month</span>
                    <div className="text-[13px] text-muted">{yearly ? `billed yearly (${inr(price * 12)})` : "billed monthly"}, plus usage</div>
                  </>
                ) : (
                  <>
                    <span className="font-display text-4xl font-bold">Custom</span>
                    <div className="text-[13px] text-muted">priced for your volume</div>
                  </>
                )}
              </div>
              <ul className="mb-6 flex-1 space-y-2 text-[14.5px]">
                {[...p.limits, ...(compact ? p.features.slice(0, 3) : p.features)].map((f) => (
                  <li key={f} className="flex gap-2.5"><IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-peacock" /><span>{f}</span></li>
                ))}
              </ul>
              <Link href={`/contact?plan=${p.code}`} className={`btn ${featured ? "btn-primary" : "btn-secondary"}`}>
                {price ? `Talk to us about ${p.name}` : "Contact sales"}
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
