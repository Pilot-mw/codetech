import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'

export default function AnimatedIcon({ name, className = 'w-6 h-6' }) {
  const Icon = LucideIcons[name] || LucideIcons.Sparkles
  return (
    <motion.span
      initial={{ scale: 0.9, rotate: -6 }}
      whileInView={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.08, rotate: 4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className="inline-flex items-center justify-center"
    >
      <Icon className={className} strokeWidth={2.2} />
    </motion.span>
  )
}
