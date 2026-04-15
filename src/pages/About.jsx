import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BrandStatement, { BRAND_LINE } from '../components/home/BrandStatement'
import { aboutStoryImg, aboutTeam, aboutTimelineBg, aboutClosingImg } from '../data/media'
import { useReducedMotion, useMobileIntensity } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const values = [
  {
    title: 'Innovation',
    desc: 'Materials, patterning, and digital craft — iterated until invisible.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Quality',
    desc: 'Construction you can feel — hardware, seams, and finish without compromise.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Boldness',
    desc: 'Silhouettes and stories that refuse to whisper.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 3v4M3 5h4M6 15v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Sustainability',
    desc: 'Responsible sourcing, longer lifecycles, and transparent partners.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

const milestones = [
  { year: '2015', text: 'Founded in New York with a studio-first approach to global lifestyle.' },
  { year: '2017', text: 'First flagship store opens — a blueprint for future AXON spaces.' },
  { year: '2019', text: 'Global expansion across key style capitals and digital flagship.' },
  { year: '2021', text: 'Axon Ice collection launch — crystalline palettes go worldwide.' },
  { year: '2023', text: '100,000 customers milestone across DTC and retail partners.' },
  { year: '2025', text: 'Axon Volt collection — electric contrast for night economies.' },
]

export default function About() {
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const timelineRef = useRef(null)
  const reduced = useReducedMotion()
  const mobile = useMobileIntensity()

  useLayoutEffect(() => {
    if (reduced) return undefined
    const img = storyRef.current?.querySelector('[data-story-img]')
    const copy = storyRef.current?.querySelector('[data-story-copy]')
    if (!img || !copy) return undefined
    const ctx = gsap.context(() => {
      gsap.from(img, {
        scrollTrigger: { trigger: storyRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        x: mobile ? -24 : -56,
        opacity: 0,
        duration: mobile ? 0.6 : 0.95,
        ease: 'power3.out',
      })
      gsap.from(copy, {
        scrollTrigger: { trigger: storyRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        x: mobile ? 24 : 56,
        opacity: 0,
        duration: mobile ? 0.6 : 0.95,
        ease: 'power3.out',
      })
    }, storyRef)
    return () => ctx.revert()
  }, [reduced, mobile])

  useLayoutEffect(() => {
    if (reduced) return undefined
    const cards = valuesRef.current?.querySelectorAll('[data-value-card]')
    if (!cards?.length) return undefined

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 92%',
            toggleActions: 'play none none reverse',
          },
          y: mobile ? 20 : 40,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
        })
      })
    }, valuesRef)

    return () => ctx.revert()
  }, [reduced, mobile])

  useLayoutEffect(() => {
    if (reduced) return undefined
    const items = timelineRef.current?.querySelectorAll('[data-milestone]')
    const line = timelineRef.current?.querySelector('[data-timeline-line]')
    if (!items?.length) return undefined
    const ctx = gsap.context(() => {
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              end: 'bottom 40%',
              scrub: 1,
            },
            transformOrigin: 'top center',
          },
        )
      }
      gsap.from(items, {
        scrollTrigger: { trigger: timelineRef.current, start: 'top 78%', toggleActions: 'play none none reverse' },
        x: mobile ? 0 : -20,
        opacity: 0,
        duration: mobile ? 0.45 : 0.6,
        stagger: mobile ? 0.1 : 0.14,
        ease: 'power2.out',
      })
    }, timelineRef)
    return () => ctx.revert()
  }, [reduced, mobile])

  return (
    <>
      <BrandStatement fullScreen />

      <section
        ref={storyRef}
        className="grid gap-12 border-t border-[var(--axon-card-border)] bg-[var(--axon-bg)] px-4 py-20 md:grid-cols-2 md:items-center md:px-10 md:py-28"
      >
        <div
          data-story-img
          className="relative min-h-[320px] overflow-hidden rounded-[3px] border border-[var(--axon-card-border)]"
        >
          <img src={aboutStoryImg} alt="" className="h-full min-h-[320px] w-full object-cover" loading="lazy" />
        </div>
        <div data-story-copy className="space-y-6">
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,6vw,4.5rem)] tracking-[0.1em] text-[var(--axon-text)]">
            THE AXON STORY
          </h2>
          <p className="text-base font-light leading-relaxed text-[var(--axon-muted)] md:text-lg">
            Founded in New York, AXON was built to redefine premium lifestyle fashion on a global stage — merging
            technical tailoring, footwear engineering, and carry systems for people who move between worlds. Our
            studios prototype in three time zones, but the signal is singular: precision, power, and poise.
          </p>
        </div>
      </section>

      <section ref={valuesRef} className="bg-[var(--axon-surface)] px-4 py-20 md:px-10 md:py-28">
        <h2 className="mb-14 text-center font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,6vw,4rem)] tracking-[0.12em] text-[var(--axon-text)]">
          MISSION &amp; VALUES
        </h2>
        <div className="mx-auto grid max-w-[1400px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <article
              key={v.title}
              data-value-card
              className="group rounded-[3px] border border-[var(--axon-card-border)] bg-[var(--axon-bg)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#3B82F6] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            >
              <div className="mb-4 text-[#3B82F6] transition group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]">
                {v.icon}
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-barlow)] text-lg uppercase tracking-[0.15em] text-[var(--axon-text)]">
                {v.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-[var(--axon-muted)]">{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--axon-bg)] px-4 py-20 md:px-10 md:py-28">
        <h2 className="mb-14 text-center font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,6vw,4rem)] tracking-[0.12em] text-[var(--axon-text)]">
          THE TEAM
        </h2>
        <div className="mx-auto grid max-w-[1400px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {aboutTeam.map((m) => (
            <article
              key={m.name}
              className="group overflow-hidden rounded-[3px] border border-[var(--axon-card-border)] bg-[var(--axon-surface)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={m.img}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="p-4 transition duration-300 group-hover:-translate-y-1">
                <h3 className="font-[family-name:var(--font-barlow)] text-lg uppercase tracking-[0.1em] text-[var(--axon-text)]">
                  {m.name}
                </h3>
                <p className="text-sm font-light text-[var(--axon-muted)]">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        ref={timelineRef}
        className="relative overflow-hidden border-t border-[var(--axon-card-border)] bg-[var(--axon-surface)] px-4 py-20 md:px-10 md:py-28"
      >
        <img
          src={aboutTimelineBg}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
          loading="lazy"
        />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="mb-16 text-center font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,6vw,4rem)] tracking-[0.12em] text-[var(--axon-text)]">
            TIMELINE
          </h2>
          <div className="relative pl-8 md:pl-12">
            <div
              data-timeline-line
              className="absolute left-[7px] top-0 w-[2px] origin-top bg-[#3B82F6]/50 md:left-[11px]"
              style={{ height: 'calc(100% - 8px)' }}
            />
            <ul className="space-y-12">
              {milestones.map((m) => (
                <li key={m.year} data-milestone className="relative">
                  <span className="absolute -left-[5px] top-1.5 h-3 w-3 rounded-[2px] bg-[#3B82F6] md:-left-[3px]" />
                  <p className="font-[family-name:var(--font-bebas)] text-3xl tracking-[0.15em] text-[#3B82F6]">
                    {m.year}
                  </p>
                  <p className="mt-2 text-sm font-light leading-relaxed text-[var(--axon-muted)] md:text-base">
                    {m.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[var(--axon-bg)] px-4 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: '50+', l: 'Countries' },
            { n: '8', l: 'Flagship Stores' },
            { n: '200+', l: 'Products' },
            { n: '10', l: 'Years' },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,5rem)] tracking-[0.08em] text-[var(--axon-text)]">
                {s.n}
              </p>
              <p className="font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.25em] text-[var(--axon-muted)]">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual reinforcement — same brand line with imagery cue */}
      <section className="relative min-h-[40vh] overflow-hidden">
        <img
          src={aboutClosingImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[var(--axon-bg)]/80" />
        <div className="relative flex min-h-[40vh] items-center justify-center px-6 py-16 text-center">
          <p className="max-w-4xl font-[family-name:var(--font-bebas)] text-[clamp(1.8rem,5vw,3.2rem)] leading-tight tracking-[0.1em] text-[var(--axon-text)]">
            {BRAND_LINE}
          </p>
        </div>
      </section>
    </>
  )
}
