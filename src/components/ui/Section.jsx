export default function Section({ id, className = '', children, container = true, as: As = 'section' }) {
  return (
    <As id={id} className={`section-padding ${className}`}>
      <div className={container ? 'container-wide' : ''}>{children}</div>
    </As>
  )
}
