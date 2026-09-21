"use client";

import { useEffect, useRef, useState } from "react";
import type { GuideTocItem } from "@/data/leadMagnets";

/** Contents list. On a computer it stays on the right while the post scrolls. */
export default function GuideToc({ items }: { items: GuideTocItem[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const rail = railRef.current;
    const nav = navRef.current;
    if (!rail || !nav) return;

    const desktop = window.matchMedia("(min-width: 1100px)");

    function place() {
      if (!desktop.matches) {
        nav.style.position = "";
        nav.style.top = "";
        nav.style.left = "";
        nav.style.width = "";
        return;
      }
      const header = document.querySelector(".site-header");
      const stickTop = (header?.getBoundingClientRect().height ?? 64) + 14;
      const railRect = rail.getBoundingClientRect();
      const navHeight = Math.min(nav.offsetHeight, window.innerHeight - stickTop - 16);
      let top = stickTop;
      if (railRect.top > stickTop) top = railRect.top;
      const maxTop = railRect.bottom - navHeight;
      if (top > maxTop) top = maxTop;
      nav.style.position = "fixed";
      nav.style.top = `${top}px`;
      nav.style.left = `${railRect.left}px`;
      nav.style.width = `${railRect.width}px`;
    }

    place();
    window.addEventListener("scroll", place, { passive: true });
    window.addEventListener("resize", place);
    desktop.addEventListener("change", place);
    return () => {
      window.removeEventListener("scroll", place);
      window.removeEventListener("resize", place);
      desktop.removeEventListener("change", place);
    };
  }, []);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => Boolean(heading));
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const id = visible[0]?.target.id;
        if (id) setActive(id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: [0, 0.25, 1] },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector<HTMLAnchorElement>(`a[href="#${CSS.escape(active)}"]`);
    if (!nav || !link) return;
    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    if (linkRect.top < navRect.top) {
      nav.scrollTop -= navRect.top - linkRect.top;
    } else if (linkRect.bottom > navRect.bottom) {
      nav.scrollTop += linkRect.bottom - navRect.bottom;
    }
  }, [active]);

  return (
    <div ref={railRef} className="guide-toc-rail">
      <nav ref={navRef} className="guide-toc" aria-label="Table of contents">
        <p className="guide-toc-label">On this page</p>
        <ol>
          {items.map((item) => {
            const isActive = item.id === active;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={isActive ? "is-active" : undefined}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setActive(item.id)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
