import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { megaMenuProducts } from '../data/media'

const collections = [
  { name: 'Axon Black', to: '/collections#axon-black' },
  { name: 'Axon Ice', to: '/collections#axon-ice' },
  { name: 'Axon Volt', to: '/collections#axon-volt' },
  { name: 'Axon Origin', to: '/collections#axon-origin' },
]

const storeCities = [
  'New York',
  'London',
  'Tokyo',
  'Paris',
  'Dubai',
  'Lagos',
  'Milan',
  'Los Angeles',
]

const navClass = ({ isActive }) =>
  `font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.2em] transition-colors ${
    isActive ? 'text-[#3B82F6]' : 'text-[var(--axon-text)] hover:text-[#3B82F6]'
  }`

function SunIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  )
}

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mega, setMega] = useState(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const openMega = (id) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMega(id)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMega(null), 140)
  }

  const barBg = scrolled
    ? 'bg-[var(--axon-surface)]/92 backdrop-blur-md border-b border-[var(--axon-card-border)] shadow-[0_8px_40px_rgba(0,0,0,0.25)]'
    : 'bg-transparent border-b border-transparent'

  const linkItems = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products', mega: 'products' },
    { to: '/collections', label: 'Collections', mega: 'collections' },
    { to: '/about', label: 'About' },
    { to: '/stores', label: 'Stores', mega: 'stores' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ${barBg}`}
      >
        <div className="relative mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 md:px-8">
          <Link to="/" className="group flex items-baseline gap-0 font-[family-name:var(--font-bebas)] text-3xl tracking-[0.28em] md:text-4xl">
            <span className="text-[#3B82F6]">A</span>
            <span className="text-[var(--axon-text)] transition-colors group-hover:text-[#3B82F6]/90">XON</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" onMouseLeave={scheduleClose}>
            {linkItems.map((item) =>
              item.mega ? (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => openMega(item.mega)}
                >
                  <NavLink to={item.to} className={navClass}>
                    {item.label}
                  </NavLink>
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} className={navClass}>
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-[var(--axon-card-border)] text-[var(--axon-text)] transition hover:border-[#3B82F6] hover:text-[#3B82F6]"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <Link
              to="/products"
              className="hidden rounded-[2px] bg-[#3B82F6] px-5 py-2.5 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.18em] text-white shadow-none transition hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(59,130,246,0.45)] sm:inline-flex"
            >
              Shop Now
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <span className="h-0.5 w-6 bg-[var(--axon-text)]" />
              <span className="h-0.5 w-6 bg-[var(--axon-text)]" />
              <span className="h-0.5 w-6 bg-[var(--axon-text)]" />
            </button>
          </div>

          <AnimatePresence>
            {mega === 'products' && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 right-0 top-full hidden border-b border-[var(--axon-card-border)] bg-[var(--axon-surface)]/97 px-8 py-8 backdrop-blur-lg lg:block"
                onMouseEnter={() => openMega('products')}
                onMouseLeave={scheduleClose}
              >
                <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6">
                  {megaMenuProducts.map((p) => (
                    <Link
                      key={p.label}
                      to={p.to}
                      className="group block overflow-hidden rounded-[3px] border border-[var(--axon-card-border)] bg-[var(--axon-bg)]"
                      onClick={() => setMega(null)}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={p.img}
                          alt=""
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <p className="px-3 py-3 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.2em] text-[var(--axon-text)]">
                        {p.label}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {mega === 'collections' && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 right-0 top-full hidden border-b border-[var(--axon-card-border)] bg-[var(--axon-surface)]/97 px-8 py-10 backdrop-blur-lg lg:block"
                onMouseEnter={() => openMega('collections')}
                onMouseLeave={scheduleClose}
              >
                <div className="mx-auto flex max-w-4xl flex-wrap gap-x-10 gap-y-4">
                  {collections.map((c) => (
                    <Link
                      key={c.name}
                      to={c.to}
                      className="font-[family-name:var(--font-bebas)] text-2xl tracking-[0.2em] text-[var(--axon-text)] transition hover:text-[#3B82F6]"
                      onClick={() => setMega(null)}
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {mega === 'stores' && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 right-0 top-full hidden border-b border-[var(--axon-card-border)] bg-[var(--axon-surface)]/97 px-8 py-10 backdrop-blur-lg lg:block"
                onMouseEnter={() => openMega('stores')}
                onMouseLeave={scheduleClose}
              >
                <div className="mx-auto grid max-w-5xl grid-cols-4 gap-4">
                  {storeCities.map((city) => (
                    <Link
                      key={city}
                      to="/stores"
                      className="font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.18em] text-[var(--axon-muted)] transition hover:text-[#3B82F6]"
                      onClick={() => setMega(null)}
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[150] bg-[#080808] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.2em] text-white/80"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              Close
            </button>
            <nav className="flex h-full flex-col justify-center gap-6 px-10">
              {linkItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={item.to}
                    className="block font-[family-name:var(--font-bebas)] text-4xl tracking-[0.22em] text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
              >
                <Link
                  to="/products"
                  className="mt-4 inline-block rounded-[2px] bg-[#3B82F6] px-6 py-3 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.2em] text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Shop Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
