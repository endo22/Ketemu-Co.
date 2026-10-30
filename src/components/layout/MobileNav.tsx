"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { NavLink } from "@/components/layout/NavLink";
import { contactCta, primaryNav } from "@/components/layout/nav";
import { cn } from "@/lib/cn";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const reactId = useId();
  const panelId = `ketemu-mobile-nav-${reactId.replace(/:/g, "")}`;
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function closeMenu(options?: { restoreFocus?: boolean }) {
    setOpen(false);
    if (options?.restoreFocus) {
      queueMicrotask(() => {
        menuButtonRef.current?.focus();
      });
    }
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const main = document.getElementById("main");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (main) {
      main.inert = true;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        queueMicrotask(() => {
          menuButtonRef.current?.focus();
        });
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      if (main) {
        main.inert = false;
      }
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        className={cn(
          "inline-flex size-11 items-center justify-center rounded-md text-navy-800",
          "hover:bg-grey-100",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600",
        )}
        aria-label={open ? "Tutup menu" : "Buka menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open ? (
        <div className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-navy-950/40"
            aria-label="Tutup menu"
            onClick={() => closeMenu()}
          />

          <div
            id={panelId}
            className="absolute inset-x-0 top-0 flex max-h-full flex-col border-b border-grey-200 bg-white shadow-soft"
          >
            <nav
              aria-label="Navigasi utama"
              className="overflow-y-auto px-4 py-6"
            >
              <ul className="flex flex-col gap-1">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      href={item.href}
                      className="block min-h-11 px-2 py-3 no-underline"
                      onNavigate={() => closeMenu()}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-grey-200 px-4 py-4">
              <Button
                href={contactCta.href}
                size="md"
                className="w-full"
                onClick={() => closeMenu()}
              >
                {contactCta.label}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
}
