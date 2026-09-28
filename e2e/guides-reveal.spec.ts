import { expect, test, devices, type Page } from "@playwright/test";

const THROW_BETWEEN = "how-often-should-young-pitchers-throw-between-lessons";

test.use({ ...devices["iPhone 14"] });

/** Opacity on the card itself stays 1 while an ancestor `.reveal` is still 0. */
async function cardOpacities(page: Page) {
  return page.evaluate(() => {
    function effectiveOpacity(el: Element) {
      let opacity = 1;
      let node: Element | null = el;
      while (node) {
        const value = Number.parseFloat(getComputedStyle(node).opacity);
        if (Number.isFinite(value)) opacity *= value;
        node = node.parentElement;
      }
      return opacity;
    }

    return [...document.querySelectorAll<HTMLAnchorElement>(".magnet-card")].map((el) => {
      const reveal = el.closest(".reveal");
      return {
        href: el.getAttribute("href") ?? "",
        opacity: effectiveOpacity(el),
        revealed: reveal?.classList.contains("is-revealed") ?? false,
        revealOpacity: reveal ? Number.parseFloat(getComputedStyle(reveal).opacity) : 1,
        height: Math.round(el.getBoundingClientRect().height),
      };
    });
  });
}

async function scrollEachIntoView(page: Page, selector: string) {
  const count = await page.locator(selector).count();
  for (let index = 0; index < count; index += 1) {
    const skipped = await page.evaluate(
      ({ selector: target, index: itemIndex }) => {
        const el = document.querySelectorAll(target)[itemIndex] as HTMLElement | undefined;
        if (!el || el.getClientRects().length === 0 || el.offsetHeight < 1) return true;
        const top = el.getBoundingClientRect().top + window.scrollY - 48;
        window.scrollTo(0, Math.max(0, top));
        return false;
      },
      { selector, index },
    );
    if (skipped) continue;

    await expect
      .poll(async () =>
        page.evaluate(
          ({ selector: target, index: itemIndex }) => {
            const el = document.querySelectorAll(target)[itemIndex] as HTMLElement | undefined;
            if (!el) return false;
            let opacity = 1;
            let node: Element | null = el;
            while (node) {
              const value = Number.parseFloat(getComputedStyle(node).opacity);
              if (Number.isFinite(value)) opacity *= value;
              node = node.parentElement;
            }
            const rect = el.getBoundingClientRect();
            const inView = rect.bottom > 0 && rect.top < window.innerHeight;
            const reveal = el.classList.contains("reveal") ? el : el.closest(".reveal");
            return inView && opacity >= 0.99 && (reveal?.classList.contains("is-revealed") ?? false);
          },
          { selector, index },
        ),
      )
      .toBe(true);
  }
}

test.describe("iPhone 14 WebKit scroll reveal", () => {
  test("guide cards on /guides/ finish at opacity 1", async ({ page }) => {
    await page.goto("/guides/", { waitUntil: "networkidle" });
    await scrollEachIntoView(page, ".magnet-card");
    await scrollEachIntoView(page, ".reveal");

    const cards = await cardOpacities(page);
    expect(cards.length).toBeGreaterThanOrEqual(12);
    expect(cards.some((card) => card.href.includes(THROW_BETWEEN))).toBe(true);
    for (const card of cards) {
      expect(card.opacity, card.href).toBeGreaterThanOrEqual(0.99);
      expect(card.revealed, card.href).toBe(true);
      expect(card.revealOpacity, card.href).toBeGreaterThanOrEqual(0.99);
    }

  });

  test("homepage reveals finish at opacity 1", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await scrollEachIntoView(page, ".reveal");
    await scrollEachIntoView(page, ".magnet-card");

    const cards = await cardOpacities(page);
    for (const card of cards) {
      expect(card.opacity, card.href).toBeGreaterThanOrEqual(0.99);
      expect(card.revealed, card.href).toBe(true);
    }
  });
});

test("desktop guide cards still fade in when scrolled", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const page = await context.newPage();
  await page.goto("http://localhost:3456/guides/", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  const before = await page.evaluate(() => {
    const vh = window.innerHeight;
    return [...document.querySelectorAll<HTMLElement>(".magnet-card")].map((el) => {
      const reveal = el.closest(".reveal");
      const top = el.getBoundingClientRect().top;
      return {
        href: el.getAttribute("href") ?? "",
        top,
        below: top > vh,
        revealed: reveal?.classList.contains("is-revealed") ?? false,
        height: Math.round(reveal?.getBoundingClientRect().height ?? 0),
        vh,
      };
    });
  });

  const waiting = before.filter((card) => card.below && !card.revealed);
  expect(waiting.length, JSON.stringify(before)).toBeGreaterThan(0);

  const target = waiting[waiting.length - 1];
  await page.locator(`.magnet-card[href="${target.href}"]`).scrollIntoViewIfNeeded();
  await expect
    .poll(async () => {
      const cards = await cardOpacities(page);
      return cards.find((card) => card.href === target.href)?.opacity ?? 0;
    })
    .toBeGreaterThanOrEqual(0.99);

  await context.close();
});
