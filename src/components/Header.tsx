import Logo from "./Logo";

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-40">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Logo variant="on-white" />
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm font-medium text-ink-soft">
          <a href="/#who" className="nav-link">
            Who it’s for
          </a>
          <a href="/naples-fl-pitching-lessons/" className="nav-link">
            Naples FL
          </a>
          <a href="sms:8457682211" className="btn !min-h-9 !px-3.5 !py-1.5 !text-sm">
            Text 845-768-2211
          </a>
          <a href="tel:8457682211" className="btn-ghost !min-h-9 !px-3 !py-1.5 !text-sm">
            Call
          </a>
        </nav>
      </div>
    </header>
  );
}
