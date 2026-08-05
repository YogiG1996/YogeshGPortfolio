import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isDark } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      if (location.pathname !== '/') {
        // Respect Vite base path on GitHub Pages (e.g. /YogeshGPortfolio/#about)
        window.location.href = `${import.meta.env.BASE_URL}#${id}`
        return
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-primary-dark/85 backdrop-blur-md border-b border-white/[0.05]'
            : 'bg-white/85 backdrop-blur-md border-b border-gray-200/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className={`font-display font-extrabold text-lg tracking-tight ${
            isDark ? 'text-accent-dark' : 'text-accent-light'
          }`}
        >
          YG
          <span className={isDark ? 'text-white' : 'text-gray-900'}>.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              {href.startsWith('/blog') ? (
                <Link
                  to={href}
                  className={`text-[13px] font-medium transition-colors ${
                    isDark
                      ? 'text-white/50 hover:text-accent-dark'
                      : 'text-gray-500 hover:text-accent-light'
                  }`}
                >
                  {label}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(href)}
                  className={`text-[13px] font-medium transition-colors ${
                    isDark
                      ? 'text-white/50 hover:text-accent-dark'
                      : 'text-gray-500 hover:text-accent-light'
                  }`}
                >
                  {label}
                </button>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`md:hidden p-2 rounded-md ${
              isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'
            }`}
            aria-label="Menu"
          >
            <div className="flex flex-col gap-[5px] w-5">
              <span
                className={`block h-0.5 rounded transition-transform ${
                  isDark ? 'bg-white' : 'bg-gray-800'
                } ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`}
              />
              <span
                className={`block h-0.5 rounded ${
                  isDark ? 'bg-white' : 'bg-gray-800'
                } ${mobileOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 rounded transition-transform ${
                  isDark ? 'bg-white' : 'bg-gray-800'
                } ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden border-t ${
              isDark
                ? 'bg-primary-dark/95 border-white/5'
                : 'bg-white/95 border-gray-100'
            }`}
          >
            <ul className="flex flex-col py-3 px-4">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  {href.startsWith('/blog') ? (
                    <Link
                      to={href}
                      className={`block py-3 text-sm ${
                        isDark ? 'text-white/70' : 'text-gray-700'
                      }`}
                    >
                      {label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(href)}
                      className={`block w-full text-left py-3 text-sm ${
                        isDark ? 'text-white/70' : 'text-gray-700'
                      }`}
                    >
                      {label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
