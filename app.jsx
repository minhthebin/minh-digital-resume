/* app.jsx — Top-level App with nav, tweaks wiring, scroll-reveal */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "sage",
  "density": "comfy",
  "heroVariant": "default",
  "expLayout": "timeline",
  "typePairing": "warm"
}/*EDITMODE-END*/;

function useScrollReveal() {
  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "-40px 0px" }
    );
    // Reset and observe — re-runs whenever layout swaps mount new nodes
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => {
      el.classList.remove("in");
      io.observe(el);
    });
    // Failsafe: anything already in viewport at mount becomes visible immediately
    requestAnimationFrame(() => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    });
    return () => io.disconnect();
  });
}

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-mono">
        Minh&nbsp;Anh&nbsp;Pham — <em>available</em>
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#play">Play</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#contact" className="nav-cta">Let's talk <span>→</span></a>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 Minh Anh Pham · Sydney, NSW</span>
      <span>Built with care · <em>last updated May 2026</em></span>
    </footer>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks as data-attrs on <html> so all selectors resolve
  React.useLayoutEffect(() => {
    const html = document.documentElement;
    html.dataset.palette = t.palette;
    html.dataset.density = t.density;
    html.dataset.hero = t.heroVariant;
    html.dataset.type = t.typePairing;
  }, [t.palette, t.density, t.heroVariant, t.typePairing]);

  useScrollReveal();

  // Re-run reveal observer whenever experience layout changes (re-mounts subtree)
  const expKey = t.expLayout;

  return (
    <>
      <Nav />
      <main className="page">
        <Hero heroVariant={t.heroVariant} />
        <About />
        <Experience key={expKey} layout={t.expLayout} />
        <Play />
        <Contact />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette" />
        <TweakColor
          label="Accent"
          value={t.palette === "sage" ? "#9CAA8D" : t.palette === "gold" ? "#9A8466" : "#5A544C"}
          options={["#9CAA8D", "#9A8466", "#5A544C"]}
          onChange={(v) => setTweak("palette", v === "#9CAA8D" ? "sage" : v === "#9A8466" ? "gold" : "neutral")}
        />

        <TweakSection label="Type pairing" />
        <TweakSelect
          label="Pairing"
          value={t.typePairing}
          options={[
            { value: "warm",      label: "Warm Humanist (Plus Jakarta Sans + DM Sans)" },
            { value: "editorial", label: "Editorial (Instrument Serif + Geist)" },
            { value: "modern",    label: "Modern (Bricolage + Geist)" },
            { value: "clean",     label: "Clean (Manrope)" },
          ]}
          onChange={(v) => setTweak("typePairing", v)}
        />

        <TweakSection label="Layout" />
        <TweakSelect
          label="Hero variant"
          value={t.heroVariant}
          options={[
            { value: "default",  label: "Default · name + portrait" },
            { value: "minimal",  label: "Minimal · name only" },
            { value: "bold",     label: "Bold · oversized name" },
            { value: "portrait", label: "Portrait-led · photo left" },
          ]}
          onChange={(v) => setTweak("heroVariant", v)}
        />
        <TweakRadio
          label="Experience"
          value={t.expLayout}
          options={["cards", "timeline", "list"]}
          onChange={(v) => setTweak("expLayout", v)}
        />
        <TweakRadio
          label="Density"
          value={t.density}
          options={["compact", "comfy", "spacious"]}
          onChange={(v) => setTweak("density", v)}
        />
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
