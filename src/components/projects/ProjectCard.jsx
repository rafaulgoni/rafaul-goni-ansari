import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)
  const [tilt, setTilt] = useState('rotateX(0deg) rotateY(0deg)')

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    setTilt(`rotateX(${py * -4}deg) rotateY(${px * 5}deg)`)
  }

  return (
    <motion.article
      layout
      style={{ transform: tilt }}
      onPointerMove={handleMove}
      onPointerLeave={() => setTilt('rotateX(0deg) rotateY(0deg)')}
      className="project-card app-card"
    >
      <div className="project-topline"><span>PROJECT 0{index + 1}</span><span className="project-dot" /></div>
      <div className="project-preview">
        <div className="preview-grid" />
        <div className="preview-window">
          <span /><span /><span />
        </div>
        <div className="preview-title">{project.name}</div>
        <div className="preview-code">{project.stack.slice(0, 3).join('  /  ')}</div>
      </div>
      <h2>{project.name}</h2>
      <p className="project-description">{project.description}</p>
      <div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      <button className="card-action" type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        {open ? 'Close case study' : 'Open case study'} <span>{open ? '↑' : '↗'}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="project-details">
            <div><span>Contribution</span><p>{project.contribution}</p></div>
            <div><span>Features</span><p>{project.features}</p></div>
            <div className="full"><span>Links listed in resume</span><div className="tag-row">{project.links.map((link) => <em key={link}>{link}</em>)}</div><small>The resume provides these labels but no actual URLs.</small></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
