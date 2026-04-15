import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const cardVariants = {
  rest: {},
  hover: {},
}

const btnVariants = {
  rest: { opacity: 0, y: 18 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
}
import { homeCollections } from '../../data/media'
import { useReducedMotion, useMobileIntensity } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export default function CollectionsPreview() {
  const rootRef = useRef(null)
  const reduced = useReducedMotion()
  const mobile = useMobileIntensity()

  useLayoutEffect(() => {
    if (reduced) return undefined
    const cards = rootRef.current?.querySelectorAll('[data-collection-card]')
    if (!cards?.length) return undefined
    const y = mobile ? 40 : 80
    const ctx = gsap.context(() => {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
        y,
        opacity: 0,
        duration: mobile ? 0.55 : 0.85,
        stagger: mobile ? 0.08 : 0.12,
        ease: 'power3.out',
      })
    }, rootRef)
    return () => ctx.revert()
  }, [reduced, mobile])

  return (
    <section ref={rootRef} className="bg-[var(--axon-bg)] px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="mb-16 font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,6rem)] tracking-[0.12em] text-[var(--axon-text)]">
          COLLECTIONS
        </h2>
        <div className="flex flex-col gap-6 lg:gap-8">
          {homeCollections.map((c) => (
            <motion.div
              key={c.slug}
              data-collection-card
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardVariants}
              className="group relative min-h-[320px] overflow-hidden rounded-[3px] border border-[var(--axon-card-border)] md:min-h-[420px]"
            >
              <img
                src={c.img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-[1.4s] ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${c.accent} to-transparent opacity-90 transition duration-500 group-hover:opacity-95`}
              />
              <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-end p-8 md:min-h-[420px] md:p-12">
                <h3 className="mb-3 font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,6vw,5rem)] tracking-[0.1em] text-white">
                  {c.title}
                </h3>
                <p className="mb-6 max-w-md text-sm font-light text-white/80 md:text-base">{c.desc}</p>
                <motion.div variants={btnVariants} className="overflow-hidden">
                  <Link
                    to="/collections"
                    className="inline-flex rounded-[2px] bg-[#3B82F6] px-8 py-3 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.2em] text-white shadow-[0_0_40px_rgba(59,130,246,0.35)] transition hover:-translate-y-[3px]"
                  >
                    Explore
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
