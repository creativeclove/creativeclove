# CreativeClove

Website for CreativeClove — a creative & performance marketing agency based in Bangalore, India.

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- Framer Motion
- Supabase (auth)

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the project root:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Without these, the app runs normally but the `/admin` route will have auth disabled.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | TypeScript type check |
