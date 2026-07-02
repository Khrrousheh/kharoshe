import { ArrowLeft } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import Button from './ui/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
const image = (name) => `${import.meta.env.BASE_URL}images/${name}`
const gallery=[
 {src:image('hero-interior.png'),title:'صالة النخبة',cat:'تصميم معاصر',cls:'md:row-span-2'},
 {src:image('hero-penthouse.png'),title:'تراس سكاي',cat:'تصميم خارجي',cls:''},
 {src:image('hero-villa.png'),title:'فيلا السرو',cat:'عمارة داخلية',cls:''},
 {src:image('hero-interior.png'),title:'جناح الظلال',cat:'تصميم فاخر',cls:''},
 {src:image('hero-villa.png'),title:'مجلس الحجر',cat:'كلاسيكي حديث',cls:'md:row-span-2'},
 {src:image('hero-penthouse.png'),title:'روف المدينة',cat:'ضيافة',cls:''},
]
const steps=['استشارة','تصميم','تنفيذ','تسليم']
export default function SectionInteriorDesign(){const ref=useScrollAnimation();return <section id="interior-design" className="section-padding overflow-hidden bg-brand-black">
 <div className="mx-auto max-w-[1320px]"><SectionTitle eyebrow="نصنع تفاصيلك" title="التصميم الداخلي" subtitle="نتعامل مع كل مساحة كقصة متكاملة؛ من الفكرة الأولى وحتى آخر قطعة في المشهد."/>
 <div ref={ref} className="reveal grid auto-rows-[230px] gap-4 md:grid-cols-3">{gallery.map((g,i)=><div key={i} className={`group relative cursor-pointer overflow-hidden border border-transparent ${g.cls}`}>
  <img src={g.src} alt={g.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" style={{objectPosition:i%2?'center':'55% center'}}/><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-70 transition-opacity group-hover:opacity-100"/><div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"><span className="text-xs text-gold-primary">{g.cat}</span><h3 className="mt-1 text-xl">{g.title}</h3></div><span className="absolute inset-3 border border-gold-primary/0 transition-all group-hover:border-gold-primary/40"/>
 </div>)}</div>
 <div className="mt-20 grid items-center gap-12 border-y border-white/10 py-14 lg:grid-cols-[1fr_1.2fr]"><div><span className="text-xs tracking-[.25em] text-gold-primary">منهجية مدروسة</span><h3 className="mt-4 text-3xl leading-snug">من رؤيتك إلى مساحة<br/>تحكي قصتك</h3><p className="mt-5 max-w-md leading-8 text-brand-white-muted">فريق متخصص، مواد عالية الجودة، وإدارة دقيقة تضمن إنجاز كل مشروع في الوقت المحدد.</p><Button href="#contact" className="mt-7">ابدأ مشروعك <ArrowLeft size={17}/></Button></div>
 <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">{steps.map((s,i)=><div key={s} className="bg-brand-black p-6"><span className="text-3xl font-light text-gold-primary/40">0{i+1}</span><p className="mt-8 text-sm">{s}</p></div>)}</div></div>
 </div></section>}
