import { lazy, Suspense, useState } from 'react'
import { contactHeroImg } from '../data/media'

const ContactMap = lazy(() => import('../components/ContactMap'))

function SocialLinks({ className = '' }) {
  const links = [
    { href: 'https://instagram.com', label: 'Instagram' },
    { href: 'https://twitter.com', label: 'X' },
    { href: 'https://tiktok.com', label: 'TikTok' },
    { href: 'https://pinterest.com', label: 'Pinterest' },
  ]
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-[2px] border border-[var(--axon-card-border)] px-4 py-2 font-[family-name:var(--font-barlow)] text-xs uppercase tracking-[0.2em] text-[var(--axon-text)] transition hover:border-[#3B82F6] hover:text-[#3B82F6]"
        >
          {l.label}
        </a>
      ))}
    </div>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [newsEmail, setNewsEmail] = useState('')

  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden md:min-h-[58vh]">
        <img
          src={contactHeroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10" />
        <div className="relative z-10 w-full px-4 pb-14 pt-28 md:px-10 md:pb-16">
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,11vw,7rem)] tracking-[0.12em] text-white">
            GET IN TOUCH
          </h1>
        </div>
      </section>

      <section className="bg-[var(--axon-bg)] px-4 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,3.2rem)] tracking-[0.1em] text-[var(--axon-text)]">
              WE&apos;D LOVE TO HEAR FROM YOU
            </h2>
            <p className="mb-8 max-w-md text-sm font-light leading-relaxed text-[var(--axon-muted)] md:text-base">
              Press, partnerships, retail, and product questions — send a signal. Our team routes requests within one
              business day.
            </p>
            <p className="mb-2 text-xs uppercase tracking-wider text-[var(--axon-muted)]">Email</p>
            <a
              href="mailto:victoryvincent509@gmail.com"
              className="mb-8 inline-block font-[family-name:var(--font-barlow)] text-lg text-[#3B82F6] transition hover:text-[var(--axon-text)]"
            >
              victoryvincent509@gmail.com
            </a>
            <div className="mb-10">
              <a
                href="https://wa.me/2349016137903?text=Hi%20I'm%20interested%20in%20Axon"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[2px] bg-[#25D366] px-6 py-3 font-[family-name:var(--font-barlow)] text-sm font-medium uppercase tracking-[0.18em] text-[#042c16] shadow-sm transition hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(37,211,102,0.45)]"
              >
                WhatsApp
              </a>
            </div>
            <p className="mb-3 text-xs uppercase tracking-wider text-[var(--axon-muted)]">Social</p>
            <SocialLinks />
          </div>

          <div>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs uppercase tracking-wider text-[var(--axon-muted)]">
                  First name
                  <input
                    required
                    className="mt-1 w-full rounded-[2px] border border-[var(--axon-card-border)] bg-[var(--axon-surface)] px-3 py-2.5 text-[var(--axon-text)] focus:border-[#3B82F6] focus:outline-none"
                  />
                </label>
                <label className="block text-xs uppercase tracking-wider text-[var(--axon-muted)]">
                  Last name
                  <input
                    required
                    className="mt-1 w-full rounded-[2px] border border-[var(--axon-card-border)] bg-[var(--axon-surface)] px-3 py-2.5 text-[var(--axon-text)] focus:border-[#3B82F6] focus:outline-none"
                  />
                </label>
              </div>
              <label className="block text-xs uppercase tracking-wider text-[var(--axon-muted)]">
                Email
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-[2px] border border-[var(--axon-card-border)] bg-[var(--axon-surface)] px-3 py-2.5 text-[var(--axon-text)] focus:border-[#3B82F6] focus:outline-none"
                />
              </label>
              <label className="block text-xs uppercase tracking-wider text-[var(--axon-muted)]">
                Subject
                <select className="mt-1 w-full rounded-[2px] border border-[var(--axon-card-border)] bg-[var(--axon-surface)] px-3 py-2.5 text-[var(--axon-text)] focus:border-[#3B82F6] focus:outline-none">
                  <option>General Enquiry</option>
                  <option>Order Support</option>
                  <option>Press</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block text-xs uppercase tracking-wider text-[var(--axon-muted)]">
                Message
                <textarea
                  required
                  rows={5}
                  className="mt-1 w-full rounded-[2px] border border-[var(--axon-card-border)] bg-[var(--axon-surface)] px-3 py-2.5 text-[var(--axon-text)] focus:border-[#3B82F6] focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-[2px] bg-[#3B82F6] py-3 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.2em] text-white transition hover:-translate-y-[2px] hover:shadow-[0_12px_36px_rgba(59,130,246,0.45)] sm:w-auto sm:px-12"
              >
                Submit
              </button>
              {sent && (
                <p className="text-sm font-light text-[#3B82F6]" role="status">
                  Message received — we&apos;ll be in touch soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="flex min-h-[320px] items-center justify-center border-t border-[var(--axon-card-border)] bg-[var(--axon-bg)] text-sm text-[var(--axon-muted)]">
            Loading map…
          </div>
        }
      >
        <ContactMap />
      </Suspense>

      <section className="border-t border-[var(--axon-card-border)] bg-[var(--axon-surface)] px-4 py-16 md:px-10">
        <div className="mx-auto flex max-w-[900px] flex-col gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,5vw,3.5rem)] tracking-[0.12em] text-[var(--axon-text)]">
            JOIN THE AXON WORLD
          </h2>
          <form
            className="flex w-full flex-col gap-3 md:max-w-md md:flex-row"
            onSubmit={(e) => {
              e.preventDefault()
              setNewsEmail('')
            }}
          >
            <label htmlFor="contact-newsletter" className="sr-only">
              Email
            </label>
            <input
              id="contact-newsletter"
              type="email"
              value={newsEmail}
              onChange={(e) => setNewsEmail(e.target.value)}
              placeholder="Email address"
              className="min-h-[44px] flex-1 rounded-[2px] border border-[var(--axon-card-border)] bg-[var(--axon-bg)] px-3 py-2 text-[var(--axon-text)] placeholder:text-[var(--axon-muted)] focus:border-[#3B82F6] focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-[2px] bg-[#3B82F6] px-8 py-2.5 font-[family-name:var(--font-barlow)] text-sm uppercase tracking-[0.15em] text-white transition hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(59,130,246,0.4)]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
