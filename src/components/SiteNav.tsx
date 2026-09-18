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

  useEffect(() => {
    const toggleNav = () => setScrolled(window.scrollY > 80)
    toggleNav()
    window.addEventListener('scroll', toggleNav, { passive: true })
    return () => window.removeEventListener('scroll', toggleNav)
  }, [])

  return (
    <header className={scrolled ? 'nav is-scrolled' : 'nav'}>
      <a className="nav-brand" href="#top" aria-label="FUTÉ 2.0 home">
        <img src="/logo.png" width={504} height={161} alt="FUTÉ services" />
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {LINKS.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-contact" href="#contact">
        Contact
      </a>
    </header>
  )
}
