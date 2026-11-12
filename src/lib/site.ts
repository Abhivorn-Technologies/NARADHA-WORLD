/**
 * Business details used across the site and the legal pages.
 * Fields set to null are shown as "to be added" notes on the legal pages and hidden elsewhere.
 * Fill them in before launch (see README → Launch checklist).
 */
export const site = {
  name: "Naradha World",
  tagline: "Answer every lead within a minute, in Telugu and English",
  description:
    "Naradha World replies to new leads on WhatsApp, calls them with a Telugu AI voice agent, books site visits and demos, and shows which ads bring revenue.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  appUrl: (process.env.NEXT_PUBLIC_APP_URL || "").replace(/\/$/, ""),

  company: {
    legalName: "Abhivorn Technologies" as string, // owner of Naradha World; add "Private Limited" etc. if registered that way
    registeredAddress: null as string | null,
    city: "Hyderabad, Telangana, India" as string | null, // confirm
    gstin: null as string | null,
    supportEmail: null as string | null,
    salesEmail: null as string | null,
    phone: null as string | null,
    grievanceOfficer: { name: null as string | null, email: null as string | null },
    jurisdiction: "Hyderabad, Telangana",
  },

  legalUpdated: "11 November 2026",
} as const;

export const nav = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/refunds", label: "Refund & Cancellation" },
  { href: "/service-delivery", label: "Service Delivery" },
  { href: "/acceptable-use", label: "Acceptable Use" },
];
