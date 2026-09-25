import { AnimatePresence, motion } from 'framer-motion'

export default function MobileNav({ open, navItems, active, goTo }) {
  return (
    <AnimatePresence>
      {open && <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mobile-nav glass-panel">{navItems.map((item) => <button key={item.id} onClick={() => goTo(item.id)} className={active === item.id ? 'active' : ''}><span>{item.short}</span>{item.label}</button>)}<a href="/resume.pdf" download>Download resume ↓</a></motion.div>}
    </AnimatePresence>
  )
}
