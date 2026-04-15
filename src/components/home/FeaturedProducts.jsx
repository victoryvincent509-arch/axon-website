import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { homeFeatured } from '../../data/media'

export default function FeaturedProducts() {
  return (
    <section className="bg-[var(--axon-bg)] px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="mb-16 font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,6rem)] tracking-[0.12em] text-[var(--axon-text)]">
          FEATURED
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {homeFeatured.map((p) => (
            <motion.article
              key={p.name}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[3px] border border-[var(--axon-card-border)] bg-[var(--axon-surface)] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt=""
                  className="h-full w-full object-cover transition duration-[1.2s] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/45" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-400 group-hover:opacity-100">
                  <Link
                    to="/products"
                    className="rounded-[2px] border border-[#3B82F6] bg-[#3B82F6] px-6 py-2.5 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.18em] text-white transition hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)]"
                  >
                    View Product
                  </Link>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-1 font-[family-name:var(--font-barlow)] text-xs uppercase tracking-[0.25em] text-[var(--axon-muted)]">
                  {p.category}
                </p>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-[family-name:var(--font-barlow)] text-xl uppercase tracking-[0.12em] text-[var(--axon-text)]">
                    {p.name}
                  </h3>
                  <span className="shrink-0 font-[family-name:var(--font-barlow)] text-lg text-[#3B82F6]">
                    {p.price}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
