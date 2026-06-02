import { Link } from 'react-router-dom'
import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { company } from '../../data/company'
import { services } from '../../data/services'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative bg-primary-950 text-primary-200 mt-20 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-24 w-96 h-96 bg-secondary-600/30 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 w-[28rem] h-[28rem] bg-accent-500/20 rounded-full blur-3xl" />

      <div className="relative container-wide py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-secondary-500 to-accent-500">
                <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-display font-extrabold text-xl text-white">
                Code<span className="text-accent-400">-</span>Tech
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-300">
              {company.shortDescription}
            </p>
            <div className="mt-5 flex items-center gap-2">
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
                  className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-secondary-600 hover:border-secondary-600 text-white/80 hover:text-white transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-primary-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-400 group-hover:bg-accent-300" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'All Services' },
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-primary-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-400 group-hover:bg-accent-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
                <span className="text-primary-300">{company.location}</span>
              </li>
              <li>
                <a
                  href={`tel:${company.phones[0].replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-primary-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent-400" />
                  {company.phones[0]}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phones[1].replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-primary-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent-400" />
                  {company.phones[1]}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-primary-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent-400" />
                  {company.email}
                </a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 hover:text-accent-200"
            >
              Start a project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-primary-400">
          <p>© {year} Code-Tech. All rights reserved.</p>
          <p className="font-semibold tracking-wide">
            Code-Tech — <span className="gradient-text-dark">From Development to Production</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
