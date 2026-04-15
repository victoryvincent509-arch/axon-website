import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useReducedMotion, useMobileIntensity } from '../hooks/useReducedMotion'

export default function PageTransition() {
  const location = useLocation()
  const reduced = useReducedMotion()
  const mobile = useMobileIntensity()

  const y = reduced ? 0 : mobile ? 6 : 12
  const dur = reduced ? 0.01 : mobile ? 0.28 : 0.42

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname + location.search}
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: reduced ? 0 : -6 }}
        transition={{ duration: dur, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}
