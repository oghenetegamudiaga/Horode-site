'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Replace with your form submission logic (Formspree, Resend, etc.)
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
  }

  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <div className="container">
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#aaa', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Get in touch
          </p>
          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: '700px' }}>
            Have a project in mind?<br />Let&apos;s create greatness.
          </h1>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '5rem', alignItems: 'start' }}>

            {/* Form */}
            <div>
              {status === 'sent' ? (
                <div style={{ padding: '3rem 0' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.75rem' }}>Message received.</h2>
                  <p style={{ color: '#6b6b6b', lineHeight: 1.7 }}>
                    Thank you for reaching out. We&apos;ll be in touch within 24–48 hours.
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-row">
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Your name</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Tega Mudiaga" className="form-input" />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Email address</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="hello@company.com" className="form-input" />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Company / Brand name</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Your company name" className="form-input" />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Service needed</label>
                    <select name="service" value={form.service} onChange={handleChange} className="form-input" style={{ cursor: 'pointer' }}>
                      <option value="">Select a service</option>
                      <option value="branding">Branding & Identity</option>
                      <option value="software">Software Development</option>
                      <option value="marketing">Marketing</option>
                      <option value="other">Other / Multiple</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Tell us about your project</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project, goals, and timeline..."
                      rows={5}
                      className="form-input"
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <div>
                    <button
                      onClick={handleSubmit}
                      disabled={status === 'sending'}
                      className="tega-btn"
                      style={{ padding: '1rem 2.2rem', fontSize: '1rem', border: '1.5px solid #111' }}
                    >
                      {status === 'sending' ? 'Sending...' : 'Send message'}
                      <span className="tega-fill">{status === 'sending' ? 'Sending...' : 'Send message'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Contact info */}
            <div style={{ paddingTop: '1rem' }}>
              <div style={{ marginBottom: '3rem' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#aaa', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  Direct contact
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: '#aaa', marginBottom: '0.2rem' }}>Email</p>
                    <a href="mailto:hello@horodeglobal.com" style={{ fontWeight: 700, color: '#111', textDecoration: 'none', fontSize: '1rem' }}>
                      hello@horodeglobal.com
                    </a>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: '#aaa', marginBottom: '0.2rem' }}>Phone</p>
                    <a href="tel:+2348060091147" style={{ fontWeight: 700, color: '#111', textDecoration: 'none', fontSize: '1rem' }}>
                      +234 806 009 1147
                    </a>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: '#aaa', marginBottom: '0.2rem' }}>Location</p>
                    <p style={{ fontWeight: 700, color: '#111', fontSize: '1rem' }}>Warri, Delta State, Nigeria</p>
                  </div>
                </div>
              </div>

              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#aaa', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  Follow us
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    { label: 'Instagram', href: 'https://instagram.com/horodeglobal' },
                    { label: 'X (Twitter)', href: 'https://x.com/horodeglobal' },
                    { label: 'LinkedIn', href: 'https://linkedin.com/company/horodeglobal' },
                    { label: 'Facebook', href: 'https://facebook.com/horodeglobal' },
                    { label: 'Pinterest', href: 'https://pinterest.com/horodeglobal' },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      style={{ color: '#6b6b6b', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#111')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#6b6b6b')}
                    >
                      @horodeglobal · {s.label} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
