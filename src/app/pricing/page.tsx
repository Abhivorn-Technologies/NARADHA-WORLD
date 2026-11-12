import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Faq, { faqJsonLd } from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import PricingPlans from "@/components/PricingPlans";
import { trial, usagePrices } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Starter ₹5,999 and Growth ₹14,999 a month, 20% off yearly, plus usage for WhatsApp templates, AI replies and AI call minutes.",
  alternates: { canonical: "/pricing" },
};

const faqs = [
  { q: "What does the plan price include?", a: "The software for your team: lead dashboard, WhatsApp flows, AI agent, bookings, reports and integrations, within the plan's limits. Usage is charged separately from your wallet." },
  { q: "How does the wallet work?", a: "You add money to a prepaid wallet with Razorpay. Each WhatsApp template, AI reply and AI call minute is deducted at the prices above, and every charge is listed in your billing history. AI replies and calls pause when the wallet reaches zero; your leads are still saved." },
  { q: "What happens after the free trial?", a: `The trial lasts ${trial.days} days on the ${trial.plan} plan with ₹${trial.credit} of usage credit. To keep automation running afterwards, choose a plan. If you don't, new leads are still saved and you can choose a plan any time.` },
  { q: "Can I change or cancel my plan?", a: "Yes. You can move between plans or cancel; cancellation stops renewal at the end of the paid period. See the Refund and Cancellation Policy for details." },
  { q: "Are taxes included?", a: "Prices are shown in Indian rupees and exclude GST, which is added on your invoice where applicable." },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHeader eyebrow="Pricing" title="Simple plans, and you pay only for what you use" text={`Every plan starts with a ${trial.days}-day free trial on ${trial.plan} with ₹${trial.credit} of usage credit.`} />
      <section className="py-14">
        <div className="container-x"><PricingPlans /></div>
      </section>
      <section className="pb-14">
        <div className="container-x grid gap-8 md:grid-cols-[1fr_1.5fr]">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold md:text-[30px]">Usage prices</h2>
            <p className="text-[16px] leading-relaxed text-ink-2">Paid from your prepaid wallet. WhatsApp template prices follow Meta&apos;s charges for marketing and utility messages.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-line">
            <table className="w-full text-[15px]">
              <thead className="bg-mist text-left text-[13px] uppercase tracking-wider text-muted">
                <tr><th className="px-4 py-3 font-semibold">Item</th><th className="px-4 py-3 text-right font-semibold">Price</th></tr>
              </thead>
              <tbody className="divide-y divide-line">
                {usagePrices.map((u) => (
                  <tr key={u.item}><td className="px-4 py-3">{u.item}</td><td className="whitespace-nowrap px-4 py-3 text-right font-semibold tabular-nums">{u.price}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="border-t border-line py-14">
        <div className="container-x grid gap-8 md:grid-cols-[1fr_1.5fr]">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold md:text-[30px]">Billing questions</h2>
            <p className="text-[15.5px] text-ink-2">See also our <Link href="/refunds" className="font-semibold text-saffron-ink underline underline-offset-2">Refund and Cancellation Policy</Link>.</p>
          </div>
          <Faq items={faqs} />
        </div>
      </section>
      <CtaBand title="Not sure which plan fits?" text="Tell us how many leads you get a month and we'll recommend a plan and show the expected usage cost." />
    </>
  );
}
