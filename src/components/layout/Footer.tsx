import { Link } from 'react-router-dom'
import { Linkedin, Instagram, Github, Mail } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Cloud Infrastructure', href: '/#services' },
    { name: 'Cybersecurity', href: '/#services' },
    { name: 'Network Management', href: '/#services' },
    { name: 'IT Support', href: '/#services' },
  ]

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Data Protection', href: '/data-protection' },
  ]

  const social = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/ainglese', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com/viv53_it', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/viv53-it', icon: Github },
    { name: 'Email', href: `mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'info@viv53.com'}`, icon: Mail },
  ]

  return (
    <footer className="bg-viv53-primary-bg-secondary border-t border-viv53-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-viv53-gold mb-4">VIV53</h3>
            <p className="text-viv53-text-secondary">
              Professional IT solutions for modern businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-viv53-text-primary mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-viv53-text-secondary hover:text-viv53-gold transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-viv53-text-primary mb-4">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-viv53-text-secondary hover:text-viv53-gold transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-viv53-text-primary mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              {social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={item.name}
                    className="text-viv53-text-secondary hover:text-viv53-gold transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-viv53-border" />

        <div className="text-center text-sm text-viv53-text-muted">
          <p>&copy; {currentYear} VIV53 IT Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
