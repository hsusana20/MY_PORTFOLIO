import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend (Mobile & Web)',
    skills: [
      { name: 'React Native (Expo Go)', level: 94 },
      { name: 'Next.js / React', level: 95 },
      { name: 'TypeScript', level: 95 },
      { name: 'HTML & CSS', level: 95 },
    ],
  },
  {
    category: 'Design & UI/UX',
    skills: [
      { name: 'Figma', level: 92 },
  
    ],
  },
  {
    category: 'Backend & Tools',
    skills: [
      { name: 'PHP / Laravel', level: 90 },
      { name: 'JavaScript', level: 83 },
      { name: 'REST API Integration', level: 85 },
      { name: 'Git / GitHub', level: 85 },
      { name: 'Firebase', level: 85 },
      { name: 'MySQL / PostgreSQL', level: 88 },
    ],
  },

   {
    category: 'Soft Skills',
    skills: [
      { name: 'Team Collaboration', level: 95 },
      { name: 'Adaptability', level: 90 },
      { name: 'Time Management', level: 90 },
      { name: 'Problem Solving', level: 88 },
    ],
  },
]

const techStack = [
  'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'PHP',
  'Laravel', 'HTML', 'CSS', 'Figma', 'Expo Go',
  'Android Studio', 'Git', 'REST API', 'UI/UX', 'Tailwind', 'Firebase', 'MySQL', 'PostgreSQL',
]

const certifications = [
  { title: 'Scrum Foundation', org: 'Certification Professional Knowledge', year: 'May 2024' },
  { title: 'Agile Explorer', org: 'IBM Skills Build', year: 'April 2024' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '8rem 0', borderTop: '0.5px solid #1c1c1c' }}>
      <div className="container">

        <motion.div className="section-heading" {...fadeUp(0)}>
          <span className="section-number">03</span>
          <h2 className="section-title">Skills</h2>
        </motion.div>

        {/* Skill Bars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '4rem', marginBottom: '6rem' }} className="skills-grid">
          {skillGroups.map((group, gi) => (
            <motion.div key={group.category} {...fadeUp(0.1 * gi)}>
              <div style={{
                fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase',
                color: '#444', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '0.5px solid #1c1c1c',
              }}>
                {group.category}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '13px', color: '#bbb' }}>{skill.name}</span>
                      <span style={{ fontSize: '13px', color: '#8b8b8b' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: '1px', background: '#1c1c1c', position: 'relative' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: gi * 0.1 + si * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        style={{ position: 'absolute', top: 0, left: 0, height: '1px', background: '#f2f2f2' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div {...fadeUp(0.3)} style={{ marginBottom: '4rem' }}>
          <div style={{ fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', color: '#333', marginBottom: '1.5rem' }}>
            Certifications
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: '#1c1c1c' }}>
            {certifications.map((cert) => (
              <div key={cert.title} style={{
                background: '#0f0f0f', padding: '1.5rem', transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#141414'}
                onMouseLeave={e => e.currentTarget.style.background = '#0f0f0f'}
              >
                <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#444', marginBottom: '8px' }}>{cert.year}</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#e0e0e0', marginBottom: '4px' }}>{cert.title}</div>
                <div style={{ fontSize: '12px', color: '#555' }}>{cert.org}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div {...fadeUp(0.4)}>
          <div style={{ fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', color: '#333', marginBottom: '1.5rem', textAlign: 'center' }}>
            Tech Stack
          </div>
          <div style={{ overflow: 'hidden', borderTop: '0.5px solid #1c1c1c', borderBottom: '0.5px solid #1c1c1c', padding: '1rem 0' }}>
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              style={{ display: 'flex', gap: '0', whiteSpace: 'nowrap', width: 'max-content' }}
            >
              {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                <span key={i} style={{
                  fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
                  color: '#333', padding: '0 2rem', borderRight: '0.5px solid #1c1c1c',
                }}>
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}