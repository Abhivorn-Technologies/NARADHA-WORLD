import type { Metadata } from "next";
import Link from "next/link";
import { CompanyContact, LegalPage } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service", description: `The terms for using ${site.name}.`, alternates: { canonical: "/terms" } };

export default function TermsPage() {
  const c = site.company;
  return (
    <LegalPage
      title="Terms of Service"
      intro={<p>These terms are an agreement between {c.legalName} (&ldquo;we&rdquo;) and the business that signs up for {site.name} (&ldquo;you&rdquo;). By creating an account or using the service, you accept them on behalf of your business.</p>}
      sections={[
        { id: "service", title: "1. The service", body: <p>{site.name} is a software service that receives leads, sends WhatsApp messages, runs guided conversation flows, generates AI replies, places AI phone calls, manages bookings and shows reports. Features available to you depend on your plan.</p> },
        { id: "account", title: "2. Your account", body: <ul>
          <li>You must give accurate details and keep them up to date.</li>
          <li>You are responsible for everyone you add to your account and for keeping passwords safe. Tell us at once if you suspect misuse.</li>
          <li>You must be at least 18 and authorised to bind your business.</li>
        </ul> },
        { id: "responsibilities", title: "3. Your responsibilities", body: <>
          <p>You are responsible for how you use {site.name} to contact people. In particular you must:</p>
          <ul>
            <li>Have a valid basis, such as consent, to message and call each lead, and say so in your lead forms.</li>
            <li>Follow WhatsApp&apos;s Business and Commerce Policies, use only approved templates, and keep your Meta Business account in good standing.</li>
            <li>Follow the Telecom Commercial Communications Customer Preference Regulations (TRAI) and other telemarketing rules, including calling hours and Do Not Disturb preferences.</li>
            <li>Make sure the information you upload for the AI is accurate and that you are allowed to share it.</li>
            <li>Follow our <Link href="/acceptable-use">Acceptable Use Policy</Link>.</li>
          </ul>
        </> },
        { id: "ai", title: "4. AI features", body: <p>AI replies, call conversations and summaries are generated automatically and can be wrong or incomplete. The AI is instructed to answer only from your documents and to hand over to your team when unsure, but you remain responsible for what is communicated on your behalf. Review your settings and documents, and monitor conversations.</p> },
        { id: "fees", title: "5. Plans, fees and wallet", body: <ul>
          <li>Plan fees are charged in advance, monthly or yearly, as shown on the <Link href="/pricing">Pricing</Link> page or in your order. Prices are in Indian rupees and exclude GST.</li>
          <li>Usage (WhatsApp templates, AI replies, AI call minutes) is deducted from your prepaid wallet at the prices shown in your account.</li>
          <li>We may change prices with at least 30 days&apos; notice. Changes apply from your next billing period.</li>
          <li>If a payment fails, automation may pause until it is resolved. Your data and new leads are kept.</li>
          <li>Refunds are covered by our <Link href="/refunds">Refund and Cancellation Policy</Link>.</li>
        </ul> },
        { id: "trial", title: "6. Free trial", body: <p>New accounts may receive a free trial with usage credit. Trial credit has no cash value. At the end of the trial, automation pauses unless you choose a paid plan.</p> },
        { id: "data", title: "7. Your data", body: <>
          <p>You own the data you and your leads put into {site.name}. You give us permission to process it only to provide and improve the service, as described in our <Link href="/privacy">Privacy Policy</Link>. For your leads&apos; data, we act as your data processor.</p>
          <p>You can export your leads at any time. After your account closes, we delete your data as set out in the Privacy Policy.</p>
        </> },
        { id: "third", title: "8. Third-party services", body: <p>{site.name} relies on services such as Meta&apos;s WhatsApp Business Platform, AI model providers, voice and telephony providers and Razorpay. Their availability, approvals and policies are outside our control. If a provider changes or suspends its service, we will make reasonable efforts to continue the affected feature, but we are not responsible for their decisions, for example a WhatsApp template rejection or account restriction.</p> },
        { id: "availability", title: "9. Availability and support", body: <p>We aim to keep {site.name} available at all times but do not guarantee uninterrupted service. Planned maintenance will be announced in advance where possible. Support and any service levels for Enterprise customers are as agreed in writing.</p> },
        { id: "ip", title: "10. Our intellectual property", body: <p>We own {site.name}, its software, design and brand. You may use the service during your subscription but may not copy, resell, reverse engineer or build a competing product from it.</p> },
        { id: "suspension", title: "11. Suspension and termination", body: <ul>
          <li>You may cancel at any time from your account or by writing to us.</li>
          <li>We may suspend or close an account that breaks these terms or the law, puts others at risk, or does not pay, with notice where reasonable.</li>
          <li>Sections that by their nature should continue (fees owed, data, liability, governing law) survive termination.</li>
        </ul> },
        { id: "warranty", title: "12. Disclaimer", body: <p>The service is provided &ldquo;as is&rdquo;. To the extent the law allows, we disclaim implied warranties, including fitness for a particular purpose. We do not promise any particular number of leads, bookings or sales.</p> },
        { id: "liability", title: "13. Limitation of liability", body: <p>To the extent the law allows, our total liability for any claim relating to the service is limited to the fees you paid us in the 12 months before the claim. We are not liable for indirect or consequential loss, including lost profits or data, except where caused by our gross negligence or wilful misconduct.</p> },
        { id: "indemnity", title: "14. Indemnity", body: <p>You will compensate us for claims by third parties arising from messages or calls you send through {site.name} without a valid basis, from content you upload, or from your breach of these terms or the law.</p> },
        { id: "law", title: "15. Governing law", body: <p>These terms are governed by the laws of India. Courts in {c.jurisdiction} have exclusive jurisdiction.</p> },
        { id: "changes", title: "16. Changes", body: <p>We may update these terms. We will give at least 30 days&apos; notice of material changes by email or in the app. Continuing to use the service after that means you accept the new terms.</p> },
        { id: "contact", title: "17. Contact", body: <CompanyContact /> },
      ]}
    />
  );
}
