import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import PageHeader from '../components/layout/PageHeader'
import Section from '../components/ui/Section'
import CTA from '../components/ui/CTA'
import AnimatedIcon from '../components/ui/AnimatedIcon'
import { services } from '../data/services'

export default function Services() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Services — Code-Tech</title>
        <meta
          name="description"
          content="Web development, mobile apps, e-commerce, hosting, domains, business email, cloud deployment, design, SEO, and API integrations from Code-Tech."
        />
      </Helmet>

      <PageHeader
        eyebrow="Our services"
        title="Everything you need to launch, run, and grow online."
        description="From the first design to production deployment and ongoing support — pick the services you need and we'll handle the rest."
        crumbs={[{ label: 'Services' }]}
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group card card-hover p-6 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-50 to-accent-50 border border-secondary-100 text-secondary-700 group-hover:from-secondary-600 group-hover:to-accent-500 group-hover:text-white group-hover:border-transparent transition-all">
                  <AnimatedIcon name={s.icon} className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-primary-400">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-primary-900">{s.title}</h3>
              <p className="mt-2 text-sm text-primary-600 leading-relaxed flex-1">{s.short}</p>
              <ul className="mt-4 space-y-1.5">
                {s.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-primary-600">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-secondary-600 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/services/${s.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary-700 group-hover:text-secondary-800"
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Hosting/Domain/Email band */}
      <Section className="bg-primary-50/50">
        <div className="grid lg:grid-cols-3 gap-5">
          {[
            {
              title: 'Hosting, domains, and email — under one roof',
              body:
                'Register your domain, set up professional email, and host with us for a single, accountable partner.',
              cta: 'See hosting plans',
              to: '/services/website-hosting',
            },
            {
              title: 'Not sure what you need?',
              body:
                "Tell us about your business and we'll recommend the right stack and timeline — free of charge.",
              cta: 'Request a Quote',
              to: '/contact',
            },
            {
              title: 'Already have a project?',
              body:
                'We can take over hosting, fix issues, or extend your existing product. Smooth handovers, no drama.',
              cta: 'Talk to an engineer',
              to: '/contact',
            },
          ].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card p-6"
            >
              <h3 className="font-display font-bold text-lg text-primary-900">{b.title}</h3>
              <p className="mt-2 text-sm text-primary-600 leading-relaxed">{b.body}</p>
              <Link to={b.to} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary-700">
                {b.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTA
        title="Tell us about your project."
        description="We respond to every enquiry with a clear next step — usually within a few hours."
      />
    </PageWrapper>
  )
}
