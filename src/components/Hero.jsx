import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { personal } from '../data/portfolio'

function Typewriter({ phrases }) {
  const [displayed, setDisplayed] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const { isDark } = useTheme()

  useEffect(() => {
    const current = phrases[phraseIdx]
    let timeout

    if (!deleting && displayed === current) {
      timeout = setTimeout(() => setDeleting(true), 1600)
    } else if (deleting && displayed === '') {
      setDeleting(false)
      setPhraseIdx((i) => (i + 1) % phrases.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayed((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        )
      }, deleting ? 45 : 85)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, phraseIdx, phrases])

  return (
    <span>
      {displayed}
      <span className={isDark ? 'text-accent-dark' : 'text-accent-light'}>|</span>
    </span>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const { isDark } = useTheme()

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className={`relative min-h-[100svh] flex items-center overflow-hidden mesh-bg`}
    >
      {/* Atmospheric grid — edge-to-edge visual plane */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Soft vertical light wash — not a floating card */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 pointer-events-none ${
          isDark
            ? 'bg-gradient-to-l from-accent-dark/[0.04] to-transparent'
            : 'bg-gradient-to-l from-accent-light/[0.06] to-transparent'
        }`}
      />

      <div className="relative z-10 w-full max-w-content mx-auto px-5 sm:px-8 lg:px-16 pt-28 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Brand — hero-level signal */}
          <motion.p
            variants={item}
            className={`label mb-6 ${isDark ? 'text-accent-dark' : 'text-accent-light'}`}
          >
            {personal.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-extrabold tracking-tighter leading-[0.92] mb-6"
            style={{ fontSize: 'clamp(3.25rem, 11vw, 6.75rem)' }}
          >
            <span className={isDark ? 'text-white' : 'text-gray-900'}>
              {personal.name.split(' ').slice(0, -1).join(' ')}
            </span>
            <br />
            <span className={isDark ? 'text-accent-dark' : 'text-accent-light'}>
              {personal.name.split(' ').slice(-1)[0]}
            </span>
          </motion.h1>

          {/* One animated headline */}
          <motion.p
            variants={item}
            className={`font-display font-semibold mb-5 min-h-[2rem] ${
              isDark ? 'text-white/55' : 'text-gray-500'
            }`}
            style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.65rem)' }}
          >
            <Typewriter phrases={personal.titles} />
          </motion.p>

          {/* One supporting sentence */}
          <motion.p
            variants={item}
            className={`text-base sm:text-lg leading-relaxed max-w-xl mb-10 ${
              isDark ? 'text-muted-dark' : 'text-muted-light'
            }`}
          >
            {personal.tagline}
          </motion.p>

          {/* CTA group */}
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0 ${
                isDark
                  ? 'bg-accent-dark text-primary-dark hover:brightness-110'
                  : 'bg-accent-light text-white hover:brightness-110'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
            <button
              onClick={scrollToProjects}
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold border transition-transform hover:-translate-y-0.5 active:translate-y-0 ${
                isDark
                  ? 'border-white/15 text-white/80 hover:border-accent-dark/50 hover:text-accent-dark'
                  : 'border-gray-300 text-gray-700 hover:border-accent-light hover:text-accent-light'
              }`}
            >
              View My Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-5 sm:left-8 lg:left-16"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className={`w-px h-10 origin-top ${
              isDark ? 'bg-accent-dark' : 'bg-accent-light'
            }`}
          />
          <span className={`label ${isDark ? 'text-white/25' : 'text-gray-400'}`}>
            Scroll
          </span>
        </div>
      </motion.div>
    </section>
  )
}
