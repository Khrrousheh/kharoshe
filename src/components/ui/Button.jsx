export default function Button({ children, variant = 'primary', size = 'md', className = '', href, type = 'button', ...props }) {
  const variants = {
    primary: 'bg-gold-gradient text-brand-black hover:shadow-[0_0_28px_rgba(201,168,76,.35)]',
    outline: 'border border-gold-primary/70 text-gold-light hover:bg-gold-primary hover:text-brand-black',
    ghost: 'text-brand-white hover:bg-white/5 hover:text-gold-primary',
  }
  const sizes = { sm: 'min-h-9 px-5 py-2 text-sm', md: 'min-h-11 px-7 py-3', lg: 'min-h-12 px-8 py-3.5 text-lg' }
  const classes = `inline-flex items-center justify-center gap-2 rounded-[2px] font-bold transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50 ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`
  return href
    ? <a href={href} className={classes} {...props}>{children}</a>
    : <button type={type} className={classes} {...props}>{children}</button>
}
