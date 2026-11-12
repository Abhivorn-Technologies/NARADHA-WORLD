/** Illustration of a real Naradha World WhatsApp conversation (labelled as an example on the page). */
export default function Conversation() {
  return (
    <figure className="w-full max-w-[420px] overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_50px_-30px_rgba(19,32,47,.45)]">
      <div className="flex items-center gap-3 border-b border-line bg-peacock px-4 py-3 text-white">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-sm font-semibold" aria-hidden="true">SH</span>
        <div className="leading-tight">
          <div className="text-[14.5px] font-semibold">Sample Homes</div>
          <div className="text-[12px] text-white/75">WhatsApp Business</div>
        </div>
      </div>
      <div className="space-y-2.5 bg-[#efeae2] p-4 text-[14px] leading-snug">
        <Bubble side="in" label="Template">
          Hello Ravi! Thanks for your enquiry about 3BHK Villa, Kokapet. What are you looking for?
          <Buttons items={["Flat", "Villa", "Open plot"]} />
        </Bubble>
        <Bubble side="out">Villa</Bubble>
        <Bubble side="out">3BHK price entha?</Bubble>
        <Bubble side="in" label="AI agent">
          Kokapet lo 3BHK villas <b>₹1.45 Cr</b> nunchi start avuthayi. Meeru eppudu konalani plan chesthunnaru?
        </Bubble>
        <Bubble side="out" telugu>నెక్స్ట్ 2 నెలల్లో. Site visit చూడొచ్చా?</Bubble>
        <Bubble side="in" label="Booking">
          Pick a time for your site visit:
          <Buttons items={["Sat 11:00 AM", "Sat 4:00 PM"]} />
        </Bubble>
      </div>
      <figcaption className="border-t border-line px-4 py-2.5 text-[12.5px] text-muted">Example conversation. Names and prices are illustrative.</figcaption>
    </figure>
  );
}

function Bubble({ side, label, telugu, children }: { side: "in" | "out"; label?: string; telugu?: boolean; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === "out" ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[85%] rounded-lg px-3 py-2 shadow-sm ${side === "out" ? "bg-[#d9fdd3]" : "bg-white"} ${telugu ? "font-telugu" : ""}`}>
        {label && <div className="mb-0.5 text-[11px] font-semibold text-peacock">{label}</div>}
        {children}
      </div>
    </div>
  );
}

function Buttons({ items }: { items: string[] }) {
  return (
    <div className="mt-2 grid gap-1">
      {items.map((i) => (
        <span key={i} className="rounded border border-line py-1 text-center text-[13px] font-medium text-[#0b72c4]">{i}</span>
      ))}
    </div>
  );
}
