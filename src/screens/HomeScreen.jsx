import { motion } from 'framer-motion'
import Scene from '../components/three/Scene'
import MagneticButton from '../components/common/MagneticButton'
import { profile } from '../data/portfolio'

export default function HomeScreen({ goTo, reducedMotion }) {
  return (
    <div className="home-screen">
      <div className="home-scene"><Scene reducedMotion={Boolean(reducedMotion)} /></div>
      <div className="home-copy">
        <div className="status-line"><span className="live-dot" /> Available for web-development opportunities · {profile.location}</div>
        <h1>Rafaul <span>Goni Ansari</span></h1>
        <div className="hero-role">{profile.title}</div>
        <p>{profile.intro}</p>
        <div className="home-actions">
          <MagneticButton href="#projects" primary onClick={(e) => { e.preventDefault(); goTo('projects') }}>View my work</MagneticButton>
          <MagneticButton href="/resume.pdf" download>Download resume</MagneticButton>
        </div>
        <div className="quick-stats">
          <div><span>Stack</span><strong>JS · React · Node</strong></div>
          <div><span>Education</span><strong>B.A. Philosophy</strong></div>
          <div><span>Base</span><strong>{profile.location}</strong></div>
        </div>
      </div>
      <div className="hero-portrait-wrap">
        <div className="portrait-glow" />
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 30, rotateY: -8 }} animate={{ opacity: 1, y: 0, rotateY: -2 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="hero-portrait">
          <img src="/profile.webp" alt="Rafaul Goni Ansari professional portrait" />
          <div className="portrait-label"><span>01</span><div><small>PROFILE</small><strong>Junior web developer</strong></div><span>●</span></div>
        </motion.div>
        <div className="floating-chip chip-one">React.js</div>
        <div className="floating-chip chip-two">Node.js</div>
      </div>
      <div className="home-footer"><span>PERSONAL PORTFOLIO / 2026</span><span>Use the sidebar to navigate</span></div>
    </div>
  )
}
