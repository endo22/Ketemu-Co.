import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = 1 | 2 | 3;

type HeadingProps = {
  level?: HeadingLevel;
  eyebrow?: string;
  className?: string;
  children: ReactNode;
};

const levelClassName: Record<HeadingLevel, string> = {
  1: "text-3xl font-semibold",
  2: "text-2xl font-semibold",
  3: "text-xl font-semibold",
};

const headingTag = {
  1: "h1",
  2: "h2",
  3: "h3",
} as const;

export function Heading({
  level = 2,
  eyebrow,
  className,
  children,
}: HeadingProps) {
  const Tag = headingTag[level];

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {eyebrow ? (
        <p className="font-display text-sm tracking-wide text-grey-600">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "font-display text-balance text-navy-800",
          levelClassName[level],
        )}
      >
        {children}
      </Tag>
    </div>
  );
}
