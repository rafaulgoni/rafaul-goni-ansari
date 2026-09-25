import IconButton from '../common/IconButton'

export default function Topbar({ currentItem, onDownload, onMenu }) {
  return (
    <header className="topbar glass-panel">
      <div className="topbar-page"><span>{currentItem?.short}</span><strong>{currentItem?.label}</strong></div>
      <div className="topbar-actions"><span className="keyboard-hint">← → navigate</span><IconButton label="Download resume" onClick={onDownload}>↓</IconButton><IconButton label="Open menu" onClick={onMenu} className="mobile-menu-button">☰</IconButton></div>
    </header>
  )
}
