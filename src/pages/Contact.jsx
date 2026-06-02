import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin, Github, CheckCircle2 } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import PageHeader from '../components/layout/PageHeader'
import Section from '../components/ui/Section'
import { company } from '../data/company'
import { services } from '../data/services'

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const update = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.email.trim()) e.email = 'Please enter your email'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Please enter a valid email'
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Tell us a bit more (10+ characters)'
    return e
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length) return
    setSubmitting(true)
    // Simulated submission. Replace with your API endpoint (e.g. fetch('/api/contact', ...)).
    setTimeout(() => {
      setSubmitting(false)
      setSent(true)
      setForm(initialState)
    }, 900)
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Contact Code-Tech — Get in touch in Zomba, Malawi</title>
        <meta
          name="description"
          content="Get in touch with Code-Tech in Zomba, Malawi. Call +265 995 818766 or +265 995 479580, send a project enquiry, or visit our office."
        />
      </Helmet>

      <PageHeader
        eyebrow="Contact us"
        title="Let's start a project together."
        description="Have a project in mind, or just want to chat through an idea? Send us a message — we usually reply within a few hours."
        crumbs={[{ label: 'Contact' }]}
      />

      <Section className="!pt-4">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="card p-6 sm:p-8">
              {sent ? (
                <div className="py-10 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-extrabold text-primary-900">Message sent!</h3>
                  <p className="mt-2 text-primary-600 max-w-md mx-auto">
                    Thanks for reaching out. A member of our team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 btn-secondary"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <h2 className="font-display text-2xl font-extrabold text-primary-900">Send a message</h2>
                  <p className="mt-1 text-sm text-primary-600">
                    Required fields are marked with an asterisk.
                  </p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <Field label="Full name *" error={errors.name}>
                      <input
                        name="name"
                        value={form.name}
                        onChange={update}
                        type="text"
                        placeholder="Your full name"
                        className="input-base"
                        autoComplete="name"
                      />
                    </Field>
                    <Field label="Email *" error={errors.email}>
                      <input
                        name="email"
                        value={form.email}
                        onChange={update}
                        type="email"
                        placeholder="you@company.com"
                        className="input-base"
                        autoComplete="email"
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={update}
                        type="tel"
                        placeholder="+265 ..."
                        className="input-base"
                        autoComplete="tel"
                      />
                    </Field>
                    <Field label="Company">
                      <input
                        name="company"
                        value={form.company}
                        onChange={update}
                        type="text"
                        placeholder="Company or organization"
                        className="input-base"
                        autoComplete="organization"
                      />
                    </Field>
                    <Field label="Service of interest">
                      <select
                        name="service"
                        value={form.service}
                        onChange={update}
                        className="input-base bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Budget range">
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={update}
                        className="input-base bg-white"
                      >
                        <option value="">Select a range</option>
                        <option>Under MWK 500,000</option>
                        <option>MWK 500,000 – 2,000,000</option>
                        <option>MWK 2,000,000 – 5,000,000</option>
                        <option>MWK 5,000,000+</option>
                        <option>Not sure yet</option>
                      </select>
                    </Field>
                  </div>

                  <div className="mt-4">
                    <Field label="Tell us about your project *" error={errors.message}>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={update}
                        rows={5}
                        placeholder="A few sentences about your goals, timeline, and any specific requirements."
                        className="input-base resize-y"
                      />
                    </Field>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-xs text-primary-500">
                      We respect your privacy. We'll only use your information to respond to your enquiry.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? 'Sending...' : 'Send message'}
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info */}
          <aside className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-6 sm:p-8"
            >
              <h3 className="font-display text-lg font-extrabold text-primary-900">Contact information</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-xl bg-secondary-50 text-secondary-700 inline-flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-primary-800">Call us</p>
                    <a href={`tel:${company.phones[0].replace(/\s/g, '')}`} className="block text-primary-600 hover:text-secondary-700">
                      {company.phones[0]}
                    </a>
                    <a href={`tel:${company.phones[1].replace(/\s/g, '')}`} className="block text-primary-600 hover:text-secondary-700">
                      {company.phones[1]}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-xl bg-accent-50 text-accent-700 inline-flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-primary-800">Email</p>
                    <a href={`mailto:${company.email}`} className="text-primary-600 hover:text-secondary-700">
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 inline-flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-primary-800">Office</p>
                    <p className="text-primary-600">{company.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 inline-flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-primary-800">Business hours</p>
                    <p className="text-primary-600">{company.hours.weekdays}</p>
                    <p className="text-primary-600">{company.hours.saturday}</p>
                    <p className="text-primary-600">{company.hours.sunday}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-primary-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-500">Follow us</p>
                <div className="mt-3 flex items-center gap-2">
                  {[
                    { Icon: Facebook, href: company.socials.facebook, label: 'Facebook' },
                    { Icon: Twitter, href: company.socials.twitter, label: 'Twitter' },
                    { Icon: Instagram, href: company.socials.instagram, label: 'Instagram' },
                    { Icon: Linkedin, href: company.socials.linkedin, label: 'LinkedIn' },
                    { Icon: Github, href: company.socials.github, label: 'GitHub' },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl bg-white border border-primary-200 text-primary-600 hover:bg-secondary-600 hover:text-white hover:border-secondary-600 inline-flex items-center justify-center transition"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-primary-100 shadow-card"
            >
              <iframe
                title="Code-Tech office location — Zomba, Malawi"
                src="https://www.openstreetmap.org/export/embed.html?bbox=35.30%2C-15.42%2C35.36%2C-15.36&amp;layer=mapnik&amp;marker=-15.3766%2C35.3356"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-primary-800 text-xs font-semibold shadow-soft">
                <MapPin className="w-3.5 h-3.5 text-secondary-600" />
                Zomba, Malawi
              </div>
            </motion.div>
          </aside>
        </div>
      </Section>
    </PageWrapper>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-primary-800 mb-1.5">{label}</span>
      {children}
      {error && <span className="block mt-1 text-xs text-red-600">{error}</span>}
    </label>
  )
}
