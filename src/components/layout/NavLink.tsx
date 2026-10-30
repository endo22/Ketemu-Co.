"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { isActivePath } from "@/components/layout/nav";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
};

export function NavLink({ href, children, className, onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const active = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
      className={cn(
        "font-sans text-base text-navy-800 transition-colors",
        "hover:text-navy-700",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600",
        active
          ? "font-semibold underline decoration-2 underline-offset-8"
          : "font-medium",
        className,
      )}
    >
      {children}
    </Link>
  );
}
