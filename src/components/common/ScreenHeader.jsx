export default function ScreenHeader({ eyebrow, title, description, index }) {
  return (
    <div className="screen-header">
      <div>
        <div className="screen-eyebrow"><span>{index}</span>{eyebrow}</div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      <div className="header-orb" aria-hidden="true" />
    </div>
  )
}
