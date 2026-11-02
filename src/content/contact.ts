/**
 * Contact page — simulated NAP and form copy for demo website.
 */

import { demoLabels } from "./demo";

export const contactPage = {
  heading: "Kontak",
  lead: "Ceritakan rencana desain arsitektur atau konstruksi yang ingin Anda wujudkan. Percakapan awal membantu kami memahami lingkup yang relevan.",
} as const;

export const contactInfo = {
  heading: "Informasi kantor (simulasi)",
  disclosure: demoLabels.simulated,
  address: {
    label: "Alamat",
    lines: [
      "Gedung Simulasi Lantai 5",
      "Jl. Menteng Raya No. 88",
      "Jakarta Pusat 10310",
    ],
  },
  phone: {
    label: "Telepon",
    display: "+62 21 0000 0000",
    note: "Nomor demo — tidak tersambung ke saluran sungguhan.",
  },
  email: {
    label: "Email",
    display: "hello@ketemu-co.example",
    note: "Domain .example untuk demonstrasi saja.",
  },
  hours: {
    label: "Jam operasional",
    lines: [
      "Senin–Jumat: 09.00–17.00 WIB",
      "Sabtu–Minggu: Tutup",
    ],
  },
} as const;

export const contactFormCopy = {
  heading: "Form konsultasi (simulasi)",
  lead: "Form ini hanya berjalan di peramban Anda. Tidak ada pengiriman ke server atau email perusahaan.",
  successMessage:
    "Simulasi berhasil. Pesan ini tidak dikirim dan hanya digunakan untuk demonstrasi website.",
  fields: {
    name: { label: "Nama", placeholder: "Nama lengkap Anda" },
    email: { label: "Email", placeholder: "nama@email.com" },
    phone: { label: "Nomor telepon", placeholder: "08xxxxxxxxxx" },
    service: {
      label: "Jenis layanan",
      options: [
        { value: "", label: "Pilih layanan" },
        { value: "architecture", label: "Architecture Design" },
        { value: "construction", label: "Construction" },
        { value: "renovation", label: "Renovation" },
        { value: "interior", label: "Interior Design" },
        { value: "design-build", label: "Design & Build" },
        { value: "other", label: "Lainnya / belum yakin" },
      ],
    },
    budget: {
      label: "Estimasi anggaran",
      options: [
        { value: "", label: "Pilih rentang (opsional)" },
        { value: "under-500", label: "Di bawah Rp 500 juta" },
        { value: "500-1500", label: "Rp 500 juta – 1,5 miliar" },
        { value: "1500-3000", label: "Rp 1,5 – 3 miliar" },
        { value: "above-3000", label: "Di atas Rp 3 miliar" },
        { value: "undecided", label: "Belum ditentukan" },
      ],
    },
    location: {
      label: "Lokasi proyek",
      placeholder: "Kota / kawasan (simulasi)",
    },
    message: {
      label: "Pesan",
      placeholder: "Ceritakan kebutuhan, timeline, dan konteks tapak secara singkat.",
    },
  },
  submitLabel: "Kirim simulasi",
  submittingLabel: "Memproses…",
  errors: {
    name: "Nama wajib diisi.",
    emailRequired: "Email wajib diisi.",
    emailInvalid: "Format email tidak valid.",
    phone: "Nomor telepon wajib diisi.",
    service: "Pilih jenis layanan.",
    location: "Lokasi proyek wajib diisi.",
    messageRequired: "Pesan wajib diisi.",
    messageShort: "Pesan minimal 20 karakter.",
  },
} as const;

export const contactFaq = {
  heading: "FAQ kontak",
  items: [
    {
      question: "Apakah formulir ini benar-benar mengirim pesan?",
      answer:
        "Tidak. Formulir bersifat demonstrasi frontend. Setelah dikirim, Anda hanya melihat konfirmasi simulasi.",
    },
    {
      question: "Apakah nomor dan email di halaman ini aktif?",
      answer:
        "Tidak. Semua saluran kontak di situs ini berlabel DATA SIMULASI dan memakai nomor/email demo.",
    },
    {
      question: "Bagaimana cara menghubungi perusahaan sungguhan?",
      answer:
        "Gunakan saluran resmi yang dikonfirmasi pemilik brand di luar situs demo ini.",
    },
  ],
} as const;

export const contactAltCta = {
  heading: "Belum siap mengisi formulir?",
  body: "Jelajahi portofolio konseptual atau layanan Design & Build terlebih dahulu, lalu kembali ke halaman ini saat Anda siap berdiskusi.",
} as const;
