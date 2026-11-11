export const CONSENT_COOKIE = "nw_cookie_notice";
export const CONSENT_EVENT = "nw:open-cookie-notice";

export function hasSeenNotice(): boolean {
  if (typeof document === "undefined") return true;
  return document.cookie.split("; ").some((c) => c.startsWith(`${CONSENT_COOKIE}=`));
}

export function rememberNotice() {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=1; Max-Age=${60 * 60 * 24 * 180}; Path=/; SameSite=Lax${secure}`;
}
