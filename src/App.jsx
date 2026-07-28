import { Routes, Route } from 'react-router-dom'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Experience  from './components/Experience'
import Skills      from './components/Skills'
import Projects    from './components/Projects'
import Certifications from './components/Certifications'
import Testimonials   from './components/Testimonials'
import Contact     from './components/Contact'
import Footer      from './components/Footer'
import Blog        from './components/Blog'
import BlogPost    from './components/BlogPost'
import { useTheme } from './context/ThemeContext'

function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen font-body transition-colors duration-300 ${
      isDark ? 'bg-primary-dark text-white' : 'bg-primary-light text-gray-900'
    }`}>
      <Routes>
        <Route path="/"           element={<Portfolio />} />
        <Route path="/blog"       element={<><Navbar /><Blog /><Footer /></>} />
        <Route path="/blog/:slug" element={<><Navbar /><BlogPost /><Footer /></>} />
      </Routes>
    </div>
  )
}
