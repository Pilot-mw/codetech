import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, Phone } from 'lucide-react'
import { company } from '../../data/company'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-primary-100 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-secondary-600 to-accent-500 shadow-glow">
            <span className="absolute inset-0 rounded-xl animated-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <Sparkles className="w-5 h-5 text-white relative" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-lg text-primary-900">
              Code<span className="text-secondary-600">-</span>Tech
            </span>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-primary-500 mt-0.5">
              {company.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-secondary-700'
                    : 'text-primary-700 hover:text-secondary-700'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-secondary-50 border border-secondary-100 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${company.phones[0].replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-secondary-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {company.phones[0]}
          </a>
          <Link to="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-primary-200 bg-white/80 backdrop-blur text-primary-800"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-primary-100 bg-white"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-semibold ${
                      isActive
                        ? 'bg-secondary-50 text-secondary-700'
                        : 'text-primary-800 hover:bg-primary-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="flex flex-col gap-2 pt-3">
                <a
                  href={`tel:${company.phones[0].replace(/\s/g, '')}`}
                  className="btn-secondary justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Call {company.phones[0]}
                </a>
                <Link to="/contact" className="btn-primary justify-center">
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
