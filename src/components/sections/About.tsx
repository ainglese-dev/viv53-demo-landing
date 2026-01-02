import { Check } from 'lucide-react'
import teamImage from '@/assets/images/viv53_team.png'

export default function About() {
  const features = [
    'Enterprise-grade Network Consulting Engineers',
    'Multivendor Automation & AI Integration',
    'Zero-Downtime Infrastructure Expertise',
    'Day-2 Operations & Proactive Innovation',
  ]

  const outcomes = [
    {
      label: 'Operational Velocity',
      description: 'Faster deployments and data-driven decisions',
    },
    {
      label: 'Confidence to Scale',
      description: 'Infrastructure becomes a growth springboard',
    },
    {
      label: 'Focus Shift',
      description: 'Stop worrying about networks, focus on customers',
    },
  ]

  return (
    <section id="about" className="py-20 bg-viv53-primary-bg-secondary">
      <div className="container mx-auto px-4 max-w-viv53">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-viv53-text-primary mb-6">
              About VIV53: Your Enablement Partner
            </h2>
            <p className="text-lg text-viv53-text-secondary mb-4">
              We are <span className="text-viv53-gold font-semibold">High-level Network Consulting Engineers (NCE)</span> specializing in
              Enterprise-grade infrastructure for businesses that cannot afford downtime. Unlike traditional
              IT providers, we act as an <span className="text-viv53-gold font-semibold">Enablement Partner</span>—empowering your team
              while accelerating infrastructure projects and architectural shifts faster than a permanent hire could.
            </p>
            <p className="text-viv53-text-secondary mb-4">
              Our expertise bridges traditional IT (Network, Compute, Storage) with the future of operations:
              <span className="text-viv53-gold font-semibold"> Multivendor Automation</span> and <span className="text-viv53-gold font-semibold">AI-Enhanced Monitoring</span>. We serve
              critical industries where a minute offline means revenue loss, legal liability, or safety risks.
            </p>
            <p className="text-viv53-text-secondary mb-8">
              We specialize in <span className="text-viv53-gold font-semibold">"Day-2 Operations"</span>—the maintenance, troubleshooting, and
              proactive optimization that overwhelms small internal teams. Through deep multivendor expertise,
              we deliver bespoke solutions that standard IT shops cannot match.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-viv53-gold/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-viv53-gold" />
                  </div>
                  <span className="text-viv53-text-primary">{feature}</span>
                </div>
              ))}
            </div>

            {/* Outcomes */}
            <div className="border-t border-viv53-gold/20 pt-6">
              <h3 className="text-xl font-semibold text-viv53-text-primary mb-4">
                The VIV53 Outcome:
              </h3>
              <div className="space-y-3">
                {outcomes.map((outcome, index) => (
                  <div key={index}>
                    <span className="text-viv53-gold font-semibold">{outcome.label}:</span>{' '}
                    <span className="text-viv53-text-secondary">{outcome.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Image */}
          <div className="lg:order-last">
            <div className="aspect-[4/3] overflow-hidden rounded-lg border-2 border-viv53-gold shadow-lg">
              <img
                src={teamImage}
                alt="VIV53 Professional Network Engineering Team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
