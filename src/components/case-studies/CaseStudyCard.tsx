import { Card } from '@/components/ui/card'
import { CheckCircle2, Quote } from 'lucide-react'
import type { CaseStudy } from '@/data/caseStudies'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="border-2 border-viv53-gold bg-viv53-primary-bg-secondary p-8">
      {/* Industry Badge */}
      <div className="mb-6">
        <span className="inline-block px-4 py-1 bg-viv53-gold/10 border border-viv53-gold rounded-full text-sm text-viv53-gold font-medium">
          {caseStudy.industry}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-viv53-gold mb-4">{caseStudy.title}</h3>

      {/* Challenge */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-viv53-text-primary mb-2">Challenge</h4>
        <p className="text-viv53-text-secondary leading-relaxed">{caseStudy.challenge}</p>
      </div>

      {/* Results Metrics */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-viv53-text-primary mb-4">Results</h4>
        <div className="grid grid-cols-3 gap-4">
          {caseStudy.results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-viv53-gold mb-1">{result.value}</div>
              <div className="text-sm text-viv53-text-muted">{result.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Solution */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-viv53-text-primary mb-3">Solution</h4>
        <ul className="space-y-2">
          {caseStudy.solution.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-viv53-text-secondary">
              <CheckCircle2 className="w-5 h-5 text-viv53-gold mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Testimonial */}
      <div className="mt-8 pt-6 border-t border-viv53-border">
        <div className="flex gap-3">
          <Quote className="w-8 h-8 text-viv53-gold flex-shrink-0" />
          <div>
            <p className="text-viv53-text-secondary italic mb-3 leading-relaxed">
              "{caseStudy.testimonial.quote}"
            </p>
            <p className="text-viv53-text-primary font-semibold">
              — {caseStudy.testimonial.author}
            </p>
            <p className="text-sm text-viv53-text-muted">{caseStudy.testimonial.role}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
