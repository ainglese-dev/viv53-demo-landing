import { partners } from '@/data/partners'

export default function TechnologyPartners() {
  return (
    <section className="py-20 bg-viv53-primary-bg">
      <div className="container mx-auto px-4 max-w-viv53">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-viv53-text-primary mb-4">
            Technology Partners
          </h2>
          <p className="text-lg text-viv53-text-secondary">
            We work with industry-leading vendors to deliver comprehensive solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center p-6 bg-viv53-primary-bg-secondary border border-viv53-border rounded-lg hover:border-viv53-gold transition-colors group"
              title={partner.description}
            >
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
              <span className="text-sm text-viv53-text-secondary group-hover:text-viv53-gold transition-colors text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
