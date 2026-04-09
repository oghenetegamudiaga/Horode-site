'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    document.body.style.overflow = 'unset'
  }, [pathname])

  const toggleMenu = () => {
    setOpen(!open)
    document.body.style.overflow = !open ? 'hidden' : 'unset'
  }

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? 'rgba(254,254,254,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #e5e5e5' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/horode-logo.svg"
              alt="Horode Design Studio"
              style={{ height: '28px', width: 'auto', display: 'block' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: pathname === link.href ? '#111111' : '#6b6b6b',
                }}
              >
                <span>{link.label}</span>
                <span className="nav-clone">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="desktop-nav">
            <Link
              href="/contact"
              className="tega-btn"
              style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
            >
              Let's talk
              <span className="tega-fill">Let's talk</span>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="mobile-only"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              padding: '4px',
            }}
            aria-label="Toggle menu"
          >
            <span style={{
              display: 'block', width: '24px', height: '1.5px', backgroundColor: '#111',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '24px', height: '1.5px', backgroundColor: '#111',
              transition: 'opacity 0.3s ease',
              opacity: open ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '24px', height: '1.5px', backgroundColor: '#111',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#fefefe',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '2rem 1.5rem',
          transform: open ? 'translateY(0)' : 'translateY(-100%)',
          opacity: open ? 1 : 0,
          transition: 'transform 0.4s cubic-bezier(0.77,0,0.175,1), opacity 0.4s ease',
          pointerEvents: open ? 'all' : 'none',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: 'none',
                fontSize: 'clamp(2.5rem, 10vw, 4rem)',
                fontWeight: 900,
                color: pathname === link.href ? '#111111' : '#d0d0d0',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                transition: 'color 0.2s ease',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <img src="/horode-logo.svg" alt="Horode" style={{ height: '22px', width: 'auto', marginBottom: '1rem' }} />
          <a href="mailto:hello@horodeglobal.com" style={{ color: '#6b6b6b', fontSize: '0.9rem', textDecoration: 'none' }}>hello@horodeglobal.com</a>
          <a href="tel:+2348060091147" style={{ color: '#6b6b6b', fontSize: '0.9rem', textDecoration: 'none' }}>+234 806 009 1147</a>
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  )
}
