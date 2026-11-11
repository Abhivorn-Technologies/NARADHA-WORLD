# Naradha World website

Marketing website for Naradha World (WhatsApp, AI agent and Telugu AI calls for every lead).
Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · zod.

## Develop

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Configuration

| Variable | Where | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | public | Canonical URLs, sitemap, social previews. Set to the production domain (https). |
| `NEXT_PUBLIC_APP_URL` | public, optional | App address; shows "Sign in" and "Start free trial" links. |
| `LEAD_CAPTURE_URL` | server only | Agent CRM lead capture link. Demo requests are posted here and become leads. |

Business details (legal name, address, GSTIN, emails, Grievance Officer) live in `src/lib/site.ts`.
Plans and usage prices live in `src/lib/pricing.ts` and must match the app's billing plans.

## Pages

Home, Product, Pricing, About, Contact (demo form), Privacy Policy, Terms of Service, Cookie Policy,
Refund & Cancellation, Service Delivery, Acceptable Use, 404. Plus `sitemap.xml`, `robots.txt`, web manifest,
favicon, Apple touch icon and a generated Open Graph image.

## Brand

- Mark: `public/brand/naradha-world-mark.svg` (dark-on-light) and `naradha-world-mark-white.svg` (for dark backgrounds).
- Full logo images: `public/brand/naradha-world-logo.png` and `naradha-world-logo-white.png`.
- Colours: ink `#13202f`, saffron `#d97706`, peacock `#0e6470`. Fonts: Bricolage Grotesque (headings), Manrope (text).

## Launch checklist

1. Fill every `null` in `src/lib/site.ts` (the legal pages show highlighted "to be added" notes until then) and confirm
   the legal name, city and the refund terms.
2. Have the legal pages reviewed by a lawyer.
3. Set `NEXT_PUBLIC_SITE_URL`, `LEAD_CAPTURE_URL` (and `NEXT_PUBLIC_APP_URL` when the app is live).
4. Deploy (Vercel or `npm run build && npm start` behind HTTPS), point the domain, and check `/sitemap.xml`.
5. Submit the domain to Google Search Console.
