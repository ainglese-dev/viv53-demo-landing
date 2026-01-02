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
                    {import.meta.env.VITE_COMPANY_ADDRESS_STREET || '8811 NW 78th St'}<br />
                    {import.meta.env.VITE_COMPANY_ADDRESS_CITY || 'Tamarac'}, {import.meta.env.VITE_COMPANY_ADDRESS_STATE || 'FL'} {import.meta.env.VITE_COMPANY_ADDRESS_ZIP || '33321'}<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden border border-viv53-border h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=8811+NW+78th+St,Tamarac,FL+33321"
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
