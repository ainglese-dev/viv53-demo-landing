export interface CaseStudy {
  id: string
  title: string
  industry: string
  challenge: string
  solution: string[]
  results: {
    value: string
    label: string
  }[]
  testimonial: {
    quote: string
    author: string
    role: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'aws-migration-law-firm',
    title: 'Complete AWS Migration for Regional Law Firm',
    industry: 'Legal Services',
    challenge:
      'A 25-attorney law firm needed to modernize their aging on-premise servers while ensuring strict data security compliance.',
    solution: [
      'Complete infrastructure audit and migration planning',
      'AWS cloud architecture with high availability design',
      'Enhanced security with encryption and compliance controls',
    ],
    results: [
      { value: '40%', label: 'Cost Reduction' },
      { value: '99.9%', label: 'Uptime' },
      { value: '60%', label: 'Faster Performance' },
    ],
    testimonial: {
      quote:
        'VIV53 transformed our IT infrastructure while keeping our sensitive legal data completely secure. The migration was seamless and our team productivity has significantly improved.',
      author: 'Sarah Johnson',
      role: 'Managing Partner',
    },
  },
  {
    id: 'hipaa-security-healthcare',
    title: 'HIPAA-Compliant Security Overhaul',
    industry: 'Healthcare',
    challenge:
      'Medical practice with 3 locations needed comprehensive cybersecurity to protect patient data and achieve HIPAA compliance.',
    solution: [
      'Comprehensive security audit and vulnerability assessment',
      'Next-generation firewall and endpoint protection deployment',
      'Staff cybersecurity training and awareness programs',
    ],
    results: [
      { value: '100%', label: 'HIPAA Compliance' },
      { value: '0', label: 'Security Incidents' },
      { value: '90%', label: 'Threat Reduction' },
    ],
    testimonial: {
      quote:
        "Our patients' data is now completely secure, and we have peace of mind knowing VIV53 is monitoring our systems 24/7. The team made HIPAA compliance straightforward.",
      author: 'Dr. Michael Rodriguez',
      role: 'Practice Owner',
    },
  },
  {
    id: 'network-modernization-manufacturing',
    title: 'Multi-Site Network Modernization',
    industry: 'Manufacturing',
    challenge:
      'Growing manufacturing company needed reliable connectivity between 4 facilities and modernized network infrastructure for increased productivity.',
    solution: [
      'Fiber network installation and enterprise-grade equipment',
      'Site-to-site VPN configuration for secure connectivity',
      'Redundant internet connections and failover systems',
    ],
    results: [
      { value: '300%', label: 'Speed Increase' },
      { value: '95%', label: 'Less Downtime' },
      { value: '100%', label: 'Site Connectivity' },
    ],
    testimonial: {
      quote:
        'The network upgrade revolutionized our operations. All our facilities are now seamlessly connected, and our productivity has increased dramatically.',
      author: 'Jennifer Chen',
      role: 'Operations Director',
    },
  },
]
