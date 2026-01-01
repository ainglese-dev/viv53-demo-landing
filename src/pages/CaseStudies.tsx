import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/data/caseStudies'
import CaseStudyCard from '@/components/case-studies/CaseStudyCard'

export default function CaseStudies() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#contact'
    }
  }

  const navigateToServices = () => {
    window.location.href = '/#services'
  }

  return (
    <>
      <Helmet>
        <title>Success Stories - VIV53 IT Services Case Studies</title>
        <meta
          name="description"
          content="Discover how VIV53 IT Services has helped SMB companies transform their technology infrastructure. Real client success stories and project results."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-viv53-primary-bg">
        <div className="container mx-auto px-4 max-w-viv53 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-viv53-text-primary mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-viv53-text-secondary max-w-3xl mx-auto">
            Real results from our SMB clients. Discover how we've helped businesses like yours
            transform their IT infrastructure and achieve their goals.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-viv53-primary-bg-secondary">
        <div className="container mx-auto px-4 max-w-viv53">
          <h2 className="text-4xl font-bold text-center text-viv53-text-primary mb-12">
            Our Client Success Stories
          </h2>

          <div className="space-y-12">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-viv53-primary-bg text-center">
        <div className="container mx-auto px-4 max-w-viv53">
          <h2 className="text-4xl font-bold text-viv53-text-primary mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-viv53-text-secondary mb-8 max-w-2xl mx-auto">
            Join these successful SMB companies and transform your IT infrastructure with VIV53's
            expert solutions.
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
              onClick={navigateToServices}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
