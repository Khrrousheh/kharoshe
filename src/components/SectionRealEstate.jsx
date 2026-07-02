import { ArrowLeft, Building2, MapPin, ShieldCheck, Sparkles } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import Button from './ui/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
const image = (name) => `${import.meta.env.BASE_URL}images/${name}`
const properties=[
 {img:image('hero-villa.png'),type:'فيلا سكنية',title:'فيلا السرو الخاصة',loc:'رام الله · حي الريحان',price:'السعر عند الطلب',pos:'center'},
 {img:image('hero-penthouse.png'),type:'بنتهاوس',title:'بنتهاوس سكاي لاين',loc:'عمّان · عبدون',price:'ابتداءً من 890,000 $',pos:'center'},
 {img:image('hero-interior.png'),type:'شقة فاخرة',title:'ريزيدنس 27',loc:'القدس · بيت حنينا',price:'ابتداءً من 420,000 $',pos:'center'},
]
const perks=[[Sparkles,'عقارات فاخرة'],[MapPin,'مواقع استراتيجية'],[ShieldCheck,'استثمار آمن'],[Building2,'ضمانات قانونية']]
export default function SectionRealEstate(){const ref=useScrollAnimation();return <section id="real-estate" className="section-padding bg-brand-black-light">
 <div className="mx-auto max-w-[1320px]"><SectionTitle eyebrow="مختارات خروشة" title="التطوير العقاري" subtitle="مشاريع نوعية صُممت لتجمع بين جودة الحياة، القيمة الاستثمارية، والهوية المعمارية الخالدة."/>
 <div ref={ref} className="reveal grid gap-5 md:grid-cols-2 lg:grid-cols-3">{properties.map((p,i)=><article key={p.title} className="group overflow-hidden border border-white/10 bg-brand-black transition-all duration-500 hover:-translate-y-1 hover:border-gold-primary/50 hover:shadow-[0_20px_50px_rgba(0,0,0,.4)]">
  <div className="relative h-72 overflow-hidden"><img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{objectPosition:p.pos}}/><div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"/><span className="absolute right-5 top-5 border border-gold-primary/50 bg-black/70 px-3 py-1 text-xs text-gold-light backdrop-blur">{p.type}</span></div>
  <div className="p-6"><div className="mb-4 flex items-start justify-between gap-4"><h3 className="text-xl">{p.title}</h3><span className="text-left text-sm font-bold leading-6 text-gold-primary">{p.price}</span></div><p className="mb-6 flex items-center gap-2 text-sm text-brand-white-muted"><MapPin size={15}/>{p.loc}</p><a href="#contact" className="flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-brand-white transition-colors hover:text-gold-primary">عرض التفاصيل <ArrowLeft size={16}/></a></div>
 </article>)}</div>
 <div className="mt-12 grid grid-cols-2 border border-white/10 md:grid-cols-4">{perks.map(([Icon,t])=><div key={t} className="flex flex-col items-center gap-3 border-white/10 p-6 text-center even:border-r md:border-r"><Icon className="text-gold-primary"/><span className="text-sm">{t}</span></div>)}</div>
 <div className="mt-10 text-center"><Button href="#contact" variant="outline">اطلب استشارة عقارية <ArrowLeft size={17}/></Button></div>
 </div></section>}
