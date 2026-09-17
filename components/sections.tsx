import { IMAGES } from './media'
import CompanyProfileDialog from './CompanyProfileDialog'

type Img = { src: string; width: number; height: number; alt: string }

/* Plain <img> keeps the original object-fit/filter compositions pixel-exact. */
/* eslint-disable @next/next/no-img-element */
function Picture({ image, ...rest }: { image: Img } & React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img src={image.src} width={image.width} height={image.height} alt={image.alt} {...rest} />
}

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-intro">
        <p className="eyebrow">The Real Estate Buyer Experience Company</p>
        <h1 id="hero-title">
          ONE VISION.
          <br />
          <span>EVERY EXPERIENCE.</span>
          <br />
          <em>ALIGNED.</em>
        </h1>
        <p className="hero-note">
          Strategy, story, imagery, technology and delivery&mdash;held in one buyer experience.
        </p>
      </div>
      <div className="hero-mosaic" aria-label="A selection of supplied FUTÉ architectural concept images">
        <figure className="mosaic-red">
          <figcaption>
            FUTÉ 2.0
            <br />
            Work to make
            <br />
            the unbuilt real.
          </figcaption>
        </figure>
        <figure>
          <Picture image={IMAGES.coast} />
          <figcaption>Place / perspective</figcaption>
        </figure>
        <figure>
          <Picture image={IMAGES.hero} />
          <figcaption>Arrival / experience</figcaption>
        </figure>
        <figure>
          <Picture image={IMAGES.interior} />
          <figcaption>Story / detail</figcaption>
        </figure>
      </div>
      <div className="hero-scroll">Scroll to explore</div>
    </section>
  )
}

export function IntroBlock() {
  return (
    <section className="intro reveal-block" id="about" aria-labelledby="about-title">
      <div className="intro-grid">
        <div>
          <p className="tag">About FUTÉ</p>
          <h2 id="about-title">A place becomes personal through life.</h2>
        </div>
        <p className="intro-copy">
          We begin with the life people imagine in a place. Then connect the strategy, story, imagery and
          technology that help them understand it.
        </p>
      </div>
      <div className="facts" aria-label="FUTÉ credentials">
        <div className="fact">
          <strong>17</strong>
          <span>Years since 2009</span>
        </div>
        <div className="fact">
          <strong>India</strong>
          <span>Original practice</span>
        </div>
        <div className="fact">
          <strong>Singapore · UAE</strong>
          <span>Global presence</span>
        </div>
        <div className="fact">
          <strong>Australia</strong>
          <span>Global presence</span>
        </div>
      </div>

      <HumanIdea />
      <FutureTriad />

      <div className="market-pulse" aria-label="FUTÉ global markets">
        <span>India</span>
        <span>Singapore</span>
        <span>UAE / Dubai</span>
        <span>Australia</span>
        <b>Local stories. Global standard.</b>
      </div>
    </section>
  )
}

function HumanIdea() {
  return (
    <section className="human-idea reveal-block" aria-labelledby="human-idea-title">
      <div className="human-index">
        <span>The human idea</span>
        <span>Light / material / movement / memory</span>
      </div>
      <div className="human-layout">
        <h2 id="human-idea-title">
          A place
          <br />
          becomes personal
          <br />
          through <em>life.</em>
        </h2>
        <div className="human-orbit" aria-hidden="true">
          <svg viewBox="0 0 420 420" role="img">
            <circle cx="210" cy="210" r="158" fill="none" stroke="currentColor" strokeWidth="1" />
            <ellipse cx="210" cy="210" rx="158" ry="67" fill="none" stroke="currentColor" strokeWidth="1" />
            <ellipse cx="210" cy="210" rx="67" ry="158" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M49 210H371M210 49V371" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="308" cy="124" r="12" fill="currentColor" />
            <circle cx="108" cy="288" r="5" fill="currentColor" />
          </svg>
          <span>
            Buyer
            <br />
            at centre
          </span>
        </div>
      </div>
      <div className="human-footer">
        <p>
          We begin with the life people imagine in a place. Then connect the strategy, story, imagery and
          technology that help them understand it.
        </p>
        <span>Every vision, story and sales experience&mdash;aligned around the buyer.</span>
      </div>
    </section>
  )
}

function FutureTriad() {
  return (
    <section className="future-triad reveal-block" aria-labelledby="triad-title">
      <div className="triad-intro">
        <p className="tag">One approved vision / three dimensions</p>
        <h2 id="triad-title">
          Story.
          <br />
          Imagery.
          <br />
          <em>Technology.</em>
        </h2>
        <p>
          Give the project human meaning. Make the place tangible through craft. Make project information
          explorable.
        </p>
      </div>
      <div className="triad-cells">
        <article className="triad-cell story-cell">
          <span>01 / Story</span>
          <strong>
            Human
            <br />
            meaning.
          </strong>
          <i aria-hidden="true"></i>
        </article>
        <article className="triad-cell image-cell">
          <span>02 / Imagery</span>
          <strong>
            Tangible
            <br />
            craft.
          </strong>
          <i aria-hidden="true"></i>
        </article>
        <article className="triad-cell tech-cell">
          <span>03 / Technology</span>
          <strong>
            Useful
            <br />
            exploration.
          </strong>
          <i aria-hidden="true"></i>
        </article>
      </div>
    </section>
  )
}

const CAPABILITIES = [
  ['01', 'Strategy', 'Define what matters to the buyer.'],
  ['02', 'Story', 'Give the project human meaning.'],
  ['03', 'Imagery', 'Make the place tangible through craft.'],
  ['04', 'Technology', 'Make project information explorable.'],
  ['05', 'Delivery', 'Carry one approved vision through every output.'],
] as const

export function Capabilities() {
  return (
    <section className="capabilities reveal-block" id="capabilities" aria-labelledby="capabilities-title">
      <div className="cap-head">
        <h2 id="capabilities-title">
          One architecture.
          <br />
          Five public pillars.
        </h2>
        <p>Every capability has a role in the buyer journey.</p>
      </div>
      <div className="cap-table">
        {CAPABILITIES.map(([number, title, copy]) => (
          <article className="cap" key={number}>
            <span className="cap-number">{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
            <span className="cap-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Showcase() {
  return (
    <section className="showcase reveal-block" id="work" aria-labelledby="work-title">
      <div className="showcase-title">
        <h2 id="work-title">
          The work
          <br />
          in experience.
        </h2>
        <p>Selected visual narratives</p>
      </div>
      <div className="work-grid">
        <figure className="project project-major">
          <Picture image={IMAGES.coast} />
          <figcaption>
            <span>Buyer experience / supplied image library</span>
            <strong>
              From a feeling
              <br />
              to a decision.
            </strong>
            <small>Discover · Understand · Believe</small>
          </figcaption>
        </figure>
        <div className="project-stack">
          <figure className="project project-small">
            <Picture image={IMAGES.lifestyle} />
            <figcaption>
              <span>Lifestyle film / supplied image library</span>
              <strong>Life, in every frame.</strong>
            </figcaption>
          </figure>
          <figure className="project project-small">
            <Picture image={IMAGES.interior} />
            <figcaption>
              <span>Story / supplied image library</span>
              <strong>From project to belief.</strong>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

const FILMS = [
  {
    image: IMAGES.aiArrival,
    meta: '01 — Arrival',
    title: 'Anticipation → Arrival',
    copy: 'An active morning ritual reveals a character’s desire for a different pace. Architecture enters through action.',
    tall: false,
  },
  {
    image: IMAGES.hero,
    meta: '02 — Explore',
    title: 'Discover → Believe',
    copy: 'Move through location, spaces and options in one coherent story—designed to make project information useful.',
    tall: true,
  },
  {
    image: IMAGES.aiEvening,
    meta: '03 — Belonging',
    title: 'Belonging → Memory',
    copy: 'Shared life and a quieter personal moment make the place feel lived in. End on the life she chooses.',
    tall: false,
  },
] as const

export function FilmReel() {
  return (
    <section className="film-reel reveal-block" id="films" aria-labelledby="films-title">
      <div className="film-reel-head">
        <div>
          <p className="tag">FUTÉ moving image / concept previews</p>
          <h2 id="films-title">
            The feeling
            <br />
            before the frame.
          </h2>
        </div>
        <p>A few film directions that put a person, not a property, at the centre of the experience.</p>
      </div>
      <div className="film-grid">
        {FILMS.map((film) => (
          <details className={film.tall ? 'film-card tall' : 'film-card'} key={film.meta}>
            <summary>
              <Picture image={film.image} />
              <span className="play-glyph" aria-hidden="true">
                ▶
              </span>
              <span className="film-meta">
                Film placeholder / 00:15
                <br />
                {film.meta}
              </span>
            </summary>
            <div className="film-treatment">
              <strong>{film.title}</strong>
              <p>{film.copy}</p>
            </div>
          </details>
        ))}
      </div>
      <p className="film-note">
        Concept placeholders only &mdash; final character, locations, rights and production status require
        approval.
      </p>
    </section>
  )
}

export function BuyerSignal() {
  return (
    <section className="buyer-signal reveal-block" aria-labelledby="buyer-signal-title">
      <div className="signal-copy">
        <p className="tag">Start with the next buyer question</p>
        <h2 id="buyer-signal-title">
          What should
          <br />
          your buyer
          <br />
          <em>
            understand, feel
            <br />
            and explore?
          </em>
        </h2>
        <p>
          Start with the question your buyers find hardest to understand: the location, the lifestyle, the plan
          or the choice between options.
        </p>
      </div>
      <div className="signal-wheel" aria-label="The connected buyer journey">
        <div className="wheel-core">
          Buyer
          <br />
          question
        </div>
        <span className="wheel-item one">Discover</span>
        <span className="wheel-item two">Understand</span>
        <span className="wheel-item three">Believe</span>
        <span className="wheel-item four">Explore</span>
        <span className="wheel-item five">Compare</span>
        <span className="wheel-item six">Decide</span>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section className="experience reveal-block" aria-labelledby="experience-title">
      <div className="experience-inner">
        <div>
          <p className="tag">Connected buyer journey</p>
          <h2 id="experience-title">
            Six buyer questions.
            <br />
            One coherent experience.
          </h2>
        </div>
        <div>
          <div className="journey">
            <div className="journey-row">
              <span>01</span>
              <strong>Discover / Understand</strong>
            </div>
            <div className="journey-row">
              <span>02</span>
              <strong>Believe / Explore</strong>
            </div>
            <div className="journey-row">
              <span>03</span>
              <strong>Compare / Decide</strong>
            </div>
          </div>
          <p className="journey-list">Location · spaces · options · next step</p>
        </div>
      </div>
    </section>
  )
}

const BEATS = [
  ['0–8 sec', 'Anticipation', 'An active morning ritual reveals a character’s desire for a different pace.'],
  ['8–18 sec', 'Arrival', 'Move through the project’s arrival route; architecture enters through action.'],
  ['18–47 sec', 'Belonging', 'Shared life and a quieter personal moment make the place feel lived in.'],
  ['47–60 sec', 'Memory', 'Return to the opening gesture in an evening setting; end on the life she chooses.'],
] as const

export function Lifecycle() {
  return (
    <section className="lifecycle reveal-block" aria-labelledby="life-title">
      <div className="lifecycle-grid">
        <div>
          <p className="tag">Buyer story system / lifestyle film</p>
          <h2 id="life-title">Life, in every frame.</h2>
        </div>
        <p className="lifecycle-lead">
          A lifestyle film begins with a character, then follows the moments where architecture becomes part of
          that person’s day.
        </p>
      </div>
      <div className="treatment">
        {BEATS.map(([time, title, copy]) => (
          <article className="beat" key={title}>
            <span>{time}</span>
            <strong>{title}</strong>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function AiSection() {
  return (
    <section className="ai reveal-block" aria-labelledby="ai-title">
      <div className="ai-panel">
        <div>
          <p className="tag">AI-supported creative production</p>
          <h2 id="ai-title">The character gives us someone to follow.</h2>
          <p className="ai-copy">
            AI supports character creation and creative production. The buyer remains the point of view.
          </p>
        </div>
        <p className="ai-meta">
          Character / wardrobe / light / camera / continuity
          <br />
          Approve the story before you make the frame.
        </p>
      </div>
      <div className="ai-image">
        <Picture image={IMAGES.aiArrival} />
        <span>Conceptual visual reference / supplied image library</span>
      </div>
    </section>
  )
}

const SYSTEMS = [
  ['01', 'Launch clarity', 'Align the proposition, Story DNA, messaging and launch-content direction.'],
  ['02', 'Buyer story', 'Connect narrative, CGI, film and lifestyle content.'],
  ['03', 'Interactive decision', 'Organise approved project information into a guided experience.'],
  [
    '04',
    'Portfolio experience',
    'Discovery, filtering, approved assets and a standard project-information template.',
  ],
] as const

export function Systems() {
  return (
    <section className="systems reveal-block" aria-labelledby="systems-title">
      <div className="systems-head">
        <div>
          <p className="tag">Commercial offer</p>
          <h2 id="systems-title">Four commercial systems.</h2>
        </div>
        <p className="systems-lead">
          Create a consistent structure across projects, markets and approved assets.
        </p>
      </div>
      <div className="system-grid">
        {SYSTEMS.map(([number, title, copy]) => (
          <article className="system" key={number}>
            <span>{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

const DELIVERY = [
  ['01', 'Inputs', 'Brief, plans, model, brand assets and accountable approval.'],
  ['02', 'Direction', 'Story DNA, visual direction, narrative treatment and sequence.'],
  ['03', 'Production', 'Approved imagery, film, interactive modules and review.'],
  ['04', 'Handover', 'Quality control, final files, rights record and sales-team orientation.'],
] as const

export function Delivery() {
  return (
    <section className="delivery reveal-block" aria-labelledby="delivery-title">
      <div className="delivery-head">
        <div>
          <p className="tag">One approved vision / carried through delivery</p>
          <h2 id="delivery-title">How teams align.</h2>
        </div>
        <p>Leadership, design, marketing and sales. One approved project story, centred on the buyer.</p>
      </div>
      <div className="delivery-steps">
        {DELIVERY.map(([number, title, copy]) => (
          <article className="delivery-step" key={number}>
            <b>{number}</b>
            <strong>{title}</strong>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

const VOICE = [
  ['Name the work.', 'A film, a masterplan and an interactive experience built around one story.'],
  ['Keep emotion specific.', 'Morning light. A familiar face. A place to return to.'],
  ['Explain technology plainly.', 'Explore approved project plans and media in one interface.'],
] as const

export function Voice() {
  return (
    <section className="voice reveal-block" aria-labelledby="voice-title">
      <div className="voice-grid">
        <div>
          <p className="tag">A voice people recognise</p>
          <h2 id="voice-title">Begin with the person.</h2>
        </div>
        <div className="voice-list">
          {VOICE.map(([title, copy]) => (
            <article className="voice-item" key={title}>
              <strong>{title}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Perspective() {
  return (
    <section className="perspective reveal-block" id="perspective" aria-labelledby="perspective-title">
      <div className="perspective-grid">
        <div>
          <p className="tag">FUTÉ 2.0 / global perspective</p>
          <h2 id="perspective-title">A world of different perspectives.</h2>
        </div>
        <p className="perspective-copy">
          A distinctly local project story, held to an international standard of experience.
        </p>
      </div>
      <div className="global-markets">
        <span>India</span>
        <span>Singapore</span>
        <span>UAE / Dubai</span>
        <span>Australia</span>
      </div>
      <div className="global-network" aria-label="FUTÉ global market network">
        <svg viewBox="0 0 1200 260" role="img" aria-labelledby="network-title">
          <title id="network-title">
            FUTÉ global presence across India, Singapore, UAE Dubai and Australia
          </title>
          <path
            d="M108 150C265 48 352 214 529 124S771 35 894 130s178 45 230 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="2 8"
          />
          <path
            d="M108 150C278 215 362 54 529 124s234 150 365 6 176-52 230 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity=".55"
          />
          <g fill="currentColor">
            <circle cx="108" cy="150" r="7" />
            <circle cx="529" cy="124" r="7" />
            <circle cx="894" cy="130" r="7" />
            <circle cx="1124" cy="140" r="7" />
          </g>
          <g className="network-label">
            <text x="88" y="184">
              INDIA
            </text>
            <text x="494" y="98">
              SINGAPORE
            </text>
            <text x="856" y="166">
              UAE / DUBAI
            </text>
            <text x="1084" y="174">
              AUSTRALIA
            </text>
          </g>
        </svg>
      </div>
      <div className="perspective-line">
        <strong>The client and the buyer</strong>
        <p>
          The developer is FUTÉ’s client. The property buyer is the developer’s customer. Every output must
          serve the developer’s communication needs and the buyer’s understanding.
        </p>
      </div>
    </section>
  )
}

const COLLABORATORS = [
  'Hiranandani',
  'The Wadhwa Group',
  'Shapoorji Pallonji',
  'Brigade Group',
  'CapitaLand',
  'RSP',
  'L&T Realty',
  'Oberoi Realty',
  'Godrej Properties',
  'Phoenix',
  'Embassy Group',
]

export function Clients() {
  return (
    <section className="clients reveal-block" aria-labelledby="clients-title">
      <div className="clients-head">
        <div>
          <p className="tag">Client list</p>
          <h2 id="clients-title">
            Built with
            <br />
            ambition.
          </h2>
        </div>
        <p>Selected client and collaborator logos supplied by FUTÉ.</p>
      </div>
      <div className="client-field">
        <div className="client-signal" aria-hidden="true">
          <span>
            Selected
            <br />
            partners
          </span>
          <i></i>
          <b>
            17
            <br />
            years
          </b>
        </div>
        <div className="logo-sheets">
          <figure>
            <Picture image={IMAGES.clientsA} />
            <figcaption>Client and collaborator list / supplied by FUTÉ</figcaption>
          </figure>
          <figure>
            <Picture image={IMAGES.clientsB} />
            <figcaption>Client and collaborator list / supplied by FUTÉ</figcaption>
          </figure>
        </div>
        <div className="client-rail" aria-label="Selected collaborators named in FUTÉ supplied logo sheets">
          <div>
            {COLLABORATORS.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function CaseStudy() {
  return (
    <section className="case reveal-block" aria-labelledby="case-title">
      <div className="case-inner">
        <div>
          <p className="tag" style={{ color: '#151513' }}>
            Client testimonial
          </p>
          <h2 id="case-title">
            Hiranandani Sands,
            <br />
            Alibaug.
          </h2>
        </div>
        <div>
          <blockquote>
            All serviced apartments at Hiranandani Sands, Alibaug has been sold out in 1 day i.e. Saturday and
            that too in record time.
          </blockquote>
          <cite>Sumon Das</cite>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-head">
        <span>FUTÉ 2.0</span>
        <span>The Real Estate Buyer Experience Company</span>
      </div>
      <div>
        <img className="footer-mark" src="/logo.png" width={504} height={161} alt="FUTÉ services" />
        <h2>
          Start with
          <br />
          your <em>next question.</em>
        </h2>
        <a className="button" href="mailto:Soma@futeservices.com?subject=FUT%C3%89%202.0%20project%20enquiry">
          Discuss your project
        </a>
      </div>
      <div className="footer-bottom">
        <div className="emails">
          <a href="mailto:Soma@futeservices.com">Soma@futeservices.com</a>
          <a href="mailto:Payel@futeservices.com">Payel@futeservices.com</a>
        </div>
        <div className="markets">India / Singapore / UAE · Dubai / Australia</div>
      </div>
      <div className="footer-profile">
        <CompanyProfileDialog />
      </div>
    </footer>
  )
}
