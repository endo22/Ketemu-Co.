# KETEMU & Co. — Technical Architecture

**Phase:** 0 — Discovery  
**Status:** Draft for approval  
**Last updated:** 2026-10-30  
**Constraints:** Static content MVP · no database · no authentication · planning docs only until bootstrap approval

---

## 1. Goals

Arsitektur yang:

- SEO-first (App Router metadata, SSG, sitemap)  
- Selaras design tokens dari logo (`#003060`, `#F88800`)  
- Performa mengikuti Vercel React Best Practices  
- Mudah diganti konten tanpa CMS pada MVP  
- Siap naik ke headless CMS kemudian tanpa rewrite total  

---

## 2. Recommended Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **Next.js** (App Router) | SSG/SSR, `metadata`, Image, Font, Vercel-native |
| Language | **TypeScript** | Typed content modules & form schemas |
| Styling | **Tailwind CSS** + CSS variables | Token dari `DESIGN_SYSTEM.md` |
| Motion | **motion** (Framer Motion) | Selective; dynamic import; reduced-motion |
| Icons | **lucide-react** | Direct path imports only |
| Forms | **react-hook-form** + **zod** + `@hookform/resolvers` | Contact only |
| Hosting | **Vercel** | Preview deploys, CDN, Analytics opsional |
| Content | TS modules + **MDX** (insights) | No DB |
| Testing | Playwright (skill `webapp-testing`) | Smoke & visual |

**Tidak dipakai di MVP:** Prisma/DB, NextAuth, CMS SaaS wajib, i18n routing (kecuali diminta).

---

## 3. High-Level Diagram

```
Browser
  └─ Next.js App Router (Vercel Edge/Node)
       ├─ Static pages (SSG) ← content/*.ts | *.mdx
       ├─ Client islands: Header mobile, Motion, ContactForm
       └─ Server Action / Route Handler → email/form provider
```

---

## 4. Repository Structure (target setelah Phase 1)

```
public/
  images/
    logo/
      ketemu-logo.png          # existing stacked lockup
      # future: ketemu-logo.svg, horizontal, reverse, icon
app/
  (marketing)/
    layout.tsx
    page.tsx                   # Home
    about/page.tsx
    services/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    insights/page.tsx
    insights/[slug]/page.tsx
    contact/page.tsx
  layout.tsx
  not-found.tsx
  robots.ts
  sitemap.ts
  opengraph-image.tsx          # optional
components/
  layout/                      # Header, Footer, MobileNav
  ui/                          # Button, Input, …
  sections/                    # HomeHero, FeaturedProjects, …
  forms/ContactForm.tsx
content/
  company.ts                   # only verified fields
  services.ts
  projects/
  insights/
lib/
  seo.ts
  validations/contact.ts
  utils/cn.ts
docs/                          # optional later; Phase 0 docs live at repo root
PROJECT_REQUIREMENTS.md
DESIGN_SYSTEM.md
DEVELOPMENT_ROADMAP.md
QA_CHECKLIST.md
TECHNICAL_ARCHITECTURE.md
```

Catatan: workspace saat ini **belum** berisi app Next.js — hanya skills + logo + dokumen planning.

---

## 5. Rendering Strategy

| Route | Mode | Catatan |
|-------|------|---------|
| Marketing pages | SSG | `generateStaticParams` untuk slug |
| Contact form | SSG page + Client Component form | Boundary sempit |
| Insights MDX | SSG | compile at build |

Hindari waterfall data (konten lokal sync). Tidak ada fetch remote wajib di MVP.

---

## 6. Design Tokens in Code

Implementasikan sebagai CSS variables di root (Tailwind `@theme` / `:root`):

```css
:root {
  --color-navy: #003060;
  --color-orange: #F88800;
  --color-orange-text: #C2410C;
  --color-surface: #F7F8FA;
  /* … full scale from DESIGN_SYSTEM.md */
}
```

**Invariant:** komponen `Button` secondary memakai `color: var(--color-navy)` di atas `background: var(--color-orange)` — bukan teks putih.

---

## 7. Logo Asset Pipeline

| Aset | Path | Penggunaan |
|------|------|------------|
| Stacked PNG (ada) | `/images/logo/ketemu-logo.png` | About, footer terang, brand block |
| Turunan web (Phase 1) | WebP/AVIF + width header | Hindari serve 2480×3509 di nav |
| Horizontal / reverse | TBD dari klien | Sticky header; footer navy |

Komponen `Logo`:

- Props: `variant: "stacked" | "icon" | "horizontal"` (horizontal deferred)  
- `next/image` dengan width/height eksplisit  
- Link ke `/` dengan accessible name  

---

## 8. Content Model (typed, no DB)

```ts
// illustrative — fields populated only when client provides data
type Company = {
  legalName: string; // e.g. from logo lockup: "KETEMU & Co."
  tagline?: string;
  email?: string;
  phone?: string;
  address?: string;
  socials?: { label: string; href: string }[];
};

type Service = {
  slug: string;
  title: string;
  summary: string;
  body?: string;
};

type Project = {
  slug: string;
  title: string;
  summary: string;
  category?: string;
  cover: { src: string; alt: string; width: number; height: number };
  gallery?: { src: string; alt: string; width: number; height: number }[];
  completedAt?: string; // ISO date if known
};

type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  body: string; // or MDX
};
```

`company.ts` dimulai hampir kosong kecuali `legalName` yang terlihat di logo wordmark; field lain opsional.

---

## 9. Form Architecture

```
ContactForm (client)
  → zod schema
  → Server Action (preferred) or Route Handler POST
      → provider (Resend / Formspree / similar)
      → honeypot + basic rate limit
```

- Tidak menyimpan lead di database MVP.  
- Secret API key: server env only (`RESEND_API_KEY`, dll.).  
- Success/error via `aria-live="polite"`.  

---

## 10. SEO Architecture

| Concern | Implementation |
|---------|----------------|
| Titles/descriptions | `export const metadata` / `generateMetadata` |
| Canonical | `alternates.canonical` |
| Sitemap | `app/sitemap.ts` dari content slugs |
| Robots | `app/robots.ts` |
| JSON-LD | Organization (+ LocalBusiness **jika** NAP lengkap) |
| Images | `next/image`; OG dedicated |
| CWV | priority LCP, dimensions, font swap, minimal JS |

Audit dengan skill `seo-audit` pada staging; schema via Rich Results / browser, bukan curl saja.

---

## 11. Performance Rules (enforce in review)

Dari `vercel-react-best-practices`:

- Tidak barrel-import `lucide-react` / `motion`  
- Dynamic import Motion & komponen berat di bawah fold  
- Defer analytics sampai setelah hydration  
- Server Components default; `"use client"` seminimal mungkin  
- Hoist font/logo static I/O di layout  

---

## 12. Accessibility Baseline

- Semantic landmarks + skip link  
- Focus ring navy (`--navy-600`)  
- Form labels, autocomplete, no paste-block  
- `prefers-reduced-motion`  
- Review dengan Web Interface Guidelines sebelum release  

---

## 13. Environment Variables (planned)

| Name | Scope | Purpose |
|------|-------|---------|
| `NEXT_PUBLIC_SITE_URL` | public | Canonical / sitemap |
| `RESEND_API_KEY` or form provider key | server | Contact submit |
| `CONTACT_TO_EMAIL` | server | Inbox tujuan |

Tidak commit file `.env*` berisi secret.

---

## 14. Deployment

1. Vercel project linked ke Git (init di Phase 1).  
2. Preview per branch/PR.  
3. Production: custom domain + HTTPS.  
4. Optional: Vercel Analytics / Speed Insights (privacy note jika region butuh consent).  

---

## 15. Security (MVP)

- No auth surface  
- Validate & sanitize form input (Zod)  
- Honeypot + rate limit  
- CSP bertahap (mulai report-only jika perlu)  
- Dependabot / `npm audit` pada CI kemudian  

---

## 16. Testing Strategy

| Layer | Tool | Kapan |
|-------|------|-------|
| Smoke E2E | Playwright + `with_server.py` | Phase 7 / setiap PR penting |
| A11y spot | axe / manual keyboard | Phase 2+ |
| Visual | Playwright screenshots 375 & 1280 | Sebelum launch |
| SEO | Manual + Rich Results | Phase 6 |
| Typecheck / lint | `tsc`, ESLint | CI setelah bootstrap |

---

## 17. Future Extensions (explicitly later)

- Headless CMS (Sanity/Contentful) mapped ke tipe `Project` / `Article`  
- `next-intl` jika bilingual  
- Reverse logo asset pipeline  
- Lead CRM webhook  

Jangan bangun sampai MVP live dan kebutuhan nyata muncul.

---

## 18. Current Workspace Facts

| Item | State |
|------|-------|
| Git | Belum diinisialisasi |
| `package.json` | Belum ada |
| App source | Belum ada |
| Logo | Ada di `public/images/logo/ketemu-logo.png` |
| Planning docs | Lima file di root (Phase 0) |

Bootstrap Next.js **menunggu approval** terpisah setelah dokumen ini disetujui.
