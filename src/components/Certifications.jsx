import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { certifications, education } from '../data/portfolio'

export default function Certifications() {
  const { isDark } = useTheme()

  return (
    <section
      id="credentials"
      className={`section-padding ${isDark ? 'bg-primary-dark' : 'bg-primary-light'}`}
    >
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className={`label mb-3 ${isDark ? 'text-accent-dark' : 'text-accent-light'}`}>
            Credentials
          </p>
          <h2
            className={`font-display font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)' }}
          >
            Education &amp;{' '}
            <span className={isDark ? 'text-accent-dark' : 'text-accent-light'}>
              Certifications
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3
              className={`font-display font-bold text-sm tracking-wide mb-5 ${
                isDark ? 'text-white/70' : 'text-gray-600'
              }`}
            >
              Certifications
            </h3>
            <div className="flex flex-col gap-3">
              {certifications.map((cert, i) => (
                <motion.a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-start justify-between gap-4 p-4 rounded-xl border transition-colors ${
                    isDark
                      ? 'bg-surface-dark/60 border-white/[0.06] hover:border-accent-dark/25'
                      : 'bg-white border-gray-200 hover:border-accent-light/30 shadow-sm'
                  }`}
                >
                  <div className="min-w-0">
                    <p
                      className={`text-sm font-semibold leading-snug ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {cert.name}
                    </p>
                    {cert.issuer && (
                      <p
                        className={`text-xs mt-1 ${
                          isDark ? 'text-white/40' : 'text-gray-500'
                        }`}
                      >
                        {cert.issuer}
                      </p>
                    )}
                  </div>
                  {cert.year && (
                    <span
                      className={`flex-shrink-0 text-[11px] font-mono px-2 py-1 rounded ${
                        isDark
                          ? 'bg-accent-dark/10 text-accent-dark'
                          : 'bg-accent-light/10 text-accent-light'
                      }`}
                    >
                      {cert.year}
                    </span>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3
              className={`font-display font-bold text-sm tracking-wide mb-5 ${
                isDark ? 'text-white/70' : 'text-gray-600'
              }`}
            >
              Education
            </h3>
            <div className="flex flex-col gap-3">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`p-5 rounded-xl border ${
                    isDark
                      ? 'bg-surface-dark/60 border-white/[0.06]'
                      : 'bg-white border-gray-200 shadow-sm'
                  }`}
                >
                  <p
                    className={`font-display font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {edu.degree}
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      isDark ? 'text-accent-dark' : 'text-accent-light'
                    }`}
                  >
                    {edu.school}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      isDark ? 'text-white/40' : 'text-gray-500'
                    }`}
                  >
                    {edu.field}
                  </p>
                  <p
                    className={`text-[11px] font-mono mt-3 ${
                      isDark ? 'text-white/30' : 'text-gray-400'
                    }`}
                  >
                    {edu.years}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
