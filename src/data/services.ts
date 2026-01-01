import { Cloud, Shield, Network, Settings } from 'lucide-react'

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
    description: 'Scalable cloud solutions across AWS, Azure, and Google Cloud. Migration, setup, and ongoing management for optimal performance.',
    details: {
      title: 'Services include:',
      items: [
        'Cloud migration planning and execution',
        'Multi-cloud architecture design',
        'Cost optimization and monitoring',
        'Disaster recovery solutions',
      ],
    },
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Comprehensive security solutions including threat assessment, firewall management, and employee training to protect your business.',
    details: {
      title: 'Security services:',
      items: [
        'Vulnerability assessments and penetration testing',
        'Firewall configuration and management',
        'Employee security training programs',
        'Incident response and forensics',
      ],
    },
  },
  {
    id: 'network',
    title: 'Network Management',
    icon: Network,
    description: 'Professional network design, implementation, and maintenance. Ensuring reliable connectivity and optimal performance for your operations.',
    details: {
      title: 'Network solutions:',
      items: [
        'Network infrastructure design and setup',
        'Wi-Fi optimization and troubleshooting',
        'VPN and remote access solutions',
        'Performance monitoring and optimization',
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
]
