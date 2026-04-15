import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { productsCatalog, productsHeroImg } from '../data/media'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'clothes', label: 'Clothes' },
  { id: 'shoes', label: 'Shoes' },
  { id: 'bags', label: 'Bags' },
]

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const active = searchParams.get('cat') || 'all'

  const filtered = useMemo(() => {
    if (active === 'all') return productsCatalog
    return productsCatalog.filter((p) => p.category === active)
  }, [active])

  const setFilter = (id) => {
    if (id === 'all') setSearchParams({})
    else setSearchParams({ cat: id })
  }

  return (
    <>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden md:min-h-[62vh]">
        <img
          src={productsHeroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/15" />
        <div className="relative z-10 w-full px-4 pb-16 pt-32 md:px-10 md:pb-20">
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,12vw,8rem)] tracking-[0.1em] text-white">
            PRODUCTS
          </h1>
        </div>
      </section>

      <section className="border-b border-[var(--axon-card-border)] bg-[var(--axon-bg)] px-4 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1600px] flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-[2px] border px-6 py-2.5 font-[family-name:var(--font-barlow)] text-xs uppercase tracking-[0.22em] transition ${
                active === f.id
                  ? 'border-[#3B82F6] bg-[#3B82F6] text-white'
                  : 'border-[var(--axon-card-border)] text-[var(--axon-text)] hover:border-[#3B82F6] hover:text-[#3B82F6]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-[var(--axon-bg)] px-4 py-16 md:px-10 md:py-24">
        <motion.div layout className="mx-auto grid max-w-[1600px] gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[3px] border border-[var(--axon-card-border)] bg-[var(--axon-surface)] shadow-[0_16px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={p.img}
                    alt=""
                    className="h-full w-full object-cover transition duration-[1.15s] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-400 group-hover:opacity-100">
                    <span className="rounded-[2px] border border-white/90 bg-white/10 px-6 py-2.5 font-[family-name:var(--font-barlow)] text-xs uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      Quick View
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="mb-1 font-[family-name:var(--font-barlow)] text-xs uppercase tracking-[0.25em] text-[var(--axon-muted)]">
                    {p.category}
                  </p>
                  <div className="flex items-end justify-between gap-3">
                    <h2 className="font-[family-name:var(--font-barlow)] text-lg uppercase tracking-[0.1em] text-[var(--axon-text)]">
                      {p.name}
                    </h2>
                    <span className="font-[family-name:var(--font-barlow)] text-base text-[#3B82F6]">
                      {p.price}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mx-auto mt-16 flex max-w-[1600px] justify-center">
          <button
            type="button"
            className="rounded-[2px] border border-[#3B82F6] px-10 py-3 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.2em] text-[#3B82F6] transition hover:bg-[#3B82F6] hover:text-white"
          >
            Load More
          </button>
        </div>
      </section>
    </>
  )
}
