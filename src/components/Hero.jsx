import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(#1a1a1a 1px, transparent 1px),
          linear-gradient(90deg, #1a1a1a 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        opacity: 0.25,
        zIndex: 0,
      }} />

      {/* Large BG Text */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(60px, 18vw, 260px)',
        fontWeight: 900,
        color: 'transparent',
        WebkitTextStroke: '0.5px #161616',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        zIndex: 0,
        letterSpacing: '-6px',
      }}>
        HEIRO
      </div>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '4rem',
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        paddingTop: '80px',
      }}>

        {/* ── LEFT ── */}
        <div>
          <motion.p {...fade(0.15)} style={{
            fontSize: '13px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: '1rem',
          }}>
            // Portfolio 2026
          </motion.p>

          <motion.h1 {...fade(0.3)} style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(36px, 5.5vw, 76px)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-2px',
            color: '#f2f2f2',
            marginBottom: '0.4rem',
          }}>
            Hi, I'm
          </motion.h1>

          <motion.h1 {...fade(0.4)} style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(40px, 6vw, 84px)',
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: '-2px',
            color: '#f2f2f2',
            marginBottom: '1.5rem',
          }}>
            <em style={{ fontStyle: 'italic', color: '#888' }}>Heiro</em>{' '}
            <span style={{ WebkitTextStroke: '1px #f2f2f2', color: 'transparent' }}>Usana</span>
          </motion.h1>


          <motion.div {...fade(0.5)} style={{
            display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '2rem',
          }}>
            {['Front-end DEV', 'Mobile & Web', 'UI/UX'].map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div {...fade(0.65)} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            <a href="#projects" className="btn">
              View My Work <ArrowDownRight size={14} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let's Talk
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: '440px', height: '440px',
              border: '0.5px dashed #2a2a2a',
              borderRadius: '50%',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
            }}
          />

          {/* Static ring */}
          <div style={{
            position: 'absolute',
            width: '380px', height: '380px',
            border: '0.5px solid #1c1c1c',
            borderRadius: '50%',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
          }} />

          {/* Hexagon photo */}
          <div style={{
            width: '300px', height: '340px',
            position: 'relative', zIndex: 1,
            clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
            background: '#0f0f0f',
            overflow: 'hidden',
            flexShrink: 0,
          }}>
            <img
              src="/formal_me.jpg"
              alt="Heiro S. Usana"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'top center',
                filter: 'grayscale(20%) contrast(0.85) brightness(1.10)',
                display: 'block',
              }}
              onError={e => { e.target.style.display = 'none' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Playfair Display, serif',
              fontSize: '72px', fontWeight: 900, color: '#1c1c1c',
            }}>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            style={{
              marginTop: '1.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '0.5px solid #2a2a2a',
              padding: '10px 20px',
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#666',
              zIndex: 1,
            }}
          >
            <span style={{
              width: '6px', height: '6px',
              borderRadius: '50%',
              background: '#4ade80',
              boxShadow: '0 0 8px #4ade80',
              flexShrink: 0,
            }} />
            Available for Work
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            style={{
              position: 'absolute', top: '8%', right: '-10px',
              border: '0.5px solid #2a2a2a', background: '#0a0a0a',
              padding: '10px 14px', zIndex: 2,
            }}
          >
            <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#444' }}>Completed Internship</div>
            <div style={{ fontSize: '12px', color: '#bbb', marginTop: '2px' }}>Studio Pinya</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            style={{
              position: 'absolute', top: '55%', left: '-10px',
              border: '0.5px solid #2a2a2a', background: '#0a0a0a',
              padding: '10px 14px', zIndex: 2,
            }}
          >
            <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#444' }}>Honors</div>
            <div style={{ fontSize: '12px', color: '#bbb', marginTop: '2px' }}>Cum Laude🎓</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          color: '#333', zIndex: 1,
        }}
      >
        <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{ width: '0.5px', height: '40px', background: 'linear-gradient(to bottom, #333, transparent)' }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #hero > div:nth-child(3) {
            grid-template-columns: 1fr !important;
            padding-top: 100px !important;
          }
          #hero > div:nth-child(3) > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}