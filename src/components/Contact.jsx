import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { personal } from '../data/portfolio'

function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Name is required.'
  if (!fields.email.trim()) errors.email = 'Email is required.'
  else if (!/\S+@\S+\.\S+/.test(fields.email)) errors.email = 'Enter a valid email.'
  if (!fields.message.trim()) errors.message = 'Message is required.'
  else if (fields.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.'
  return errors
}

export default function Contact() {
  const { isDark } = useTheme()
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((f) => ({ ...f, [name]: value }))
    if (touched[name]) {
      const newErrors = validate({ ...fields, [name]: value })
      setErrors((err) => ({ ...err, [name]: newErrors[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    const newErrors = validate(fields)
    setErrors((err) => ({ ...err, [name]: newErrors[name] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    const newErrors = validate(fields)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setFields({ name: '', email: '', message: '' })
      setTouched({})
      setErrors({})
      setTimeout(() => setSubmitted(false), 4500)
    }, 1000)
  }

  const inputBase = `w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors border ${
    isDark
      ? 'bg-white/[0.03] text-white placeholder-white/25 border-white/10 focus:border-accent-dark/50'
      : 'bg-white text-gray-900 placeholder-gray-400 border-gray-200 focus:border-accent-light'
  }`

  const links = [
    { label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { label: 'LinkedIn', value: 'yogesh-ghogare-159b40104', href: personal.linkedin },
    { label: 'Phone', value: personal.phone, href: 'tel:+918329222473' },
    { label: 'GitHub', value: 'Repositories', href: personal.github },
  ]

  return (
    <section
      id="contact"
      className={`section-padding ${isDark ? 'bg-primary-dark' : 'bg-primary-light'}`}
    >
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-xl"
        >
          <p className={`label mb-3 ${isDark ? 'text-accent-dark' : 'text-accent-light'}`}>
            Contact
          </p>
          <h2
            className={`font-display font-extrabold tracking-tight mb-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)' }}
          >
            Let&apos;s{' '}
            <span className={isDark ? 'text-accent-dark' : 'text-accent-light'}>
              connect
            </span>
          </h2>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-muted-dark' : 'text-muted-light'}`}>
            Exploring AI/ML engineering roles. Open to roles, collaborations, and conversations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="flex flex-col gap-3">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-surface-dark/60 border-white/[0.06] hover:border-accent-dark/25'
                    : 'bg-white border-gray-200 hover:border-accent-light/30 shadow-sm'
                }`}
              >
                <div>
                  <p className={`label mb-1 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                    {item.label}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      isDark ? 'text-white/80' : 'text-gray-800'
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
                <svg
                  className={`w-4 h-4 ${isDark ? 'text-white/20' : 'text-gray-300'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={fields.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputBase} ${
                  errors.name && touched.name ? 'border-red-500/60' : ''
                }`}
              />
              {errors.name && touched.name && (
                <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={fields.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputBase} ${
                  errors.email && touched.email ? 'border-red-500/60' : ''
                }`}
              />
              {errors.email && touched.email && (
                <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="Your message"
                value={fields.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputBase} resize-none ${
                  errors.message && touched.message ? 'border-red-500/60' : ''
                }`}
              />
              {errors.message && touched.message && (
                <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-semibold text-sm transition-all disabled:opacity-70 ${
                isDark
                  ? 'bg-accent-dark text-primary-dark hover:brightness-110'
                  : 'bg-accent-light text-white hover:brightness-110'
              }`}
            >
              {submitting ? 'Sending…' : 'Send Message'}
            </button>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`p-4 rounded-lg border text-sm ${
                    isDark
                      ? 'bg-accent-dark/10 border-accent-dark/25 text-accent-dark'
                      : 'bg-accent-light/10 border-accent-light/25 text-accent-light'
                  }`}
                >
                  Message received — I&apos;ll get back to you soon.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  )
}
