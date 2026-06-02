import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function StatCounter({ value, suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const startTime = performance.now()
    let raf
    const step = (t) => {
      const p = Math.min(1, (t - startTime) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(value * eased)
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <motion.span ref={ref} className="tabular-nums">
      {decimals > 0 ? n.toFixed(decimals) : Math.floor(n).toLocaleString()}
      <span>{suffix}</span>
    </motion.span>
  )
}
