/**
 * Homepage copy — full demo storytelling for presentation.
 */

import { demoLabels } from "./demo";

export const homeHero = {
  heading: "Dari ide menjadi ruang yang terwujud.",
  lead: "Layanan desain arsitektur dan konstruksi dalam satu pendekatan Design & Build—dari perencanaan tapak hingga pelaksanaan yang terukur.",
} as const;

export const homeIntro = {
  heading: "Architecture & Design Build yang terkoordinasi.",
  body: "KETEMU & Co. menempatkan arsitektur sebagai kerangka yang harus dapat dibangun. Kami menyatukan konsep ruang, keputusan material, dan koordinasi lapangan agar percakapan antara pemilik, perancang, dan pelaksana tidak terputus di tengah jalan.",
  points: [
    "Desain responsif terhadap iklim tropis dan pola hunian.",
    "Lingkup dan anggaran dibicarakan sebelum eksekusi.",
    "Detail yang jelas di gambar dan terkendali di lapangan.",
  ],
} as const;

export const homeServicesTeaser = {
  sectionHeading: "Layanan",
  lead: "Lima layanan yang dapat berdiri sendiri atau digabung dalam Design & Build.",
  ctaLabel: "Lihat semua layanan",
  ctaHref: "/services",
} as const;

export const homeStats = {
  heading: "Angka presentasi",
  lead: "Metrik berikut bersifat DATA SIMULASI untuk mendemonstrasikan hierarki informasi—bukan kinerja terverifikasi.",
  items: [
    {
      value: "48+",
      label: "Proyek konseptual dalam portofolio demo",
      statusLabel: demoLabels.simulated,
    },
    {
      value: "62.000 m²",
      label: "Total luas perencanaan simulasi",
      statusLabel: demoLabels.simulated,
    },
    {
      value: "12 th",
      label: "Pengalaman praktik simulasi",
      statusLabel: demoLabels.simulated,
    },
    {
      value: "96%",
      label: "Indeks kepuasan simulasi",
      statusLabel: demoLabels.simulated,
    },
  ],
} as const;

export const homeFeatured = {
  heading: "Proyek unggulan",
  lead: "Empat karya konseptual yang menampilkan pendekatan Design & Build pada tipologi berbeda.",
  ctaLabel: "Lihat semua proyek",
  ctaHref: "/projects",
} as const;

export const homeWhy = {
  heading: "Mengapa bekerja bersama kami",
  items: [
    {
      title: "Integrated Design & Build",
      body: "Desain dan pelaksanaan dibicarakan dalam satu alur agar opsi tetap realistis terhadap biaya dan metode.",
    },
    {
      title: "Functional Design",
      body: "Prioritas pada sirkulasi, cahaya, dan kenyamanan termal sebelum ornamen yang sulit dirawat.",
    },
    {
      title: "Structured Project Planning",
      body: "Titik kontrol singkat tetapi tegas: brief, konsep, anggaran, detail kunci, dan serah terima.",
    },
    {
      title: "Quality-Oriented Execution",
      body: "Mutu dijaga lewat urutan kerja, checklist tahapan, dan dokumentasi yang dapat dibaca lapangan.",
    },
  ],
} as const;

export const homeProcess = {
  heading: "Proses kerja",
  steps: [
    { title: "Konsultasi", body: "Menyelaraskan tujuan, batasan, dan ekspektasi." },
    { title: "Analisis kebutuhan", body: "Menyusun program ruang dan prioritas." },
    { title: "Konsep dan desain", body: "Mengembangkan massa, denah, dan bahasa ruang." },
    { title: "Perencanaan biaya", body: "Menyelaraskan lingkup dengan rentang anggaran." },
    { title: "Pelaksanaan", body: "Mengorkestrasi lapangan dengan kontrol dokumen." },
    { title: "Serah terima", body: "Menutup dengan checklist dan penjelasan operasional." },
  ],
} as const;

export const homeTestimonials = {
  heading: "Testimoni (simulasi)",
  lead: "Kutipan berikut fiktif untuk presentasi nada komunikasi klien—bukan testimoni terverifikasi.",
  items: [
    {
      quote:
        "Prosesnya terasa teratur. Kami memahami opsi desain beserta implikasi biayanya sebelum pekerjaan dimulai.",
      name: "Dewi Lestari",
      role: "Pemilik hunian (persona demo)",
      statusLabel: demoLabels.simulated,
    },
    {
      quote:
        "Renovasi dapur dan selasar kami berjalan tanpa memutus aktivitas rumah sepenuhnya. Koordinasi lapangannya jelas.",
      name: "Andi Pratama",
      role: "Klien renovasi (persona demo)",
      statusLabel: demoLabels.simulated,
    },
    {
      quote:
        "Fit-out ruang konsultasi terasa tenang dan profesional. Partisi dan pencahayaan disusun sesuai cara kami menerima tamu.",
      name: "Sari Wijaya",
      role: "Pengelola ruang kerja (persona demo)",
      statusLabel: demoLabels.simulated,
    },
  ],
} as const;

export const homeCtaBand = {
  heading: "Punya rencana untuk diwujudkan?",
  body: "Mari mulai percakapan mengenai kebutuhan arsitektur, renovasi, interior, atau Design & Build Anda.",
} as const;
