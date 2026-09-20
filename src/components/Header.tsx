import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-blue-light/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-medium text-blue-dark">
          <a href="/#programs" className="hover:text-blue">
            Programs
          </a>
          <a href="/#how-it-works" className="hover:text-blue">
            How it works
          </a>
          <a href="/naples-fl-pitching-lessons" className="hover:text-blue">
            Naples FL
          </a>
          <a
            href="tel:8457682211"
            className="rounded-full bg-blue px-3 py-1.5 text-white hover:bg-blue-dark"
          >
            Call
          </a>
        </nav>
      </div>
    </header>
  );
}
