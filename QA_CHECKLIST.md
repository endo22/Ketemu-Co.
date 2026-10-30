# KETEMU & Co. — QA Checklist

**Phase:** 0 — Discovery  
**Status:** Draft for approval  
**Last updated:** 2026-10-30  
**Skills:** `webapp-testing`, `web-design-guidelines`, `seo-audit`, `vercel-react-best-practices`

Gunakan checklist ini pada staging sebelum production. Centang per rilis.

---

## 1. Brand & Logo

- [ ] Logo dimuat dari `public/images/logo/ketemu-logo.png` (atau turunan resmi yang disetujui)
- [ ] Clear space ≥ tinggi huruf “K” wordmark
- [ ] Desktop header: ukuran ≥ minimum di `DESIGN_SYSTEM.md` §6
- [ ] Mobile header: icon-only atau stacked tidak memotong wordmark; ada `aria-label="KETEMU & Co."`
- [ ] Logo full-color **tidak** ditempatkan di navy gelap tanpa aset reverse
- [ ] Tidak ada stretch / recolor / shadow tidak resmi
- [ ] Favicon menampilkan mark (bukan default Next)

---

## 2. Color & WCAG AA

- [ ] Teks body memakai navy `#003060` (atau grey-600 `#4A5563`) di permukaan terang — **bukan** `#F88800`
- [ ] CTA primary: bg `#003060` + teks putih
- [ ] CTA secondary orange: bg `#F88800` + teks `#003060` (bukan putih)
- [ ] Link “orange” di putih memakai `#C2410C` atau lebih gelap
- [ ] Tidak ada pasangan `#F88800` + `#FFFFFF` untuk teks atau kontrol penting
- [ ] Fokus `:focus-visible` terlihat (ring navy), tidak `outline-none` tanpa pengganti
- [ ] Error form merah dengan kontras AA + teks perbaikan
- [ ] Spot-check contrast (DevTools / axe) pada Header, Hero CTA, Footer, Contact form

---

## 3. Typography & Layout

- [ ] Archivo (display) + Source Sans 3 (body) ter-load; bukan Inter/Roboto
- [ ] Satu H1 per halaman; hierarki H1→H2→H3 logis
- [ ] Hero: brand + 1 headline + 1 supporting + CTA group + 1 visual dominan — tanpa badge overlay
- [ ] Tidak ada card-in-card atau icon-row generik di atas setiap heading
- [ ] Measure body ≈ `65ch`; headings `text-wrap: balance`
- [ ] Breakpoints: 375 / 768 / 1024 / 1280 tanpa overflow-x

---

## 4. Functional

- [ ] Semua rute IA: `/`, `/about`, `/services`, `/projects`, `/projects/[slug]`, `/insights`, `/insights/[slug]`, `/contact`
- [ ] 404 kustom
- [ ] Nav desktop + mobile (buka/tutup, focus trap wajar di drawer)
- [ ] Internal links Projects → Detail → Contact
- [ ] Form: validasi Zod client; error inline; fokus ke field error pertama
- [ ] Form: autocomplete & type `email` / `tel` benar; paste tidak diblok
- [ ] Submit: disabled hanya saat request berjalan; aria-live untuk status
- [ ] Empty states proyek/artikel tidak “pecah”

---

## 5. Accessibility (Web Interface Guidelines)

- [ ] Skip link ke main
- [ ] Landmark: `header`, `nav`, `main`, `footer`
- [ ] Tombol ikon-only punya `aria-label`
- [ ] Gambar bermakna punya `alt`; dekoratif `alt=""`
- [ ] Keyboard: Tab order logis; Enter/Space pada kontrol
- [ ] `prefers-reduced-motion` menonaktifkan / menyederhanakan animasi
- [ ] Touch target memadai (~44px) pada nav mobile & CTA
- [ ] Tidak `user-scalable=no`

---

## 6. Motion & Performance

- [ ] Animasi hanya `transform` / `opacity`
- [ ] Tidak `transition: all`
- [ ] Motion / chart berat di-`next/dynamic` bila perlu
- [ ] Lucide: import per ikon (bukan barrel)
- [ ] Hero image: `priority` + dimensi; below-fold lazy
- [ ] Font: `display: swap`; CLS font terkendali
- [ ] Lighthouse (lab) Performance / Accessibility / SEO ≥ 90 pada shell staging
- [ ] LCP &lt; 2.5s, CLS &lt; 0.1, INP &lt; 200ms (target; ukur ulang dengan konten nyata)

---

## 7. SEO (`seo-audit`)

- [ ] Title unik ~50–60 karakter; H1 selaras
- [ ] Meta description unik ~150–160 karakter
- [ ] Canonical self-reference; HTTPS; trailing slash konsisten
- [ ] `robots.ts` tidak memblok halaman penting
- [ ] `sitemap.xml` berisi URL kanonis saja
- [ ] OG/Twitter image & title
- [ ] JSON-LD Organization — **hanya field terverifikasi** (jangan isi NAP fiktif)
- [ ] Schema dicek via browser / Rich Results Test (bukan hanya curl)
- [ ] Alt & nama file gambar deskriptif setelah aset final
- [ ] Internal linking: tidak ada orphan page penting

---

## 8. Content Integrity

- [ ] Tidak ada alamat / telepon / statistik / klaim proyek yang dikarang
- [ ] Placeholder ditandai jelas atau dikosongkan dengan empty state
- [ ] Brand name `KETEMU & Co.` konsisten (spasi & ampersand)

---

## 9. Automated Smoke (Playwright)

Ikuti skill `webapp-testing`:

```bash
python scripts/with_server.py --help
# setelah app ada:
# python .claude/skills/webapp-testing/scripts/with_server.py --server "npm run dev" --port 3000 -- python tests/smoke.py
```

Smoke minimum:

- [ ] Home 200; logo visible  
- [ ] Nav ke Contact  
- [ ] Submit form invalid → error terlihat  
- [ ] Project detail (jika slug sample ada)  
- [ ] Screenshot mobile 375 & desktop 1280 untuk review visual  

Jalankan Chromium headless; `wait_for_load_state("networkidle")` sebelum assert.

---

## 10. Security & Launch Hygiene

- [ ] Tidak ada secret di bundle client  
- [ ] Env form endpoint hanya server  
- [ ] HTTPS di production  
- [ ] Headers dasar (Vercel defaults + CSP bertahap)  
- [ ] Form rate-limit / honeypot sesuai arsitektur  

---

## 11. Sign-off

| Peran | Nama | Tanggal | Lulus? |
|-------|------|---------|--------|
| Design / Brand | | | |
| Frontend | | | |
| Stakeholder | | | |

Catatan blokir: ________________________________
