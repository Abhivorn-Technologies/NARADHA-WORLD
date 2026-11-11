"use client";

import { CONSENT_EVENT } from "@/lib/consent";

export default function CookieSettingsLink() {
  return (
    <button type="button" className="text-left text-white/85 hover:text-white" onClick={() => window.dispatchEvent(new Event(CONSENT_EVENT))}>
      Cookie notice
    </button>
  );
}
