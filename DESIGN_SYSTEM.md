# KETEMU & Co. — Design System

**Phase:** 0 — Discovery  
**Status:** Draft for approval  
**Last updated:** 2026-10-30  
**Logo source:** `public/images/logo/ketemu-logo.png` (2480×3509)

Sampling warna dilakukan dari piksel non-putih/non-transparan (kuantisasi 8-bit). Nilai dominan dikunci sebagai token brand.

---

## 1. Brand Principles

| Principle | Application |
|-----------|-------------|
| Premium Modern Construction | Material visual kuat, tipografi geometris, sedikit ornamen |
| Architectural Editorial | Asymmetry, full-bleed photography, hierarki tipografi tajam |
| Corporate Minimalism | Navy sebagai foundation; orange langka (~10% visual weight) |
| Partnership signal | Motif interlocking pada logo → komposisi “meeting / join” di layout (opsional, subtle) |

### Anti-patterns (wajib dihindari)

- Purple/indigo gradient, cream+terracotta AI look, glassmorphism, glow neon  
- Inter / Roboto / Arial / Open Sans / Montserrat sebagai display  
- Card grid generik (ikon rounded + judul + teks berulang)  
- Badge / sticker / chip overlay di atas hero  
- Pure `#000` / pure `#FFF` tanpa tint untuk surface besar  
- Orange logo sebagai warna **teks body** di atas putih  

---

## 2. Logo Analysis Summary

| Aspek | Detail |
|-------|--------|
| Mark | Interlocking angular forms + house (gable + chimney) split navy/orange |
| Wordmark | `KETEMU` bold geometric caps; `& Co.` lighter weight |
| Native lockup | **Stacked / vertical** |
| Palette in file | Navy `#003060`, Orange `#F88800`, white negative space |

Makna visual (interpretasi desain, bukan klaim bisnis): pertemuan / partnership + hunian / konstruksi.

---

## 3. Color Tokens

### 3.1 Brand core (dari logo)

| Token | HEX | Peran |
|-------|-----|--------|
| `--color-navy` | `#003060` | Primary brand, teks kuat, nav, footer, CTA primer |
| `--color-orange` | `#F88800` | Accent brand (fill, rule, icon mark, CTA sekunder) |
| `--color-white` | `#F7F8FA` | Surface utama (tinted; bukan `#FFFFFF` murni untuk page bg) |
| `--color-white-pure` | `#FFFFFF` | Di dalam logo / foto; UI sparingly |

### 3.2 Navy scale

| Token | HEX | Penggunaan |
|-------|-----|------------|
| `--navy-950` | `#001A36` | Footer deep, overlays |
| `--navy-900` | `#002448` | Hover teks gelap |
| `--navy-800` | `#003060` | **Brand primary (= logo)** |
| `--navy-700` | `#0A3F73` | Hover link / border kuat |
| `--navy-600` | `#1A568F` | Link secondary |

### 3.3 Orange scale

| Token | HEX | Penggunaan |
|-------|-----|------------|
| `--orange-500` | `#F88800` | **Brand accent (= logo)** — fill / decoration |
| `--orange-600` | `#E07A00` | Hover pada fill orange |
| `--orange-700` | `#C2410C` | **Teks / ikon orange di atas permukaan terang** (AA body) |
| `--orange-800` | `#9A3412` | Teks orange emphasis / visited |

### 3.4 Neutrals (navy-tinted)

| Token | HEX | Penggunaan |
|-------|-----|------------|
| `--grey-50` | `#F7F8FA` | Page background |
| `--grey-100` | `#EEF1F5` | Section alternate |
| `--grey-200` | `#DCE3EC` | Dividers soft |
| `--grey-300` | `#C5CDD8` | Borders |
| `--grey-500` | `#64748B` | Placeholder — **hindari untuk body** (≈4.48 pada grey-50; borderline) |
| `--grey-600` | `#4A5563` | Secondary text (AA ✓ ≈7.13 pada grey-50) |
| `--grey-800` | `#1E293B` | Strong secondary |

### 3.5 Semantic (UI)

| Token | HEX | Catatan |
|-------|-----|---------|
| `--success` | `#166534` | Teks/icon sukses di atas terang |
| `--error` | `#B91C1C` | Error form inline |
| `--focus-ring` | `#1A568F` | `:focus-visible` ring (navy-600) |

---

## 4. WCAG 2.2 AA Contrast Matrix

Ambang: **teks biasa ≥ 4.5:1**, **teks besar / UI ≥ 3:1**.

| Pasangan | Ratio (approx.) | AA body | AA large / UI | Aturan |
|----------|-----------------|---------|---------------|--------|
| `#003060` di `#FFFFFF` | 13.19 | Pass | Pass | Default teks & CTA primer (putih di navy) |
| `#003060` di `#F7F8FA` | 12.42 | Pass | Pass | Body di page bg |
| `#003060` di `#EEF1F5` | 11.65 | Pass | Pass | Body di section alt |
| `#FFFFFF` di `#003060` | 13.19 | Pass | Pass | Teks di nav/footer/CTA primer |
| `#F88800` di `#FFFFFF` | 2.47 | **Fail** | **Fail** | Jangan pakai orange logo untuk teks/UI di putih |
| `#FFFFFF` di `#F88800` | 2.47 | **Fail** | **Fail** | Jangan teks putih di tombol orange logo |
| `#003060` di `#F88800` | 5.35 | Pass | Pass | **Teks/ikon navy di atas fill orange logo** |
| `#F88800` di `#003060` | 5.35 | Pass | Pass | Accent orange di atas navy (teks besar/UI OK; body panjang tetap hati-hati) |
| `#C2410C` di `#FFFFFF` | 5.18 | Pass | Pass | Link / label “orange” di permukaan terang |
| `#9A3412` di `#FFFFFF` | 7.31 | Pass | Pass | Orange text emphasis |
| `#4A5563` di `#F7F8FA` | 7.13 | Pass | Pass | Secondary text |

### 4.1 CTA rules (wajib)

| Varian | Background | Foreground | Catatan |
|--------|------------|------------|---------|
| Primary | `--navy-800` `#003060` | `#FFFFFF` | Default convert |
| Secondary / accent | `--orange-500` `#F88800` | `--navy-800` `#003060` | Bukan putih |
| Ghost | transparent | `--navy-800` | Border `--grey-300` |
| Orange text link | — | `--orange-700` `#C2410C` | Di atas putih/grey-50 |

### 4.2 Focus & states

- Jangan `outline: none` tanpa pengganti `focus-visible` ring.  
- Hover menaikkan kontras (navy lebih gelap / orange-600), bukan menurunkan.  
- Disabled: opacity + `aria-disabled`; tetap jangan andalkan warna saja.

---

## 5. Typography

Karakter wordmark logo: **geometric sans, bold, blunt terminals, wide caps** → pasangan web yang selaras (bukan clone font proprietary).

| Role | Family (proposal) | Weight | Catatan |
|------|-------------------|--------|---------|
| Display / H1–H2 | **Archivo** | 600–700 | Kekuatan struktural; dekat karakter logo |
| UI / body | **Source Sans 3** | 400–600 | Readable, corporate, bukan Inter |
| Optional accent label | Archivo | 500, tracking sedikit | Eyebrow — sparingly |

**Dilarang untuk brand display:** Inter, Roboto, Open Sans, Lato, Montserrat, Arial.

### 5.1 Modular scale (ratio ≈ 1.333, fluid)

| Token | Size | Line-height | Penggunaan |
|-------|------|-------------|------------|
| `--text-xs` | `clamp(0.75rem, 0.7rem + 0.2vw, 0.8125rem)` | 1.4 | Caption, legal |
| `--text-sm` | `clamp(0.875rem, 0.85rem + 0.15vw, 0.9375rem)` | 1.5 | Meta, nav mobile |
| `--text-base` | `clamp(1rem, 0.95rem + 0.25vw, 1.125rem)` | 1.6 | Body (`max-width: 65ch`) |
| `--text-lg` | `clamp(1.125rem, 1rem + 0.5vw, 1.25rem)` | 1.5 | Lead |
| `--text-xl` | `clamp(1.5rem, 1.2rem + 1vw, 2rem)` | 1.25 | H3 |
| `--text-2xl` | `clamp(2rem, 1.5rem + 1.5vw, 3rem)` | 1.15 | H2 |
| `--text-3xl` | `clamp(2.5rem, 1.8rem + 2.5vw, 4rem)` | 1.05 | H1 / hero |

Headings: `text-wrap: balance`. Body: `text-pretty` bila didukung.

### 5.2 Font loading

- `next/font` (Google) dengan `display: "swap"`  
- Preload display + body kritis  
- Fallback metric adjustment untuk kurangi CLS  

---

## 6. Logo Usage Rules

**File saat ini:** `public/images/logo/ketemu-logo.png` (stacked full-color).

### 6.1 Clear space

- Minimum clear space = **tinggi huruf “K” pada wordmark** di semua sisi.  
- Jangan letakkan teks, ikon, atau edge foto di dalam clear space.

### 6.2 Minimum size

| Context | Minimum |
|---------|---------|
| Stacked full (icon + wordmark) | Tinggi total ≥ **56px** desktop; ≥ **48px** mobile |
| Icon-only (mark tanpa wordmark) | ≥ **32px** touch target visual; favicon 32×32 dari mark |
| Print / OG | Gunakan aset resolusi tinggi; jangan upscale blur |

### 6.3 Desktop

| Placement | Lockup | Notes |
|-----------|--------|-------|
| Header sticky | Prefer **horizontal** (icon kiri + wordmark) jika aset tersedia; sementara: stacked diskalakan atau **icon + teks HTML “KETEMU & Co.”** dengan Archivo | Tinggi header ≈ 72–88px; logo max-height ≈ 40–48px untuk horizontal, ≈ 56px jika stacked dipaksa |
| Hero / about brand block | Stacked resmi dari PNG | Brand sebagai sinyal hero-level |
| Footer | Stacked atau horizontal kecil | Kontras: versi full-color di navy gelap — **butuh logo reverse** (belum ada); sampai ada, gunakan PNG di permukaan terang atau buat reverse dari sumber resmi |

### 6.4 Mobile

| Placement | Lockup | Notes |
|-----------|--------|-------|
| Header | **Icon-only** mark (crop/komponen dari logo) **atau** stacked sangat kecil | Hemat tinggi viewport; sertakan `aria-label="KETEMU & Co."` |
| Menu drawer | Stacked atau horizontal + nama teks | |

### 6.5 Backgrounds yang diizinkan

| Background | Logo full-color | |
|------------|-----------------|---|
| `#F7F8FA` / `#FFFFFF` / `#EEF1F5` | Ya | Default |
| Foto terang dengan scrim putih | Ya | Pastikan kontras mark |
| `#003060` / navy gelap | **Tidak** untuk PNG full-color saat ini | Tunggu **reverse / mono white** resmi |
| Orange `#F88800` solid | Tidak direkomendasikan | Konflik dengan separuh mark |

### 6.6 Larangan

- Jangan stretch, rotate, skew, recolor sembarangan, drop-shadow murahan, atau outline  
- Jangan pisahkan house dari interlocking frame  
- Jangan ganti navy/orange logo dengan warna di luar token  
- Jangan letakkan logo di atas pattern ramai tanpa scrim  

### 6.7 Aset yang masih dibutuhkan

1. SVG master (stacked)  
2. Horizontal lockup  
3. Icon-only (square)  
4. Reverse (putih / mono) untuk navy background  
5. Favicon set (ICO/PNG 32/180/192/512)  

---

## 7. Spacing, Grid, Breakpoints

### 7.1 Spacing scale (4px base)

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128`  
Section rhythm: vertical `clamp(4rem, 6vw, 8rem)` antar section; grouping ketat di dalam cluster.

### 7.2 Layout

- Content max width: **1120–1200px**  
- Wide media: full-bleed  
- Grid: 12-column desktop; 4-column mobile  
- Prefer asymmetry editorial; jangan center semua block  

### 7.3 Breakpoints (Tailwind default)

| Token | Min width |
|-------|-----------|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

Mobile-first. Gunakan container queries untuk komponen filter/project card bila relevan.

---

## 8. Motion

| Token | Value |
|-------|--------|
| Duration entrance | 400–700ms |
| Duration micro | 150–250ms |
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out expo-ish) |
| Properties | `transform`, `opacity` only |

- Hormati `prefers-reduced-motion: reduce` (disable atau static).  
- Fokus high-impact: page load stagger di hero + section reveal — bukan bounce/elastic.  
- Motion library di-dynamic import (lihat arsitektur).

---

## 9. Component Inventory (MVP)

| Component | Notes |
|-----------|-------|
| `Button` | Primary navy; secondary orange+navy text; ghost |
| `Link` / `TextLink` | Navy atau orange-700 |
| `Input` / `Textarea` / `Select` | Label wajib; error inline; autocomplete |
| `Header` / `MobileNav` | Logo rules §6 |
| `Footer` | Logo + nav + kontak jika ada |
| `SectionHeader` | Satu headline + satu supporting |
| `ProjectTile` | Interaction container; bukan card dekoratif berbayang tebal |
| `Gallery` | Aspect ratio fixed; `next/image` |
| `FormField` | RHF + Zod wiring |
| `CTABand` | Navy atau grey-100 + primary button |

Icons: Lucide, import langsung per ikon; jangan icon row di atas setiap heading.

---

## 10. Imagery

- Hero: edge-to-edge, atmosfer konstruksi/arsitektur nyata (menunggu aset klien).  
- Alt text deskriptif; decorative `alt=""`.  
- Width/height atau aspect ratio eksplisit (CLS).  
- Above-fold: `priority`; below-fold: lazy.  

---

## 11. Design Direction (one-liner)

**Architectural editorial on a navy foundation — orange as the rare structural accent from the logo house mark; geometric type; light surfaces; no template contractor chrome.**

Referensi implementasi estetika: skill `frontend-design-impeccable` + Web Interface Guidelines (Vercel) untuk a11y/interaction.
