import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { IconCalendar, IconChart, IconFlow, IconInbox, IconPhone, IconPlug, IconSpark } from "@/components/Icons";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Product",
  description: "WhatsApp flows, an AI agent that answers from your documents, Telugu AI calls, bookings with reminders, reports and integrations.",
  alternates: { canonical: "/product" },
};

const sections = [
  {
    id: "flows", icon: IconFlow, title: "WhatsApp flows you build yourself",
    intro: "Design the conversation on a canvas: drag steps in, connect them, and edit the text on the side.",
    points: [
      "Steps for templates, buttons (up to 3), list menus (up to 10 options), questions, conditions, lead score, brochures, booking, AI call, hand-off and end",
      "Answers are saved on the lead's profile, such as budget, location and timeline",
      "Test mode runs the flow as a pretend chat before you switch it on",
      "Checks stop you from publishing a flow with missing connections or text that WhatsApp would reject",
      "A lead who goes quiet gets one reminder; typed questions go to the AI and the step is shown again",
    ],
  },
  {
    id: "ai", icon: IconSpark, title: "An AI agent that answers from your documents",
    intro: "Upload your brochure, price list and FAQs. The AI uses only that information to answer.",
    points: [
      "Replies in Telugu script, Telugu in English letters, or English, following the lead",
      "Asks your qualifying questions one at a time and scores leads hot, warm or cold",
      "Offers free slots and books the visit or demo",
      "Hands the chat to your team when a lead asks for a person, wants to negotiate, or asks something it can't answer",
      "If one AI service is unavailable, another takes over automatically",
    ],
  },
  {
    id: "calls", icon: IconPhone, title: "Telugu AI phone calls",
    intro: "A voice agent calls leads in natural Telugu and reports back in English.",
    points: [
      "Calls new leads automatically, when a lead taps “Call me now”, from a flow step, or when your team clicks a button",
      "Calls only within your calling hours, retries when there is no answer, then sends a WhatsApp message",
      "After each call: recording, transcript, English summary, outcome and lead score",
      "When the lead agrees to a time, the visit is booked and confirmed on WhatsApp",
      "Opens by saying it is an AI assistant and that the call is recorded",
    ],
  },
  {
    id: "bookings", icon: IconCalendar, title: "Bookings and reminders",
    intro: "Free slots come from your working days, hours, slot length and how many visits can share a slot.",
    points: [
      "WhatsApp confirmation, then reminders 24 hours and 1 hour before",
      "Mark visits completed or no-show; no-shows get a reschedule message",
      "Optional Google Calendar sync so bookings appear in your calendar and busy times are skipped",
    ],
  },
  {
    id: "inbox", icon: IconInbox, title: "A dashboard for your sales team",
    intro: "Each lead has its WhatsApp chat, AI calls, bookings, notes and activity in one place.",
    points: [
      "New leads are shared between salespeople in turn, each with a WhatsApp alert",
      "Take over a chat from the AI, reply, and hand it back",
      "Roles for owners, admins and sales, so each person sees what they need",
    ],
  },
  {
    id: "reports", icon: IconChart, title: "Reports that connect ads to revenue",
    intro: "Follow the leads from a period through to won deals.",
    points: [
      "Funnel: leads, replied or answered a call, visit booked, visit done, won",
      "Revenue from the deal value you enter when a lead is won",
      "Meta campaign results with your ad spend: cost per lead, per booking, per deal and return on ad spend",
      "Median time to first reply and how much the AI handled",
    ],
  },
  {
    id: "integrations", icon: IconPlug, title: "Integrations",
    intro: "Bring leads in from anywhere and send updates to the tools you already use.",
    points: [
      "Lead capture links for website forms, Google Ads lead forms and property portals (via email parser or Zapier)",
      "API with keys you can revoke, for your own software or automation tools",
      "Signed webhooks when leads arrive, change status, book or finish a call, for Google Sheets or your CRM",
      "CSV export that opens correctly in Excel, Telugu included",
    ],
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHeader eyebrow="Product" title="From the first enquiry to the site visit" text="Naradha World combines WhatsApp, an AI agent and Telugu AI calls in one system, with your sales team in control." />
      <div className="container-x py-6">
        <nav aria-label="On this page" className="flex flex-wrap gap-x-5 gap-y-2 py-4 text-[14.5px]">
          {sections.map((s) => <a key={s.id} href={`#${s.id}`} className="font-medium text-muted hover:text-ink">{s.title.split(" ").slice(0, 3).join(" ")}</a>)}
        </nav>
      </div>
      <div className="container-x space-y-16 pb-20">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="grid scroll-mt-24 gap-6 border-t border-line pt-10 md:grid-cols-[1fr_1.4fr]">
            <div className="space-y-3">
              <s.icon className="h-7 w-7 text-peacock" />
              <h2 className="text-2xl font-bold md:text-[30px]">{s.title}</h2>
              <p className="text-[16px] leading-relaxed text-ink-2">{s.intro}</p>
            </div>
            <ul className="space-y-3 text-[15.5px] leading-relaxed">
              {s.points.map((p) => (
                <li key={p} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" aria-hidden="true" />{p}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
