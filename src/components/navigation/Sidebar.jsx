export default function Sidebar({ navItems, active, goTo }) {
  return (
    <aside className="sidebar glass-panel">
      <button className="brand" onClick={() => goTo('home')} aria-label="Go to home"><span className="brand-mark"><img className="rounded-full" src="logoOne.png" alt="RGA Logo" /></span><span><strong>RGA</strong><small>PORTFOLIO</small></span></button>
      <div className="side-divider" />
      <nav className="side-nav" aria-label="Primary navigation">
        {navItems.map((item) => <button key={item.id} type="button" onClick={() => goTo(item.id)} className={`side-nav-item ${active === item.id ? 'active' : ''}`}><span className="nav-icon">{item.icon}</span><span>{item.label}</span><small>{item.short}</small></button>)}
      </nav>
      <div className="sidebar-bottom"><a href="/resume.pdf" download className="resume-side">Download resume <span>↓</span></a><div className="side-meta"><span className="live-dot" /> Sylhet, Bangladesh</div></div>
    </aside>
  )
}
