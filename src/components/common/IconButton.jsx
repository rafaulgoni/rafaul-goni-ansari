export default function IconButton({ label, children, onClick, className = '' }) {
  return (
    <button type="button" aria-label={label} title={label} onClick={onClick} className={`icon-button ${className}`}>
      {children}
    </button>
  )
}
