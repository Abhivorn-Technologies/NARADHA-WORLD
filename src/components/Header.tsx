"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  // The menu belongs to the page it was opened on, so it closes by itself after navigation.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} home`}>
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-[15px] font-medium ${active ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          {site.appUrl && (
            <a href={`${site.appUrl}/login`} className="rounded-md px-3 py-2 text-[15px] font-medium text-muted hover:text-ink">
              Sign in
            </a>
          )}
          <Link href="/contact" className="btn btn-primary">Book a demo</Link>
        </div>
        <button
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-white md:hidden">
          <div className="container-x flex flex-col py-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-md px-1 py-3 text-base font-medium text-ink">
                {item.label}
              </Link>
            ))}
            {site.appUrl && (
              <a href={`${site.appUrl}/login`} className="rounded-md px-1 py-3 text-base font-medium text-ink">Sign in</a>
            )}
            <Link href="/contact" className="btn btn-primary mt-2">Book a demo</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
