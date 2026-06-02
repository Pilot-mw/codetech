import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Preloader() {
  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary-950 text-white"
    >
      <div className="absolute inset-0 bg-mesh-blue opacity-30" />
      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary-500 to-accent-500 shadow-glow flex items-center justify-center"
        >
          <Sparkles className="w-9 h-9 text-white" strokeWidth={2.5} />
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-white/30"
            animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className="font-display text-2xl font-extrabold">
            Code<span className="text-accent-400">-</span>Tech
          </p>
          <p className="text-sm text-primary-300 mt-1 tracking-widest uppercase">
            From Development to Production
          </p>
        </motion.div>
        <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-secondary-500 to-accent-400 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}
