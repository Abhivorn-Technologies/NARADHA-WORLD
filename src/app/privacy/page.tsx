import type { Metadata } from "next";
import Link from "next/link";
import { CompanyContact, Detail, LegalPage } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: `How ${site.name} collects, uses and protects personal data.`, alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  const c = site.company;
  return (
    <LegalPage
      title="Privacy Policy"
      intro={<p>{site.name} is a product of {c.legalName}, which develops, operates and maintains it. This policy explains how {c.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles personal data when you visit this website, request a demo, use {site.name} as a customer, or are a lead of a business that uses {site.name}. It is written to meet the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000 and its rules.</p>}
      sections={[
        { id: "roles", title: "1. Who is responsible for your data", body: <>
          <p><b>Website visitors, demo requests and customer accounts:</b> we decide how this data is used and are the Data Fiduciary.</p>
          <p><b>Leads of our customers</b> (people who enquire with a business that uses {site.name}): that business is the Data Fiduciary. We process the data on its behalf and only on its instructions, as a Data Processor. If you are such a lead and want to use your rights, contact the business you enquired with; we will help them respond.</p>
        </> },
        { id: "collect", title: "2. What we collect", body: <>
          <h3>From website visitors</h3>
          <ul><li>What you type in the demo form: name, business, email, mobile number, city, industry, monthly lead volume and your message.</li><li>Technical data our servers log to keep the site secure: IP address, browser type, pages requested and time.</li><li>One cookie that remembers you have seen the cookie notice (see the <Link href="/cookies">Cookie Policy</Link>).</li></ul>
          <h3>From customers</h3>
          <ul><li>Account details: names, emails, phone numbers and roles of your team members.</li><li>Business details and the documents you upload for the AI (brochures, price lists, FAQs).</li><li>Billing details: plan, invoices, wallet top-ups and usage. Card, UPI and bank details are collected by Razorpay, not by us.</li><li>Connection details for WhatsApp and Facebook (stored encrypted).</li></ul>
          <h3>About leads, on behalf of customers</h3>
          <ul><li>Name, phone number, email and answers from lead forms.</li><li>WhatsApp messages exchanged with the business.</li><li>AI phone call recordings, transcripts and summaries, where the business uses AI calls.</li><li>Bookings, notes, status and the deal value the business records.</li></ul>
        </> },
        { id: "use", title: "3. How we use it", body: <>
          <ul>
            <li>To reply to your demo request and arrange a demo (based on your consent in the form).</li>
            <li>To provide {site.name} to customers: send WhatsApp messages, run flows, generate AI replies, place AI calls, book appointments, show reports (to perform our contract with the customer).</li>
            <li>To bill customers and keep records required by tax law.</li>
            <li>To keep the service secure, prevent misuse and fix errors.</li>
            <li>To tell customers about changes to the service. We do not send marketing to leads of our customers.</li>
          </ul>
          <p>We do not sell personal data, and we do not use leads&apos; data for our own marketing.</p>
        </> },
        { id: "ai", title: "4. AI processing", body: <>
          <p>To write replies and call summaries, the relevant part of a conversation, the business&apos;s documents and call transcripts are sent to AI service providers. We use these providers through their business APIs, under terms that do not allow them to use the data to train their models. We do not use customer or lead data to train AI models.</p>
          <p>AI phone calls state at the start that the caller is an AI assistant and that the call is recorded.</p>
        </> },
        { id: "sharing", title: "5. Who we share data with", body: <>
          <p>We share data only with service providers that help us run {site.name}, under contracts that require them to protect it:</p>
          <table><thead><tr><th>Provider type</th><th>Purpose</th></tr></thead><tbody>
            <tr><td>Meta Platforms (WhatsApp Business Platform, Facebook Lead Ads)</td><td>Sending and receiving WhatsApp messages; receiving leads</td></tr>
            <tr><td>AI model providers (Google Gemini, Anthropic Claude) and an embeddings provider</td><td>Generating replies, summaries and document search</td></tr>
            <tr><td>Voice AI and telephony providers</td><td>Placing AI phone calls and recording them</td></tr>
            <tr><td>Razorpay</td><td>Payments and subscriptions</td></tr>
            <tr><td>Cloud hosting, backup storage and error monitoring</td><td>Running the service and keeping it reliable</td></tr>
            <tr><td>Google Calendar (only if a customer connects it)</td><td>Showing bookings in the customer&apos;s calendar</td></tr>
            <tr><td>Email delivery provider</td><td>Account emails such as password resets</td></tr>
          </tbody></table>
          <p>We may also disclose data when required by law or a lawful order of a government authority.</p>
        </> },
        { id: "transfers", title: "6. Where data is processed", body: <p>Our servers are located in <Detail value={null} label="Hosting region (e.g. India)" />. Some providers above process data outside India. We transfer data only to countries not restricted by the Government of India under the DPDP Act, and with safeguards in our contracts.</p> },
        { id: "retention", title: "7. How long we keep it", body: <ul>
          <li>Demo requests: up to 24 months after our last contact, unless you become a customer.</li>
          <li>Customer account and lead data: for as long as the customer&apos;s account is active. After the account is closed, we delete it within 90 days, except where the law requires us to keep it.</li>
          <li>Invoices and payment records: for the period required by Indian tax law.</li>
          <li>Backups: overwritten on a rolling basis, normally within 30 days.</li>
          <li>Server logs: up to 90 days.</li>
        </ul> },
        { id: "security", title: "8. How we protect it", body: <ul>
          <li>All traffic uses HTTPS. WhatsApp and Facebook access tokens are encrypted in our database.</li>
          <li>Each business&apos;s data is kept separate, and team members see only their own business&apos;s data.</li>
          <li>Access is limited by role, and passwords are stored only as secure hashes.</li>
          <li>Regular backups, and incident handling that includes informing the Data Protection Board and affected people where the law requires.</li>
        </ul> },
        { id: "rights", title: "9. Your rights", body: <>
          <p>Under the DPDP Act you can ask us to access, correct, update or erase your personal data, withdraw consent you gave, and nominate someone to use these rights for you. Withdrawing consent does not affect processing already done.</p>
          <p>To use your rights, write to our Grievance Officer below. We will respond within the time required by law. If you are not satisfied with our response, you may complain to the Data Protection Board of India.</p>
        </> },
        { id: "children", title: "10. Children", body: <p>{site.name} is a business service and is not meant for anyone under 18. We do not knowingly collect children&apos;s data through this website.</p> },
        { id: "changes", title: "11. Changes to this policy", body: <p>We will post any change on this page with a new date. If a change affects customers materially, we will tell them by email or in the app before it takes effect.</p> },
        { id: "contact", title: "12. Contact and Grievance Officer", body: <>
          <CompanyContact />
          <p><b>Grievance Officer:</b> <Detail value={c.grievanceOfficer.name} label="Name" />, <Detail value={c.grievanceOfficer.email} label="Email" /></p>
        </> },
      ]}
    />
  );
}
