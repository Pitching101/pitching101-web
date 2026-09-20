import Logo from "./Logo";

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-40">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Logo />
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-medium text-ink-soft">
          <a href="/#programs" className="nav-link">
            Programs
          </a>
          <a href="/#how-it-works" className="nav-link">
            How it works
          </a>
          <a href="/naples-fl-pitching-lessons/" className="nav-link">
            Naples FL
          </a>
          <a href="tel:8457682211" className="btn !min-h-9 !px-3 !py-1.5 !text-sm">
            Call
          </a>
          <a href="sms:8457682211" className="btn-ghost !min-h-9 !px-3 !py-1.5 !text-sm">
            Text
          </a>
        </nav>
      </div>
    </header>
  );
}
