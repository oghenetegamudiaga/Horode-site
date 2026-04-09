import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/session'
import { supabaseAdmin } from '@/lib/supabase'

async function requireAuth() {
  const session = await getSession()
  return session.isLoggedIn
}

// GET /api/admin/posts/[id]
export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  const { data, error } = await supabaseAdmin
    .from('posts')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error || !data) return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  return NextResponse.json(data)
}

// PUT /api/admin/posts/[id]
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  const body = await req.json()
  const { title, slug, excerpt, category, content, published, read_time } = body

  // If publishing for the first time, set published_at
  const { data: existing } = await supabaseAdmin
    .from('posts')
    .select('published, published_at')
    .eq('id', params.id)
    .single()

  const publishedAt =
    published && !existing?.published
      ? new Date().toISOString()
      : existing?.published_at ?? null

  const { data, error } = await supabaseAdmin
    .from('posts')
    .update({ title, slug, excerpt, category, content, published, read_time, published_at: publishedAt })
    .eq('id', params.id)
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

// DELETE /api/admin/posts/[id]
export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  const { error } = await supabaseAdmin.from('posts').delete().eq('id', params.id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
