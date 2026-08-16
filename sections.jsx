/* sections.jsx — All page sections + experience data */
import React from "react";

const EXPERIENCE = [
{
  company: "NCS Australia",
  role: "Associate Consultant",
  sub: "Technology Advisory",
  dates: "Feb 2025 – Present",
  short: "Now",
  current: true,
  industry: "Consulting · Telecommunications",
  tags: ["Program Shaping", "Operating Model", "MS Project", "Variance Analysis", "Business Case"],
  bullets: [
  <>Helped shape a <b>$90M+ IT transformation program</b> for a telecommunications client alongside NCS' Global Transformation Officer and National Strategy Lead, defining scope, phased deliverables, dependencies and scheduling, and helping draft the operating-model artefacts behind it: the RACI and role definitions, the governance and committee structure, the ways of working, and the decision-rights map.</>,
  <>Contributed to the program master schedule, reconciling <b>9 workstream timelines</b> into a single plan, analysing the dependencies between them, and restructuring it in MS Project to line up with the program's financial structure. The plan was baselined against the initial program-wide timeline.</>,
  <>Surfaced <b>$257,000</b> in forecast-to-actual spend variances across <b>19 teams</b>, investigating every discrepancy with its initiative owner to protect budget integrity and turning the findings into budget and process recommendations adopted across all 19.</>,
  <>On secondment to the client side, worked inside the portfolio's recurring <b>quarterly planning cycle</b> and its monthly confirmation of how project work is distributed across OPEX and CAPEX, a calendared planning cadence rather than one-off engagements.</>,
  <>Facilitated <b>20+ strategic workshops</b> with client executives and delivery teams to shape problem statements, analyse capacity requirements and co-design scalable operational roadmaps.</>,
  <>Built the cost comparison model behind a business case appraising <b>5 content management systems</b> for a utilities client, covering upfront replatforming, three-year licensing, hosting and technology costs, then summarised the options and recommendation in the final report to the client's CIO. The recommended path was scoped at <b>$200K to replatform plus $50K a year</b> to run.</>,
  <>Documented the current-state reporting process before automating any of it, mapping its two inputs: the monthly financial forecast, pulled out of <b>SAP S/4HANA</b> by running the standard report and taking its output, and timesheet data extracted from Atlassian Analytics. Replaced the static reporting packs with an interactive dashboard built on AI-generated VBA logic.</>,
  <>Handed that dashboard to the client's IT PMO across <b>5 walkthrough sessions</b> and a two-page written guide covering the prompts, the data sources, the instructions and a sampling check against an independent system. In use since April 2026, with the PMO running its monthly refresh themselves.</>]

},
{
  company: "Pacific National",
  role: "Strategy Analyst",
  sub: "Strategy & Competitive Intelligence",
  dates: "May 2024 – Nov 2024",
  short: "2024",
  industry: "Rail Freight",
  tags: ["Market Intelligence", "Scenario Forecasting", "Board Reporting", "Power BI"],
  bullets: [
  <>Delivered <b>6 monthly competitive intelligence reports</b> to executive leadership and the board, profiling <b>3 major competitors</b> and using macroeconomic scenario forecasting to structure ambiguous demand outlooks into clear strategic options.</>,
  <>Modelled current-state market share and performance across <b>4 national corridors</b> to identify the highest- and lowest-performing segments, gathering competitor freight rates and setting them against internal yield figures as inputs to the model.</>,
  <>Scoped, wrote and delivered a strategic report on Australian grain exports for the Executive of Commodities in <b>2 working days</b>, covering national and international trends, blockers and forecasts researched across industry and government sources.</>,
  <>Built interactive <b>Power BI</b> dashboards and graphs to visualise the data behind macroeconomic and strategic reports, giving executive and board audiences a faster read on the analysis.</>]

},
{
  company: "BDO",
  role: "Undergraduate Consultant",
  sub: "Digital & Technology Consulting",
  dates: "May 2023 – May 2024",
  short: "2023–24",
  industry: "Professional Services",
  tags: ["Stakeholder Engagement", "Data Strategy", "Bids & Proposals"],
  bullets: [
  <>Facilitated <b>19 strategic workshops</b> across every business unit and the executive level to capture people, process and data requirements, shape problem statements and co-design a <b>data strategy roadmap</b>, supporting implementation and stakeholder adoption.</>,
  <>Ran primary research with the client's internal stakeholders into customer needs and experience, analysing the findings to identify process-improvement opportunities that fed measurable business outcomes.</>,
  <>Wrote BDO's responses to client RFPs and produced proposal material, and managed the firm's internal opportunity tracker across its bid, tender and opportunity pipeline.</>]

}];


const OTHER_EXP = [
{ co: "Deloitte", role: "Technology Strategy & Transformation Intern", year: "2022–23", desc: "Mapped processes across 5 business functions in Miro and Visio, identifying the redesign opportunities that cut process cycle time." },
{ co: "BDO", role: "Cybersecurity Intern", year: "2022", desc: "Reviewed 200+ documents across four projects to confirm an APRA-regulated insurer's compliance with ISO 27001, SOC 2 Type II and APRA CPS 234." },
{ co: "University of Technology Sydney", role: "Program Officer · Women in Engineering & IT", year: "2022", desc: "Led delivery of the Student Ambassador program, covering stakeholder liaison, delivery-risk mitigation and weekly status reporting to the faculty, and automated faculty comms with Salesforce Email Studio and Mail Merge, lifting newsletter open rates and event attendance." },
{ co: "BusinessOne Consulting", role: "Strategy Consultant · University of Sydney student society", year: "2022", desc: "Analysed 6 competitors in Australia's healthcare consulting market to sharpen the client's value proposition." },
{ co: "ANZ Bank", role: "Technology Intern", year: "2021", desc: "Produced configuration management and steering committee documentation to tighten project governance at a major Australian bank." }];




const NUMBERS = [
{ fig: "$90", unit: "M+", label: "Transformation program shaped", desc: "Scope, deliverables, dependencies and schedule for a telco client's new operating model." },
{ fig: "$257", unit: "k", label: "Spend variances surfaced", desc: "Forecast-to-actual reconciliation across 19 teams, investigated with every initiative owner." },
{ fig: "20", unit: "+", label: "Executive workshops facilitated", desc: "Problem framing, capacity analysis and roadmap co-design with client executives." },
{ fig: "9", unit: "", label: "Workstreams reconciled", desc: "Individual timelines merged into one program master schedule in MS Project." }];


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
             rail freight, and insurance.
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
            <a href="Minh Anh Pham - Resume.pdf" className="btn btn-ghost" download="Minh Anh Pham - Resume.pdf">
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
              <strong>NCS Australia</strong>
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
            <img src="assets/headshot.jpg" alt="Minh Anh Pham" width="380" height="475" loading="eager" fetchpriority="high" decoding="async" />
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
          <span className="eyebrow">About</span>
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
          <span className="eyebrow">Experience</span>
          <h2 className="h-section">Where I've <em>done the work.</em></h2>
        </div>
        <div className="section-head-right">
          {EXPERIENCE.length} roles · 2023 → now<br />
          + {OTHER_EXP.length} earlier roles
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
            <span className="eyebrow">Get in touch</span>
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
            <a className="contact-link" href="https://www.linkedin.com/in/minh-anh-pham4/" target="_blank" rel="noopener noreferrer">
              <div>
                <div className="contact-link-label">LinkedIn</div>
                <div>/in/minh-anh-pham4</div>
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
  body: <>In my downtime, I like to crochet trinkets and accessories for my friends and family. It’s a great way to relax, practice mindfulness, and giving others joy provides me with joy as well. I built Minochet to show my loved ones my current projects. </>,
  foot: { label: "minochet.lovable.app", href: "https://minochet.lovable.app/dashboard/view/87a6e5fe-f4c8-4c20-b7cc-493a36224326" }
},
{
  eyebrow: "Moving",
  glyph: "◆",
  title: <>Boxing & <em>Muay Thai</em></>,
  body: <>I firmly believe in “moving gives you energy”. I box and do muay thai twice a week which I’ve found to be a great balance with work. </>,
  foot: { label: "Sydney · ongoing" },
  gold: true
},
{
  eyebrow: "Showing up",
  glyph: "♠",
  title: <>LGBTQ+ <em>advocacy</em></>,
  body: <>I volunteer with <a href="https://www.acon.org.au/" target="_blank" rel="noopener"><b>ACON</b></a> and <a href="https://ycollab.com.au/" target="_blank" rel="noopener"><b>YCOLLAB</b></a> on community programs and youth engagement. Advocating for LGBTQ+ youth in Western Sydney keeps me grounded; the community I’ve built in this brings me a great sense of belonging, and I hope to pass that on to others. </>,
  foot: { label: "ACON · YCOLLAB" }
}];


function Play() {
  return (
    <section id="play">
      <div className="section-head reveal in">
        <div>
          <span className="eyebrow">Play</span>
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
          <img src="assets/play-photo-1.jpg" alt="" className="play-photo-img" loading="lazy" decoding="async" />
        </div>
        <div className="play-photo">
          <img src="assets/play-photo-2.png" alt="" className="play-photo-img" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>);

}

export { Hero, About, Experience, Play, Contact };
