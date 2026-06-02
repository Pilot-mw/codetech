import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, Sparkles, Shield, Zap, Code2, Star } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-mesh-blue blur-3xl opacity-60 rounded-full" />
      </div>

      <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white border border-primary-200 text-primary-700 shadow-soft"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
            </span>
            <Sparkles className="w-3.5 h-3.5 text-accent-600" />
            Now welcoming new clients in Zomba & beyond
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-primary-900 text-balance leading-[1.05]"
          >
            Building Digital Solutions{' '}
            <span className="relative inline-block">
              <span className="gradient-text">That Grow</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 220 12"
                className="absolute -bottom-2 left-0 w-full h-3 text-accent-400"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9 C 60 1, 160 1, 218 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            <br className="hidden sm:block" />
            Your Business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-base sm:text-lg text-primary-600 max-w-2xl leading-relaxed"
          >
            From websites and mobile applications to hosting, domains, and professional business emails,
            <span className="font-semibold text-primary-800"> Code-Tech </span>
            delivers complete digital solutions — from development to production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button to="/contact" variant="primary">
              Get Started
            </Button>
            <Button to="/contact" variant="secondary">
              Request a Quote
            </Button>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-primary-800 hover:text-secondary-700"
            >
              <span className="w-9 h-9 rounded-full bg-white border border-primary-200 flex items-center justify-center shadow-soft">
                <Play className="w-3.5 h-3.5 text-secondary-600 fill-secondary-600" />
              </span>
              See our work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm"
          >
            <div className="flex items-center gap-1.5 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
              <span className="ml-2 font-semibold text-primary-700">4.9/5 client rating</span>
            </div>
            <div className="flex items-center gap-2 text-primary-600">
              <Shield className="w-4 h-4 text-secondary-600" />
              99.9% uptime guarantee
            </div>
            <div className="flex items-center gap-2 text-primary-600">
              <Zap className="w-4 h-4 text-accent-600" />
              Fast, agile delivery
            </div>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative">
            {/* Floating gradient blobs */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent-400/30 rounded-full blur-2xl animate-float-slow" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary-500/30 rounded-full blur-2xl animate-float" />

            {/* Main image card */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card-hover border border-primary-100 bg-primary-900">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="African software developers collaborating on a project"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 text-white">
                <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-accent-300" />
                </div>
                <div>
                  <p className="font-semibold leading-tight">Built in Zomba, Malawi</p>
                  <p className="text-xs text-primary-200">Trusted by African businesses</p>
                </div>
              </div>
            </div>

            {/* Floating card - tech stack */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden sm:flex absolute -left-8 top-10 bg-white rounded-2xl shadow-card border border-primary-100 p-4 w-56"
            >
              <div>
                <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider">Tech Stack</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {['React', 'Next.js', 'Flutter', 'Node', 'AWS'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-secondary-50 text-secondary-700 border border-secondary-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating card - performance */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="hidden sm:flex absolute -right-6 -bottom-6 bg-white rounded-2xl shadow-card border border-primary-100 p-4 gap-3 items-center"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-900">99.9% Uptime</p>
                <p className="text-xs text-primary-500">Production-grade hosting</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Trusted by logos / marquee */}
      <div className="container-wide mt-16 lg:mt-24">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-primary-500">
          Trusted by growing businesses across Africa
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center opacity-70">
          {['Luso', 'Sunbird', 'MwangaMart', 'Kulemba', 'Baobab', 'Phiri Farms'].map((b) => (
            <div
              key={b}
              className="text-center font-display font-bold text-primary-400 text-lg tracking-tight"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
