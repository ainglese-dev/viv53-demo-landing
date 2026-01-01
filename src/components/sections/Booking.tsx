import BookingForm from '@/components/forms/BookingForm'
import { Calendar } from 'lucide-react'

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

        {/* Booking Form */}
        <div className="max-w-2xl mx-auto bg-viv53-primary-bg border border-viv53-border rounded-lg p-8">
          <BookingForm />
        </div>

        {/* Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-viv53-text-muted">
            We'll confirm your appointment within 24 hours. Prefer to talk now?{' '}
            <a href="tel:+1-234-567-8900" className="text-viv53-gold hover:text-viv53-gold-hover underline">
              Call us at +1-234-567-8900
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
