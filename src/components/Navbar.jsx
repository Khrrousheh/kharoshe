import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './ui/Button'
const links = [['التطوير العقاري','#real-estate'],['التصميم الداخلي','#interior-design'],['من نحن','#about'],['تواصل معنا','#contact']]
export default function Navbar() {
  const [scrolled,setScrolled]=useState(false), [open,setOpen]=useState(false)
  useEffect(()=>{ const f=()=>setScrolled(scrollY>30); f(); addEventListener('scroll',f); return()=>removeEventListener('scroll',f)},[])
  return <header className={`fixed inset-x-0 top-0 z-50 h-20 transition-all duration-500 ${scrolled||open?'border-b border-white/5 bg-brand-black/95 backdrop-blur-xl':''}`}>
    <nav className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 lg:px-10" aria-label="التنقل الرئيسي">
      <Logo />
      <div className="hidden items-center gap-8 lg:flex">{links.map(([t,h])=><a key={h} className="nav-link" href={h}>{t}</a>)}</div>
      <Button href="#contact" size="sm" className="hidden lg:inline-flex">احصل على عرض</Button>
      <button onClick={()=>setOpen(!open)} className="p-2 text-gold-primary lg:hidden" aria-label="القائمة" aria-expanded={open}>{open?<X/>:<Menu/>}</button>
    </nav>
    <div className={`absolute inset-x-0 top-20 border-b border-gold-primary/15 bg-brand-black/98 px-6 transition-all duration-300 lg:hidden ${open?'visible translate-y-0 opacity-100':'invisible -translate-y-4 opacity-0'}`}>
      <div className="flex flex-col py-6">{links.map(([t,h])=><a onClick={()=>setOpen(false)} key={h} href={h} className="border-b border-white/5 py-4 text-brand-white-muted hover:text-gold-primary">{t}</a>)}<Button href="#contact" className="mt-6">احصل على عرض</Button></div>
    </div>
  </header>
}
