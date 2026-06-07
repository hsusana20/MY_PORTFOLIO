import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    num: '01',
    title: 'Pinya.io Mobile App',
    bullets: [
      'Tested and refined UI/UX of the Pinya.io mobile app using React Native (Expo Go)',
      'Implemented REST API integrations for authentication and data-driven features',
      'Translated Figma mobile designs into responsive Next.js web pages',
      'Created tablet adaptations with light/dark mode variants',
      'Maintained UI/UX consistency across mobile and web platforms',
    ],
    tags: ['React Native', 'Expo Go', 'Next.js', 'TypeScript', 'REST API', 'Figma'],
    type: 'Internship · Mobile & Web',
    year: '2025–2026',
    github: '#',
  },
  {
    num: '02',
    title: 'AshenKeep — Vault System',
    bullets: [
      'Designed and developed a secure vault application as a capstone project',
      'Built user-friendly UI with a PHP/Laravel backend',
      'Implemented responsive design for usability across all device types',
    ],
    tags: ['PHP', 'Laravel', 'HTML/CSS', 'JavaScript'],
    type: 'Capstone · Full Stack',
    year: '2024–2025',
    live: '#',
    github: '#',
  },
  {
    num: '03',
    title: 'AlwaysOnTrack — IoT Health-based Monitoring',
    bullets: [
      'Developed a mobile application for IoT-based health monitoring as a capstone project',
      'Worked as a full-stack developer building the Flutter UI for the app',
      'Integrated IoT functionality to track and display real-time health metrics',
    ],
    tags: ['Flutter', 'IoT', 'Mobile Dev', 'Figma'],
    type: 'Capstone · Full Stack',
    year: 'Jun–Oct 2025',
    live: '#',
    github: '#',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

const BulletList = ({ bullets }) => (
  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
    {bullets.map((b, i) => (
      <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
        <span style={{ color: '#444', fontSize: '14px', marginTop: '2px', flexShrink: 0 }}>—</span>
        <span style={{ color: '#666', fontSize: '14px', lineHeight: 1.7 }}>{b}</span>
      </li>
    ))}
  </ul>
)

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '8rem 0', borderTop: '0.5px solid #1c1c1c' }}>
      <div className="container">

        <motion.div className="section-heading" {...fadeUp(0)}>
          <span className="section-number">02</span>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            border: '0.5px solid #1c1c1c', marginBottom: '1px', transition: 'border-color 0.3s',
          }}
          className="featured-project"
          onMouseEnter={e => e.currentTarget.style.borderColor = '#3a3a3a'}
          onMouseLeave={e => e.currentTarget.style.borderColor = '#1c1c1c'}
        >
          <div style={{
            background: '#0f0f0f', aspectRatio: '4/3',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRight: '0.5px solid #1c1c1c', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '100px', color: '#1c1c1c', fontWeight: 900, userSelect: 'none' }}>
              01
            </div>
            <span style={{
              position: 'absolute', top: '1rem', left: '1rem',
              fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
              color: '#333', border: '0.5px solid #222', padding: '4px 10px',
            }}>
              Featured · Internship
            </span>
          </div>

          <div style={{ padding: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <span className="label" style={{ fontSize: '13px' }}>{projects[0].type}</span>
              <span className="label" style={{ fontSize: '13px' }}>{projects[0].year}</span>
            </div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#f2f2f2', marginBottom: '1.25rem', lineHeight: 1.2 }}>
              {projects[0].title}
            </h3>
            <div style={{ marginBottom: '2rem' }}>
              <BulletList bullets={projects[0].bullets} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {projects[0].tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </div>
        </motion.div>

        {/* Grid of remaining */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: '#1c1c1c' }}>
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.num}
              {...fadeUp(0.1 * (i + 1))}
              style={{ background: '#080808', padding: '2rem', transition: 'background 0.25s', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              onMouseEnter={e => e.currentTarget.style.background = '#0e0e0e'}
              onMouseLeave={e => e.currentTarget.style.background = '#080808'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#1c1c1c', lineHeight: 1 }}>
                  {project.num}
                </span>
                <a href={project.github} style={{ color: '#444', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f2f2f2'}
                  onMouseLeave={e => e.currentTarget.style.color = '#444'}>
                  <ArrowUpRight size={20} />
                </a>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="label" style={{ fontSize: '13px' }}>{project.type} · {project.year}</span>
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#e0e0e0', marginBottom: '1rem', lineHeight: 1.3 }}>
                {project.title}
              </h3>
              <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                <BulletList bullets={project.bullets} />
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tags.map(tag => <span key={tag} className="tag" style={{ fontSize: '12px' }}>{tag}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.4)} style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="https://github.com/hsusana20" target="_blank" rel="noopener noreferrer" className="btn">
            View All on GitHub <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .featured-project { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}