import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../../data/company'

export default function CTA({
  eyebrow = 'Ready when you are',
  title = "Let's build something exceptional together.",
  description = 'From idea to production — websites, apps, hosting, domains, and professional email for ambitious African businesses.',
  primaryLabel = 'Request a Quote',
  secondaryLabel = 'View Our Work',
  primaryTo = '/contact',
  secondaryTo = '/portfolio',
}) {
  return (
    <section className="relative container-wide my-16 sm:my-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-primary-950 px-6 sm:px-10 lg:px-16 py-14 lg:py-20"
      >
        <div className="absolute inset-0 bg-mesh-blue opacity-30" />
        <div className="absolute -top-24 -right-16 w-80 h-80 bg-accent-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-16 w-80 h-80 bg-secondary-600/30 rounded-full blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-accent-300 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              {eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance">
              {title}
            </h2>
            <p className="mt-4 text-primary-200 text-base sm:text-lg max-w-xl">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <Link
              to={primaryTo}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-secondary-500 to-accent-500 text-white font-semibold shadow-glow hover:shadow-card-hover transition-all"
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={secondaryTo}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white font-semibold hover:bg-white/5 transition"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>

        <div className="relative mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-primary-300">
          <span>📍 {company.location}</span>
          <a href={`tel:${company.phones[0].replace(/\s/g, '')}`} className="hover:text-white">
            📞 {company.phones[0]}
          </a>
          <a href={`tel:${company.phones[1].replace(/\s/g, '')}`} className="hover:text-white">
            📞 {company.phones[1]}
          </a>
        </div>
      </motion.div>
    </section>
  )
}
