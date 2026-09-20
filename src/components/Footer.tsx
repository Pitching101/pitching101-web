import Link from "next/link";
import Logo from "./Logo";

/** Thin dugout rail — stays in the park instead of a website footer slab. */
export default function Footer() {
  return (
    <footer className="site-footer dugout-rail-wrap">
      <div className="dugout-rail">
        <Logo height={34} />
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
        </nav>
        <p className="dugout-rail-copy">
          © {new Date().getFullYear()} Pitching101 · Naples, FL
        </p>
      </div>
    </footer>
  );
}
