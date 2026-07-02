export default function Logo({ compact = false }) {
  return <a href="#home" className="group flex items-center gap-3" aria-label="خروشة - الرئيسية">
    <span className="grid h-11 w-11 place-items-center border border-gold-primary/60 text-2xl font-bold text-gold-primary transition-colors group-hover:bg-gold-primary group-hover:text-black">K</span>
    {!compact && <span><strong className="block text-lg leading-none tracking-[.16em] text-gold-light">KHAROSHE</strong><small className="text-[10px] tracking-[.15em] text-brand-white-muted">خروشة</small></span>}
  </a>
}
