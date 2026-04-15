import { useState } from 'react'
import { Link } from 'react-router-dom'

function SocialIcon({ children, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-[2px] border border-[var(--axon-card-border)] text-[var(--axon-text)] transition hover:border-[#3B82F6] hover:text-[#3B82F6]"
    >
      {children}
    </a>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="border-t border-[var(--axon-card-border)] bg-[var(--axon-footer)] text-[var(--axon-text)]">
      <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-8">
        <div className="mb-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-4 font-[family-name:var(--font-bebas)] text-4xl tracking-[0.28em]">
              <span className="text-[#3B82F6]">A</span>
              <span>XON</span>
            </p>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-[var(--axon-muted)]">
              Premium global lifestyle — engineered garments, footwear, and carry for cities in motion.
            </p>
            <div className="flex flex-wrap gap-2">
              <SocialIcon href="https://instagram.com" label="Instagram">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5M12 7a5 5 0 100 10 5 5 0 000-10m0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://twitter.com" label="X">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://tiktok.com" label="TikTok">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-2.88-2.9c.1 0 .2.01.29.02V9.4a6.33 6.33 0 00-1-.09A6.34 6.34 0 004 15.66a6.34 6.34 0 1012.68-.37V9.01a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.12z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://pinterest.com" label="Pinterest">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.2em] text-[var(--axon-text)]">
              Navigate
            </h3>
            <ul className="space-y-2 text-sm text-[var(--axon-muted)]">
              {[
                ['Home', '/'],
                ['Products', '/products'],
                ['Collections', '/collections'],
                ['About', '/about'],
                ['Stores', '/stores'],
                ['Contact', '/contact'],
              ].map(([l, p]) => (
                <li key={p}>
                  <Link to={p} className="transition hover:text-[#3B82F6]">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.2em] text-[var(--axon-text)]">
              Categories
            </h3>
            <ul className="space-y-2 text-sm text-[var(--axon-muted)]">
              <li>
                <Link to="/products?cat=clothes" className="transition hover:text-[#3B82F6]">
                  Clothes
                </Link>
              </li>
              <li>
                <Link to="/products?cat=shoes" className="transition hover:text-[#3B82F6]">
                  Shoes
                </Link>
              </li>
              <li>
                <Link to="/products?cat=bags" className="transition hover:text-[#3B82F6]">
                  Bags
                </Link>
              </li>
              <li>
                <Link to="/collections" className="transition hover:text-[#3B82F6]">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.2em] text-[var(--axon-text)]">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-[var(--axon-muted)]">
              <li>
                <a href="mailto:victoryvincent509@gmail.com" className="transition hover:text-[#3B82F6]">
                  victoryvincent509@gmail.com
                </a>
              </li>
              <li>+1 (212) 555-0148</li>
              <li>428 Mercer St, New York, NY</li>
            </ul>
            <form
              className="mt-6 flex flex-col gap-2 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault()
                setEmail('')
              }}
            >
              <label htmlFor="footer-newsletter" className="sr-only">
                Email
              </label>
              <input
                id="footer-newsletter"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Newsletter email"
                className="min-h-[44px] flex-1 rounded-[2px] border border-[var(--axon-card-border)] bg-[var(--axon-bg)] px-3 py-2 text-sm text-[var(--axon-text)] placeholder:text-[var(--axon-muted)] focus:border-[#3B82F6] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-[2px] bg-[#3B82F6] px-5 py-2 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.15em] text-white transition hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[var(--axon-card-border)] pt-8 text-xs text-[var(--axon-muted)] md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} AXON. All rights reserved.</span>
          <span>Designed &amp; Built by Victory Vincent</span>
        </div>
      </div>
    </footer>
  )
}
