import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Code2, Heart, Sparkles } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import PageHeader from '../components/layout/PageHeader'
import Section from '../components/ui/Section'
import CTA from '../components/ui/CTA'
import { team, values } from '../data/team'

const milestones = [
  { year: '2018', title: 'Founded in Zomba', text: 'Code-Tech is founded with a mission to deliver world-class digital products from Malawi.' },
  { year: '2019', title: 'First 25 launches', text: 'Websites, e-commerce stores, and business systems for SMEs across the country.' },
  { year: '2021', title: 'Cloud & mobile', text: 'Expanded into mobile apps, cloud deployments, and managed hosting.' },
  { year: '2023', title: 'Regional growth', text: 'Trusted by clients across Southern and Eastern Africa for mission-critical systems.' },
  { year: '2026', title: '100+ projects', text: 'A senior team of engineers, designers, and cloud specialists shipping every week.' },
]

export default function About() {
  return (
    <PageWrapper>
      <Helmet>
        <title>About Code-Tech — Software Company in Zomba, Malawi</title>
        <meta
          name="description"
          content="Learn about Code-Tech — our story, mission, vision, values, and the team building world-class software from Zomba, Malawi."
        />
      </Helmet>

      <PageHeader
        eyebrow="About Code-Tech"
        title="We build software that helps African businesses grow."
        description="Code-Tech is a premium software and web development company based in Zomba, Malawi. We partner with ambitious founders, SMEs, and enterprises to design, build, and run digital products — from websites and mobile apps to hosting, domains, and business email."
        crumbs={[{ label: 'About' }]}
      />

      {/* Story */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-200/60 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary-200/60 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-card h-72 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=900&q=80"
                alt="Modern office workspace"
                className="rounded-2xl shadow-card h-72 w-full object-cover mt-10"
              />
              <img
                src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=900&q=80"
                alt="Working on a laptop"
                className="rounded-2xl shadow-card h-72 w-full object-cover -mt-4"
              />
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
                alt="Coding environment"
                className="rounded-2xl shadow-card h-72 w-full object-cover mt-6"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="chip">Our story</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-primary-900">
              From a small studio in Zomba to a trusted technology partner.
            </h2>
            <p className="mt-5 text-primary-600 leading-relaxed">
              We started Code-Tech with a simple belief: African businesses deserve the same quality of
              software as the rest of the world. From our base in Zomba, we've grown into a senior team
              of engineers, designers, and cloud specialists delivering work we are proud of.
            </p>
            <p className="mt-4 text-primary-600 leading-relaxed">
              Today, we ship websites, mobile apps, e-commerce platforms, and business systems for
              clients across the region. We are deeply hands-on, transparent in pricing, and obsessed
              with the details that make great products.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="card p-5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary-50 text-secondary-700">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="mt-3 font-display font-bold text-primary-900">Our mission</h3>
                <p className="mt-1.5 text-sm text-primary-600">
                  To help African businesses compete globally through reliable, beautifully crafted
                  digital products.
                </p>
              </div>
              <div className="card p-5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent-50 text-accent-700">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="mt-3 font-display font-bold text-primary-900">Our vision</h3>
                <p className="mt-1.5 text-sm text-primary-600">
                  A future where every ambitious African company has access to world-class engineering.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-primary-50/50">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">Our values</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-primary-900">
            What guides our work, every day.
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card p-6"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-secondary-600 to-accent-500 text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-primary-900">{v.title}</h3>
              <p className="mt-2 text-sm text-primary-600 leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <div className="max-w-2xl">
          <span className="chip">Our journey</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-primary-900">
            Milestones from the road so far.
          </h2>
        </div>
        <div className="mt-12 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-primary-200" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative grid sm:grid-cols-2 gap-4 sm:gap-8 ${
                  i % 2 === 0 ? '' : 'sm:[&>:first-child]:order-2'
                }`}
              >
                <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:pl-8'}`}>
                  <p className="font-display font-extrabold text-secondary-700 text-lg">{m.year}</p>
                  <h3 className="mt-1 font-display font-bold text-primary-900 text-lg">{m.title}</h3>
                  <p className="mt-1.5 text-sm text-primary-600 leading-relaxed">{m.text}</p>
                </div>
                <div className="hidden sm:block" />
                <span className="absolute left-2.5 sm:left-1/2 sm:-translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-secondary-500 to-accent-500 ring-4 ring-white" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-primary-50/50">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">Our team</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-primary-900">
            Senior people, building with you.
          </h2>
          <p className="mt-4 text-primary-600">
            A multidisciplinary team of engineers, designers, and project managers based in Zomba and across the region.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card overflow-hidden group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                  {m.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-white/90 text-primary-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-primary-900">{m.name}</h3>
                <p className="text-sm font-semibold text-secondary-700">{m.role}</p>
                <p className="mt-2 text-sm text-primary-600 leading-relaxed">{m.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Quick stats band */}
      <Section className="!py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { Icon: Award, label: 'Years building', value: '7+' },
            { Icon: Users, label: 'Team members', value: '20+' },
            { Icon: Code2, label: 'Projects shipped', value: '100+' },
            { Icon: Heart, label: 'Client satisfaction', value: '98%' },
          ].map(({ Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card p-5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-600 to-accent-500 text-white flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl text-primary-900">{value}</p>
                <p className="text-sm text-primary-500">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTA />
    </PageWrapper>
  )
}
