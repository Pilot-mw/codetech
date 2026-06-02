import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const variantMap = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

export default function Button({
  to,
  href,
  variant = 'primary',
  children,
  icon = true,
  className = '',
  ...rest
}) {
  const Comp = to ? Link : href ? 'a' : 'button'
  const extraProps = to ? { to } : href ? { href, target: '_blank', rel: 'noreferrer' } : { type: 'button' }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex"
    >
      <Comp className={`${variantMap[variant]} ${className}`} {...extraProps} {...rest}>
        {children}
        {icon && variant === 'primary' && (
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        )}
      </Comp>
    </motion.div>
  )
}
