import { redirect } from 'next/navigation'
import { getSession } from '@/lib/session'
import { supabaseAdmin } from '@/lib/supabase'
import Link from 'next/link'
import AdminLogoutButton from '@/components/AdminLogoutButton'

export const metadata = { title: 'Admin — Horode Blog' }

async function getPosts() {
  const { data } = await supabaseAdmin
    .from('posts')
    .select('id, title, slug, published, category, published_at, created_at')
    .order('created_at', { ascending: false })
  return data || []
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default async function AdminPage() {
  const session = await getSession()
  if (!session.isLoggedIn) redirect('/admin/login')

  const posts = await getPosts()

  return (
    <div style={{ paddingTop: '5rem', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#aaa', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Blog Admin</p>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.03em' }}>All posts</h1>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <AdminLogoutButton />
            <Link href="/admin/new" className="tega-btn" style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem' }}>
              + New post
              <span className="tega-fill">+ New post</span>
            </Link>
          </div>
        </div>

        {/* Posts table */}
        {posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', border: '1.5px dashed #e5e5e5', borderRadius: '12px' }}>
            <p style={{ color: '#aaa', marginBottom: '1.25rem' }}>No posts yet.</p>
            <Link href="/admin/new" className="tega-btn" style={{ padding: '0.7rem 1.5rem', fontSize: '0.9rem' }}>
              Write your first post
              <span className="tega-fill">Write your first post</span>
            </Link>
          </div>
        ) : (
          <div>
            {posts.map((post) => (
              <div key={post.id} style={{
                display: 'grid', gridTemplateColumns: '1fr auto',
                gap: '1rem', padding: '1.25rem 0', borderTop: '1px solid #e5e5e5', alignItems: 'center',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem',
                      borderRadius: '9999px', letterSpacing: '0.06em', textTransform: 'uppercase',
                      backgroundColor: post.published ? '#EAF3DE' : '#f0f0f0',
                      color: post.published ? '#3B6D11' : '#6b6b6b',
                    }}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#aaa' }}>{post.category}</span>
                    <span style={{ fontSize: '0.75rem', color: '#aaa' }}>
                      {post.published_at ? formatDate(post.published_at) : `Created ${formatDate(post.created_at)}`}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{post.title}</h3>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  {post.published && (
                    <Link href={`/blog/${post.slug}`} target="_blank" style={{ fontSize: '0.8rem', color: '#6b6b6b', textDecoration: 'none', fontWeight: 500 }}>
                      View →
                    </Link>
                  )}
                  <Link href={`/admin/edit/${post.id}`} style={{
                    fontSize: '0.8rem', fontWeight: 600, color: '#111',
                    textDecoration: 'none', border: '1px solid #e5e5e5',
                    borderRadius: '9999px', padding: '0.3rem 0.85rem',
                  }}>
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
