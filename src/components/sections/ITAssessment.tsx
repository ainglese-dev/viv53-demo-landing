import ITAssessmentForm from '@/components/forms/ITAssessmentForm'
import { ClipboardCheck, CheckCircle } from 'lucide-react'

export default function ITAssessment() {
  return (
    <section id="it-assessment" className="py-20 bg-viv53-primary-bg">
      <div className="container mx-auto px-4 max-w-viv53">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ClipboardCheck className="w-8 h-8 text-viv53-gold" />
            <h2 className="text-3xl md:text-4xl font-bold text-viv53-text-primary">
              Get Your Free IT Infrastructure Assessment
            </h2>
          </div>
          <p className="text-xl text-viv53-text-secondary max-w-2xl mx-auto">
            Discover hidden vulnerabilities and optimization opportunities in your IT environment
          </p>
        </div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-viv53-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-viv53-text-primary mb-2">
                Comprehensive Analysis
              </h3>
              <p className="text-sm text-viv53-text-secondary">
                Get a detailed review of your current IT setup, identifying strengths and areas for improvement
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-viv53-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-viv53-text-primary mb-2">
                Actionable Recommendations
              </h3>
              <p className="text-sm text-viv53-text-secondary">
                Receive expert insights and practical steps to enhance security, performance, and efficiency
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-viv53-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-viv53-text-primary mb-2">
                No Obligations
              </h3>
              <p className="text-sm text-viv53-text-secondary">
                Just valuable insights with no sales pressure. We're here to help, not hard-sell
              </p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-viv53-primary-bg-secondary border border-viv53-border rounded-lg p-6 md:p-8">
          <ITAssessmentForm />
        </div>

        {/* Social Proof / Trust Indicator */}
        <div className="mt-8 text-center">
          <p className="text-sm text-viv53-text-muted">
            Join 100+ SMBs who've improved their IT infrastructure with our expert guidance
          </p>
        </div>
      </div>
    </section>
  )
}
