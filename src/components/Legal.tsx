import { site } from "@/lib/site";

export function Todo({ children }: { children: React.ReactNode }) {
  return <span className="todo">[{children}]</span>;
}

/** Shows a business detail from site.ts, or a highlighted note when it hasn't been filled in yet. */
export function Detail({ value, label }: { value: string | null | undefined; label: string }) {
  return value ? <>{value}</> : <Todo>{label} to be added</Todo>;
}

export function LegalPage({ title, intro, sections }: { title: string; intro: React.ReactNode; sections: { id: string; title: string; body: React.ReactNode }[] }) {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="container-x space-y-3 py-12">
          <p className="eyebrow">Legal</p>
          <h1 className="text-4xl font-bold md:text-[44px]">{title}</h1>
          <p className="text-[14.5px] text-muted">Last updated: {site.legalUpdated}</p>
        </div>
      </section>
      <div className="container-x grid gap-10 py-12 lg:grid-cols-[230px_1fr]">
        <nav aria-label="Sections" className="hidden lg:block">
          <ol className="sticky top-24 space-y-1.5 text-[14px]">
            {sections.map((s) => <li key={s.id}><a href={`#${s.id}`} className="text-muted hover:text-ink">{s.title}</a></li>)}
          </ol>
        </nav>
        <article className="prose-legal">
          <div>{intro}</div>
          {sections.map((s) => (
            <section key={s.id} aria-labelledby={s.id}>
              <h2 id={s.id}>{s.title}</h2>
              {s.body}
            </section>
          ))}
        </article>
      </div>
    </>
  );
}

export function CompanyContact() {
  const c = site.company;
  return (
    <ul>
      <li>{c.legalName}</li>
      <li>Registered address: <Detail value={c.registeredAddress} label="Registered address" /></li>
      <li>Email: <Detail value={c.supportEmail} label="Support email" /></li>
      {c.phone && <li>Phone: {c.phone}</li>}
    </ul>
  );
}
