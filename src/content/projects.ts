/**
 * Projects page chrome + conceptual portfolio seed for the demo website.
 * All portfolio entries are fictional presentation concepts — not real KETEMU & Co. commissions.
 */

import { demoLabels } from "./demo";

export const projectsIntro = {
  /** DRAFT — PENDING OWNER APPROVAL */
  heading: "Proyek",
  /** DRAFT — PENDING OWNER APPROVAL */
  lead: "Kumpulan proyek konseptual untuk presentasi pendekatan Design & Build KETEMU & Co. Setiap karya bersifat fiktif dan ditandai sebagai proyek konseptual.",
} as const;

export const projectsFilterEmpty = {
  /** DRAFT — PENDING OWNER APPROVAL */
  heading: "Tidak ada proyek pada kategori ini",
  /** DRAFT — PENDING OWNER APPROVAL */
  body: "Coba pilih kategori lain atau tampilkan seluruh proyek konseptual.",
} as const;

export const projectsEmpty = {
  /** DRAFT — PENDING OWNER APPROVAL */
  heading: "Portofolio sedang disiapkan",
  /** DRAFT — PENDING OWNER APPROVAL */
  body: "Belum ada proyek yang dipublikasikan di situs ini. Untuk mendiskusikan kebutuhan desain arsitektur atau konstruksi, silakan hubungi KETEMU & Co.",
} as const;

export const projectListingCtaLabel = "Lihat Proyek" as const;

export const projectCategoryFilters = [
  { id: "all", label: "Semua" },
  { id: "residential", label: "Residential" },
  { id: "renovation", label: "Renovation" },
  { id: "commercial", label: "Commercial" },
  { id: "interior", label: "Interior" },
] as const;

export type ProjectCategoryFilterId =
  (typeof projectCategoryFilters)[number]["id"];

export const projectsCta = {
  /** DRAFT — PENDING OWNER APPROVAL */
  heading: "Punya rencana proyek?",
  /** DRAFT — PENDING OWNER APPROVAL */
  body: "Ceritakan kebutuhan Design & Build Anda kepada KETEMU & Co.",
} as const;

export type ProjectCategory =
  | "residential"
  | "renovation"
  | "commercial"
  | "interior";

export type SimulatedMetric = {
  /** Human-readable value shown in UI later; always paired with DATA SIMULASI. */
  value: string;
  /** Fixed disclosure — quantitative fields are simulated. */
  label: typeof demoLabels.simulated;
};

export type ConceptualVisual = {
  id: string;
  kind: "site-diagram" | "floor-plan" | "elevation" | "section" | "interior-concept" | "axonometric";
  title: string;
  /** Caption must state the visual is conceptual, not project photography. */
  caption: string;
};

export type ConceptualProject = {
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  summary: string;
  locationLabel: string;
  designConcept: string;
  scope: readonly string[];
  area: SimulatedMetric;
  budgetEstimate: SimulatedMetric;
  duration: SimulatedMetric;
  body: string;
  highlights: readonly string[];
  visuals: readonly ConceptualVisual[];
  /** Every project must carry the conceptual portfolio label. */
  statusLabel: typeof demoLabels.conceptual;
};

export const projects = [
  {
    slug: "rumah-teras-angin",
    title: "Rumah Teras Angin",
    category: "residential",
    categoryLabel: "Residential",
    summary:
      "Konsep hunian tropis kontemporer yang menempatkan teras sebagai pengatur sirkulasi udara dan ruang berkumpul keluarga.",
    locationLabel: "Pinggiran kota tropis (lokasi simulasi)",
    designConcept:
      "Tropical contemporary dengan penekanan cross ventilation: deretan bukaan berseberangan, atap yang menaungi, dan teras dalam yang menahan panas sebelum masuk ke inti rumah.",
    scope: [
      "Perencanaan tapak dan orientasi massa terhadap angin setempat",
      "Desain arsitektur hunian satu lantai dengan zona publik–privat yang jelas",
      "Perencanaan struktur ringan dan atap beroverstek",
      "Skema material fasad yang tahan cuaca tropis",
      "Koordinasi Design & Build dari konsep hingga paket pelaksanaan simulasi",
    ],
    area: {
      value: "± 186 m² bangunan · tapak ± 240 m²",
      label: demoLabels.simulated,
    },
    budgetEstimate: {
      value: "Rp 1,85–2,15 miliar (rentang konsep)",
      label: demoLabels.simulated,
    },
    duration: {
      value: "Desain 10 minggu · pelaksanaan konsep 7 bulan",
      label: demoLabels.simulated,
    },
    body: "Rumah Teras Angin disusun sebagai latihan desain hunian yang menjawab iklim panas-lembap tanpa bergantung pada pendingin udara di siang hari. Massa bangunan memanjang timur–barat agar fasad panjang menghadap arah angin yang diandaikan pada skenario tapak. Teras dalam berfungsi sebagai buffer termal: udara bergerak menyisir tanaman, menyejukkan lantai, lalu masuk ke ruang keluarga melalui deretan jendela tinggi. Dapur dan ruang makan digabung dalam volume terbuka dengan plafon yang mengikuti kemiringan atap, sementara kamar tidur diletakkan di sisi lebih tenang dengan bukaan terkontrol. Material diarahkan pada bata ekspos yang diplester sebagian, kayu lokal untuk kisi, dan lantai mikro-semen agar perawatan tetap sederhana. Seluruh gambaran ini bersifat konseptual untuk presentasi pendekatan Design & Build KETEMU & Co., bukan dokumentasi proyek yang pernah dikerjakan.",
    highlights: [
      "Teras dalam sebagai inti sirkulasi udara dan kehidupan bersama",
      "Overstek lebar untuk menekan radiasi pada fasad kaca",
      "Zonasi publik–privat tanpa koridor panjang yang membosankan",
      "Detail kisi yang bisa dibuka bertahap sesuai musim hujan dan kemarau",
    ],
    visuals: [
      {
        id: "rta-site",
        kind: "site-diagram",
        title: "Diagram tapak & arah angin",
        caption:
          "Visual konseptual — diagram tapak simulasi, bukan foto lokasi proyek nyata.",
      },
      {
        id: "rta-plan",
        kind: "floor-plan",
        title: "Denah satu lantai",
        caption:
          "Visual konseptual — denah skematik untuk presentasi, bukan dokumen konstruksi final.",
      },
      {
        id: "rta-elevation",
        kind: "elevation",
        title: "Elevasi sisi teras",
        caption:
          "Visual konseptual — elevasi ilustratif dengan penekanan kisi dan overstek.",
      },
    ],
    statusLabel: demoLabels.conceptual,
  },
  {
    slug: "selasar-rumah-warisan",
    title: "Selasar Rumah Warisan",
    category: "renovation",
    categoryLabel: "Renovation",
    summary:
      "Konsep renovasi rumah tapak era 1980-an yang menyambungkan dapur lama ke ruang makan baru lewat selasar cahaya.",
    locationLabel: "Kawasan residensial mapan (lokasi simulasi)",
    designConcept:
      "Adaptive reuse dengan bahasa clean modern: struktur utama dipertahankan, sementara selasar kaca-bata menjadi sendi baru antara zona basah lama dan ruang berkumpul yang diperluas.",
    scope: [
      "Audit konsep terhadap massa dan bukaan eksisting (skenario simulasi)",
      "Perencanaan selasar penghubung dapur–ruang makan",
      "Perkuatan struktur ringan pada area sambungan",
      "Pembaharuan utilitas dapur dan pencahayaan alami",
      "Penyusunan tahapan Design & Build agar hunian tetap bisa dihuni sebagian selama renovasi konsep",
    ],
    area: {
      value: "Renovasi ± 78 m² · selasar baru ± 14 m²",
      label: demoLabels.simulated,
    },
    budgetEstimate: {
      value: "Rp 620–780 juta (rentang konsep)",
      label: demoLabels.simulated,
    },
    duration: {
      value: "Desain 6 minggu · pelaksanaan konsep 4,5 bulan",
      label: demoLabels.simulated,
    },
    body: "Selasar Rumah Warisan berangkat dari tipologi rumah tapak dengan dapur di belakang yang terasa terpisah dari kehidupan keluarga. Alih-alih membongkar seluruh massa, konsep ini menyisipkan selasar sempit berlantai kontinu yang memotong halaman samping. Dinding bata lama sebagian dibuka, diganti rangka baja ringan dan kaca tetap di bagian atas agar cahaya jatuh ke lantai tanpa mengubah karakter atap genteng. Dapur mendapat island kompak menghadap selasar, sehingga aktivitas memasak tidak lagi terasing. Ruang makan diperluas ke arah bekas gudang kecil, dengan finishing plester halus dan kusen kayu yang diseragamkan. Pendekatan ini menunjukkan cara KETEMU & Co. membingkai renovasi sebagai kerja Design & Build yang menghargai jejak bangunan—tetap dalam kerangka proyek konseptual untuk demonstrasi, bukan kisah klien atau alamat nyata.",
    highlights: [
      "Mempertahankan massa utama; intervensi terfokus pada sendi ruang",
      "Selasar sebagai jalur cahaya sekaligus sirkulasi harian",
      "Strategi menghuni sebagian selama tahapan renovasi konsep",
      "Material baru yang tenang agar tidak menelan tekstur dinding lama",
    ],
    visuals: [
      {
        id: "srw-axon",
        kind: "axonometric",
        title: "Axonometri selasar penghubung",
        caption:
          "Visual konseptual — axonometri ide renovasi, bukan foto sebelum/sesudah proyek nyata.",
      },
      {
        id: "srw-section",
        kind: "section",
        title: "Potongan cahaya selasar",
        caption:
          "Visual konseptual — potongan skematik untuk menjelaskan jatuhnya cahaya.",
      },
      {
        id: "srw-interior",
        kind: "interior-concept",
        title: "Suasana dapur–selasar",
        caption:
          "Visual konseptual — ilustrasi suasana interior, bukan dokumentasi fotografi proyek.",
      },
    ],
    statusLabel: demoLabels.conceptual,
  },
  {
    slug: "paviliun-kerja-lantai-dasar",
    title: "Paviliun Kerja Lantai Dasar",
    category: "commercial",
    categoryLabel: "Commercial",
    summary:
      "Konsep fit-out ruang kerja konsultasi di lantai dasar dengan fasad netral dan struktur yang dibaca jelas.",
    locationLabel: "Koridor usaha urban (lokasi simulasi)",
    designConcept:
      "Structural minimal dan fasad netral: rangka dan partisi diekspos secara terkendali, sementara kulit luar tetap tenang agar mudah beradaptasi dengan konteks ruko atau deret komersial.",
    scope: [
      "Tata letak zona resepsi, ruang diskusi, dan area kerja staf",
      "Desain fasad lantai dasar yang permeable namun tetap menjaga privasi",
      "Koordinasi partisi, plafon teknis, dan jalur MEP konsep",
      "Pemilihan material tahan lalu-lalang pengunjung",
      "Paket Design & Build untuk fit-out interior–arsitektur ringan",
    ],
    area: {
      value: "± 112 m² lantai dasar",
      label: demoLabels.simulated,
    },
    budgetEstimate: {
      value: "Rp 980 juta–1,25 miliar (rentang konsep fit-out)",
      label: demoLabels.simulated,
    },
    duration: {
      value: "Desain 8 minggu · pelaksanaan konsep 5 bulan",
      label: demoLabels.simulated,
    },
    body: "Paviliun Kerja Lantai Dasar menjawab kebutuhan ruang konsultasi yang ingin terasa terbuka ke jalan tanpa kehilangan wibawa profesional. Fasad memakai kisi aluminium vertical yang rapat di zona meja kerja dan lebih longgar di area resepsi, sehingga siluet orang terbaca samar dari luar. Di dalam, kolom eksisting dijadikan sumbu grid: partisi kaca milk dan plywood berfinishing matte membagi ruang meeting kecil, booth diskusi, dan open desk. Plafon teknis digantung hanya di jalur servis, sementara zona utama dibiarkan lebih tinggi agar struktur atap atau pelat terbaca sebagai bagian dari estetika. Lantai vinyl komersial dan karpet tile modular dipilih agar perawatan mudah. Proyek ini adalah skenario komersial fiktif untuk menunjukkan kemampuan menyusun program kerja dalam kerangka Design & Build—bukan portofolio klien atau tenant yang sebenarnya.",
    highlights: [
      "Fasad netral yang menyesuaikan konteks koridor usaha",
      "Grid struktur sebagai alat organisasi ruang, bukan ornamen",
      "Hierarki privasi dari resepsi hingga ruang diskusi tertutup",
      "Detail material yang tahan intensitas kunjungan harian",
    ],
    visuals: [
      {
        id: "pkl-elevation",
        kind: "elevation",
        title: "Elevasi fasad kisi",
        caption:
          "Visual konseptual — elevasi fasad simulasi, bukan foto bangunan jadi milik KETEMU & Co.",
      },
      {
        id: "pkl-plan",
        kind: "floor-plan",
        title: "Layout lantai dasar",
        caption:
          "Visual konseptual — layout program ruang untuk presentasi.",
      },
      {
        id: "pkl-axon",
        kind: "axonometric",
        title: "Axonometri zona kerja",
        caption:
          "Visual konseptual — pembacaan volume interior secara skematik.",
      },
    ],
    statusLabel: demoLabels.conceptual,
  },
  {
    slug: "studio-cahaya-tengah",
    title: "Studio Cahaya Tengah",
    category: "interior",
    categoryLabel: "Interior",
    summary:
      "Konsep penataan apartemen open-plan yang menempatkan cahaya tengah sebagai pembagi zona kerja dan istirahat.",
    locationLabel: "Apartemen open-plan (lokasi simulasi)",
    designConcept:
      "Warm minimal dengan layered lighting: langit-langit dan furnitur rendah mengatur zona tanpa dinding penuh, sementara lapisan cahaya ambient, task, dan aksen menggantikan sekat keras.",
    scope: [
      "Zoning open-plan menjadi area kerja, lounge, dan tidur fleksibel",
      "Desain furnitur built-in rendah sebagai pembatas lunak",
      "Skema pencahayaan berlapis (ambient, task, accent)",
      "Pemilihan palet material hangat yang tidak memperkecil ruang",
      "Paket interior Design & Build untuk unit hunian vertikal",
    ],
    area: {
      value: "Unit ± 54 m²",
      label: demoLabels.simulated,
    },
    budgetEstimate: {
      value: "Rp 285–360 juta (rentang konsep interior)",
      label: demoLabels.simulated,
    },
    duration: {
      value: "Desain 5 minggu · pelaksanaan konsep 10 minggu",
      label: demoLabels.simulated,
    },
    body: "Studio Cahaya Tengah mengolah keterbatasan unit apartemen dengan satu keputusan utama: menarik cahaya dari bukaan utama sedalam mungkin ke tengah denah. Alih-alih dinding kamar penuh, headboard tinggi dan rak rendah membentuk “pulau” tidur yang masih meminjam cahaya ruang duduk. Meja kerja menghadap jendela dengan task light terarah, sementara strip LED di balik pelmet memberi glow malam tanpa silau. Material digarap hangat—kayu oak light, kain bouclé, dan cat off-white—agar ruang terasa lebih luas pada malam hari. Soft partition berupa tirai linen memisahkan zona tamu saat dibutuhkan. Konsep ini menampilkan sisi interior dari pendekatan Design & Build KETEMU & Co. dalam format presentasi; seluruh ukuran, anggaran, dan suasana adalah simulasi, bukan hasil survey unit atau foto proyek interior yang diklaim sebagai milik perusahaan.",
    highlights: [
      "Cahaya tengah sebagai alat zoning, bukan sekadar dekorasi",
      "Built-in rendah menggantikan dinding penuh di unit kecil",
      "Tiga lapisan pencahayaan untuk siang dan malam yang berbeda peran",
      "Palet hangat yang menjaga skala ruang tetap lega",
    ],
    visuals: [
      {
        id: "sct-plan",
        kind: "floor-plan",
        title: "Zoning open-plan",
        caption:
          "Visual konseptual — diagram zona unit simulasi, bukan denah unit milik klien.",
      },
      {
        id: "sct-interior",
        kind: "interior-concept",
        title: "Suasana cahaya tengah",
        caption:
          "Visual konseptual — ilustrasi interior; bukan foto staging apartemen nyata.",
      },
      {
        id: "sct-section",
        kind: "section",
        title: "Lapisan pencahayaan",
        caption:
          "Visual konseptual — skema lighting berlapis untuk presentasi.",
      },
    ],
    statusLabel: demoLabels.conceptual,
  },
] as const satisfies readonly ConceptualProject[];

export type ProjectSlug = (typeof projects)[number]["slug"];

export function getProjectBySlug(
  slug: string,
): (typeof projects)[number] | undefined {
  return projects.find((project) => project.slug === slug);
}
