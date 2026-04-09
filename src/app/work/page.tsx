import Link from 'next/link'

export const metadata = {
  title: 'Work — Horode Design Studio',
  description: 'Selected works from Horode Design Studio — brand identities, digital products, and more.',
}

const projects = [
  {
    title: 'Zalyx Ledger',
    category: 'Brand Identity',
    industry: 'Fintech',
    year: '2024',
    desc: 'A complete brand identity system for a next-generation financial ledger platform — built for trust, precision, and institutional authority.',
    tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
    color: '#e8e8e8',
  },
  {
    title: 'Ravex',
    category: 'Brand Identity',
    industry: 'Logistics',
    year: '2024',
    desc: 'A bold, kinetic visual identity for a logistics and last-mile delivery company operating across West Africa.',
    tags: ['Logo Design', 'Brand System', 'Trademark Verification'],
    color: '#e0e0e0',
  },
]

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <div className="container">
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#aaa', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Selected works
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Our Works
            </h1>
            <p style={{ color: '#6b6b6b', maxWidth: '360px', lineHeight: 1.7, fontSize: '0.95rem' }}>
              A curated selection of projects where strategy and craft came together to create something memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {projects.map((project, i) => (
              <div key={i}>
                {/* Image card */}
                <div className="work-card" style={{ backgroundColor: project.color, marginBottom: '1.25rem' }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: '0.8rem', color: '#aaa', fontWeight: 500 }}>Banner coming soon</span>
                  </div>
                  <div className="card-overlay">
                    <div className="card-info">
                      <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600, marginBottom: '0.2rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {project.category} · {project.industry}
                      </p>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{project.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Info below card */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{project.title}</h3>
                  <span style={{ fontSize: '0.8rem', color: '#aaa', paddingTop: '2px' }}>{project.year}</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#6b6b6b', lineHeight: 1.65, marginBottom: '0.75rem' }}>{project.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.tags.map((tag, j) => (
                    <span key={j} style={{
                      fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem',
                      border: '1px solid #e5e5e5', borderRadius: '9999px', color: '#6b6b6b',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Want to be next?
          </h2>
          <p style={{ color: '#6b6b6b', marginBottom: '2rem', lineHeight: 1.7 }}>
            We&apos;re ready to bring the same clarity and craft to your brand.
          </p>
          <Link href="/contact" className="tega-btn" style={{ padding: '0.9rem 2rem' }}>
            Start a project
            <span className="tega-fill">Start a project</span>
          </Link>
        </div>
      </section>
    </>
  )
}
