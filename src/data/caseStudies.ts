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
    id: 'zero-downtime-healthcare',
    title: 'Zero-Downtime Infrastructure for Multi-Location Healthcare Provider',
    industry: 'Healthcare',
    challenge:
      'Regional healthcare network with 5 clinics and 24/7 patient monitoring systems faced critical infrastructure risks. A minute of downtime meant patient safety concerns and HIPAA violations. Their small IT team was overwhelmed with reactive troubleshooting.',
    solution: [
      'Implemented redundant network architecture with automated failover',
      'Deployed AI-enhanced monitoring for proactive anomaly detection',
      'Automated Day-2 operations: patch management, backup validation, performance optimization',
      'Multivendor security automation for HIPAA compliance',
    ],
    results: [
      { value: '99.99%', label: 'Uptime Achieved' },
      { value: '0', label: 'Patient Safety Incidents' },
      { value: '75%', label: 'Reduced IT Firefighting' },
      { value: '3 Weeks', label: 'ROI Timeline' },
    ],
    testimonial: {
      quote:
        'VIV53 transformed us from constant crisis mode to proactive confidence. Our IT team now focuses on innovation instead of emergencies. Patient care has never been more reliable.',
      author: 'Dr. Lisa Martinez',
      role: 'Chief Medical Officer',
    },
  },
  {
    id: 'banking-automation',
    title: 'Automated Security & Compliance for Regional Credit Union',
    industry: 'Banking & Finance',
    challenge:
      'Mid-market credit union with 12 branches needed enterprise-grade security and compliance automation. Manual processes created audit risks, and their 2-person IT team couldn\'t scale with growth. Downtime meant transaction failures and regulatory exposure.',
    solution: [
      'AI-powered threat detection with automated response protocols',
      'Infrastructure-as-Code for consistent, auditable deployments',
      'Automated compliance monitoring and reporting for SOC 2 and PCI DSS',
      'Zero-trust network architecture with multivendor integration',
    ],
    results: [
      { value: '100%', label: 'Audit Compliance' },
      { value: '90%', label: 'Faster Incident Response' },
      { value: '60%', label: 'Operational Cost Savings' },
      { value: '$0', label: 'Downtime Revenue Loss' },
    ],
    testimonial: {
      quote:
        'VIV53 gave us enterprise capabilities without enterprise costs. Automation handles what used to overwhelm our team. We confidently passed our SOC 2 audit with zero findings.',
      author: 'Robert Chen',
      role: 'VP of Technology',
    },
  },
  {
    id: 'manufacturing-iot-automation',
    title: 'Industrial IoT Integration with Predictive Automation',
    industry: 'Manufacturing',
    challenge:
      'Growing manufacturing firm with 4 production facilities lost $50K per hour during network outages. Legacy infrastructure couldn\'t support IoT sensors, and reactive maintenance caused production delays.',
    solution: [
      'Enterprise network redesign with industrial IoT integration',
      'Predictive maintenance automation using AI sensor analysis',
      'Automated Day-2 operations with zero-touch deployment',
      'Multi-site redundancy with sub-second automated failover',
    ],
    results: [
      { value: '95%', label: 'Less Unplanned Downtime' },
      { value: '300%', label: 'Network Speed Increase' },
      { value: '40%', label: 'Maintenance Cost Reduction' },
      { value: '2 Weeks', label: 'ROI Timeline' },
    ],
    testimonial: {
      quote:
        'Production hasn\'t stopped since VIV53 completed the implementation. Their automation predicted and prevented three major failures before they happened. Game-changing.',
      author: 'Jennifer Wu',
      role: 'Operations Director',
    },
  },
  {
    id: 'cybersecurity-firm-infrastructure',
    title: 'Zero-Compromise Infrastructure for Security Operations Center',
    industry: 'Cybersecurity',
    challenge:
      'Managed security services provider (MSSP) with 50+ enterprise clients needed infrastructure that matched their security promises. Their own network had become a single point of failure, risking client trust and contractual SLAs.',
    solution: [
      'Enterprise-grade redundant architecture with no single points of failure',
      'Automated threat intelligence integration across multivendor stack',
      'AI-enhanced monitoring with sub-minute anomaly detection',
      'Infrastructure-as-Code for immutable, auditable deployments',
    ],
    results: [
      { value: '100%', label: 'SLA Achievement' },
      { value: '99.99%', label: 'Infrastructure Uptime' },
      { value: '85%', label: 'Faster Threat Detection' },
      { value: '0', label: 'Client-Impacting Incidents' },
    ],
    testimonial: {
      quote:
        'We protect our clients, but VIV53 protects us. Their automation and redundancy gave us the bulletproof infrastructure our reputation demands. Worth every penny.',
      author: 'Marcus Thompson',
      role: 'Chief Security Officer',
    },
  },
]
