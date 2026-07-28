import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { skills } from '../data/portfolio'

const colorMap = {
  teal:   { dark: '#00f5d4', light: '#0052cc', bg: { dark: 'rgba(0,245,212,0.08)', light: 'rgba(0,82,204,0.07)' }, border: { dark: 'rgba(0,245,212,0.22)', light: 'rgba(0,82,204,0.2)' } },
  purple: { dark: '#a78bfa', light: '#6d28d9', bg: { dark: 'rgba(167,139,250,0.08)', light: 'rgba(109,40,217,0.07)' }, border: { dark: 'rgba(167,139,250,0.22)', light: 'rgba(109,40,217,0.2)' } },
  pink:   { dark: '#f472b6', light: '#db2777', bg: { dark: 'rgba(244,114,182,0.08)', light: 'rgba(219,39,119,0.07)' }, border: { dark: 'rgba(244,114,182,0.22)', light: 'rgba(219,39,119,0.2)' } },
  amber:  { dark: '#fbbf24', light: '#b45309', bg: { dark: 'rgba(251,191,36,0.08)', light: 'rgba(180,83,9,0.07)' }, border: { dark: 'rgba(251,191,36,0.22)', light: 'rgba(180,83,9,0.2)' } },
  blue:   { dark: '#60a5fa', light: '#1d4ed8', bg: { dark: 'rgba(96,165,250,0.08)', light: 'rgba(29,78,216,0.07)' }, border: { dark: 'rgba(96,165,250,0.22)', light: 'rgba(29,78,216,0.2)' } },
  green:  { dark: '#4ade80', light: '#15803d', bg: { dark: 'rgba(74,222,128,0.08)', light: 'rgba(21,128,61,0.07)' }, border: { dark: 'rgba(74,222,128,0.22)', light: 'rgba(21,128,61,0.2)' } },
}

export default function Skills() {
  const { isDark } = useTheme()
  const mode = isDark ? 'dark' : 'light'

  return (
    <section
      id="skills"
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
            Expertise
          </p>
          <h2
            className={`font-display font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)' }}
          >
            Skills &amp;{' '}
            <span className={isDark ? 'text-accent-dark' : 'text-accent-light'}>
              Tools
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {skills.map((group, gi) => {
            const c = colorMap[group.color] ?? colorMap.teal
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: gi * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: c[mode] }}
                  />
                  <h3
                    className={`font-display font-bold text-sm tracking-wide ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-md text-xs font-medium border transition-transform hover:-translate-y-0.5"
                      style={{
                        background: c.bg[mode],
                        color: c[mode],
                        borderColor: c.border[mode],
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
