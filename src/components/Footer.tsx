import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer mt-auto">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            Youth &amp; elite pitching instruction for families in the Naples,
            Florida area — clear coaching, confident arms.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-pixel text-[0.55rem] text-ink">Contact</p>
          <p>
            <a className="text-blue hover:underline" href="tel:8457682211">
              845-768-2211
            </a>
          </p>
          <p>
            <a
              className="text-blue hover:underline"
              href="mailto:nickdeisng@gmail.com"
            >
              nickdeisng@gmail.com
            </a>
          </p>
          <p className="text-ink-soft">Naples, FL area</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-pixel text-[0.55rem] text-ink">Explore</p>
          <p>
            <a className="text-ink-soft hover:text-blue" href="/">
              Home
            </a>
          </p>
          <p>
            <a
              className="text-ink-soft hover:text-blue"
              href="/naples-fl-pitching-lessons/"
            >
              Naples FL pitching lessons
            </a>
          </p>
        </div>
      </div>
      <div className="border-t-4 border-blue-dark py-4 text-center text-xs text-ink-soft">
        © {new Date().getFullYear()} Pitching101 · Naples, FL
      </div>
    </footer>
  );
}
