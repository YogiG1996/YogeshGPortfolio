import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { projects } from '../data/portfolio'

export default function Projects() {
  const { isDark } = useTheme()

  return (
    <section
      id="projects"
      className={`section-padding ${isDark ? 'bg-[#080f22]' : 'bg-slate-50'}`}
    >
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-2xl"
        >
          <p className={`label mb-3 ${isDark ? 'text-accent-dark' : 'text-accent-light'}`}>
            Selected Work
          </p>
          <h2
            className={`font-display font-extrabold tracking-tight mb-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)' }}
          >
            Projects that{' '}
            <span className={isDark ? 'text-accent-dark' : 'text-accent-light'}>
              ship
            </span>
          </h2>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-muted-dark' : 'text-muted-light'}`}>
            ML, Deep Learning, and GenAI systems built for real QA and engineering workflows.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className={`group flex flex-col gap-4 p-6 rounded-2xl border transition-colors ${
                isDark
                  ? 'bg-surface-dark/70 border-white/[0.06] hover:border-accent-dark/25'
                  : 'bg-white border-gray-200 hover:border-accent-light/30 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`label ${
                    isDark ? 'text-accent-dark/70' : 'text-accent-light/70'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-md flex items-center justify-center border transition-colors ${
                      isDark
                        ? 'border-white/10 text-white/40 hover:text-accent-dark hover:border-accent-dark/30'
                        : 'border-gray-200 text-gray-400 hover:text-accent-light hover:border-accent-light/30'
                    }`}
                    aria-label={`${project.name} GitHub`}
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-md flex items-center justify-center border transition-colors ${
                      isDark
                        ? 'border-white/10 text-white/40 hover:text-accent-dark hover:border-accent-dark/30'
                        : 'border-gray-200 text-gray-400 hover:text-accent-light hover:border-accent-light/30'
                    }`}
                    aria-label={`${project.name} demo`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3
                  className={`font-display font-bold text-lg mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? 'text-muted-dark' : 'text-muted-light'
                  }`}
                >
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                      isDark
                        ? 'bg-white/[0.04] text-white/40 border border-white/[0.06]'
                        : 'bg-gray-50 text-gray-500 border border-gray-200'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
