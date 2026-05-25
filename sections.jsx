/* sections.jsx — All page sections + experience data
   Exposes components to window for app.jsx to consume.
*/

const EXPERIENCE = [
{
  company: "Optus",
  role: "PMO Analyst",
  sub: "Portfolio Management",
  dates: "Nov 2025 – Present",
  short: "Now",
  current: true,
  industry: "Telecommunications",
  tags: ["SAP S/4HANA", "Variance Analysis", "Quarterly Planning"],
  bullets: [
  <>Identified <b>$257,000</b> in forecast-to-actual spend variances by reconciling cost data against SAP S/4HANA reporting, flagging and investigating each discrepancy with initiative owners to protect budget integrity.</>,
  <>Co-led the FY26Q4 and FY27Q1 quarterly planning cycles across a <b>17-team, 485-resource</b> portfolio, consolidating timelines, resource forecasts and budget allocations into the approved portfolio prioritisation roadmap.</>]

},
{
  company: "NCS Australia",
  role: "Associate Consultant",
  sub: "Technology Advisory",
  dates: "Feb 2025 – Present",
  short: "Now",
  current: true,
  industry: "Consulting",
  tags: ["Business Case", "Options Analysis", "Digital Transformation"],
  bullets: [
  <>Managed a business-case cost model for a <b>~$700k</b> multi-year investment — owned inputs and assumptions, produced options analysis and recommendation slides for stakeholder review.</>,
  <>Assessed <b>20 CMS platforms</b> against client KPIs for a regulated utilities client, narrowing the field to a single recommended solution.</>,
  <>Supported a <b>$4M digital transformation</b> for a national telecommunications client, working with the Salesforce Lead and Global Transformation Officer on delivery and business-development strategy.</>]

},
{
  company: "Pacific National",
  role: "Strategy Analyst",
  sub: "Strategy & Competitive Intelligence",
  dates: "May 2024 – Nov 2024",
  short: "2024",
  industry: "Rail & Logistics",
  tags: ["Market Intelligence", "Scenario Forecasting", "Board Reporting"],
  bullets: [
  <>Produced <b>6 monthly intelligence reports</b> for executive leadership and the board, forecasting national haulage demand through macroeconomic scenario analysis and flagging risks across state and national economies.</>,
  <>Tracked <b>3 major players and 4 national rail corridors</b> to map market share, identifying the highest- and lowest-performing corridors to guide medium-to-long-term expansion strategy.</>,
  <>Researched freight and truck traffic across <b>6 major highways</b>, giving the strategy team a clearer read on intermodal and bulk-industry competition.</>]

},
{
  company: "BDO",
  role: "Undergraduate Consultant",
  sub: "Digital & Technology Consulting",
  dates: "May 2023 – May 2024",
  short: "2023–24",
  industry: "Healthcare",
  tags: ["Stakeholder Engagement", "Data Strategy", "CX Research"],
  bullets: [
  <>Ran <b>19 stakeholder workshops</b> across every business unit up to CIO level to shape a private health insurer's data strategy — implemented alongside a new data governance steering committee.</>,
  <>Mapped customer personas and a customer journey through primary research, contributing to a <b>25% uplift</b> in customer-satisfaction scores.</>]

}];


const OTHER_EXP = [
{ co: "Deloitte", role: "Technology Strategy & Transformation Intern", year: "2023", desc: "Mapped processes across 5 business functions in Miro and Visio, cutting process cycle time by 33%." },
{ co: "BDO", role: "Cybersecurity Intern", year: "2022", desc: "Reviewed 200+ documents across four projects to confirm client compliance with ISO 27001, SOC 2 Type II, and CPS 234." },
{ co: "BusinessOne Consulting", role: "Strategy Consultant", year: "2022", desc: "Analysed 6 competitors in Australia's healthcare consulting market to sharpen the client's value proposition." },
{ co: "ANZ Bank", role: "Technology Intern", year: "2021", desc: "Produced configuration management and steering committee documentation to tighten project governance." }];




const NUMBERS = [
{ fig: "$257", unit: "k", label: "Spend variances surfaced", desc: "Forecast-to-actual reconciliation against SAP S/4HANA at Optus." },
{ fig: "25", unit: "%", label: "CSAT uplift", desc: "Personas & journey research at BDO for a private health insurer." },
{ fig: "33", unit: "%", label: "Cycle-time reduction", desc: "Process mapping across 5 business functions at Deloitte." },
{ fig: "485", unit: "", label: "Resources planned", desc: "Co-led FY26Q4 + FY27Q1 quarterly planning across 17 teams." }];


/* ──────────────────────────────── HERO */

function Hero({ heroVariant }) {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div>
          <p className="hero-role reveal d1 in"> Technology Strategy & Digital Transformation</p>
          <h1 className="hero-name reveal d2 in">
            Minh Anh<br />
            <span className="accent-word">Pham</span>
          </h1>
          <p className="hero-blurb reveal d3 in">
            Hi, I'm Minh! I'm an associate consultant with a passion for solving complex problems 
            with structure and rigor. I have experience in regulated, asset-intensive industries such as telecommunications, 
             freight, and private health insurance. 
             I approach each problem with a set of paradigms - structure, diligence, and curiosity. Read on to find out more about my 9-5 and 5-9! 
          </p>
          <div className="hero-tagline reveal d4 in">
            <span>Strategic problem-solver</span>
            <span>Transformation enthusiast</span>
            <span>Data-driven analyst</span>
          </div>
          <div className="hero-actions reveal d5 in">
            <a href="#contact" className="btn btn-primary">
              Let's talk <span className="arrow">→</span>
            </a>
            <a href="resume.pdf" className="btn btn-ghost" download="Minh Anh Pham - Resume.pdf">
              Download Resume <span className="arrow">↓</span>
            </a>
          </div>
          <div className="hero-meta reveal d5 in">
            <div>
              <span>Based in</span>
              <strong>Sydney, NSW</strong>
            </div>
            <div>
              <span>Currently</span>
              <strong>Optus · NCS Australia</strong>
            </div>
            <div>
              <span>Education</span>
              <strong>USyd, Project Management, Business Information Systems</strong>
            </div>
            <div>
              <span>Availability</span>
              <strong>Open for a chat</strong>
            </div>
          </div>
        </div>

        <div className="hero-portrait-wrap reveal d3 in">
          <div className="hero-portrait-tape"></div>
          <div className="hero-portrait">
            <img src="assets/headshot.jpg" alt="Minh Anh Pham" />
          </div>
          <div className="hero-portrait-tag">Hi, I'm Minh ✦</div>
        </div>
      </div>
    </section>);

}

/* ──────────────────────────────── ABOUT */

function About() {
  return (
    <section id="about">
      <div className="section-head reveal in">
        <div>
          <span className="eyebrow">01 — About</span>
          <h2 className="h-section">A <em>problem-solver</em> who speaks fluently in spreadsheets and slides.</h2>
        </div>
        <div className="section-head-right">By the numbers ↘</div>
      </div>
      <div className="about-grid">
        <div className="about-prose reveal d1 in">
          <p>
            I help leaders make better, data driven decisions through <mark>options analysis, forecasting, and root-cause problem solving</mark>.
          </p>
          <p>
            I thrive in ambiguous environments, where I can balance breaking down problems into first principles and try different approaches. My adaptability means I am purposeful and driven in any work I do, from conducting stakeholder workshops to processing large sets of data to extract meaning.
          </p>
        </div>
        <div className="numbers reveal d2 in">
          {NUMBERS.map((n, i) =>
          <div key={i} className="number">
              <div className="number-figure">{n.fig}<span className="unit">{n.unit}</span></div>
              <div className="number-label">{n.label}</div>
              <div className="number-desc">{n.desc}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ──────────────────────────────── EXPERIENCE — three variants */

function ExpCards() {
  return (
    <div className="exp-cards">
      {EXPERIENCE.map((e, i) =>
      <div key={i} className={`exp-card reveal ${e.current ? "is-current" : ""} d${Math.min(i + 1, 5)} in`}>
          <div className="exp-card-top">
            <div className="exp-card-top-text">
              <h3 className="exp-card-company">{e.company}</h3>
              <p className="exp-card-role">{e.role} · {e.sub}</p>
              <p className="exp-card-dates">
                <span className={`dot ${e.current ? "live" : ""}`}></span>
                {e.dates}
              </p>
            </div>
            {e.current && <span className="exp-card-badge">Now</span>}
          </div>
          <ul>{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
          <div className="exp-card-tags">
            {e.tags.map((t, j) => <span key={j}>{t}</span>)}
          </div>
        </div>
      )}
    </div>);

}

function ExpTimeline() {
  return (
    <div className="exp-timeline">
      {EXPERIENCE.map((e, i) =>
      <div key={i} className={`tl-row reveal d${Math.min(i + 1, 5)} in ${e.current ? "is-current" : ""}`}>
          <div className="tl-date">
            {e.dates}
            <strong>{e.industry}</strong>
          </div>
          <div className="tl-content">
            <h4>{e.company}</h4>
            <div className="tl-role">{e.role} · {e.sub}</div>
            <ul>{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
          </div>
        </div>
      )}
    </div>);

}

function ExpList() {
  const [open, setOpen] = React.useState(0);
  return (
    <div className="exp-list">
      {EXPERIENCE.map((e, i) =>
      <div key={i} className={`exp-item ${open === i ? "open" : ""}`}>
          <button className="exp-item-head" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span className="exp-item-num">0{i + 1}</span>
            <span className="exp-item-co">{e.company}</span>
            <span className="exp-item-role">{e.role} · {e.sub}</span>
            <span className="exp-item-date">{e.dates}</span>
            <span className="exp-item-chev" aria-hidden>+</span>
          </button>
          <div className="exp-item-body">
            <div className="exp-item-body-inner">
              <ul>{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
            </div>
          </div>
        </div>
      )}
    </div>);

}

function Experience({ layout }) {
  const Body =
  layout === "timeline" ? ExpTimeline :
  layout === "list" ? ExpList :
  ExpCards;
  return (
    <section id="experience">
      <div className="section-head reveal in">
        <div>
          <span className="eyebrow">02 — Experience</span>
          <h2 className="h-section">Where I've <em>done the work.</em></h2>
        </div>
        <div className="section-head-right">
          {EXPERIENCE.length} roles · 2023 → now<br />
          + 4 earlier internships
        </div>
      </div>
      <Body />

      <div className="other-grid reveal d2 in">
        {OTHER_EXP.map((o, i) =>
        <div key={i} className="other-item">
            <span className="other-item-co">{o.co} · {o.year}</span>
            <span className="other-item-role">{o.role}</span>
            <p className="other-item-desc">{o.desc}</p>
          </div>
        )}
      </div>
    </section>);

}

/* ──────────────────────────────── CONTACT */

function Contact() {
  return (
    <section id="contact">
      <div className="contact reveal in">
        <div className="contact-grid">
          <div>
            <span className="eyebrow">05 — Get in touch</span>
            <h2>Get to know me <em>better!</em></h2>
            <p className="contact-blurb">
              Happy to chat about strategy, transformation, or my experience.
            </p>
            <a href="mailto:minhanhp4@gmail.com" className="btn btn-primary">
              Send me an email <span className="arrow">→</span>
            </a>
          </div>
          <div className="contact-links">
            <a className="contact-link" href="mailto:minhanhp4@gmail.com">
              <div>
                <div className="contact-link-label">Email</div>
                <div>minhanhp4@gmail.com</div>
              </div>
              <span className="contact-link-arrow">↗</span>
            </a>
            <a className="contact-link" href="https://www.linkedin.com/in/minh-anh-pham-4" target="_blank" rel="noopener">
              <div>
                <div className="contact-link-label">LinkedIn</div>
                <div>/in/minh-anh-pham-4</div>
              </div>
              <span className="contact-link-arrow">↗</span>
            </a>
            <a className="contact-link" href="tel:+61410909077">
              <div>
                <div className="contact-link-label">Phone</div>
                <div>+61 410 909 077</div>
              </div>
              <span className="contact-link-arrow">↗</span>
            </a>
            <a className="contact-link" href="#top">
              <div>
                <div className="contact-link-label">Location</div>
                <div>Sydney, NSW · Australia</div>
              </div>
              <span className="contact-link-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>);

}

/* ──────────────────────────────── PLAY */

const PLAY = [
{
  eyebrow: "Making",
  glyph: "✬",
  title: <>Crochet, and <em>building Minochet</em></>,
  body: <>I knot yarn into things I can wear and gift — slow, tactile, completely outside a spreadsheet. I'm also building <b>Minochet</b>, a little web app to plan and track projects, because I couldn't help myself.</>,
  foot: { label: "minochet.lovable.app", href: "https://minochet.lovable.app" }
},
{
  eyebrow: "Moving",
  glyph: "◆",
  title: <>Boxing & <em>Muay Thai</em></>,
  body: <>Two days a week, hands up, brain off. The best counter-balance I've found to long days of slide-decks and stakeholder maps — and a quiet lesson in showing up when it's hard.</>,
  foot: { label: "Sydney · ongoing" },
  gold: true
},
{
  eyebrow: "Showing up",
  glyph: "♠",
  title: <>LGBTQ+ <em>advocacy</em></>,
  body: <>Volunteering with <a href="https://www.acon.org.au/" target="_blank" rel="noopener"><b>ACON</b></a> and <a href="https://ycollab.com.au/" target="_blank" rel="noopener"><b>YCOLLAB</b></a> on community programs and youth engagement. The work that keeps me grounded — a useful reminder that strategy is only as good as the people it ends up serving.</>,
  foot: { label: "ACON · YCOLLAB" }
}];


function Play() {
  return (
    <section id="play">
      <div className="section-head reveal in">
        <div>
          <span className="eyebrow">04 — Play</span>
          <h2 className="h-section">Things I do <em>off the clock.</em></h2>
        </div>
        <div className="section-head-right">Same person,<br />different tempo</div>
      </div>

      <div className="play-grid">
        {PLAY.map((p, i) =>
        <div key={i} className={`play-card reveal d${i + 1} in ${p.gold ? "gold" : ""}`}>
            <div className="play-card-head">
              <span className="play-card-glyph" aria-hidden>{p.glyph}</span>
              <span className="play-card-eyebrow">{p.eyebrow}</span>
            </div>
            <h3 className="play-card-title">{p.title}</h3>
            <p className="play-card-body">{p.body}</p>
            <div className="play-card-foot">
              {p.foot.href ?
            <a href={p.foot.href} target="_blank" rel="noopener">{p.foot.label}</a> :
            <span>{p.foot.label}</span>}
              <span>0{i + 1} / 0{PLAY.length}</span>
            </div>
          </div>
        )}
      </div>

      <div className="play-photos reveal d4 in">
        <div className="play-photo">
          <img src="assets/play-photo-1.jpg" alt="" className="play-photo-img" />
        </div>
        <div className="play-photo">
          <img src="assets/play-photo-2.png" alt="" className="play-photo-img" />
        </div>
      </div>
    </section>);

}

Object.assign(window, { Hero, About, Experience, Play, Contact });