import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'

const FacebookIcon = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v7h4v-7h3.5l.5-4h-4V9c0-.7.3-1 1-1Z"/></svg>
const InstagramIcon = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none"/></svg>

const Link = ({ children, href = '#' }) => <a href={href} className="text-sm text-brand-white-muted transition-colors hover:text-gold-primary">{children}</a>
const socialLinks = [
  { href: 'https://www.facebook.com/KharroushehCo', label: 'خروشة على فيسبوك', Icon: FacebookIcon },
  { href: 'https://www.instagram.com/kharroushehco', label: 'خروشة على إنستغرام', Icon: InstagramIcon },
]

export default function Footer() {
  return <footer id="contact" className="border-t border-white/10 bg-brand-black-light">
    <div className="mx-auto grid max-w-[1320px] gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-10">
      <div><Logo/><p className="mt-6 max-w-xs text-sm leading-7 text-brand-white-muted">نبني مساحات استثنائية تجمع بين جودة الاستثمار وفخامة التصميم، لتبقى قيمتها للأجيال.</p></div>
      <div><h4 className="mb-6 text-gold-light">روابط سريعة</h4><div className="flex flex-col gap-4"><Link href="#real-estate">التطوير العقاري</Link><Link href="#interior-design">التصميم الداخلي</Link><Link href="#about">من نحن والأسئلة الشائعة</Link></div></div>
      <div><h4 className="mb-6 text-gold-light">خدماتنا</h4><div className="flex flex-col gap-4"><Link href="#real-estate">استشارات عقارية</Link><Link href="#interior-design">تصميم داخلي</Link><Link href="#contact">إدارة المشاريع</Link></div></div>
      <div><h4 className="mb-6 text-gold-light">تواصل معنا</h4><div className="flex flex-col gap-4 text-sm text-brand-white-muted">
        <a href="tel:+970598914449" className="flex items-center gap-3 hover:text-gold-primary"><Phone size={16}/> <span dir="ltr">+970 598 914 449</span></a>
        <a href="mailto:kharroushehco@gmail.com" className="flex items-center gap-3 hover:text-gold-primary"><Mail size={16}/> kharroushehco@gmail.com</a>
        <span className="flex items-center gap-3"><MapPin size={16}/> رام الله، فلسطين</span>
        <div className="flex flex-wrap gap-x-5 gap-y-3 pt-2">{socialLinks.map(({ href, label, Icon }) => <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold-primary"><Icon size={17}/>{label.split(' على ')[1]}</a>)}</div>
      </div></div>
    </div>
    <div className="border-t border-white/10"><div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-brand-white-muted sm:flex-row lg:px-10">
      <span>© 2026 خروشة. جميع الحقوق محفوظة.</span>
      <div className="flex gap-4">{socialLinks.map(({ href, label, Icon }) => <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="transition-colors hover:text-gold-primary"><Icon size={18}/></a>)}</div>
    </div></div>
  </footer>
}
