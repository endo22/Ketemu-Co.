import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** Pass empty string when the logo sits inside a named link. */
  alt?: string;
  priority?: boolean;
  className?: string;
};

const LOGO_SRC = "/images/logo/ketemu-logo.png";
const LOGO_WIDTH = 2480;
const LOGO_HEIGHT = 3509;

export function Logo({
  alt = "KETEMU & Co.",
  priority = false,
  className,
}: LogoProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt={alt}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      sizes="(max-width: 768px) 96px, 112px"
      className={cn(
        "h-12 w-auto max-h-14 object-contain object-left sm:h-14",
        className,
      )}
    />
  );
}
