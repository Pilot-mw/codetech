import { motion } from 'framer-motion'
import Section from '../ui/Section'
import StatCounter from '../ui/StatCounter'
import { stats } from '../../data/company'
import { Award, Smile, Headphones, Activity } from 'lucide-react'

const iconMap = {
  'Projects Delivered': Award,
  'Happy Clients': Smile,
  'Support Available': Headphones,
  'Uptime Guarantee': Activity,
}

export default function Stats() {
  return (
    <Section className="!py-12 lg:!py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl bg-white border border-primary-100 shadow-card p-6 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div className="pointer-events-none absolute -top-12 -left-12 w-48 h-48 bg-secondary-200/40 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -right-12 w-56 h-56 bg-accent-200/40 rounded-full blur-3xl" />
        {stats.map((s, i) => {
          const Icon = iconMap[s.label] || Award
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-secondary-50 to-accent-50 border border-secondary-100 text-secondary-600">
                <Icon className="w-5 h-5" />
              </div>
              <p className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-primary-900">
                <StatCounter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              </p>
              <p className="text-sm text-primary-500 mt-1">{s.label}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
