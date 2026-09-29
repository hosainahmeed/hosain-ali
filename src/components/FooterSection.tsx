import { useEffect, useRef, useState } from 'react'
import { images } from '../constants/image.index'
import '../styles/footer.css'

function FooterSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const footerRef = useRef<HTMLDivElement>(null)


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