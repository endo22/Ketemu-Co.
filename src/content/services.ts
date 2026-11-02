/**
 * Services page — fictional demo content for presentation.
 */

export const servicesIntro = {
  heading: "Layanan",
  lead: "KETEMU & Co. menyusun layanan arsitektur, konstruksi, renovasi, interior, dan Design & Build dalam satu alur kerja yang terkoordinasi—dari konsep hingga serah terima.",
} as const;

export type ServiceId =
  | "architecture"
  | "construction"
  | "renovation"
  | "interior"
  | "design-build";

export type ServiceItem = {
  id: ServiceId;
  title: string;
  summary: string;
  description: string;
  deliverables: readonly string[];
  idealFor: string;
  hrefAnchor: string;
};

export const services: readonly ServiceItem[] = [
  {
    id: "architecture",
    title: "Architecture Design",
    summary:
      "Perencanaan arsitektur yang menyeimbangkan program ruang, iklim, dan karakter bangunan.",
    description:
      "Layanan Architecture Design mencakup penyusunan konsep massa, denah, fasad, dan gambar teknis yang siap dilanjutkan ke tahap konstruksi. Kami menekankan orientasi tapak, sirkulasi, dan detail yang dapat dieksekusi di lapangan—bukan sekadar visual presentasi.",
    deliverables: [
      "Architectural planning dan programming ruang",
      "Space planning dan diagram sirkulasi",
      "Concept development serta studi massa",
      "Facade design dan skema material",
      "Technical drawings tingkat konsep hingga detail terpilih",
    ],
    idealFor:
      "Pemilik lahan atau pengembang yang membutuhkan arah desain jelas sebelum memulai konstruksi.",
    hrefAnchor: "architecture",
  },
  {
    id: "construction",
    title: "Construction",
    summary:
      "Pelaksanaan konstruksi dengan koordinasi lapangan, kontrol mutu, dan disiplin jadwal.",
    description:
      "Construction di KETEMU & Co. menempatkan dokumentasi desain sebagai acuan kerja. Kami mengorkestrasi pekerjaan struktur, arsitektur, material, dan koordinasi site agar keputusan di lapangan tetap selaras dengan intent desain.",
    deliverables: [
      "Structural work sesuai paket kerja yang disepakati",
      "Architectural work dan finishing terkontrol",
      "Material execution dan pengawasan pemasangan",
      "Site coordination antar disiplin",
      "Quality control berbasis checklist tahapan",
    ],
    idealFor:
      "Klien yang sudah memiliki desain dan membutuhkan mitra pelaksanaan yang disiplin terhadap detail.",
    hrefAnchor: "construction",
  },
  {
    id: "renovation",
    title: "Renovation",
    summary:
      "Transformasi bangunan existing dengan menghormati jejak struktur dan memperbarui pengalaman ruang.",
    description:
      "Renovasi dimulai dari pembacaan kondisi existing: bukaan, utilitas, dan pola hunian. Intervensi difokuskan pada perbaikan layout, penggantian material, dan penyambungan zona yang sebelumnya terputus—tanpa membongkar yang masih bernilai.",
    deliverables: [
      "Existing condition assessment (skenario kerja)",
      "Layout improvement dan penataan ulang program",
      "Material replacement yang selaras dengan karakter lama",
      "Space transformation pada zona prioritas",
    ],
    idealFor:
      "Pemilik rumah atau ruang usaha yang ingin memperbarui fungsi tanpa kehilangan identitas bangunan.",
    hrefAnchor: "renovation",
  },
  {
    id: "interior",
    title: "Interior Design",
    summary:
      "Penataan interior yang mengatur cahaya, furnitur, dan detail agar ruang terasa jelas dan nyaman.",
    description:
      "Interior Design diarahkan pada zoning, layout furnitur, skema pencahayaan berlapis, serta pemilihan material yang tahan pakai. Detail edge, joinery, dan finishing disusun agar mudah dieksekusi dalam kerangka Design & Build.",
    deliverables: [
      "Interior concept dan mood material",
      "Furniture layout dan sirkulasi dalam ruang",
      "Lighting planning (ambient, task, accent)",
      "Material selection dan finishing schedule",
      "Interior detailing untuk built-in dan elemen kunci",
    ],
    idealFor:
      "Unit apartemen, rumah, atau ruang kerja yang membutuhkan penataan interior terintegrasi.",
    hrefAnchor: "interior",
  },
  {
    id: "design-build",
    title: "Design & Build",
    summary:
      "Satu mitra untuk desain dan pelaksanaan—koordinasi anggaran, jadwal, dan mutu dalam satu tanggung jawab.",
    description:
      "Design & Build menyatukan keputusan desain dengan realitas biaya dan metode konstruksi sejak awal. Anggaran, jadwal, dan eksekusi dikawal dalam satu alur agar perubahan tetap terukur dan serah terima lebih jelas.",
    deliverables: [
      "Integrated design and construction planning",
      "Budget planning dan opsi nilai rekayasa",
      "Schedule coordination lintas tahap",
      "Project execution dengan titik kontrol mutu",
      "Handover dan dokumentasi serah terima",
    ],
    idealFor:
      "Klien yang menginginkan satu titik koordinasi dari konsep hingga bangunan siap pakai.",
    hrefAnchor: "design-build",
  },
] as const;

export const servicesProcess = {
  heading: "Proses kerja layanan",
  lead: "Alur generik yang kami sesuaikan dengan skala dan jenis proyek.",
  steps: [
    {
      title: "Konsultasi",
      body: "Memahami tujuan, batasan tapak, dan ekspektasi penggunaan ruang.",
    },
    {
      title: "Analisis kebutuhan",
      body: "Menyusun program ruang, prioritas, dan parameter teknis awal.",
    },
    {
      title: "Konsep dan desain",
      body: "Mengembangkan opsi massa, denah, dan bahasa arsitektur yang koheren.",
    },
    {
      title: "Perencanaan biaya",
      body: "Menyelaraskan lingkup dengan rentang anggaran dan metode pelaksanaan.",
    },
    {
      title: "Pelaksanaan",
      body: "Mengorkestrasi pekerjaan lapangan dengan kontrol dokumen dan mutu.",
    },
    {
      title: "Serah terima",
      body: "Menutup proyek dengan checklist, dokumentasi, dan penjelasan operasional.",
    },
  ],
} as const;

export const servicesFaq = {
  heading: "FAQ layanan",
  items: [
    {
      question: "Apakah setiap layanan bisa diambil terpisah?",
      answer:
        "Bisa. Architecture, Construction, Renovation, dan Interior dapat berdiri sendiri. Design & Build dipilih bila Anda ingin desain dan pelaksanaan dalam satu koordinasi.",
    },
    {
      question: "Apakah ada daftar harga resmi di situs ini?",
      answer:
        "Tidak. Angka yang mungkin muncul di situs demo bersifat DATA SIMULASI untuk presentasi, bukan tarif resmi KETEMU & Co.",
    },
    {
      question: "Bagaimana memulai diskusi proyek?",
      answer:
        "Gunakan halaman Kontak untuk menceritakan jenis layanan, lokasi, dan perkiraan kebutuhan. Percakapan awal membantu menyaring lingkup yang relevan.",
    },
  ],
} as const;

export const servicesCta = {
  heading: "Diskusikan kebutuhan layanan Anda",
  body: "Ceritakan jenis bangunan, tahap yang sedang Anda hadapi, dan target waktu. Kami bantu memetakan layanan yang paling relevan.",
} as const;
