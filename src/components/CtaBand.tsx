import Link from "next/link";

export default function CtaBand({ title = "See it working on your own leads", text = "Book a 30-minute demo. We'll set up a flow for your business and show the WhatsApp replies and a Telugu AI call live." }: { title?: string; text?: string }) {
  return (
    <section className="bg-mist">
      <div className="container-x flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-3xl font-bold md:text-[34px]">{title}</h2>
          <p className="text-[16.5px] text-ink-2">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">Book a demo</Link>
          <Link href="/pricing" className="btn btn-secondary">See pricing</Link>
        </div>
      </div>
    </section>
  );
}
