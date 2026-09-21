"use client";

import { useEffect } from "react";
import {
  applyNaplesTod,
  applyNaplesWx,
  fetchNaplesRain,
} from "@/lib/naplesSky";

const TOD_MS = 60_000;
const WX_MS = 15 * 60_000;

/** Keeps Naples time-of-day + rain on <html> after the FOUC-free boot script. */
export default function NaplesSkyClock() {
  useEffect(() => {
    const root = document.documentElement;
    applyNaplesTod(root);

    const wxAbort = new AbortController();
    const loadWx = async () => {
      try {
        const raining = await fetchNaplesRain(wxAbort.signal);
        applyNaplesWx(raining, root);
      } catch {
        if (!wxAbort.signal.aborted) applyNaplesWx(false, root);
      }
    };
    void loadWx();

    const todTick = window.setInterval(() => applyNaplesTod(root), TOD_MS);
    const wxTick = window.setInterval(() => {
      void loadWx();
    }, WX_MS);

    return () => {
      wxAbort.abort();
      window.clearInterval(todTick);
      window.clearInterval(wxTick);
    };
  }, []);

  return null;
}
