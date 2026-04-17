import { useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
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
    if (!active || active === 'all') return productsCatalog
    return productsCatalog.filter((p) => p.category.toLowerCase() === active.toLowerCase())
  }, [active])

  const setFilter = (id) => {
    if (id === 'all') setSearchParams({})
    else setSearchParams({ cat: id })
  }

  return (
    <>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden md:min-h-[62vh]">
        <img src={productsHeroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full px-4 pb-16 pt-32 md:px-10 md:pb-20">
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,12vw,8rem)] text-white">PRODUCTS</h1>
        </div>
      </section>

      <section className="bg-[var(--axon-bg)] px-4 py-8 md:px-10 border-b border-[var(--axon-card-border)]">
        <div className="mx-auto flex max-w-[1600px] gap-3 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-2.5 text-xs uppercase tracking-widest transition border ${active === f.id ? 'bg-[#3B82F6] border-[#3B82F6] text-white' : 'border-[var(--axon-card-border)] text-white'
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-[var(--axon-bg)] px-4 py-16 md:px-10">
        <div className="mx-auto grid max-w-[1600px] gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                className="group relative overflow-hidden rounded-[4px] border border-[var(--axon-card-border)] bg-[var(--axon-surface)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={p.img}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* THE DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/50" />

                  {/* THE BUTTON: Using 'z-50' to force it to the very front */}
                  <Link
                    to="/contact"
                    className="absolute left-1/2 top-1/2 z-[60] -translate-x-1/2 translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-[-50%] group-hover:opacity-100"
                  >
                    <span className="block bg-white text-black px-8 py-3 text-[10px] uppercase tracking-[0.3em] font-bold shadow-[0_10px_30px_rgba(0,0,0,0.5)] whitespace-nowrap">
                      Buy Now
                    </span>
                  </Link>
                </div>

                <div className="p-6">
                  <p className="text-[#3B82F6] text-[10px] uppercase tracking-[0.3em] mb-2">{p.category}</p>
                  <div className="flex justify-between items-center">
                    <h2 className="text-white uppercase text-lg tracking-wider">{p.name}</h2>
                    <span className="text-white/60 font-medium">{p.price}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}