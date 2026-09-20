import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer mt-auto">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            Youth &amp; elite pitching instruction for families in the Naples,
            Florida area — clear coaching, confident arms, a little arcade fun
            on the side.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-pixel text-sm font-semibold text-yellow">Contact</p>
          <p className="font-pixel text-xs uppercase tracking-wide text-ink-soft">
            Text or Call 845-768-2211
          </p>
          <p>
            <a className="text-blue-light hover:text-yellow hover:underline" href="tel:8457682211">
              Call 845-768-2211
            </a>
          </p>
          <p>
            <a className="text-blue-light hover:text-yellow hover:underline" href="sms:8457682211">
              Text 845-768-2211
            </a>
          </p>
          <p>
            <a
              className="text-blue-light hover:text-yellow hover:underline"
              href="mailto:nickdeisng@gmail.com"
            >
              nickdeisng@gmail.com
            </a>
          </p>
          <p className="font-pixel-ui text-base text-ink-soft">Naples, FL area</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-pixel text-sm font-semibold text-yellow">Explore</p>
          <p>
            <a className="text-ink-soft hover:text-yellow" href="/">
              Home
            </a>
          </p>
          <p>
            <a
              className="text-ink-soft hover:text-yellow"
              href="/naples-fl-pitching-lessons/"
            >
              Naples FL pitching lessons
            </a>
          </p>
        </div>
      </div>
      <div className="border-t-4 border-blue py-4 text-center font-pixel-ui text-sm text-ink-soft">
        © {new Date().getFullYear()} Pitching101 · Naples, FL
      </div>
    </footer>
  );
}
