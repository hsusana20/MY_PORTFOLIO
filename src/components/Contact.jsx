import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Clock } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

const inputStyle = {
  width: '100%', background: '#0f0f0f', border: '0.5px solid #1c1c1c',
  color: '#f2f2f2', fontFamily: 'DM Mono, monospace', fontSize: '14px',
  padding: '14px 16px', outline: 'none', transition: 'border-color 0.2s', borderRadius: 0,
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/xwvzzdye', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{ padding: '8rem 0', borderTop: '0.5px solid #1c1c1c' }}>
      <div className="container">

        <motion.div className="section-heading" {...fadeUp(0)}>
          <span className="section-number">04</span>
          <h2 className="section-title">Contact</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }} className="contact-grid">

          <div>
            <motion.p {...fadeUp(0.1)} style={{
              fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 2.5vw, 28px)',
              fontWeight: 400, lineHeight: 1.4, color: '#bbb', marginBottom: '2.5rem',
            }}>
              Interested in working together? Let's connect and build something great.
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
             {[
              { icon: Mail, label: 'Email', value: 'heirousana27@gmail.com' },
              { icon: MapPin, label: 'Location', value: 'Villamor, Pasay City, PH' },
              { icon: Clock, label: 'Timezone', value: 'PHT (UTC+8)' },
            ].map(({ icon: Icon, label, value }) => (
              <motion.div 
                key={label} 
                {...fadeUp(0.15)} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem' 
                }}
              >
                <div style={{ 
                  width: '36px', 
                  height: '36px', 
                  border: '0.5px solid #2a2a2a', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}>
                  <Icon size={14} color="#555" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ 
                    fontSize: '13px', 
                    letterSpacing: '2px', 
                    textTransform: 'uppercase', 
                    color: '#444', 
                    marginBottom: '2px',
                    lineHeight: 1.2,
                  }}>
                    {label}
                  </div>
                  <div style={{ 
                    fontSize: '15px', 
                    color: '#bbb',
                    lineHeight: 1.3,
                  }}>
                    {value}
                  </div>
                </div>
              </motion.div>
            ))}
            </div>

            <motion.div {...fadeUp(0.3)} style={{ border: '0.5px solid #1c1c1c', padding: '1.25rem', background: '#0f0f0f' }}>
              <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#444', marginBottom: '6px' }}>Response Time</div>
              <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.6 }}>
                Usually respond within <span style={{ color: '#bbb' }}>24 hours</span>. Open to full-time roles, freelance projects, and internship extensions.
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.2)}>
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  height: '100%', display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                  gap: '1rem', border: '0.5px solid #1c1c1c', padding: '4rem',
                }}
              >
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', color: '#2a2a2a' }}>✓</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#f2f2f2' }}>Message Sent!</h3>
                <p style={{ fontSize: '12px', color: '#555' }}>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="btn" style={{ marginTop: '1rem', fontSize: '10px' }} onClick={() => setStatus(null)}>
                  Send Another
                </button>
              </motion.div>
            ) : (
              <>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1c1c1c' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px' }}>
                    <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#3a3a3a'} onBlur={e => e.target.style.borderColor = '#1c1c1c'} />
                    <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#3a3a3a'} onBlur={e => e.target.style.borderColor = '#1c1c1c'} />
                  </div>
                  <input name="subject" type="text" placeholder="Subject" value={form.subject} onChange={handleChange} required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#3a3a3a'} onBlur={e => e.target.style.borderColor = '#1c1c1c'} />
                  <textarea name="message" placeholder="Tell me about your project or opportunity..." value={form.message} onChange={handleChange}
                    required rows={7} style={{ ...inputStyle, resize: 'vertical', minHeight: '160px' }}
                    onFocus={e => e.target.style.borderColor = '#3a3a3a'} onBlur={e => e.target.style.borderColor = '#1c1c1c'} />
                  <button type="submit" className="btn"
                    style={{ border: 'none', justifyContent: 'center', padding: '16px', fontSize: '10px', letterSpacing: '3px', opacity: status === 'sending' ? 0.6 : 1 }}
                    disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : <><Send size={13} /> &nbsp;Send Message</>}
                  </button>
                </form>

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', color: '#ff5555', fontSize: '12px', padding: '1rem 0', letterSpacing: '1px' }}
                  >
                    Something went wrong. Please try again or email me directly at heirousana27@gmail.com
                  </motion.p>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        input::placeholder, textarea::placeholder { color: #333; }
      `}</style>
    </section>
  )
}