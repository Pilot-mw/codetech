import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Client love"
        title="What our clients say."
        description="Real feedback from founders, operators, and directors we've worked with."
      />

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.slice(0, 6).map((t, i) => (
          <motion.figure
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="card p-6 relative"
          >
            <Quote className="absolute top-5 right-5 w-7 h-7 text-secondary-200" />
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm sm:text-base text-primary-700 leading-relaxed">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                loading="lazy"
                className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-soft"
              />
              <div>
                <p className="font-semibold text-sm text-primary-900">{t.name}</p>
                <p className="text-xs text-primary-500">{t.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  )
}
