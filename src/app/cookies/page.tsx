import type { Metadata } from "next";
import { LegalPage } from "@/components/Legal";
import { CONSENT_COOKIE } from "@/lib/consent";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Cookie Policy", description: `Which cookies ${site.name} uses and why.`, alternates: { canonical: "/cookies" } };

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro={<p>Cookies are small files a website stores in your browser. This page lists the cookies this website uses.</p>}
      sections={[
        { id: "use", title: "1. Cookies on this website", body: <>
          <p>This website uses only one cookie, which it needs to work. We do not use analytics, advertising or social media tracking cookies.</p>
          <table><thead><tr><th>Name</th><th>Purpose</th><th>Type</th><th>Expires</th></tr></thead><tbody>
            <tr><td><code>{CONSENT_COOKIE}</code></td><td>Remembers that you have seen the cookie notice, so it isn&apos;t shown on every page</td><td>Necessary, first-party</td><td>180 days</td></tr>
          </tbody></table>
        </> },
        { id: "app", title: "2. The Naradha World app", body: <p>The app your team signs in to (separate from this website) keeps your sign-in session in your browser&apos;s local storage so you stay signed in. It does not use tracking cookies. Payments open Razorpay&apos;s checkout, which may set its own cookies to process the payment securely.</p> },
        { id: "changes", title: "3. If this changes", body: <p>If we add analytics or any other non-essential cookie, we will update this page and ask for your consent before setting it.</p> },
        { id: "control", title: "4. Controlling cookies", body: <p>You can delete or block cookies in your browser settings. Blocking the cookie above only means the notice will appear again. You can reopen the notice at any time from &ldquo;Cookie notice&rdquo; in the footer.</p> },
      ]}
    />
  );
}
