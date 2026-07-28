import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { testimonials } from '../data/testimonials'

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
}

export default function Testimonials() {
  const { isDark } = useTheme()
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)

  const go = useCallback((newIndex, direction) => {
    setDir(direction)
    setIndex(newIndex)
  }, [])

  const next = useCallback(() => {
    go((index + 1) % testimonials.length, 1)
  }, [index, go])

  const prev = useCallback(() => {
    go((index - 1 + testimonials.length) % testimonials.length, -1)
  }, [index, go])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next, paused])

  const t = testimonials[index]

  return (
    <section
      id="testimonials"
      className={`section-padding ${isDark ? 'bg-[#080f22]' : 'bg-slate-50'}`}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <p className={`label mb-3 ${isDark ? 'text-accent-dark' : 'text-accent-light'}`}>
            Recommendations
          </p>
          <h2
            className={`font-display font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)' }}
          >
            What colleagues{' '}
            <span className={isDark ? 'text-accent-dark' : 'text-accent-light'}>
              say
            </span>
          </h2>
        </motion.div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <div
            className={`relative rounded-2xl p-8 sm:p-10 border min-h-[260px] ${
              isDark
                ? 'bg-surface-dark/70 border-white/[0.06]'
                : 'bg-white border-gray-200 shadow-sm'
            }`}
          >
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="flex flex-col gap-8"
              >
                <p
                  className={`text-lg sm:text-xl leading-relaxed font-display ${
                    isDark ? 'text-white/75' : 'text-gray-700'
                  }`}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm ${
                      isDark
                        ? 'bg-accent-dark/10 text-accent-dark'
                        : 'bg-accent-light/10 text-accent-light'
                    }`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className={`font-display font-bold text-sm ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {t.name}
                    </p>
                    <p
                      className={`text-xs ${
                        isDark ? 'text-white/40' : 'text-gray-500'
                      }`}
                    >
                      {t.title} · {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className={`absolute -left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center border ${
              isDark
                ? 'bg-primary-dark border-white/10 text-white/50 hover:text-accent-dark'
                : 'bg-white border-gray-200 text-gray-400 hover:text-accent-light'
            }`}
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className={`absolute -right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center border ${
              isDark
                ? 'bg-primary-dark border-white/10 text-white/50 hover:text-accent-dark'
                : 'bg-white border-gray-200 text-gray-400 hover:text-accent-light'
            }`}
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > index ? 1 : -1)}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? isDark
                    ? 'w-6 bg-accent-dark'
                    : 'w-6 bg-accent-light'
                  : isDark
                    ? 'w-1.5 bg-white/20'
                    : 'w-1.5 bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
