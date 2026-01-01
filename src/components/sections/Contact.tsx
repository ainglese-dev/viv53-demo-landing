import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-viv53-primary-bg-secondary">
      <div className="container mx-auto px-4 max-w-viv53">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-viv53-text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-viv53-text-secondary">
            Ready to transform your IT infrastructure? Let's talk about your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-viv53-gold mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-viv53-text-primary mb-1">Email</h3>
                  <a
                    href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'info@viv53.com'}`}
                    className="text-viv53-text-secondary hover:text-viv53-gold transition-colors"
                  >
                    {import.meta.env.VITE_CONTACT_EMAIL || 'info@viv53.com'}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-viv53-gold mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-viv53-text-primary mb-1">Phone</h3>
                  <a
                    href={`tel:${import.meta.env.VITE_CONTACT_PHONE || '+12345678900'}`}
                    className="text-viv53-text-secondary hover:text-viv53-gold transition-colors"
                  >
                    {import.meta.env.VITE_CONTACT_PHONE_DISPLAY || '+1 (234) 567-8900'}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-viv53-gold mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-viv53-text-primary mb-1">Location</h3>
                  <p className="text-viv53-text-secondary">
                    Miami, FL<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden border border-viv53-border h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.994355834967!2d-80.19362!3d25.7616798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c95f%3A0xdd0f7a8850102273!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VIV53 IT Services Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-viv53-primary-bg border border-viv53-border rounded-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
