"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="container-x flex flex-col items-start gap-5 py-24">
      <p className="eyebrow">Something went wrong</p>
      <h1 className="text-4xl font-bold">This page didn&apos;t load</h1>
      <p className="max-w-xl text-[16.5px] text-ink-2">Please try again. If it keeps happening, go back to the home page.</p>
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={reset} className="btn btn-primary">Try again</button>
        <Link href="/" className="btn btn-secondary">Home</Link>
      </div>
    </section>
  );
}
