import Link from "next/link";
import { legalLinks, nav, site } from "@/lib/site";
import CookieSettingsLink from "./CookieSettingsLink";
import Logo from "./Logo";

export default function Footer() {
  const c = site.company;
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm space-y-4">
          <Logo inverted />
          <p className="text-[13px] font-semibold uppercase tracking-wider text-saffron">A product of {c.legalName}</p>
          <p className="text-[15px] leading-relaxed text-white/70">
            WhatsApp replies, guided flows and Telugu AI calls that answer every lead and book the visit.
          </p>
          {(c.supportEmail || c.phone) && (
            <ul className="space-y-1 text-[15px] text-white/80">
              {c.supportEmail && <li><a className="hover:text-white" href={`mailto:${c.supportEmail}`}>{c.supportEmail}</a></li>}
              {c.phone && <li><a className="hover:text-white" href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a></li>}
            </ul>
          )}
        </div>
        <nav aria-label="Footer">
          <h2 className="mb-3 text-sm font-semibold text-white/60">Company</h2>
          <ul className="space-y-2 text-[15px]">
            <li><Link className="text-white/85 hover:text-white" href="/">Home</Link></li>
            {nav.map((n) => (
              <li key={n.href}><Link className="text-white/85 hover:text-white" href={n.href}>{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Legal">
          <h2 className="mb-3 text-sm font-semibold text-white/60">Legal</h2>
          <ul className="space-y-2 text-[15px]">
            {legalLinks.map((n) => (
              <li key={n.href}><Link className="text-white/85 hover:text-white" href={n.href}>{n.label}</Link></li>
            ))}
            <li><CookieSettingsLink /></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-sm text-white/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {c.legalName}. {site.name} is a product of {c.legalName}, which develops, operates and maintains it.</p>
          {c.gstin && <p>GSTIN {c.gstin}</p>}
        </div>
      </div>
    </footer>
  );
}
