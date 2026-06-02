import { Helmet } from 'react-helmet-async'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import PageHeader from '../components/layout/PageHeader'
import Section from '../components/ui/Section'
import CTA from '../components/ui/CTA'
import AnimatedIcon from '../components/ui/AnimatedIcon'
import { services } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const idx = services.findIndex((s) => s.slug === slug)
  const service = services[idx]

  if (!service) return <Navigate to="/services" replace />

  const next = services[(idx + 1) % services.length]

  return (
    <PageWrapper>
      <Helmet>
        <title>{service.title} — Code-Tech</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <PageHeader
        eyebrow={service.title}
        title={service.title}
        description={service.description}
        crumbs={[{ to: '/services', label: 'Services' }, { label: service.title }]}
      />

      <Section className="!pt-0">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-card border border-primary-100"
            >
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-primary-700 text-sm font-semibold">
                <AnimatedIcon name={service.icon} className="w-4 h-4 text-secondary-600" />
                {service.title}
              </div>
            </motion.div>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-extrabold text-primary-900">What's included</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <li key={f} className="card p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-primary-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              <div className="card p-6">
                <h3 className="font-display font-bold text-primary-900">Key benefits</h3>
                <ul className="mt-3 space-y-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-primary-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="font-display font-bold text-primary-900">Technologies</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary-50 text-secondary-700 border border-secondary-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-primary-600">
                  Plus industry-standard tools for testing, CI/CD, monitoring, and analytics.
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-28 space-y-4">
              <div className="card p-6 bg-gradient-to-br from-primary-950 to-primary-800 text-white border-0">
                <h3 className="font-display text-xl font-extrabold">{service.cta}</h3>
                <p className="mt-2 text-sm text-primary-200">
                  Tell us about your project. We'll respond with a clear next step and an honest estimate.
                </p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-primary-900 font-semibold text-sm hover:bg-primary-100 transition">
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <Link
                to="/services"
                className="card p-5 flex items-center justify-between hover:border-secondary-200 transition"
              >
                <span className="font-semibold text-primary-800 text-sm">All services</span>
                <ArrowRight className="w-4 h-4 text-primary-500" />
              </Link>

              <div className="card p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-500">Up next</p>
                  <p className="mt-1 font-display font-bold text-primary-900">{next.title}</p>
                </div>
                <Link
                  to={`/services/${next.slug}`}
                  className="w-10 h-10 rounded-full bg-primary-50 hover:bg-secondary-600 hover:text-white flex items-center justify-center text-primary-700 transition"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-800">
            <ArrowLeft className="w-4 h-4" /> Back to all services
          </Link>
        </div>
      </Section>

      <CTA />
    </PageWrapper>
  )
}
