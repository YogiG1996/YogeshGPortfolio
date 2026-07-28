import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { blogPosts } from '../data/blogPosts'

export default function BlogPost() {
  const { slug } = useParams()
  const { isDark } = useTheme()
  const navigate = useNavigate()
  const post = blogPosts.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    if (!post) navigate('/blog', { replace: true })
  }, [slug, post, navigate])

  if (!post) return null

  const formatted = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <main className={`min-h-screen pt-16 ${isDark ? 'bg-primary-dark' : 'bg-primary-light'}`}>
      <div className={`h-48 sm:h-64 bg-gradient-to-br ${post.coverGradient}`} />

      <div className="max-w-3xl mx-auto px-5 sm:px-8 -mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl border p-6 sm:p-8 mb-10 ${
            isDark
              ? 'bg-surface-dark border-white/[0.06]'
              : 'bg-white border-gray-200 shadow-sm'
          }`}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                  isDark
                    ? 'bg-accent-dark/10 text-accent-dark'
                    : 'bg-accent-light/10 text-accent-light'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1
            className={`font-display font-extrabold tracking-tight leading-tight mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            {post.title}
          </h1>
          <div
            className={`flex items-center justify-between text-sm ${
              isDark ? 'text-white/40' : 'text-gray-400'
            }`}
          >
            <span>
              {formatted} · {post.readTime}
            </span>
            <Link
              to="/blog"
              className={isDark ? 'hover:text-accent-dark' : 'hover:text-accent-light'}
            >
              All posts
            </Link>
          </div>
        </motion.div>

        <article
          className={`blog-content pb-12 ${isDark ? 'dark' : 'light'}`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {otherPosts.length > 0 && (
          <div className="pb-16">
            <h2
              className={`font-display font-bold text-lg mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              More articles
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className={`p-5 rounded-xl border transition-colors ${
                    isDark
                      ? 'bg-surface-dark/60 border-white/[0.06] hover:border-accent-dark/25'
                      : 'bg-white border-gray-200 hover:border-accent-light/30'
                  }`}
                >
                  <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${p.coverGradient} mb-3`} />
                  <p
                    className={`font-display font-bold text-sm leading-snug ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {p.title}
                  </p>
                  <p className={`text-xs mt-2 ${isDark ? 'text-white/35' : 'text-gray-400'}`}>
                    {p.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
