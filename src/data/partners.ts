// Import local PNG logos
import awsLogo from '@/assets/images/partners/aws.png'
import azureLogo from '@/assets/images/partners/azure.png'
import microsoftLogo from '@/assets/images/partners/microsoft.png'

export interface Partner {
  name: string
  logo: string
  description: string
}

export const partners: Partner[] = [
  {
    name: 'Cisco',
    logo: 'https://cdn.simpleicons.org/cisco/1BA0D7',
    description: 'Leading networking and cybersecurity solutions for enterprise infrastructure',
  },
  {
    name: 'VMware',
    logo: 'https://cdn.simpleicons.org/vmware/607078',
    description: 'Virtualization and cloud computing infrastructure solutions',
  },
  {
    name: 'Red Hat',
    logo: 'https://cdn.simpleicons.org/redhat/EE0000',
    description: 'Open source enterprise software and cloud solutions',
  },
  {
    name: 'Microsoft',
    logo: microsoftLogo,
    description: 'Cloud services, productivity software, and enterprise solutions',
  },
  {
    name: 'Ubuntu',
    logo: 'https://cdn.simpleicons.org/ubuntu/E95420',
    description: 'Leading Linux distribution for servers and development',
  },
  {
    name: 'AWS',
    logo: awsLogo,
    description: 'Amazon Web Services - comprehensive cloud computing platform',
  },
  {
    name: 'Microsoft Azure',
    logo: azureLogo,
    description: "Microsoft's cloud platform for building and deploying applications",
  },
  {
    name: 'Google Cloud',
    logo: 'https://cdn.simpleicons.org/googlecloud/4285F4',
    description: "Google's cloud computing services and infrastructure",
  },
]
