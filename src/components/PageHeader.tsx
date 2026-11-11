export default function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="border-b border-line bg-mist">
      <div className="container-x space-y-4 py-14 md:py-16">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] md:text-5xl">{title}</h1>
        {text && <p className="max-w-2xl text-[17px] leading-relaxed text-ink-2">{text}</p>}
      </div>
    </section>
  );
}
