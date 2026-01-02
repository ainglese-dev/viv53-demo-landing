import { industries } from '@/data/industries'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-viv53-primary-bg">
      <div className="container mx-auto px-4 max-w-viv53">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-viv53-text-primary mb-4">
            Critical Industries We Serve
          </h2>
          <p className="text-xl text-viv53-text-secondary max-w-3xl mx-auto">
            Specialized expertise for businesses where downtime isn't just inconvenient—it's catastrophic.
            We deliver zero-downtime infrastructure for mission-critical operations.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <Card
                key={industry.id}
                className={`group bg-viv53-primary-bg-secondary border transition-all duration-300 hover:scale-105 ${
                  industry.isHighlighted
                    ? 'border-viv53-gold hover:border-viv53-gold-hover'
                    : 'border-viv53-gold/20 hover:border-viv53-gold/40'
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div
                      className={`p-3 rounded-lg transition-colors ${
                        industry.isHighlighted
                          ? 'bg-viv53-gold/20 group-hover:bg-viv53-gold/30'
                          : 'bg-viv53-gold/10 group-hover:bg-viv53-gold/20'
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          industry.isHighlighted ? 'text-viv53-gold' : 'text-viv53-gold/70'
                        }`}
                      />
                    </div>
                    {industry.isHighlighted && (
                      <Badge variant="outline" className="border-viv53-gold text-viv53-gold">
                        Zero-Downtime
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl text-viv53-text-primary">
                    {industry.name}
                  </CardTitle>
                  <CardDescription className="text-viv53-gold font-semibold">
                    {industry.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-viv53-text-secondary mb-1">
                      The Challenge:
                    </p>
                    <p className="text-sm text-viv53-text-secondary/80">{industry.painPoint}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-viv53-gold mb-1">VIV53 Solution:</p>
                    <p className="text-sm text-viv53-text-secondary/80">{industry.viv53Solution}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-viv53-text-secondary">
            Don't see your industry?{' '}
            <a
              href="#contact"
              className="text-viv53-gold hover:text-viv53-gold-hover font-semibold underline"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contact us
            </a>{' '}
            to discuss your specific infrastructure needs.
          </p>
        </div>
      </div>
    </section>
  )
}
