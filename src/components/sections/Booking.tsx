import CalendlyEmbed from '@/components/integrations/CalendlyEmbed'
import { Calendar } from 'lucide-react'

const contactPhone = import.meta.env.VITE_CONTACT_PHONE || '+17862524033'
const contactPhoneDisplay = import.meta.env.VITE_CONTACT_PHONE_DISPLAY || '+1 (786) 252-4033'

export default function Booking() {
  return (
    <section id="booking" className="py-20 bg-viv53-primary-bg-secondary">
      <div className="container mx-auto px-4 max-w-viv53">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-viv53-gold" />
            <h2 className="text-3xl md:text-4xl font-bold text-viv53-text-primary">
              Schedule a Consultation
            </h2>
          </div>
          <p className="text-xl text-viv53-text-secondary max-w-2xl mx-auto">
            Book a free consultation to discuss your IT needs and discover how we can help transform your infrastructure.
          </p>
        </div>

        {/* Calendly Widget */}
        <div className="max-w-4xl mx-auto bg-viv53-primary-bg border border-viv53-border rounded-lg p-4 md:p-8">
          <CalendlyEmbed />
        </div>

        {/* Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-viv53-text-muted">
            Select a time that works for you. Prefer to talk now?{' '}
            <a href={`tel:${contactPhone}`} className="text-viv53-gold hover:text-viv53-gold-hover underline">
              Call us at {contactPhoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
