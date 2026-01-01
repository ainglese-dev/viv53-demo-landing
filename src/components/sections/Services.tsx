import ServiceCard from './ServiceCard'
import { services } from '@/data/services'

export default function Services() {
  return (
    <section id="services" className="py-20 bg-viv53-primary-bg">
      <div className="container mx-auto px-4 max-w-viv53">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-viv53-text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-viv53-text-secondary">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
