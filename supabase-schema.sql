-- ============================================================
-- Horode Design Studio — Blog Database Schema
-- Run this in your Supabase project → SQL Editor → New query
-- ============================================================

-- Posts table
create table if not exists public.posts (
  id            uuid primary key default gen_random_uuid(),
  title         text not null,
  slug          text not null unique,
  excerpt       text,
  category      text default 'Branding',
  content       text not null,
  published     boolean default false,
  read_time     text default '1 min read',
  published_at  timestamptz,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- Auto-update updated_at on row change
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger posts_updated_at
  before update on public.posts
  for each row execute function update_updated_at();

-- Row Level Security
alter table public.posts enable row level security;

-- Public can only read published posts
create policy "Public reads published posts"
  on public.posts for select
  using (published = true);

-- Service role key (used by admin API routes) bypasses RLS automatically
-- No additional policy needed for insert/update/delete from server

-- Index for fast slug lookups
create index if not exists posts_slug_idx on public.posts (slug);
create index if not exists posts_published_idx on public.posts (published, published_at desc);
