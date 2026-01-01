import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = service.icon

  return (
    <Card className="bg-viv53-primary-bg-secondary border-viv53-border hover:border-viv53-gold transition-all duration-300">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-viv53-primary-bg rounded-lg">
            <Icon className="w-12 h-12 text-viv53-gold" />
          </div>
        </div>
        <CardTitle className="text-xl text-center text-viv53-text-primary">
          {service.title}
        </CardTitle>
        <CardDescription className="text-center text-viv53-text-secondary">
          {service.description}
        </CardDescription>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0">
          <div className="border-t border-viv53-border pt-4">
            <p className="font-semibold text-viv53-text-primary mb-3">
              {service.details.title}
            </p>
            <ul className="space-y-2">
              {service.details.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-viv53-text-secondary">
                  <span className="text-viv53-gold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
            className={`ml-2 h-4 w-4 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </div>
    </Card>
  )
}
