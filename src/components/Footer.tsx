import Link from "next/link";
import Logo from "./Logo";
import { INSTAGRAM_URL } from "@/data/siteCopy";

/** Original three-column footer — brand, contact, explore. */
export default function Footer() {
  return (
    <footer className="site-footer mt-auto">
      <div className="footer-inner mx-auto flex max-w-5xl flex-col gap-10 px-5 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-8">
        <div className="footer-brand space-y-3">
          <Logo height={48} />
          <p className="text-sm font-semibold text-blue-dark">Naples, FL</p>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            Youth pitching lessons in Naples, FL for ages 8–14. Families,
            travel teams, other coaches, and schools.
          </p>
          <Link href="/contact/" className="btn">
            Get started
          </Link>
        </div>

        <div className="footer-contact space-y-3 text-sm">
          <p className="text-sm font-semibold text-blue-dark">Contact</p>
          <ul className="footer-contact-links space-y-2">
            <li>
              <a className="footer-link" href="tel:8457682211">
                Call 845-768-2211
              </a>
            </li>
            <li>
              <a className="footer-link" href="sms:8457682211">
                Text 845-768-2211
              </a>
            </li>
            <li>
              <a className="footer-link" href="mailto:nickdeisng@gmail.com">
                Email nickdeisng@gmail.com
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-explore space-y-2 text-sm">
          <p className="text-sm font-semibold text-blue-dark">Explore</p>
          <p>
            <Link className="text-ink-soft hover:text-blue-dark" href="/">
              Home
            </Link>
          </p>
          <p>
            <Link className="text-ink-soft hover:text-blue-dark" href="/#about">
              About
            </Link>
          </p>
          <p>
            <Link className="text-ink-soft hover:text-blue-dark" href="/guides/">
              Free guides
            </Link>
          </p>
          <p>
            <a
              className="text-ink-soft hover:text-blue-dark"
              href="/naples-fl-pitching-lessons/"
            >
              Naples FL pitching lessons
            </a>
          </p>
          <p>
            <Link className="text-ink-soft hover:text-blue-dark" href="/contact/">
              Contact
            </Link>
          </p>
        </div>
      </div>
      <div className="border-t border-blue/15 py-4 text-center text-sm text-ink-soft">
        © {new Date().getFullYear()} Pitching101 · Naples, FL
      </div>
    </footer>
  );
}
