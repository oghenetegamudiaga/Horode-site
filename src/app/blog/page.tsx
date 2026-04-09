import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export const metadata = {
  title: 'Blog — Horode Design Studio',
  description: 'Thoughts on branding, design, business strategy, and building remarkable companies.',
}

export const revalidate = 60

async function getPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, category, published_at, read_time')
    .eq('published', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error)
    return []
  }
  return data || []
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <div className="container">
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#aaa', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            The Horode Journal
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Thoughts on design<br />&amp; business.
            </h1>
            <p style={{ color: '#6b6b6b', maxWidth: '340px', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Perspectives on branding, strategy, and building businesses that command attention.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 0' }}>
              <p style={{ fontSize: '1.1rem', color: '#aaa', fontWeight: 500 }}>Posts are on the way — check back soon.</p>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {posts.length > 0 && (
                <Link href={`/blog/${posts[0].slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '1rem' }}>
                  <div style={{
                    border: '1.5px solid #e5e5e5', borderRadius: '16px', padding: '2.5rem',
                    transition: 'border-color 0.3s ease, background 0.3s ease',
                    marginBottom: '1rem',
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#111'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#e5e5e5'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {posts[0].category} · Featured
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#aaa' }}>{formatDate(posts[0].published_at)} · {posts[0].read_time}</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '0.75rem', color: '#111' }}>
                      {posts[0].title}
                    </h2>
                    <p style={{ color: '#6b6b6b', lineHeight: 1.7, fontSize: '0.95rem', maxWidth: '600px' }}>{posts[0].excerpt}</p>
                    <p style={{ marginTop: '1.5rem', fontWeight: 700, fontSize: '0.9rem', color: '#111' }}>Read article →</p>
                  </div>
                </Link>
              )}

              {/* Rest of posts */}
              {posts.slice(1).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <div
                    className="blog-card"
                    style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'center' }}
                    onMouseEnter={e => {
                      const title = e.currentTarget.querySelector('h3') as HTMLElement
                      if (title) title.style.textDecoration = 'underline'
                    }}
                    onMouseLeave={e => {
                      const title = e.currentTarget.querySelector('h3') as HTMLElement
                      if (title) title.style.textDecoration = 'none'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                        {post.category}
                      </span>
                      <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontWeight: 700, color: '#111', transition: 'text-decoration 0.2s' }}>
                        {post.title}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '0.3rem' }}>
                        {formatDate(post.published_at)} · {post.read_time}
                      </p>
                    </div>
                    <span style={{ fontSize: '1.2rem', color: '#aaa' }}>→</span>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  )
}
