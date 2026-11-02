/**
 * Insights — fictional editorial articles for the demo website.
 */

import { demoLabels } from "./demo";

export const insightsIntro = {
  heading: "Insights",
  lead: "Catatan editorial seputar desain tropis, ventilasi, tahapan konstruksi, renovasi, anggaran, dan pencahayaan interior—disusun sebagai materi presentasi.",
} as const;

export const insightCategoryFilters = [
  { id: "all", label: "Semua" },
  { id: "desain", label: "Desain" },
  { id: "konstruksi", label: "Konstruksi" },
  { id: "renovasi", label: "Renovasi" },
  { id: "interior", label: "Interior" },
] as const;

export type InsightCategoryFilterId =
  (typeof insightCategoryFilters)[number]["id"];

export type InsightCategory = Exclude<InsightCategoryFilterId, "all">;

export type InsightAuthor = {
  name: string;
  statusLabel: typeof demoLabels.author;
};

export type InsightArticle = {
  slug: string;
  title: string;
  category: InsightCategory;
  categoryLabel: string;
  summary: string;
  publishedAt: string;
  publishedAtLabel: typeof demoLabels.simulated;
  readingTime: string;
  readingTimeLabel: typeof demoLabels.simulated;
  author: InsightAuthor;
  coverKind: "diagram" | "section" | "plan" | "light" | "material" | "process";
  coverCaption: string;
  sections: readonly { heading: string; paragraphs: readonly string[] }[];
};

export const articles: readonly InsightArticle[] = [
  {
    slug: "prinsip-desain-rumah-tropis-modern",
    title: "Prinsip desain rumah tropis modern",
    category: "desain",
    categoryLabel: "Desain",
    summary:
      "Lima prinsip yang menjaga rumah tropis tetap sejuk, terang, dan mudah dirawat tanpa mengorbankan kejelasan ruang.",
    publishedAt: "12 Maret 2026",
    publishedAtLabel: demoLabels.simulated,
    readingTime: "7 menit baca",
    readingTimeLabel: demoLabels.simulated,
    author: { name: "Maya Siregar", statusLabel: demoLabels.author },
    coverKind: "diagram",
    coverCaption:
      "Visual konseptual — diagram prinsip tropis, bukan foto rumah klien.",
    sections: [
      {
        heading: "Mulai dari iklim, bukan dari gaya",
        paragraphs: [
          "Rumah tropis modern bukan soal atap miring atau material ekspos semata. Yang menentukan kenyamanan adalah bagaimana massa merespons panas, hujan, dan kelembapan. Orientasi, overstek, dan bukaan saling berhubungan.",
          "Sebelum memilih finishing, tentukan dulu arah angin yang diandaikan pada tapak, letak matahari pagi–sore, serta zona basah yang menghasilkan uap. Keputusan estetika menyusul setelah kerangka iklim jelas.",
        ],
      },
      {
        heading: "Lima prinsip yang sering terbukti berguna",
        paragraphs: [
          "Pertama, sempitkan lebar massa agar udara lebih mudah melintas. Kedua, berikan teras atau selasar sebagai buffer sebelum ruang inti. Ketiga, naikkan plafon pada zona berkumpul agar panas naik menjauh dari tubuh.",
          "Keempat, pilih material dinding yang tidak menyimpan panas berlebihan di siang hari. Kelima, rancang bukaan yang bisa diatur—kisi, jendela mati di atas, dan pintu yang membuka ke halaman—bukan kaca full-height tanpa naungan.",
        ],
      },
      {
        heading: "Menjaga modernitas tanpa kehilangan nafas",
        paragraphs: [
          "Modernitas di tropis sering kali berarti garis bersih dan sedikit ornamen. Tetap sediakan ketebalan dinding, kedalaman balkon, dan vegetasi yang menahan silau. Ruang yang “ringan” secara visual tetap butuh massa yang meneduhkan.",
        ],
      },
    ],
  },
  {
    slug: "pentingnya-ventilasi-silang",
    title: "Pentingnya ventilasi silang",
    category: "desain",
    categoryLabel: "Desain",
    summary:
      "Mengapa bukaan berseberangan lebih berpengaruh pada kenyamanan siang hari dibanding menambah pendingin udara terlalu dini.",
    publishedAt: "28 Februari 2026",
    publishedAtLabel: demoLabels.simulated,
    readingTime: "6 menit baca",
    readingTimeLabel: demoLabels.simulated,
    author: { name: "Bima Nugraha", statusLabel: demoLabels.author },
    coverKind: "section",
    coverCaption:
      "Visual konseptual — potongan aliran udara simulasi, bukan audit termal lapangan.",
    sections: [
      {
        heading: "Udara perlu jalur masuk dan keluar",
        paragraphs: [
          "Ventilasi silang terjadi ketika udara punya tekanan berbeda di dua sisi ruang dan menemukan jalur yang relatif lurus. Satu jendela besar di sisi panas tanpa bukaan di sisi lain hanya menumpuk udara hangat.",
          "Dalam denah, sejajarkan ruang makan atau ruang keluarga dengan dua fasad yang berlawanan. Hindari koridor buntu yang memutus aliran menuju kamar tidur.",
        ],
      },
      {
        heading: "Peran kisi dan tinggi bukaan",
        paragraphs: [
          "Kisi di bagian bawah membantu udara masuk dekat lantai, sementara bukaan tinggi mengeluarkan udara yang sudah memanas. Kombinasi ini sering lebih efektif daripada menambah AC berkapasitas besar sejak awal.",
        ],
      },
      {
        heading: "Batasan yang perlu diingat",
        paragraphs: [
          "Ventilasi silang bergantung pada konteks tapak. Di kawasan padat dengan polusi atau kebisingan, strategi perlu digabung dengan halaman dalam, filter vegetasi, atau mode campuran dengan pendinginan mekanis pada jam puncak.",
        ],
      },
    ],
  },
  {
    slug: "memahami-tahapan-konstruksi-rumah",
    title: "Memahami tahapan konstruksi rumah",
    category: "konstruksi",
    categoryLabel: "Konstruksi",
    summary:
      "Ringkasan urutan kerja dari persiapan tapak hingga finishing agar pemilik rumah tahu apa yang wajar ditanyakan di setiap tahap.",
    publishedAt: "5 Februari 2026",
    publishedAtLabel: demoLabels.simulated,
    readingTime: "8 menit baca",
    readingTimeLabel: demoLabels.simulated,
    author: { name: "Raka Mahendra", statusLabel: demoLabels.author },
    coverKind: "process",
    coverCaption:
      "Visual konseptual — diagram tahapan kerja, bukan jadwal proyek nyata.",
    sections: [
      {
        heading: "Urutan yang jarang boleh dibolak-balik",
        paragraphs: [
          "Konstruksi rumah tipikal bergerak dari pekerjaan tanah dan pondasi, struktur, dinding dan atap, utilitas kasar, lalu finishing. Mempercepat finishing sebelum atap dan utilitas siap biasanya hanya menambah koreksi.",
          "Pemilik rumah cukup memahami titik kontrol: uji tanah jika diperlukan, pengecoran struktur, kedap atap, posisi utilitas, dan quality check finishing basah maupun kering.",
        ],
      },
      {
        heading: "Dokumen yang menemani lapangan",
        paragraphs: [
          "Gambar kerja, spesifikasi material, dan daftar revisi adalah bahasa bersama antara perancang dan pelaksana. Tanpa dokumen yang sama, keputusan di lapangan mudah bergeser tanpa disadari.",
        ],
      },
      {
        heading: "Kapan wajar menunda keputusan estetika",
        paragraphs: [
          "Warna cat akhir atau model handle pintu boleh menunggu. Yang tidak boleh menunggu adalah posisi shaft, kemiringan atap, dan jalur drainase. Keputusan struktural dan utilitas lebih mahal bila diubah belakangan.",
        ],
      },
    ],
  },
  {
    slug: "renovasi-rumah-lama-menjadi-ruang-modern",
    title: "Renovasi rumah lama menjadi ruang modern",
    category: "renovasi",
    categoryLabel: "Renovasi",
    summary:
      "Cara membaca bangunan existing, memilih intervensi terfokus, dan menjaga hunian tetap bisa dipakai selama renovasi bertahap.",
    publishedAt: "18 Januari 2026",
    publishedAtLabel: demoLabels.simulated,
    readingTime: "7 menit baca",
    readingTimeLabel: demoLabels.simulated,
    author: { name: "Alya Prameswari", statusLabel: demoLabels.author },
    coverKind: "plan",
    coverCaption:
      "Visual konseptual — skema renovasi, bukan dokumentasi sebelum/sesudah klien.",
    sections: [
      {
        heading: "Jangan mulai dari moodboard",
        paragraphs: [
          "Renovasi yang sehat dimulai dari audit: dinding penahan, bukaan existing, kelembapan, dan pola pergerakan keluarga. Moodboard material baru baru berguna setelah Anda tahu apa yang layak dipertahankan.",
          "Sering kali solusi terbaik bukan membongkar seluruh massa, melainkan menyisipkan selasar, membuka dapur ke ruang makan, atau memperbaiki cahaya di koridor yang gelap.",
        ],
      },
      {
        heading: "Intervensi terfokus menghemat energi",
        paragraphs: [
          "Pilih satu atau dua zona yang paling mengubah pengalaman harian. Dapur, ruang berkumpul, dan area masuk biasanya memberi dampak lebih besar daripada mengganti seluruh finishing kamar tidur sekaligus.",
        ],
      },
      {
        heading: "Menghuni sambil membangun",
        paragraphs: [
          "Jika rumah tetap dihuni, pecah pekerjaan menjadi tahap yang menutup debu dan menjaga akses dapur serta kamar mandi. Komunikasi urutan kerja sama pentingnya dengan pilihan material modern.",
        ],
      },
    ],
  },
  {
    slug: "perencanaan-anggaran-konstruksi",
    title: "Perencanaan anggaran konstruksi",
    category: "konstruksi",
    categoryLabel: "Konstruksi",
    summary:
      "Cara menyusun rentang biaya yang jujur, memisahkan kebutuhan vs keinginan, dan menyiapkan cadangan untuk ketidakpastian lapangan.",
    publishedAt: "9 Januari 2026",
    publishedAtLabel: demoLabels.simulated,
    readingTime: "6 menit baca",
    readingTimeLabel: demoLabels.simulated,
    author: { name: "Hendra Kusuma", statusLabel: demoLabels.author },
    coverKind: "material",
    coverCaption:
      "Visual konseptual — skema anggaran presentasi, bukan quotation resmi.",
    sections: [
      {
        heading: "Anggaran adalah rentang, bukan satu angka magis",
        paragraphs: [
          "Pada tahap konsep, lebih sehat berbicara dalam rentang. Harga material dan upah berubah; kondisi tanah dan revisi pemilik menambah ketidakpastian. Satu angka tetap terlalu dini sering menyesatkan.",
          "Pisahkan biaya struktur, arsitektur, MEP, finishing, dan furniture. Cadangan 10–15 persen pada proyek tipikal membantu menyerap kejutan tanpa menghentikan pekerjaan.",
        ],
      },
      {
        heading: "Nilai rekayasa tanpa mengorbankan inti",
        paragraphs: [
          "Potong elemen yang tidak memengaruhi kenyamanan utama: ornamen sekunder, material impor yang sulit diganti, atau spek berlebih pada zona jarang dipakai. Pertahankan investasi pada atap, kedap air, dan bukaan yang menentukan iklim dalam ruang.",
        ],
      },
      {
        heading: "Transparansi lebih penting dari diskon",
        paragraphs: [
          "Minta breakdown yang bisa dibandingkan antar opsi. Diskon besar tanpa kejelasan lingkup biasanya hanya memindahkan biaya ke perubahan perintah kerja di kemudian hari.",
        ],
      },
    ],
  },
  {
    slug: "strategi-pencahayaan-interior",
    title: "Strategi pencahayaan interior",
    category: "interior",
    categoryLabel: "Interior",
    summary:
      "Tiga lapisan cahaya—ambient, task, dan accent—untuk ruang yang nyaman di siang maupun malam tanpa silau berlebih.",
    publishedAt: "22 Desember 2025",
    publishedAtLabel: demoLabels.simulated,
    readingTime: "5 menit baca",
    readingTimeLabel: demoLabels.simulated,
    author: { name: "Nisa Kartika", statusLabel: demoLabels.author },
    coverKind: "light",
    coverCaption:
      "Visual konseptual — skema lighting berlapis, bukan foto staging interior.",
    sections: [
      {
        heading: "Jangan mengandalkan satu titik lampu",
        paragraphs: [
          "Satu chandelier di tengah ruang sering menghasilkan bayangan keras dan sudut gelap. Ambient merata, task terarah, dan accent yang menandai tekstur atau artwork memberi hierarki yang lebih nyaman.",
          "Di unit kecil, strip LED tersembunyi dan task light di meja kerja sering lebih efektif daripada downlight berlimpah yang menyilaukan.",
        ],
      },
      {
        heading: "Sinkronkan dengan cahaya siang",
        paragraphs: [
          "Rancang posisi meja baca atau dapur menghadap bukaan utama bila memungkinkan. Cahaya buatan melengkapi, bukan menggantikan, jalur cahaya alami yang sudah Anda bangun di denah.",
        ],
      },
      {
        heading: "Warna suhu dan kontrol",
        paragraphs: [
          "Suhu warna hangat cocok untuk zona istirahat; netral lebih aman di area kerja. Dimmer atau sakelar zona membantu menyesuaikan malam minggu dengan malam produktif tanpa mengganti seluruh fitting.",
        ],
      },
    ],
  },
] as const;

export const insightsCta = {
  heading: "Punya pertanyaan seputar proyek Anda?",
  body: "Ceritakan kebutuhan Design & Build Anda kepada KETEMU & Co. Artikel di halaman ini bersifat editorial demo.",
} as const;

export function getArticleBySlug(
  slug: string,
): (typeof articles)[number] | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(
  slug: string,
  limit = 3,
): readonly InsightArticle[] {
  const current = getArticleBySlug(slug);
  if (!current) {
    return articles.slice(0, limit);
  }

  const sameCategory = articles.filter(
    (article) =>
      article.slug !== slug && article.category === current.category,
  );
  const others = articles.filter(
    (article) =>
      article.slug !== slug && article.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
}
