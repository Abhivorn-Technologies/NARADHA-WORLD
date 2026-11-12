import Link from "next/link";
import Conversation from "@/components/Conversation";
import CtaBand from "@/components/CtaBand";
import Faq, { faqJsonLd } from "@/components/Faq";
import { IconArrow, IconCalendar, IconChart, IconChat, IconFlow, IconInbox, IconPhone, IconPlug, IconSpark } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import PricingPlans from "@/components/PricingPlans";
import { plans, trial } from "@/lib/pricing";
import { site } from "@/lib/site";

export const metadata = { alternates: { canonical: "/" } };

const steps = [
  { title: "A lead comes in", text: "From a Meta lead form, your WhatsApp number, your website, a Google Ads lead form or a property portal. Repeat enquiries are merged by phone number." },
  { title: "WhatsApp reply within a minute", text: "Your approved welcome message goes out with buttons, and the salesperson on duty gets a WhatsApp alert." },
  { title: "Questions answered, needs understood", text: "A guided flow asks budget, location and timeline. If the lead types a question, the AI answers from your brochure and price list." },
  { title: "A Telugu AI call, if you want one", text: "The voice agent calls in natural Telugu, offers free slots and books the visit. You get an English summary and the recording." },
  { title: "Visit booked, reminders sent", text: "Confirmation, 24-hour and 1-hour reminders go out on WhatsApp. No-shows get a reschedule message." },
  { title: "See what brought revenue", text: "Reports show leads, visits and won deals by campaign, with cost per lead and return on ad spend." },
];

const modules = [
  { icon: IconFlow, title: "WhatsApp flows", text: "Build the conversation by dragging steps: buttons, menus, questions, brochure, booking. Test it as a pretend chat before it goes live." },
  { icon: IconSpark, title: "AI agent", text: "Answers in the lead's own language and script, only from the documents you upload. Hands the chat to your team when it should." },
  { icon: IconPhone, title: "Telugu AI calls", text: "Calls new leads or those who ask for a call, within your calling hours. Retries when there's no answer, then follows up on WhatsApp." },
  { icon: IconCalendar, title: "Bookings and reminders", text: "Free slots from your working hours, optional Google Calendar sync, automatic reminders and no-show follow-up." },
  { icon: IconInbox, title: "One inbox for the team", text: "Every lead with its WhatsApp chat, calls, bookings and notes. Take over any chat from the AI with one click." },
  { icon: IconChart, title: "Reports", text: "Funnel from lead to won deal, revenue, cost per lead and per booking, and how fast each lead got its first reply." },
  { icon: IconPlug, title: "Connects to your tools", text: "Lead capture links, an API, signed webhooks for Google Sheets or your CRM, and CSV export." },
  { icon: IconChat, title: "Built on official WhatsApp", text: "Uses the WhatsApp Business Platform from Meta with your own number and templates you approve." },
];

const languages = [
  { label: "Telugu", sample: "నమస్తే గారు! Tellapur Heights లో 2BHK flats ₹78 లక్షల నుండి ఉన్నాయి. మీ budget ఎంత అనుకుంటున్నారు?", telugu: true },
  { label: "Telugu in English letters", sample: "Namaskaram Ravi garu! Kokapet lo 3BHK villas ₹1.45 Cr nunchi start avuthayi. Site visit plan cheddama?" },
  { label: "English", sample: "Plots in our Shamshabad layout start at ₹32,000 per sq yard. What plot size are you looking for?" },
];

const industries = [
  { title: "Real estate", text: "Qualify enquiries for flats, villas and plots, share the brochure and book site visits." },
  { title: "Education and coaching", text: "Answer course and fee questions, book counselling sessions and remind students before them." },
  { title: "Clinics", text: "Answer treatment questions from your own information and book consultations with reminders." },
  { title: "Interiors and home services", text: "Collect requirements and budget, then book a home visit or showroom appointment." },
];

const faqs = [
  { q: "Do I need my own WhatsApp number?", a: "Yes. Naradha World works with the official WhatsApp Business Platform, so your business needs a verified Meta Business account and a number registered for it. We help you set this up during onboarding." },
  { q: "What does the AI say when it doesn't know an answer?", a: "It only uses facts from the documents you upload. If the answer isn't there, it tells the lead a team member will confirm, and alerts your salesperson." },
  { q: "Can my team reply themselves?", a: "Yes. Any team member can take over a chat from the dashboard. The AI stops replying to that lead until you hand it back." },
  { q: "Which languages does it support?", a: "WhatsApp replies follow the lead's language: Telugu script, Telugu typed in English letters, or English. Phone calls are in Telugu and switch to English or Hindi if the lead does." },
  { q: "How is usage charged?", a: "Plans include the software. WhatsApp templates, AI replies and AI call minutes are paid from a prepaid wallet at fixed prices shown on the pricing page. Replies within 24 hours of the lead's own message cost nothing." },
  { q: "Is there a free trial?", a: `Yes, ${trial.days} days on the ${trial.plan} plan with ₹${trial.credit} of usage credit, so you can try WhatsApp replies and AI calls on real leads.` },
];

export default function Home() {
  const growth = plans.find((p) => p.code === "growth")!;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: site.name,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: site.description,
          url: site.url,
          publisher: { "@type": "Organization", name: site.company.legalName },
          creator: { "@type": "Organization", name: site.company.legalName },
          brand: { "@type": "Brand", name: site.name },
          offers: plans.filter((p) => p.monthly).map((p) => ({ "@type": "Offer", name: p.name, price: p.monthly, priceCurrency: "INR" })),
        }}
      />
      <JsonLd data={faqJsonLd(faqs.map((f) => ({ q: f.q, a: f.a })))} />

      <section className="border-b border-line">
        <div className="container-x grid items-center gap-12 py-14 md:grid-cols-[1.15fr_1fr] md:py-20">
          <div className="space-y-6">
            <p className="eyebrow">WhatsApp · AI agent · Telugu AI calls</p>
            <h1 className="text-[38px] font-bold leading-[1.08] sm:text-5xl md:text-[54px]">{site.tagline}</h1>
            <p className="max-w-xl text-[17.5px] leading-relaxed text-ink-2">
              Naradha World replies to every new lead on WhatsApp, answers their questions from your own brochure, calls them in Telugu, and books the site visit or demo. Your team steps in only where a person is needed.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">Book a demo <IconArrow className="h-4 w-4" /></Link>
              {site.appUrl ? (
                <a href={`${site.appUrl}/signup`} className="btn btn-secondary">Start {trial.days}-day free trial</a>
              ) : (
                <Link href="/product" className="btn btn-secondary">See how it works</Link>
              )}
            </div>
            <p className="text-[14px] text-muted">From {`₹${plans[0].monthly?.toLocaleString("en-IN")}`} a month. {trial.days}-day free trial with ₹{trial.credit} usage credit.</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Conversation />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="journey">
        <div className="container-x space-y-10">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">How it works</p>
            <h2 id="journey" className="text-3xl font-bold md:text-[38px]">What happens when a lead comes in</h2>
            <p className="text-[16.5px] text-ink-2">The same steps your best salesperson follows, done automatically for every lead, at any hour.</p>
          </div>
          <ol className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="relative border-t-2 border-ink pt-4">
                <span className="font-display text-sm font-bold text-saffron-ink">Step {i + 1}</span>
                <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-20" aria-labelledby="product">
        <div className="container-x space-y-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl space-y-3">
              <p className="eyebrow">Product</p>
              <h2 id="product" className="text-3xl font-bold md:text-[38px]">Everything between the enquiry and the visit</h2>
            </div>
            <Link href="/product" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-saffron-ink hover:underline">Product details <IconArrow className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m) => (
              <div key={m.title} className="space-y-2 bg-white p-6">
                <m.icon className="h-6 w-6 text-peacock" />
                <h3 className="text-[17px] font-bold">{m.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-ink-2">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="languages">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.3fr] md:items-start">
          <div className="space-y-3">
            <p className="eyebrow">Languages</p>
            <h2 id="languages" className="text-3xl font-bold md:text-[38px]">Speaks the way your customers type</h2>
            <p className="text-[16.5px] leading-relaxed text-ink-2">
              Leads in Hyderabad and across the Telugu states write in Telugu, in Telugu with English letters, or in English. The AI replies in the same style, and the phone agent talks in natural Telugu with everyday English words like budget, EMI and site visit.
            </p>
          </div>
          <ul className="space-y-3">
            {languages.map((l) => (
              <li key={l.label} className="rounded-xl border border-line bg-white p-5">
                <div className="text-[12.5px] font-semibold uppercase tracking-wider text-muted">{l.label}</div>
                <p className={`mt-1.5 text-[16px] leading-relaxed ${l.telugu ? "font-telugu" : ""}`} lang={l.telugu ? "te" : "en"}>{l.sample}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-mist py-16 md:py-20" aria-labelledby="industries">
        <div className="container-x space-y-10">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Who it&apos;s for</p>
            <h2 id="industries" className="text-3xl font-bold md:text-[38px]">For businesses that sell through a visit or a conversation</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((i) => (
              <div key={i.title} className="space-y-2">
                <h3 className="text-lg font-bold">{i.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink-2">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="pricing">
        <div className="container-x space-y-10">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <p className="eyebrow">Pricing</p>
            <h2 id="pricing" className="text-3xl font-bold md:text-[38px]">A monthly plan, plus what you use</h2>
            <p className="text-[16.5px] text-ink-2">AI calls are included from the {growth.name} plan. Usage is paid from a prepaid wallet at fixed prices.</p>
          </div>
          <PricingPlans compact />
          <p className="text-center text-[15px]"><Link href="/pricing" className="font-semibold text-saffron-ink hover:underline">See usage prices and billing details</Link></p>
        </div>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="faq">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.6fr]">
          <div className="space-y-3">
            <p className="eyebrow">Questions</p>
            <h2 id="faq" className="text-3xl font-bold md:text-[38px]">Before you book a demo</h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
