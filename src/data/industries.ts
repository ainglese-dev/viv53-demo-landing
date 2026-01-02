import { Heart, Building2, ShieldCheck, Factory, Landmark, Server } from 'lucide-react'

export interface Industry {
  id: string
  name: string
  icon: typeof Heart
  tagline: string
  painPoint: string
  viv53Solution: string
  isHighlighted?: boolean
}

export const industries: Industry[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: Heart,
    tagline: 'Zero-downtime patient care',
    painPoint: 'Every minute of network downtime risks patient safety and HIPAA compliance',
    viv53Solution: 'Redundant infrastructure, AI-powered monitoring, and automated failover ensuring 24/7 uptime for critical healthcare systems',
    isHighlighted: true,
  },
  {
    id: 'banking',
    name: 'Banking & Finance',
    icon: Landmark,
    tagline: 'Secure transactions, always',
    painPoint: 'Downtime equals revenue loss and eroded customer trust in financial systems',
    viv53Solution: 'Multi-layered security, automated threat detection, and zero-trust architecture protecting transactions and data',
    isHighlighted: true,
  },
  {
    id: 'cybersecurity',
    name: 'Security Firms',
    icon: ShieldCheck,
    tagline: 'Defending the defenders',
    painPoint: 'Security operations centers need resilient infrastructure that never compromises',
    viv53Solution: 'Enterprise-grade redundancy, AI-enhanced threat intelligence, and proactive security automation',
    isHighlighted: true,
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    tagline: 'Production never stops',
    painPoint: 'Production line downtime cascades into massive operational losses',
    viv53Solution: 'Industrial IoT integration, predictive maintenance automation, and resilient network architecture',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    icon: Building2,
    tagline: 'Focus on clients, not IT',
    painPoint: 'Small teams lack time for IT management while maintaining client deliverables',
    viv53Solution: 'Fully managed infrastructure, proactive monitoring, and Day-2 operations automation',
  },
  {
    id: 'technology',
    name: 'Technology & SaaS',
    icon: Server,
    tagline: 'Infrastructure that scales',
    painPoint: 'Rapid growth demands infrastructure that scales without architectural rewrites',
    viv53Solution: 'Cloud-native automation, multi-region redundancy, and infrastructure-as-code deployment',
  },
]
