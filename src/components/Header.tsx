"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import Logo from "./Logo";

const homeAnchors = [
  { href: "/#reviews", full: "What people say", short: "Reviews" },
  { href: "/#about", full: "Hey, I'm Nick", short: "Nick" },
  { href: "/#how-it-works", full: "How we train", short: "Train" },
  { href: "/#faq", full: "Questions", short: "Questions" },
] as const;

const menuItems = [
  ...homeAnchors.map((item) => ({
    href: item.href,
    label: item.full,
    short: item.short,
  })),
  { href: "/guides/", label: "Free guides", short: "Guides" },
  { href: "/contact/", label: "Get started", short: "Get started", cta: true },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.body.dataset.navOpen = "true";

    const panel = panelRef.current;
    const focusables = panel
      ? Array.from(
          panel.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        )
      : [];
    focusables[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      delete document.body.dataset.navOpen;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [open, close]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) close();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [close]);

  return (
    <header className="site-header sticky top-0 z-40">
      <div className="site-header-inner">
        <Logo variant="primary" width={160} />

        <nav className="site-nav site-nav-desktop" aria-label="Primary">
          {homeAnchors.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              <span className="nav-link-full">{item.full}</span>
              <span className="nav-link-short">{item.short}</span>
            </a>
          ))}
          <Link href="/guides/" className="nav-link">
            <span className="nav-link-full">Free guides</span>
            <span className="nav-link-short">Guides</span>
          </Link>
          <Link href="/contact/" className="btn btn-nav">
            Get started
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        className={`nav-overlay${open ? " is-open" : ""}`}
        hidden={!open}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div
          ref={panelRef}
          id={panelId}
          className="nav-overlay-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div
            className="nav-overlay-top"
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a.site-logo")) {
                close();
              }
            }}
          >
            <Logo variant="primary" width={140} />
            <button
              type="button"
              className="nav-overlay-close"
              aria-label="Close menu"
              onClick={close}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav className="nav-overlay-nav" aria-label="Mobile primary">
            {menuItems.map((item) =>
              item.href.startsWith("/#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={
                    "cta" in item && item.cta
                      ? "nav-overlay-link nav-overlay-cta"
                      : "nav-overlay-link"
                  }
                  onClick={close}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "cta" in item && item.cta
                      ? "nav-overlay-link nav-overlay-cta"
                      : "nav-overlay-link"
                  }
                  onClick={close}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
