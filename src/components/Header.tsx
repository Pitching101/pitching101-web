import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-40">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        {/* Full blue wordmark on the white header */}
        <Logo variant="primary" width={160} />
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-medium text-ink-soft sm:gap-x-5">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/about/" className="nav-link">
            About
          </Link>
          <Link href="/guides/" className="nav-link">
            Free Guides
          </Link>
          <Link href="/contact/" className="btn !min-h-9 !px-3.5 !py-1.5 !text-sm">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
