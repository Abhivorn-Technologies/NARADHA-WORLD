"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { CONSENT_EVENT, hasSeenNotice, rememberNotice } from "@/lib/consent";

/**
 * This site uses no analytics or advertising cookies. The notice explains that once and remembers it with a
 * single necessary cookie. If analytics are ever added, they must ask for consent here first (see Cookie Policy).
 */
let reopened = false;
const CHANGE = "nw:cookie-notice-change";

function subscribe(onChange: () => void) {
  const reopen = () => {
    reopened = true;
    onChange();
  };
  window.addEventListener(CONSENT_EVENT, reopen);
  window.addEventListener(CHANGE, onChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, reopen);
    window.removeEventListener(CHANGE, onChange);
  };
}

export default function CookieNotice() {
  const open = useSyncExternalStore(subscribe, () => reopened || !hasSeenNotice(), () => false);
  if (!open) return null;
  return (
    <div role="region" aria-label="Cookie notice" className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-xl border border-line bg-white p-4 shadow-lg sm:flex-row sm:items-center">
        <p className="flex-1 text-[14.5px] leading-relaxed text-ink-2">
          We only use cookies the site needs to work. We don&apos;t use analytics or advertising cookies.{" "}
          <Link href="/cookies" className="font-semibold text-saffron-ink underline underline-offset-2">Cookie Policy</Link>
        </p>
        <button
          type="button"
          className="btn btn-primary shrink-0"
          onClick={() => {
            rememberNotice();
            reopened = false;
            window.dispatchEvent(new Event(CHANGE));
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}
