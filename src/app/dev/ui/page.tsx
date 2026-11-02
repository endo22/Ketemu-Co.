import Link from "next/link";
import { notFound } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";

export default function UiPrimitivesPreviewPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return (
    <div className="min-h-screen bg-grey-50 text-navy-800">
      <Section>
        <Container>
          <Heading level={1} eyebrow="Development only · /dev/ui">
            KETEMU & Co. — UI Primitives Preview
          </Heading>
          <p className="mt-4 max-w-prose font-sans text-base text-grey-600">
            Sandbox sementara untuk visual QA Phase 2C. Route ini hanya aktif
            saat{" "}
            <code className="font-mono text-sm text-navy-800">
              NODE_ENV=development
            </code>
            .
          </p>
        </Container>
      </Section>

      {/* A. Container */}
      <Section tone="muted">
        <Container>
          <Heading level={2} eyebrow="Layout">
            A. Container
          </Heading>
          <p className="mt-3 font-sans text-sm text-grey-600">
            Label: normal · max-w-content · padding responsif
          </p>
        </Container>

        <div className="mt-8 space-y-6">
          <div>
            <Container>
              <p className="font-sans text-sm text-grey-600">
                Mode: <strong className="text-navy-800">normal</strong> ·
                viewport labels: 375 / 768 / 1440
              </p>
              <div className="mt-3 border border-grey-300 bg-white px-4 py-6 font-sans text-sm text-navy-800">
                Konten di dalam Container normal. Lebar dibatasi token content;
                padding horizontal mengikuti breakpoint.
              </div>
            </Container>
          </div>

          <div>
            <p className="mb-3 px-4 font-sans text-sm text-grey-600 sm:px-6 lg:px-8">
              Mode: <strong className="text-navy-800">bleed</strong> · tanpa
              max-width / padding horizontal
            </p>
            <Container bleed>
              <div className="border-y border-grey-300 bg-navy-800 px-4 py-6 font-sans text-sm text-white sm:px-6 lg:px-8">
                Konten bleed edge-to-edge. Gunakan untuk media full-width.
              </div>
            </Container>
          </div>
        </div>
      </Section>

      {/* B. Section */}
      <Section>
        <Container>
          <Heading level={2} eyebrow="Layout">
            B. Section
          </Heading>
          <p className="mt-3 font-sans text-sm text-grey-600">
            Section default (tanpa muted). Perhatikan{" "}
            <code className="font-mono text-navy-800">py-section</code>.
          </p>
        </Container>
      </Section>
      <Section tone="muted">
        <Container>
          <Heading level={3}>Section muted berurutan</Heading>
          <p className="mt-3 font-sans text-base text-grey-600">
            Section muted (#EEF1F5) langsung setelah default — evaluasi
            penumpukan vertical spacing antar section.
          </p>
        </Container>
      </Section>

      {/* C. Heading */}
      <Section>
        <Container>
          <Heading level={2} eyebrow="Typography">
            C. Heading
          </Heading>

          <div className="mt-10 space-y-10">
            <div className="space-y-4">
              <p className="font-sans text-sm text-grey-600">Level 1 · pendek</p>
              <Heading level={1}>Bangun dengan ketelitian</Heading>
            </div>

            <div className="space-y-4">
              <p className="font-sans text-sm text-grey-600">
                Level 1 · eyebrow · teks panjang
              </p>
              <Heading level={1} eyebrow="Konstruksi & arsitektur">
                Merancang dan membangun ruang yang kuat, fungsional, dan
                menghargai konteks lingkungan sekitar proyek
              </Heading>
            </div>

            <div className="space-y-4">
              <p className="font-sans text-sm text-grey-600">Level 2 · pendek</p>
              <Heading level={2}>Layanan inti</Heading>
            </div>

            <div className="space-y-4">
              <p className="font-sans text-sm text-grey-600">
                Level 2 · eyebrow · teks panjang
              </p>
              <Heading level={2} eyebrow="Portofolio">
                Proyek residensial dan komersial yang menekankan struktur,
                material, dan koordinasi lapangan yang rapi
              </Heading>
            </div>

            <div className="space-y-4">
              <p className="font-sans text-sm text-grey-600">Level 3 · pendek</p>
              <Heading level={3}>Detail teknis</Heading>
            </div>

            <div className="space-y-4">
              <p className="font-sans text-sm text-grey-600">
                Level 3 · tanpa eyebrow · wrapping
              </p>
              <Heading level={3}>
                Spesifikasi material, jadwal pengerjaan, dan koordinasi vendor
                untuk memastikan hasil akhir sesuai gambar kerja dan standar
                mutu
              </Heading>
            </div>
          </div>
        </Container>
      </Section>

      {/* D. Button */}
      <Section tone="muted">
        <Container>
          <Heading level={2} eyebrow="Actions">
            D. Button
          </Heading>

          <div className="mt-10 space-y-10">
            <div>
              <Heading level={3}>Primary</Heading>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">
                  Primary sm
                </Button>
                <Button variant="primary" size="md">
                  Primary md
                </Button>
                <Button variant="primary" size="lg">
                  Primary lg
                </Button>
              </div>
            </div>

            <div>
              <Heading level={3}>Secondary</Heading>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Button variant="secondary" size="sm">
                  Secondary sm
                </Button>
                <Button variant="secondary" size="md">
                  Secondary md
                </Button>
                <Button variant="secondary" size="lg">
                  Secondary lg
                </Button>
              </div>
            </div>

            <div>
              <Heading level={3}>Ghost</Heading>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Button variant="ghost" size="sm">
                  Ghost sm
                </Button>
                <Button variant="ghost" size="md">
                  Ghost md
                </Button>
                <Button variant="ghost" size="lg">
                  Ghost lg
                </Button>
              </div>
            </div>

            <div>
              <Heading level={3}>States & navigation</Heading>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Button type="button">Native button</Button>
                <Button type="button" disabled>
                  Disabled
                </Button>
                <Button href="/">Ke beranda (/)</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* E. TextLink */}
      <Section>
        <Container>
          <Heading level={2} eyebrow="Actions">
            E. TextLink
          </Heading>
          <ul className="mt-6 max-w-prose list-disc space-y-3 pl-5 font-sans text-base text-grey-600">
            <li>
              Navy internal:{" "}
              <TextLink href="/" tone="navy">
                Kembali ke beranda
              </TextLink>
            </li>
            <li>
              Accent internal:{" "}
              <TextLink href="/" tone="accent">
                Lihat beranda (accent)
              </TextLink>
            </li>
            <li>
              External resmi:{" "}
              <TextLink
                href="https://nextjs.org/docs"
                tone="navy"
                external
              >
                Next.js documentation
              </TextLink>
            </li>
          </ul>
        </Container>
      </Section>

      {/* F. Logo */}
      <Section tone="muted">
        <Container>
          <Heading level={2} eyebrow="Brand">
            F. Logo
          </Heading>
          <p className="mt-3 max-w-prose font-sans text-sm text-grey-600">
            Stacked lockup pada permukaan terang. Periksa rasio alami dan
            pemotongan di mobile vs desktop.
          </p>

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="mb-4 font-sans text-sm text-grey-600">
                Mobile scale (h-12 / 48px)
              </p>
              <div className="border border-grey-300 bg-white p-6">
                <Logo className="h-12 max-h-12 sm:h-12" />
              </div>
            </div>
            <div>
              <p className="mb-4 font-sans text-sm text-grey-600">
                Desktop scale (h-14 / 56px)
              </p>
              <div className="border border-grey-300 bg-white p-6">
                <Logo className="h-14 max-h-14 sm:h-14" />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-4 font-sans text-sm text-grey-600">
              Default komponen (responsif) + contoh dekoratif di dalam link
            </p>
            <div className="border border-grey-300 bg-white p-6">
              <Link
                href="/"
                aria-label="KETEMU & Co. beranda"
                className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600"
              >
                <Logo alt="" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
