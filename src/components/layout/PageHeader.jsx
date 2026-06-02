import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function PageHeader({ eyebrow, title, description, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-mesh-blue blur-3xl opacity-50 rounded-full" />
      </div>
      <div className="container-wide">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-primary-500">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-primary-700">
            <Home className="w-4 h-4" /> Home
          </Link>
          {crumbs.map((c, i) => (
            <span key={i} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-4 h-4 text-primary-300" />
              {c.to ? (
                <Link to={c.to} className="hover:text-primary-700">
                  {c.label}
                </Link>
              ) : (
                <span className="text-primary-700 font-semibold">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow && (
          <span className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-secondary-50 text-secondary-700 border border-secondary-100">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-900 text-balance max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base sm:text-lg text-primary-600 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
