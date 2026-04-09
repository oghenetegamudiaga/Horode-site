import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/session'
import { supabaseAdmin } from '@/lib/supabase'

async function requireAuth() {
  const session = await getSession()
  if (!session.isLoggedIn) return false
  return true
}

// GET /api/admin/posts — list all posts
export async function GET() {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  const { data, error } = await supabaseAdmin
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

// POST /api/admin/posts — create a post
export async function POST(req: NextRequest) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  const body = await req.json()
  const { title, slug, excerpt, category, content, published, read_time } = body

  if (!title || !content || !slug) {
    return NextResponse.json({ error: 'Title, slug and content are required.' }, { status: 400 })
  }

  const { data, error } = await supabaseAdmin
    .from('posts')
    .insert({
      title,
      slug,
      excerpt,
      category,
      content,
      published: published ?? false,
      read_time: read_time ?? '1 min read',
      published_at: published ? new Date().toISOString() : null,
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}
