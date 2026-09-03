# How to update in real-time.

React + Vite + Tailwind + Framer Motion. Four pages (Home, About, Academic,
Projects) with smooth page transitions and a live GitHub feed.

## 1. Start the local dev server
Open PowerShell in C:\Users\adria\Documents\E-Portfolio and run:
```bash
npm run dev
```
(usually http://localhost:5173) --Keep this terminal running while you work.


## 2. Edit and save — browser updates instantly
As you edit and save any file in src/ ->  the browser tab at localhost:5173 updates itself in seconds.


## 3. Push the change to GitHub
Save your work to GitHub:
```bash
git add .
git commit -m "describe what you changed"
git push
```
The .gitignore keeps node_modules and dist out of it now.


## 4. Vercel auto-deploys on push
Github repo (E-Portfolio) is connected to Vercel, means every push to the main branch automatically triggers a new build and deployment.

You can watch its progress on the Vercel dashboard under "Deployments," and the live URL updates automatically once it succeeds.
