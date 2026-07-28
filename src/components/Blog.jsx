import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { blogPosts } from '../data/blogPosts'

export default function Blog() {
  const { isDark } = useTheme()

  return (
    <main className={`min-h-screen pt-24 ${isDark ? 'bg-primary-dark' : 'bg-primary-light'}`}>
      <div className="section-padding max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-2xl"
        >
          <p className={`label mb-3 ${isDark ? 'text-accent-dark' : 'text-accent-light'}`}>
            Blog
          </p>
          <h1
            className={`font-display font-extrabold tracking-tight mb-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)' }}
          >
            Notes on{' '}
            <span className={isDark ? 'text-accent-dark' : 'text-accent-light'}>
              AI &amp; engineering
            </span>
          </h1>
          <p className={`text-sm ${isDark ? 'text-muted-dark' : 'text-muted-light'}`}>
            Deep dives into GenAI, ML systems, and the path from automation to AI engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((post, i) => {
            const formatted = new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`group flex flex-col rounded-2xl border overflow-hidden ${
                  isDark
                    ? 'bg-surface-dark/70 border-white/[0.06] hover:border-accent-dark/25'
                    : 'bg-white border-gray-200 hover:border-accent-light/30 shadow-sm'
                }`}
              >
                <div className={`h-36 bg-gradient-to-br ${post.coverGradient}`} />
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <p className={`text-xs ${isDark ? 'text-white/35' : 'text-gray-400'}`}>
                    {formatted} · {post.readTime}
                  </p>
                  <h2
                    className={`font-display font-bold text-base leading-snug ${
                      isDark
                        ? 'text-white group-hover:text-accent-dark'
                        : 'text-gray-900 group-hover:text-accent-light'
                    }`}
                  >
                    {post.title}
                  </h2>
                  <p
                    className={`text-sm leading-relaxed flex-1 ${
                      isDark ? 'text-muted-dark' : 'text-muted-light'
                    }`}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
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
                  <Link
                    to={`/blog/${post.slug}`}
                    className={`inline-flex items-center gap-1 text-sm font-semibold mt-1 ${
                      isDark ? 'text-accent-dark' : 'text-accent-light'
                    }`}
                  >
                    Read more
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </main>
  )
}
