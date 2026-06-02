import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { process } from '../../data/company'

export default function Process() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="Our process"
        title="A clear path from idea to launch."
        description="A predictable, transparent workflow that keeps you in the loop and your project on schedule."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-7 gap-3 sm:gap-4">
        {process.map((p, i) => (
          <motion.div
            key={p.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative card p-5 sm:p-6 group hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl sm:text-3xl font-extrabold gradient-text">
                {p.step}
              </span>
              <span className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-400 group-hover:bg-secondary-50 group-hover:text-secondary-600 transition">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <h3 className="mt-4 font-display text-base font-bold text-primary-900">
              {p.title}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-primary-600 leading-relaxed">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
