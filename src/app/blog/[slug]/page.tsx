import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'

export const revalidate = 60

async function getPost(slug: string) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error || !data) return null
  return data
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: `${post.title} — Horode Journal`,
    description: post.excerpt,
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: '10rem', paddingBottom: '3rem', borderBottom: '1px solid #e5e5e5' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#6b6b6b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, marginBottom: '2rem' }}>
            ← Back to blog
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{post.category}</span>
            <span style={{ color: '#e5e5e5' }}>·</span>
            <span style={{ fontSize: '0.8rem', color: '#aaa' }}>{formatDate(post.published_at)}</span>
            <span style={{ color: '#e5e5e5' }}>·</span>
            <span style={{ fontSize: '0.8rem', color: '#aaa' }}>{post.read_time}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            {post.title}
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#6b6b6b', lineHeight: 1.7 }}>{post.excerpt}</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '4rem 0 6rem' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div className="prose-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>

          {/* Footer */}
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link href="/blog" style={{ color: '#6b6b6b', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>
              ← All posts
            </Link>
            <Link href="/contact" className="tega-btn" style={{ padding: '0.65rem 1.5rem', fontSize: '0.85rem' }}>
              Work with us
              <span className="tega-fill">Work with us</span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .prose-content { font-size: 1.05rem; line-height: 1.85; color: #333; }
        .prose-content h1, .prose-content h2, .prose-content h3, .prose-content h4 {
          font-weight: 900; letter-spacing: -0.02em; margin: 2rem 0 1rem; color: #111;
        }
        .prose-content h2 { font-size: clamp(1.4rem, 3vw, 1.9rem); }
        .prose-content h3 { font-size: 1.2rem; }
        .prose-content p { margin-bottom: 1.5rem; }
        .prose-content a { color: #111; font-weight: 600; }
        .prose-content ul, .prose-content ol { padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .prose-content li { margin-bottom: 0.5rem; }
        .prose-content blockquote {
          border-left: 3px solid #111; padding-left: 1.5rem;
          margin: 2rem 0; color: #555; font-style: italic;
        }
        .prose-content code {
          background: #f4f4f4; padding: 0.1rem 0.4rem;
          border-radius: 4px; font-size: 0.9em;
        }
        .prose-content pre { background: #111; color: #fff; padding: 1.5rem; border-radius: 12px; overflow-x: auto; margin: 2rem 0; }
        .prose-content pre code { background: none; padding: 0; }
        .prose-content img { width: 100%; border-radius: 12px; margin: 2rem 0; }
        .prose-content hr { border: none; border-top: 1px solid #e5e5e5; margin: 3rem 0; }
      `}</style>
    </>
  )
}
