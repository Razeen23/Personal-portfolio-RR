import { useEffect, useRef, useState } from "react";
import {
  awards,
  catalogue,
  certifications,
  chapters,
  education,
  facts,
  languages,
  marquee,
  person,
  practice,
  resumes,
  proof,
  roles,
  stills,
} from "./data";

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Intro({ onDone }) {
  const [leave, setLeave] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    if (reduceMotion()) {
      onDoneRef.current();
      return undefined;
    }
    const leaveTimer = setTimeout(() => setLeave(true), 1250);
    const doneTimer = setTimeout(() => onDoneRef.current(), 2050);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <div className={`intro${leave ? " leave" : ""}`} aria-hidden="true">
      <div className="intro-card">
        <p className="meta">Chennai, India</p>
        <p className="who">{person.name}</p>
        <p className="intro-title">{person.title}</p>
        <div className="intro-line" />
      </div>
    </div>
  );
}

function NameGravity() {
  const markRef = useRef(null);

  const shift = (event) => {
    const mark = markRef.current;
    if (!mark || reduceMotion()) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mark.style.transform = `translate(${x * -36}px, ${y * 10}px)`;
  };

  const reset = () => {
    if (markRef.current) markRef.current.style.transform = "";
  };

  return (
    <div
      className="mark-wrap"
      onMouseMove={shift}
      onMouseLeave={reset}
      aria-hidden="true"
    >
      <p className="mark" ref={markRef}>RAZEEN</p>
    </div>
  );
}

const studyPicks = [
  {
    id: "01",
    label: "The assistant",
    line: "A customer asks inside the product. The answer comes from the docs, not from memory.",
  },
  {
    id: "02",
    label: "Kubernetes",
    line: "A GitHub repo or a ZIP becomes a live URL. Helm installs it in its own namespace.",
  },
  {
    id: "03",
    label: "The buckets",
    line: "S3-compatible storage. Accounts, upload, versioning, and who can open the object.",
  },
];

function StudyHook({ onPick }) {
  const [active, setActive] = useState(studyPicks[0]);

  return (
    <aside className="hook" aria-label="Continue into the case studies">
      <div className="hook-inner">
        <p className="eyebrow">03 — Stay with it</p>
        <h2>The pictures are only the surface.</h2>
        <p className="hook-lead">Choose one. The case study opens just below.</p>
        <div className="choice-row">
          {studyPicks.map((pick) => (
            <button
              key={pick.id}
              type="button"
              className={`choice${active.id === pick.id ? " on" : ""}`}
              onClick={() => {
                setActive(pick);
                onPick(pick.id);
              }}
            >
              <span>{pick.id}</span>
              {pick.label}
            </button>
          ))}
        </div>
        <p className="hook-note" aria-live="polite">{active.line}</p>
        <a className="btn solid" href={`#study-${active.id}`}>
          Open {active.label}
        </a>
      </div>
    </aside>
  );
}

const practicePicks = [
  {
    id: "01",
    label: "The assistant",
    line: "Retrieval first. The model answers only from the text that was found.",
  },
  {
    id: "02",
    label: "Kubernetes",
    line: "Helm installs the image in its own namespace. A failed deploy comes back with a cause.",
  },
  {
    id: "03",
    label: "The buckets",
    line: "S3-compatible storage on Ceph, with a policy on who can open the object.",
  },
];

function PracticeHook({ onPick }) {
  const [active, setActive] = useState(practicePicks[0]);

  return (
    <aside className="hook hook-deep" aria-label="Continue into the practice">
      <div className="hook-inner">
        <p className="eyebrow">06 — The record is behind you</p>
        <h2>The assistant, the cluster, or the buckets.</h2>
        <p className="hook-lead">Open one. That column lights up in the section below.</p>
        <div className="choice-row">
          {practicePicks.map((pick) => (
            <a
              key={pick.id}
              className={`choice${active.id === pick.id ? " on" : ""}`}
              href={`#practice-${pick.id}`}
              onClick={() => {
                setActive(pick);
                onPick(pick.id);
              }}
            >
              <span>{pick.id}</span>
              {pick.label}
            </a>
          ))}
        </div>
        <p className="hook-note" aria-live="polite">{active.line}</p>
      </div>
    </aside>
  );
}

const methodSteps = [
  {
    title: "An open question",
    copy: "Each stop asked you to choose before the next block appeared. An unfinished choice is harder to leave than a finished paragraph.",
  },
  {
    title: "One pointer",
    copy: "Each screen had a single filled button. The eye followed that, not a row of equal links.",
  },
  {
    title: "A counted path",
    copy: "The small line said 1 of 4, then 2, then 3. A visible end feels close, so finishing feels reasonable.",
  },
  {
    title: "A choice the page answered",
    copy: "The project you picked was marked. The practice you picked was lit. The note you chose became the subject of the letter. The page changed because you acted.",
  },
  {
    title: "Proof beside the ask",
    copy: "The line stayed specific: the assistant answers from the docs, Kubernetes takes a repo live, the buckets are S3-compatible. A concrete line holds longer than a slogan.",
  },
  {
    title: "The same name at both ends",
    copy: "RAZEEN opened the page and closes it. The last screen feels like an ending, so the scroll feels complete rather than abandoned.",
  },
];

function MethodReveal() {
  const [open, setOpen] = useState(false);

  return (
    <section className="close" id="method" aria-label="How the page held your attention">
      <div className="close-copy">
        <p className="eyebrow">Diploma in Counseling Psychology · Sypa IIE</p>
        <h2>If you are reading this, you scrolled the whole page.</h2>
        <p className="method-lead">
          Two possibilities. The profile was interesting enough to finish. Or the method worked.
        </p>
        <p className="close-body">
          I completed a diploma in counseling psychology. The same care I would give a person in a room, I used here: one next step, a question left open, and a small choice the page then answered. Guidance, not a trap. You could have left on any line.
        </p>
        <button
          type="button"
          className="btn solid"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Hide the method" : "What method"}
        </button>
        {open && (
          <ol className="method-list">
            {methodSteps.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        )}
        <div className="close-end">
          <p className="eyebrow">End</p>
          <h2>The name from the first screen is the signature.</h2>
          <p className="proof">{proof}</p>
          <a className="btn solid" href="#contact">Write to me</a>
        </div>
      </div>
      <NameGravity />
    </section>
  );
}

const intents = [
  {
    id: "assistant",
    label: "The assistant",
    line: "An answer from your docs, and a ticket only when it cannot finish.",
    subject: "The support assistant",
  },
  {
    id: "kubernetes",
    label: "Kubernetes",
    line: "A repository or a ZIP, live, with Helm, TLS, and its own namespace.",
    subject: "The Kubernetes path",
  },
  {
    id: "buckets",
    label: "The buckets",
    line: "S3-compatible storage: accounts, upload, versioning, and who can open the object.",
    subject: "Object storage",
  },
];

function IntentHook({ onPick }) {
  const [active, setActive] = useState(null);
  const subject = active ? `${active.subject} — from the portfolio` : "Hello from the portfolio";
  const href = `mailto:${person.email}?subject=${encodeURIComponent(subject)}`;

  return (
    <aside className="hook" aria-label="Choose what to write about">
      <div className="hook-inner">
        <p className="eyebrow">09 — Before you write</p>
        <h2>What should the note be about?</h2>
        <p className="hook-lead">Pick one. The letter opens with that subject already set.</p>
        <div className="choice-row">
          {intents.map((intent) => (
            <button
              key={intent.id}
              type="button"
              className={`choice${active?.id === intent.id ? " on" : ""}`}
              onClick={() => {
                setActive(intent);
                onPick(intent);
              }}
            >
              {intent.label}
            </button>
          ))}
        </div>
        <p className="hook-note" aria-live="polite">
          {active ? active.line : "Three ways in. None of them is a form."}
        </p>
        <a className="btn solid" href={href}>
          {active ? `Write about ${active.label.toLowerCase()}` : "Write anyway"}
        </a>
      </div>
    </aside>
  );
}

function ResumePicker() {
  const [region, setRegion] = useState(resumes[0].id);
  const [viewing, setViewing] = useState(false);
  const resume = resumes.find((item) => item.id === region) || resumes[0];

  return (
    <div className="resumes" id="resume">
      <p className="eyebrow">Résumé</p>
      <p className="resume-lead">Choose India or the UAE, then read it here or save the file.</p>
      <div className="resume-choices" role="radiogroup" aria-label="Which résumé">
        {resumes.map((item) => (
          <button
            key={item.id}
            type="button"
            role="radio"
            aria-checked={region === item.id}
            className={`choice${region === item.id ? " on" : ""}`}
            onClick={() => {
              setRegion(item.id);
              setViewing(false);
            }}
          >
            <span>{item.label}</span>
            {item.note}
          </button>
        ))}
      </div>
      <div className="resume-actions">
        <button type="button" className="btn ghost" onClick={() => setViewing((open) => !open)}>
          {viewing ? `Hide the ${resume.label} résumé` : `View the ${resume.label} résumé`}
        </button>
        <a className="btn solid" href={resume.href} download={resume.file}>
          Download {resume.label}
        </a>
      </div>
      {viewing && (
        <div className="resume-frame">
          <iframe title={`${resume.label} résumé`} src={resume.href} />
          <a className="text-link" href={resume.href} target="_blank" rel="noreferrer">
            Open the {resume.label} résumé in a new tab
          </a>
        </div>
      )}
    </div>
  );
}

function Nav({ open, setOpen, stuck, step }) {
  const close = () => setOpen(false);
  return (
    <header className={`nav${stuck ? " stuck" : ""}${open ? " open" : ""}`}>
      <a className="brand" href="#top" onClick={close}>
        <strong>Razeen H</strong>
        <span>{stuck ? step : "GenAI Full Stack"}</span>
      </a>
      <nav className="nav-links" aria-label="Primary">
        <a href="#work">Work</a>
        <a href="#record">Record</a>
        <a href="#practice">Practice</a>
        <a href="#about">About</a>
      </nav>
      <a className="nav-cta" href="#contact">
        Write
      </a>
      <button
        className="menu-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
      </button>
    </header>
  );
}

export default function App() {
  const [ready, setReady] = useState(reduceMotion());
  const [showIntro, setShowIntro] = useState(!reduceMotion());
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [practiceFocus, setPracticeFocus] = useState(null);
  const [studyFocus, setStudyFocus] = useState(null);
  const [intent, setIntent] = useState(null);
  const [step, setStep] = useState("1 of 4 — the work");
  const reelRef = useRef(null);
  const finishIntro = () => {
    setReady(true);
    setShowIntro(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      const progress = max > 0 ? root.scrollTop / max : 0;
      root.style.setProperty("--scroll", String(progress));
      setStuck((previous) => (window.scrollY > 8) === previous ? previous : window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stops = [
      ["work", "1 of 4 — the work"],
      ["record", "2 of 4 — the record"],
      ["practice", "3 of 4 — the practice"],
      ["contact", "4 of 4 — write"],
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const found = stops.find(([id]) => id === visible.target.id);
        if (found) setStep(found[1]);
      },
      { threshold: [0.2, 0.45] }
    );
    stops.forEach(([id]) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [ready]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const nudgeReel = (direction) => {
    const node = reelRef.current;
    if (!node) return;
    node.scrollBy({
      left: direction * Math.min(node.clientWidth * 0.86, 780),
      behavior: reduceMotion() ? "auto" : "smooth",
    });
  };

  const track = [...marquee, ...marquee];

  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <div className="grain" aria-hidden="true" />
      <div className="progress" aria-hidden="true" />
      {showIntro && <Intro onDone={finishIntro} />}
      <Nav open={open} setOpen={setOpen} stuck={stuck} step={step} />
      {open && (
        <div className="menu-panel">
          <a href="#work" onClick={() => setOpen(false)}>Work</a>
          <a href="#record" onClick={() => setOpen(false)}>Record</a>
          <a href="#practice" onClick={() => setOpen(false)}>Practice</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Write</a>
        </div>
      )}

      <main id="top" className={ready ? "ready" : ""}>
        <section
          className="hero"
          aria-label="Introduction"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
            event.currentTarget.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
          }}
        >
          <div className="hero-main">
            <p className="kicker">
              {person.name} · {person.title} · {person.city}
            </p>
            <h1>
              I ship the product
              <br />
              <em>and the intelligence</em>
              <br />
              inside it.
            </h1>
            <p className="lede">{proof}</p>
            <div className="actions">
              <a className="btn solid" href="#work">See the work</a>
              <a className="text-link" href="#resume">Résumé</a>
            </div>
          </div>
          <NameGravity />
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {track.map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <section id="work">
          <div className="reel-head">
            <div>
              <p className="eyebrow">Project gallery</p>
              <h2>Selected work.</h2>
            </div>
            <div className="reel-nav">
              <button type="button" onClick={() => nudgeReel(-1)} aria-label="Previous still">
                ←
              </button>
              <button type="button" onClick={() => nudgeReel(1)} aria-label="Next still">
                →
              </button>
            </div>
          </div>
          <div className="reel" ref={reelRef}>
            {stills.map((still, index) => (
              <figure className="frame" key={still.src || `${still.title}-${index}`}>
                <div className={`frame-still${still.placeholder ? " placeholder" : ""}`}>
                  {still.src ? (
                    <img src={still.src} alt="" loading="lazy" />
                  ) : (
                    <span className="frame-empty">Image forthcoming</span>
                  )}
                </div>
                <figcaption>
                  <strong>{still.title}</strong>
                  <span>{still.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <StudyHook onPick={setStudyFocus} />

          <div className="section" id="studies" style={{ paddingBottom: 0 }}>
            <div className="section-head">
              <div>
                <p className="eyebrow">Case studies</p>
                <h2>Assistant, Kubernetes, buckets.</h2>
              </div>
            </div>
            {chapters.map((chapter) => (
              <article
                className={`chapter${studyFocus ? (studyFocus === chapter.no ? " lit" : " dim") : ""}`}
                id={`study-${chapter.no}`}
                key={chapter.no}
              >
                <div className="chapter-copy">
                  <p className="eyebrow">{chapter.no} — {chapter.kicker}</p>
                  <h3>{chapter.title}</h3>
                  {chapter.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <ul className="stack">
                    {chapter.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {chapter.links && (
                    <div className="chapter-links">
                      {chapter.links.map((link) => (
                        <a key={link.href} className="text-link" href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <figure className="chapter-still">
                  <div className={`shot${chapter.placeholder ? " placeholder" : ""}`}>
                    <span className="shot-index">{chapter.no}</span>
                    {chapter.image ? (
                      <img src={chapter.image} alt={chapter.alt} />
                    ) : (
                      <span className="frame-empty">Photograph forthcoming</span>
                    )}
                  </div>
                </figure>
              </article>
            ))}
          </div>

          <div className="catalogue">
            <div className="section-head" style={{ paddingTop: "clamp(56px, 7vw, 96px)" }}>
              <div>
                <p className="eyebrow">Index</p>
                <h2>The rest of the reel.</h2>
              </div>
            </div>
            {catalogue.map((item) => (
              <article className="row" key={item.no}>
                <span className="no">{item.no}</span>
                <h3>{item.title}</h3>
                <p>{item.blurb}</p>
                {item.href ? (
                  <a className="meta" href={item.href} target="_blank" rel="noreferrer">
                    {item.stack}
                  </a>
                ) : (
                  <span className="meta">{item.stack}</span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="record">
          <div className="section-head">
            <div>
              <p className="eyebrow">Record</p>
              <h2>Where the work happened.</h2>
            </div>
            <p>Hostzop from August 2023. Aspire for the summer before that.</p>
          </div>
          <div className="facts">
            {facts.map((fact) => (
              <div className="fact" key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
          {roles.map((role) => (
            <article className="role" key={role.org}>
              <header>
                <p>{role.when}</p>
                <p>{role.place}</p>
              </header>
              <div>
                <h3>
                  {role.title}
                  <span>{role.org}</span>
                </h3>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <PracticeHook onPick={setPracticeFocus} />

        <section className="section" id="practice">
          <div className="section-head">
            <div>
              <p className="eyebrow">Practice</p>
              <h2>Assistant, cluster, buckets.</h2>
            </div>
          </div>
          <div className="practice">
            {practice.map((item) => (
              <article
                id={`practice-${item.no}`}
                key={item.no}
                className={
                  practiceFocus
                    ? practiceFocus === item.no
                      ? "lit"
                      : "dim"
                    : undefined
                }
              >
                <span className="no">{item.no}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="about-grid">
            <div>
              <p className="eyebrow">About</p>
              <p className="lead">
                I build the assistant that answers from a company’s own docs,
                the Kubernetes path that takes a repository live, and the
                S3-compatible buckets an organization stores its files in.
              </p>
            </div>
            <div className="about-cols">
              <div>
                <h3>Education</h3>
                <ul>
                  {education.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}</strong>
                      {item.meta}
                    </li>
                  ))}
                </ul>
                <h3 style={{ marginTop: 28 }}>Languages</h3>
                <ul>
                  {languages.map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Certifications</h3>
                <ul>
                  {certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3 style={{ marginTop: 28 }}>Awards</h3>
                <ul>
                  {awards.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <IntentHook onPick={setIntent} />

        <section className="section contact" id="contact">
          <div className="contact-block">
            <p className="eyebrow">Contact</p>
            <h2>{intent ? `Write about ${intent.label.toLowerCase()}.` : "Get in touch."}</h2>
            <p className="proof">{proof}</p>
            <div className="identity">
              <strong>{person.name}</strong>
              <p className="role-line">{person.title}</p>
              <dl className="identity-list">
                <div>
                  <dt>Email</dt>
                  <dd><a href={`mailto:${person.email}`}>{person.email}</a></dd>
                </div>
                <div>
                  <dt>India</dt>
                  <dd><a href={person.phoneHref}>{person.phone}</a></dd>
                </div>
                <div>
                  <dt>UAE</dt>
                  <dd><a href={person.uaeHref}>{person.uae}</a></dd>
                </div>
                <div>
                  <dt>WhatsApp</dt>
                  <dd><a href={person.whatsapp} target="_blank" rel="noreferrer">Message on WhatsApp</a></dd>
                </div>
                <div>
                  <dt>LinkedIn</dt>
                  <dd>
                    <a href={person.linkedin} target="_blank" rel="noreferrer">razeen-developer</a>
                  </dd>
                </div>
                <div>
                  <dt>GitHub</dt>
                  <dd>
                    <a href={person.github} target="_blank" rel="noreferrer">Razeen23</a>
                  </dd>
                </div>
                <div>
                  <dt>Based in</dt>
                  <dd>{person.city}</dd>
                </div>
              </dl>
            </div>
            <div className="contact-actions">
              <a
                className="btn solid"
                href={`mailto:${person.email}?subject=${encodeURIComponent(
                  intent ? `${intent.subject} — from the portfolio` : "Hello from the portfolio"
                )}`}
              >
                {intent ? `Write about ${intent.label.toLowerCase()}` : "Send a note"}
              </a>
            </div>
            <ResumePicker />
          </div>
        </section>

        <MethodReveal />
      </main>
      <footer className="footer">
        <span>Razeen H — GenAI Full Stack Developer — Chennai</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
