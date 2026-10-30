import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerTag = "div" | "main" | "article" | "aside";

type ContainerProps = {
  as?: ContainerTag;
  bleed?: boolean;
  className?: string;
  children: ReactNode;
};

export function Container({
  as: Tag = "div",
  bleed = false,
  className,
  children,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        bleed
          ? "w-full max-w-none px-0"
          : "mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
