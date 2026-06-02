import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import AnimatedIcon from '../ui/AnimatedIcon'
import { services } from '../../data/services'

export default function Services() {
  const featured = services.slice(0, 9)

  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What we do"
        title="Complete digital services, end to end."
        description="From the first sketch to production deployment and ongoing support — we own the full lifecycle so you can focus on your business."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Link
              to={`/services/${s.slug}`}
              className="group block h-full card card-hover p-6 relative overflow-hidden"
            >
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-secondary-100 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-50 to-accent-50 border border-secondary-100 text-secondary-700 group-hover:from-secondary-600 group-hover:to-accent-500 group-hover:text-white group-hover:border-transparent transition-all">
                  <AnimatedIcon name={s.icon} className="w-6 h-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-primary-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-primary-600 leading-relaxed">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary-700 group-hover:text-secondary-800">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/services" className="btn-secondary">
          View all services
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  )
}
