import Link from "next/link";
import Logo from "./Logo";
import { INSTAGRAM_URL } from "@/data/siteCopy";

/** Park footer — roomy dugout rail, not a cramped strip. */
export default function Footer() {
  return (
    <footer className="site-footer dugout-rail-wrap">
      <div className="dugout-rail">
        <div className="dugout-rail-brand">
          <Logo height={36} />
        </div>
        <nav className="dugout-rail-links" aria-label="Footer">
          <a className="footer-link" href="tel:8457682211">
            845-768-2211
          </a>
          <Link className="footer-link" href="/guides/">
            Free guides
          </Link>
          <Link className="footer-link" href="/#about">
            About
          </Link>
          <a
            className="footer-link"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </nav>
        <p className="dugout-rail-copy">
          © {new Date().getFullYear()} Pitching101 · Naples, FL
        </p>
      </div>
    </footer>
  );
}
