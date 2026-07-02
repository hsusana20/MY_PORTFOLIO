import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

const socials = [
  { label: 'GitHub', href: 'https://github.com/hsusana20' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/heirousana/' },
  { label: 'Facebook', href: 'https://www.facebook.com/heiro.usana.5' },
]
 

export default function About() {
  return (
    <section id="about" style={{ padding: '8rem 0', borderTop: '0.5px solid #1c1c1c' }}>
      <div className="container">

        <motion.div className="section-heading" {...fadeUp(0)}>
          <span className="section-number">01</span>
          <h2 className="section-title">About</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>

          {/* Left: Text */}
          <div>
            <motion.p {...fadeUp(0.1)} style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              fontWeight: 400,
              lineHeight: 1.5,
              color: '#bbb',
              marginBottom: '2rem',
            }}>
               Motivated BSIT graduate building clean, responsive interfaces for mobile and web.
            </motion.p>

            <motion.p {...fadeUp(0.2)} style={{ color: '#666', lineHeight: 1.9, marginBottom: '1.5rem', fontSize: '14px' }}>
               I'm a Academic Distinction graduate from Asia Pacific College Bachelor of Science Information Technology with a specialization in Mobile and Internet. I completed my internship as a Mobile Front-End Developer at Studio Pinya, where I worked with React Native, Next.js, and TypeScript to build and refine the Pinya.io mobile application.
            </motion.p>

            <motion.p {...fadeUp(0.3)} style={{ color: '#666', lineHeight: 1.9, fontSize: '14px', marginBottom: '2.5rem' }}>
              Beyond front-end, I also have hands-on backend experience through my academic projects and internship — building a secure vault system using PHP and Laravel (AshenKeep), and developing REST API integrations for authentication and data-driven features. I enjoy working across the full stack and understanding how everything connects.
            </motion.p>

            <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: '1rem' }}>
              {socials.map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '12px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#555',
                    border: '0.5px solid #2a2a2a',
                    padding: '8px 14px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#f2f2f2'; e.currentTarget.style.borderColor = '#555' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.borderColor = '#2a2a2a' }}
                >
                  {platform.label} ↗
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1c1c1c' }}>
            {[
              { label: 'Location', value: 'Villamor Pasay City, Philippines' },
              { label: 'Education', value: 'BSIT - Mobile & Internet ' },
              { label: 'School', value: 'Asia Pacific College' },
              { label: 'Languages', value: 'Filipino, English' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp(0.1 * i)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.25rem 1.5rem',
                  background: '#0f0f0f',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#141414'}
                onMouseLeave={e => e.currentTarget.style.background = '#0f0f0f'}
              >
                <span style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#444' }}>
                  {item.label}
                </span>
                <span style={{ fontSize: '14px', color: '#bbb' }}>{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}