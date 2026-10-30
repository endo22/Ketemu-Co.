import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  tone?: "default" | "muted";
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  tone = "default",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-section",
        tone === "muted" && "bg-grey-100",
        className,
      )}
    >
      {children}
    </section>
  );
}
