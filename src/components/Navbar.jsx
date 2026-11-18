import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection'

const links = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' },
]

const sectionIds = links.map((l) => l.id)

function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'dark',
  )

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* storage unavailable – theme still applies for this visit */
    }
    setTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-brand transition hover:-translate-y-0.5 hover:border-brand"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 max-w-6xl px-4">
        <nav
          aria-label="Primary"
          className="relative flex items-center justify-between rounded-2xl border border-line bg-bg/75 px-3 py-2.5 shadow-lg shadow-black/10 backdrop-blur-xl sm:px-4"
        >
          {/* Logo */}
          <a
            href="#home"
            aria-label="Anusha A Shet – back to top"
            className="flex items-center gap-3 rounded-xl"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-sm font-extrabold tracking-tight text-on-brand">
              AS
            </span>
            <span className="hidden text-base font-bold tracking-tight text-ink lg:block">
              Anusha A Shet
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 rounded-full border border-line bg-surface p-1 md:flex">
            {links.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive ? 'text-brand' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                        className="absolute inset-0 rounded-full border border-brand/40 bg-brand/10"
                      />
                    )}
                    <span className="relative">{link.name}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="btn-primary hidden !px-4 !py-2.5 !text-sm lg:inline-flex"
            >
              Let’s Connect
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-ink md:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Scroll progress */}
          <motion.div
            aria-hidden="true"
            style={{ scaleX: progress }}
            className="absolute inset-x-3 -bottom-px h-0.5 origin-left rounded-full bg-gradient-to-r from-brand via-brand-2 to-accent"
          />
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-2xl border border-line bg-bg/95 p-3 shadow-xl backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active === link.id ? 'true' : undefined}
                      className={`block rounded-xl px-4 py-3.5 text-base font-semibold transition ${
                        active === link.id
                          ? 'bg-brand/10 text-brand'
                          : 'text-muted hover:bg-surface hover:text-ink'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
