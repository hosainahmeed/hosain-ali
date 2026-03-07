import { useEffect, useRef, useState } from 'react'
import '../styles/contactus.css'

function ContactUsSection() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [focused, setFocused] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }
    const el = sectionRef.current
    el?.addEventListener('mousemove', handleMouseMove)
    return () => el?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (e.target.name === 'message') setCharCount(e.target.value.length)
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true)
    }
  }

  const contactDetails = [
    { label: 'Email', value: 'hello@yourname.com', icon: '✉' },
    { label: 'Phone', value: '+1 (000) 000-0000', icon: '◎' },
    { label: 'Location', value: 'Your City, Country', icon: '◈' },
  ]

  const subjects = ['Project Inquiry', 'Freelance Work', 'Collaboration', 'Just Saying Hi', 'Other']

  return (
    <>
      <section
        className="contact-root"
        ref={sectionRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="contact-noise" />
        <div className="contact-grid-bg" />
        <div
          className="contact-spotlight"
          style={{
            background: isHovered
              ? `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(200,185,126,0.07), transparent 70%)`
              : 'none',
          }}
        />

        <div className="contact-inner">

          {/* Header */}
          <div className={`contact-header reveal ${visible ? 'visible' : ''}`}>
            <div>
              <div className="contact-eyebrow">Get in Touch</div>
              <h2 className="contact-title">
                LET'S<br />
                <span className="contact-title-line2">TALK.</span>
              </h2>
            </div>
            {/* <div className="contact-header-right">
              <p className="contact-desc">
                Have a project in mind, a wild idea, or just want to say hi? My inbox is always open — I respond within 24 hours.
              </p>
            </div> */}
          </div>

          {/* Body */}
          <div className={`contact-body reveal reveal-delay-2 ${visible ? 'visible' : ''}`}>

            {/* Left — Info */}
            <div className="contact-left">
              <div>
                <div className="contact-section-label">Contact Info</div>
                {contactDetails.map(d => (
                  <div className="contact-detail-item" key={d.label}>
                    <span className="contact-detail-icon">{d.icon}</span>
                    <div>
                      <div className="contact-detail-label">{d.label}</div>
                      <div className="contact-detail-value">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="contact-section-label">Availability</div>
                <div className="contact-availability">
                  <div className="contact-avail-status">
                    <span className="contact-avail-dot" />
                    <span className="contact-avail-text">Open to work</span>
                  </div>
                  <p className="contact-avail-desc">
                    Currently accepting new projects for Q2 2025. Freelance & full-time opportunities considered.
                  </p>
                </div>
              </div>

              <div>
                <div className="contact-section-label">Response Time</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: 'rgba(240,236,228,0.3)', lineHeight: '1.8', fontStyle: 'italic' }}>
                  Typically within 24hrs —<br />
                  Mon–Fri, 9AM–6PM local time.
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="contact-right">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">✓</div>
                  <div className="contact-success-title">Message Sent!</div>
                  <p className="contact-success-sub">
                    Thanks for reaching out, {formState.name}.<br />
                    I'll get back to you at {formState.email} shortly.
                  </p>
                </div>
              ) : (
                <div className="contact-form">
                  <div className="contact-section-label" style={{ marginBottom: '1.5rem' }}>Your Message</div>

                  {/* Row 1: Name + Email */}
                  <div className="contact-form-row">
                    <div className={`contact-field ${focused === 'name' ? 'focused' : ''}`}>
                      <label className="contact-field-label" htmlFor="contact-name">Name</label>
                      <input
                        id="contact-name"
                        className="contact-input"
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        placeholder="John Doe"
                      />
                      <div className="contact-field-bar" />
                    </div>
                    <div className={`contact-field ${focused === 'email' ? 'focused' : ''}`}>
                      <label className="contact-field-label" htmlFor="contact-email">Email</label>
                      <input
                        id="contact-email"
                        className="contact-input"
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        placeholder="john@example.com"
                      />
                      <div className="contact-field-bar" />
                    </div>
                  </div>

                  {/* Row 2: Subject */}
                  <div className="contact-form-row">
                    <div className={`contact-field full-width`} style={{ gridColumn: '1 / -1', borderRight: 'none' }}>
                      <label className="contact-field-label" htmlFor="contact-subject">Subject</label>
                      <select
                        id="contact-subject"
                        className="contact-select"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused(null)}
                      >
                        <option value="">Select a topic...</option>
                        {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <span className="contact-select-arrow">▾</span>
                      <div className="contact-field-bar" style={{ width: focused === 'subject' ? '100%' : '0' }} />
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className={`contact-field full-width ${focused === 'message' ? 'focused' : ''}`} style={{ borderRight: 'none' }}>
                    <label className="contact-field-label" htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      className="contact-textarea"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell me about your project, idea, or just say hello..."
                    />
                    <div className="contact-field-bar" />
                    <span className="contact-char-count">{charCount} chars</span>
                  </div>

                  {/* Submit */}
                  <div className="contact-submit-row">
                    <p className="contact-submit-note">
                      Your message goes directly to my inbox — no bots, no forms, just me.
                    </p>
                    <button className="contact-btn" onClick={handleSubmit}>
                      <span>Send Message</span>
                      <span style={{ fontSize: '1rem' }}>→</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom bar */}
          {/* <div
            className={`reveal reveal-delay-4 ${visible ? 'visible' : ''}`}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              marginTop: '0',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: 'rgba(240,236,228,0.2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              © {new Date().getFullYear()} — All conversations are confidential
            </span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: 'rgba(200,185,126,0.4)', letterSpacing: '0.1em' }}>
              SECTION — 06 / CONTACT
            </span>
          </div> */}

        </div>
      </section>
    </>
  )
}

export default ContactUsSection