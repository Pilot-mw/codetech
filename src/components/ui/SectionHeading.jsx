import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase ${
            light
              ? 'bg-white/10 text-accent-300 border border-white/10'
              : 'bg-secondary-50 text-secondary-700 border border-secondary-100'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance ${
          light ? 'text-white' : 'text-primary-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-primary-200' : 'text-primary-600'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
