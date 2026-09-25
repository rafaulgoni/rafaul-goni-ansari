import ScreenHeader from '../components/common/ScreenHeader'
import MagneticButton from '../components/common/MagneticButton'
import { profile } from '../data/portfolio'

export default function ContactScreen() {
  return <div className="screen-inner contact-screen">
    <ScreenHeader index="07" eyebrow="Contact" title="Let’s build something meaningful." description="Reach out using the contact details included in the resume." />
    <div className="contact-grid">
      <article className="app-card contact-main"><div className="contact-big">RGA<span>.</span></div><p>{profile.location}</p><div className="contact-actions"><MagneticButton href={`mailto:${profile.email}`} primary>Email Rafaul</MagneticButton><MagneticButton href="/resume.pdf" download>Download resume</MagneticButton></div></article>
      <div className="contact-list">
        <a className="app-card contact-item" href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong><b>↗</b></a>
        <a className="app-card contact-item" href={`tel:${profile.phone.replace(/\s+/g, '')}`}><span>Phone</span><strong>{profile.phone}</strong><b>↗</b></a>
        {profile.profileHandles.map((handle) => <div className="app-card contact-item" key={handle}><span>Profile handle</span><strong>{handle}</strong><b>•</b></div>)}
      </div>
    </div>
  </div>
}
