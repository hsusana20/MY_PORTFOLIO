import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer style={{ borderTop: '0.5px solid #1c1c1c', padding: '3rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>

          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 900, color: '#f2f2f2', marginBottom: '4px' }}>
              HU.
            </div>
            <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#333' }}>
              © {year} Heiro S. Usana
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/heirousana' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/heirousana/' },
              { label: 'Email', href: 'mailto:heirousana27@gmail.com' },
              { label: '09636712339', href: 'tel:09636712339' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', color: '#444', display: 'flex', alignItems: 'center', gap: '4px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#f2f2f2'}
                onMouseLeave={e => e.currentTarget.style.color = '#444'}>
                {link.label} <ArrowUpRight size={10} />
              </a>
            ))}
          </div>

          <button onClick={scrollTop}
            style={{ background: 'none', border: '0.5px solid #2a2a2a', color: '#555', fontFamily: 'DM Mono, monospace', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', padding: '10px 18px', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#f2f2f2'; e.currentTarget.style.borderColor = '#555' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.borderColor = '#2a2a2a' }}>
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}