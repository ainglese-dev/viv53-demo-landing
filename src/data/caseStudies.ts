export interface CaseStudy {
  id: string
  title: string
  industry: string
  pillar: 'automation' | 'compliance' | 'both'
  serviceCategory: string
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
  // ── Automation & AI ───────────────────────────────────────────────────────
  {
    id: 'cybersecurity-firm-infrastructure',
    title: 'Automated NAC & Firewall Operations for Managed Security Provider',
    industry: 'Cybersecurity',
    pillar: 'automation',
    serviceCategory: 'Security',
    challenge:
      'Managed security services provider (MSSP) with 50+ enterprise clients needed to eliminate manual NAC policy work and firewall rule sprawl. Analysts spent hours reviewing duplicate firewall rules and chasing device profiling gaps — time that should have gone to client threat response.',
    solution: [
      'NAC policy lifecycle automation: creation, review cycles, and retirement workflows',
      'Device profiling and posture compliance enforcement across multivendor environments',
      'Firewall rule optimization: automated deduplication, shadowed rule detection, and baseline auditing',
      'Incident response automation reducing mean-time-to-contain across client environments',
    ],
    results: [
      { value: '100%', label: 'SLA Achievement' },
      { value: '99.99%', label: 'Infrastructure Uptime' },
      { value: '85%', label: 'Faster Threat Detection' },
      { value: '0', label: 'Client-Impacting Incidents' },
    ],
    testimonial: {
      quote:
        'We protect our clients, but VIV53 protects us. Their NAC and firewall automation gave us the operational leverage our security reputation demands. Worth every penny.',
      author: 'Marcus Thompson',
      role: 'Chief Security Officer',
    },
  },
  {
    id: 'legacy-migration-telco',
    title: 'AI-Assisted TDM-to-IP Migration for Regional Carrier',
    industry: 'Telecommunications',
    pillar: 'automation',
    serviceCategory: 'Legacy Migration',
    challenge:
      'Regional carrier running SONET/SDH and Frame Relay circuits serving hundreds of enterprise clients. Manual migration planning required months of spreadsheet work per circuit group. Engineers feared cutover impact — one misidentified dependency could drop thousands of customer circuits simultaneously with no automated rollback.',
    solution: [
      'AI config parsing and dependency mapping across 1,200+ legacy circuits',
      'Automated impact risk scoring and prediction for each proposed cutover window',
      'Runbook generation reducing per-circuit planning from hours to minutes',
      'Pre/post change validation eliminating manual verification steps',
      'Circuit inventory and cutover scheduling automation with conflict detection',
    ],
    results: [
      { value: '85%', label: 'Faster Migration Planning' },
      { value: '1,200+', label: 'Circuits Migrated' },
      { value: '0', label: 'Unplanned Customer Outages' },
      { value: '6 Wks', label: 'vs. 6 Month Baseline' },
    ],
    testimonial: {
      quote:
        'VIV53 turned our most feared project into our most confident one. The AI dependency mapping caught three critical interdependencies our team had missed entirely. No customer ever noticed the cutover.',
      author: 'David Reyes',
      role: 'Network Transformation Lead',
    },
  },
  {
    id: 'cloud-iac-saas',
    title: 'Multi-Cloud Infrastructure Automation for High-Growth SaaS Platform',
    industry: 'Technology & SaaS',
    pillar: 'automation',
    serviceCategory: 'Cloud',
    challenge:
      'Fast-growing SaaS company deployed across AWS and Azure with no consistent IaC baseline. Each region had drifted from standard configuration, cloud security posture was unknown, and engineering was spending 30% of every sprint on infrastructure firefighting instead of product delivery.',
    solution: [
      'Terraform + CloudFormation IaC baseline standardized across AWS and Azure',
      'Cloud Security Posture Management (CSPM) with automated misconfiguration remediation',
      'Hybrid networking standardization with policy-driven segmentation across regions',
      'Automated config drift detection and audit pipelines running continuously',
    ],
    results: [
      { value: '70%', label: 'Less Infra Toil' },
      { value: '100%', label: 'IaC Coverage' },
      { value: '3', label: 'Cloud Regions Unified' },
      { value: '40%', label: 'Cloud Cost Reduction' },
    ],
    testimonial: {
      quote:
        'We went from "what is actually running in prod" to full IaC coverage in eight weeks. Engineering now ships features, not firefights. The CSPM findings alone paid for the engagement.',
      author: 'Priya Nair',
      role: 'VP Engineering',
    },
  },

  // ── Compliance ────────────────────────────────────────────────────────────
  {
    id: 'zero-downtime-healthcare',
    title: 'HIPAA Compliance Automation for Multi-Location Healthcare Provider',
    industry: 'Healthcare',
    pillar: 'compliance',
    serviceCategory: 'Healthcare Compliance',
    challenge:
      'Regional healthcare network with 5 clinics and 24/7 patient monitoring systems faced compounding compliance risk. Their small IT team manually reviewed access logs and segmentation policies — a process that missed gaps and consumed days ahead of every HIPAA audit cycle.',
    solution: [
      'HIPAA/HITECH automated compliance monitoring and continuous reporting',
      'Medical device network segmentation policies enforced and audited automatically',
      'Audit trail management and access control enforcement across all clinical systems',
      'Proactive anomaly detection flagging policy violations before they become audit findings',
    ],
    results: [
      { value: '99.99%', label: 'Uptime Achieved' },
      { value: '0', label: 'HIPAA Audit Findings' },
      { value: '75%', label: 'Reduced IT Firefighting' },
      { value: '3 Weeks', label: 'ROI Timeline' },
    ],
    testimonial: {
      quote:
        'VIV53 transformed us from constant crisis mode to proactive confidence. Our last HIPAA audit took two days instead of two weeks — with zero findings. Patient care has never been more reliable.',
      author: 'Dr. Lisa Martinez',
      role: 'Chief Medical Officer',
    },
  },
  {
    id: 'banking-automation',
    title: 'Continuous PCI-DSS & SOX Compliance for Regional Credit Union',
    industry: 'Banking & Finance',
    pillar: 'compliance',
    serviceCategory: 'Banking Compliance',
    challenge:
      'Mid-market credit union with 12 branches needed automated compliance across PCI-DSS, FFIEC, and SOX. Manual evidence collection created audit risk, and their 2-person IT team had no capacity to run continuous compliance checks alongside daily operations.',
    solution: [
      'Continuous PCI-DSS, FFIEC, and SOX compliance monitoring with automated evidence collection',
      'Network segmentation validation ensuring cardholder data environments stay isolated',
      'Automated reporting dashboards providing real-time compliance posture to leadership',
      'Infrastructure-as-Code for consistent, auditable deployments across all 12 branches',
    ],
    results: [
      { value: '100%', label: 'Audit Compliance' },
      { value: '90%', label: 'Faster Incident Response' },
      { value: '60%', label: 'Operational Cost Savings' },
      { value: '$0', label: 'Downtime Revenue Loss' },
    ],
    testimonial: {
      quote:
        'VIV53 gave us enterprise compliance capabilities without enterprise costs. We passed our PCI-DSS audit with zero findings and had the evidence package ready in hours, not weeks.',
      author: 'Robert Chen',
      role: 'VP of Technology',
    },
  },
  {
    id: 'manufacturing-iot-automation',
    title: 'IEC 62443 Compliance & OT-IT Isolation for Multi-Site Manufacturer',
    industry: 'Manufacturing',
    pillar: 'compliance',
    serviceCategory: 'Manufacturing Compliance',
    challenge:
      'Growing manufacturing firm with 4 production facilities faced increasing OT/IT convergence risk. Legacy infrastructure had no clear boundary between operational technology and corporate networks — a single ransomware incident could halt production. An upcoming IEC 62443 audit had no documented change control or traceability.',
    solution: [
      'IEC 62443 / NIST CSF compliance framework implementation with automated control validation',
      'OT-IT network isolation enforced across all four facilities with continuous policy monitoring',
      'Change control and traceability automation for all production environment modifications',
      'Automated runbooks for OT incident response aligned to IEC 62443 zone and conduit model',
    ],
    results: [
      { value: '95%', label: 'Less Unplanned Downtime' },
      { value: 'IEC 62443', label: 'Audit Ready' },
      { value: '40%', label: 'Maintenance Cost Reduction' },
      { value: '2 Weeks', label: 'ROI Timeline' },
    ],
    testimonial: {
      quote:
        "Production hasn't stopped since VIV53 completed the implementation. The OT-IT isolation alone closed risks we didn't even know we had. IEC 62443 audit was the smoothest in company history.",
      author: 'Jennifer Wu',
      role: 'Operations Director',
    },
  },
  {
    id: 'ai-governance-fintech',
    title: 'ISO 42001 AI Governance Framework for FinTech Platform',
    industry: 'Financial Services',
    pillar: 'compliance',
    serviceCategory: 'AI Governance',
    challenge:
      'FinTech firm deploying ML models for credit scoring and fraud detection faced board and regulatory pressure to demonstrate responsible AI practices. No governance framework existed, model decisions had no audit trail, and regulators were signaling upcoming scrutiny of bias in automated credit decisions.',
    solution: [
      'ISO 42001:2023 AIMS framework implementation and full documentation package',
      'AI risk assessment and bias monitoring pipelines integrated into model deployment workflows',
      'Model lifecycle documentation: training data provenance, version control, and retirement policies',
      'Audit-ready reporting for board, internal risk, and external regulatory review',
    ],
    results: [
      { value: 'Certified', label: 'ISO 42001:2023' },
      { value: '100%', label: 'Model Audit Coverage' },
      { value: '0', label: 'Regulatory Findings' },
      { value: '3 Months', label: 'To Certification' },
    ],
    testimonial: {
      quote:
        'Regulators asked us to demonstrate AI accountability and we had a complete answer. VIV53 built the governance framework our board was asking for and our regulators now point to as a model.',
      author: 'Carlos Ibarra',
      role: 'Chief Risk Officer',
    },
  },
]
