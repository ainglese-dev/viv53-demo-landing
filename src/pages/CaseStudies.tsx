import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button'
import { ArrowRight, LayoutGrid, Bot, BadgeCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { caseStudies } from '@/data/caseStudies'
import CaseStudyCard from '@/components/case-studies/CaseStudyCard'

type FilterId = 'all' | 'automation' | 'compliance'

const filters: { id: FilterId; label: string; icon: typeof Bot }[] = [
  { id: 'all', label: 'All Cases', icon: LayoutGrid },
  { id: 'automation', label: 'Automation & AI', icon: Bot },
  { id: 'compliance', label: 'Compliance', icon: BadgeCheck },
]

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleFilterChange = (id: FilterId) => {
    setActiveFilter(id)
    setHasInteracted(true)
  }

  const filtered =
    activeFilter === 'all'
      ? caseStudies
      : caseStudies.filter(cs => cs.pillar === activeFilter || cs.pillar === 'both')

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
        <title>Client Success Stories - VIV53 Case Studies</title>
        <meta
          name="description"
          content="Discover how VIV53 delivers automation and compliance outcomes across Healthcare, Banking, Manufacturing, Telecommunications, and more. 7 real engagements, measurable results."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-viv53-primary-bg">
        <div className="container mx-auto px-4 max-w-viv53 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-viv53-text-primary mb-6">
            Automation & Compliance in Action
          </h1>
          <p className="text-xl text-viv53-text-secondary max-w-3xl mx-auto">
            Seven real engagements across both service pillars — Automation & AI and Compliance.
            Measurable outcomes in weeks, not quarters.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-viv53-primary-bg-secondary">
        <div className="container mx-auto px-4 max-w-viv53">
          <h2 className="text-4xl font-bold text-center text-viv53-text-primary mb-4">
            Proven Results Across Critical Industries
          </h2>
          <p className="text-center text-viv53-text-secondary mb-8 max-w-2xl mx-auto">
            From legacy carrier migrations to ISO 42001 AI governance — see how our Automation & AI
            and Compliance practices deliver operational confidence at every layer.
          </p>

          {/* Filter tabs */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              {/* Switch hint — disappears on first interaction */}
              <div
                className={cn(
                  'absolute -top-9 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none transition-opacity duration-500',
                  hasInteracted ? 'opacity-0' : 'opacity-100 animate-in fade-in duration-700'
                )}
              >
                <span className="whitespace-nowrap bg-viv53-gold text-viv53-primary-bg text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Switch tabs to explore more
                </span>
                <span className="text-viv53-gold text-[10px] leading-none mt-0.5">▼</span>
              </div>

              <div className="inline-flex bg-viv53-primary-bg border border-viv53-border rounded-lg p-1 gap-1">
              {filters.map(filter => {
                const Icon = filter.icon
                const isActive = activeFilter === filter.id
                return (
                  <button
                    key={filter.id}
                    onClick={() => handleFilterChange(filter.id)}
                    className={cn(
                      'flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300',
                      isActive
                        ? 'bg-viv53-gold text-viv53-primary-bg shadow-md'
                        : 'text-viv53-text-secondary hover:text-viv53-text-primary'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {filter.label}
                  </button>
                )
              })}
              </div>
            </div>
          </div>

          <div key={activeFilter} className="space-y-12 animate-in fade-in duration-300">
            {filtered.map(caseStudy => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-viv53-primary-bg text-center">
        <div className="container mx-auto px-4 max-w-viv53">
          <h2 className="text-4xl font-bold text-viv53-text-primary mb-4">
            Ready to Be the Next Success Story?
          </h2>
          <p className="text-xl text-viv53-text-secondary mb-8 max-w-2xl mx-auto">
            Whether you need infrastructure automation, compliance frameworks, or legacy migration —
            we deliver measurable outcomes from day one.
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
