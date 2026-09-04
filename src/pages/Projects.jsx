import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'

// TODO: replace with your actual GitHub username
const GITHUB_USERNAME = 'adrianajfry'

const academicProjects = [
  {
    title: 'E-ducator',
    tag: 'Flutter · Supabase',
    text: 'Attendance and timetable app built for IKM Johor Bahru as a group capstone project. Owns the attendance recording and timetable view modules, including bulk CSV student upload.',
    color: '#D4AF6A',
    url: 'https://github.com/ikaazhar/e-ducator-AD-Project.git',
  },
  {
    title: 'Vaccination Disparity Pipeline',
    tag: 'PySpark · Azure Databricks · Power BI',
    text: 'End-to-end medallion-architecture pipeline analyzing COVID-19 vaccination disparity, from raw ingestion through a curated gold table to Power BI dashboards.',
    color: '#B87333',
    url: 'https://github.com/adrianajfry/SECPH_DATA_ENGINEERING/tree/f9b0a501620404f8bcf55f957a811c807f22d6db/YEAR%203/SEMESTER%202/SECP3843%20-%20%20SPECIAL%20TOPIC%20IN%20DATA%20ENGINEERING/INDIVIDUAL%20PROJECT%20(MOCK%20FYP)',
  },
  {
    title: 'Resto Order — Restaurant Waiter Order System',
    tag: 'Flutter · Dart · Supabase',
    text: 'A CRUD-based mobile app for waiters to manage restaurant menus and track customer orders in real time, featuring a full order lifecycle (Pending → Preparing → Served → Paid) backed by a PostgreSQL database via Supabase.',
    color: '#D2691E',
    url: 'https://github.com/adrianajfry/SECPH_DATA_ENGINEERING/tree/f9b0a501620404f8bcf55f957a811c807f22d6db/YEAR%203/SEMESTER%202/SECP3106%20-%20APPLICATION%20DEVELOPMENT/INDIVIDUAL%20PROJECT%20TASK',
  },
  {
  title: 'Real-Time Sentiment Analysis Pipeline',
  tag: 'Kafka · Spark · CNN · Elasticsearch · Kibana',
  text: 'A real-time sentiment analysis pipeline built with Apache Kafka and a CNN classifier to process Malaysian Google Maps reviews, with results stored in Elasticsearch and visualized through interactive Kibana dashboards. Supports both streaming and batch processing modes.',
  color: '#E8541A',
  url: 'https://github.com/drshahizan/HPDP/tree/ef4f876ed77efddcafcf69b3dc5f939c26501e60/2526/project/p2/Shopping',
  },
  {
  title: 'Malay Mail Data Pipeline',
  tag: 'Python · Polars · Playwright',
  text: 'An automated web scraper and high-performance data pipeline engineered to extract and process over 120,000 articles, utilizing Polars to achieve a 358% increase in processing throughput.',
  color: '#CD792C',
  url: 'https://github.com/drshahizan/HPDP/tree/ef4f876ed77efddcafcf69b3dc5f939c26501e60/2526/project/p1/shopping',
  },
  {
    title: 'Car CO2 Emission Data Analysis',
    tag: 'Jupyter Notebook · Python',
    text: 'An exploratory data analysis project focusing on vehicular CO2 emissions to uncover environmental impacts, vehicle efficiency trends, and correlations across different engine types.',
    color: '#B87333',
    url: 'https://github.com/adrianajfry/SECPH_DATA_ENGINEERING/tree/f9b0a501620404f8bcf55f957a811c807f22d6db/YEAR%202/SEMESTER%202/SECP3223%20-%20DATA%20ANALYTICS%20PROGRAMMING/GROUP%20PROJECT',
  },
  {
    title: 'Library Management System',
    tag: 'Java · OOP',
    text: 'A comprehensive software solution designed to digitize library operations, featuring modules for book inventory tracking, user registration, and borrowing/returning workflows.',
    color: '#B87333',
    url: 'https://github.com/adrianajfry/SECPH_DATA_ENGINEERING/tree/f9b0a501620404f8bcf55f957a811c807f22d6db/YEAR%202/SEMESTER%202/SECJ2154%20-%20OBJECT%20ORIENTED%20PROGRAMMING/GROUP%20PROJECT%20-%20LIBRARY%20MANAGEMENT%20SYSTEM',
  },
  {
    title: 'Sistem Koperasi KADA',
    tag: 'Java · OOP',
    text: 'A digital cooperative management system developed to streamline administrative workflows, manage member data, and optimize operational efficiency.',
    color: '#B87333',
    url: 'https://github.com/haani1224/sistem-koperasi-kada.git',
  },
  {
    title: 'Sky Pie Game',
    tag: 'CPP · HPP',
    text: 'An interactive game application built to demonstrate core programming fundamentals, event-driven architecture, and graphical user interface (GUI) design.',
    color: '#B87333',
    url: 'https://github.com/adrianajfry/SECPH_DATA_ENGINEERING/tree/f9b0a501620404f8bcf55f957a811c807f22d6db/YEAR%201/SEMESTER%202/SECH1023%20-%20PROGRAMMING%20TECHNIQUE%20II/GROUP%20PROJECT%20-%20SKY%20PIE%20GAME',
  },
]

// TODO: replace this placeholder with your actual self-learning projects
const selfLearningProjects = [
  {
    title: 'Project Title Here',
    tag: 'Tech · Stack · Here',
    text: 'Short description of what this self-learning project does and what you learned or built while making it.',
    color: '#B87333',
    url: 'https://github.com/adrianajfry/your-repo-here',
  },
]

function ProjectGrid({ projects }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <motion.a
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          href={p.url}
          target="_blank" rel="noreferrer"
          viewport={{ once: true, margin: '-60px' }}
          whileHover={{ y: -4, borderColor: 'rgba(212,175,106,0.4)' }}
          transition={{ delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="block bg-panel border border-white/5 rounded-2xl p-6 transition-colors"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-3" style={{ color: p.color }}>
            {p.tag}
          </p>
          <h3 className="font-display text-xl text-ink mb-2">{p.title}</h3>
          <p className="text-sm text-muted leading-relaxed">{p.text}</p>
        </motion.a>
      ))}
    </div>
  )
}

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

      <h2 className="font-display text-xl text-ink mb-6">
        Academic-syllabus projects
      </h2>
      <div className="mb-16">
        <ProjectGrid projects={academicProjects} />
      </div>

      <h2 className="font-display text-xl text-ink mb-6">
        Self-learning projects
      </h2>
      <div className="mb-16">
        <ProjectGrid projects={selfLearningProjects} />
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