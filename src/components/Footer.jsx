import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { personal } from '../data/portfolio'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  const { isDark } = useTheme()

  return (
    <footer
      className={`border-t ${
        isDark ? 'bg-[#080f22] border-white/[0.05]' : 'bg-slate-50 border-gray-200'
      }`}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <Link
              to="/"
              className={`font-display font-extrabold text-lg ${
                isDark ? 'text-accent-dark' : 'text-accent-light'
              }`}
            >
              YG<span className={isDark ? 'text-white' : 'text-gray-900'}>.</span>
            </Link>
            <p className={`mt-1 text-xs ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
              AI/ML Engineer · Pune, India
            </p>
          </div>

          <nav className="flex flex-wrap gap-5">
            {links.map(({ label, href }) =>
              href.startsWith('/blog') ? (
                <Link
                  key={label}
                  to={href}
                  className={`text-xs transition-colors ${
                    isDark
                      ? 'text-white/35 hover:text-accent-dark'
                      : 'text-gray-400 hover:text-accent-light'
                  }`}
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={label}
                  href={`${import.meta.env.BASE_URL}${href.replace(/^\//, '')}`}
                  className={`text-xs transition-colors ${
                    isDark
                      ? 'text-white/35 hover:text-accent-dark'
                      : 'text-gray-400 hover:text-accent-light'
                  }`}
                >
                  {label}
                </a>
              )
            )}
          </nav>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`label text-[10px] transition-colors ${
              isDark
                ? 'text-white/30 hover:text-accent-dark'
                : 'text-gray-400 hover:text-accent-light'
            }`}
          >
            Back to top
          </button>
        </div>

        <div
          className={`mt-8 pt-6 border-t text-xs flex flex-col sm:flex-row justify-between gap-2 ${
            isDark
              ? 'border-white/[0.05] text-white/25'
              : 'border-gray-200 text-gray-400'
          }`}
        >
          <p>
            © {new Date().getFullYear()}{' '}
            <span className={isDark ? 'text-accent-dark' : 'text-accent-light'}>
              {personal.name}
            </span>
          </p>
          <p className="font-mono">React · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
