import type { Metadata } from "next";
import { CompanyContact, LegalPage } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Service Delivery Policy", description: `How ${site.name} is delivered after sign-up or payment.`, alternates: { canonical: "/service-delivery" } };

export default function ServiceDeliveryPage() {
  return (
    <LegalPage
      title="Service Delivery Policy"
      intro={<p>{site.name} is an online software service. Nothing is shipped physically.</p>}
      sections={[
        { id: "access", title: "1. Access", body: <ul>
          <li>Your account is available immediately after sign-up.</li>
          <li>Plan changes and wallet top-ups apply as soon as Razorpay confirms the payment, normally within a few minutes.</li>
          <li>Invoices are available in your account after each payment.</li>
        </ul> },
        { id: "setup", title: "2. Setup that depends on Meta and other providers", body: <p>To send WhatsApp messages you need a verified Meta Business account, a WhatsApp number registered on the WhatsApp Business Platform and approved message templates. Meta decides these approvals and their timing. AI phone calls also need a voice and telephony account. We guide you through each step.</p> },
        { id: "onboarding", title: "3. Onboarding", body: <p>Where your plan includes onboarding, we agree a schedule with you after payment and set up your flows, documents and settings together.</p> },
        { id: "contact", title: "4. Contact", body: <CompanyContact /> },
      ]}
    />
  );
}
