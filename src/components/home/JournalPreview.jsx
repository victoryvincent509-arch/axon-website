import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { homeJournal } from '../../data/media'

export default function JournalPreview() {
  return (
    <section className="bg-[var(--axon-bg)] px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="mb-16 font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,6rem)] tracking-[0.12em] text-[var(--axon-text)]">
          JOURNAL
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {homeJournal.map((j) => (
            <motion.article
              key={j.title}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.35 }}
              className="group flex flex-col overflow-hidden rounded-[3px] border border-[var(--axon-card-border)] bg-[var(--axon-surface)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={j.img}
                  alt=""
                  className="h-full w-full object-cover transition duration-[1.1s] group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-2 font-[family-name:var(--font-barlow)] text-xs uppercase tracking-[0.28em] text-[#3B82F6]">
                  {j.tag}
                </span>
                <h3 className="mb-3 font-[family-name:var(--font-barlow)] text-xl uppercase leading-snug tracking-[0.08em] text-[var(--axon-text)]">
                  {j.title}
                </h3>
                <p className="mb-4 flex-1 text-sm font-light leading-relaxed text-[var(--axon-muted)]">
                  {j.excerpt}
                </p>
                <div className="flex items-center justify-between gap-4 border-t border-[var(--axon-card-border)] pt-4">
                  <span className="text-xs text-[var(--axon-muted)]">{j.date}</span>
                  <Link
                    to="/about"
                    className="font-[family-name:var(--font-barlow)] text-xs uppercase tracking-[0.2em] text-[#3B82F6] transition hover:text-[var(--axon-text)]"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
