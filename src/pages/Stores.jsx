import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { storesHeroImg, storesList } from '../data/media'
import { useReducedMotion, useMobileIntensity } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export default function Stores() {
  const gridRef = useRef(null)
  const reduced = useReducedMotion()
  const mobile = useMobileIntensity()
  const [submitted, setSubmitted] = useState(false)

  useLayoutEffect(() => {
    if (reduced) return undefined
    const cards = gridRef.current?.querySelectorAll('[data-store-card]')
    if (!cards?.length) return undefined

    const ctx = gsap.context(() => {
      // We loop through each card so they animate individually as they enter the screen
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%', // Triggers as soon as the card is near the bottom of the screen
            toggleActions: 'play none none reverse',
          },
          y: mobile ? 20 : 40,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
        })
      })
    }, gridRef)

    return () => ctx.revert()
  }, [reduced, mobile])
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden md:min-h-[58vh]">
        <img
          src={storesHeroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10" />
        <div className="relative z-10 w-full px-4 pb-14 pt-28 md:px-10 md:pb-16">
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,11vw,7rem)] tracking-[0.12em] text-white">
            OUR STORES
          </h1>
        </div>
      </section>

      <section ref={gridRef} className="bg-[var(--axon-bg)] px-4 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-2">
          {storesList.map((s) => (
            <article
              key={s.city}
              data-store-card
              className="group overflow-hidden rounded-[3px] border border-[var(--axon-card-border)] bg-[var(--axon-surface)] transition duration-300 hover:border-[#3B82F6] hover:shadow-[0_0_32px_rgba(59,130,246,0.25)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt=""
                  className="h-full w-full object-cover transition duration-[1.2s] group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3 p-6">
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-[0.15em] text-[var(--axon-text)]">
                  {s.city}
                </h2>
                <p className="text-sm font-light text-[var(--axon-muted)]">{s.address}</p>
                <p className="text-sm font-light text-[var(--axon-muted)]">{s.hours}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-[2px] border border-[#3B82F6] px-5 py-2 font-[family-name:var(--font-barlow)] text-xs uppercase tracking-[0.2em] text-[#3B82F6] transition hover:bg-[#3B82F6] hover:text-white"
                >
                  Get Directions
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--axon-card-border)] bg-[var(--axon-surface)] px-4 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,5vw,3.5rem)] tracking-[0.12em] text-[var(--axon-text)]">
            BOOK AN APPOINTMENT
          </h2>
          <p className="mb-8 text-sm font-light text-[var(--axon-muted)]">
            Private fittings, personal shopping, and product walkthroughs by request.
          </p>
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs uppercase tracking-wider text-[var(--axon-muted)]">
                Name
                <input
                  required
                  className="mt-1 w-full rounded-[2px] border border-[var(--axon-card-border)] bg-[var(--axon-bg)] px-3 py-2.5 text-[var(--axon-text)] focus:border-[#3B82F6] focus:outline-none"
                />
              </label>
              <label className="block text-xs uppercase tracking-wider text-[var(--axon-muted)]">
                Email
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-[2px] border border-[var(--axon-card-border)] bg-[var(--axon-bg)] px-3 py-2.5 text-[var(--axon-text)] focus:border-[#3B82F6] focus:outline-none"
                />
              </label>
            </div>
            <label className="block text-xs uppercase tracking-wider text-[var(--axon-muted)]">
              Preferred city
              <select className="mt-1 w-full rounded-[2px] border border-[var(--axon-card-border)] bg-[var(--axon-bg)] px-3 py-2.5 text-[var(--axon-text)] focus:border-[#3B82F6] focus:outline-none">
                {storesList.map((s) => (
                  <option key={s.city} value={s.city}>
                    {s.city}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-xs uppercase tracking-wider text-[var(--axon-muted)]">
              Preferred date
              <input
                type="date"
                className="mt-1 w-full rounded-[2px] border border-[var(--axon-card-border)] bg-[var(--axon-bg)] px-3 py-2.5 text-[var(--axon-text)] focus:border-[#3B82F6] focus:outline-none"
              />
            </label>
            <label className="block text-xs uppercase tracking-wider text-[var(--axon-muted)]">
              Message
              <textarea
                rows={4}
                className="mt-1 w-full rounded-[2px] border border-[var(--axon-card-border)] bg-[var(--axon-bg)] px-3 py-2.5 text-[var(--axon-text)] focus:border-[#3B82F6] focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-[2px] bg-[#3B82F6] py-3 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.2em] text-white transition hover:-translate-y-[2px] hover:shadow-[0_12px_36px_rgba(59,130,246,0.45)] sm:w-auto sm:px-10"
            >
              Submit
            </button>
            {submitted && (
              <p className="text-sm font-light text-[#3B82F6]" role="status">
                Thank you — our concierge will confirm shortly.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
