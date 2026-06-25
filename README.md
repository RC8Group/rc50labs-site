# RC50labs Site

Initial Cloudflare Pages and GitHub-ready marketing/ecommerce frontend for RC50labs.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- Static typed product data

## Local Setup

```bash
npm install
npm run dev
```

The local dev server defaults to `http://localhost:5173`.

## Build

```bash
npm run build
```

The production build is emitted to `dist/`.

## Cloudflare Pages

Recommended Cloudflare Pages settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22`

No environment variables are required for the current static scaffold.

## Routes

- `/`
- `/shop`
- `/category/peptides`
- `/category/aminos`
- `/category/sprays`
- `/category/liquids`
- `/product/:slug`
- `/wholesale`
- `/affiliate`
- `/contact`
- `/privacy`
- `/terms`
- `/research-use-disclaimer`
- `/shipping-returns`

## Compliance Notes

- The site launches behind an age and research-use disclaimer gate.
- Visitors must confirm they are 21 years of age or older before viewing the site.
- Acceptance is stored locally in the browser.
- Selecting `No` blocks site access for the current browsing session.
- Product listings are placeholders only.
- Copy avoids dosing, administration, human-use guidance, treatment claims, cure claims, disease claims, body-composition claims, and FDA-approval implications.
- Checkout and payment integrations are intentionally not connected.

Footer compliance language:

> Products are intended for laboratory research use only. Not for human consumption. Statements on this site have not been evaluated by the U.S. Food and Drug Administration. Products are not intended to diagnose, treat, cure, or prevent any disease.

## Future Integrations

The product data in `src/data/products.ts` can later be mapped to Shopify, Stripe, Medusa, WooCommerce, or another commerce backend. Product detail pages already reserve space for documentation and COA links.
