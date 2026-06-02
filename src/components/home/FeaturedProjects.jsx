import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { projects } from '../../data/portfolio'

export default function FeaturedProjects() {
  const featured = projects.slice(0, 6)

  return (
    <Section id="portfolio" className="bg-primary-50/50">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <SectionHeading
          align="left"
          eyebrow="Selected work"
          title="Projects we are proud of."
          description="A glimpse at recent websites, apps, and systems delivered for our clients across Africa."
        />
        <Link
          to="/portfolio"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-secondary-700 hover:text-secondary-800"
        >
          See all projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl bg-white border border-primary-100 shadow-card hover:shadow-card-hover transition-all"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/0 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="chip bg-white/90 text-primary-700 border-white/40 backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-primary-700 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-lg text-primary-900">{p.title}</h3>
              <p className="mt-1.5 text-sm text-primary-600 line-clamp-2">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.technologies.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-primary-50 text-primary-700 border border-primary-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="sm:hidden mt-8 text-center">
        <Link to="/portfolio" className="btn-secondary">
          See all projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  )
}
