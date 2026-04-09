'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function calcReadTime(content: string) {
  const words = content.split(/\s+/).length
  const mins = Math.max(1, Math.round(words / 200))
  return `${mins} min read`
}

export default function NewPostPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    title: '', slug: '', excerpt: '', category: 'Branding', content: '', published: false,
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setForm(f => ({
      ...f,
      [name]: val,
      ...(name === 'title' ? { slug: slugify(value) } : {}),
    }))
  }

  const handleSave = async () => {
    if (!form.title || !form.content) { setError('Title and content are required.'); return }
    setSaving(true)
    setError('')
    const res = await fetch('/api/admin/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, read_time: calcReadTime(form.content) }),
    })
    setSaving(false)
    if (res.ok) {
      router.push('/admin')
    } else {
      const d = await res.json()
      setError(d.error || 'Failed to save post.')
    }
  }

  return (
    <div style={{ paddingTop: '5rem', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '820px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <button onClick={() => router.push('/admin')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b6b6b', fontSize: '0.85rem', fontFamily: 'Satoshi, sans-serif', marginBottom: '0.5rem', padding: 0 }}>
              ← Back
            </button>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.03em' }}>New post</h1>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
              <input type="checkbox" name="published" checked={form.published} onChange={handleChange} />
              Publish now
            </label>
            <button onClick={handleSave} disabled={saving} className="tega-btn" style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem' }}>
              {saving ? 'Saving...' : 'Save post'}
              <span className="tega-fill">{saving ? 'Saving...' : 'Save post'}</span>
            </button>
          </div>
        </div>

        {error && <p style={{ color: '#e24b4a', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{error}</p>}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <label style={labelStyle}>Post title</label>
            <input name="title" value={form.title} onChange={handleChange} placeholder="Your post title" className="form-input" style={{ fontSize: '1.4rem', fontWeight: 700 }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-row">
            <div>
              <label style={labelStyle}>Slug (URL)</label>
              <input name="slug" value={form.slug} onChange={handleChange} placeholder="your-post-slug" className="form-input" />
            </div>
            <div>
              <label style={labelStyle}>Category</label>
              <select name="category" value={form.category} onChange={handleChange} className="form-input">
                <option>Branding</option>
                <option>Strategy</option>
                <option>Design Systems</option>
                <option>Software</option>
                <option>Marketing</option>
                <option>Business</option>
                <option>Case Study</option>
              </select>
            </div>
          </div>

          <div>
            <label style={labelStyle}>Excerpt (shown in listings)</label>
            <textarea name="excerpt" value={form.excerpt} onChange={handleChange} rows={2} placeholder="A short summary of the post..." className="form-input" style={{ resize: 'none' }} />
          </div>

          <div>
            <label style={labelStyle}>Content (Markdown supported)</label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              rows={24}
              placeholder={`# Your heading\n\nWrite your post in Markdown...\n\n## A subheading\n\nParagraph text here.`}
              className="form-input"
              style={{ resize: 'vertical', fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.7 }}
            />
            <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: '0.5rem' }}>
              Supports Markdown: **bold**, *italic*, # headings, - lists, [link](url), ![image](url)
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  fontSize: '0.75rem', fontWeight: 700, color: '#aaa',
  letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem',
}
