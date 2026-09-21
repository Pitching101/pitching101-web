"use client";

import { useEffect } from "react";
import Link from "next/link";

/** /about is collapsed onto the homepage #about section. */
export default function AboutHomeRedirect() {
  useEffect(() => {
    window.location.replace("/#about");
  }, []);

  return (
    <p className="px-5 py-16 text-center text-ink-soft">
      <Link href="/#about" className="text-blue-dark underline underline-offset-3">
        Continue to About
      </Link>
    </p>
  );
}
