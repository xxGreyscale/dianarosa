# Dianarose Logistics — Website

Production website for Dianarose Logistics — a cargo and freight company operating across East, Central, and Southern Africa.

Built with React 18, Vite 5, TypeScript, Tailwind CSS, and React Router v6. Deployed to Vercel via GitHub Actions.

---

## Table of contents

1. [Quick start](#quick-start)
2. [Project structure](#project-structure)
3. [Available scripts](#available-scripts)
4. [Tech stack](#tech-stack)
5. [Pages](#pages)
6. [Design tokens](#design-tokens)
7. [Asset workflow](#asset-workflow)
8. [Forms](#forms)
9. [Testing](#testing)
10. [Deployment](#deployment)
11. [Contributing](#contributing)

---

## Quick start

Requires **Node.js 20+** and **npm 10+**.

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Build for production (output: dist/)
npm run build

# Preview the production build locally (http://localhost:4173)
npm run preview
```

---

## Project structure

```
dianarose-logistics/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions CI/CD
├── public/
│   └── favicon.svg            # Site favicon
├── src/
│   ├── assets/                # Static media — see "Asset workflow"
│   │   ├── images/            # Photography (hero, truck, driver, team, etc.)
│   │   ├── icons/             # Service icons (gold SVG, 48×48)
│   │   ├── illustrations/     # Africa map, quote doc, shield + handshake
│   │   ├── logo/              # Logo variants (color, white, favicon)
│   │   └── clients/           # Client logos (carousel)
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, PageHero, CallBanner, Layout
│   │   └── ui/                # Button, FormField, Logo, ServiceCard
│   ├── hooks/
│   │   └── useScrollToTop.tsx # Scrolls to top on every route change
│   ├── lib/
│   │   ├── assets.ts          # Central image / illustration registry
│   │   ├── constants.ts       # Site-wide content (nav, offices, services)
│   │   └── schemas.ts         # Zod schemas for Contact + Quote forms
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   ├── GetQuote.tsx
│   │   ├── DataProtection.tsx
│   │   ├── CookiePolicy.tsx
│   │   └── NotFound.tsx
│   ├── styles/
│   │   └── index.css          # Tailwind base + custom utilities
│   ├── test/
│   │   └── setup.ts           # Vitest setup (jest-dom matchers)
│   ├── App.tsx                # Router definition
│   └── main.tsx               # React DOM entry point
├── .env.example               # Environment variable template
├── .prettierrc                # Prettier config
├── eslint.config.js           # ESLint flat config
├── tailwind.config.js         # Tailwind theme + brand tokens
├── tsconfig.json              # TypeScript config
├── vercel.json                # Vercel deployment config (SPA rewrites)
└── vite.config.ts             # Vite + Vitest config
```

---

## Available scripts

| Command                | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start the Vite dev server with HMR           |
| `npm run build`        | Type-check (`tsc -b`) + build for production |
| `npm run preview`      | Preview the production build locally         |
| `npm run lint`         | Run ESLint                                   |
| `npm run lint:fix`     | Run ESLint and auto-fix where possible       |
| `npm run format`       | Run Prettier across `src/`                   |
| `npm run format:check` | Check formatting without writing             |
| `npm run typecheck`    | Run `tsc --noEmit` (no build)                |
| `npm run test`         | Run Vitest in watch mode                     |
| `npm run test:run`     | Run Vitest once (used in CI)                 |

---

## Tech stack

| Package                 | Version | Purpose                     |
| ----------------------- | ------- | --------------------------- |
| `react`                 | 18.x    | UI framework                |
| `react-dom`             | 18.x    | DOM renderer                |
| `react-router-dom`      | 6.x     | Client-side routing         |
| `vite`                  | 5.x     | Build tool + dev server     |
| `typescript`            | 5.x     | Static typing               |
| `tailwindcss`           | 3.x     | Utility-first CSS           |
| `react-hook-form`       | 7.x     | Form state management       |
| `zod`                   | 3.x     | Schema validation for forms |
| `@hookform/resolvers`   | 3.x     | RHF + Zod adapter           |
| `lucide-react`          | latest  | Icon library                |
| `eslint` + `prettier`   | latest  | Code quality + formatting   |
| `husky` + `lint-staged` | latest  | Pre-commit hooks            |
| `vitest`                | latest  | Unit testing                |

---

## Pages

| Route              | File                       | Purpose                                                  |
| ------------------ | -------------------------- | -------------------------------------------------------- |
| `/`                | `pages/Home.tsx`           | Landing — hero, services grid, about split, stats, CTA   |
| `/about`           | `pages/About.tsx`          | Company intro, Mission/Vision/Values, destinations map   |
| `/services`        | `pages/Services.tsx`       | Cargo transportation feature + 3 secondary service cards |
| `/contact`         | `pages/Contact.tsx`        | Office addresses + "Write to us" form                    |
| `/quote`           | `pages/GetQuote.tsx`       | Request a quotation form                                 |
| `/data-protection` | `pages/DataProtection.tsx` | Static privacy / GDPR policy page                        |
| `/cookie-policy`   | `pages/CookiePolicy.tsx`   | Static cookie policy page                                |
| `*`                | `pages/NotFound.tsx`       | 404 fallback                                             |

All routes share the same `Layout` (Navbar + Outlet + Footer). Scroll position resets to top on every route change.

---

## Design tokens

All brand tokens live in [`tailwind.config.js`](./tailwind.config.js). Never hardcode hex values in components — extend the theme instead.

| Token              | Hex       | Used for                                 |
| ------------------ | --------- | ---------------------------------------- |
| `brand-gold`       | `#B8860B` | Page headings, service icons, accents    |
| `brand-gold-light` | `#C89A1A` | Hover states for gold elements           |
| `brand-black`      | `#111111` | Navbar, footer, primary CTAs             |
| `gold-cta`         | `#C89A1A` | "Need a quick answer?" banner background |
| `neutral-dark`     | `#444444` | Body text, headings on white             |
| `neutral-mid`      | `#666666` | Secondary text, captions                 |
| `neutral-light`    | `#D1D5DB` | Form borders, dividers, card borders     |
| `surface-gray`     | `#F7F7F7` | Card surfaces, services grid background  |

**Typography** — Inter is loaded from Google Fonts in `src/styles/index.css`. Weight ladder: 700 for hero / page headings, 600 for sub-headings, 500 for navbar / labels, 400 for body.

**Spacing** — Container max-width is `1200px` (`max-w-container`). Section vertical padding is `80px` desktop / `48px` mobile. Form input height is `48px` (`h-12`). Navbar height is `72px` (`h-navbar`).

---

## Asset workflow

All imagery is currently rendered using **placeholder SVGs** baked into the project so the site runs fully offline. To swap in real photography:

1. Drop the new file into `src/assets/images/` (or `illustrations/`, `logo/`, etc.)
2. Update the import in [`src/lib/assets.ts`](./src/lib/assets.ts) to point at the new file
3. Done — every page picks up the new asset automatically

Refer to `dianarose-master-plan.docx` (the project plan) for the full asset catalogue:

- 8 photographs (hero port, truck, driver, team, workers, 3 person cut-outs)
- 3 logo variants (color, white, favicon)
- 7 service / value icons (gold SVG, 48×48)
- 3 illustrations (Africa map, quote document, shield + handshake)
- 4 client logos (Impala, Freight Forwarders Tanzania, Katanga, Congo Free)

**Image guidelines** — All `<img>` tags must have explicit `width` and `height` attributes to prevent layout shift (CLS). Photographs should be exported as WebP at quality 80 (hero under 200 KB, others under 80 KB). Person cut-outs (`man-phone`, `woman-headset`, `man-thinking`) must always be saved with transparent backgrounds — the section background colour bleeds behind them per the design.

---

## Forms

Both forms use **React Hook Form** + **Zod** for schema-based validation. Schemas are defined in [`src/lib/schemas.ts`](./src/lib/schemas.ts) — never inline validation logic in components.

### Contact form (`/contact`)

| Field     | Validation                         |
| --------- | ---------------------------------- |
| Email     | Required, must be a valid email    |
| Service   | Required, must select an option    |
| Message   | Required, minimum 10 characters    |
| Not robot | Required, must be checked (= true) |

### Quote form (`/quote`)

| Field         | Validation                         |
| ------------- | ---------------------------------- |
| Email         | Required, must be a valid email    |
| Service type  | Required, must select an option    |
| Cargo type    | Required, must select an option    |
| Cargo details | Required, minimum 10 characters    |
| Not robot     | Required, must be checked (= true) |

Both forms currently log submissions to the console as a placeholder. To wire them up to a real backend, set `VITE_FORM_ENDPOINT` in `.env` and update the `onSubmit` handler in each page.

The "I'm not a robot" checkbox is also a placeholder — to integrate Google reCAPTCHA v2, set `VITE_RECAPTCHA_SITE_KEY` in `.env` and replace the checkbox with the official `<ReCAPTCHA>` component.

---

## Testing

```bash
# Watch mode (re-runs on file change)
npm run test

# Single run (used in CI)
npm run test:run
```

Tests live alongside the code they cover (e.g. `Button.test.tsx` next to `Button.tsx`). Setup happens in `src/test/setup.ts`, which loads `@testing-library/jest-dom` matchers.

Current coverage:

- **`src/components/ui/Button.test.tsx`** — renders children, polymorphism between `<button>` and `<Link>`, variant class application, type forwarding
- **`src/App.test.tsx`** — route-level smoke tests for `/` and `/about` plus navbar presence

---

## Deployment

The site is deployed to **Vercel** via **GitHub Actions** ([`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)).

### Pipeline stages

| Stage          | Trigger                | What it does                                   |
| -------------- | ---------------------- | ---------------------------------------------- |
| **Verify**     | Every push + every PR  | Lint, typecheck, test, build                   |
| **Preview**    | PR opened or updated   | Vercel preview deploy + comments URL on the PR |
| **Production** | Push / merge to `main` | Vercel production deploy to the custom domain  |

Concurrency control cancels in-flight runs when a new commit lands on the same branch.

### One-time setup

1. Create a Vercel project and link this repository.
2. Generate a Vercel access token: **Vercel dashboard → Account Settings → Tokens → Create**
3. Add three secrets to the GitHub repository (**Settings → Secrets and variables → Actions**):
   - `VERCEL_TOKEN` — the token from step 2
   - `VERCEL_ORG_ID` — found in Vercel → Team Settings → General
   - `VERCEL_PROJECT_ID` — found in the Vercel project's Settings → General
4. Configure the custom domain in Vercel → Project → Settings → Domains.

That's it — every PR will now get a unique preview URL, and every merge to `main` will deploy to production.

### SPA routing

[`vercel.json`](./vercel.json) configures a catch-all rewrite so direct navigation to routes like `/about` or `/contact` doesn't 404. It also sets a 1-year `Cache-Control: immutable` header on hashed assets in `/assets/` and adds basic security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`).

---

## Contributing

### Pre-commit hooks

Husky + lint-staged run automatically on `git commit`:

- ESLint with `--fix` on staged `.ts`/`.tsx` files
- Prettier on staged `.ts`/`.tsx`/`.css`/`.md`/`.json` files

If a hook fails, fix the reported issues and re-stage before retrying the commit.

### Code style rules

- **No hardcoded hex values outside `tailwind.config.js`.** All colours come from the brand token theme.
- **Use `<Link>` from `react-router-dom` for internal navigation.** Never use `<a href>` for in-app routes.
- **All `<img>` tags need `alt` text and explicit `width` / `height`.**
- **All form fields need an associated `<label>` or `aria-label`.**
- **Form validation goes in `src/lib/schemas.ts`** as a Zod schema — never inline.
- **No `console.log` in production code.** Remove before merging.
- **The Africa map SVG is inlined in `pages/About.tsx`** so its colours can be controlled via CSS — don't externalise it to an `<img>` tag.

### Commit conventions

The project doesn't enforce a specific format, but conventional-commit-style prefixes (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`) are encouraged.

---

## Reference

The full project plan — including the design system, Figma export instructions, asset catalogue, build phases, and pre-launch checklist — lives in `dianarose-master-plan.docx` at the repository root.

---

**Confidential — Dianarose Logistics Limited**
