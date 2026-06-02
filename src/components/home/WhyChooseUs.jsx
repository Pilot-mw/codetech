import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import AnimatedIcon from '../ui/AnimatedIcon'
import { whyChooseUs } from '../../data/company'

export default function WhyChooseUs() {
  return (
    <Section className="bg-primary-50/50" id="why-us">
      <SectionHeading
        eyebrow="Why Code-Tech"
        title="A partner you can build with."
        description="Six reasons ambitious teams across Africa choose us for their most important digital work."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {whyChooseUs.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="card card-hover p-6"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-600 to-accent-500 text-white shadow-glow">
              <AnimatedIcon name={item.icon} className="w-6 h-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-primary-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-primary-600 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
