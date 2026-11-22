import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Clapperboard,
  Film,
  Image as ImageIcon,
  Play,
  ScanLine,
} from "lucide-react"

const services = [
  {
    number: "01",
    title: "Short-form video",
    detail: "Reels, TikToks & social-first stories",
    icon: Play,
  },
  {
    number: "02",
    title: "Long-form video",
    detail: "YouTube, interviews & branded films",
    icon: Film,
  },
  {
    number: "03",
    title: "Motion graphics",
    detail: "Titles, transitions & visual details",
    icon: ScanLine,
  },
  {
    number: "04",
    title: "Photo editing",
    detail: "Thoughtful color, considered finishes",
    icon: ImageIcon,
  },
]

const projects = [
  { number: "01", type: "SHORT-FORM EDIT", tone: "project-card--amber" },
  { number: "02", type: "BRAND FILM", tone: "project-card--blue" },
  { number: "03", type: "MOTION & DESIGN", tone: "project-card--olive" },
]

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="section-label__line" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}

export function PortfolioSite() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Jay Ar Zeraus Bao, home">
          <span className="wordmark__mark">J<span>/</span>Z<span>/</span>B</span>
          <span className="wordmark__caption">Independent video editor</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">
          Let&apos;s talk <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero__image" style={{ backgroundImage: "url('portfolio-cinematic.png')" }} aria-hidden="true" />
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow"><span className="eyebrow__dot" /> Freelance video editor</p>
          <h1 id="hero-title">Jay Ar Zeraus<br /><em>Bao.</em></h1>
          <div className="hero__bottom">
            <div>
              <p className="hero__statement">Turning ideas into<br />visual stories.</p>
              <p className="hero__intro">I&apos;m a freelance video editor passionate about creating engaging and meaningful visual content for creators and businesses worldwide.</p>
              <div className="hero__actions">
                <a className="button button--light" href="#portfolio">View my work <ArrowDownRight aria-hidden="true" /></a>
                <a className="text-link" href="#contact">Contact me <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </div>
            <p className="hero__index"><span>01</span> / 04<br /><small>SCROLL TO EXPLORE</small></p>
          </div>
        </div>
        <div className="hero__vertical-note" aria-hidden="true">CUT WITH INTENTION · TOLD WITH FEELING</div>
      </section>

      <section className="about section-wrap" id="about" aria-labelledby="about-title">
        <SectionLabel number="01">A little about me</SectionLabel>
        <div className="about__grid">
          <h2 id="about-title">The right cut<br />changes <em>everything.</em></h2>
          <div className="about__copy">
            <p className="about__lead">Good editing is more than putting clips together. It&apos;s finding the feeling in the footage—and giving every frame a reason to be there.</p>
            <p>I&apos;m Jay Ar Zeraus Bao, a freelance video editor working with creators and businesses around the world. I bring a thoughtful eye, a collaborative process, and a love for the small details that make a story stay with you.</p>
            <a className="text-link text-link--light" href="#contact">A little more about working together <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="about__signoff"><span>JAY AR ZERAUS BAO</span><span>VIDEO EDITOR · VISUAL STORYTELLER</span></div>
      </section>

      <section className="services section-wrap" id="services" aria-labelledby="services-title">
        <SectionLabel number="02">What I can do</SectionLabel>
        <div className="services__heading">
          <h2 id="services-title">Made for the<br /><em>way you tell it.</em></h2>
          <p>From a single social cut to a story that needs room to breathe, each edit starts with your idea and is shaped around your audience.</p>
        </div>
        <div className="services__list">
          {services.map(({ number, title, detail, icon: Icon }) => (
            <article className="service-row" key={number}>
              <span className="service-row__number">{number}</span>
              <div className="service-row__title"><Icon aria-hidden="true" /><h3>{title}</h3></div>
              <p>{detail}</p>
              <ArrowUpRight className="service-row__arrow" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio section-wrap" id="portfolio" aria-labelledby="portfolio-title">
        <SectionLabel number="03">Selected work</SectionLabel>
        <div className="portfolio__heading">
          <h2 id="portfolio-title">Stories in<br /><em>the making.</em></h2>
          <p>A space for selected edits.<br />Your next project could be here.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.number}>
              <div className="project-card__art" aria-hidden="true">
                <span className="project-card__frame" />
                <span className="project-card__orb" />
                <span className="project-card__grain" />
                <span className="project-card__play"><Play fill="currentColor" aria-hidden="true" /></span>
                <span className="project-card__time">00:00&nbsp; / &nbsp;00:00</span>
              </div>
              <div className="project-card__meta">
                <span>{project.number} <i>—</i> {project.type}</span>
                <span>Project title <ArrowUpRight aria-hidden="true" /></span>
              </div>
            </article>
          ))}
        </div>
        <p className="portfolio__note"><Clapperboard aria-hidden="true" /> Project previews are placeholders—replace them with your own work.</p>
      </section>

      <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
        <SectionLabel number="04">Have a story in mind?</SectionLabel>
        <div className="contact__body">
          <div>
            <p className="eyebrow">Let&apos;s make something meaningful</p>
            <h2 id="contact-title">Your story<br />starts <em>here.</em></h2>
          </div>
          <div className="contact__details">
            <p>Have a project in mind, or just want to say hello? I&apos;d love to hear what you&apos;re working on.</p>
            <a className="contact__email" href="mailto:your@email.com">your@email.com <ArrowUpRight aria-hidden="true" /></a>
            <p className="contact__placeholder-note">Replace with your preferred email address.</p>
          </div>
        </div>
        <div className="contact__socials">
          <span>FIND ME ELSEWHERE</span>
          <div>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight aria-hidden="true" /></a>
            <a href="https://vimeo.com/" target="_blank" rel="noreferrer">Vimeo <ArrowUpRight aria-hidden="true" /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <span className="contact__placeholder-note">Update links with your profile handles.</span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark wordmark--footer" href="#home" aria-label="Jay Ar Zeraus Bao, back to top">
          <span className="wordmark__mark">J<span>/</span>Z<span>/</span>B</span>
          <span className="wordmark__caption">Independent video editor</span>
        </a>
        <p>© {new Date().getFullYear()} Jay Ar Zeraus Bao. Made with intention.</p>
        <a href="#home" className="footer-top">Back to top <ArrowUpRight aria-hidden="true" /></a>
      </footer>
    </main>
  )
}
