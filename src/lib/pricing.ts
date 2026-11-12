/** Plans and usage prices. Keep in sync with the app (Agent CRM billing plans). All amounts in ₹. */
export type Plan = {
  code: "starter" | "growth" | "enterprise";
  name: string;
  forWho: string;
  monthly: number | null;
  yearlyPerMonth: number | null;
  limits: string[];
  features: string[];
};

export const plans: Plan[] = [
  {
    code: "starter",
    name: "Starter",
    forWho: "For businesses getting up to 500 leads a month",
    monthly: 5999,
    yearlyPerMonth: 4799,
    limits: ["Up to 500 leads a month", "3 team members", "1 WhatsApp number"],
    features: [
      "WhatsApp replies to every new lead",
      "Drag-and-drop WhatsApp flows",
      "AI agent that answers from your documents",
      "Bookings with WhatsApp reminders",
      "Lead dashboard, reports and CSV export",
    ],
  },
  {
    code: "growth",
    name: "Growth",
    forWho: "For teams with 500 to 3,000 leads a month",
    monthly: 14999,
    yearlyPerMonth: 11999,
    limits: ["Up to 3,000 leads a month", "10 team members", "2 WhatsApp numbers"],
    features: [
      "Everything in Starter",
      "Telugu AI phone calls",
      "Automatic call retries and missed-call follow-up",
      "Call recordings, transcripts and English summaries",
      "API, webhooks and lead capture links",
    ],
  },
  {
    code: "enterprise",
    name: "Enterprise",
    forWho: "For builders, multi-branch businesses and agencies",
    monthly: null,
    yearlyPerMonth: null,
    limits: ["Leads, team members and numbers as agreed"],
    features: ["Everything in Growth", "Setup and onboarding for your team", "Custom integrations", "Agreed support terms"],
  },
];

export const usagePrices = [
  { item: "WhatsApp marketing template message", price: "₹1.10 each" },
  { item: "WhatsApp utility template message (confirmations, reminders)", price: "₹0.20 each" },
  { item: "AI reply on WhatsApp", price: "₹0.50 each" },
  { item: "AI phone call", price: "₹10 per started minute" },
  { item: "Your replies and flow messages within 24 hours of the lead's message", price: "Free" },
];

export const trial = { days: 14, credit: 200, plan: "Growth" };

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
