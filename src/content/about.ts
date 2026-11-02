/**
 * About page — fictional demo company profile for presentation.
 */

import { demoLabels } from "./demo";

export const aboutIntro = {
  heading: "Tentang KETEMU & Co.",
  lead: "Perusahaan Architecture & Design Build yang menyatukan perencanaan ruang dan pelaksanaan konstruksi dalam satu pendekatan yang terukur.",
} as const;

export const aboutOverview = {
  heading: "Profil perusahaan",
  body: "KETEMU & Co. berfokus pada proyek hunian, renovasi, interior, dan ruang kerja skala menengah. Kami memandang arsitektur sebagai kerangka yang harus dapat dibangun: keputusan desain diuji terhadap iklim, material, biaya, dan cara orang benar-benar memakai ruang.",
} as const;

export const aboutStory = {
  heading: "Cerita perusahaan",
  paragraphs: [
    "Nama KETEMU lahir dari gagasan pertemuan: antara pemilik dan perancang, antara gambar dan lapangan, antara intensi ruang dan batasan nyata. Praktik ini disusun agar percakapan itu tidak terputus di tengah jalan.",
    "Dalam kerangka demo situs ini, kisah perusahaan bersifat narasi presentasi. Detail historis yang ditampilkan bukan klaim arsip resmi yang telah diverifikasi pemilik brand.",
  ],
} as const;

export const aboutVision = {
  heading: "Visi",
  body: "Menjadi mitra Design & Build yang dipercaya karena kejelasan proses, ketelitian detail, dan ruang yang nyaman dihuni dalam jangka panjang.",
} as const;

export const aboutMission = {
  heading: "Misi",
  items: [
    "Menyusun desain yang responsif terhadap iklim dan pola hidup pengguna.",
    "Menjaga koordinasi desain–konstruksi agar keputusan tetap terkendali.",
    "Mengomunikasikan lingkup, risiko, dan opsi secara transparan sepanjang proyek.",
    "Meningkatkan mutu ruang melalui detail yang dapat dieksekusi dengan baik.",
  ],
} as const;

export const aboutValues = {
  heading: "Nilai inti",
  items: [
    {
      title: "Ketelitian",
      body: "Setiap garis dan spesifikasi diarahkan agar dapat dibaca di lapangan.",
    },
    {
      title: "Integritas proses",
      body: "Perubahan lingkup dan biaya dibicarakan sebelum dieksekusi.",
    },
    {
      title: "Kepekaan konteks",
      body: "Tapak, tetangga, dan iklim menjadi bagian dari keputusan desain.",
    },
    {
      title: "Kolaborasi",
      body: "Pemilik, perancang, dan pelaksana saling menyepakati prioritas.",
    },
  ],
} as const;

export const aboutDesignPhilosophy = {
  heading: "Filosofi desain",
  body: "Kami mengejar kejelasan struktur dan kenyamanan termal sebelum ornamen. Cahaya, aliran udara, dan proporsi ruang lebih dahulu; material dipilih agar tahan cuaca dan perawatan sederhana.",
} as const;

export const aboutWorkingPhilosophy = {
  heading: "Filosofi kerja",
  body: "Proyek berjalan dengan titik kontrol yang jarang tetapi tegas: brief, konsep, anggaran, shop drawing kunci, dan serah terima. Dokumentasi ringkas lebih berguna daripada presentasi yang tidak bisa dibangun.",
} as const;

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: readonly string[];
  statusLabel: typeof demoLabels.simulated;
};

export const aboutTeam = {
  heading: "Tim (simulasi)",
  lead: "Profil berikut adalah persona fiktif untuk presentasi struktur organisasi. Bukan karyawan terverifikasi.",
  members: [
    {
      id: "alya",
      name: "Alya Prameswari",
      role: "Lead Architect",
      bio: "Memimpin pengembangan konsep massa dan denah dengan penekanan pada ventilasi dan orientasi tapak.",
      skills: ["Programming ruang", "Studi iklim", "Koordinasi gambar kerja"],
      statusLabel: demoLabels.simulated,
    },
    {
      id: "raka",
      name: "Raka Mahendra",
      role: "Construction Manager",
      bio: "Mengorkestrasi jadwal lapangan, urutan kerja, dan kontrol mutu material pada tahap pelaksanaan.",
      skills: ["Site coordination", "QC tahapan", "Manajemen subkontraktor"],
      statusLabel: demoLabels.simulated,
    },
    {
      id: "nisa",
      name: "Nisa Kartika",
      role: "Interior Lead",
      bio: "Menyusun zoning interior, skema pencahayaan, dan detail built-in yang selaras dengan arsitektur bangunan.",
      skills: ["Furniture layout", "Lighting", "Material finishing"],
      statusLabel: demoLabels.simulated,
    },
  ] as const satisfies readonly TeamMember[],
} as const;

export const aboutCta = {
  heading: "Mari mulai percakapan",
  body: "Ceritakan rencana proyek Anda—baik hunian baru, renovasi, maupun ruang kerja—kepada KETEMU & Co.",
} as const;
