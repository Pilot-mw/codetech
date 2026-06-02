import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

const faqs = [
  {
    q: 'Where is Code-Tech based, and do you work with clients outside Malawi?',
    a: 'We are based in Zomba, Malawi and work with clients across the region and globally. Most of our work is delivered remotely with regular video calls and updates.',
  },
  {
    q: 'How long does a typical project take from start to launch?',
    a: 'Marketing websites usually launch in 3–6 weeks. Web applications and mobile apps typically take 8–16 weeks. We always share a clear timeline before we start.',
  },
  {
    q: 'Do you provide ongoing support and maintenance?',
    a: 'Yes. We offer monthly maintenance plans covering updates, security patches, backups, performance tuning, and priority technical support.',
  },
  {
    q: 'Can you help with hosting, domains, and business email setup?',
    a: 'Absolutely. We manage the full stack — domain registration, DNS, secure hosting, business email (Google Workspace or Microsoft 365), and SSL.',
  },
  {
    q: 'How do you handle pricing?',
    a: 'Fixed-price quotes for clearly scoped projects, and monthly retainers for ongoing work. We share a transparent proposal with no hidden costs.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'React, Next.js, Node.js, Laravel, Flutter, React Native, PostgreSQL, MySQL, AWS, GCP, and other modern, production-grade tools.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="faq" className="bg-primary-50/50">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions, answered."
            description="If you don't see your question here, send us a message — we usually reply within a few hours."
          />
          <a href="/contact" className="mt-6 inline-flex btn-secondary">
            Contact our team
          </a>
        </div>
        <div className="lg:col-span-7 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className={`card overflow-hidden transition-colors ${
                  isOpen ? 'border-secondary-200 shadow-card-hover' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-primary-900 text-base sm:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                      isOpen
                        ? 'bg-secondary-600 text-white'
                        : 'bg-primary-50 text-primary-700'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-primary-600 leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
