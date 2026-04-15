import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export const BRAND_LINE = "WE DON'T FOLLOW TRENDS. WE SET THEM."

export default function BrandStatement({ className = '', fullScreen = false }) {
  const wrapRef = useRef(null)
  const reduced = useReducedMotion()
  const words = BRAND_LINE.split(' ')

  useLayoutEffect(() => {
    if (reduced) return undefined
    const spans = wrapRef.current?.querySelectorAll('[data-word]')
    if (!spans?.length) return undefined
    gsap.set(spans, { opacity: 0.15, y: 14 })

    const ctx = gsap.context(() => {
      gsap.to(spans, {
        scrollTrigger: {
          trigger: wrapRef.current,
          start: fullScreen ? 'top 75%' : 'top 72%',
          end: fullScreen ? 'bottom 55%' : 'bottom 42%',
          scrub: 1.1,
        },
        opacity: 1,
        y: 0,
        stagger: 0.07,
        ease: 'none',
      })
    }, wrapRef)

    return () => ctx.revert()
  }, [reduced, fullScreen])

  return (
    <section
      className={`relative overflow-hidden bg-[var(--axon-surface)] px-4 py-28 md:px-8 md:py-40 ${
        fullScreen ? 'flex min-h-[100svh] items-center py-0' : ''
      } ${className}`}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(80vw,520px)] w-[min(80vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/15 blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl text-center">
        <p
          ref={wrapRef}
          className={`font-[family-name:var(--font-bebas)] leading-[1.08] tracking-[0.08em] text-[var(--axon-text)] ${
            fullScreen ? 'text-[clamp(2.2rem,7.5vw,5.5rem)]' : 'text-[clamp(2rem,6.5vw,4.5rem)]'
          }`}
        >
          {words.map((w) => (
            <span key={w} data-word className="mr-[0.22em] inline-block last:mr-0">
              {w}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
