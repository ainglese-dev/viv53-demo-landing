import { Check } from 'lucide-react'

export default function About() {
  const features = [
    'Multi-vendor expertise',
    'SMB-focused solutions',
    'Professional support',
  ]

  return (
    <section id="about" className="py-20 bg-viv53-primary-bg-secondary">
      <div className="container mx-auto px-4 max-w-viv53">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-viv53-text-primary mb-6">
              About VIV53
            </h2>
            <p className="text-lg text-viv53-text-secondary mb-4">
              We specialize in providing comprehensive IT solutions for small and medium businesses
              that lack dedicated IT staff or have beginner-level IT teams.
            </p>
            <p className="text-viv53-text-secondary mb-8">
              Our experienced professionals deliver reliable on-premises and cloud services across
              multiple vendors, ensuring your business has the technology foundation it needs to
              thrive in today's digital landscape.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-viv53-gold/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-viv53-gold" />
                  </div>
                  <span className="text-viv53-text-primary">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="lg:order-last">
            <div className="aspect-[4/3] bg-viv53-primary-bg border-2 border-viv53-gold rounded-lg flex items-center justify-center">
              <span className="text-viv53-gold text-lg">Professional Team Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
