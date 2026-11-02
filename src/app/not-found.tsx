import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section id="tidak-ditemukan" tone="default">
      <Container>
        <div className="flex max-w-xl flex-col gap-6 py-8">
          <div className="h-0.5 w-12 bg-orange-500" aria-hidden="true" />
          <p className="font-display text-sm font-semibold tracking-wide text-grey-600 uppercase">
            404
          </p>
          <Heading level={1}>Halaman tidak ditemukan</Heading>
          <p className="text-pretty text-lg leading-relaxed text-grey-600">
            Alamat yang Anda buka tidak tersedia di website demonstrasi KETEMU
            &amp; Co. Kembali ke beranda atau jelajahi proyek konseptual.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/">Ke beranda</Button>
            <Button href="/projects" variant="ghost">
              Lihat proyek
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
