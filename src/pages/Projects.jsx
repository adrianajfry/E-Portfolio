import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'

// TODO: replace with your actual GitHub username
const GITHUB_USERNAME = 'adrianajfry'

const featured = [
  {
    title: 'E-ducator',
    tag: 'Flutter · Supabase',
    text: 'Attendance and timetable app built for IKM Johor Bahru as a group capstone project. Owns the attendance recording and timetable view modules, including bulk CSV student upload.',
    color: '#D4AF6A',
  },
  {
    title: 'Vaccination Disparity Pipeline',
    tag: 'PySpark · Azure Databricks · Power BI',
    text: 'End-to-end medallion-architecture pipeline analyzing COVID-19 vaccination disparity, from raw ingestion through a curated gold table to Power BI dashboards.',
    color: '#B87333',
  },
]

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState('loading') // loading | ready | error

  useEffect(() => {
    let cancelled = false

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        )
        if (!res.ok) throw new Error('GitHub request failed')
        const data = await res.json()
        if (!cancelled) {
          setRepos(data)
          setStatus('ready')
        }
      } catch (err) {
        if (!cancelled) setStatus('error')
      }
    }

    fetchRepos()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <PageTransition>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-bronze mb-4">
        projects
      </p>
      <h1 className="font-display text-3xl md:text-5xl text-ink font-semibold mb-4 max-w-2xl">
        The gold layer — shipped and refined.
      </h1>
      <p className="text-muted max-w-xl mb-12">
        A mix of featured builds and a live feed of what's currently on my
        GitHub.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {featured.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="bg-panel border border-white/5 rounded-2xl p-6"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-3" style={{ color: p.color }}>
              {p.tag}
            </p>
            <h3 className="font-display text-xl text-ink mb-2">{p.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{p.text}</p>
          </motion.div>
        ))}
      </div>

      <h2 className="font-display text-xl text-ink mb-6 flex items-center gap-2">
        Live from GitHub
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
      </h2>

      {status === 'loading' && (
        <p className="text-muted text-sm font-mono">Pulling repositories…</p>
      )}

      {status === 'error' && (
        <p className="text-muted text-sm">
          Couldn't reach GitHub right now — set <code className="text-gold">GITHUB_USERNAME</code> in{' '}
          <code className="text-gold">src/pages/Projects.jsx</code> to your handle.
        </p>
      )}

      {status === 'ready' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -4, borderColor: 'rgba(212,175,106,0.4)' }}
              className="block bg-panel border border-white/5 rounded-xl p-5 transition-colors"
            >
              <h4 className="font-display text-ink text-sm mb-1.5 truncate">
                {repo.name}
              </h4>
              <p className="text-xs text-muted line-clamp-2 mb-3 min-h-[2.2em]">
                {repo.description || 'No description provided.'}
              </p>
              <div className="flex items-center gap-3 text-[11px] font-mono text-silver-dim">
                {repo.language && <span>{repo.language}</span>}
                <span>★ {repo.stargazers_count}</span>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </PageTransition>
  )
}
