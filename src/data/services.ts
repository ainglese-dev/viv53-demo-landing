import {
  Wifi, Network, Shield, Fingerprint, ShieldCheck,
  Server, Cpu, Router, Cloud, History,
  BrainCircuit, Heart, Factory, Landmark,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface ServiceSubDomain {
  id: string
  title: string
  icon: LucideIcon
  items: string[]
}

export interface ServiceCategory {
  id: string
  title: string
  icon: LucideIcon
  description: string
  items?: string[]
  subDomains?: ServiceSubDomain[]
}

export type PillarId = 'automation' | 'compliance'

export interface ServicePillar {
  id: PillarId
  label: string
  tagline: string
  categories: ServiceCategory[]
}

export const servicePillars: ServicePillar[] = [
  {
    id: 'automation',
    label: 'Automation & AI',
    tagline: 'Intelligent automation across every layer of your infrastructure',
    categories: [
      {
        id: 'wireless',
        title: 'Wireless',
        icon: Wifi,
        description: 'AI-driven Day-2 operations for wireless networks — continuous monitoring, config drift detection, and RF health snapshots to keep your wireless infrastructure performing at peak.',
        items: [
          'Day-2 Monitoring & Alerting',
          'Config Audit & Drift Detection',
          'RF Health Snapshots',
        ],
      },
      {
        id: 'campus',
        title: 'Campus',
        icon: Network,
        description: 'Automated assurance and policy lifecycle management for campus networks. Reduce manual toil and enforce consistent network policy at scale.',
        items: [
          'Network Assurance',
          'Policy Automation',
          'Change Management',
        ],
      },
      {
        id: 'security',
        title: 'Security',
        icon: Shield,
        description: 'Automated security operations across NAC and Firewall domains — from device profiling and posture compliance to rule optimization and incident response.',
        subDomains: [
          {
            id: 'nac',
            title: 'NAC',
            icon: Fingerprint,
            items: [
              'Policy Lifecycle',
              'Posture & Compliance',
              'Device Profiling',
            ],
          },
          {
            id: 'firewall',
            title: 'Firewall',
            icon: ShieldCheck,
            items: [
              'Rule Optimization',
              'Config Audit & Baseline',
              'Incident Response Automation',
            ],
          },
        ],
      },
      {
        id: 'datacenter',
        title: 'Data Center',
        icon: Server,
        description: 'Full-stack data center automation — from compute provisioning and firmware lifecycle to fabric automation and policy-driven network segmentation.',
        subDomains: [
          {
            id: 'compute',
            title: 'Compute',
            icon: Cpu,
            items: [
              'Server Provisioning',
              'Firmware Lifecycle',
              'Health Monitoring',
            ],
          },
          {
            id: 'dc-networking',
            title: 'Networking',
            icon: Router,
            items: [
              'Fabric Automation',
              'Policy-Driven Segmentation',
              'Fabric Assurance & Validation',
            ],
          },
        ],
      },
      {
        id: 'cloud',
        title: 'Cloud',
        icon: Cloud,
        description: 'Multi-cloud automation and governance across AWS, Azure, and GCP. Infrastructure-as-Code, hybrid networking, and continuous cloud security posture management.',
        items: [
          'AWS / Azure / GCP',
          'IaC (Terraform / CloudFormation)',
          'Hybrid & Multi-Cloud Networking',
          'Cloud Security Posture (CSPM)',
        ],
      },
      {
        id: 'legacy',
        title: 'Legacy Migration',
        icon: History,
        description: 'AI-assisted migration from legacy protocols (SONET, SDH, TDM, Frame Relay, ATM) with automated dependency mapping, risk scoring, and runbook generation.',
        items: [
          'SONET / SDH / TDM / FR / ATM',
          'AI Config Parsing & Dependency Mapping',
          'Impact Risk Scoring & Prediction',
          'Automated Runbook Generation',
          'Pre/Post Change Validation',
          'Circuit Inventory & Cutover Planning',
        ],
      },
    ],
  },
  {
    id: 'compliance',
    label: 'Compliance',
    tagline: 'Regulatory compliance automation across all major frameworks and industries',
    categories: [
      {
        id: 'ai-governance',
        title: 'AI Governance',
        icon: BrainCircuit,
        description: 'Structured AI governance aligned to ISO 42001:2023 — covering risk assessment, bias monitoring, and full AI lifecycle documentation for responsible AI deployment.',
        items: [
          'ISO 42001:2023 (AIMS)',
          'Risk Assessment & Bias Monitoring',
          'AI Lifecycle Documentation',
        ],
      },
      {
        id: 'healthcare',
        title: 'Healthcare',
        icon: Heart,
        description: 'HIPAA and HITECH compliance automation for healthcare networks — medical device segmentation, audit trail management, and access control enforcement.',
        items: [
          'HIPAA / HITECH',
          'Medical Device Segmentation',
          'Audit Trail & Access Control',
        ],
      },
      {
        id: 'manufacturing',
        title: 'Manufacturing',
        icon: Factory,
        description: 'IEC 62443 and NIST CSF compliance for OT/IT environments — network isolation between operational and corporate infrastructure, with full change traceability.',
        items: [
          'IEC 62443 / NIST CSF',
          'OT-IT Network Isolation',
          'Change Control & Traceability',
        ],
      },
      {
        id: 'banking',
        title: 'Banking',
        icon: Landmark,
        description: 'Continuous compliance for financial institutions across PCI-DSS, FFIEC, and SOX — network segmentation validation and automated evidence collection for audits.',
        items: [
          'PCI-DSS / FFIEC / SOX',
          'Network Segmentation Validation',
          'Continuous Compliance Reporting',
        ],
      },
    ],
  },
]
