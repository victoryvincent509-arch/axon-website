import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { heroSlides } from '../../data/media'
import { useReducedMotion, useMobileIntensity } from '../../hooks/useReducedMotion'

export default function HeroHome() {
  const [index, setIndex] = useState(0)
  const reduced = useReducedMotion()
  const mobile = useMobileIntensity()

  const next = useCallback(() => setIndex((i) => (i + 1) % heroSlides.length), [])
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length),
    [],
  )

  useEffect(() => {
    if (reduced) return undefined
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next, reduced])

  const slide = heroSlides[index]
  const textDur = mobile ? 0.35 : 0.55

  return (
    <section className="relative h-[100svh] min-h-[520px] w-full overflow-hidden bg-black">
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.title + index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.01 : 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {slide.type === 'video' ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={slide.src}
              poster={slide.poster}
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={slide.src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-24 pt-32 md:px-12 md:pb-28 lg:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: mobile ? 16 : 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: mobile ? -8 : -16 }}
            transition={{ duration: textDur, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="mb-4 inline-block font-[family-name:var(--font-barlow)] text-xs uppercase tracking-[0.35em] text-[#3B82F6]">
              {slide.badge}
            </span>
            <h1 className="mb-5 font-[family-name:var(--font-bebas)] text-[clamp(2.8rem,10vw,6.5rem)] leading-[0.95] tracking-[0.08em] text-white">
              {slide.title}
            </h1>
            <p className="mb-8 max-w-md text-base font-light leading-relaxed text-white/75 md:text-lg">
              {slide.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex rounded-[2px] bg-[#3B82F6] px-8 py-3 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.2em] text-white transition hover:-translate-y-[3px] hover:shadow-[0_14px_44px_rgba(59,130,246,0.45)]"
              >
                Shop Collection
              </Link>
              <Link
                to="/collections"
                className="inline-flex rounded-[2px] border border-[#3B82F6] px-8 py-3 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.2em] text-[#3B82F6] transition hover:bg-[#3B82F6]/10 hover:text-white"
              >
                View Lookbook
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-[2px] border border-white/20 bg-black/30 p-3 text-white backdrop-blur-sm transition hover:border-[#3B82F6] hover:text-[#3B82F6] md:block md:left-6"
        aria-label="Previous slide"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-[2px] border border-white/20 bg-black/30 p-3 text-white backdrop-blur-sm transition hover:border-[#3B82F6] hover:text-[#3B82F6] md:block md:right-6"
        aria-label="Next slide"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3 md:hidden">
        <button
          type="button"
          onClick={prev}
          className="rounded-[2px] border border-white/25 px-4 py-2 font-[family-name:var(--font-barlow)] text-xs uppercase tracking-[0.2em] text-white"
          aria-label="Previous"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={next}
          className="rounded-[2px] border border-white/25 px-4 py-2 font-[family-name:var(--font-barlow)] text-xs uppercase tracking-[0.2em] text-white"
          aria-label="Next"
        >
          Next
        </button>
      </div>
    </section>
  )
}
