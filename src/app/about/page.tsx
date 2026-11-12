import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { LogoMark } from "@/components/Logo";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a product of ${site.company.legalName}, built to help businesses answer every lead quickly, in the language their customers speak.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const c = site.company;
  return (
    <>
      <PageHeader eyebrow="About" title="A messenger for every enquiry" />
      <section className="py-14">
        <div className="container-x grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <div className="max-w-[68ch] space-y-5 text-[16.5px] leading-relaxed text-ink-2">
            <p>
              In the old stories, Narada carries messages between worlds and never misses a delivery. We named {site.name} after him because that is the job: make sure no enquiry waits, and every customer hears back in a language they are comfortable with.
            </p>
            <p>
              Most businesses that run ads lose leads in the first hour. Someone has to notice the enquiry, call back, send details, book the visit and follow up. When the team is busy or it is late at night, that chain breaks. {site.name} does those steps automatically and brings your team in where a person adds value.
            </p>
            <p>
              We started with businesses in Hyderabad and the Telugu states, where customers often write in Telugu or in Telugu with English letters, and many prefer a phone call to a form. That is why the product replies in the customer&apos;s own style on WhatsApp and calls in natural Telugu.
            </p>
            <p>
              {site.name} is a product of {c.legalName}{c.city ? `, ${c.city}` : ""}. {c.legalName} designs, develops, hosts, supports and maintains it, and is the company you contract with when you subscribe.
            </p>
          </div>
          <aside className="space-y-4 rounded-xl border border-line bg-mist p-6">
            <LogoMark className="h-14 w-14" />
            <h2 className="text-lg font-bold">What the logo means</h2>
            <p className="text-[15px] leading-relaxed text-ink-2">The ring is the world your customers live in. The saffron wave is a voice travelling through it, and the dot on the edge is the message that arrives.</p>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
