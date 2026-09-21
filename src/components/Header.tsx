"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { ENROLL_HREF, ENROLL_LABEL, PORTAL_HREF, PORTAL_LABEL } from "@/data/siteCopy";

const homeAnchors = [
  { href: "/#about", full: "About Coach Deising", short: "About" },
  { href: "/#how-it-works", full: "How we train", short: "Train" },
  { href: "/#faq", full: "FAQs", short: "FAQs" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px)");
    function onChange() {
      if (media.matches) setOpen(false);
    }
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className={`site-header${open ? " is-menu-open" : ""}`}>
      <div className="site-header-inner">
        <Logo variant="primary" width={160} onClick={closeMenu} />
        <nav className="site-nav" aria-label="Primary">
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
          <Link href={PORTAL_HREF} className="nav-link">
            <span className="nav-link-full">{PORTAL_LABEL}</span>
            <span className="nav-link-short">{PORTAL_LABEL}</span>
          </Link>
          <Link href={ENROLL_HREF} className="btn btn-nav">
            {ENROLL_LABEL}
          </Link>
        </nav>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="nav-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
      <nav
        id="site-menu"
        className="site-menu"
        aria-label="Mobile"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="site-menu-inner">
          {homeAnchors.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="site-menu-link"
              onClick={closeMenu}
            >
              {item.full}
            </a>
          ))}
          <Link href="/guides/" className="site-menu-link" onClick={closeMenu}>
            Free guides
          </Link>
          <Link href={PORTAL_HREF} className="site-menu-link" onClick={closeMenu}>
            {PORTAL_LABEL}
          </Link>
          <Link href={ENROLL_HREF} className="btn site-menu-cta" onClick={closeMenu}>
            {ENROLL_LABEL}
          </Link>
        </div>
      </nav>
    </header>
  );
}
