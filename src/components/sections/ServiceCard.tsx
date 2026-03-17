import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { ServiceCategory } from '@/data/services'

interface ServiceCardProps {
  category: ServiceCategory
  isCompliance?: boolean
}

function getCategoryItemCount(category: ServiceCategory): number {
  if (category.items) return category.items.length
  if (category.subDomains) return category.subDomains.reduce((acc, sub) => acc + sub.items.length, 0)
  return 0
}

export default function ServiceCard({ category, isCompliance = false }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = category.icon
  const itemCount = getCategoryItemCount(category)

  return (
    <Card
      className={cn(
        'border transition-all duration-300 hover:border-viv53-gold',
        isCompliance
          ? 'bg-gradient-to-br from-viv53-primary-bg-secondary to-viv53-primary-bg border-viv53-gold/30'
          : 'bg-viv53-primary-bg-secondary border-viv53-border'
      )}
    >
      <CardHeader>
        <div className="flex justify-between items-start mb-1">
          <div className="flex justify-center">
            <div className="p-3 bg-viv53-primary-bg rounded-lg">
              <Icon className="w-10 h-10 text-viv53-gold" />
            </div>
          </div>
          {isCompliance && (
            <Badge
              variant="outline"
              className="border-viv53-gold/50 text-viv53-gold/80 text-[10px] self-start"
            >
              Regulatory Coverage
            </Badge>
          )}
        </div>

        <CardTitle className="text-xl text-viv53-text-primary mt-3">
          {category.title}
        </CardTitle>

        <CardDescription className="text-viv53-text-secondary">
          {category.description}
        </CardDescription>

        {!isExpanded && (
          <p className="text-xs text-viv53-text-secondary/60 mt-1">
            {itemCount} capabilities
          </p>
        )}
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0">
          <div className="border-t border-viv53-border pt-4">
            {category.items && (
              <ul className="space-y-2">
                {category.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-viv53-text-secondary">
                    <span className="text-viv53-gold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {category.subDomains && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.subDomains.map(sub => {
                  const SubIcon = sub.icon
                  return (
                    <div key={sub.id} className="border border-viv53-border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <SubIcon className="w-4 h-4 text-viv53-gold" />
                        <span className="text-sm font-semibold text-viv53-text-primary">{sub.title}</span>
                      </div>
                      <ul className="space-y-1">
                        {sub.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-viv53-text-secondary">
                            <span className="text-viv53-gold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </CardContent>
      )}

      <div className="px-6 pb-6">
        <Button
          variant="outline"
          className="w-full border-viv53-gold text-viv53-gold hover:bg-viv53-gold hover:text-viv53-primary-bg"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Learn More
          <ChevronDown
            className={cn(
              'ml-2 h-4 w-4 transition-transform duration-300',
              isExpanded && 'rotate-180'
            )}
          />
        </Button>
      </div>
    </Card>
  )
}
