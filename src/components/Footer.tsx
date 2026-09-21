import Link from "next/link";
import Logo from "./Logo";
import { ENROLL_HREF, ENROLL_LABEL, GOOGLE_REVIEW_URL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, PORTAL_HREF, PORTAL_LABEL } from "@/data/siteCopy";

/** Original three-column footer — brand, contact, explore. */
export default function Footer() {
  return (
    <footer className="site-footer mt-auto">
      <div className="footer-inner mx-auto flex max-w-5xl flex-col gap-10 px-5 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-8">
        <div className="footer-brand space-y-3">
          <Logo height={48} />
          <p className="text-sm font-semibold text-blue-dark">Naples, FL</p>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            Kids 8–16 in Naples. If you&apos;re a parent, a coach, or running a
            team, you&apos;re in the right place.
          </p>
          <Link href={ENROLL_HREF} className="btn">
            {ENROLL_LABEL}
          </Link>
        </div>

        <div className="footer-contact space-y-3 text-sm">
          <p className="text-sm font-semibold text-blue-dark">Contact</p>
          <ul className="footer-contact-links space-y-2">
            <li>
              <a className="footer-link" href={`tel:${PHONE_TEL}`}>
                Call {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a className="footer-link" href={`sms:${PHONE_TEL}`}>
                Text {PHONE_DISPLAY}
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
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Google review
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
              About Coach Deising
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
            <Link className="text-ink-soft hover:text-blue-dark" href="/packages/">
              Packages
            </Link>
          </p>
          <p>
            <Link className="text-ink-soft hover:text-blue-dark" href={PORTAL_HREF}>
              {PORTAL_LABEL}
            </Link>
          </p>
          <p>
            <Link className="text-ink-soft hover:text-blue-dark" href="/contact/">
              {ENROLL_LABEL}
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
