import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-40">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-8">
        {/* Transparent dark navy (~#181850) header mark; accents stay #3295fb */}
        <Logo variant="primary" width={160} />
        <nav className="flex shrink-0 items-center justify-end gap-x-3 text-sm font-medium text-ink-soft sm:gap-x-5">
          <Link href="/guides/" className="nav-link">
            Free guides
          </Link>
          <Link href="/contact/" className="btn btn-nav">
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}
