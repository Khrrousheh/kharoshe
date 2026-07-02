const faqs = [
  {
    question: 'ما الخدمات التي تقدمها خروشة؟',
    answer: 'نقدم خدمات التطوير العقاري، والتصميم الداخلي، والاستشارات العقارية، وإدارة المشاريع من الفكرة حتى التسليم.',
  },
  {
    question: 'أين تقع شركة خروشة؟',
    answer: 'نقع في رام الله، فلسطين، ونخدم عملاء المشاريع السكنية والاستثمارية.',
  },
  {
    question: 'كيف يمكن التواصل مع خروشة؟',
    answer: (
      <>
        اتصل بنا على{' '}
        <a href="tel:+970598914449" className="text-left text-gold-primary transition-colors hover:text-gold-primary/80">
          +970 598 914 449
        </a>{' '}
        أو راسلنا عبر البريد الإلكتروني{' '}
        <a href="mailto:kharroushehco@gmail.com" className="text-left text-gold-primary transition-colors hover:text-gold-primary/80">
          kharroushehco@gmail.com
        </a>
        .
      </>
    ),
  },
]

export default function AboutFaq() {
  return <section id="about" className="section-padding bg-brand-black-light" aria-labelledby="about-title">
    <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
      <div>
        <span className="text-xs tracking-[.25em] text-gold-primary">عن خروشة</span>
        <h2 id="about-title" className="mt-4 text-3xl leading-snug sm:text-4xl">تطوير عقاري وتصميم داخلي في فلسطين</h2>
        <p className="mt-5 max-w-xl leading-8 text-brand-white-muted">خروشة شركة مقرها رام الله، تجمع التطوير العقاري والتصميم الداخلي وإدارة المشاريع ضمن تجربة متكاملة تركز على جودة التنفيذ والقيمة طويلة الأمد.</p>
      </div>
      <div aria-label="الأسئلة الشائعة" className="divide-y divide-white/10 border-y border-white/10">
        {faqs.map(({ question, answer }) => <details key={question} className="group py-5">
          <summary className="cursor-pointer list-none text-lg text-brand-white transition-colors marker:hidden group-open:text-gold-primary">{question}</summary>
          <div className="mt-3 max-w-2xl leading-7 text-brand-white-muted">{answer}</div>
        </details>)}
      </div>
    </div>
  </section>
}
