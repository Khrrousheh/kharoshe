import { useEffect, useRef } from 'react'
export function useScrollAnimation() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && el.classList.add('is-visible'), { threshold: .12 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}
