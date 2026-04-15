import { useEffect, useLayoutEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { collectionsPage, collectionsHeroImg } from '../data/media'
import { useReducedMotion, useMobileIntensity } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const moodAccent = {
  dark: 'from-zinc-950/90 via-black/70',
  ice: 'from-slate-900/85 via-cyan-950/50',
  volt: 'from-indigo-950/80 via-blue-950/40',
  origin: 'from-stone-900/85 via-amber-950/35',
}

export default function Collections() {
  const location = useLocation()
  const rootRef = useRef(null)
  const reduced = useReducedMotion()
  const mobile = useMobileIntensity()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
  }, [location.hash])

  useLayoutEffect(() => {
    if (reduced) return undefined
    const blocks = rootRef.current?.querySelectorAll('[data-collection-block]')
    if (!blocks?.length) return undefined
    const ctx = gsap.context(() => {
      blocks.forEach((block) => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
          y: mobile ? 36 : 72,
          opacity: 0,
          duration: mobile ? 0.55 : 0.9,
          ease: 'power3.out',
        })
      })
    }, rootRef)
    return () => ctx.revert()
  }, [reduced, mobile])

  return (
    <>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden md:min-h-[62vh]">
        <img
          src={collectionsHeroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent" />
        <div className="relative z-10 w-full px-4 pb-16 pt-32 md:px-10 md:pb-20">
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,12vw,8rem)] tracking-[0.1em] text-white">
            COLLECTIONS
          </h1>
        </div>
      </section>

      <div ref={rootRef} className="bg-[var(--axon-bg)]">
        {collectionsPage.map((c, i) => {
          const isLeft = i % 2 === 0
          const id = `axon-${c.key}`
          return (
            <section
              key={c.key}
              id={id}
              data-collection-block
              className="border-b border-[var(--axon-card-border)] px-4 py-16 md:px-10 md:py-24"
            >
              <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-2 lg:items-center">
                <div
                  className={`relative min-h-[320px] overflow-hidden rounded-[3px] border border-[var(--axon-card-border)] lg:min-h-[480px] ${
                    isLeft ? '' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={c.img}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-[1.4s] ease-out hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${moodAccent[c.mood]} to-transparent`}
                  />
                </div>
                <div className={`space-y-6 ${isLeft ? '' : 'lg:order-1'}`}>
                  <p className="font-[family-name:var(--font-barlow)] text-xs uppercase tracking-[0.35em] text-[#3B82F6]">
                    {c.season}
                  </p>
                  <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.8rem,8vw,5rem)] tracking-[0.1em] text-[var(--axon-text)]">
                    {c.title}
                  </h2>
                  <p className="max-w-lg text-base font-light leading-relaxed text-[var(--axon-muted)]">
                    {c.desc}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex rounded-[2px] bg-[#3B82F6] px-8 py-3 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.2em] text-white transition hover:-translate-y-[3px] hover:shadow-[0_14px_40px_rgba(59,130,246,0.45)]"
                  >
                    Explore Collection
                  </Link>
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </>
  )
}
