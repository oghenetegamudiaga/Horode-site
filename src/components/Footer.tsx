import Link from 'next/link'

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/horodeglobal' },
  { label: 'X (Twitter)', href: 'https://x.com/horodeglobal' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/horodeglobal' },
  { label: 'Facebook', href: 'https://facebook.com/horodeglobal' },
  { label: 'Pinterest', href: 'https://pinterest.com/horodeglobal' },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #e5e5e5',
      backgroundColor: '#fefefe',
      padding: '3rem 0 2rem',
    }}>
      <div className="container">
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginBottom: '3rem',
          alignItems: 'start',
        }}>
          {/* Logo */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              <img
                src="/horode-logo.svg"
                alt="Horode Design Studio"
                style={{ height: '26px', width: 'auto', display: 'block' }}
              />
            </Link>
            <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#6b6b6b', maxWidth: '220px', lineHeight: 1.6 }}>
              A system that creates greatness for businesses.
            </p>
          </div>

          {/* Contact */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#aaa', textTransform: 'uppercase', marginBottom: '1rem' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="tel:+2348060091147" style={{ color: '#111111', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                +234 806 009 1147
              </a>
              <a href="mailto:hello@horodeglobal.com" style={{ color: '#111111', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                hello@horodeglobal.com
              </a>
              <p style={{ color: '#6b6b6b', fontSize: '0.85rem', margin: 0 }}>Warri, Delta State, Nigeria</p>
            </div>
          </div>

          {/* Socials */}
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#aaa', textTransform: 'uppercase', marginBottom: '1rem' }}>Follow us</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-end' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#6b6b6b',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#111111')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6b6b6b')}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid #e5e5e5',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <p style={{ fontSize: '0.8rem', color: '#aaa' }}>
            © {new Date().getFullYear()} Horode Design Studio. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8rem', color: '#aaa' }}>
            Built with precision.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          footer .container > div:first-child > div {
            text-align: center !important;
            align-items: center !important;
          }
          footer .container > div:first-child > div:last-child {
            text-align: center !important;
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  )
}
