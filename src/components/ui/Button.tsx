import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonSharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonSharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonSharedProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonSharedProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof ButtonSharedProps | "href"
  > & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-800 text-white hover:bg-navy-900 focus-visible:outline-navy-600",
  secondary:
    "bg-orange-500 text-navy-800 hover:bg-orange-600 focus-visible:outline-navy-600",
  ghost:
    "border border-grey-300 bg-transparent text-navy-800 hover:bg-grey-100 focus-visible:outline-navy-600",
};

const sizeClassName: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 py-2 text-sm",
  md: "min-h-11 px-4 py-2.5 text-base",
  lg: "min-h-12 px-6 py-3 text-lg",
};

function buttonClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center rounded-md font-sans font-medium transition-colors",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    variantClassName[variant],
    sizeClassName[size],
    className,
  );
}

export function Button(props: ButtonProps) {
  if (typeof props.href === "string") {
    const {
      href,
      children,
      className,
      variant = "primary",
      size = "md",
      ...linkRest
    } = props;

    return (
      <Link
        href={href}
        className={buttonClassName(variant, size, className)}
        {...linkRest}
      >
        {children}
      </Link>
    );
  }

  const {
    children,
    className,
    variant = "primary",
    size = "md",
    type = "button",
    ...buttonRest
  } = props;

  return (
    <button
      type={type}
      className={buttonClassName(variant, size, className)}
      {...buttonRest}
    >
      {children}
    </button>
  );
}
