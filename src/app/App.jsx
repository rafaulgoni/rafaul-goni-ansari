import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import AssistantWidget from '../components/assistant/AssistantWidget'
import BottomDock from '../components/navigation/BottomDock'
import MobileNav from '../components/navigation/MobileNav'
import Sidebar from '../components/navigation/Sidebar'
import Topbar from '../components/navigation/Topbar'
import { navItems } from '../config/navigation'
import AboutScreen from '../screens/AboutScreen'
import ContactScreen from '../screens/ContactScreen'
import EducationScreen from '../screens/EducationScreen'
import ExperienceScreen from '../screens/ExperienceScreen'
import HomeScreen from '../screens/HomeScreen'
import ProjectsScreen from '../screens/ProjectsScreen'
import SkillsScreen from '../screens/SkillsScreen'

function App() {
  const reducedMotion = useReducedMotion()
  const [active, setActive] = useState('home')
  const [direction, setDirection] = useState(1)
  const [mobileNav, setMobileNav] = useState(false)
  const currentIndex = useMemo(() => navItems.findIndex((item) => item.id === active), [active])

  const goTo = (id) => {
    const nextIndex = navItems.findIndex((item) => item.id === id)
    setDirection(nextIndex >= currentIndex ? 1 : -1)
    setActive(id)
    setMobileNav(false)
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMobileNav(false)
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault()
        goTo(navItems[Math.min(navItems.length - 1, currentIndex + 1)].id)
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault()
        goTo(navItems[Math.max(0, currentIndex - 1)].id)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [currentIndex, reducedMotion])

  const screen = {
    home: <HomeScreen goTo={goTo} reducedMotion={reducedMotion} />,
    about: <AboutScreen />,
    experience: <ExperienceScreen goTo={goTo} />,
    projects: <ProjectsScreen />,
    skills: <SkillsScreen />,
    education: <EducationScreen />,
    contact: <ContactScreen />,
  }[active]

  const currentItem = navItems[currentIndex]

  return <div className="app-shell">
    <div className="app-background"><div className="bg-orb bg-orb-one" /><div className="bg-orb bg-orb-two" /><div className="bg-grid" /></div>
    <div className="site-noise" />

    <Sidebar navItems={navItems} active={active} goTo={goTo} />

    <Topbar
      currentItem={currentItem}
      onDownload={() => window.open('/resume.pdf', '_blank')}
      onMenu={() => setMobileNav((v) => !v)}
    />

    <MobileNav open={mobileNav} navItems={navItems} active={active} goTo={goTo} />

    <main className="app-main">
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div key={active} custom={direction} initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * 28, scale: 0.985 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * -22, scale: 0.99 }} transition={{ duration: reducedMotion ? 0.15 : 0.42, ease: [0.16, 1, 0.3, 1] }} className="screen-wrap">{screen}</motion.div>
      </AnimatePresence>
      <div className="screen-controls"><span>0{currentIndex + 1} / 07</span><div><button disabled={currentIndex === 0} onClick={() => goTo(navItems[currentIndex - 1].id)}>←</button><button disabled={currentIndex === navItems.length - 1} onClick={() => goTo(navItems[currentIndex + 1].id)}>→</button></div></div>
    </main>

    <BottomDock navItems={navItems} active={active} goTo={goTo} />
    <AssistantWidget />
  </div>
}

export default App
