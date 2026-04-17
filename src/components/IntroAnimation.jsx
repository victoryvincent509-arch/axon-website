import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const SESSION_KEY = 'axon-intro-session'

export default function IntroAnimation() {
  const [run, setRun] = useState(() => sessionStorage.getItem(SESSION_KEY) !== '1')
  const rootRef = useRef(null)
  const aRef = useRef(null)
  const xRef = useRef(null)
  const oRef = useRef(null)
  const nRef = useRef(null)

  useLayoutEffect(() => {
    if (!run) return

    // FORCE SNAP TO TOP AND LOCK SCROLL
    window.scrollTo(0, 0)
    document.body.style.overflow = 'hidden'

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem(SESSION_KEY, '1')
          // RE-ENABLE SCROLLING WHEN DONE
          document.body.style.overflow = 'auto'
          setRun(false)
        },
      })

      gsap.set([xRef.current, oRef.current, nRef.current], { opacity: 0, y: 28 })
      gsap.set(aRef.current, { opacity: 0, y: 36, scale: 1.12 })

      tl.to(aRef.current, { opacity: 1, y: 0, scale: 1.18, duration: 0.45, ease: 'power3.out' })
      tl.to(xRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '+=0.2')
      tl.to(oRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '+=0.2')
      tl.to(nRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '+=0.2')
      tl.to({}, { duration: 0.6 })
      tl.to(rootRef.current, { opacity: 0, duration: 1.5, ease: 'power2.inOut' }, '>')
    }, rootRef)

    return () => {
      // CLEANUP: Ensure body isn't stuck locked if user leaves early
      document.body.style.overflow = 'auto'
      ctx.revert()
    }
  }, [run])

  if (!run) return null

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#080808]"
      aria-hidden="true"
    >
      <div className="flex items-end justify-center gap-[0.12em] px-6 font-[family-name:var(--font-bebas)] text-[min(18vw,8rem)] leading-none tracking-[0.2em]">
        <span ref={aRef} className="text-[#3B82F6]">A</span>
        <span ref={xRef} className="text-white">X</span>
        <span ref={oRef} className="text-white">O</span>
        <span ref={nRef} className="text-white">N</span>
      </div>
    </div>
  )
}