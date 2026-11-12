import type { Metadata } from "next";
import { CompanyContact, LegalPage } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Refund and Cancellation Policy", description: `How cancellations and refunds work for ${site.name} plans and wallet top-ups.`, alternates: { canonical: "/refunds" } };

export default function RefundsPage() {
  return (
    <LegalPage
      title="Refund and Cancellation Policy"
      intro={<p>This policy covers {site.name} plan subscriptions and wallet top-ups paid through Razorpay.</p>}
      sections={[
        { id: "trial", title: "1. Free trial", body: <p>The free trial is not charged. If you don&apos;t choose a plan, nothing is billed when it ends.</p> },
        { id: "cancel", title: "2. Cancelling a plan", body: <ul>
          <li>You can cancel your subscription at any time from Settings → Plan &amp; billing or by writing to us.</li>
          <li>Cancellation stops the next renewal. You keep access until the end of the period you have paid for.</li>
        </ul> },
        { id: "plan-refunds", title: "3. Refunds on plan fees", body: <ul>
          <li><b>Monthly plans:</b> the current month is not refunded after it starts.</li>
          <li><b>Yearly plans:</b> if you cancel within 14 days of your first yearly payment, we refund it in full. After that, the remaining months are not refunded.</li>
          <li>If the service was unavailable for a long period because of a fault on our side, write to us and we will offer a fair credit or refund.</li>
        </ul> },
        { id: "wallet", title: "4. Wallet top-ups", body: <ul>
          <li>Wallet money is used for WhatsApp templates, AI replies and AI call minutes. Usage already charged is not refundable.</li>
          <li>If you close your account, you can ask for the unused balance to be refunded. Trial and promotional credit is not refundable.</li>
        </ul> },
        { id: "errors", title: "5. Failed or duplicate payments", body: <p>If money was deducted but the payment failed, or you were charged twice, it is refunded in full. Write to us with the payment details if it has not reached you within 7 working days.</p> },
        { id: "how", title: "6. How refunds are paid", body: <p>Approved refunds go back to the original payment method through Razorpay, normally within 5 to 7 working days after approval. Your bank may take longer to show it.</p> },
        { id: "contact", title: "7. Contact", body: <><p>To request a cancellation or refund, write to us with your registered email and payment reference.</p><CompanyContact /></> },
      ]}
    />
  );
}
