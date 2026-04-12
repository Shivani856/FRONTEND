import { useState, useEffect, useRef } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading]         = useState(true)
  const [theme, setTheme]             = useState('dark')   // 'dark' | 'light'
  const [showScrollUp, setShowScrollUp] = useState(false)
  const cursorRef   = useRef(null)
  const progressRef = useRef(null)

  /* ── Apply theme to <html> ── */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  /* ── Loading → reveal ── */
  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false)
      setTimeout(() => {
        /* fi / fi-left / fi-right / fi-scale */
        const obs = new IntersectionObserver(
          es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
          { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
        )
        document.querySelectorAll('.fi, .fi-left, .fi-right, .fi-scale')
          .forEach(el => obs.observe(el))

        /* stagger for proj-row and cert-row */
        const rows = document.querySelectorAll('.proj-row, .cert-row')
        rows.forEach((row, i) => {
          row.style.transitionDelay = `${i * 0.07}s`
        })
        const rowObs = new IntersectionObserver(
          es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('row-in') }),
          { threshold: 0.08 }
        )
        rows.forEach(r => rowObs.observe(r))
      }, 120)
    }, 1600)
    return () => clearTimeout(t)
  }, [])

  /* ── Custom cursor (with glow trail) ── */
  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    /* Trail dots */
    const TRAIL = 6
    const trails = Array.from({ length: TRAIL }, () => {
      const d = document.createElement('div')
      d.className = 'cursor-trail'
      document.body.appendChild(d)
      return d
    })
    let positions = Array.from({ length: TRAIL }, () => ({ x: -100, y: -100 }))
    let mouse = { x: -100, y: -100 }
    let rafId

    const animateTrail = () => {
      positions[0] = { ...mouse }
      for (let i = 1; i < TRAIL; i++) {
        positions[i] = {
          x: positions[i].x + (positions[i - 1].x - positions[i].x) * 0.35,
          y: positions[i].y + (positions[i - 1].y - positions[i].y) * 0.35,
        }
      }
      trails.forEach((t, i) => {
        const scale = 1 - i * 0.14
        const opacity = (1 - i / TRAIL) * 0.35
        t.style.left    = positions[i].x + 'px'
        t.style.top     = positions[i].y + 'px'
        t.style.opacity = opacity
        t.style.transform = `translate(-50%,-50%) scale(${scale})`
      })
      rafId = requestAnimationFrame(animateTrail)
    }
    rafId = requestAnimationFrame(animateTrail)

    const move = e => {
      mouse = { x: e.clientX, y: e.clientY }
      cursor.style.left = e.clientX + 'px'
      cursor.style.top  = e.clientY + 'px'
    }
    const hide = () => { cursor.style.opacity = '0'; trails.forEach(t => t.style.opacity = '0') }
    const show = () => { cursor.style.opacity = '1' }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    /* Text cursor on readable elements */
    const textSels = 'p, h1, h2, h3, h4, span, li, label, input, textarea, .proj-desc, .proj-name, .cert-title, .cert-meta, .sk-item, .iv, .hero-sub, .eyebrow, .sec-title, .cm-row, .ft-left, .hero-name, .avail, .ls-name'
    const addText = () => { cursor.classList.add('text-mode') }
    const remText = () => { cursor.classList.remove('text-mode') }

    /* Link / button ring cursor */
    const linkSels = 'a, button, .btn, .proj-row, .cert-row, .sk-col'
    const addLink = () => { cursor.classList.remove('text-mode'); cursor.classList.add('link-mode') }
    const remLink = () => { cursor.classList.remove('link-mode') }

    const attachTimer = setTimeout(() => {
      document.querySelectorAll(textSels).forEach(el => {
        el.addEventListener('mouseenter', addText)
        el.addEventListener('mouseleave', remText)
      })
      document.querySelectorAll(linkSels).forEach(el => {
        el.addEventListener('mouseenter', addLink)
        el.addEventListener('mouseleave', remLink)
      })
    }, 200)

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
      cancelAnimationFrame(rafId)
      trails.forEach(t => t.remove())
      clearTimeout(attachTimer)
    }
  }, [loading])

  /* ── Scroll progress bar + scroll-up visibility ── */
  useEffect(() => {
    const bar = progressRef.current
    const onScroll = () => {
      const h = document.documentElement
      const pct = (window.scrollY / (h.scrollHeight - h.clientHeight)) * 100
      if (bar) bar.style.width = pct + '%'
      setShowScrollUp(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <>
      {/* ── Cursor ── */}
      <div ref={cursorRef} className="cursor" />

      {/* ── Scroll progress ── */}
      <div ref={progressRef} className="progress-bar" />

      {/* ── Scroll-Up Button ── */}
      <button
        className={`scroll-up${showScrollUp ? ' visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* ── Theme Toggle ── */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {/* Sun icon (shown in dark mode) */}
        <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1"  x2="12" y2="3"  />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"   />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1"  y1="12" x2="3"  y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78"  x2="5.64" y2="18.36"  />
          <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
        </svg>
        {/* Moon icon (shown in light mode) */}
        <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>

      {/* ── Loading screen ── */}
      <LoadingScreen hidden={!loading} />

      {/* ── Main content ── */}
      {!loading && (
        <>
          <Navbar />
          <div className="wrap"><Hero /></div>
          <div className="divider" />
          <div className="wrap"><About /></div>
          <div className="divider" />
          <div className="wrap"><Skills /></div>
          <div className="divider" />
          <div className="wrap"><Projects /></div>
          <div className="divider" />
          <div className="wrap"><Certificates /></div>
          <div className="divider" />
          <div className="wrap"><Contact /></div>
          <Footer />
        </>
      )}
    </>
  )
}