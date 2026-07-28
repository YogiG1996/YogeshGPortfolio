import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { personal, stats } from '../data/portfolio'

function useCountUp(target, duration = 1600) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.45 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = null
    let frameId
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) frameId = requestAnimationFrame(step)
      else setCount(target)
    }
    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [started, target, duration])

  return { count, ref }
}

function StatCard({ stat }) {
  const { isDark } = useTheme()
  const { count, ref } = useCountUp(stat.value)

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div
        className={`font-display font-extrabold tracking-tight ${
          isDark ? 'text-accent-dark' : 'text-accent-light'
        }`}
        style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
      >
        {count}
        {stat.suffix}
      </div>
      <div
        className={`label mt-1 ${isDark ? 'text-white/35' : 'text-gray-400'}`}
      >
        {stat.label}
      </div>
    </div>
  )
}

export default function About() {
  const { isDark } = useTheme()

  return (
    <section
      id="about"
      className={`section-padding ${isDark ? 'bg-primary-dark' : 'bg-primary-light'}`}
    >
      <div className="max-w-content mx-auto">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-14 lg:gap-20 items-start">
          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-10"
          >
            <div
              className={`relative w-48 h-48 sm:w-56 sm:h-56 rounded-full flex items-center justify-center ${
                isDark ? 'bg-surface-dark' : 'bg-white shadow-md'
              }`}
              style={{
                boxShadow: isDark
                  ? `0 0 0 1px rgba(0,245,212,0.35), 0 0 0 8px rgba(0,245,212,0.06)`
                  : `0 0 0 1px rgba(0,82,204,0.35), 0 0 0 8px rgba(0,82,204,0.06)`,
              }}
            >
              <span
                className={`font-display font-extrabold tracking-tighter ${
                  isDark ? 'text-accent-dark' : 'text-accent-light'
                }`}
                style={{ fontSize: '3.5rem' }}
              >
                {personal.initials}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-md">
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </div>
          </motion.div>

          {/* Copy column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div>
              <p
                className={`label mb-3 ${
                  isDark ? 'text-accent-dark' : 'text-accent-light'
                }`}
              >
                About
              </p>
              <h2
                className={`font-display font-extrabold tracking-tight leading-[1.1] ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)' }}
              >
                Automation Test Engineer
                <br />
                <span className={isDark ? 'text-accent-dark' : 'text-accent-light'}>
                  {personal.experienceLabel}
                </span>
              </h2>
            </div>

            <div
              className={`w-10 h-0.5 ${
                isDark ? 'bg-accent-dark' : 'bg-accent-light'
              }`}
            />

            <div className="flex flex-col gap-4">
              {personal.bio.map((para, i) => (
                <p
                  key={i}
                  className={`text-[0.97rem] leading-[1.8] ${
                    isDark ? 'text-muted-dark' : 'text-muted-light'
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border transition-colors ${
                  isDark
                    ? 'border-accent-dark/30 text-accent-dark hover:bg-accent-dark/10'
                    : 'border-accent-light/30 text-accent-light hover:bg-accent-light/10'
                }`}
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border transition-colors ${
                  isDark
                    ? 'border-white/10 text-white/60 hover:border-white/25 hover:text-white'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'
                }`}
              >
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
