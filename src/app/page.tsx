import Section from "@/components/Section";
import { techAreas, creativeAreas, contact } from "@/content/site";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path d="M3.5 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SignalArtwork() {
  return (
    <div className="signal-art" aria-hidden="true">
      <div className="signal-art__glow" />
      <div className="signal-art__orbit signal-art__orbit--outer" />
      <div className="signal-art__orbit signal-art__orbit--inner" />
      <svg className="signal-art__network" viewBox="0 0 560 520" fill="none">
        <path className="network-line" d="m75 350 114-144 125 87 96-160 84 93M189 206l-21-131 146 28m0 190 49 137 97-204M75 350l117 93 136-150 170 102M314 103l96 30M168 75l-64 111 85 20m125 87-38-219m99 68 27 116 97-23" />
        <path className="network-line network-line--soft" d="m104 186 154 17 56-100 96 30 84 93-13 169-136-32-168 80-102-93z" />
        <circle className="network-node network-node--large" cx="314" cy="293" r="8" />
        <circle className="network-node" cx="189" cy="206" r="5" />
        <circle className="network-node" cx="410" cy="133" r="5" />
        <circle className="network-node network-node--muted" cx="75" cy="350" r="4" />
        <circle className="network-node network-node--muted" cx="168" cy="75" r="4" />
        <circle className="network-node" cx="494" cy="226" r="5" />
        <circle className="network-node network-node--muted" cx="460" cy="430" r="4" />
        <circle className="network-node" cx="192" cy="443" r="5" />
        <circle className="network-node network-node--muted" cx="363" cy="430" r="4" />
        <circle className="network-node network-node--muted" cx="104" cy="186" r="4" />
      </svg>
      <div className="signal-art__core">
        <span className="signal-art__core-label">VIF</span>
        <span className="signal-art__core-rule" />
        <span className="signal-art__core-subtitle">SIGNAL / STUDY</span>
      </div>
      <span className="signal-art__caption signal-art__caption--top">SYSTEMS THINKING</span>
      <span className="signal-art__caption signal-art__caption--bottom">01 — CONNECT / CREATE</span>
      <span className="signal-art__coordinate">SYSTEMS<br />STUDIO</span>
    </div>
  );
}

function CreativeArtwork({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="creative-art creative-art--piano" aria-hidden="true">
        <div className="piano-art__staff"><i /><i /><i /><i /><i /><b /><b /><b /></div>
        <div className="piano-art__halo" />
        <div className="piano-art__keys">
          {Array.from({ length: 14 }, (_, key) => <i key={key} />)}
          <span className="piano-art__black-keys">{Array.from({ length: 9 }, (_, key) => <i key={key} />)}</span>
        </div>
        <span className="creative-art__index">SOUND / 01</span>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="creative-art creative-art--film" aria-hidden="true">
        <div className="film-art__frame film-art__frame--back"><i /></div>
        <div className="film-art__frame film-art__frame--front"><i /><b /><span>FRAME / 24</span></div>
        <div className="film-art__play"><span /></div>
        <div className="film-art__timeline"><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <span className="creative-art__index">MOTION / 02</span>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="creative-art creative-art--design" aria-hidden="true">
        <div className="design-art__grid" />
        <div className="design-art__shape design-art__shape--circle" />
        <div className="design-art__shape design-art__shape--square" />
        <div className="design-art__type">Aa<span>.</span></div>
        <span className="design-art__vertical">FORM / COLOUR / TYPE</span>
        <span className="creative-art__index">DESIGN / 03</span>
      </div>
    );
  }

  return (
    <div className="creative-art creative-art--audio" aria-hidden="true">
      <div className="audio-art__disc"><i /><b /></div>
      <div className="audio-art__wave">{Array.from({ length: 34 }, (_, bar) => <i key={bar} />)}</div>
      <span className="audio-art__label">AUDIO / SIGNAL</span>
      <span className="creative-art__index">MEDIA / 04</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-shell">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span className="eyebrow__dot" /> Technology <span className="eyebrow__cross">×</span> Creative studio</p>
            <h1 id="hero-title">Building across<br />networks, software<br /><span>and sound.</span></h1>
            <p className="hero-intro">
              I’m Victor Iyanuoluwa Fadeyi, a Computer Science student at the University of Ibadan. I focus on networking and cybersecurity, and I’m currently on an industrial placement at Airtel.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button button--primary">Explore my work <ArrowIcon /></a>
              <a href="#contact" className="button button--quiet">Get in touch <ArrowIcon /></a>
            </div>
            <div className="hero-footnote"><span>01</span><span>Scroll to explore</span><span className="hero-footnote__line" /></div>
          </div>
          <div className="hero-visual" data-reveal>
            <div className="hero-parallax" data-parallax>
              <SignalArtwork />
            </div>
          </div>
        </div>
        <div className="hero-bottomline"><span>UNIVERSITY OF IBADAN</span><span>TECHNOLOGY / CREATIVE STUDIO</span><span>PORTFOLIO — VIF</span></div>
      </section>

      <Section id="technology" title="Technology" index="01" eyebrow="Systems & infrastructure" intro="Areas I’m studying, practising, and building through coursework and hands-on projects.">
        <div className="tech-grid">
          {techAreas.map((area, index) => (
            <article key={area.name} className="tech-card" data-reveal>
              <div className="tech-card__top"><span className="tech-card__index">0{index + 1}</span><span className="tech-card__spark" aria-hidden="true">↗</span></div>
              <h3>{area.name}</h3>
              <p className="tech-card__level">{area.level}</p>
              <p className="tech-card__detail">{area.detail}</p>
              <span className="tech-card__corner" aria-hidden="true" />
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" index="02" eyebrow="Selected work" intro="A few projects and experiments, with their current status kept clear.">
        <div className="project-list">
          {projects.filter((project) => project.featured).map((project, index) => (
            <article key={project.slug} className={`project-card project-card--${index === 0 ? "assistant" : "network"}`} data-reveal>
              <div className="project-card__art" aria-hidden="true">
                {index === 0 ? (
                  <div className="assistant-art">
                    <div className="assistant-art__orb"><span /></div>
                    <div className="assistant-art__line assistant-art__line--one" />
                    <div className="assistant-art__line assistant-art__line--two" />
                    <span className="assistant-art__label">EARLY FOUNDATION</span>
                  </div>
                ) : (
                  <div className="device-art">
                    <span className="device-art__wire device-art__wire--one" /><span className="device-art__wire device-art__wire--two" /><span className="device-art__wire device-art__wire--three" />
                    <i className="device-art__node device-art__node--one" /><i className="device-art__node device-art__node--two" /><i className="device-art__node device-art__node--three" /><i className="device-art__node device-art__node--four" />
                    <span className="device-art__label">DEVICE / RECORD</span>
                  </div>
                )}
              </div>
              <div className="project-card__body">
                <div className="project-card__meta"><span>PROJECT / 0{index + 1}</span><span className="status-pill"><i />{project.status}</span></div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-card__stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience" index="03" eyebrow="Learning in practice" intro="Placements and the work described in my current portfolio content.">
        <ol className="experience-list">
          {experience.map((item, index) => (
            <li key={item.org} className="experience-item" data-reveal>
              <div className="experience-item__marker"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
              <div className="experience-item__content">
                <div className="experience-item__date">{item.period}{item.current ? <span className="current-label"><i /> Ongoing</span> : null}</div>
                <h3>{item.org}</h3>
                <p className="experience-item__role">{item.role}{item.location ? ` · ${item.location}` : ""}</p>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="creative" title="Creative studio" index="04" eyebrow="A second way of thinking" intro="Music, moving image, design, and audio sit alongside my technology work. These panels are illustrative studies; work samples haven’t been added yet.">
        <div className="creative-grid">
          {creativeAreas.map((area, index) => (
            <article key={area} className="creative-card" data-reveal>
              <CreativeArtwork index={index} />
              <div className="creative-card__caption"><h3>{area}</h3><span aria-hidden="true"><ArrowIcon /></span></div>
            </article>
          ))}
        </div>
      </Section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-shell" data-reveal>
          <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
          <p className="eyebrow"><span className="eyebrow__dot" /> Contact / 05</p>
          <h2 id="contact-title">Let’s make<br /><span>something meaningful.</span></h2>
          <div className="contact-bottom">
            <p>For a conversation about technology, creative work, or a collaboration.</p>
            {contact.email || contact.linkedin || contact.github ? (
              <ul className="contact-links">
                {contact.email && <li><a href={`mailto:${contact.email}`}>{contact.email}<ArrowIcon /></a></li>}
                {contact.linkedin && <li><a href={contact.linkedin}>LinkedIn<ArrowIcon /></a></li>}
                {contact.github && <li><a href={contact.github}>GitHub<ArrowIcon /></a></li>}
              </ul>
            ) : (
              <p className="contact-note">Contact details haven’t been added yet.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
