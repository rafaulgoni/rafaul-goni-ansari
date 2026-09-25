import { useState } from 'react'

export default function MagneticButton({ href, children, download, primary = false, onClick }) {
  const [transform, setTransform] = useState('translate3d(0,0,0)')

  const move = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left - rect.width / 2) * 0.06
    const y = (event.clientY - rect.top - rect.height / 2) * 0.06
    setTransform(`translate3d(${x}px,${y}px,0)`)
  }

  return (
    <a
      href={href}
      download={download}
      onClick={onClick}
      onPointerMove={move}
      onPointerLeave={() => setTransform('translate3d(0,0,0)')}
      style={{ transform }}
      className={`magnetic-button ${primary ? 'magnetic-primary' : ''}`}
    >
      <span>{children}</span><span className="button-arrow">↗</span>
    </a>
  )
}
