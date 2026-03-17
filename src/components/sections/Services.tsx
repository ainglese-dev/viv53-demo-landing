import { useState } from 'react'
import { Bot, BadgeCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { servicePillars, type PillarId } from '@/data/services'
import ServiceCard from './ServiceCard'

const pillarIcons = {
  automation: Bot,
  compliance: BadgeCheck,
} as const

export default function Services() {
  const [activePillar, setActivePillar] = useState<PillarId>('automation')
  const [hasInteracted, setHasInteracted] = useState(false)

  const currentPillar = servicePillars.find(p => p.id === activePillar)!
  const isCompliance = activePillar === 'compliance'

  const handlePillarChange = (id: PillarId) => {
    setActivePillar(id)
    setHasInteracted(true)
  }

  return (
    <section id="services" className="py-20 bg-viv53-primary-bg">
      <div className="container mx-auto px-4 max-w-viv53">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-viv53-text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-viv53-text-secondary transition-all duration-300">
            {currentPillar.tagline}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
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

            <div className="inline-flex bg-viv53-primary-bg-secondary border border-viv53-border rounded-lg p-1 gap-1">
            {servicePillars.map(pillar => {
              const Icon = pillarIcons[pillar.id]
              const isActive = activePillar === pillar.id
              return (
                <button
                  key={pillar.id}
                  onClick={() => handlePillarChange(pillar.id)}
                  className={cn(
                    'flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300',
                    isActive
                      ? 'bg-viv53-gold text-viv53-primary-bg shadow-md'
                      : 'text-viv53-text-secondary hover:text-viv53-text-primary'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {pillar.label}
                </button>
              )
            })}
            </div>
          </div>
        </div>

        {/* Category grid — remount on tab switch to trigger fade-in */}
        <div
          key={activePillar}
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300',
            isCompliance ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
          )}
        >
          {currentPillar.categories.map(category => (
            <ServiceCard
              key={category.id}
              category={category}
              isCompliance={isCompliance}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
