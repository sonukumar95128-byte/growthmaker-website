# Growth Maker — Marketing Website + Admin Panel

A full multi-page marketing website for **Growth Maker**, a performance marketing & funnel automation agency, built with Next.js (App Router) and a real, working admin panel for editing site content and viewing leads — no external database required.

## Features

- **8 public/admin routes**: Home, About, Client Results, Services, Blog (list + post detail), Contact, Admin Login, Admin Dashboard — plus Privacy Policy, Refund Policy, and Terms & Conditions pages linked from the footer.
- **Premium UI**: glassmorphism cards, gradient backgrounds, bento-style grids, sticky navbar, and Framer Motion scroll/mount animations across every page. Fully responsive.
- **Real content management**: every section of every page is editable from `/admin` and persists to `data/site-content.json` — no hardcoded copy, no CMS subscription.
- **Working contact form**: submissions are validated server-side and saved to `data/leads.json`, viewable in the admin Leads tab.
- **Cookie-session admin auth**: HMAC-signed session tokens (Web Crypto, Edge-middleware compatible), protecting both `/admin` pages and `/api/admin/*` routes.
- **All pricing in INR (₹)** — no placeholder dollar amounts, no lorem ipsum.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, Route Handlers, Middleware)
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react (icons)
- Local JSON files as the data layer (`data/site-content.json`, `data/leads.json`) — no database

## Getting Started

```bash
npm install
cp .env.example .env.local   # optional: customize admin credentials/session secret
npm run dev
```

Visit:
- Website: [http://localhost:3000](http://localhost:3000)
- Admin login: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

### Admin Credentials (default)

| Field    | Value          |
| -------- | -------------- |
| Username | `growthmaker`  |
| Password | `Growth@2026`  |

Change these via `ADMIN_USERNAME` / `ADMIN_PASSWORD` in `.env.local` (see `.env.example`). Also set a strong `SESSION_SECRET` before deploying anywhere public.

## Editing Content via Admin

1. Log in at `/admin/login`.
2. Use the sidebar to jump between sections: Brand & Nav, Home, About, Client Results, Services, Blog, Contact, FAQs, Footer, and Leads.
3. Edit text fields, add/remove list items (stats, services, FAQs, blog posts, etc.) directly in the form.
4. Click **Save Changes** — this writes the full content object to `data/site-content.json` and is reflected on the live site immediately (no rebuild needed).
5. View form submissions from the public Contact page under the **Leads** tab.
6. Use **Preview Website** in the sidebar to open the live site in a new tab, or **Logout** to end your session.

## Folder Structure

```
data/
  site-content.json      # all editable site copy (brand, nav, pages, footer, FAQs)
  leads.json              # contact form submissions
src/
  app/
    (site)/               # route group: public pages, wrapped in Navbar + Footer
      page.tsx             # Home
      about/
      client-results/
      services/
      blog/
        [slug]/            # dynamic blog post detail
      contact/
      privacy-policy/
      refund-policy/
      terms-conditions/
    admin/                 # admin pages (no public Navbar/Footer)
      login/
      page.tsx             # dashboard (protected)
    api/
      contact/             # POST -> data/leads.json
      admin/
        login/ logout/      # session cookie issue/clear
        content/            # GET/PUT data/site-content.json
        leads/              # GET data/leads.json
    layout.tsx             # root layout (fonts, html/body shell)
  components/
    about/ blog/ clientResults/ contact/ home/ services/ legal/ ui/
    admin/                 # dashboard editor UI (per-section editors, ArrayEditor, LeadsViewer)
    Navbar.tsx Footer.tsx FinalCtaSection.tsx
  lib/
    content.ts             # read/write data/site-content.json
    leads.ts                # read/append data/leads.json
    auth.ts                 # session token sign/verify (Web Crypto HMAC)
  middleware.ts             # protects /admin and /api/admin/* routes
```

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # start production server (after build)
npm run lint     # run ESLint
```

## Deployment Notes

- This project uses the local filesystem (`data/*.json`) for content and leads, so it must be deployed to a host with a **persistent, writable filesystem** (e.g. a VPS or container with a mounted volume). Serverless/edge platforms with ephemeral or read-only filesystems (e.g. standard Vercel deployments) will not persist admin saves or new leads between requests.
- Set `ADMIN_USERNAME`, `ADMIN_PASSWORD`, and a strong random `SESSION_SECRET` as environment variables in production — do not ship the defaults.
- Cookies are marked `secure` automatically when `NODE_ENV=production`, so serve the admin panel over HTTPS in production.
