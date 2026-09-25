import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { education, profile, projects, skills } from '../../data/portfolio'

const quickPrompts = [
  'What projects has Rafaul built?',
  'What skills does Rafaul have?',
  'How can I contact Rafaul?',
]

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9+.#@\s]/g, ' ')
}

function getAnswer(message) {
  const q = normalize(message)

  if (q.includes('project') || q.includes('work') || q.includes('built')) {
    return `Rafaul’s resume lists three projects: ${projects.map((p) => p.name).join(', ')}. Fast Delivery focuses on parcel management with secure payments and real-time Google Maps tracking. Royal Service connects service providers and users with verified profiles and secure transactions. Artful Abode presents a luxury living platform. You can explore the full case-study details in the Projects screen.`
  }

  if (q.includes('skill') || q.includes('stack') || q.includes('technology') || q.includes('technolog')) {
    return `His listed technical skills include ${[...skills.frontend, ...skills.backend, ...skills.dataAndPlatform, ...skills.projectTools].join(', ')}. His resume also lists ${skills.nonTechnical.join(', ')} as non-technical skills.`
  }

  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
    return `You can contact Rafaul at ${profile.email} or ${profile.phone}. He is based in ${profile.location}. The Contact screen also provides the resume download.`
  }

  if (q.includes('education') || q.includes('study') || q.includes('degree') || q.includes('philosophy')) {
    return `Rafaul is pursuing a ${education.degree} in ${education.subject} at ${education.college}, under ${education.institution}. The resume lists the period as ${education.dates}.`
  }

  if (q.includes('about') || q.includes('who') || q.includes('introduce') || q.includes('rafaul')) {
    return `${profile.intro} He is pursuing a career in web development and has built practical projects using his listed JavaScript-centered stack.`
  }

  if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
    return 'You can download Rafaul’s original resume using the Download Resume button in the portfolio navigation or from the Contact screen.'
  }

  if (q.includes('fast delivery')) {
    return `${projects[0].name}: ${projects[0].description} Key feature: ${projects[0].features} Resume note: ${projects[0].contribution}`
  }

  if (q.includes('royal service')) {
    return `${projects[1].name}: ${projects[1].description} Key feature: ${projects[1].features} Resume note: ${projects[1].contribution}`
  }

  if (q.includes('artful abode')) {
    return `${projects[2].name}: ${projects[2].description} Key feature: ${projects[2].features} Resume note: ${projects[2].contribution}`
  }

  return `I can help you explore Rafaul’s resume-based profile. Try asking about his projects, skills, education, contact details, or resume.`
}

export default function AssistantWidget() {
  const reducedMotion = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', text: `Hello! I’m the RGA Assistant. I can help you explore Rafaul Goni Ansari’s portfolio and resume.` },
  ])
  const endRef = useRef(null)

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
  }, [messages, open, reducedMotion])

  const status = useMemo(() => 'Portfolio assistant', [])

  const send = (text = message) => {
    const value = text.trim()
    if (!value) return
    setMessages((items) => [
      ...items,
      { id: Date.now(), role: 'user', text: value },
      { id: Date.now() + 1, role: 'assistant', text: getAnswer(value) },
    ])
    setMessage('')
  }

  return (
    <>
      <motion.button
        type="button"
        className={`assistant-launcher ${open ? 'is-open' : ''}`}
        aria-label={open ? 'Close RGA Assistant' : 'Open RGA Assistant'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        whileHover={reducedMotion ? undefined : { scale: 1.04 }}
        whileTap={reducedMotion ? undefined : { scale: 0.96 }}
      >
        <span className="assistant-pulse" />
        <span className="assistant-launcher-icon">{open ? '×' : '✦'}</span>
        {/* <span className="assistant-launcher-icon">{open ? '×' : '💬'}</span> */}
        {/* <span className="assistant-launcher-icon">{open ? '×' : '🤖'}</span> */}
        {/* <span className="assistant-launcher-icon">{open ? '×' : '💡'}</span> */}
        {!open && <span className="assistant-badge">1</span>}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.section
            className="assistant-window"
            role="dialog"
            aria-label="RGA Assistant"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: reducedMotion ? 0.15 : 0.28 }}
          >
            <header className="assistant-header">
              <div className="assistant-profile">
                <div className="assistant-avatar"><img src="/profile.webp" alt="Rafaul Goni Ansari" /></div>
                <div><strong>RGA Assistant</strong><span><i /> {status}</span></div>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant">×</button>
            </header>

            <div className="assistant-messages" aria-live="polite">
              {messages.map((item) => (
                <div key={item.id} className={`assistant-message-row ${item.role}`}>
                  <div className={`assistant-message ${item.role}`}>{item.text}</div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="assistant-quick-prompts">
              {quickPrompts.map((prompt) => <button key={prompt} type="button" onClick={() => send(prompt)}>{prompt}</button>)}
            </div>

            <form className="assistant-input" onSubmit={(event) => { event.preventDefault(); send() }}>
              <input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Ask about Rafaul..." aria-label="Message RGA Assistant" />
              <button type="submit" disabled={!message.trim()} aria-label="Send message">↑</button>
            </form>
            <div className="assistant-note">Answers are based on the portfolio resume content.</div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
