import { motion } from 'framer-motion'
import BackToTop from './BackToTop.jsx'

const variants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3, ease: [0.7, 0, 0.84, 0] },
  },
}

export default function PageTransition({ children, noPad = false }) {
  return (
    <>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={
          noPad
            ? 'min-h-screen'
            : 'min-h-screen pt-28 pb-20 px-6 md:px-10 max-w-5xl mx-auto'
        }
      >
        {children}
      </motion.div>
      {!noPad && <BackToTop />}
    </>
  )
}
