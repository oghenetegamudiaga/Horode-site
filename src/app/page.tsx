import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '8rem 1.5rem 6rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle background grid */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'radial-gradient(#e5e5e5 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.5,
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            border: '1px solid #e5e5e5', borderRadius: '9999px',
            padding: '0.35rem 1rem', marginBottom: '2rem',
            fontSize: '0.8rem', color: '#6b6b6b', fontWeight: 500,
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
            Available for new projects
          </div>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 900,
            color: '#111111',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
          }}>
            A system that creates<br />greatness for businesses
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#6b6b6b',
            maxWidth: '540px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}>
            We are not just another agency. We partner with businesses to see they stand out and grow.
          </p>

          <Link
            href="/contact"
            className="tega-btn"
            style={{ padding: '1rem 2.2rem', fontSize: '1rem' }}
          >
            Let&apos;s create greatness
            <span className="tega-fill">Let&apos;s create greatness</span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        }}>
          <span style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', backgroundColor: '#ddd', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%',
              height: '40%', backgroundColor: '#111',
              animation: 'scrollDown 1.8s ease-in-out infinite',
            }} />
          </div>
        </div>
      </section>

      {/* ── ABOUT / SERVICES ──────────────────────── */}
      <section className="section" style={{ backgroundColor: '#fefefe' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
            alignItems: 'start',
          }}>
            {/* Left: About text */}
            <div style={{ gridColumn: 'span 6' }} className="about-left">
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#aaa', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                About us
              </p>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}>
                We are a business growth partner.
              </h2>
              <p style={{ color: '#6b6b6b', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1rem' }}>
                At Horode, we don&apos;t just build brands — we architect growth engines. Every identity we craft, every system we build, every campaign we run is engineered to make your business the obvious choice in your market.
              </p>
              <p style={{ color: '#6b6b6b', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>
                We&apos;ve partnered with startups, SMEs, and multinational corporations across Nigeria and globally — bringing the same rigour, creativity, and strategic depth to every engagement.
              </p>
              <Link href="/about" className="tega-btn" style={{ padding: '0.75rem 1.75rem' }}>
                Our story
                <span className="tega-fill">Our story</span>
              </Link>
            </div>

            {/* Right: Services */}
            <div style={{ gridColumn: 'span 5', gridColumnStart: '8' }} className="about-right">
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#aaa', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                What we do
              </p>

              {[
                {
                  num: '01',
                  title: 'Branding',
                  desc: 'Logo design, visual identity systems, brand guidelines, and positioning strategy that makes your business unmistakable.',
                },
                {
                  num: '02',
                  title: 'Software Development',
                  desc: 'Web applications, mobile apps, and digital products built with precision — from MVP to production-ready systems.',
                },
                {
                  num: '03',
                  title: 'Marketing',
                  desc: 'Growth strategy, content marketing, social media, and performance campaigns that convert audiences into loyal customers.',
                },
              ].map((service, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', gap: '1.25rem',
                    padding: '1.5rem 0',
                    borderTop: '1px solid #e5e5e5',
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: '#aaa', fontWeight: 700, minWidth: '24px', paddingTop: '3px' }}>{service.num}</span>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{service.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#6b6b6b', lineHeight: 1.7 }}>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK ──────────────────────────────────── */}
      <section className="section" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="container">
          {/* Section header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
              Our Works
            </h2>
            <Link href="/work" className="tega-btn" style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}>
              See all works
              <span className="tega-fill">See all works</span>
            </Link>
          </div>

          {/* Cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Zalyx Ledger', category: 'Brand Identity · Fintech', year: '2024', color: '#e8e8e8' },
              { title: 'Ravex', category: 'Brand Identity · Logistics', year: '2024', color: '#e0e0e0' },
            ].map((project, i) => (
              <Link
                key={i}
                href="/work"
                style={{ textDecoration: 'none' }}
              >
                <div className="work-card" style={{ backgroundColor: project.color }}>
                  {/* Placeholder for banner image */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: '0.8rem', color: '#aaa', fontWeight: 500 }}>Banner coming soon</span>
                  </div>

                  <div className="card-overlay">
                    <div className="card-info">
                      <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600, marginBottom: '0.25rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        {project.category} · {project.year}
                      </p>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em' }}>
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG TEASER ───────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#aaa', textTransform: 'uppercase', marginBottom: '0.75rem' }}>From the blog</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
                Thoughts on design<br />& business growth
              </h2>
            </div>
            <Link href="/blog" className="tega-btn" style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}>
              Read all posts
              <span className="tega-fill">Read all posts</span>
            </Link>
          </div>

          {/* Placeholder posts */}
          {[
            { title: 'Why your logo is not your brand', date: 'Apr 5, 2025', read: '4 min read', tag: 'Branding' },
            { title: 'The anatomy of a brand that commands attention', date: 'Mar 22, 2025', read: '6 min read', tag: 'Strategy' },
            { title: 'Building a design system for a holding company', date: 'Mar 10, 2025', read: '8 min read', tag: 'Design Systems' },
          ].map((post, i) => (
            <div key={i} className="blog-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#aaa', letterSpacing: '0.06em', textTransform: 'uppercase', marginRight: '0.75rem' }}>{post.tag}</span>
                <h3 style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 700, marginTop: '0.35rem' }}>{post.title}</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexShrink: 0 }}>
                <span style={{ fontSize: '0.8rem', color: '#aaa' }}>{post.date} · {post.read}</span>
                <Link href="/blog" style={{ fontSize: '1.2rem', color: '#111', textDecoration: 'none', fontWeight: 700 }}>→</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────── */}
      <section style={{ backgroundColor: '#111111', padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
            Ready to create greatness?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '2.5rem', fontSize: '1rem', lineHeight: 1.7 }}>
            Let&apos;s build something that makes your business the obvious choice.
          </p>
          <Link
            href="/contact"
            style={{
              position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', border: '1.5px solid #ffffff', borderRadius: '9999px',
              background: 'transparent', color: '#ffffff', fontFamily: 'Satoshi, sans-serif',
              fontWeight: 700, fontSize: '1rem', cursor: 'pointer', textDecoration: 'none',
              padding: '1rem 2.2rem', transition: 'color 0.5s ease',
            }}
            onMouseEnter={(e) => {
              const fill = e.currentTarget.querySelector('.inv-fill') as HTMLElement
              if (fill) fill.style.transform = 'translateY(0)'
              e.currentTarget.style.color = '#111111'
            }}
            onMouseLeave={(e) => {
              const fill = e.currentTarget.querySelector('.inv-fill') as HTMLElement
              if (fill) fill.style.transform = 'translateY(100%)'
              e.currentTarget.style.color = '#ffffff'
            }}
          >
            Start a project
            <span className="inv-fill" style={{
              position: 'absolute', inset: 0, background: '#ffffff', color: '#111111',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transform: 'translateY(100%)', transition: 'transform 0.5s cubic-bezier(0.77,0,0.175,1)',
              borderRadius: '9999px', fontWeight: 700, fontSize: '1rem',
            }}>
              Start a project
            </span>
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(250%); }
        }
        @media (max-width: 768px) {
          .about-left { grid-column: span 12 !important; }
          .about-right { grid-column: span 12 !important; grid-column-start: 1 !important; }
        }
      `}</style>
    </>
  )
}
