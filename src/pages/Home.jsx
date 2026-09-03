import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Folder, Star, MoreHorizontal, Play, Search, Compass, Wifi, BatteryFull, Linkedin, Github } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'

const folders = [
  { label: 'About Me', to: '/about' },
  { label: 'Academic', to: '/academic' },
  { label: 'Projects', to: '/projects' },
]

const iconVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.9 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.75 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Home() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  function handleSearch(e) {
    e.preventDefault()
    const q = query.toLowerCase()
    if (q.includes('project') || q.includes('github')) navigate('/projects')
    else if (q.includes('academic') || q.includes('course') || q.includes('fyp')) navigate('/academic')
    else if (q.includes('about') || q.includes('skill')) navigate('/about')
    else navigate('/projects') // sensible default
  }
  return (
    <PageTransition noPad>
      <div className="relative w-full h-screen overflow-hidden select-none">
        {/* Real background photo */}
        <img
          src="/background landscape.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-[8%] right-[18%] w-40 h-40 rounded-full bg-white/25 blur-3xl" />
        <div
          className="absolute bottom-0 left-0 right-0 h-[38%]"
          style={{
            background: 'radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0.12), transparent 60%)',
          }}
        />

        {/* top-left: star cluster */}
        <div className="absolute top-0 left-0 flex flex-col items-start gap-2 px-6 md:px-8 pt-6">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 bg-black/25 backdrop-blur-sm rounded-full px-3 py-2"
          >
            <Star size={15} className="text-white/85" />
            <MoreHorizontal size={15} className="text-white/85" />
          </motion.div>
        </div>

        {/* center block: bold poster title + laptop graphic + folders row below */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">

          {/* computer photo + title row */}
          <div className="relative pt-16 md:pt-18 flex items-center justify-center gap-4 md:gap-8">
            <motion.img
              src="/computer.png"
              alt=""
              initial={{ opacity: 0, x: -20, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 md:w-32 drop-shadow-2xl flex-shrink-0"
            />

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative text-gold text-left"
              style={{ textShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
            >
              <span className="block font-brush text-4xl md:text-6xl -rotate-3">adriana jefri's</span>
              <span className="block font-brush text-8xl md:text-[10rem] -mt-3 md:-mt-5 -rotate-2">Portfolio</span>
            </motion.h1>
          </div>

          {/* folders — centered row */}
          <div className="flex items-start justify-center gap-8 md:gap-12 mt-20 md:mt-16 pointer-events-auto">
            {folders.map((f, i) => (
              <motion.div key={f.label} custom={i} variants={iconVariants} initial="hidden" animate="show">
                <Link to={f.to} className="group flex flex-col items-center gap-1.5">
                  <motion.div
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-lg"
                  >
                    <Folder size={26} className="text-white drop-shadow" strokeWidth={1.75} />
                  </motion.div>
                  <span className="font-mono text-[11px] text-white/90 tracking-wide drop-shadow-sm">
                    {f.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* social links — centered row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex items-center justify-center gap-4 mt-6 pointer-events-auto"
          >
            <span className="font-mono text-xs text-white/80 tracking-wide">
              Connect with me:
            </span>

            <a
              href="https://www.linkedin.com/in/adrianajefri"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            
            <a 
              href="https://github.com/adrianajfry"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          </motion.div>
        </div>

        {/* top right taskbar — now functional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-6 right-6 md:right-8 w-[75%] max-w-sm flex items-center gap-3 bg-black/30 backdrop-blur-md rounded-full px-4 py-3 border border-white/15"
        >
          <button
            onClick={() => navigate('/about')}
            className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center flex-shrink-0 hover:scale-110 transition"
            aria-label="Play intro — go to About"
          >
            <Play size={14} className="text-obsidian ml-0.5" fill="#12151C" />
          </button>

          <form onSubmit={handleSearch} className="flex-1 flex items-center gap-2 bg-white/15 rounded-full px-3 py-1.5 min-w-0">
            <Search size={14} className="text-white/70 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search projects, coursework…"
              className="bg-transparent border-none outline-none text-xs text-white placeholder:text-white/70 font-mono w-full min-w-0"
            />
          </form>

          <Link to="/projects" aria-label="Go to Projects">
            <Folder size={16} className="text-white/80 flex-shrink-0 hidden sm:block hover:text-white transition" />
          </Link>
          <Link to="/academic" aria-label="Go to Academic">
            <Compass size={16} className="text-white/80 flex-shrink-0 hidden sm:block hover:text-white transition" />
          </Link>

          <div className="hidden md:flex items-center gap-2 pl-2 border-l border-white/20">
            <Wifi size={14} className="text-white/70" />
            <BatteryFull size={16} className="text-white/70" />
          </div>
        </motion.div>
    </div>
    </PageTransition>
  )
}