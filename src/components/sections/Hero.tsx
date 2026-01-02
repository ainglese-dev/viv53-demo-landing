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
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-viv53-primary-bg via-viv53-primary-bg-secondary to-viv53-primary-bg" />

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-viv53-gold rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]"
            style={{ animationDelay: '0s' }}
          />
          <div
            className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-viv53-gold-light rounded-full blur-3xl animate-[float_25s_ease-in-out_infinite]"
            style={{ animationDelay: '5s' }}
          />
          <div
            className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-viv53-gold rounded-full blur-3xl animate-[float_22s_ease-in-out_infinite]"
            style={{ animationDelay: '10s' }}
          />
        </div>

        {/* Grid overlay for tech feel */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-viv53-primary-bg opacity-60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-viv53 relative z-20 text-center py-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-viv53-text-primary mb-6 leading-tight">
          Enterprise-Grade Network Engineering
          <br />
          <span className="text-viv53-gold">Powered by Automation & AI</span>
        </h1>

        <p className="text-xl md:text-2xl text-viv53-text-secondary mb-12 max-w-3xl mx-auto">
          High-level Network Consulting Engineers delivering zero-downtime infrastructure
          with multivendor automation and AI-enhanced operations. Accelerating growth for
          SMB and mid-market companies.
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
    </section>
  )
}
