import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { contactCta } from "@/components/layout/nav";
import { homeHero } from "@/content/home";

/**
 * Home hero.
 * DRAFT — PENDING OWNER APPROVAL — copy lives in src/content/home.ts (homeHero).
 * Do not show draft labels in the public UI.
 */
export function HomeHero() {
  return (
    <section className="relative w-full overflow-x-hidden border-b border-grey-200 bg-white">
      <div className="grid md:grid-cols-12 md:min-h-[min(34rem,calc(100svh-5rem))] lg:min-h-[min(36rem,calc(100svh-5rem))]">
        <div className="relative z-10 flex flex-col justify-center bg-white md:col-span-5">
          <Container className="py-12 sm:py-14 md:py-16 lg:py-20">
            <div className="flex max-w-xl flex-col gap-8 md:max-w-md xl:max-w-lg">
              <Logo
                alt=""
                priority
                className="h-16 w-auto max-h-20 object-contain object-left sm:h-[4.5rem]"
              />

              <div className="flex flex-col gap-5">
                {/* DRAFT — PENDING OWNER APPROVAL */}
                <Heading level={1} className="gap-0">
                  {homeHero.heading}
                </Heading>

                {/* DRAFT — PENDING OWNER APPROVAL */}
                <p className="max-w-prose text-pretty text-lg leading-relaxed text-grey-600">
                  {homeHero.lead}
                </p>
              </div>

              <div>
                <Button
                  href={contactCta.href}
                  size="lg"
                  className="min-h-11 w-full sm:w-auto"
                >
                  {contactCta.label}
                </Button>
              </div>
            </div>
          </Container>
        </div>

        <div
          className="relative isolate min-h-48 overflow-hidden bg-navy-800 sm:min-h-52 md:col-span-7 md:min-h-full"
          aria-hidden="true"
        >
          <ArchitecturalPlane />
        </div>
      </div>
    </section>
  );
}

function ArchitecturalPlane() {
  return (
    <div className="absolute inset-0">
      {/* Structural blocks — angular, blueprint-like; no photos */}
      <div className="absolute inset-y-0 left-0 w-[42%] bg-navy-900" />
      <div className="absolute top-0 right-0 h-[58%] w-[62%] bg-navy-950" />
      <div className="absolute bottom-0 right-0 h-[48%] w-[48%] bg-navy-700" />

      {/* Roof / gable gesture */}
      <div
        className="absolute top-[12%] left-[18%] h-0 w-0 border-b-[min(28vw,14rem)] border-l-[min(22vw,11rem)] border-r-[min(22vw,11rem)] border-b-navy-700 border-l-transparent border-r-transparent opacity-90"
      />

      {/* Horizontal structure lines */}
      <div className="absolute top-[22%] right-0 h-px w-[72%] bg-navy-600/80" />
      <div className="absolute top-[38%] right-0 h-px w-[55%] bg-navy-600/60" />
      <div className="absolute top-[54%] left-[28%] h-px w-[72%] bg-navy-600/50" />
      <div className="absolute bottom-[28%] left-0 h-px w-full bg-navy-600/40" />

      {/* Vertical rhythm */}
      <div className="absolute inset-y-[18%] left-[36%] w-px bg-navy-600/50" />
      <div className="absolute inset-y-[30%] right-[22%] w-px bg-navy-600/40" />

      {/* Orange accent — rare structural mark */}
      <div className="absolute top-[18%] bottom-[32%] left-[36%] w-0.5 bg-orange-500" />
      <div className="absolute top-[18%] left-[36%] h-0.5 w-[min(28%,8rem)] bg-orange-500" />

      {/* Meeting / join motif (subtle interlocking bars) */}
      <div className="absolute right-[14%] bottom-[18%] h-16 w-16 sm:h-20 sm:w-20">
        <div className="absolute top-0 left-0 h-2 w-full bg-navy-600" />
        <div className="absolute top-0 left-0 h-full w-2 bg-navy-600" />
        <div className="absolute right-0 bottom-0 h-2 w-full bg-orange-500" />
        <div className="absolute right-0 bottom-0 h-full w-2 bg-orange-500" />
      </div>
    </div>
  );
}
