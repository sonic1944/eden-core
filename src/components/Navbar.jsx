import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Process', href: '#process' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <svg width="48" height="48" viewBox="477 236 448 430" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="navGrad1" x1="20%" y1="10%" x2="80%" y2="85%">
                <stop offset="0%" stopColor="#18efe0"/>
                <stop offset="45%" stopColor="#26b9ff"/>
                <stop offset="100%" stopColor="#4525e6"/>
              </linearGradient>
              <linearGradient id="navGrad2" x1="30%" y1="80%" x2="72%" y2="22%">
                <stop offset="0%" stopColor="#1de8df"/>
                <stop offset="48%" stopColor="#28baff"/>
                <stop offset="100%" stopColor="#4424e0"/>
              </linearGradient>
            </defs>
            <polyline points="701,236 477,642 925,642 701,236" fill="none" stroke="url(#navGrad1)" strokeWidth="31" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="477" y1="642" x2="925" y2="642" stroke="#3b22e6" strokeWidth="31"/>
            <circle cx="701" cy="236" r="36" fill="#090c2d" stroke="url(#navGrad1)" strokeWidth="18"/>
            <circle cx="477" cy="642" r="36" fill="#090c2d" stroke="url(#navGrad1)" strokeWidth="18"/>
            <circle cx="925" cy="642" r="36" fill="#090c2d" stroke="url(#navGrad1)" strokeWidth="18"/>
            <polyline points="535,612 701,344 867,612 790,612" fill="none" stroke="url(#navGrad2)" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="701,425 625,556 782,556 701,425" fill="none" stroke="url(#navGrad2)" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="535" y1="612" x2="742" y2="612" stroke="#1de3dc" strokeWidth="24"/>
            <circle cx="626" cy="470" r="18" fill="#090c2d" stroke="url(#navGrad2)" strokeWidth="16"/>
            <circle cx="811" cy="532" r="18" fill="#090c2d" stroke="url(#navGrad2)" strokeWidth="16"/>
            <circle cx="742" cy="604" r="20" fill="#090c2d" stroke="url(#navGrad2)" strokeWidth="16"/>
          </svg>
          <span className="navbar__logo-text">EDEN-CORE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="btn-primary navbar__cta">
          Get Started
        </a>

        {/* Mobile Toggle */}
        <button
          className={`navbar__toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
            Get Started
          </a>
        </div>
      )}
    </header>
  )
}
