# KETEMU & Co. — Project Requirements

**Phase:** 0 — Discovery  
**Status:** Draft for approval  
**Last updated:** 2026-10-30  
**Brand asset analyzed:** `public/images/logo/ketemu-logo.png` (2480×3509 PNG)

---

## 1. Purpose

Bangun website company profile premium untuk KETEMU & Co. yang:

- Memperkuat kredibilitas konstruksi / arsitektur
- Menampilkan layanan dan portofolio proyek
- Menghasilkan lead melalui formulir kontak (tanpa database pada MVP)
- SEO-friendly, aksesibel (WCAG 2.2 AA), cepat di Vercel

**Sumber kebenaran konten:** hanya materi resmi yang disediakan klien. Dokumen ini **tidak** mengarang alamat, legal, sejarah, atau klaim bisnis.

---

## 2. Brand Input (dari logo asli)

### 2.1 Observasi logo

| Elemen | Temuan |
|--------|--------|
| Mark | Dua bentuk angular saling mengunci (partnership / “ketemu”), berisi ikon rumah bergable + chimney |
| Wordmark | `KETEMU` — sans geometris bold, all-caps, stroke tebal |
| Lockup sekunder | `& Co.` — weight lebih tipis, centered di bawah |
| Orientasi aset | Vertikal (stacked): ikon di atas, teks di bawah |
| Warna dominan (sampling pixel) | Navy `#003060`, Orange `#F88800`, putih sebagai negative space |

### 2.2 Implikasi produk

- Visual identity = **Corporate Modern Construction** dengan sinyal arsitektural (rumah) dan partnership (interlock).
- Orange logo **bukan** warna teks body di atas putih (gagal WCAG) — dipakai sebagai accent / fill dengan pasangan kontras yang aman (lihat `DESIGN_SYSTEM.md`).
- Navy adalah warna foundation untuk teks, nav, footer, dan CTA primer.

Detail token, tipografi, dan aturan logo: **`DESIGN_SYSTEM.md`**.

---

## 3. Goals & Success Metrics (MVP)

| Goal | Indikator (kualitatif / setup) |
|------|--------------------------------|
| Kredibilitas | Desain premium konsisten dengan logo; proyek & layanan terstruktur |
| Lead | Form kontak terkirim (endpoint email / form service) |
| Discoverability | Metadata, sitemap, robots, schema Organization siap |
| Kualitas teknis | Lighthouse Performance/A11y/SEO target ≥ 90 (desktop & mobile, setelah konten nyata) |

Baseline analytics / keyword ranking: belum ada — dicatat sebagai open question.

---

## 4. Scope

### 4.1 In scope (MVP)

1. Home  
2. About Us  
3. Services  
4. Projects / Portfolio  
5. Project Detail  
6. News & Insights (list + detail)  
7. Contact Us (form + info kontak **jika** sudah disediakan klien)

Termasuk: layout shell, design system tokens dari logo, SEO dasar, motion terbatas, deploy Vercel, konten statis di repo.

### 4.2 Out of scope (MVP)

- Database, CMS headless, autentikasi, dashboard admin  
- Multilingual (kecuali klien meminta eksplisit kemudian)  
- E-commerce / booking engine  
- Blog CMS eksternal  
- Inventing company copy, NAP, atau foto fiktif  

---

## 5. Information Architecture

```
/                     Home
/about                About Us
/services             Services
/projects             Projects index
/projects/[slug]      Project detail
/insights             News & Insights index
/insights/[slug]      Article detail
/contact              Contact Us
```

**Primary nav:** Home · About · Services · Projects · Insights · Contact  
**Depth:** Semua halaman penting ≤ 3 klik dari home.  
**Footer:** Tautan utama, logo (aturan clear-space), kontak (jika tersedia), legal placeholders menunggu copy klien.

Opsional post-MVP: `/services/[slug]`.

---

## 6. Conversion Strategy

| Prioritas | Aksi | Lokasi |
|-----------|------|--------|
| Primary | CTA “Hubungi Kami” / konsultasi → `/contact` | Header, hero, akhir section, project detail |
| Secondary | Telepon / WhatsApp | Hanya jika nomor resmi diberikan |
| Trust path | Home → Projects → Project Detail → Contact | Internal linking + CTA kontekstual |
| Form | Nama, email, telepon, jenis proyek, pesan | `/contact` — React Hook Form + Zod |

Submit form: layanan pihak ketiga atau Server Action email — **tanpa DB**. Detail di `TECHNICAL_ARCHITECTURE.md`.

---

## 7. Page Requirements (ringkas)

### 7.1 Home

- Hero full-bleed: brand (logo + nama) sebagai sinyal utama, **satu** headline, **satu** supporting sentence, **satu** CTA group, **satu** visual dominan (foto site / arsitektur — menunggu aset).
- Tanpa stats strip, badge overlay, atau card di hero.
- Section berikutnya (satu job per section): kredibilitas singkat → featured projects → services teaser → insights teaser → contact CTA.

### 7.2 About Us

- Narasi perusahaan, nilai, kapabilitas — **konten menunggu klien**.
- Placeholder struktural boleh; jangan isi klaim fiktif.

### 7.3 Services

- Daftar layanan dari data statis bertipe.
- Setiap item mengarah ke contact dengan konteks (query/hash opsional).

### 7.4 Projects / Portfolio

- Grid editorial (bukan card generik ber-icon).
- Filter kategori client-side dari data statis (jika kategori tersedia).

### 7.5 Project Detail

- Brief, scope, gallery, outcomes (field opsional), CTA contact.
- URL: `/projects/[slug]`.

### 7.6 News & Insights

- List + detail MDX atau modul typed.
- Schema `Article` pada detail.

### 7.7 Contact Us

- Form tervalidasi + pesan error inline (WCAG / Web Interface Guidelines).
- Blok alamat / peta / jam — hanya jika data resmi ada.
- Schema `Organization` / `LocalBusiness` jika NAP lengkap.

---

## 8. Non-Functional Requirements

| Area | Requirement |
|------|-------------|
| Accessibility | WCAG 2.2 Level AA; fokus visible; skip link; semantic HTML |
| Color | Palette dari logo; pasangan teks/UI lulus AA (lihat design system) |
| Performance | LCP &lt; 2.5s, INP &lt; 200ms, CLS &lt; 0.1 (target lab + field setelah launch) |
| SEO | Metadata unik, canonical, OG, sitemap, robots, JSON-LD |
| Security MVP | Tidak expose secret di client; proteksi form dasar |
| i18n | Default bahasa mengikuti copy klien (kemungkinan ID); jangan hardcode fakta |

---

## 9. Content Inventory — Waiting on Client

| Item | Status di repo |
|------|----------------|
| Logo PNG | Ada: `public/images/logo/ketemu-logo.png` |
| Logo SVG / horizontal lockup | Belum |
| Foto proyek / site / tim | Belum |
| Tagline, about, layanan, proyek, artikel | Belum |
| NAP, email, WhatsApp, sosmed | Belum |
| Domain, GSC, Analytics | Belum |
| Privacy / Terms copy | Belum |

---

## 10. Open Questions

1. Bahasa primer situs (ID / EN / keduanya)?  
2. Daftar layanan & kategori proyek resmi?  
3. Apakah ada horizontal logo lockup untuk header sticky?  
4. Channel submit form yang diinginkan (Resend, Formspree, lain)?  
5. Apakah Insights wajib di MVP atau boleh Phase berikutnya?

---

## 11. Related Documents

- `DESIGN_SYSTEM.md` — token dari logo, tipografi, aturan logo, WCAG  
- `TECHNICAL_ARCHITECTURE.md` — stack & struktur  
- `DEVELOPMENT_ROADMAP.md` — fase implementasi  
- `QA_CHECKLIST.md` — verifikasi  

---

## 12. Approval Gate

Dokumen ini boleh diimplementasikan hanya setelah approval eksplisit. Perubahan kode aplikasi / bootstrap Next.js **bukan** bagian dari langkah pembuatan dokumen Phase 0 ini.
