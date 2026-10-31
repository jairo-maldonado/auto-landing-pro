# Auto Landing Pro

Responsive landing page for an automotive workshop in Santiago, Chile. Built with Next.js, TypeScript, Tailwind CSS and Supabase.

**Live demo:** https://your-vercel-url.vercel.app

## Features

- Responsive navbar with smooth-scroll anchor links and mobile menu
- Services section with per-service WhatsApp deep links
- Contact form with loading, success and error states, persisted in Supabase
- Row Level Security: the public key can only insert, never read
- Floating WhatsApp button with a pre-filled quote message
- SEO: metadata, Open Graph, `robots.txt`, `sitemap.xml` and LocalBusiness JSON-LD
- Spanish UI (es-CL)

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Supabase (PostgreSQL)
- Vercel

## Getting Started

```bash
git clone https://github.com/your-username/auto-landing-pro.git
cd auto-landing-pro
npm install
```

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Run this SQL in the Supabase SQL Editor:

```sql
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text,
  vehicle text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

create policy "Allow public inserts"
  on public.contact_messages
  for insert
  to anon
  with check (true);
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```text
src/
├── app/            # Routes, layout, robots and sitemap
├── components/
│   ├── layout/     # Navbar
│   ├── sections/   # Hero, Services, About, ContactForm, Footer
│   ├── seo/        # Structured data
│   └── ui/         # Reusable UI (WhatsApp button)
├── config/         # Site configuration
└── lib/            # Supabase client and WhatsApp helper
```

## Author

Jairo, Software Engineering student based in Santiago, Chile.