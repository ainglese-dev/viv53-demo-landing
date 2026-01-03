import ITAssessmentForm from '@/components/forms/ITAssessmentForm'
import CalendlyEmbed from '@/components/integrations/CalendlyEmbed'
import { ClipboardCheck, Calendar } from 'lucide-react'

export default function GetStarted() {
  return (
    <section id="get-started" className="py-20 bg-viv53-primary-bg">
      <div className="container mx-auto px-4 max-w-viv53">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-viv53-text-primary mb-4">
            Get Started with VIV53
          </h2>
          <p className="text-xl text-viv53-text-secondary max-w-3xl mx-auto">
            Choose how you'd like to engage: Get a free IT assessment or schedule a consultation call
          </p>
        </div>

        {/* Urgent Help Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-viv53-gold/10 to-viv53-gold/5 border border-viv53-gold/30 rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-viv53-text-primary mb-2">
                  Need Immediate Help?
                </h3>
                <p className="text-sm text-viv53-text-secondary">
                  Don't know who to consult? Our experts are available now for urgent IT issues
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href={`tel:${import.meta.env.VITE_CONTACT_PHONE || '+17862524033'}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-viv53-gold hover:bg-viv53-gold-hover text-viv53-primary-bg font-semibold rounded-md transition-colors"
                  onClick={() => {
                    // Track urgent call click
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'urgent_call_click', {
                        event_category: 'Engagement',
                        event_label: 'Urgent Help Call',
                      })
                    }
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '17862524033'}?text=${encodeURIComponent('I need urgent IT help. Can you assist?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25d366] hover:bg-[#20ba5a] text-white font-semibold rounded-md transition-colors"
                  onClick={() => {
                    // Track urgent WhatsApp click
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'urgent_whatsapp_click', {
                        event_category: 'Engagement',
                        event_label: 'Urgent Help WhatsApp',
                      })
                    }
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column: IT Assessment Form */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <ClipboardCheck className="w-7 h-7 text-viv53-gold" />
                <h3 className="text-2xl font-bold text-viv53-text-primary">
                  Free IT Assessment
                </h3>
              </div>
              <p className="text-viv53-text-secondary mb-4">
                Quick 2-minute form. Get a personalized analysis of your IT infrastructure within 24 hours.
              </p>

              {/* Value Props */}
              <div className="space-y-2 text-sm text-viv53-text-secondary mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-viv53-gold">✓</span>
                  <span>Comprehensive analysis of your current setup</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-viv53-gold">✓</span>
                  <span>Actionable recommendations from experts</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-viv53-gold">✓</span>
                  <span>No obligations, no sales pressure</span>
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div className="flex-1 bg-viv53-primary-bg-secondary border border-viv53-border rounded-lg p-6">
              <ITAssessmentForm />
            </div>
          </div>

          {/* Right Column: Cal.com Booking */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-7 h-7 text-viv53-gold" />
                <h3 className="text-2xl font-bold text-viv53-text-primary">
                  Schedule a Consultation
                </h3>
              </div>
              <p className="text-viv53-text-secondary mb-4">
                Book a free 1-hour consultation to discuss your IT needs and get immediate answers.
              </p>

              {/* Value Props */}
              <div className="space-y-2 text-sm text-viv53-text-secondary mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-viv53-gold">✓</span>
                  <span>Live discussion with IT experts</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-viv53-gold">✓</span>
                  <span>Immediate feedback and solutions</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-viv53-gold">✓</span>
                  <span>Calendar sync with automatic reminders</span>
                </div>
              </div>
            </div>

            {/* Cal.com Container */}
            <div className="flex-1 bg-viv53-primary-bg-secondary border border-viv53-border rounded-lg p-4">
              <CalendlyEmbed />
            </div>

            {/* Contact Fallback */}
            <div className="mt-4 text-center">
              <p className="text-sm text-viv53-text-muted">
                Prefer to talk now?{' '}
                <a
                  href={`tel:${import.meta.env.VITE_CONTACT_PHONE || '+17862524033'}`}
                  className="text-viv53-gold hover:text-viv53-gold-hover underline"
                >
                  Call us at {import.meta.env.VITE_CONTACT_PHONE_DISPLAY || '+1 (786) 252-4033'}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicator */}
        <div className="mt-12 text-center">
          <p className="text-sm text-viv53-text-muted">
            Trusted by 100+ SMBs to optimize their IT infrastructure
          </p>
        </div>
      </div>
    </section>
  )
}
