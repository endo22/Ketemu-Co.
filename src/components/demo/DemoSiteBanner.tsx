import { Container } from "@/components/ui/Container";
import { demoSiteBanner } from "@/content/demo";

export function DemoSiteBanner() {
  return (
    <div
      role="note"
      aria-label={demoSiteBanner.title}
      className="border-b border-navy-900 bg-navy-800 text-white"
    >
      <Container className="flex min-h-10 flex-col justify-center gap-0.5 py-2 sm:flex-row sm:items-center sm:gap-3 sm:py-0">
        <p className="font-sans text-xs font-semibold tracking-wide uppercase">
          {demoSiteBanner.title}
        </p>
        <p className="max-w-prose font-sans text-xs leading-snug text-white/90 sm:text-sm sm:leading-normal">
          {demoSiteBanner.description}
        </p>
      </Container>
    </div>
  );
}
