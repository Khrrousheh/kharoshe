import { useScrollAnimation } from '../../hooks/useScrollAnimation'
export default function SectionTitle({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const ref = useScrollAnimation()
  const alignment = align === 'right' ? 'mr-0 text-right [&_.gold-line]:mr-0' : 'mx-auto text-center'
  return <div ref={ref} className={`reveal mb-12 max-w-2xl lg:mb-16 ${alignment} ${className}`}>
    {eyebrow && <span className="mb-3 block text-xs font-bold tracking-[.3em] text-gold-primary">{eyebrow}</span>}
    <h2 className="text-3xl font-bold md:text-5xl">{title}</h2><div className="gold-line my-5" aria-hidden="true" />
    {subtitle && <p className="text-sm leading-8 text-brand-white-muted md:text-base">{subtitle}</p>}
  </div>
}
