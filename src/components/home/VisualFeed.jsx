import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { homeFeed } from '../../data/media'
import { useReducedMotion, useMobileIntensity } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

function IgIcon() {
  return (
    <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5M12 7a5 5 0 100 10 5 5 0 000-10m0 2a3 3 0 110 6 3 3 0 010-6z" />
    </svg>
  )
}

export default function VisualFeed() {
  const rootRef = useRef(null)
  const reduced = useReducedMotion()
  const mobile = useMobileIntensity()

  useLayoutEffect(() => {
    if (reduced) return undefined
    const items = rootRef.current?.querySelectorAll('[data-feed-item]')
    if (!items?.length) return undefined
    const ctx = gsap.context(() => {
      gsap.from(items, {
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: mobile ? 24 : 48,
        duration: mobile ? 0.45 : 0.65,
        stagger: mobile ? 0.06 : 0.1,
        ease: 'power3.out',
      })
    }, rootRef)
    return () => ctx.revert()
  }, [reduced, mobile])

  return (
    <section className="bg-[var(--axon-bg)] px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="mb-16 font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,6rem)] tracking-[0.12em] text-[var(--axon-text)]">
          AXON WORLD
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {homeFeed.map((src) => (
            <div
              key={src}
              data-feed-item
              className="group relative aspect-square overflow-hidden rounded-[3px] border border-[var(--axon-card-border)]"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover brightness-[0.92] transition duration-700 group-hover:scale-[1.04] group-hover:brightness-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-400 group-hover:bg-black/35">
                <span className="scale-90 opacity-0 transition duration-400 group-hover:scale-100 group-hover:opacity-100">
                  <IgIcon />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
