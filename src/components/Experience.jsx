import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { experience } from '../data/portfolio'

export default function Experience() {
  const { isDark } = useTheme()

  return (
    <section
      id="experience"
      className={`section-padding ${isDark ? 'bg-[#080f22]' : 'bg-slate-50'}`}
    >
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className={`label mb-3 ${isDark ? 'text-accent-dark' : 'text-accent-light'}`}>
            Experience
          </p>
          <h2
            className={`font-display font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)' }}
          >
            Career{' '}
            <span className={isDark ? 'text-accent-dark' : 'text-accent-light'}>
              Timeline
            </span>
          </h2>
        </motion.div>

        <div className="relative flex flex-col gap-12">
          <div
            className={`absolute left-[7px] md:left-1/2 md:-translate-x-px top-2 bottom-2 w-px ${
              isDark
                ? 'bg-gradient-to-b from-accent-dark via-accent-dark/25 to-transparent'
                : 'bg-gradient-to-b from-accent-light via-accent-light/25 to-transparent'
            }`}
          />

          {experience.map((exp, index) => {
            const isRight = index % 2 === 0
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className={`relative flex flex-col md:flex-row gap-0 ${
                  isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center`}
              >
                <div
                  className={`w-full md:w-[calc(50%-2rem)] pl-8 md:pl-0 ${
                    isRight ? 'md:pr-10 md:text-right' : 'md:pl-10'
                  }`}
                >
                  <div
                    className={`rounded-2xl p-6 border ${
                      isDark
                        ? 'bg-surface-dark/70 border-white/[0.06]'
                        : 'bg-white border-gray-200 shadow-sm'
                    }`}
                  >
                    <div
                      className={`flex flex-col gap-1 mb-4 ${
                        isRight ? 'md:items-end' : ''
                      }`}
                    >
                      {exp.current && (
                        <span
                          className={`inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase mb-1 ${
                            isDark ? 'text-accent-dark' : 'text-accent-light'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isDark ? 'bg-accent-dark' : 'bg-accent-light'
                            }`}
                          />
                          Current
                        </span>
                      )}
                      <h3
                        className={`font-display font-bold text-lg ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className={`font-mono text-sm ${
                          isDark ? 'text-accent-dark' : 'text-accent-light'
                        }`}
                      >
                        {exp.company}
                      </p>
                      {exp.project && (
                        <p
                          className={`text-sm font-medium mt-1 ${
                            isDark ? 'text-white/70' : 'text-gray-700'
                          }`}
                        >
                          {exp.project}
                        </p>
                      )}
                      <p
                        className={`text-xs ${
                          isDark ? 'text-white/35' : 'text-gray-400'
                        }`}
                      >
                        {exp.duration} · {exp.period} · {exp.location}
                      </p>
                    </div>

                    <ul
                      className={`flex flex-col gap-2.5 mb-4 ${
                        isRight ? 'md:items-end' : ''
                      }`}
                    >
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm leading-relaxed ${
                            isRight ? 'md:flex-row-reverse md:text-right' : ''
                          }`}
                        >
                          <span
                            className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
                              isDark ? 'bg-accent-dark' : 'bg-accent-light'
                            }`}
                          />
                          <span
                            className={
                              isDark ? 'text-muted-dark' : 'text-muted-light'
                            }
                          >
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`flex flex-wrap gap-1.5 ${
                        isRight ? 'md:justify-end' : ''
                      }`}
                    >
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                            isDark
                              ? 'bg-accent-dark/10 text-accent-dark border border-accent-dark/15'
                              : 'bg-accent-light/10 text-accent-light border border-accent-light/20'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full border-[3px] ${
                      exp.current
                        ? isDark
                          ? 'bg-accent-dark border-primary-dark'
                          : 'bg-accent-light border-primary-light'
                        : isDark
                          ? 'bg-primary-dark border-accent-dark/40'
                          : 'bg-primary-light border-accent-light/40'
                    }`}
                  />
                </div>

                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
