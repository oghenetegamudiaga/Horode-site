# Horode Design Studio — Website

A full-featured Next.js website with a password-protected blog admin panel, powered by Supabase.

---

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS
- **Font**: Satoshi (via Fontshare)
- **Database**: Supabase (PostgreSQL)
- **Auth**: iron-session (cookie-based, server-side)
- **Deployment**: Vercel (recommended)

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, about, services, work preview, blog teaser |
| `/about` | About page — story, values, stats |
| `/work` | Work/portfolio page |
| `/blog` | Blog listing — all published posts |
| `/blog/[slug]` | Individual blog post |
| `/contact` | Contact page with form |
| `/admin/login` | Admin login (password-protected) |
| `/admin` | Admin dashboard — manage all posts |
| `/admin/new` | Write a new blog post |
| `/admin/edit/[id]` | Edit an existing post |

---

## Setup Guide

### Step 1 — Clone and install

```bash
# After downloading the project folder:
cd horode-studio
npm install
```

### Step 2 — Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project (choose any region close to Nigeria — e.g. Europe West)
3. Once the project is ready, go to **SQL Editor** → **New query**
4. Paste the entire contents of `supabase-schema.sql` and click **Run**
5. Go to **Settings → API** and copy:
   - Project URL
   - `anon` public key
   - `service_role` secret key

### Step 3 — Configure environment variables

1. Copy the example file:
```bash
cp .env.local.example .env.local
```

2. Open `.env.local` and fill in your values:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
ADMIN_PASSWORD=choose-a-strong-password
SESSION_SECRET=any-random-string-at-least-32-characters-long
```

> ⚠️ Never commit `.env.local` to Git. It's already in `.gitignore`.

### Step 4 — Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

Admin panel: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

---

## Deploying to Vercel

1. Push your project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. In the **Environment Variables** section, add all variables from `.env.local`
4. Click **Deploy**

Your site will be live in ~2 minutes. Vercel gives you a free `.vercel.app` domain, or you can connect your own custom domain.

---

## How to use the Blog Admin

1. Go to `/admin/login` and enter your `ADMIN_PASSWORD`
2. Click **+ New post** to write a post
3. Write your content in **Markdown** — headings, bold, links, images all work
4. Check **Publish now** to make it live immediately, or leave unchecked to save as a draft
5. Click **Save post**

Posts appear instantly on `/blog` once published.

### Markdown quick reference

```markdown
# H1 Heading
## H2 Heading

**Bold text**
*Italic text*

- Bullet list item
- Another item

1. Numbered list
2. Second item

[Link text](https://url.com)
![Image alt](https://image-url.com/image.jpg)

> Blockquote text

---  ← Horizontal rule
```

---

## Adding Work Banners

When you have banners ready for Zalyx Ledger and Ravex:

1. Upload the images to your Supabase Storage bucket (or any image host)
2. Open `src/app/work/page.tsx`
3. Add an `image` field to each project object and replace the placeholder div with a `<Image>` component from Next.js

---

## Customising Colors & Fonts

All design tokens are in `src/app/globals.css` under `:root`.

The Satoshi font is loaded via Fontshare — no download needed.

To change the font, replace the `@import` URL at the top of `globals.css` with any Fontshare or Google Fonts link, then update `font-family` in the `body` rule.

---

## Contact Form

The contact form currently simulates a submission. To make it actually send emails, integrate one of these (all have free tiers):

- **Resend** — [resend.com](https://resend.com) — simplest, Nigerian-friendly
- **Formspree** — [formspree.io](https://formspree.io) — no backend needed
- **EmailJS** — client-side email sending

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              ← Home page
│   ├── about/page.tsx        ← About page
│   ├── work/page.tsx         ← Work page
│   ├── blog/
│   │   ├── page.tsx          ← Blog listing
│   │   └── [slug]/page.tsx   ← Individual post
│   ├── contact/page.tsx      ← Contact page
│   ├── admin/
│   │   ├── page.tsx          ← Admin dashboard
│   │   ├── login/page.tsx    ← Admin login
│   │   ├── new/page.tsx      ← New post editor
│   │   └── edit/[id]/page.tsx← Edit post
│   ├── api/admin/            ← API routes (login, logout, posts CRUD)
│   ├── globals.css           ← All global styles + design tokens
│   └── layout.tsx            ← Root layout (Navbar + Footer)
├── components/
│   ├── Navbar.tsx            ← Navigation with mobile menu
│   ├── Footer.tsx            ← Footer with contact + socials
│   └── AdminLogoutButton.tsx ← Client component for logout
└── lib/
    ├── supabase.ts           ← Supabase clients (public + admin)
    └── session.ts            ← iron-session config
```
