import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { plans } from "@/lib/pricing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a demo",
  description: "Book a demo of Naradha World. We'll show WhatsApp replies, a guided flow and a Telugu AI call on an example for your business.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const { plan } = await searchParams;
  const chosen = plans.find((p) => p.code === plan);
  const c = site.company;
  return (
    <>
      <PageHeader eyebrow="Contact" title="Book a demo" text="Tell us a little about your business. We'll reply on WhatsApp or by phone to fix a time." />
      <section className="py-14">
        <div className="container-x grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4">
            {chosen && <p className="rounded-lg bg-saffron-soft px-3 py-2 text-[14.5px] text-saffron-ink">You&apos;re asking about the {chosen.name} plan.</p>}
            <ContactForm plan={chosen?.code} />
          </div>
          <aside className="space-y-6 text-[15.5px]">
            <div className="space-y-2">
              <h2 className="text-lg font-bold">In the demo</h2>
              <ul className="space-y-1.5 text-ink-2">
                <li>A WhatsApp flow set up for your type of business</li>
                <li>The AI answering questions from a sample brochure</li>
                <li>A Telugu AI call booking a visit</li>
                <li>The dashboard and reports your team will use</li>
              </ul>
            </div>
            {(c.salesEmail || c.supportEmail || c.phone || c.registeredAddress) && (
              <div className="space-y-2">
                <h2 className="text-lg font-bold">Other ways to reach us</h2>
                <ul className="space-y-1.5 text-ink-2">
                  {(c.salesEmail || c.supportEmail) && <li>Email: <a className="font-semibold text-saffron-ink" href={`mailto:${c.salesEmail || c.supportEmail}`}>{c.salesEmail || c.supportEmail}</a></li>}
                  {c.phone && <li>Phone: <a className="font-semibold text-saffron-ink" href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a></li>}
                  {c.registeredAddress && <li>{c.registeredAddress}</li>}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
