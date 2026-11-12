type Props = { className?: string; withWordmark?: boolean; inverted?: boolean };

/** Naradha World mark: the world (ring), a voice wave through it and a message dot on its edge. */
export function LogoMark({ className = "h-8 w-8", inverted = false }: { className?: string; inverted?: boolean }) {
  const ring = inverted ? "#ffffff" : "#13202f";
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="24" fill="none" stroke={ring} strokeWidth="5" />
      <path d="M15 33c4.5 0 5.5-11 10-11s5.5 20 10 20 5.5-15 10-15 3.5 6 5 6" fill="none" stroke="#d97706" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49.5" cy="14.5" r="7" fill="#d97706" stroke={inverted ? "#13202f" : "#ffffff"} strokeWidth="3.5" />
    </svg>
  );
}

export default function Logo({ className = "", withWordmark = true, inverted = false }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark inverted={inverted} />
      {withWordmark && (
        <span className={`font-display text-[17px] font-bold tracking-[0.06em] ${inverted ? "text-white" : "text-ink"}`}>
          NARADHA<span className="text-saffron"> WORLD</span>
        </span>
      )}
    </span>
  );
}
