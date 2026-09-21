import { useEffect, useState } from 'react'

const LINKS = [
  ['#about', 'About'],
  ['#capabilities', 'Capabilities'],
  ['#work', 'Work'],
  ['#films', 'Films'],
  ['#systems', 'Systems'],
  ['#perspective', 'Global'],
] as const

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [pending, setPending] = useState<string | null>(null)

  useEffect(() => {
    const toggleNav = () => setScrolled(window.scrollY > 80)
    toggleNav()
    window.addEventListener('scroll', toggleNav, { passive: true })
    return () => window.removeEventListener('scroll', toggleNav)
  }, [])

  /* The panel covers the page, so hold the body still and give Escape a way out. */
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  /* A native hash jump is swallowed by that lock, so carry the target across the close. */
  useEffect(() => {
    if (open || !pending) return
    setPending(null)
    const target = document.querySelector(pending)
    if (!target) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
    history.replaceState(null, '', pending)
  }, [open, pending])

  /* A desktop-width viewport shows the full rail, so a stale open panel must clear. */
  useEffect(() => {
    const wide = window.matchMedia('(min-width:901px)')
    const close = () => {
      if (wide.matches) setOpen(false)
    }
    wide.addEventListener('change', close)
    return () => wide.removeEventListener('change', close)
  }, [])

  const followFromPanel = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!open) return
    event.preventDefault()
    setPending(href)
    setOpen(false)
  }

  const classNames = ['nav']
  if (scrolled) classNames.push('is-scrolled')
  if (open) classNames.push('is-open')

  return (
    <header className={classNames.join(' ')}>
      <a
        className="nav-brand"
        href="#top"
        aria-label="FUTÉ 2.0 home"
        onClick={(event) => followFromPanel(event, '#top')}
      >
        <img src="/logo.png" width={504} height={161} alt="FUTÉ services" />
      </a>
      <nav className="nav-links" id="primary-navigation" aria-label="Primary navigation">
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} onClick={(event) => followFromPanel(event, href)}>
            {label}
          </a>
        ))}
        <a
          className="nav-links-contact"
          href="#contact"
          onClick={(event) => followFromPanel(event, '#contact')}
        >
          Contact
        </a>
      </nav>
      <a className="nav-contact" href="#contact">
        Contact
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </header>
  )
}
