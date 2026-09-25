export default function BottomDock({ navItems, active, goTo }) {
  return (
    <nav className="bottom-dock glass-panel" aria-label="Mobile navigation">{navItems.map((item) => <button key={item.id} onClick={() => goTo(item.id)} className={active === item.id ? 'active' : ''}><span>{item.icon}</span><small>{item.label}</small></button>)}</nav>
  )
}
