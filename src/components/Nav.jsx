import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Home', tier: 'RAW', color: '#B87333' },
  { to: '/about', label: 'About', tier: 'BRONZE', color: '#B87333' },
  { to: '/academic', label: 'Academic', tier: 'SILVER', color: '#C7CDD6' },
  { to: '/projects', label: 'Projects', tier: 'GOLD', color: '#D4AF6A' },
]

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-obsidian/70 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <NavLink to="/" className="font-display text-ink text-lg tracking-tight">
          nurul<span className="text-gold">.</span>adriana
        </NavLink>

        <nav className="flex items-center gap-1 md:gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className="group relative px-3 py-2 font-mono text-xs uppercase tracking-widest text-muted"
            >
              {({ isActive }) => (
                <span className="relative flex flex-col items-center gap-1.5">
                  <span
                    className="node-dot w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: isActive ? link.color : '#3A4152',
                      boxShadow: isActive ? `0 0 10px ${link.color}` : 'none',
                    }}
                  />
                  <span className={isActive ? 'text-ink' : 'text-muted group-hover:text-silver transition-colors'}>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="rail-underline"
                      className="absolute -bottom-2 left-0 right-0 h-px"
                      style={{ backgroundColor: link.color }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
