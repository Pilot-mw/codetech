import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Home, Compass } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'

export default function NotFound() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Page not found — Code-Tech</title>
      </Helmet>
      <section className="section-padding">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-secondary-600 to-accent-500 text-white shadow-glow mb-6"
          >
            <Compass className="w-10 h-10" />
          </motion.div>
          <p className="font-display text-7xl sm:text-8xl font-extrabold gradient-text">404</p>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-primary-900">
            We couldn't find that page.
          </h1>
          <p className="mt-3 text-primary-600">
            The page you were looking for may have been moved or no longer exists. Let's get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="btn-primary">
              <Home className="w-4 h-4" /> Back to home
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
