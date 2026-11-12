import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="container-x flex flex-col items-start gap-5 py-24">
      <p className="eyebrow">Page not found</p>
      <h1 className="text-4xl font-bold">This page doesn&apos;t exist</h1>
      <p className="max-w-xl text-[16.5px] text-ink-2">The link may be old or mistyped. These pages might help:</p>
      <div className="flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">Home</Link>
        <Link href="/product" className="btn btn-secondary">Product</Link>
        <Link href="/pricing" className="btn btn-secondary">Pricing</Link>
        <Link href="/contact" className="btn btn-secondary">Book a demo</Link>
      </div>
    </section>
  );
}
