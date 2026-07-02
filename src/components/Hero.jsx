import Carousel from './ui/Carousel'
const image = (name) => `${import.meta.env.BASE_URL}images/${name}`
const slides=[
  {image:image('hero-villa.png'),title:'فلل فاخرة بتصاميم عصرية',subtitle:'استثمار يجمع بين الرقي والقيمة المستدامة، لنصنع لك عنواناً يليق بطموحك.',ctaText:'اكتشف مشاريعنا',ctaLink:'#real-estate'},
  {image:image('hero-interior.png'),title:'تصميم داخلي يلهم الحياة',subtitle:'حيث تلتقي الفخامة بالوظيفة في كل تفصيل، ونحوّل المساحات إلى تجارب استثنائية.',ctaText:'شاهد أعمالنا',ctaLink:'#interior-design'},
  {image:image('hero-penthouse.png'),title:'عناوين استثنائية للحياة',subtitle:'مواقع مختارة بعناية، هندسة متقنة، وتجربة سكنية تتجاوز التوقعات.',ctaText:'تصفح المشاريع',ctaLink:'#real-estate'}]
export default function Hero(){return <section id="home" className="relative h-screen min-h-[680px] overflow-hidden"><Carousel slides={slides}/><span className="absolute bottom-7 right-6 z-20 hidden origin-right rotate-90 text-[10px] tracking-[.3em] text-brand-white-muted xl:block">SCROLL TO EXPLORE</span></section>}
