import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope, Noto_Sans_Telugu } from "next/font/google";
import CookieNotice from "@/components/CookieNotice";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap", weight: ["600", "700"] });
const body = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const telugu = Noto_Sans_Telugu({ subsets: ["telugu"], variable: "--font-telugu", display: "swap", weight: ["400", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | WhatsApp and Telugu AI calls for every lead`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: { type: "website", siteName: site.name, locale: "en_IN", url: "/", title: site.name, description: site.description },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#13202f", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${telugu.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
