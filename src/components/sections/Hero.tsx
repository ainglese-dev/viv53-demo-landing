import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-viv53-primary-bg overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-viv53-primary-bg/50 to-viv53-primary-bg z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 max-w-viv53 relative z-20 text-center py-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-viv53-text-primary mb-6 leading-tight">
          Professional IT Solutions
          <br />
          <span className="text-viv53-gold">for Your Business</span>
        </h1>

        <p className="text-xl md:text-2xl text-viv53-text-secondary mb-12 max-w-3xl mx-auto">
          Expert on-premises and cloud services across multiple vendors. Empowering SMB companies
          with reliable IT infrastructure and support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-viv53-gold hover:bg-viv53-gold-hover text-viv53-primary-bg font-semibold px-8 py-6 text-lg"
            onClick={scrollToContact}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-viv53-gold text-viv53-gold hover:bg-viv53-gold hover:text-viv53-primary-bg font-semibold px-8 py-6 text-lg"
            onClick={scrollToServices}
          >
            Our Services
          </Button>
        </div>
      </div>

      {/* Animated background elements (subtle) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-viv53-gold rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-viv53-gold rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  )
}
