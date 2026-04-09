import Link from 'next/link'

export const metadata = {
  title: 'About — Horode Design Studio',
  description: 'We are a business growth partner. Learn about our story, values, and the team behind Horode.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <div className="container">
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#aaa', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Who we are
          </p>
          <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: '700px' }}>
            We exist to make businesses undeniable.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>Our story</h2>
              <p style={{ color: '#6b6b6b', lineHeight: 1.85, marginBottom: '1rem' }}>
                Horode Design Studio was founded on a simple but powerful belief: that great design is not just about aesthetics — it is a strategic business tool. We saw too many talented businesses being overlooked because they couldn&apos;t communicate their value effectively.
              </p>
              <p style={{ color: '#6b6b6b', lineHeight: 1.85, marginBottom: '1rem' }}>
                So we built a studio that bridges the gap between creative excellence and business strategy. Every logo, brand system, product, and campaign we produce is anchored in a clear business outcome.
              </p>
              <p style={{ color: '#6b6b6b', lineHeight: 1.85 }}>
                Today, Horode partners with businesses across Nigeria and internationally — from early-stage startups to established corporations — delivering identity systems and digital products that create lasting market advantage.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>Our values</h2>
              {[
                { title: 'Intentionality', desc: 'Every creative decision is made with purpose. We never decorate — we communicate.' },
                { title: 'Excellence', desc: 'We hold ourselves to a standard that makes our clients proud. Good enough is never enough.' },
                { title: 'Partnership', desc: 'We treat every client engagement as a long-term business relationship, not a transaction.' },
                { title: 'Clarity', desc: 'We simplify complexity and create systems that make your business easy to understand and choose.' },
              ].map((v, i) => (
                <div key={i} style={{ borderTop: '1px solid #e5e5e5', padding: '1.25rem 0' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.35rem' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#6b6b6b', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '50+', label: 'Clients served' },
              { num: '3+', label: 'Years of practice' },
              { num: '100+', label: 'Projects delivered' },
              { num: '3', label: 'Specialisations' },
            ].map((stat, i) => (
              <div key={i}>
                <p style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '0.25rem' }}>{stat.num}</p>
                <p style={{ fontSize: '0.85rem', color: '#6b6b6b', fontWeight: 500 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
            Let&apos;s build something great together
          </h2>
          <p style={{ color: '#6b6b6b', marginBottom: '2rem', lineHeight: 1.7 }}>
            We&apos;re selective about the projects we take on — which means if we say yes, we&apos;re all in.
          </p>
          <Link href="/contact" className="tega-btn" style={{ padding: '1rem 2.2rem', fontSize: '1rem' }}>
            Start a conversation
            <span className="tega-fill">Start a conversation</span>
          </Link>
        </div>
      </section>
    </>
  )
}
