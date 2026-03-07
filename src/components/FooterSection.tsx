import { useEffect, useRef, useState } from 'react'
import { images } from '../constants/image.index'
import '../styles/footer.css'

function FooterSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const footerRef = useRef<HTMLDivElement>(null)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!footerRef.current) return
      const rect = footerRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }
    const el = footerRef.current
    el?.addEventListener('mousemove', handleMouseMove)
    return () => el?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const socialLinks = [
    { label: 'IG', name: 'Instagram', url: 'https://instagram.com' },
    { label: 'FB', name: 'Facebook', url: 'https://facebook.com' },
    { label: 'TW', name: 'Twitter / X', url: 'https://twitter.com' },
    { label: 'LI', name: 'LinkedIn', url: 'https://linkedin.com' },
  ]

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
    { name: 'Projects', url: '/projects' },
    { name: 'Services', url: '/services' },
    { name: 'Blog', url: '/blog' },
  ]

  const timeStr = time.toLocaleTimeString('en-US', { hour12: false })
  const dateStr = time.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })

  return (
    <>

      <footer
        className="footer-root"
        ref={footerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="footer-noise" />

        {/* Spotlight effect */}
        <div
          className="footer-spotlight"
          style={{
            background: isHovered
              ? `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(200,185,126,0.06), transparent 70%)`
              : 'none',
          }}
        />

        {/* Background image */}
        <div className="footer-img-wrap">
          <img src={images.footer} alt="" aria-hidden="true" />
        </div>

        {/* Marquee */}
        <div className="footer-marquee-wrapper">
          <div className="footer-marquee-track">
            {[...Array(2)].map((_, i) =>
              ['Available for freelance', 'Based on Earth', 'Open to collabs', 'Crafting digital experiences', 'Pixel-perfect delivery', 'Let\'s build something'].map((text, j) => (
                <span className="footer-marquee-item" key={`${i}-${j}`}>
                  {text}
                  <span className="footer-marquee-dot" />
                </span>
              ))
            )}
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1">

          {/* Col 1 — Brand */}
          <div className="flex md:flex-row flex-col w-full">
            <div className="flex-1 p-4!">
              <div className="md:h-24 h-8 mb-5!  opacity-70">
                <img src={images.footer} alt="Footer Logo" className="h-full w-auto" />
              </div>
              <p className="footer-tagline">
                Turning caffeine & keystrokes into experiences worth remembering.
              </p>
            </div>

            <div className="footer-divider-v" />

            {/* Col 2 — Navigation */}
            <div className="flex-1">
              <div className="footer-label p-4!">Navigation</div>
              <nav className="footer-nav-list">
                {quickLinks.map(link => (
                  <a key={link.name} href={link.url} className="footer-nav-item px-4!">
                    <span>{link.name}</span>
                    <span className="footer-nav-arrow">→</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="footer-divider-v" />

          {/* Col 3 — Socials + Clock */}
          <div className="footer-col border-t border-gray-800 opacity-50">
            <div className="footer-label">Local Time</div>
            <div className="footer-clock">{timeStr}</div>
            <div className="footer-clock-date">{dateStr}</div>
            <div className="footer-clock-zone">UTC +0 · Worldwide</div>

            <div style={{ marginTop: '2rem' }}>
              <div className="footer-label">Connect</div>
              <div className="footer-social-grid">
                {socialLinks.map(link => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-social-btn">
                    <span className="footer-social-label">{link.label}</span>
                    <span className="footer-social-name">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            © {new Date().getFullYear()} — All rights reserved · Designed & built with intent
          </div>
          <div className="footer-bottom-right">
            <span>
              <span className="footer-status-dot" />
              Available for work
            </span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Privacy</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterSection