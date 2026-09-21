#!/usr/bin/env python3
"""Build the keep-this Pitching101 packet parents download after the evaluation form."""

from __future__ import annotations

import subprocess
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public" / "assets"
OUT = ROOT / "public" / "pitching101-how-i-work.pdf"
FONT_DIR = Path("/tmp/p101-fonts")
HTML_OUT = Path("/tmp/p101-info-packet.html")

FONT_URLS = {
    "Oswald.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/oswald/Oswald%5Bwght%5D.ttf",
    "Yesteryear-Regular.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/yesteryear/Yesteryear-Regular.ttf",
    "DMSans.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/dmsans/DMSans%5Bopsz%2Cwght%5D.ttf",
}


def uri(path: Path) -> str:
    return path.resolve().as_uri()


def ensure_fonts() -> None:
    FONT_DIR.mkdir(parents=True, exist_ok=True)
    for name, url in FONT_URLS.items():
        dest = FONT_DIR / name
        if dest.exists() and dest.stat().st_size > 10_000:
            continue
        urllib.request.urlretrieve(url, dest)


def html() -> str:
    logo = uri(ASSETS / "logo-header-navy.png")
    nick = uri(ASSETS / "nick-coach-card.png")
    cloud = uri(ASSETS / "pixel-cloud-1-transparent.png")
    cloud2 = uri(ASSETS / "pixel-cloud-3-transparent.png")
    icon_eval = uri(ASSETS / "icons" / "icon-plan-checklist.png")
    icon_strikes = uri(ASSETS / "icons" / "icon-strikes.png")
    icon_checkin = uri(ASSETS / "icons" / "icon-free-guide-v2.png")
    oswald = uri(FONT_DIR / "Oswald.ttf")
    script = uri(FONT_DIR / "Yesteryear-Regular.ttf")
    body = uri(FONT_DIR / "DMSans.ttf")

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Pitching101 | How I work</title>
<style>
@font-face {{
  font-family: Oswald;
  src: url("{oswald}") format("truetype");
  font-weight: 500 700;
  font-style: normal;
}}
@font-face {{
  font-family: Yesteryear;
  src: url("{script}") format("truetype");
  font-weight: 400;
  font-style: normal;
}}
@font-face {{
  font-family: "DM Sans";
  src: url("{body}") format("truetype");
  font-weight: 400 700;
  font-style: normal;
}}
@page {{ size: letter; margin: 0; }}
* {{ box-sizing: border-box; }}
html, body {{
  margin: 0;
  padding: 0;
  background: #ffffff;
  color: #0f1a2e;
  font-family: "DM Sans", system-ui, sans-serif;
}}
.page {{
  width: 8.5in;
  height: 11in;
  padding: 0;
  overflow: hidden;
  position: relative;
  page-break-after: always;
}}
.page:last-child {{ page-break-after: auto; }}
.sky {{
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #f7fbff 0%, #BBD6F1 42%, #7eb6f6 100%);
}}
.cloud {{
  position: absolute;
  image-rendering: pixelated;
  opacity: 0.55;
  pointer-events: none;
}}
.bar {{
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #3295fb;
  padding: 0.38in 0.55in;
}}
.bar img {{
  height: 0.42in;
  width: auto;
  filter: brightness(0) invert(1);
}}
.keep {{
  font-family: Oswald, sans-serif;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #ffffff;
}}
.inner {{
  position: relative;
  z-index: 2;
  padding: 0.42in 0.55in 0.4in;
}}
.hero {{
  display: grid;
  grid-template-columns: 1fr 2.55in;
  gap: 0.38in;
  align-items: start;
}}
.script {{
  font-family: Yesteryear, cursive;
  font-size: 42px;
  color: #1a78e8;
  margin: 0 0 -6px;
  line-height: 1;
}}
h1, h2, h3 {{
  font-family: Oswald, sans-serif;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin: 0;
}}
h1 {{
  font-size: 34px;
  line-height: 0.95;
  color: #0f1a2e;
}}
.lede {{
  margin: 0.18in 0 0;
  font-size: 16px;
  line-height: 1.45;
  color: #0f1a2e;
  max-width: 28ch;
}}
.about {{
  margin: 0.22in 0 0;
  font-size: 13.5px;
  line-height: 1.55;
  color: #3d5674;
}}
.about p {{ margin: 0 0 0.12in; }}
.chips {{
  display: flex;
  flex-wrap: wrap;
  gap: 0.08in;
  margin-top: 0.2in;
  padding: 0;
  list-style: none;
}}
.chips li {{
  border: 2px solid #7eb6f6;
  background: #f7fbff;
  padding: 0.05in 0.1in;
  font-family: Oswald, sans-serif;
  font-size: 10.5px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}}
.card {{
  background: linear-gradient(180deg, #f7fbff 0%, #e7f2fc 100%);
  border: 5px solid #7eb6f6;
  border-radius: 12px;
  box-shadow: 0 0 0 3px #0f1a2e, 8px 10px 0 rgba(15, 26, 46, 0.14);
  padding: 0.12in 0.12in 0.16in;
  transform: rotate(1.4deg);
}}
.card img {{
  display: block;
  width: 100%;
  height: auto;
  background: #3295fb;
}}
.card .name {{
  margin: 0.1in 0 0;
  font-family: Oswald, sans-serif;
  font-size: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
}}
.card .role {{
  margin: 0.02in 0 0;
  text-align: center;
  font-size: 12px;
  color: #3d5674;
}}
.section {{
  margin-top: 0.32in;
}}
.section h2 {{
  font-size: 22px;
  margin-bottom: 0.08in;
}}
.note {{
  margin: 0 0 0.16in;
  color: #3d5674;
  font-size: 14px;
}}
.steps {{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.14in;
}}
.step {{
  display: grid;
  grid-template-columns: 0.38in 1fr;
  gap: 0.1in;
  background: color-mix(in srgb, #f6f0e4 70%, #BBD6F1);
  border: 2px dashed color-mix(in srgb, #1a78e8 28%, transparent);
  padding: 0.12in;
}}
.num {{
  width: 0.34in;
  height: 0.34in;
  border: 3px solid #1a2438;
  background: #BBD6F1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Oswald, sans-serif;
  font-size: 14px;
}}
.step h3 {{
  font-size: 12.5px;
  margin-bottom: 0.04in;
}}
.step p {{
  margin: 0;
  font-size: 12px;
  line-height: 1.4;
  color: #3d5674;
}}
.packs {{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.14in;
  margin-top: 0.12in;
}}
.pack {{
  background: #f7fbff;
  border: 3px solid #7eb6f6;
  border-radius: 10px;
  padding: 0.12in;
  box-shadow: 0 0 0 2px #0f1a2e;
}}
.pack img {{
  width: 0.46in;
  height: 0.46in;
  image-rendering: pixelated;
}}
.pack h3 {{
  font-size: 12px;
  margin: 0.08in 0 0.05in;
}}
.pack p {{
  margin: 0;
  font-size: 11.5px;
  line-height: 1.4;
  color: #3d5674;
}}
.contact {{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.1in 0.2in;
  margin-top: 0.16in;
  background: #3295fb;
  color: #ffffff;
  padding: 0.18in 0.2in;
  border-radius: 10px;
}}
.contact h2 {{
  grid-column: 1 / -1;
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 0.04in;
}}
.contact p {{
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
}}
.contact strong {{
  display: block;
  font-family: Oswald, sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 11px;
  opacity: 0.9;
  margin-bottom: 0.02in;
}}
.quotes {{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.14in;
  margin-top: 0.18in;
}}
.quote {{
  background: #f7fbff;
  border: 2px solid #7eb6f6;
  border-radius: 10px;
  padding: 0.14in;
  font-size: 12px;
  line-height: 1.45;
  color: #0f1a2e;
}}
.quote cite {{
  display: block;
  margin-top: 0.1in;
  font-style: normal;
  font-family: Oswald, sans-serif;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #1a78e8;
}}
.foot {{
  margin-top: 0.18in;
  font-size: 12.5px;
  color: #0f1a2e;
}}
.dollars {{
  margin-top: 0.1in;
  font-size: 12px;
  color: #3d5674;
}}
</style>
</head>
<body>
  <section class="page">
    <div class="sky"></div>
    <img class="cloud" src="{cloud}" alt="" style="width:1.6in; top:1.35in; left:0.2in;" />
    <img class="cloud" src="{cloud2}" alt="" style="width:1.3in; top:8.9in; right:0.15in;" />
    <header class="bar">
      <img src="{logo}" alt="Pitching101" />
      <span class="keep">Keep this</span>
    </header>
    <div class="inner">
      <div class="hero">
        <div>
          <p class="script">Youth</p>
          <h1>Pitching lessons<br/>in Naples, FL</h1>
          <p class="lede">Let's get 'em throwing strikes and keep that arm healthy.</p>
          <div class="about">
            <p>I'm Coach Deising. I work with kids 8–16 here in Naples, and I'm the JV head coach at Gulfshore High School.</p>
            <p>Parents, travel teams, coaches, schools. If you're in a kid's corner, come on.</p>
          </div>
          <ul class="chips">
            <li>Ages 8–16</li>
            <li>Parents</li>
            <li>Coaches</li>
            <li>Travel teams</li>
            <li>Schools</li>
          </ul>
        </div>
        <aside class="card">
          <img src="{nick}" alt="Coach Deising" />
          <p class="name">Coach Deising</p>
          <p class="role">Pitching101 · Naples, FL</p>
        </aside>
      </div>
      <div class="section">
        <h2>How we train</h2>
        <p class="note">Book an evaluation. Then I'll tell you which pack I'd actually use.</p>
        <div class="steps">
          <div class="step">
            <span class="num">1</span>
            <div>
              <h3>Book an evaluation</h3>
              <p>Age, goals, and schedule. Parent, coach, travel team, or school.</p>
            </div>
          </div>
          <div class="step">
            <span class="num">2</span>
            <div>
              <h3>We'll respond within 24 business hours</h3>
              <p>We'll hit the number you left.</p>
            </div>
          </div>
          <div class="step">
            <span class="num">3</span>
            <div>
              <h3>We meet once</h3>
              <p>We talk about your kid, then I recommend a pack that fits.</p>
            </div>
          </div>
          <div class="step">
            <span class="num">4</span>
            <div>
              <h3>Monthly or Check-In</h3>
              <p>Monthly Strikes Pack is the main plan. Busy-Week Check-In is the add-on.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="page">
    <div class="sky"></div>
    <img class="cloud" src="{cloud2}" alt="" style="width:1.4in; top:1.3in; right:0.2in;" />
    <header class="bar">
      <img src="{logo}" alt="Pitching101" />
      <span class="keep">How I work</span>
    </header>
    <div class="inner">
      <h2>The evaluation</h2>
      <p class="note">One visit. Warmup first, a couple cues they can remember, then a pack that fits the week.</p>
      <div class="steps">
        <div class="step">
          <span class="num">1</span>
          <div>
            <h3>Warmup</h3>
            <p>Arm care first. Same routine they can use at practice, not just with me.</p>
          </div>
        </div>
        <div class="step">
          <span class="num">2</span>
          <div>
            <h3>A few cues</h3>
            <p>One or two things they can actually remember.</p>
          </div>
        </div>
        <div class="step">
          <span class="num">3</span>
          <div>
            <h3>Then a pack</h3>
            <p>Monthly Strikes Pack, or a Busy-Week Check-In if the week is packed.</p>
          </div>
        </div>
        <div class="step">
          <span class="num">4</span>
          <div>
            <h3>Arm care stays in</h3>
            <p>Warm-up and cool-down are part of every lesson. I don't skip that stuff.</p>
          </div>
        </div>
      </div>

      <div class="section">
        <h2>Packs after</h2>
        <div class="packs">
          <article class="pack">
            <img src="{icon_eval}" alt="" />
            <h3>Evaluation</h3>
            <p>Meet once. We talk about your kid, then I recommend Monthly or Check-In.</p>
          </article>
          <article class="pack">
            <img src="{icon_strikes}" alt="" />
            <h3>Monthly Strikes Pack</h3>
            <p>The main plan after the evaluation. Regular work and a clear next practice.</p>
          </article>
          <article class="pack">
            <img src="{icon_checkin}" alt="" />
            <h3>Busy-Week Check-In</h3>
            <p>An add-on when the week is packed. A short look, then back to the plan.</p>
          </article>
        </div>
        <p class="dollars">Exact dollars come after we talk, not here. There's no walk-up shop. We'll share the meeting location after you book.</p>
      </div>

      <div class="contact">
        <h2>Save these</h2>
        <p><strong>Call or text</strong>845-768-2211</p>
        <p><strong>Email</strong>nickdeisng@gmail.com</p>
        <p><strong>Instagram</strong>@pitchinglesson</p>
        <p><strong>Site</strong>pitching101.com</p>
      </div>

      <div class="quotes">
        <blockquote class="quote">
          “Coach Nick is amazing with young athletes! He has been working with our 9 year old son and the progress is impressive. His strike consistency has greatly improved as well as his throwing mechanics.”
          <cite>Grace, Trustpilot</cite>
        </blockquote>
        <blockquote class="quote">
          “He takes the time to teach the kids proper warm up and cool down as well as how to go about being a pitcher. We will continue to utilize him for our travel team.”
          <cite>Eric Marvin, Trustpilot</cite>
        </blockquote>
      </div>
      <p class="foot">We'll respond within 24 business hours. Keep this so you've got it after we hang up. pitching101.com/contact</p>
    </div>
  </section>
</body>
</html>
"""


def main() -> None:
    ensure_fonts()
    HTML_OUT.write_text(html(), encoding="utf-8")
    OUT.parent.mkdir(parents=True, exist_ok=True)
    profile = Path("/tmp/p101-pdf-chrome")
    profile.mkdir(parents=True, exist_ok=True)
    cmd = [
        "google-chrome",
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--disable-dev-shm-usage",
        "--disable-background-networking",
        "--disable-sync",
        "--disable-extensions",
        "--disable-component-update",
        "--no-first-run",
        "--remote-debugging-port=0",
        f"--user-data-dir={profile}",
        "--no-pdf-header-footer",
        f"--print-to-pdf={OUT}",
        HTML_OUT.as_uri(),
    ]
    if OUT.exists():
        OUT.unlink()
    proc = subprocess.Popen(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    deadline = time.time() + 25
    while time.time() < deadline:
        if OUT.exists() and OUT.stat().st_size > 20_000:
            time.sleep(0.8)
            proc.kill()
            proc.wait(timeout=8)
            break
        if proc.poll() is not None:
            break
        time.sleep(0.2)
    else:
        proc.kill()
        proc.wait(timeout=8)
    if not OUT.exists() or OUT.stat().st_size < 20_000:
        raise SystemExit("PDF did not generate")
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
