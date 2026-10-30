# KETEMU & Co. — Development Roadmap

**Phase:** 0 — Discovery  
**Status:** Draft for approval  
**Last updated:** 2026-10-30  
**Depends on:** `PROJECT_REQUIREMENTS.md`, `DESIGN_SYSTEM.md`, `TECHNICAL_ARCHITECTURE.md`, `QA_CHECKLIST.md`

---

## 1. Principles

- Static content first; no DB/auth pada MVP.  
- Design tokens dikunci dari logo (`#003060`, `#F88800`) sebelum UI massal.  
- Jangan mengarang copy/NAP/foto — gunakan placeholder struktural sampai klien mengirim.  
- Setiap fase punya Definition of Done (DoD) yang bisa di-QA.

---

## 2. Phase Overview

| Phase | Nama | Output utama |
|-------|------|--------------|
| 0 | Discovery & planning | Lima dokumen + analisis logo (**saat ini**) |
| 1 | Foundation | Git, Next.js App Router, TS, Tailwind, tokens, layout shell |
| 2 | Design system UI | Button, form controls, header/footer dengan aturan logo |
| 3 | Core pages | Home, About, Services, Contact + form |
| 4 | Portfolio | Projects index + detail |
| 5 | Insights | List + detail (MDX/TS) |
| 6 | SEO & polish | Metadata, schema, sitemap, OG, performance |
| 7 | QA & launch | Playwright, a11y, CWV, Vercel production |

---

## 3. Phase 0 — Discovery (current)

**Done when:**

- [x] Audit workspace  
- [x] Analisis logo `public/images/logo/ketemu-logo.png`  
- [x] Draft lima dokumen planning  
- [ ] Approval eksplisit stakeholder  

**Next gate:** Approval dokumen → baru bootstrap (Phase 1).

---

## 4. Phase 1 — Foundation

**Tasks:**

1. Init Git repository (belum ada).  
2. Scaffold Next.js (App Router) + TypeScript + Tailwind — **hanya setelah approval**.  
3. Pasang CSS variables / tokens dari `DESIGN_SYSTEM.md`.  
4. `next/font`: Archivo + Source Sans 3.  
5. Layout marketing: skip link, Header, Footer, logo wiring ke `public/images/logo/ketemu-logo.png`.  
6. Halaman `not-found`, `robots.ts`, `sitemap.ts` stub.  

**DoD:**

- Dev server jalan; home shell render; token navy/orange terlihat di UI chrome.  
- Logo header mengikuti clear-space & ukuran minimum.  
- Tidak ada dependency CMS/DB.

**Blocked by:** Approval Phase 0; opsional SVG/horizontal logo (boleh defer dengan fallback teks).

---

## 5. Phase 2 — Design System Components

**Tasks:**

1. `Button` (primary navy / secondary orange+navy text / ghost) — kontras AA.  
2. Form fields + focus-visible.  
3. `SectionHeader`, `CTABand`.  
4. Motion primitives + `prefers-reduced-motion`.  
5. Story/demo page internal **atau** section showcase di `/` sementara (opsional).  

**DoD:** Komponen inti lulus checklist a11y di `QA_CHECKLIST.md` §A11y.

---

## 6. Phase 3 — Core Marketing Pages

**Tasks:**

1. Home sesuai hero budget (brand-first).  
2. About / Services dengan data typed di `content/` (placeholder fields OK).  
3. Contact: RHF + Zod; submit pathway sesuai arsitektur.  
4. CTA global ke `/contact`.  

**DoD:** Empat rute dapat di-crawl; form validasi error inline; tidak ada klaim bisnis fiktif di UI.

**Blocked by:** Copy klien (boleh ship dengan “konten menyusul” yang jujur); endpoint form.

---

## 7. Phase 4 — Projects

**Tasks:**

1. `content/projects` schema + seed placeholder.  
2. Index + `[slug]` SSG.  
3. Gallery + internal links ke Contact.  

**DoD:** Detail proyek punya metadata unik; gambar dengan dimensi/alt; empty state jika belum ada proyek.

**Blocked by:** Foto & deskripsi proyek nyata untuk konten final.

---

## 8. Phase 5 — Insights

**Tasks:**

1. MDX atau modul artikel.  
2. Index + detail + schema Article.  
3. Teaser di Home.  

**DoD:** Artikel sample (boleh “draft editorial” yang ditandai) atau empty state bersih.

**Prioritas:** Boleh digeser setelah Phase 6 jika Insights tidak wajib MVP (lihat open questions).

---

## 9. Phase 6 — SEO & Performance

**Tasks:**

1. Metadata API per halaman; canonical; OG images.  
2. JSON-LD Organization (isi field hanya yang terverifikasi).  
3. Image pipeline, font CLS, dynamic import Motion/Lucide.  
4. Bundle audit ringan (hindari barrel imports).  

**DoD:** `seo-audit` checklist teknis lulus untuk staging; Lighthouse lab ≥ 90 pada shell.

---

## 10. Phase 7 — QA & Launch

**Tasks:**

1. Playwright smoke via skill `webapp-testing` + `with_server.py`.  
2. Manual pass `QA_CHECKLIST.md` (termasuk kontras orange/navy).  
3. Vercel project + env + domain.  
4. GSC / Analytics hanya jika diminta dan siap privacy.  

**DoD:** Staging signed-off; production deploy hijau; rollback plan singkat tercatat.

---

## 11. Dependency on Client Assets

| Aset | Mempengaruhi |
|------|----------------|
| Logo SVG / horizontal / reverse | Phase 1–2 header/footer navy |
| Foto proyek & site | Phase 3–4 visual final |
| Copy & NAP | Phase 3, 6 schema LocalBusiness |
| Domain & akses Vercel | Phase 7 |

---

## 12. Suggested Calendar (indikatif)

Estimasi setelah approval + aset minimal (logo OK; copy boleh bertahap):

| Window | Phase |
|--------|-------|
| Hari 1 | Phase 1 |
| Hari 2–3 | Phase 2–3 |
| Hari 4–5 | Phase 4 |
| Hari 6 | Phase 5 (atau skip) |
| Hari 7 | Phase 6–7 |

Bukan komitmen kontrak — sesuaikan dengan ketersediaan konten klien.

---

## 13. Risks

| Risk | Mitigasi |
|------|----------|
| Orange `#F88800` disalahgunakan sebagai teks putih | Token + code review + QA contrast |
| Konten kosong lama | Empty states jujur; jangan lorem klaim |
| Hanya PNG stacked besar (2480×3509) | Sediakan turunan web (WebP/AVIF, ukuran header) di Phase 1 |
| Tidak ada Git | Init di Phase 1 sebelum fitur |

---

## 14. Change Control

Perubahan scope halaman atau stack memerlukan update singkat ke dokumen ini + approval. Implementasi UI tidak dimulai sebelum gate Phase 0 ditutup.
