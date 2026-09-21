import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-40">
      <div className="site-header-inner">
        {/* Transparent dark navy (~#181850) header mark; accents stay #3295fb */}
        <Logo variant="primary" width={160} />
        <nav className="site-nav" aria-label="Primary">
          <Link href="/guides/" className="nav-link">
            <span className="nav-link-full">Free guides</span>
            <span className="nav-link-short">Guides</span>
          </Link>
          <Link href="/contact/" className="btn btn-nav">
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}
