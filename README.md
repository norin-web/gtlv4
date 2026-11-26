# Getting Out — website

Promo site for the Getting Out iPhone app. React 18 + TypeScript + Vite 6 + React Router 7, styles in `src/styles/index.css`.

## Run

```bash
pnpm install
pnpm dev
```

Open http://localhost:5173/gtlv4/.

## Deploy

Every push to `main` builds and publishes to GitHub Pages through `.github/workflows/deploy.yml`
(Settings → Pages → Source must be **GitHub Actions**). The workflow copies `index.html` to `404.html`
so direct links to inner pages work.

The site is served at `https://norin-web.github.io/gtlv4/`, so `vite.config.ts` has `base: "/gtlv4/"`.
When a custom domain is attached, change `base` to `"/"` **and** add `public/CNAME` with the domain in the
same commit — otherwise every asset 404s and the page is blank.

## Content

- `src/app/content/site.ts` — every fact about the app: name, App Store ID, email, operator, FAQ, steps.
- `src/app/content/legal.ts` — Terms of Use and Privacy Policy, verbatim from the owner. Until they are
  supplied the legal page shows a short notice.
- Images live in `public/images/` and are always referenced through `img()` (`src/app/utils/img.ts`),
  which prefixes the base path.

## Motion

Scroll reveals use CSS transitions driven by `useReveal`. Hidden states are scoped under the `js` class,
and the fallbacks only fire for elements actually in view, so content is never left hidden.
