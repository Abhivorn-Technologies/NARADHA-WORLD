export type QA = { q: string; a: React.ReactNode };

export default function Faq({ items }: { items: QA[] }) {
  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold">
            {item.q}
            <span className="text-xl leading-none text-muted transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <div className="mt-2 max-w-[70ch] text-[15px] leading-relaxed text-ink-2">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
}
