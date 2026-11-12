type P = { className?: string };
const base = (d: React.ReactNode, className = "h-5 w-5") => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);
export const IconChat = ({ className }: P) => base(<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 20 12z" />, className);
export const IconFlow = ({ className }: P) => base(<><rect x="3" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="16" width="7" height="5" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><path d="M6.5 8v4.5a2 2 0 0 0 2 2h9V16M10 5.5h4" /></>, className);
export const IconSpark = ({ className }: P) => base(<path d="M12 3l1.8 4.8L18.5 9.6l-4.7 1.8L12 16l-1.8-4.6L5.5 9.6l4.7-1.8zM18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />, className);
export const IconPhone = ({ className }: P) => base(<path d="M21 16.5v3a2 2 0 0 1-2.2 2A19.7 19.7 0 0 1 2.5 5.2 2 2 0 0 1 4.5 3h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.4 10.7a16 16 0 0 0 4.9 4.9l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2z" />, className);
export const IconCalendar = ({ className }: P) => base(<><rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M8 2.5v4M16 2.5v4M3 10h18M8.5 15l2 2 4-4" /></>, className);
export const IconChart = ({ className }: P) => base(<path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />, className);
export const IconPlug = ({ className }: P) => base(<path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5" />, className);
export const IconInbox = ({ className }: P) => base(<path d="M3 13h5l1.5 3h5L16 13h5M5 5h14l2 8v6H3v-6z" />, className);
export const IconCheck = ({ className }: P) => base(<path d="M5 12.5l4.5 4.5L19 7.5" />, className);
export const IconArrow = ({ className }: P) => base(<path d="M5 12h14M13 6l6 6-6 6" />, className);
