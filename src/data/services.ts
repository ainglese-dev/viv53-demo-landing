import { Cloud, Shield, Network, Settings, Bot } from 'lucide-react'

export interface Service {
  id: string
  title: string
  icon: typeof Cloud
  description: string
  details: {
    title: string
    items: string[]
  }
}

export const services: Service[] = [
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    icon: Cloud,
    description: 'Scalable cloud solutions across AWS, Azure, and Google Cloud. Migration, setup, automated provisioning, and ongoing management for optimal performance.',
    details: {
      title: 'Services include:',
      items: [
        'Cloud migration planning and execution',
        'Multi-cloud architecture design',
        'Automated provisioning and scaling',
        'Cost optimization and AI-driven monitoring',
        'Disaster recovery solutions',
      ],
    },
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Comprehensive security solutions with AI-powered threat intelligence, automated response, and proactive defense to protect your business from evolving threats.',
    details: {
      title: 'Security services:',
      items: [
        'AI-powered threat detection and intelligence',
        'Vulnerability assessments and penetration testing',
        'Automated firewall configuration and management',
        'Employee security training programs',
        'Incident response and forensics',
      ],
    },
  },
  {
    id: 'network',
    title: 'Network Management',
    icon: Network,
    description: 'Professional network design, implementation, and automated Day-2 operations. Ensuring reliable connectivity and optimal performance with proactive monitoring.',
    details: {
      title: 'Network solutions:',
      items: [
        'Network infrastructure design and setup',
        'Automated Day-2 operations and optimization',
        'Wi-Fi optimization and troubleshooting',
        'VPN and remote access solutions',
        'AI-enhanced performance monitoring',
      ],
    },
  },
  {
    id: 'support',
    title: 'IT Support',
    icon: Settings,
    description: '24/7 technical support and maintenance services. Remote and on-site assistance to keep your systems running smoothly.',
    details: {
      title: 'Support services:',
      items: [
        '24/7 helpdesk and technical support',
        'Remote troubleshooting and maintenance',
        'Hardware replacement and upgrades',
        'Software installation and updates',
      ],
    },
  },
  {
    id: 'automation',
    title: 'Automation & AI Integration',
    icon: Bot,
    description: 'Transform Day-2 operations with intelligent automation. Remove human error, accelerate workflows, and enable AI-enhanced monitoring across multivendor environments.',
    details: {
      title: 'Automation capabilities:',
      items: [
        'Multivendor workflow automation and orchestration',
        'AI-powered network monitoring and threat detection',
        'Infrastructure-as-Code implementation and management',
        'Proactive anomaly detection and remediation',
      ],
    },
  },
]
