# Portfolio

React + Vite + Tailwind + Framer Motion. Four pages (Home, About, Academic,
Projects) with smooth page transitions and a live GitHub feed.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the printed `localhost` URL.

## 2. Connect it to your GitHub

Open `src/pages/Projects.jsx` and change:

```js
const GITHUB_USERNAME = 'your-github-username'
```

to your actual GitHub handle. The Projects page pulls your six most recently
updated public repos live from the GitHub API — no key needed for public
data, but GitHub's unauthenticated API is rate-limited to 60 requests/hour
per IP, which is fine for a personal site.

## 3. Put it on GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

## 4. Deploy it (free, ~2 minutes)

**Vercel** (recommended, made for Vite/React):
1. Go to vercel.com → sign in with GitHub → "Add New Project"
2. Select your `portfolio` repo → it auto-detects Vite → Deploy
3. You'll get a live URL like `portfolio-xyz.vercel.app` immediately

**Netlify** is an equally good alternative — same flow, build command
`npm run build`, publish directory `dist`.

## 5. Get "yourname.com" and connect it

1. **Buy the domain.** Namecheap, Google Domains successor (Squarespace
   Domains), or Porkbun are all straightforward. Search for your name —
   `.com` if available, otherwise `.dev` or `.me` both read well for a
   portfolio.
2. **Point it at your deploy.** In Vercel: Project → Settings → Domains →
   add `yourname.com`. Vercel will show you either:
   - an **A record** (an IP address) to add for the root domain, or
   - a **CNAME** to add for `www.yourname.com`
3. **Add those records at your domain registrar** (Namecheap/Porkbun DNS
   settings) — copy the exact values Vercel shows you.
4. Wait 10 minutes–a few hours for DNS to propagate. Vercel auto-issues
   free HTTPS once it verifies the domain.

Total cost is just the domain itself (~$10–15/year for `.com`); hosting on
Vercel/Netlify is free for a personal portfolio.

## Design notes

The visual language uses a "medallion architecture" metaphor (bronze →
silver → gold) as the throughline — bronze for raw/foundational, silver for
structured work, gold for shipped/polished — which doubles as the nav
indicator, the Academic timeline, and the Projects tiering. Type pairing is
Space Grotesk (display) + Inter (body) + JetBrains Mono (labels/metadata).
Motion respects `prefers-reduced-motion`.
