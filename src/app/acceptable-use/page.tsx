import type { Metadata } from "next";
import { CompanyContact, LegalPage } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Acceptable Use Policy", description: `What you may and may not do with ${site.name}.`, alternates: { canonical: "/acceptable-use" } };

export default function AcceptableUsePage() {
  return (
    <LegalPage
      title="Acceptable Use Policy"
      intro={<p>{site.name} contacts real people on your behalf. These rules protect them, you, and the WhatsApp and phone channels everyone relies on.</p>}
      sections={[
        { id: "consent", title: "1. Contact only people who asked", body: <ul>
          <li>Message and call only people who enquired with you or otherwise agreed to be contacted.</li>
          <li>Do not upload bought, scraped or rented contact lists.</li>
          <li>Stop contacting anyone who asks you to, and mark them as Lost or not interested.</li>
        </ul> },
        { id: "whatsapp", title: "2. WhatsApp rules", body: <p>Follow the WhatsApp Business Policy and Commerce Policy, use approved templates, and do not send content WhatsApp prohibits.</p> },
        { id: "calls", title: "3. Phone call rules", body: <ul>
          <li>Follow TRAI telemarketing regulations, including Do Not Disturb preferences and permitted calling hours.</li>
          <li>Keep the opening disclosure that the caller is an AI assistant and the call is recorded.</li>
          <li>Do not use AI calls to pretend to be a specific real person or another organisation.</li>
        </ul> },
        { id: "content", title: "4. Content", body: <p>Do not use {site.name} to send content that is false or misleading, unlawful, threatening, harassing, discriminatory, sexually explicit, or that infringes someone else&apos;s rights. Do not promote prohibited goods or services.</p> },
        { id: "data", title: "5. Sensitive data", body: <p>Do not ask leads for passwords, OTPs, full card numbers or other information you have no business need for. Handle health and financial information only where you are allowed to and with extra care.</p> },
        { id: "platform", title: "6. Platform security", body: <p>Do not try to access other accounts, bypass plan limits, overload the service, probe it for weaknesses without permission, or resell access.</p> },
        { id: "enforcement", title: "7. What happens if these rules are broken", body: <p>We may pause messages or calls, suspend the account, or close it, depending on how serious the problem is. Where possible we will tell you first and give you a chance to fix it.</p> },
        { id: "report", title: "8. Report misuse", body: <><p>If you received messages or calls through {site.name} that you did not agree to, tell us with the number that contacted you.</p><CompanyContact /></> },
      ]}
    />
  );
}
