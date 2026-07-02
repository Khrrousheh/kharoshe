import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Button from './Button'

export default function Carousel({
  slides = [],
  autoPlay = true,
  interval = 6000,
  showIndicators = true,
  showArrows = true,
  className = '',
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStart = useRef(null)
  const isRTL = typeof document !== 'undefined' && document.documentElement.dir === 'rtl'
  const go = useCallback((step) => {
    if (!slides.length) return
    setIndex((current) => (current + step + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (!autoPlay || paused || slides.length < 2) return
    const timer = window.setInterval(() => go(1), interval)
    return () => window.clearInterval(timer)
  }, [autoPlay, paused, interval, slides.length, go])

  useEffect(() => {
    const handleKeys = (event) => {
      if (event.key === 'ArrowLeft') go(isRTL ? 1 : -1)
      if (event.key === 'ArrowRight') go(isRTL ? -1 : 1)
    }
    window.addEventListener('keydown', handleKeys)
    return () => window.removeEventListener('keydown', handleKeys)
  }, [go, isRTL])

  if (!slides.length) return null

  const finishSwipe = (endX) => {
    if (touchStart.current === null) return
    const delta = endX - touchStart.current
    if (Math.abs(delta) > 50) go((delta < 0 ? 1 : -1) * (isRTL ? -1 : 1))
    touchStart.current = null
  }

  return <div
    className={`relative h-full overflow-hidden ${className}`}
    role="region"
    aria-roledescription="carousel"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
    onFocusCapture={() => setPaused(true)}
    onBlurCapture={() => setPaused(false)}
    onTouchStart={(event) => { touchStart.current = event.touches[0].clientX }}
    onTouchEnd={(event) => finishSwipe(event.changedTouches[0].clientX)}
  >
    {slides.map((slide, slideIndex) => <div
      key={`${slide.image}-${slideIndex}`}
      aria-hidden={slideIndex !== index}
      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${slideIndex === index ? 'z-10 opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <img src={slide.image} alt={slide.alt ?? ''} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,.95)_0%,rgba(10,10,10,.5)_55%,rgba(10,10,10,.25)_100%)] md:bg-[linear-gradient(90deg,rgba(10,10,10,.9)_0%,rgba(10,10,10,.65)_45%,rgba(10,10,10,.15)_100%)]" />
      <div className="absolute inset-x-0 bottom-28 mx-auto max-w-[1440px] px-6 lg:bottom-32 lg:px-16">
        <div className={`max-w-2xl transition-all delay-200 duration-700 ${slideIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <span className="mb-5 block text-xs font-bold tracking-[.25em] text-gold-primary">للإستثمار العقاري والديكور</span>
          <h1 className="mb-5 text-4xl font-bold leading-[1.35] md:text-6xl lg:text-7xl">{slide.title}</h1>
          <p className="mb-8 max-w-xl text-base leading-8 text-brand-white-muted md:text-lg">{slide.subtitle}</p>
          {slide.ctaText && <Button href={slide.ctaLink} size="lg">{slide.ctaText}<ArrowLeft size={18} /></Button>}
        </div>
      </div>
    </div>)}

    {showArrows && slides.length > 1 && <>
      <button onClick={() => go(-1)} className="carousel-arrow right-5 z-20 md:right-auto md:left-10" aria-label="الشريحة السابقة"><ArrowRight /></button>
      <button onClick={() => go(1)} className="carousel-arrow left-5 z-20 md:left-auto md:right-10" aria-label="الشريحة التالية"><ArrowLeft /></button>
    </>}

    {showIndicators && <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3" role="tablist" aria-label="شرائح العرض">
      {slides.map((_, slideIndex) => <button
        key={slideIndex}
        onClick={() => setIndex(slideIndex)}
        role="tab"
        aria-selected={slideIndex === index}
        aria-label={`انتقل إلى الشريحة ${slideIndex + 1}`}
        className={`h-1 transition-all duration-300 ${slideIndex === index ? 'w-10 bg-gold-primary' : 'w-5 bg-white/35 hover:bg-white/60'}`}
      />)}
    </div>}

    {autoPlay && !paused && <div key={index} className="absolute bottom-0 right-0 z-20 h-[2px] animate-[progress_linear_forwards] bg-gold-primary" style={{ animationDuration: `${interval}ms` }} />}
  </div>
}
