import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TextLinkProps = {
  href: string;
  tone?: "navy" | "accent";
  external?: boolean;
  className?: string;
  children: ReactNode;
};

const toneClassName = {
  navy: "text-navy-800 hover:text-navy-700",
  accent: "text-orange-700 hover:text-orange-800",
} as const;

export function TextLink({
  href,
  tone = "navy",
  external = false,
  className,
  children,
}: TextLinkProps) {
  const classes = cn(
    "font-sans underline-offset-4 transition-colors hover:underline",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600",
    toneClassName[tone],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
