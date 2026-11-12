import { NextResponse } from "next/server";
import { contactSchema, fieldErrors } from "@/lib/contact";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>(); // per server instance; enough to stop casual abuse

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ message: "Too many requests. Please try again in a few minutes." }, { status: 429 });
  }
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Please correct the highlighted fields.", errors: fieldErrors(parsed.error) }, { status: 422 });
  }
  const d = parsed.data;
  if (d.website) return NextResponse.json({ ok: true }); // bot filled the hidden field: pretend success

  const target = process.env.LEAD_CAPTURE_URL;
  if (!target) {
    console.error("LEAD_CAPTURE_URL is not set; demo request not delivered");
    return NextResponse.json({ message: "The form isn't connected yet. Please try again later." }, { status: 503 });
  }
  try {
    const res = await fetch(target, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: d.name, phone: d.phone, email: d.email, interest: "Naradha World demo",
        business: d.business, city: d.city, industry: d.industry, monthly_leads: d.leads,
        plan_interest: d.plan, message: d.message, source_page: "naradha-world/contact",
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`capture link responded ${res.status}`);
  } catch (err) {
    console.error("Demo request delivery failed:", err);
    return NextResponse.json({ message: "We couldn't send your request just now. Please try again in a minute." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
