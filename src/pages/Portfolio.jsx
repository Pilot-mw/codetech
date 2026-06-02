import { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Sparkles } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import PageHeader from '../components/layout/PageHeader'
import Section from '../components/ui/Section'
import CTA from '../components/ui/CTA'
import { projects, portfolioCategories } from '../data/portfolio'

export default function Portfolio() {
  const [category, setCategory] = useState('All')

  const filtered = useMemo(
    () => (category === 'All' ? projects : projects.filter((p) => p.category === category)),
    [category],
  )

  return (
    <PageWrapper>
      <Helmet>
        <title>Portfolio — Code-Tech</title>
        <meta
          name="description"
          content="Selected projects by Code-Tech — websites, mobile apps, e-commerce stores, management systems, and POS platforms."
        />
      </Helmet>

      <PageHeader
        eyebrow="Selected work"
        title="A portfolio of websites, apps, and platforms."
        description="A look at recent projects across websites, e-commerce, mobile apps, management systems, and POS — with the results our clients achieved."
        crumbs={[{ label: 'Portfolio' }]}
      />

      <Section className="!pt-4">
        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 justify-center">
          {portfolioCategories.map((c) => {
            const active = c === category
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                  active
                    ? 'bg-gradient-to-r from-secondary-600 to-accent-500 text-white border-transparent shadow-glow'
                    : 'bg-white text-primary-700 border-primary-200 hover:border-secondary-300 hover:text-secondary-700'
                }`}
              >
                {c}
                <span
                  className={`ml-2 text-xs font-bold ${
                    active ? 'text-white/80' : 'text-primary-400'
                  }`}
                >
                  {c === 'All' ? projects.length : projects.filter((p) => p.category === c).length}
                </span>
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-primary-100 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="chip bg-white/90 text-primary-700 border-white/40 backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-primary-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition">
                    {p.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-white/90 text-primary-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-primary-900">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-primary-600 line-clamp-2">{p.description}</p>
                  <ul className="mt-3 space-y-1">
                    {p.results.slice(0, 2).map((r) => (
                      <li key={r} className="flex items-center gap-2 text-xs text-primary-600">
                        <Sparkles className="w-3 h-3 text-accent-500" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-xl font-bold text-primary-900">No projects in this category yet.</p>
            <p className="mt-2 text-primary-600">Check back soon — we're always shipping.</p>
          </div>
        )}
      </Section>

      <CTA title="Have a project in mind?" />
    </PageWrapper>
  )
}
