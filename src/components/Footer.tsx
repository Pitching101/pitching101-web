import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-blue-light bg-blue-soft">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-sm text-sm text-blue-dark/80">
            Youth &amp; elite pitching instruction for families in the Naples,
            Florida area — clear coaching, calm parents, confident arms.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-blue-dark">Contact</p>
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
          <p className="text-blue-dark/70">Naples, FL area</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-blue-dark">Explore</p>
          <p>
            <a className="hover:text-blue" href="/">
              Home
            </a>
          </p>
          <p>
            <a className="hover:text-blue" href="/naples-fl-pitching-lessons">
              Naples FL pitching lessons
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-blue-light/80 py-4 text-center text-xs text-blue-dark/60">
        © {new Date().getFullYear()} Pitching101 · Naples, FL
      </div>
    </footer>
  );
}
